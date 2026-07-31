/* ==========================================
   ounc.github.io - Interactive Frontend Logic
   ========================================== */

// --- 1. TRANSLATION DICTIONARY ---

const TRANSLATIONS = {
  zh: {
    'nav-blog': '博客',
    'nav-projects': '项目',
    'nav-about': '关于我',
    'nav-guestbook': '留言板',
    'hero-subtitle': 'Engineering the Future',
    'hero-title-prefix': '构建高可用的',
    'hero-title-gradient': '后端与 AI 系统',
    'hero-btn-explore': '探索技术文章',
    'hero-btn-projects': '查看我的项目',
    'blog-tag': 'Read Articles',
    'blog-title': '技术博客录',
    'filter-all': '全部',
    'filter-backend': '后端系统',
    'filter-architecture': '系统架构',
    'filter-ai': 'AI工程',
    'projects-tag': 'Showcase',
    'projects-title': '开源项目集',
    'about-tag': 'About Me',
    'about-title': '个人简介',
    'about-intro': '我是 ounc，一名专注于后端高并发架构与 AI 落地的工程师。',
    'about-p1': '在这里，我记录自己在分布式系统、微服务架构以及 AI 大模型应用落地中的实践经验。我相信好的架构应当像温润的清风，看似无形，却稳健地支撑着海量业务的发展。',
    'about-p2': '除了敲代码，我也热衷于阅读经典系统源码、撰写技术深度解析，并在 GitHub 积极参与开源贡献。',
    'about-github-btn': '在 GitHub 关注我',
    'skill-backend': 'Go / Java (后端开发)',
    'skill-distributed': 'Distributed Systems (分布式架构)',
    'skill-ai': 'AI Engineering / LLM Ops (AI 应用落地)',
    'skill-cloud': 'Kubernetes & Cloud Native (云原生)',
    'guestbook-tag': 'Interactive',
    'guestbook-title': '留言板',
    'form-nickname': '昵称',
    'form-content': '留言内容',
    'form-submit': '发送留言',
    'footer-feed': '网站订阅',
    'footer-discussions': '讨论订阅',
    'placeholder-nickname': '留下你的极客代号',
    'placeholder-content': '写点什么吧... 支持 Markdown 符号哦',
    'btn-read-more': '阅读全文',
    'btn-project-code': '代码',
    'btn-project-demo': '演示',
    'comment-default-1': '网页排版真舒服，暖色调在冷冰冰的极客主页里确实有温度。催更你的 Raft 实践文！',
    'comment-default-2': '对 Go 的 GC 分析很到位，我们线上也在通过微调 GOGC 缓解瞬间 STW，期待更多深度文章。'
  },
  en: {
    'nav-blog': 'Blog',
    'nav-projects': 'Projects',
    'nav-about': 'About',
    'nav-guestbook': 'Guestbook',
    'hero-subtitle': 'Engineering the Future',
    'hero-title-prefix': 'Building High-Availability',
    'hero-title-gradient': 'Backend & AI Systems',
    'hero-btn-explore': 'Explore Articles',
    'hero-btn-projects': 'View Projects',
    'blog-tag': 'Read Articles',
    'blog-title': 'Technical Blog',
    'filter-all': 'All',
    'filter-backend': 'Backend',
    'filter-architecture': 'Architecture',
    'filter-ai': 'AI Engineering',
    'projects-tag': 'Showcase',
    'projects-title': 'Open Source Projects',
    'about-tag': 'About Me',
    'about-title': 'Profile',
    'about-intro': 'I\'m ounc, a backend engineer focusing on high-concurrency architecture and AI system implementation.',
    'about-p1': 'Here, I document my practical experience in distributed systems, microservice architectures, and LLM application deployments. I believe that good architecture is like a gentle breeze: invisible but firmly supporting massive business growth.',
    'about-p2': 'Besides coding, I am passionate about reading classic system source codes, writing in-depth technical analyses, and actively contributing to open-source on GitHub.',
    'about-github-btn': 'Follow me on GitHub',
    'skill-backend': 'Go / Java (Backend Development)',
    'skill-distributed': 'Distributed Systems',
    'skill-ai': 'AI Engineering / LLM Ops',
    'skill-cloud': 'Kubernetes & Cloud Native',
    'guestbook-tag': 'Interactive',
    'guestbook-title': 'Guestbook',
    'form-nickname': 'Nickname',
    'form-content': 'Message',
    'form-submit': 'Send Message',
    'footer-feed': 'Site Feed',
    'footer-discussions': 'Discussions',
    'placeholder-nickname': 'Your geek handle',
    'placeholder-content': 'Write something... Supports Markdown formatting',
    'btn-read-more': 'Read More',
    'btn-project-code': 'Code',
    'btn-project-demo': 'Demo',
    'comment-default-1': 'The layout and custom sunset theme look absolutely stunning! Can\'t wait to read your next post on Raft implementation.',
    'comment-default-2': 'Great deep-dive into Go GC tuning! We\'re adjusting GOGC ratios in our production API services to shave off latency spikes too. Looking forward to more posts.'
  }
};

const TYPEWRITER_TEXTS = {
  zh: [
    '关注后端分布式高并发系统设计。',
    '实践前沿的大模型 AI 智能体工程调度。',
    '追求极致的系统性能与云原生自动化架构。'
  ],
  en: [
    'Focusing on backend distributed high-concurrency system design.',
    'Practicing cutting-edge LLM multi-agent orchestration scheduling.',
    'Pursuing ultimate system performance and cloud-native automation.'
  ]
};

// --- 2. BILINGUAL PROJECTS DATA ---

const PROJECTS = [
  {
    id: 'gocache-sync',
    icon: '💾',
    github: 'https://github.com/ounc/gocache-sync',
    demo: '#',
    tech: ['Go', 'Raft', 'gRPC', 'Protobuf'],
    zh: {
      title: 'gocache-sync',
      description: '使用 Go 编写的分布式一致性 KV 缓存。基于 Raft 协议实现高可用与强一致性，支持 LRU 淘汰机制与 HTTP/gRPC 双重协议接入。在弱网络环境下具备优秀的自动选主和数据恢复能力。'
    },
    en: {
      title: 'gocache-sync',
      description: 'A distributed consistent KV cache written in Go. Implements Raft consensus for high availability and strong consistency. Supports LRU eviction and HTTP/gRPC API. Resilient under network partition.'
    }
  },
  {
    id: 'llm-agent-orchestrator',
    icon: '🤖',
    github: 'https://github.com/ounc/llm-orchestrator',
    demo: '#',
    tech: ['Go', 'Python', 'LLM', 'Event-Driven'],
    zh: {
      title: 'llm-orchestrator',
      description: '面向多 Agent 协同的微秒级任务分发与编排框架。基于协程并发模型和事件驱动架构，支持动态有向无环图 (DAG) 依赖解析，适用于大规模 AI Agent 自动化流水线。'
    },
    en: {
      title: 'llm-orchestrator',
      description: 'A microsecond-latency task dispatching and orchestration framework for multi-agent workflows. Based on concurrent coroutines and event-driven architecture with dynamic DAG dependency resolving.'
    }
  },
  {
    id: 'fast-rpc',
    icon: '⚡',
    github: 'https://github.com/ounc/fast-rpc',
    demo: '#',
    tech: ['Java', 'Netty', 'ZooKeeper', 'Serialization'],
    zh: {
      title: 'fast-rpc',
      description: '基于 Netty 的高性能 RPC 框架。支持自定义二进制协议、基于 ZooKeeper 的服务注册与发现、一致性哈希负载均衡以及多轮编解码器，单机吞吐量达 10w+ QPS。'
    },
    en: {
      title: 'fast-rpc',
      description: 'A high-performance RPC framework built on Netty. Features custom binary protocols, ZooKeeper service discovery, consistent hashing load balancing, and custom codecs. Delivers 100k+ QPS.'
    }
  },
  {
    id: 'prometheus-scaler',
    icon: '☸️',
    github: 'https://github.com/ounc/k8s-metrics-scaler',
    demo: '#',
    tech: ['Go', 'Kubernetes', 'Prometheus', 'Control-Loop'],
    zh: {
      title: 'k8s-metrics-scaler',
      description: 'Kubernetes 自定义指标自动弹性伸缩控制器。订阅 Prometheus 的慢 SQL 或队列积压指标，支持基于线性回归预测的超前扩容，避免突发流量下的系统雪崩。'
    },
    en: {
      title: 'k8s-metrics-scaler',
      description: 'A Kubernetes custom metrics autoscaler controller. Subscribes to Prometheus queue lag or slow query rates and applies linear regression models to auto-scale preemptively.'
    }
  }
];

// --- 3. BILINGUAL BLOG POSTS DATA ---

const BLOG_POSTS = [
  {
    id: 'go-gc-tuning',
    category: 'backend',
    date: '2026-07-15',
    zh: {
      title: '深入浅出 Go 垃圾回收与内存分配器调优',
      categoryName: '后端系统',
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
    en: {
      title: 'Deep Dive into Go GC and Memory Allocator Tuning',
      categoryName: 'Backend Systems',
      description: 'An in-depth breakdown of Go runtimes concurrent tricolor marking GC mechanism, combined with production Stop-The-World (STW) latency tuning and memory alignment practices.',
      content: `
        <p>The concurrent Garbage Collector (GC) in Go has undergone significant updates. Today, it is built on a <strong>non-generational, concurrent, tricolor mark-and-sweep</strong> algorithm. Because of its automated simplicity, developers often ignore the underlying allocations. This post explores Go memory and GC tuning with production use cases.</p>
        
        <h3>1. Go Memory Allocation: A TCMalloc Variant</h3>
        <p>Go memory allocator mimics TCMalloc multi-level cache principles. Objects are categorized into three sizes:</p>
        <ul>
          <li><strong>Tiny Objects (< 16B)</strong>: Bundled and allocated in a single 16B block by the tiny allocator.</li>
          <li><strong>Small Objects (16B ~ 32KB)</strong>: Allocated onto corresponding size-class mspans. Each processor (P) holds a local thread-safe mcache.</li>
          <li><strong>Large Objects (> 32KB)</strong>: Bypass local caches and are allocated directly on the mheap.</li>
        </ul>
        <blockquote>
          <p><strong>Anti-pattern:</strong> Avoid allocating large objects in hot code paths. This bypasses thread-local caches, shifts lock contention to the mheap, and triggers runtime Assist Mark, increasing request latency.</p>
        </blockquote>

        <h3>2. Tricolor Marking & Write Barrier</h3>
        <p>Go uses a tricolor marking scheme during concurrent execution:</p>
        <pre><code>// Marking Phases
1. White: Unvisited objects (candidates for GC)
2. Grey: Visited objects whose references are not yet searched
3. Black: Visited objects with all references searched (retained)</code></pre>
        <p>To preserve accuracy during concurrent scanning, Go uses a <strong>Hybrid Write Barrier</strong>. It intercepts pointer changes to ensure black objects do not point to white objects unless shaded grey. Although write barriers introduce small CPU instruction overheads, they are vital to achieving sub-millisecond STW pauses.</p>

        <h3>3. Production Tuning Strategies</h3>
        <p>In our high-throughput API services, GC overhead accounted for 15% of total CPU time. We reduced it to less than 3% via:</p>
        <ol>
          <li><strong>Tuning GOGC ratio</strong>: The GOGC variable decides heap growth triggers (default 100). We raised GOGC to 200~300% to leverage container RAM headroom and lower GC cycles.</li>
          <li><strong>Object Pools (sync.Pool)</strong>: Reusing transient structs, byte buffers, and JSON contexts mitigated heap escape, scaling down memory allocator pressures.</li>
        </ol>
        <p>In short, the golden rules for Go memory performance are: <strong>stack-allocate when possible, limit pointer escapes, reuse heap memories, and tune GOGC variables wisely.</strong></p>
      `
    }
  },
  {
    id: 'agent-orch-engine',
    category: 'ai',
    date: '2026-06-28',
    zh: {
      title: '构建微秒级 LLM 智能体编排引擎的工程挑战',
      categoryName: 'AI工程',
      description: '在大模型多 Agent 协同链路中，延迟是制约体验的致命瓶颈。本文分享了我们如何采用事件驱动架构和并发依赖解析算法，将 Agent 调度框架的调度开销压降到微秒级的工程实践。',
      content: `
        <p>随着 AI 应用从简单的“单轮问答”走向“自主编排与复杂推理”，多 Agent 协同系统正逐渐成为核心交付模式。然而，由于绝大部分开源框架偏向 Python 脚本化生态，在面临高并发、低延迟的工业级场景时，调度框架本身的开销往往高达数百毫秒。</p>
        
        <h3>一、Python 调度引擎的瓶颈</h3>
        <p>很多开源编排框架的底层实现采用了同步阻塞或低效率的进程/线程模型，主要瓶颈体现在：</p>
        <ul>
          <li><strong>Python GIL（全局解释器锁）</strong>限制了多线程在 CPU 密集任务中的并行能力。</li>
          <li><strong>链式调度延迟</strong>：各 Agent 节点串行执行，缺少细粒度的 DAG（有向无环图）依赖并行计算能力。</li>
          <li><strong>上下文传递开销</strong>：Agent 之间的状态交换通过重型的数据库同步读写，导致网络 I/O 耗时高。</li>
        </ul>

        <h3>二、基于 Go 的微秒级调度引擎设计要点</h3>
        <p>为了解决高延迟，我们用 <strong>Go 语言</strong> 重构了 Agent 编排调度核心：</p>
        
        <h4>1. 基于无锁信道与协程模型的事件总线</h4>
        <p>Agent 之间的交互被建模为生产-消费队列。采用无锁环形缓冲区（Lock-free Ring Buffer）处理 Agent 产生的中间状态事件，将线程切换和锁的争用限制在极小范围内。</p>

        <h4>2. 动态 DAG 拓扑分析与并行执行</h4>
        <p>在任务分发前，引擎将任务解析为一棵 DAG 依赖树。对于没有前置依赖的 Agent 节点，引擎采用 Goroutine 并行拉起，实现最大化物理并发。当某个 Agent 计算完毕后，立即向下游发送完成信号，解除依赖。</p>
        
        <pre><code>// Go 协程调度
func (engine *Orchestrator) executeNode(node *DAGNode) {
    node.WaitForDependencies()
    result := node.Agent.Run(node.Context)
    node.NotifySuccessors(result)
}</code></pre>

        <h3>三、重构收益</h3>
        <p>通过用 Go 和内存态状态机重构编排层，框架本身的平均调度开销从 <strong>320ms 降至 0.8ms (800微秒)</strong>。这保证了在面对 LLM 极快的流式输出时，调度引擎不会成为阻碍瓶颈。</p>
      `
    },
    en: {
      title: 'Engineering Challenges of Building a Microsecond-Latency LLM Agent Orchestrator',
      categoryName: 'AI Engineering',
      description: 'Latency is a massive bottleneck in multi-agent workflows. This article details how we designed an event-driven scheduler with concurrent DAG execution to lower dispatching overhead to microseconds.',
      content: `
        <p>As AI applications shift from single-turn chat to autonomous multi-agent reasoning, orchestrators become critical. However, most open-source frameworks are built on synchronous Python runtimes, generating scheduling latency overheads of hundreds of milliseconds.</p>
        
        <h3>1. Why Python Schedulers Suffer from Latency</h3>
        <p>Python-based orchestrator engines face structural limitations under high-concurrency loads:</p>
        <ul>
          <li><strong>GIL (Global Interpreter Lock)</strong> blocks multi-threaded CPU-heavy task execution.</li>
          <li><strong>Sequential Processing</strong>: Agents execute serially without native DAG parallel dependency resolving.</li>
          <li><strong>Heavy State Transfers</strong>: Inter-agent state exchange relies on standard DB synchronous I/O, adding network latency.</li>
        </ul>

        <h3>2. Microsecond-Latency Orchestration Design in Go</h3>
        <p>To eliminate framework dispatch overheads, we rebuilt the scheduler core using <strong>Go</strong>:</p>
        
        <h4>A. Lock-Free Event Bus</h4>
        <p>Inter-agent interactions are modeled as ring-buffered events. Utilizing lock-free ring buffers, we avoid context-switching overheads and thread contention.</p>

        <h4>B. Concurrent DAG Task Resolving</h4>
        <p>Before dispatching, the engine constructs a Directed Acyclic Graph (DAG). Zero-dependency nodes are launched concurrently using lightweight Goroutines. Once a node completes, it signals and triggers downstream nodes immediately.</p>
        
        <pre><code>// Goroutine dispatch pseudo-code
func (engine *Orchestrator) executeNode(node *DAGNode) {
    node.WaitForDependencies()
    result := node.Agent.Run(node.Context)
    node.NotifySuccessors(result)
}</code></pre>

        <h3>3. Results and Takeaways</h3>
        <p>Rebuilding the orchestrator with Go and in-memory state machines slashed scheduling overhead from <strong>320ms to 0.8ms (800µs)</strong>. This guarantees the orchestrator does not block real-time agent output.</p>
      `
    }
  },
  {
    id: 'raft-kv-database',
    category: 'architecture',
    date: '2026-05-18',
    zh: {
      title: '基于 Raft 共识协议的分布式 Key-Value 数据库设计与实现',
      categoryName: '系统架构',
      description: '在分布式一致性领域，Raft 几乎成了高可用的代名词。本文从零开始实现一个 Raft 一致性算法模块，探讨分布式数据库在面对网络分区、脑裂和日志压缩时的应对策略。',
      content: `
        <p>在设计分布式后端系统时，保证数据一致性与可用性是重要命题。本文将回顾我们从零实现分布式缓存 gocache-sync 时所依赖的核心协议——<strong>Raft 共识算法</strong>。</p>
        
        <h3>一、Raft 核心状态机划分</h3>
        <p>Raft 协议将复杂的共识问题拆解为：<strong>领导者选举</strong>、<strong>日志复制</strong> 和 <strong>安全性</strong>。节点在运行期处于以下三者之一的身份：</p>
        <ul>
          <li><strong>Leader</strong>：接收写请求，并同步日志给 Follower。</li>
          <li><strong>Follower</strong>：被动接收 Leader 的日志和心跳，超时则转为 Candidate。</li>
          <li><strong>Candidate</strong>：主动发起投票，争取成为新的 Leader。</li>
        </ul>
        <blockquote>
          <p><strong>核心精髓：</strong> 节点间的随机化心跳超时时间是防止“选票分裂”的巧妙设计。一般设在 150ms ~ 300ms 之间。</p>
        </blockquote>

        <h3>二、网络分区的脑裂挑战</h3>
        <p>当网络发生物理分区时，会出现脑裂：</p>
        <pre><code>[Client] -> (Leader A, Follower B)  // 分区一：无法达成多数派写入
--- 网络断开 ---
(Candidate C, Follower D, Follower E) // 分区二：选出新 Leader C</code></pre>
        <p>在此状态下，分区一 Leader A 因为无法满足“过半数确认”，所有写入都会失败。分区二选出新 Leader C 并正常服务。网络恢复后，Leader A 收到 Term 更高的 Leader C 心跳，自动降级为 Follower，并同步最新的日志，优雅解决脑裂。</p>

        <h3>三、日志压缩快照</h3>
        <p>我们实现了快照压缩机制以解决日志膨胀问题：</p>
        <ol>
          <li>当日志达到阈值（如 64MB），将内存 KV 数据序列化为快照文件。</li>
          <li>截断快照之前的日志项。</li>
          <li>落后太多的 Follower 会直接通过 InstallSnapshot RPC 接收整份快照。</li>
        </ol>
        <p>这些设计保证了系统在网络丢包、机器宕机等极端情况下的数据安全和自我修复能力。</p>
      `
    },
    en: {
      title: 'Design and Implementation of a Distributed Key-Value Database Based on Raft',
      categoryName: 'System Architecture',
      description: 'Raft has become synonymous with high availability in distributed systems. This article details building a Raft consensus module from scratch and tackling network partitioning, split-brain, and compaction.',
      content: `
        <p>Building high-availability distributed systems demands bulletproof consensus algorithms. This post reviews the <strong>Raft consensus algorithm</strong> developed for our distributed cache, gocache-sync.</p>
        
        <h3>1. Raft Roles & States</h3>
        <p>Raft splits consensus into three sub-problems: <strong>Leader Election</strong>, <strong>Log Replication</strong>, and <strong>Safety</strong>. Nodes transition between three roles:</p>
        <ul>
          <li><strong>Leader</strong>: Handles client writes and replicates log entries to Followers.</li>
          <li><strong>Follower</strong>: Remains passive, responding to heartbeat and replication RPCs.</li>
          <li><strong>Candidate</strong>: Incites votes to elect a new Leader.</li>
        </ul>
        <blockquote>
          <p><strong>Design Tip:</strong> Randomized election timeout is the key to preventing split votes. Values are set between 150ms and 300ms.</p>
        </blockquote>

        <h3>2. Network Partition & Split-Brain</h3>
        <p>When a network partition splits a 5-node cluster into two segments:</p>
        <pre><code>[Client] -> (Leader A, Follower B)  // Partition 1: Cannot commit writes (No Majority)
--- Network Split ---
(Candidate C, Follower D, Follower E) // Partition 2: Elects new Leader C (Majority = 3)</code></pre>
        <p>Writes to Partition 1 fail because Leader A cannot gather a majority quorum (>=3). Meanwhile, Partition 2 processes writes under C. When network heals, Leader A steps down upon seeing C's higher term, overwriting uncommitted logs.</p>

        <h3>3. Log Compaction and Snapshotting</h3>
        <p>To avoid infinite disk write-ahead log (WAL) growth, we implemented log compaction:</p>
        <ol>
          <li>Upon reaching size limits (e.g. 64MB), memory states are flushed into snapshot files.</li>
          <li>Pre-snapshot log history is pruned.</li>
          <li>Slow followers catch up using the InstallSnapshot RPC.</li>
        </ol>
        <p>This implementation ensures zero data loss and automated recovery under unexpected machine failures.</p>
      `
    }
  },
  {
    id: 'k8s-canary-release',
    category: 'architecture',
    date: '2026-04-05',
    zh: {
      title: '云原生环境下的全链路灰度发布方案设计',
      categoryName: '系统架构',
      description: '在微服务架构中，一次迭代往往涉及上下游多个服务。如何在不影响线上的情况下实现端到端的一键灰度？本文提供了一套结合 Service Mesh 和 HTTP Header 传递的端到端灰度架构设计。',
      content: `
        <p>在以 Kubernetes + Envoy 为核心的分布式微服务架构下，调用链错综复杂。仅在网关处做分流远远不够，我们需要的是<strong>全链路灰度</strong>。</p>
        
        <h3>一、设计诉求</h3>
        <p>当用户发起请求时，网关根据请求特征给流量打标（如 <code>x-gray-tag: v2</code>）。该标记需要在后续的 RPC、HTTP 中透传，确保流量精准命中各微服务的灰度版本。</p>

        <h3>二、基于 Service Mesh 实现</h3>
        <p>我们采用 <strong>Istio + Envoy</strong> 服务网格方案以避免业务代码入侵：</p>
        <ul>
          <li><strong>Envoy</strong> 作为 Sidecar 拦截容器流量并进行转发。</li>
          <li><strong>Istio</strong> 负责下发 VirtualService 与 DestinationRule。</li>
        </ul>
        <p>部署配置划分为 <code>stable</code> 和 <code>canary</code> 两个子集。VirtualService 通过匹配 HTTP Header 的特定属性进行按需分发。</p>

        <h3>三、上下文透传挑战</h3>
        <p>虽然 Envoy 承担了路由转发，但如果是跨进程或协程异步调用，底层的 trace header 仍需透传。我们在 Go 中封装了 context 拦截器，自动读取当前 context 绑定的灰度标签，并在发起网络请求时追加至新的 header 中，从而在无侵入下实现了高可靠性的灰度流水线。</p>
      `
    },
    en: {
      title: 'Design of a Full-Link Canary Release Architecture in Cloud-Native Environments',
      categoryName: 'System Architecture',
      description: 'In complex microservice architectures, an iteration often spans multiple services. This post explains an end-to-end canary routing scheme using Service Mesh and custom HTTP Header propagation.',
      content: `
        <p>In distributed microservice networks powered by Kubernetes, requests flow through chains of microservices. Merely splitting traffic at the API gateway is insufficient; we need <strong>end-to-end canary propagation</strong>.</p>
        
        <h3>1. Core Objectives</h3>
        <p>When a request hits the gateway, it tags the traffic with custom labels (e.g. <code>x-gray-tag: v2</code>). This label must propagate downstream through nested HTTP and RPC calls, directing traffic to correct versions.</p>

        <h3>2. Leveraging Service Mesh (Istio/Envoy)</h3>
        <p>To avoid hard-coding routing logic, we used <strong>Istio + Envoy Service Mesh</strong>:</p>
        <ul>
          <li><strong>Envoy Proxy Sidecars</strong> intercept container ingress/egress.</li>
          <li><strong>Istio Control Plane</strong> distributes VirtualService routing instructions.</li>
        </ul>
        <p>Microservice Deployments are split into <code>stable</code> and <code>canary</code> subsets. The VirtualService routes matching traffic to the canary subset accordingly.</p>

        <h3>3. Context Propagation Challenges</h3>
        <p>Although Envoy handles traffic routing, code execution across goroutines requires propagation. In Go, we wrapped request Contexts with middleware that extracts canary headers and appends them to outgoing requests, ensuring seamless canary execution.</p>
      `
    }
  }
];

// --- 4. INTERACTIVE CANVAS BACKGROUND (Warm Sunset Grid & Particles) ---

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

// --- 5. TYPEWRITER EFFECT ---

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
    this.timeoutId = null;

    this.tick();
  }

  updateTexts(newTexts) {
    this.texts = newTexts;
    this.textIdx = 0;
    this.charIdx = 0;
    this.isDeleting = false;
    if (this.timeoutId) clearTimeout(this.timeoutId);
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

    this.timeoutId = setTimeout(() => this.tick(), nextSpeed);
  }
}

// --- 6. GLOBAL LANGUAGE STATE & I18N LOGIC ---

let currentLang = localStorage.getItem('ounc-lang') || (navigator.language.startsWith('zh') ? 'zh' : 'en');
let typewriterInstance = null;

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('ounc-lang', lang);

  // Update HTML lang attribute
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  // Toggle UI translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  // Toggle Toggle Button Display Text
  const toggleText = document.getElementById('lang-toggle-text');
  if (toggleText) {
    toggleText.textContent = lang === 'zh' ? 'English' : '中文';
  }

  // Update Input/Textarea Placeholders
  const nicknameInput = document.getElementById('comment-nickname');
  const contentInput = document.getElementById('comment-content');
  if (nicknameInput) nicknameInput.placeholder = TRANSLATIONS[lang]['placeholder-nickname'];
  if (contentInput) contentInput.placeholder = TRANSLATIONS[lang]['placeholder-content'];

  // Redraw Dynamic Card Grids
  renderProjects();
  
  // Re-read current active filter to render posts correctly
  const activeFilterBtn = document.querySelector('#blog-filters .filter-btn.active');
  const currentFilter = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';
  renderBlogPosts(currentFilter);

  // Re-render Comments (translates mock comments)
  renderComments();

  // Update Typewriter Texts
  if (typewriterInstance) {
    typewriterInstance.updateTexts(TYPEWRITER_TEXTS[lang]);
  }

  // Update Page Title
  document.title = lang === 'zh' 
    ? 'ounc · 后端架构与 AI 工程实践' 
    : 'ounc · Backend & AI Engineering';
}

// --- 7. RENDERERS: Blog & Projects ---

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(p => {
    const data = p[currentLang];
    return `
      <article class="card fade-in" id="project-card-${p.id}">
        <div class="project-image">
          <div class="project-icon-wrapper">${p.icon}</div>
        </div>
        <div class="card-content">
          <h3 class="card-title">${data.title}</h3>
          <p class="card-description">${data.description}</p>
          <div class="project-tech">
            ${p.tech.map(t => `<span>${t}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${p.github}" target="_blank" class="project-link" aria-label="Github code repository for ${data.title}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              ${TRANSLATIONS[currentLang]['btn-project-code']}
            </a>
            <a href="${p.demo}" class="project-link" aria-label="Live Demo for ${data.title}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              ${TRANSLATIONS[currentLang]['btn-project-demo']}
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderBlogPosts(filterCategory = 'all') {
  const grid = document.getElementById('blog-grid');
  if (!grid) return;

  const filtered = filterCategory === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === filterCategory);

  grid.innerHTML = filtered.map(post => {
    const data = post[currentLang];
    return `
      <article class="card post-card fade-in" data-id="${post.id}" id="blog-card-${post.id}">
        <div class="card-content">
          <div class="card-meta">
            <span class="card-tag">${data.categoryName}</span>
            <span class="card-date">${post.date}</span>
          </div>
          <h3 class="card-title">${data.title}</h3>
          <p class="card-description">${data.description}</p>
          <div class="card-footer">
            <span class="read-more">
              ${TRANSLATIONS[currentLang]['btn-read-more']}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </span>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Re-attach card click listeners
  document.querySelectorAll('.post-card').forEach(card => {
    card.addEventListener('click', () => {
      const postId = card.getAttribute('data-id');
      openPostReader(postId);
    });
  });
}

// --- 8. IMMERSIVE ARTICLE READER CONTROL ---

function openPostReader(postId) {
  const post = BLOG_POSTS.find(p => p.id === postId);
  if (!post) return;

  const data = post[currentLang];
  const overlay = document.getElementById('post-reader');
  const title = document.getElementById('reader-title');
  const date = document.getElementById('reader-date');
  const tag = document.getElementById('reader-tag');
  const content = document.getElementById('reader-content');
  const progress = document.getElementById('reader-progress');

  title.textContent = data.title;
  date.textContent = post.date;
  tag.textContent = data.categoryName;
  content.innerHTML = data.content;
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

// --- 9. GUESTBOOK / COMMENTS (LocalStorage) ---

function renderComments() {
  const commentsList = document.getElementById('comments-list');
  if (!commentsList) return;

  let comments = localStorage.getItem('ounc-guestbook');
  if (!comments) {
    const defaultComments = [
      { nickname: 'GopherBoy', content: TRANSLATIONS[currentLang]['comment-default-1'], date: '2026-07-28 10:24', isDefault: true },
      { nickname: 'ArchMaster', content: TRANSLATIONS[currentLang]['comment-default-2'], date: '2026-07-29 16:45', isDefault: true }
    ];
    localStorage.setItem('ounc-guestbook', JSON.stringify(defaultComments));
    comments = JSON.stringify(defaultComments);
  }

  const list = JSON.parse(comments);
  commentsList.innerHTML = list.map(c => {
    // If it is a default mock comment, translate it on-the-fly to keep the language uniform!
    let displayContent = c.content;
    if (c.isDefault) {
      displayContent = c.nickname === 'GopherBoy' 
        ? TRANSLATIONS[currentLang]['comment-default-1']
        : TRANSLATIONS[currentLang]['comment-default-2'];
    }

    return `
      <div class="comment-item">
        <div class="comment-header">
          <span class="comment-author">${escapeHtml(c.nickname)}</span>
          <span class="comment-date">${c.date}</span>
        </div>
        <div class="comment-text">${escapeHtml(displayContent)}</div>
      </div>
    `;
  }).reverse().join('');
}

const escapeHtml = (unsafe) => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

function initGuestbook() {
  const form = document.getElementById('guestbook-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nicknameInput = document.getElementById('comment-nickname');
    const contentInput = document.getElementById('comment-content');

    const newComment = {
      nickname: nicknameInput.value.trim(),
      content: contentInput.value.trim(),
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      isDefault: false
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

// --- 10. VIEWPORT OBSERVERS & TRIGGERS ---

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

// --- 11. INITIALIZE EVERYTHING ---

document.addEventListener('DOMContentLoaded', () => {
  // Init particle backgrounds
  new CanvasBackground('canvas-bg');

  // Init Typewriter on landing hero
  typewriterInstance = new Typewriter('typewriter-text', TYPEWRITER_TEXTS[currentLang], 80, 45, 2500);

  // Apply default language
  applyLanguage(currentLang);

  // Language Switch Button Listener
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'zh' ? 'en' : 'zh';
      applyLanguage(nextLang);
    });
  }

  // Setup filters for blog posts
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
