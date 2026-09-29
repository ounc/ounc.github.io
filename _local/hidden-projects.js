// Local-only portfolio records. Not included in the public site build.
const LOCAL_ONLY_PROJECTS = [
  {
    id: 'multimodal-draft-spatial-ai',
    icon: '📐',
    type: 'enterprise',
    github: null,
    demo: null,
    articleId: 'multimodal-spatial-ai-post',
    badge: {
      zh: '企业落地 · 新加坡 PUR',
      en: 'Enterprise IP · PUR Singapore'
    },
    tech: ['Qwen-VL', 'DPO', 'Scene Graph', 'NetworkX', 'vLLM', 'AWQ-4bit'],
    zh: {
      title: 'multimodal-draft-spatial-ai',
      description: '面向 A0/A1 超高分辨率工程图纸的多模态智能解析与空间拓扑图谱系统。设计动态分幅算法融合矢量与图像特征，微调 Qwen-VL 实现房间与消防通道空间实体的精准定位抽取；自动构建 Scene Graph 空间拓扑图并对接 NetworkX 进行疏散距离合规核验，采用 DPO 规范输出并基于 vLLM 4-bit 量化实现毫秒级交互反馈。'
    },
    en: {
      title: 'multimodal-draft-spatial-ai',
      description: 'An end-to-end multimodal spatial parsing and Scene Graph system for A0/A1 architectural drafts. Features dynamic patch sampling, fine-tuned Qwen-VL for bounding-box room extraction, and automated Scene Graph construction with NetworkX pathfinding for code-compliant evacuation checks, optimized via DPO and 4-bit vLLM.'
    }
  },
  {
    id: 'llm-rag-building-code-assistant',
    icon: '🏛️',
    type: 'enterprise',
    github: null,
    demo: null,
    badge: {
      zh: '商业系统 · 成果脱敏',
      en: 'Enterprise System · De-identified'
    },
    tech: ['LLM', 'RAG', 'Vector-DB', 'LangChain', 'Python', 'FastAPI'],
    zh: {
      title: 'llm-rag-building-code-assistant',
      description: '基于大语言模型与多源 RAG 检索增强架构的数字化工程辅助工具。构建垂直领域建筑设计规范、消防强制性条文与历史工程语料的混合索引数据库，提供秒级规范智能问答与工程设计合规性自动化初审，大幅减轻一线工程师的多源文献检索认知负荷。'
    },
    en: {
      title: 'llm-rag-building-code-assistant',
      description: 'An LLM-powered cognitive engineering assistant integrating multi-source Retrieval-Augmented Generation (RAG). Indexes complex national building codes and architectural standards for automated compliance pre-checks, significantly reducing cognitive load in multi-document retrieval.'
    }
  },
  {
    id: 'automated-boq-pipeline',
    icon: '📊',
    type: 'enterprise',
    github: null,
    demo: null,
    badge: {
      zh: '工业工程 · 中建八局 (CSCEC)',
      en: 'Industrial Engineering · CSCEC'
    },
    tech: ['Python', 'BIM / CAD Data', 'Data Extraction', 'ETL Pipeline', 'SQL'],
    zh: {
      title: 'automated-boq-pipeline',
      description: '结合中建八局 4 年大型工程全周期成本管控经验研发的工程量清单 (BOQ) 数字化处理流水线。对接 CAD/BIM 数字化图纸与工程数据库，将传统手工分项算量、定额套用与成本偏差分析升级为标准化半自动协同工作流，显著提升预算编制准确率与施工规划效率。'
    },
    en: {
      title: 'automated-boq-pipeline',
      description: 'A digital Bill of Quantities (BOQ) automation pipeline synthesized from 4 years of CSCEC full-cycle construction commerce practice. Connects CAD/BIM model data to automated quantity surveying and cost-variance analysis pipelines, streamlining budgeting transparency and collaborative estimation.'
    }
  },
  {
    id: 'multimodal-pv-defect-detection',
    icon: '☀️',
    type: 'industrial',
    github: null,
    demo: null,
    badge: {
      zh: '工业视觉 · 算法脱敏',
      en: 'Industrial Vision · De-identified'
    },
    tech: ['YOLOv5', 'RGB-Thermal', 'Multimodal', 'Adaptive Illumination', 'OpenCV'],
    zh: {
      title: 'multimodal-pv-defect-detection',
      description: '结合热成像 (Thermal) 与可见光 (RGB) 图像的双流多模态光伏面板缺陷智能检测模型。引入自适应环境光照补偿算法与特征对齐网络，有效克服野外强光反射与阴影遮挡干扰，精准定位光伏隐裂、热斑与表面破损，保障工业巡检鲁棒性。'
    },
    en: {
      title: 'multimodal-pv-defect-detection',
      description: 'A dual-stream multimodal solar panel defect detection model integrating thermal imaging and RGB sensor inputs. Incorporates adaptive illumination compensation to mitigate outdoor glare and shadow interferences, reliably identifying micro-cracks, hotspots, and physical damage.'
    }
  }
];
