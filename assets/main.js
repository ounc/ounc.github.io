/* ==========================================
   ounc.github.io - Interactive Frontend Logic
   ========================================== */

// --- 1. MOCK DATA: Projects & Blog Posts ---

const PROJECTS = [
  {
    id: 'gocache-sync',
    title: 'gocache-sync',
    description: '使用 Go 编写的分布式一致性 KV 缓存。基于 Raft 协议实现高可用与强一致性，支持 LRU 淘汰机制与 HTTP/gRPC 双重协议接入。在弱网络环境下具备优秀的自动选主和数据恢复能力。',
    tech: ['Go', 'Raft', 'gRPC', 'Protobuf'],
    icon: '💾',
    github: 'https://github.com/ounc/gocache-sync',
    demo: '#'
  },
  {
    id: 'llm-agent-orchestrator',
    title: 'llm-orchestrator',
    description: '面向多 Agent 协同的微秒级任务分发与编排框架。基于协程并发模型和事件驱动架构，支持动态有向无环图 (DAG) 依赖解析，适用于大规模 AI Agent 自动化流水线。',
    tech: ['Go', 'Python', 'LLM', 'Event-Driven'],
    icon: '🤖',
    github: 'https://github.com/ounc/llm-orchestrator',
    demo: '#'
  },
  {
    id: 'fast-rpc',
    title: 'fast-rpc',
    description: '基于 Netty 的高性能 RPC 框架。支持自定义二进制协议、基于 ZooKeeper 的服务注册与发现、一致性哈希负载均衡以及多轮编解码器，单机吞吐量达 10w+ QPS。',
    tech: ['Java', 'Netty', 'ZooKeeper', 'Serialization'],
    icon: '⚡',
    github: 'https://github.com/ounc/fast-rpc',
    demo: '#'
  },
  {
    id: 'prometheus-scaler',
    title: 'k8s-metrics-scaler',
    description: 'Kubernetes 自定义指标自动弹性伸缩控制器。订阅 Prometheus 的慢 SQL 或队列积压指标，支持基于线性回归预测的超前扩容，避免突发流量下的系统雪崩。',
    tech: ['Go', 'Kubernetes', 'Prometheus', 'Control-Loop'],
    icon: '☸️',
    github: 'https://github.com/ounc/k8s-metrics-scaler',
    demo: '#'
  }
];

const BLOG_POSTS = [
  {
    id: 'go-gc-tuning',
    title: '深入浅出 Go 垃圾回收与内存分配器调优',
    category: 'backend',
    categoryName: '后端系统',
    date: '2026-07-15',
    description: '本文深入拆解了 Go 运行时基于三色标记法的并发垃圾回收机制，并结合生产环境中遇到的 Stop-The-World (STW) 延迟抖动问题，分享了 GOGC 调优与内存对齐的实战经验。',
    content: `
      <p>Go 语言的并发垃圾回收器（Garbage Collector）经历了多次重大迭代，当前基于<strong>无分代、并发、三色标记清除</strong>算法。由于其设计高度简化，许多开发者在编写高性能代码时常常忽略其底层的资源开销。本文将通过理论与线上案例，探讨 Go 内存分配与 GC 调优。</p>
      
      <h3>一、Go 内存分配机制：TCMalloc 变体</h3>
      <p>Go 的内存分配器设计直接借鉴了 TCMalloc 的多级缓存思想。分配器将对象按大小分为三类：</p>
      <ul>
        <li><strong>微小对象 (Tiny, < 16B)</strong>：使用 tiny allocator 合并分配在同一个 16B 的内存块中。</li>
        <li><strong>小对象 (Small, 16B ~ 32KB)</strong>：分配在对应的 mspan 规格链表上。每个 P（处理器）绑定了本地 mcache，无锁分配，性能极高。</li>
        <li><strong>大对象 (Large, > 32KB)</strong>：直接绕过多级缓存，在 mheap 上进行大页级分配。</li>
      </ul>
      <blockquote>
        <p><strong>避坑指南：</strong> 在高并发场景下，避免频繁申请大对象。这不仅会导致 mcache 锁竞争转移到 mheap，还会触发 Go 运行时的主动 GC 协助（Mark Assist），拉高请求响应时长。</p>
      </blockquote>

      <h3>二、三色标记与写屏障</h3>
      <p>Go 使用三色标记法实现并发标记：</p>
      <pre><code>// 标记过程示意
1. 白色：未搜索的对象（垃圾回收开始时全部为白色）
2. 灰色：已搜索但其引用的对象未搜索（等待入队）
3. 黑色：已搜索且其引用的对象也已搜索（活跃对象）</code></pre>
      <p>为了保证并发标记的正确性，Go 在编译期插入了<strong>混合写屏障 (Hybrid Write Barrier)</strong>。写屏障的作用是拦截指针修改，确保黑色对象不会指向白色对象，除非该白色对象被标记为灰色。写屏障的启用会导致 CPU 额外的指令开销，但在标记阶段这是为了极短 STW 所必须做出的权衡。</p>

      <h3>三、生产环境 GC 调优技巧</h3>
      <p>在线上高吞吐量 API 服务中，我们遇到了 GC 占用了 15% CPU 时间的问题。通过以下两个步骤，我们成功将其降至 3% 以下：</p>
      <ol>
        <li><strong>调整 GOGC 参数</strong>：GOGC 控制着下一次 GC 触发的堆增长比例，默认是 100%。我们将其调整为 200~300%，合理利用容器充裕的空闲物理内存，显著降低了 GC 频次。</li>
        <li><strong>使用 sync.Pool 复用临时对象</strong>：通过 pool 复用频繁创建的 JSON 序列化 Context 和 byte 数组，极大减少了逃逸到堆上的对象数量，减轻标记压力。</li>
      </ol>
      <p>总结来说，优化 Go 内存性能的核心法则是：<strong>尽量在栈上分配，减少指针逃逸，充分复用堆内存，合理调配 GOGC 参数。</strong></p>
    `
  },
  {
    id: 'agent-orch-engine',
    title: '构建微秒级 LLM 智能体编排引擎的工程挑战',
    category: 'ai',
    categoryName: 'AI工程',
    date: '2026-06-28',
    description: '在大模型多 Agent 协同链路中，延迟是制约体验的致命瓶颈。本文分享了我们如何采用事件驱动架构和并发依赖解析算法，将 Agent 调度框架的调度开销压降到微秒级的工程实践。',
    content: `
      <p>随着 AI 应用从简单的“单轮问答”走向“自主编排与复杂推理”，多 Agent 协同系统（如 AutoGPT, CrewAI 等）正逐渐成为核心交付模式。然而，由于这些框架在开发之初偏向 Python 生态与脚本化，在面临工业级并发和低延迟要求时，系统调度的开销往往高达数百毫秒。</p>
      
      <h3>一、为什么 Python 开发的编排框架不够快？</h3>
      <p>很多开源编排框架的底层实现采用了同步阻塞或低效率的进程/线程模型，主要瓶颈体现在：</p>
      <ul>
        <li><strong>Python GIL（全局解释器锁）</strong>限制了多线程在 CPU 密集任务中的并行能力。</li>
        <li><strong>链式调度延迟</strong>：各 Agent 节点串行执行，缺少细粒度的 DAG（有向无环图）并行计算。</li>
        <li><strong>状态存储读写开销</strong>：Agent 之间的上下文传递通过重型的外部数据库（如 PostgreSQL 或 Redis）同步读写，导致网络 I/O 耗时累加。</li>
      </ul>

      <h3>二、微秒级编排的设计要点</h3>
      <p>为了解决高延迟，我们用 <strong>Go 语言</strong> 重构了 Agent 编排调度核心（即 gocache-sync / llm-orchestrator 的核心原型）：</p>
      
      <h4>1. 基于无锁信道与协程模型的事件总线</h4>
      <p>Agent 之间的交互被建模为生产-消费队列。采用无锁环形缓冲区（Lock-free Ring Buffer）处理 Agent 产生的中间状态事件，将线程切换和锁的争用限制在极小范围内。</p>

      <h4>2. 动态 DAG 拓扑分析与并行执行</h4>
      <p>在任务分发前，引擎将任务解析为一棵 DAG 依赖树。对于没有前置依赖的 Agent 节点，引擎采用 Goroutine 并行拉起，实现最大化物理并发。当某个 Agent 计算完毕后，立即向下游发送完成信号，解除依赖。</p>
      
      <pre><code>// 伪代码：并发调度 DAG 节点
func (engine *Orchestrator) executeNode(node *DAGNode) {
    // 1. 等待前置依赖解除
    node.WaitForDependencies()
    
    // 2. 调用 Agent 业务逻辑 (如请求 LLM)
    result := node.Agent.Run(node.Context)
    
    // 3. 将结果输出并通知所有下游节点
    node.NotifySuccessors(result)
}</code></pre>

      <h3>三、落地收益与思考</h3>
      <p>通过用 Go 和内存态状态机重构编排层，框架本身的平均调度开销从 <strong>320ms 降至 0.8ms (800微秒)</strong>。这保证了在面对 LLM 极快的流式输出时，调度引擎不会成为阻碍瓶颈，也为高频量化交易、实时客户接待等苛刻场景铺平了道路。</p>
    `
  },
  {
    id: 'raft-kv-database',
    title: '基于 Raft 共识协议的分布式 Key-Value 数据库设计与实现',
    category: 'architecture',
    categoryName: '系统架构',
    date: '2026-05-18',
    description: '在分布式一致性领域，Raft 几乎成了高可用的代名词。本文从零开始实现一个 Raft 一致性算法模块，探讨分布式数据库在面对网络分区、脑裂和日志压缩时的应对策略。',
    content: `
      <p>在设计分布式后端系统时，如何解决“单点故障”和保证“数据强一致性”是终极命题。本文将回顾我们从零实现分布式缓存 gocache-sync 时所依赖的核心协议——<strong>Raft 共识算法</strong>。</p>
      
      <h3>一、Raft 核心状态机划分</h3>
      <p>Raft 协议将复杂的共识问题拆解为三个核心子问题：<strong>领导者选举 (Leader Election)</strong>、<strong>日志复制 (Log Replication)</strong> 和 <strong>安全性 (Safety)</strong>。节点在运行期处于以下三者之一的身份：</p>
      <ul>
        <li><strong>Leader</strong>：负责处理客户端的所有写请求，并同步日志给 Follower。</li>
        <li><strong>Follower</strong>：被动接收 Leader 的日志复制 RPC 以及心跳，若超时未收到则转为 Candidate。</li>
        <li><strong>Candidate</strong>：主动发起投票，争取成为新的 Leader。</li>
      </ul>
      <blockquote>
        <p><strong>核心精髓：</strong> 节点间的随机化心跳超时时间是防止“两个 Candidate 分裂选票导致死锁”的绝妙设计。一般设在 150ms ~ 300ms 之间。</p>
      </blockquote>

      <h3>二、网络分区的脑裂挑战</h3>
      <p>当集群发生物理分裂（例如 5 个节点分裂为 A, B 和 C, D, E 两组）时，会出现网络分区：</p>
      <pre><code>[Client] -> (Leader A, Follower B)  // 分区一：无法达成多数派写入
--- 网络断开 ---
(Candidate C, Follower D, Follower E) // 分区二：成功选出新 Leader C</code></pre>
      <p>在此种状态下，分区一虽然依然有旧的 Leader A，但因为它无法满足“过半数 (Majority, 即 >=3 节点) 确认”，所有客户端的写入请求都会处于等待或被拒绝状态。分区二通过选举产生新 Leader C，并且可以成功确认日志。当网络恢复、分区消除后，Leader A 收到 Term 更高的 Leader C 心跳，会自动降级为 Follower，并以 C 的日志为准覆盖本地未提交日志，从而优雅解决脑裂。</p>

      <h3>三、日志压缩与快照 (Snapshot)</h3>
      <p>随着系统长时间运转，操作日志（WAL）会无限膨胀，不仅吞噬硬盘，也会导致节点重启恢复极慢。我们实现了<strong>快照压缩机制</strong>：</p>
      <ol>
        <li>当日志大小达到阀值（如 64MB），Raft 触发快照，将内存中的当前 KV 数据写入持久化快照文件。</li>
        <li>清空该快照点之前的所有日志项。</li>
        <li>当新节点加入或落后太多的 Follower 赶不上进度时，Leader 直接调用 InstallSnapshot RPC 将整份快照发送给它，极大提升了网络同步效率。</li>
      </ol>
      <p>通过这些严苛的一致性设计，系统最终得以在极端硬件断电、网络严重丢包的生产环境下，依然做到 0 数据丢失和秒级自愈。</p>
    `
  },
  {
    id: 'k8s-canary-release',
    title: '云原生环境下的全链路灰度发布方案设计',
    category: 'architecture',
    categoryName: '系统架构',
    date: '2026-04-05',
    description: '在微服务架构中，一次迭代往往涉及上下游多个服务。如何在不影响线上的情况下实现端到端的一键灰度？本文提供了一套结合 Service Mesh 和 HTTP Header 传递的端到端灰度架构设计。',
    content: `
      <p>对于单体应用，灰度发布非常直接：部署一台新版服务器，分流 10% 用户过去即可。然而，在以 Kubernetes + Spring Cloud / Go Micro 为核心的分布式微服务架构下，调用链错综复杂。如果仅仅在网关处做分流，后续服务调用依然可能走向老版本，导致灰度策略失效。我们需要的是<strong>全链路灰度</strong>。</p>
      
      <h3>一、全链路灰度的核心诉求</h3>
      <p>我们的设计目标是：当用户发起请求时，网关根据请求的特征（如 UID、地域、灰度标签）给请求染上“特定颜色”（如 <code>x-gray-tag: v2</code>）。该标识在后续的 RPC、HTTP 乃至消息队列调用中<strong>透传</strong>，确保流量精确命中各微服务的灰度版本。</p>

      <h3>二、技术选型：基于 Service Mesh</h3>
      <p>如果让研发人员在每个业务服务的代码里去处理流量转发，会造成极大的代码侵入。我们采用了基于 <strong>Istio + Envoy</strong> 的服务网格方案：</p>
      <ul>
        <li><strong>数据面 Envoy</strong> 负责流量劫持与动态路由。</li>
        <li><strong>控制面 Istio</strong> 下发 VirtualService 和 DestinationRule 规则。</li>
      </ul>
      <p>每个 Kubernetes Deployment 都分为两个 Subset：<code>stable</code>（稳定版）和 <code>canary</code>（灰度版）。Istio 路由规则定义如下：</p>
      <pre><code>apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
spec:
  hosts:
  - user-service
  http:
  - match:
    - headers:
        x-gray-tag:
          exact: v2
    route:
    - destination:
        host: user-service
        subset: canary
  - route:
    - destination:
        host: user-service
        subset: stable</code></pre>

      <h3>三、灰度上下文如何在链路中传递？</h3>
      <p>即便有 Envoy，业务代码仍扮演着重要的一环。Envoy 劫持的是网关与容器间的流量，但如果是服务内部异步拉起 Goroutine 或发送 HTTP 请求，底层的 Trace Header 必须显式传递。</p>
      <p>在 Go 中，我们通过封装 <strong>Context</strong> 将 Request Header 绑定在上下文里。在调用其他微服务的 client SDK 中，自动读取 Context 中的 <code>x-gray-tag</code> 并注入到新请求的 Header 中。对于消息队列（如 Kafka），同样将 Tag 写入 Message Attributes 中，消费者消费时根据属性动态部署灰度消费群组。</p>
      <p>通过这套机制，我们的线上发布故障率降低了 <strong>90%</strong>，所有新功能上线都可以通过真实的生产环境小规模灰度用户进行验证，极大地提升了系统的高可用信心。</p>
    `
  }
];

// --- 2. INTERACTIVE CANVAS BACKGROUND (Warm Sunset Grid & Particles) ---

class CanvasBackground {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.animationFrameId = null;
    this.maxParticles = 55;
    this.connectionDistance = 140;

    this.init();
    this.animate();
    window.addEventListener('resize', () => this.resize());
  }

  init() {
    this.resize();
    this.particles = [];
    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 3.5 + 1.5,
        color: Math.random() > 0.5 ? 'rgba(255, 111, 89, 0.4)' : 'rgba(255, 159, 67, 0.35)'
      });
    }
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw grid background first
    this.drawGrid();

    // Update and draw particles
    this.particles.forEach((p, idx) => {
      p.x += p.vx;
      p.y += p.vy;

      // Boundary check
      if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.fill();

      // Connect near particles
      for (let j = idx + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.connectionDistance) {
          const alpha = (1 - dist / this.connectionDistance) * 0.12;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(255, 111, 89, ${alpha})`;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }
    });

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  drawGrid() {
    const size = 60;
    this.ctx.strokeStyle = 'rgba(255, 111, 89, 0.025)';
    this.ctx.lineWidth = 0.5;

    for (let x = 0; x < this.canvas.width; x += size) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, this.canvas.height);
      this.ctx.stroke();
    }

    for (let y = 0; y < this.canvas.height; y += size) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(this.canvas.width, y);
      this.ctx.stroke();
    }
  }
}

// --- 3. TYPEWRITER EFFECT ---

class Typewriter {
  constructor(elementId, texts, typeSpeed = 100, eraseSpeed = 50, delay = 2000) {
    this.element = document.getElementById(elementId);
    if (!this.element) return;
    this.texts = texts;
    this.typeSpeed = typeSpeed;
    this.eraseSpeed = eraseSpeed;
    this.delay = delay;
    this.textIdx = 0;
    this.charIdx = 0;
    this.isDeleting = false;

    this.tick();
  }

  tick() {
    const currentText = this.texts[this.textIdx];
    let displayText = '';

    if (this.isDeleting) {
      displayText = currentText.substring(0, this.charIdx - 1);
      this.charIdx--;
    } else {
      displayText = currentText.substring(0, this.charIdx + 1);
      this.charIdx++;
    }

    this.element.textContent = displayText;

    let nextSpeed = this.isDeleting ? this.eraseSpeed : this.typeSpeed;

    if (!this.isDeleting && this.charIdx === currentText.length) {
      this.isDeleting = true;
      nextSpeed = this.delay; // Pause at full string
    } else if (this.isDeleting && this.charIdx === 0) {
      this.isDeleting = false;
      this.textIdx = (this.textIdx + 1) % this.texts.length;
      nextSpeed = 500; // Pause before typing new word
    }

    setTimeout(() => this.tick(), nextSpeed);
  }
}

// --- 4. RENDERERS: Blog & Projects ---

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(p => `
    <article class="card fade-in" id="project-card-${p.id}">
      <div class="project-image">
        <div class="project-icon-wrapper">${p.icon}</div>
      </div>
      <div class="card-content">
        <h3 class="card-title">${p.title}</h3>
        <p class="card-description">${p.description}</p>
        <div class="project-tech">
          ${p.tech.map(t => `<span>${t}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${p.github}" target="_blank" class="project-link" aria-label="查看 ${p.title} 源代码">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            Code
          </a>
          <a href="${p.demo}" class="project-link" aria-label="查看 ${p.title} 在线演示">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            Demo
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

function renderBlogPosts(filterCategory = 'all') {
  const grid = document.getElementById('blog-grid');
  if (!grid) return;

  const filtered = filterCategory === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === filterCategory);

  grid.innerHTML = filtered.map(post => `
    <article class="card post-card fade-in" data-id="${post.id}" id="blog-card-${post.id}">
      <div class="card-content">
        <div class="card-meta">
          <span class="card-tag">${post.categoryName}</span>
          <span class="card-date">${post.date}</span>
        </div>
        <h3 class="card-title">${post.title}</h3>
        <p class="card-description">${post.description}</p>
        <div class="card-footer">
          <span class="read-more">
            阅读全文
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </span>
        </div>
      </div>
    </article>
  `).join('');

  // Re-attach card click listeners
  document.querySelectorAll('.post-card').forEach(card => {
    card.addEventListener('click', () => {
      const postId = card.getAttribute('data-id');
      openPostReader(postId);
    });
  });
}

// --- 5. IMMERSIVE ARTICLE READER CONTROL ---

function openPostReader(postId) {
  const post = BLOG_POSTS.find(p => p.id === postId);
  if (!post) return;

  const overlay = document.getElementById('post-reader');
  const title = document.getElementById('reader-title');
  const date = document.getElementById('reader-date');
  const tag = document.getElementById('reader-tag');
  const content = document.getElementById('reader-content');
  const progress = document.getElementById('reader-progress');

  title.textContent = post.title;
  date.textContent = post.date;
  tag.textContent = post.categoryName;
  content.innerHTML = post.content;
  progress.style.width = '0%';

  overlay.style.display = 'block';
  setTimeout(() => {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock main scroll
  }, 10);

  // Setup scroll listener for reading progress
  overlay.onscroll = () => {
    const scrollHeight = overlay.scrollHeight - overlay.clientHeight;
    if (scrollHeight > 0) {
      const percentage = (overlay.scrollTop / scrollHeight) * 100;
      progress.style.width = `${percentage}%`;
    }
  };
}

function closePostReader() {
  const overlay = document.getElementById('post-reader');
  overlay.classList.remove('active');
  document.body.style.overflow = ''; // Unlock main scroll
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 300);
}

// --- 6. GUESTBOOK / COMMENTS (LocalStorage) ---

const MOCK_COMMENTS = [
  { nickname: 'GopherBoy', content: '网页排版真舒服，暖色调在冷冰冰的极客主页里确实有温度。催更你的 Raft 实践文！', date: '2026-07-28 10:24' },
  { nickname: 'ArchMaster', content: '对 Go 的 GC 分析很到位，我们线上也在通过微调 GOGC 缓解瞬间 STW，期待更多深度文章。', date: '2026-07-29 16:45' }
];

function initGuestbook() {
  const form = document.getElementById('guestbook-form');
  const commentsList = document.getElementById('comments-list');
  if (!form || !commentsList) return;

  // Load comments
  let comments = localStorage.getItem('ounc-guestbook');
  if (!comments) {
    comments = JSON.stringify(MOCK_COMMENTS);
    localStorage.setItem('ounc-guestbook', comments);
  }

  const renderComments = () => {
    const list = JSON.parse(localStorage.getItem('ounc-guestbook') || '[]');
    commentsList.innerHTML = list.map(c => `
      <div class="comment-item">
        <div class="comment-header">
          <span class="comment-author">${escapeHtml(c.nickname)}</span>
          <span class="comment-date">${c.date}</span>
        </div>
        <div class="comment-text">${escapeHtml(c.content)}</div>
      </div>
    `).reverse().join('');
  };

  const escapeHtml = (unsafe) => {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nicknameInput = document.getElementById('comment-nickname');
    const contentInput = document.getElementById('comment-content');

    const newComment = {
      nickname: nicknameInput.value.trim(),
      content: contentInput.value.trim(),
      date: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };

    if (!newComment.nickname || !newComment.content) return;

    const list = JSON.parse(localStorage.getItem('ounc-guestbook') || '[]');
    list.push(newComment);
    localStorage.setItem('ounc-guestbook', JSON.stringify(list));

    // Clear and render
    nicknameInput.value = '';
    contentInput.value = '';
    renderComments();
  });

  renderComments();
}

// --- 7. VIEWPORT OBSERVERS & TRIGGERS ---

function initScrollObserver() {
  // Animate skill bars when in view
  const skillsContainer = document.getElementById('skills-container');
  if (!skillsContainer) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.skill-progress').forEach(bar => {
          const width = bar.getAttribute('data-width');
          bar.style.width = width;
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  observer.observe(skillsContainer);

  // Active navigation link tracking
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 250)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });
}

// --- 8. INITIALIZE EVERYTHING ---

document.addEventListener('DOMContentLoaded', () => {
  // Init particle backgrounds
  new CanvasBackground('canvas-bg');

  // Init Typewriter on landing hero
  new Typewriter('typewriter-text', [
    '关注后端分布式高并发系统设计。',
    '实践前沿的大模型 AI 智能体工程调度。',
    '追求极致的系统性能与云原生自动化架构。'
  ], 80, 45, 2500);

  // Render lists
  renderProjects();
  renderBlogPosts('all');

  // Setup filters
  const filterButtons = document.querySelectorAll('#blog-filters .filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const filter = e.target.getAttribute('data-filter');
      renderBlogPosts(filter);
    });
  });

  // Reader Close listeners
  const closeBtn = document.getElementById('reader-close');
  if (closeBtn) closeBtn.addEventListener('click', closePostReader);

  const readerOverlay = document.getElementById('post-reader');
  if (readerOverlay) {
    readerOverlay.addEventListener('click', (e) => {
      // Close reader if clicking outside the container
      if (e.target === readerOverlay) {
        closePostReader();
      }
    });
  }

  // Escape key to close reader
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePostReader();
    }
  });

  // Init comments and observers
  initGuestbook();
  initScrollObserver();
});
