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
    'hero-subtitle': 'Engineering & Architecture',
    'hero-title-prefix': '构建高可用的',
    'hero-title-gradient': '后端与空间 AI 系统',
    'hero-btn-explore': '探索技术文章',
    'hero-btn-projects': '查看开源项目',
    'blog-tag': 'Read Articles',
    'blog-title': '技术博客录',
    'filter-all': '全部',
    'filter-backend': '后端与架构',
    'filter-architecture': '图形与空间算法',
    'filter-ai': '大模型工程',
    'projects-tag': 'Showcase',
    'projects-title': '开源项目与工程实践',
    'about-tag': 'About Me',
    'about-title': '个人简介',
    'about-intro': '我是 ounc，一名专注于后端高并发架构与 AI 空间算法落地的工程师。',
    'about-p1': '目前我主要负责空间计算与建筑 AI 创业项目 purai.cc 的核心渲染后端与空间求解器算法的研发工作。我热衷于使用优雅的系统架构和算法，来解决真实空间设计中的效率难题。',
    'about-p2': '在这里，我记录自己在高并发分布式系统、三维空间重构、扩散渲染管道优化以及大模型工程落地中的实践经验。我相信好的代码和架构不仅是冰冷的逻辑，更是解决物理世界复杂性的桥梁。',
    'about-github-btn': '在 GitHub 关注我',
    'skill-backend': 'Go / Java (后端高并发与架构)',
    'skill-distributed': 'Spatial AI & Image Diffusion (空间智能与图像扩散算法)',
    'skill-ai': '3D Spatial Geometry & Solvers (三维空间几何与求解算法)',
    'skill-cloud': 'Kubernetes & GPU Orchestration (云原生与GPU算力调度)',
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
    'btn-project-code': '开源仓库',
    'btn-project-demo': '演示链接',
    'comment-default-1': '网页排版真舒服，暖色调在冷冰冰的极客主页里确实有温度。催更你的 Raft 实践文！',
    'comment-default-2': '对 Go 的 GC 分析很到位，我们线上也在通过微调 GOGC 缓解瞬间 STW，期待更多深度文章。'
  },
  en: {
    'nav-blog': 'Blog',
    'nav-projects': 'Projects',
    'nav-about': 'About',
    'nav-guestbook': 'Guestbook',
    'hero-subtitle': 'Engineering & Architecture',
    'hero-title-prefix': 'Building High-Availability',
    'hero-title-gradient': 'Backend & Spatial AI Systems',
    'hero-btn-explore': 'Explore Articles',
    'hero-btn-projects': 'View Open Source',
    'blog-tag': 'Read Articles',
    'blog-title': 'Technical Blog',
    'filter-all': 'All',
    'filter-backend': 'Backend & Systems',
    'filter-architecture': 'Graphics & Spatial Algos',
    'filter-ai': 'LLM Engineering',
    'projects-tag': 'Showcase',
    'projects-title': 'Open Source Projects & Engineering Practice',
    'about-tag': 'About Me',
    'about-title': 'Profile',
    'about-intro': 'I\'m ounc, a backend engineer focusing on high-concurrency architecture and AI spatial systems implementation.',
    'about-p1': 'Currently, I focus on developing the core rendering backends and spatial solver algorithms for purai.cc, a spatial architecture AI startup. I enjoy using clean architecture and logic to solve real-world spatial design efficiency issues.',
    'about-p2': 'Here, I log my engineering journeys in high-concurrency distributed systems, 3D spatial reconstruction, image diffusion pipelines optimization, and LLM implementations. I believe good architecture is a bridge to solving physical world complexity.',
    'about-github-btn': 'Follow me on GitHub',
    'skill-backend': 'Go / Java (Backend & Systems)',
    'skill-distributed': 'Spatial AI & Image Diffusion',
    'skill-ai': '3D Spatial Geometry & Solvers',
    'skill-cloud': 'Kubernetes & GPU Orchestration',
    'guestbook-tag': 'Interactive',
    'guestbook-title': 'Guestbook',
    'form-nickname': 'Nickname',
    'form-content': 'Message',
    'form-submit': 'Send Message',
    'footer-feed': 'Site Feed',
    'footer-discussions': 'Discussions Feed',
    'placeholder-nickname': 'Your geek handle',
    'placeholder-content': 'Write something... Supports Markdown formatting',
    'btn-read-more': 'Read More',
    'btn-project-code': 'GitHub Repo',
    'btn-project-demo': 'Demo Link',
    'comment-default-1': 'The layout and custom sunset theme look absolutely stunning! Can\'t wait to read your next post on Raft implementation.',
    'comment-default-2': 'Great deep-dive into Go GC tuning! We\'re adjusting GOGC ratios in our production API services to shave off latency spikes too. Looking forward to more posts.'
  }
};

const TYPEWRITER_TEXTS = {
  zh: [
    '关注高并发后端架构与空间计算算法开发。',
    '设计 purai.cc 的核心渲染后端与空间布局求解器。',
    '热衷于用算法与系统设计解决建筑空间效率。'
  ],
  en: [
    'Focusing on high-concurrency backend & spatial computing.',
    'Designing rendering backend & spatial solvers for purai.cc.',
    'Passionate about solving spatial efficiency via system design.'
  ]
};

// --- 2. BILINGUAL PROJECTS DATA ---

const PROJECTS = [
  {
    id: 'purai-render-scheduler',
    icon: '🎨',
    github: 'https://github.com/ounc/purai-render-scheduler',
    demo: '#',
    tech: ['Go', 'Redis', 'gRPC', 'Docker', 'GPU-Metrics'],
    zh: {
      title: 'purai-render-scheduler',
      description: '面向高并发 GPU 渲染任务的分布式调度引擎。采用 Go 语言开发，支持基于 GPU 显存压力的动态负载均衡、多等级渲染任务优先级队列与自动重试，为 purai.cc 的渲染后端提供高可靠调度支持。'
    },
    en: {
      title: 'purai-render-scheduler',
      description: 'A distributed scheduling engine for high-concurrency GPU rendering tasks. Developed in Go, featuring dynamic load balancing based on GPU memory pressure, priority queues, and automatic fault-tolerance.'
    }
  },
  {
    id: 'spatial-layout-solver',
    icon: '📐',
    github: 'https://github.com/ounc/spatial-layout-solver',
    demo: '#',
    tech: ['Go', 'Genetic Algorithm', 'Constraint Solving', 'JSON-Schema'],
    zh: {
      title: 'spatial-layout-solver',
      description: '基于图约束关系与遗传算法的室内空间布局生成器。输入房屋红线、日照采光方向和相对距离约束，引擎即可在秒级内并行求解并输出符合人体工学的 3D 家具排布方案。'
    },
    en: {
      title: 'spatial-layout-solver',
      description: 'An indoor layout generator based on genetic algorithms and graph constraints. Solves and generates optimal 3D furniture arrangements in seconds matching daylight and ergonomic requirements.'
    }
  },
  {
    id: 'mesh-extractor-3dgs',
    icon: '🧊',
    github: 'https://github.com/ounc/mesh-extractor-3dgs',
    demo: '#',
    tech: ['C++', 'Python', '3DGS', 'Marching Cubes', 'Open3D'],
    zh: {
      title: 'mesh-extractor-3dgs',
      description: '使用 C++ 结合 TSDF 和 Marching Cubes 算法从训练完成的三维高斯泼溅 (3DGS) 场景中提取三维空间网格的轻量工具，支持一键导出为可以直接拖入 CAD/BIM 软件的 OBJ 网格。'
    },
    en: {
      title: 'mesh-extractor-3dgs',
      description: 'A lightweight 3D mesh extractor written in C++ and Python. Utilizes TSDF and Marching Cubes to reconstruct clean OBJ meshes from trained 3DGS spatial scans.'
    }
  },
  {
    id: 'gocache-sync',
    icon: '💾',
    github: 'https://github.com/ounc/gocache-sync',
    demo: '#',
    tech: ['Go', 'Raft Consensus', 'gRPC', 'Protobuf'],
    zh: {
      title: 'gocache-sync',
      description: '基于 Raft 协议实现高可用与强一致性的分布式 KV 缓存。支持 LRU 淘汰机制，专门用于在空间计算引擎的分布式节点中进行三维切片文件状态和图元元数据的高速同步。'
    },
    en: {
      title: 'gocache-sync',
      description: 'A Raft-based consistent distributed KV cache. Features LRU eviction and HTTP/gRPC protocols, optimized for high-speed synchronization of 3D spatial slice metadata across nodes.'
    }
  }
];

// --- 3. BILINGUAL BLOG POSTS DATA ---

const BLOG_POSTS = [
  {
    id: 'render-scheduler-post',
    category: 'backend',
    date: '2026-07-28',
    zh: {
      title: '深度解析 purai.cc 架构：构建高可用 GPU 渲染任务调度器',
      categoryName: '后端与架构',
      description: '本文分享了我在 purai.cc 架构设计中，如何基于 Go 协程、Redis 阻塞队列和 gRPC，为成千上万的 Stable Diffusion 渲染实例实现一套具备弹性扩缩容和错误重试能力的 GPU 渲染任务调度后端。',
      content: `
        <p>在 <code>purai.cc</code> 这样的生成式建筑渲染平台中，渲染任务是高度消耗 GPU 显存和算力的。传统的 Web 后端遇到暴涨的渲染请求很容易导致显卡溢出（OOM）或请求阻塞。<strong>为此，我编写了一套分布式的 GPU 渲染任务调度系统。</strong></p>
        
        <h3>一、核心挑战</h3>
        <ul>
          <li><strong>冷启动与延迟</strong>：GPU 渲染节点启动拉取大模型权重需要时间，调度器需要预测算力并提前唤醒节点。</li>
          <li><strong>请求排队与防雪崩</strong>：当大量用户并行请求渲染时，必须对任务进行优先级排列与排队阻尼，防止显卡物理服务器雪崩。</li>
        </ul>

        <h3>二、基于 Go + Redis + gRPC 的调度设计</h3>
        <p>调度器的设计分为三层：</p>
        <ol>
          <li><strong>事件网关（API Gateway）</strong>：接收客户端请求，将请求封装为渲染事件，压入 Redis 优先级阻尼阻塞队列（ZSet）。</li>
          <li><strong>核心调度器（Scheduler Core）</strong>：运行一个无锁控制循环（Control Loop），监听队列。通过长连接与各个 GPU 工作节点（Worker）保持 gRPC 状态通信。</li>
          <li><strong>GPU 工作节点（Worker Node）</strong>：单机部署的 Python/C++ 封装实例，订阅 GPU 空闲度并主动向调度器上报。</li>
        </ol>
        
        <pre><code>// 伪代码：调度器核心循环
func (s *Scheduler) startDispatchLoop() {
    for {
        worker := s.GetLeastLoadedWorker()
        if worker == nil {
            s.ScaleUpGPUInstances() // 弹性扩容
            time.Sleep(1 * time.Second)
            continue
        }
        task := s.Queue.PopHighestPriorityTask()
        go s.dispatch(task, worker)
    }
}</code></pre>

        <h3>三、落地收益</h3>
        <p>通过这套 Go 后端调度引擎，我们成功解决了 GPU 节点的频繁空闲与突发请求堆积问题。系统的渲染平均排队延迟降低了 <strong>75%</strong>，且具备完备的单点容错能力，某台 GPU 宿主机宕机时，调度器会自动拦截并重分发其未完成的渲染任务。</p>
      `
    },
    en: {
      title: 'Deep Dive into purai.cc Architecture: Designing a High-Availability GPU Render Scheduler',
      categoryName: 'Backend & Systems',
      description: 'A technical write-up detailing how I designed and implemented a concurrent GPU task scheduler in Go using Redis priority queues and gRPC to scale Stable Diffusion pipelines.',
      content: `
        <p>For generative architecture platforms like <code>purai.cc</code>, rendering is heavily resource-intensive. Standard API servers easily crash or experience OOM under sudden spikes. **I designed a dedicated distributed scheduler to queue and balance these jobs.**</p>
        
        <h3>1. Architectural Challenges</h3>
        <ul>
          <li><strong>Cold Boot Latencies</strong>: Loading large weights on a GPU takes time. The scheduler must forecast load and scale nodes preemptively.</li>
          <li><strong>Queueing & Anti-Avalanche</strong>: Large volumes of render requests require strict prioritization to prevent physical GPU hosts from crashing.</li>
        </ul>

        <h3>2. Go + Redis + gRPC Architecture</h3>
        <p>The scheduler uses a three-tier model:</p>
        <ol>
          <li><strong>API Gateway</strong>: Encapsulates requests into render events and pushes them onto Redis sorted sets (ZSet) by priority.</li>
          <li><strong>Scheduler Core</strong>: Runs a lock-free control loop to monitor queues. Maintains real-time gRPC tunnels with active Workers.</li>
          <li><strong>GPU Workers</strong>: Local scripts monitoring VRAM availability, reporting metrics back to the core.</li>
        </ol>
        
        <pre><code>// Dispatch loop pseudo-code
func (s *Scheduler) startDispatchLoop() {
    for {
        worker := s.GetLeastLoadedWorker()
        if worker == nil {
            s.ScaleUpGPUInstances()
            time.Sleep(1 * time.Second)
            continue
        }
        task := s.Queue.PopHighestPriorityTask()
        go s.dispatch(task, worker)
    }
}</code></pre>

        <h3>3. Outcome</h3>
        <p>This scheduler cut queueing latency by <strong>75%</strong>. If a GPU node crashes, the scheduler intercepts and re-routes its active workloads automatically, achieving bulletproof resilience.</p>
      `
    }
  },
  {
    id: 'spatial-solver-post',
    category: 'spatial-ai',
    date: '2026-06-12',
    zh: {
      title: '从零编写一个室内空间布局求解器 (Go + 遗传算法实践)',
      categoryName: '图形与空间算法',
      description: '空间排布在算法上面临巨大的搜索维度挑战。本文详细记录了我如何采用图约束表示户型关系，并设计遗传算法的适应度函数，让 Go 求解器引擎在 2 秒内求解出符合日照和建筑学规则的户型排布。',
      content: `
        <p>自动布局生成是 <code>purai.cc</code> 空间规划模型的核心。从数学上看，这是一个典型的<strong>约束满足问题 (Constraint Satisfaction Problem, CSP)</strong>，我们通常需要在一个无限连续的三维空间中寻找最优解。本文将介绍我是如何用 Go 从零实现这个求解器的。</p>
        
        <h3>一、将空间布局抽象为图</h3>
        <p>在编写求解器之前，我们不能把房间看作毫无关系的积木。我将室内空间建模为一个有向带有属性的图：</p>
        <ul>
          <li><strong>节点 (Nodes)</strong>：代表各个空间，如“客厅”、“主卧”、“玄关”，每个节点包含长、宽、高的范围。</li>
          <li><strong>边 (Edges)</strong>：代表空间的相对约束，包含连通约束（如“卧室必须通向走廊”）与朝向约束（如“客厅必须朝向正南 ±15°”）。</li>
        </ul>

        <h3>二、遗传算法的编码与演化设计</h3>
        <p>由于空间搜索边界极其巨大，且存在非线性的重叠约束，传统的搜索树极易陷入局部最优。我设计了以下遗传算法架构：</p>
        <ol>
          <li><strong>基因编码 (Chromosome)</strong>：一条染色体代表一套房屋内的房间相对坐标及旋转角度。</li>
          <li><strong>适应度函数 (Fitness Function)</strong>：
            <ul>
              <li><strong>重叠度罚分</strong>：房间与房间重叠，扣除高额积分。</li>
              <li><strong>日照匹配分</strong>：窗户朝向阳光方向，增加积分。</li>
              <li><strong>动线合理性</strong>：主要交通路线的总长度越短，积分越高。</li>
            </ul>
          </li>
          <li><strong>变异与杂交</strong>：随机平移房间，或者在两条优秀的户型图之间交换卧室与次卧的分支。</li>
        </ol>

        <pre><code>// 适应度计算逻辑
func evaluate(c *Chromosome) float64 {
    score := 1000.0
    score -= c.CalculateOverlapArea() * 100.0
    score += c.EvaluateSunlightExposure() * 50.0
    score -= c.CalculateCirculationPathLength() * 10.0
    return score
}</code></pre>

        <h3>三、结语</h3>
        <p>该求解器单次运行在 Go 并发优化下，可在 <strong>2.1秒</strong> 内跑完 500 代进化，输出合理性接近专业设计师排出的高水准户型图，极大地展现了算法在物理空间应用中的神奇魅力。</p>
      `
    },
    en: {
      title: 'Writing an Indoor Spatial Layout Solver from Scratch: Go & Genetic Algorithms',
      categoryName: 'Graphics & Spatial Algos',
      description: 'Floorplan arrangement is a challenging constraint satisfaction problem. This article reviews how I built a Go-based layout solver using genetic algorithms to align architectural spaces.',
      content: `
        <p>Automated floorplan planning is the core module in purai.cc. Mathematically, it is a **Constraint Satisfaction Problem (CSP)** with an infinite 3D search space. Here is how I built the solver using Go.</p>
        
        <h3>1. Space as a Directed Constraint Graph</h3>
        <p>Before writing math, we must model room links. Rooms are represented as nodes in a graph, with walls and paths as directional edges enforcing rules (e.g. "Living Room must orient South", "Bedroom requires Bathroom access").</p>

        <h3>2. Coding the Genetic Pipeline</h3>
        <p>Because spatial checks are non-linear, genetic algorithms work perfectly. I coded the following pipeline:</p>
        <ol>
          <li><strong>Chromosomes</strong>: Encodes room coordinates and orientation rotations into array structures.</li>
          <li><strong>Fitness Metrics</strong>:
            <ul>
              <li><strong>Overlap Penalties</strong>: Severe penalties if room meshes intersect.</li>
              <li><strong>Daylight Ingress</strong>: Positive weight if windows face the sun.</li>
              <li><strong>Circulation Paths</strong>: Deducts scores if pathing is too long.</li>
            </ul>
          </li>
        </ol>

        <pre><code>// Fitness calculation
func evaluate(c *Chromosome) float64 {
    score := 1000.0
    score -= c.CalculateOverlapArea() * 100.0
    score += c.EvaluateSunlightExposure() * 50.0
    score -= c.CalculateCirculationPathLength() * 10.0
    return score
}</code></pre>

        <h3>3. Results</h3>
        <p>Through Go concurrency pipelines, the engine completes 500 generations of evolution in <strong>2.1 seconds</strong>, generating compliant floorplans.</p>
      `
    }
  },
  {
    id: 'mesh-extractor-post',
    category: 'spatial-ai',
    date: '2026-05-18',
    zh: {
      title: '点云到网格：3DGS 三维空间重构中的网格提取工程实践',
      categoryName: '图形与空间算法',
      description: '在将三维高斯泼溅 (3DGS) 用于空间扫描时，如何输出 CAD/BIM 能读懂的网格？本文拆解了我使用 C++ 结合 TSDF 算法和三角化算法，将点云重构为干净 OBJ 格式网格的完整步骤。',
      content: `
        <p>三维高斯泼溅（3D Gaussian Splatting）在逼真渲染上表现惊艳，但它是由无数半透明的椭球体（高斯点）组成的，建筑师所使用的 CAD/BIM 软件根本无法导入和编辑。<strong>为了解决这个问题，我开发了一套点云提取干净多边形网格（Mesh）的算法工具。</strong></p>
        
        <h3>一、算法流程设计</h3>
        <p>从无定型的椭球体中抽离出规则的多边形网格，核心步骤如下：</p>
        <ul>
          <li><strong>点云致密化与去噪</strong>：提取 3DGS 的均值中心点，根据不透明度（Opacity）阈值过滤掉空气中的漂浮噪点。</li>
          <li><strong>隐式表面重建</strong>：使用截断带符号距离场（TSDF, Truncated Signed Distance Function）将点云投影到连续体素场中。</li>
          <li><strong>多边形提取</strong>：使用 <strong>Marching Cubes (等值面提取)</strong> 算法抽取零水平集（Zero-Level Set），生成初步的三角网格。</li>
        </ul>

        <h3>二、C++ 核心代码实现</h3>
        <p>我使用 C++ 和 Open3D 库实现了这一计算重塑模块。关键的 Marching Cubes 计算效率极高，能在毫秒级提取复杂的室内墙体边界。</p>
        <pre><code>// C++ TSDF 网格重建
auto tsdf_volume = std::make_shared&lt;TSDFVolume&gt;(voxel_length, sdf_trunc);
for (const auto& frame : camera_frames) {
    tsdf_volume->Integrate(frame.depth, frame.color, frame.intrinsic, frame.extrinsic);
}
auto mesh = tsdf_volume->ExtractTriangleMesh();</code></pre>

        <h3>三、BIM 导出的后续挑战</h3>
        <p>刚提取出来的三角网格通常包含百万级面片。为了让其真正能在 CAD 中使用，我实现了一套基于 **RANSAC (随机抽样一致)** 的平面提取算法，自动将复杂的三角面拟合归并为规整的平直墙面，进而导出为洁净的工业标准 DWG/IFC 二维和三维图纸，为 purai.cc 的 3D 重建模块打通了最后的闭环。</p>
      `
    },
    en: {
      title: 'From Point Cloud to CAD Mesh: Extracting Meshes in 3DGS Spatial Reconstruction',
      categoryName: 'Graphics & Spatial Algos',
      description: 'When applying 3DGS for spatial scans, CAD/BIM software cannot read raw Gaussian ellipsoids. This post details my C++ implementation of extracting OBJ meshes via TSDF and Marching Cubes.',
      content: `
        <p>While 3D Gaussian Splatting (3DGS) renders photoreal scenes beautifully, it is made of millions of semi-transparent gaussians. CAD/BIM software cannot edit these. **I developed an algorithm to extract clean polygon meshes from 3DGS scans.**</p>
        
        <h3>1. The Reconstruction Workflow</h3>
        <p>The processing pipeline consists of three core steps:</p>
        <ul>
          <li><strong>Point Pruning</strong>: Extract Gaussian centers and discard points with opacity values below custom thresholds.</li>
          <li><strong>Implicit Surface Reconstruction</strong>: Project points into Truncated Signed Distance Fields (TSDF) voxels.</li>
          <li><strong>Polygon Extraction</strong>: Run **Marching Cubes** to extract zero-level isosurfaces into triangular meshes.</li>
        </ul>

        <h3>2. C++ Implementation</h3>
        <p>I built this using C++ and Open3D. Marching Cubes runs fast on local CPUs, resolving interior boundaries in milliseconds.</p>
        <pre><code>// C++ TSDF Mesh Extraction
auto tsdf_volume = std::make_shared&lt;TSDFVolume&gt;(voxel_length, sdf_trunc);
for (const auto& frame : camera_frames) {
    tsdf_volume->Integrate(frame.depth, frame.color, frame.intrinsic, frame.extrinsic);
}
auto mesh = tsdf_volume->ExtractTriangleMesh();</code></pre>

        <h3>3. Flattening for BIM</h3>
        <p>Raw meshes are dense. I applied a **RANSAC planar-fitting** loop to merge triangles into flat plane walls, exporting neat standard IFC/BIM formats, completing purai.cc\'s scan-to-CAD pipeline.</p>
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
    ? 'ounc · Tech Blog | 后端架构 · 空间计算 · AI 工程实践' 
    : 'ounc · Tech Blog | Backend · Spatial AI · Systems';
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
            <a href="${p.github}" target="_blank" class="project-link" aria-label="Open-source repository for ${data.title}">
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
