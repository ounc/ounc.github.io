"""Minimal read and append bridge for the Notion page used by this project."""

from __future__ import annotations

import json
import os
import sys
import urllib.error
import urllib.parse
import urllib.request
from typing import Any


NOTION_API_BASE = "https://api.notion.com/v1"
NOTION_VERSION = "2022-06-28"
PAGE_ID = "3dca5c3e-a142-81ae-9d1d-c80f928f3d16"


def notion_get(path: str, token: str, query: dict[str, str] | None = None) -> dict[str, Any]:
    url = f"{NOTION_API_BASE}/{path.lstrip('/')}"
    if query:
        url = f"{url}?{urllib.parse.urlencode(query)}"

    request = urllib.request.Request(
        url,
        headers={
            "Authorization": f"Bearer {token}",
            "Notion-Version": NOTION_VERSION,
            "Content-Type": "application/json",
        },
        method="GET",
    )
    try:
        with urllib.request.urlopen(request, timeout=20) as response:
            return json.load(response)
    except urllib.error.HTTPError as error:
        if error.code in (401, 403):
            raise RuntimeError("Notion 页面无权限访问") from None
        raise RuntimeError(f"Notion API 请求失败（HTTP {error.code}）") from None
    except (urllib.error.URLError, TimeoutError, json.JSONDecodeError):
        raise RuntimeError("无法连接或解析 Notion API 响应") from None


def notion_append(path: str, token: str, payload: dict[str, Any]) -> dict[str, Any]:
    url = f"{NOTION_API_BASE}/{path.lstrip('/')}"
    request = urllib.request.Request(
        url,
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {token}",
            "Notion-Version": NOTION_VERSION,
            "Content-Type": "application/json",
        },
        method="PATCH",
    )
    try:
        with urllib.request.urlopen(request, timeout=20) as response:
            return json.load(response)
    except urllib.error.HTTPError as error:
        if error.code in (401, 403):
            raise RuntimeError("Notion 页面无写入权限") from None
        raise RuntimeError(f"Notion API 请求失败（HTTP {error.code}）") from None
    except (urllib.error.URLError, TimeoutError, json.JSONDecodeError):
        raise RuntimeError("无法连接或解析 Notion API 响应") from None


def extract_rich_text(items: list[dict[str, Any]]) -> str:
    return "".join(item.get("plain_text", "") for item in items)


def page_title(page: dict[str, Any]) -> str:
    for property_value in page.get("properties", {}).values():
        if property_value.get("type") == "title":
            return extract_rich_text(property_value.get("title", []))
    return ""


def block_text(block: dict[str, Any]) -> str:
    block_type = block.get("type")
    if not block_type:
        return ""
    block_value = block.get(block_type, {})
    return extract_rich_text(block_value.get("rich_text", []))


def page_body(page_id: str, token: str) -> str:
    parts: list[str] = []
    cursor: str | None = None
    while True:
        query = {"page_size": "100"}
        if cursor:
            query["start_cursor"] = cursor
        result = notion_get(f"blocks/{page_id}/children", token, query)
        parts.extend(block_text(block) for block in result.get("results", []))
        if not result.get("has_more"):
            break
        cursor = result.get("next_cursor")
        if not cursor:
            break
    return " ".join(part for part in parts if part).strip()


def read_page(token: str) -> None:
    page = notion_get(f"pages/{PAGE_ID}", token)
    title = page_title(page) or "（无标题）"
    edited_time = page.get("last_edited_time", "未知")
    summary = page_body(PAGE_ID, token)[:500] or "（正文为空）"

    print(f"页面标题: {title}")
    print("页面是否可访问: 是")
    print(f"最后编辑时间: {edited_time}")
    print(f"正文摘要: {summary}")


def append_status(token: str, content: str) -> None:
    notion_append(
        f"blocks/{PAGE_ID}/children",
        token,
        {
            "children": [
                {
                    "object": "block",
                    "type": "paragraph",
                    "paragraph": {
                        "rich_text": [
                            {
                                "type": "text",
                                "text": {"content": content},
                            }
                        ]
                    },
                }
            ]
        },
    )
    print("追加成功: 是")


def main() -> int:
    command = sys.argv[1] if len(sys.argv) > 1 else ""
    if command == "read_page" and len(sys.argv) == 2:
        content = None
    elif command == "append_status" and len(sys.argv) <= 3:
        content = sys.argv[2] if len(sys.argv) == 3 else "[GC Bridge Test] Write access verified."
    else:
        print(
            "用法: py -3 tools/notion_bridge.py read_page | "
            'append_status "内容"',
            file=sys.stderr,
        )
        return 2

    token = os.environ.get("NOTION_TOKEN")
    if not token:
        print("未设置 NOTION_TOKEN 环境变量", file=sys.stderr)
        return 2

    try:
        if command == "read_page":
            read_page(token)
        else:
            append_status(token, content or "")
    except RuntimeError as error:
        print(str(error), file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
