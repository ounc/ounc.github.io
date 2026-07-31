/* ==========================================
   purai.cc - Interactive Frontend Logic
   ========================================== */

// --- 1. TRANSLATION DICTIONARY ---

const TRANSLATIONS = {
  zh: {
    'nav-products': '产品方案',
    'nav-insights': '行业洞察',
    'nav-about': '关于我们',
    'nav-contact': '合作意向',
    'hero-subtitle': 'Design the Unbuilt',
    'hero-title-prefix': '人工智能重塑',
    'hero-title-gradient': '建筑与空间设计',
    'hero-btn-explore': '申请产品试用',
    'hero-btn-projects': '提交商务合作',
    'blog-tag': 'Insights',
    'blog-title': '行业洞察与研究',
    'filter-all': '全部',
    'filter-backend': '生成式设计',
    'filter-architecture': '空间智能',
    'filter-ai': '行业生态',
    'projects-tag': 'Solutions',
    'projects-title': '产品与解决方案',
    'about-tag': 'About Us',
    'about-title': '关于普瑞智能',
    'about-intro': '关于 purai',
    'about-p1': '普瑞智能 (purai.cc) 是一家专注于将人工智能融入建筑设计与空间规划的科技创新企业。我们致力于打破传统设计流水线的效率壁垒，将生成式扩散模型、三维场景重建以及空间计算等前沿技术，无缝交付给全球的建筑师与设计师。',
    'about-p2': '我们相信，AI 的角色不是取代灵感，而是消除繁琐的机械重复。通过自主研发的空间大模型，设计师可以在数秒内将草图渲染为高保真效果图，或基于复杂的地块限制进行最优空间布局规划，让设计的边界无限延伸。',
    'about-github-btn': '在 GitHub 关注我们',
    'skill-backend': 'Spatial AI & Image Generation (空间智能与渲染生成)',
    'skill-distributed': '3D Scene Reconstruction (三维空间场景重建)',
    'skill-ai': 'AI-Driven Layout Planning (智能空间布局规划)',
    'skill-cloud': 'BIM & CAD Cloud Integration (BIM/CAD云端协同)',
    'guestbook-tag': 'Inquiry',
    'guestbook-title': '意向留言与商洽',
    'form-nickname': '您的称呼 / 公司名称',
    'form-content': '合作意向与需求描述',
    'form-submit': '提交合作意向',
    'footer-feed': '产品订阅',
    'footer-discussions': '合作留言订阅',
    'placeholder-nickname': '例如：普瑞建设 / 极客建筑师事务所',
    'placeholder-content': '请描述您的合作意向或对我们 AI 工具的试用需求...',
    'btn-read-more': '阅读详情',
    'btn-project-code': '开源仓库',
    'btn-project-demo': '产品演示',
    'comment-default-1': 'purai Render 的渲染速度非常惊人，草图一键生成的建筑阴影和材质细节处理得非常合理，极大地缩短了我们前期方案的比选时间！',
    'comment-default-2': '我们事务所近期在尝试将 CAD 图纸通过 Spatial3D 重建导入 BIM，空间识别率非常高，期待能和普瑞智能开展深度技术合作。'
  },
  en: {
    'nav-products': 'Products',
    'nav-insights': 'Insights',
    'nav-about': 'About Us',
    'nav-contact': 'Inquiry',
    'hero-subtitle': 'Design the Unbuilt',
    'hero-title-prefix': 'Reimagining Architecture &',
    'hero-title-gradient': 'Spatial Design with AI',
    'hero-btn-explore': 'Request Free Trial',
    'hero-btn-projects': 'Submit Partnership',
    'blog-tag': 'Insights',
    'blog-title': 'Industry Insights & Research',
    'filter-all': 'All',
    'filter-backend': 'Generative Design',
    'filter-architecture': 'Spatial AI',
    'filter-ai': 'PropTech Ecosystem',
    'projects-tag': 'Solutions',
    'projects-title': 'Products & Solutions',
    'about-tag': 'About Us',
    'about-title': 'About purai',
    'about-intro': 'About purai',
    'about-p1': 'purai (purai.cc) is a cutting-edge PropTech startup specializing in integrating Artificial Intelligence into architectural design and spatial planning. We break traditional workflow bottlenecks by delivering generative diffusion pipelines, 3D spatial reconstruction, and spatial computing to architects worldwide.',
    'about-p2': 'We believe AI is built not to replace inspiration, but to automate repetition. Through our spatial models, architects convert hand sketches into high-fidelity renders in seconds or generate optimized layouts conforming to local zoning laws, infinitely extending the boundaries of creativity.',
    'about-github-btn': 'Follow us on GitHub',
    'skill-backend': 'Spatial AI & Image Generation',
    'skill-distributed': '3D Scene Reconstruction',
    'skill-ai': 'AI-Driven Layout Planning',
    'skill-cloud': 'BIM & CAD Cloud Integration',
    'guestbook-tag': 'Inquiry',
    'guestbook-title': 'Business Inquiry',
    'form-nickname': 'Your Name / Company Name',
    'form-content': 'Inquiry / Requirements Description',
    'form-submit': 'Submit Inquiry',
    'footer-feed': 'Product Feed',
    'footer-discussions': 'Inquiry Feed',
    'placeholder-nickname': 'e.g., purai Construction / Geek Architects Ltd.',
    'placeholder-content': 'Please describe your business inquiry or request for our AI design tools...',
    'btn-read-more': 'Read Details',
    'btn-project-code': 'GitHub Repo',
    'btn-project-demo': 'Live Demo',
    'comment-default-1': 'The rendering speed of purai Render is impressive. Generating materials and realistic shadows from a simple sketch saves us days during early bidding phases!',
    'comment-default-2': 'Our firm tried uploading CAD drawings to Spatial3D for BIM reconstruction, and the spatial recognition rates were incredibly high. Looking forward to deepening our collaboration.'
  }
};

const TYPEWRITER_TEXTS = {
  zh: [
    '一键将草图与线框图转化为写实建筑渲染图。',
    '基于地块限制与日照分析自动规划最优空间户型。',
    '使用空间智能，从全景照片一键重建 3D BIM 场景。'
  ],
  en: [
    'Convert sketches & wireframes into photorealistic renders in seconds.',
    'Auto-generate optimized floor plans conforming to zoning & sunlight.',
    'Reconstruct 3D BIM models from 2D photos via spatial intelligence.'
  ]
};

// --- 2. BILINGUAL PRODUCTS DATA ---

const PROJECTS = [
  {
    id: 'purai-render',
    icon: '🎨',
    github: 'https://github.com/purai-cc/purai-render',
    demo: '#',
    tech: ['Diffusion Model', 'ControlNet', 'Stable Diffusion', 'GPU Edge'],
    zh: {
      title: 'purai Render (建筑智能渲染引擎)',
      description: '一键将建筑手绘草图、CAD 线框图转化为高拟真的写实渲染图。内置写实、概念、水彩等十余种风格模板，支持日景、夜景、阴雨天等精细光影调节。'
    },
    en: {
      title: 'purai Render (AI Rendering Engine)',
      description: 'Converts hand sketches or CAD wireframes into high-fidelity photorealistic renders instantly. Features 10+ architectural styles and day/night lighting overrides.'
    }
  },
  {
    id: 'purai-generator',
    icon: '📐',
    github: 'https://github.com/purai-cc/purai-plan-generator',
    demo: '#',
    tech: ['Genetic Algorithm', 'Constraint Solving', 'CAD Engine', 'Python'],
    zh: {
      title: 'purai PlanGenerator (智能空间布局规划)',
      description: '根据日照时间、地块红线、容积率及朝向限制，通过遗传算法自动计算生成最优的户型平面图与楼宇排布方案，极大地减少方案调整周期。'
    },
    en: {
      title: 'purai PlanGenerator (Auto-Layout Planner)',
      description: 'Calculates and generates optimized residential floor plans and building layouts based on specific sunlight requirements, zoning boundaries, and density limits.'
    }
  },
  {
    id: 'purai-spatial',
    icon: '🧊',
    github: 'https://github.com/purai-cc/purai-spatial3d',
    demo: '#',
    tech: ['Spatial Intelligence', 'NeRF / 3DGS', 'LiDAR Scan', 'C++'],
    zh: {
      title: 'purai Spatial3D (三维空间场景重建)',
      description: '利用三维高斯泼溅 (3DGS) 及语义分割技术，从手机拍摄的全景视频或激光雷达点云中提取空间三维网格，一键转化为主流设计软件可编辑的标准 BIM 构件。'
    },
    en: {
      title: 'purai Spatial3D (3D Reconstruction System)',
      description: 'Uses 3D Gaussian Splatting (3DGS) and computer vision to extract spatial meshes from mobile videos or scans, generating editable, standard BIM components.'
    }
  },
  {
    id: 'purai-copilot',
    icon: '💬',
    github: 'https://github.com/purai-cc/purai-architect-copilot',
    demo: '#',
    tech: ['LLM', 'RAG Engine', 'Vector DB', 'Zoning Code'],
    zh: {
      title: 'purai Copilot (建筑师智能助理)',
      description: '基于大语言模型的建筑智能顾问。输入自然语言即可秒级检索全国复杂的地方建筑设计规范、消防通则，并智能推荐合规的节能低碳绿色建材。'
    },
    en: {
      title: 'purai Copilot (AI Architect Assistant)',
      description: 'An LLM-based assistant that queries complex building codes, zoning regulations, and fire codes, recommending eligible green and low-carbon construction materials.'
    }
  }
];

// --- 3. BILINGUAL INSIGHTS DATA ---

const BLOG_POSTS = [
  {
    id: 'facade-ai',
    category: 'ai-design',
    date: '2026-07-28',
    zh: {
      title: '生成式 AI 在现代建筑立面设计中的应用实践',
      categoryName: '生成式设计',
      description: '探索基于 Stable Diffusion 和 ControlNet 的条件图像生成技术，在幕墙设计阶段从体块草图直接生成多方案立面纹理与材质配色的工程工作流。',
      content: `
        <p>建筑立面设计是表达建筑美感与技术性的关键环节，传统的幕墙立面比选需要建模、打光、材质贴图以及数小时的漫长渲染。<strong>生成式 AI 正在打破这一繁杂工作流</strong>，将概念设计时间缩短至秒级。</p>
        
        <h3>一、立面条件生成的控制瓶颈</h3>
        <p>在直接将 Diffusion 模型应用于立面设计时，通常面临两大难题：</p>
        <ul>
          <li><strong>结构失真</strong>：建筑结构具有严苛的物理对齐特征。单纯通过 Prompt 生成图像常会导致外轮廓扭曲、窗缝歪斜。</li>
          <li><strong>材质模糊</strong>：生成的玻璃、金属板纹理缺乏物理厚度与精确的高光反馈，无法用于方案决策。</li>
        </ul>

        <h3>二、基于 ControlNet + 提示词权重的完美解法</h3>
        <p>为了获得高可控度的立面生成，我们构建了以下工程管道：</p>
        <ol>
          <li><strong>深度图与边缘线（Lineart）提取</strong>：从三维软件（如 Rhino/SketchUp）导出立面体块图，使用 Canny 或 Lineart 算法提取控制线稿。</li>
          <li><strong>多网络并联控制</strong>：在 ControlNet 中并联加载线稿模型（控制宏观结构）与深度模型（控制遮阳格栅、窗洞凹凸的深度层级）。</li>
          <li><strong>风格权重调优</strong>：在主模型中融合建筑学经典摄影语义（例如 “minimalist, curtain wall glass, dynamic parametric paneling, architectural photography, Hasselblad”），并使用负向提示词屏蔽非理性构件。</li>
        </ol>
        <blockquote>
          <p><strong>实战成果：</strong> 配合我们的渲染引擎，设计师只需绘制一张铅笔线条的结构草图，就可以在一分钟内并行产出 10 套包含了金属格栅、通高玻璃幕墙等不同参数化质感的立面方案大图。</p>
        </blockquote>

        <h3>三、结语</h3>
        <p>生成式 AI 的使命不是代替建筑师画施工图，而是将前期的创意头脑风暴放大百倍。通过人机协同，未来的建筑外立面可以拥有更强的参数化细节与环境适应力。</p>
      `
    },
    en: {
      title: 'Generative AI Applications in Modern Architectural Facade Design',
      categoryName: 'Generative Design',
      description: 'Explore the conditional image generation pipeline using Stable Diffusion and ControlNet to render complex facade textures and materials from volumetric massing models.',
      content: `
        <p>Architectural facade design is critical for aesthetics and engineering. Traditional facade options require modeling, texturing, lighting, and hours of rendering. <strong>Generative AI is bypassing this heavy workflow</strong>, cutting concept iterations down to seconds.</p>
        
        <h3>1. The Bottlenecks of Facade Generative Control</h3>
        <p>When directly using diffusion models for facade rendering, architects face two major issues:</p>
        <ul>
          <li><strong>Structural Distortion</strong>: Buildings demand strict alignments. Naive prompts result in curved structural grids and distorted windows.</li>
          <li><strong>Unrealistic Materials</strong>: Generated glass and metal panels lack physical thickness and correct reflection properties.</li>
        </ul>

        <h3>2. Solving via ControlNet & Conditional Multi-Pipelining</h3>
        <p>To acquire highly controllable facade renderings, we built the following pipeline:</p>
        <ol>
          <li><strong>Lineart and Depth Extraction</strong>: Export structural wireframes from CAD/Rhino, and run Canny or Lineart edge extraction.</li>
          <li><strong>Parallel Network Control</strong>: Load structural lineart to lock global framing, concurrently utilizing depth controls to parse louvers and window extrusions.</li>
          <li><strong>Textual Prompts Tuning</strong>: Feed architectural photography tags (e.g. "parametric facade, aluminum paneling, clear low-E glass, architectural photography") and negative prompts to rule out illogical artifacts.</li>
        </ol>
        <blockquote>
          <p><strong>Result:</strong> By drawing a simple pencil sketch, designers generate 10 high-fidelity variants of aluminum parametric grids and curtain-wall skins in under a minute.</p>
        </blockquote>

        <h3>3. Summary</h3>
        <p>Generative AI is not designed to replace architects, but to supercharge concepts. Man-machine synergy enables facades with deeper detailing and environmental performance.</p>
      `
    }
  },
  {
    id: 'spatial-llm-interior',
    category: 'spatial-llm',
    date: '2026-06-12',
    zh: {
      title: '空间大模型 (Spatial LLM) 在室内空间智能规划中的落地探索',
      categoryName: '空间智能',
      description: '大模型不仅能读懂文本，还能理解空间。本文探讨普瑞智能如何构建轻量级空间边界表示算法，将三维空间坐标映射为 LLM 向量，从而实现自动户型诊断与家具软装智能排布。',
      content: `
        <p>传统大语言模型（LLM）擅长逻辑与符号推导，但无法感知物理空间。要实现真正的智能空间规划，必须解决<strong>“大模型如何理解三维几何与距离约束”</strong>的问题。我们在 purai-generator 的研发中开展了探索。</p>
        
        <h3>一、空间边界的向量化编码 (Spatial Tokenization)</h3>
        <p>为了让 LLM 能够处理空间排布，我们采用三维网格（3D Grids）与图表示（Graph Representation）对室内格局进行编码：</p>
        <ul>
          <li>将房间划分成细颗粒度的体素（Voxels），每个障碍物、门窗、柱体用一个三维边界坐标包围盒（AABB Bounding Box）表示。</li>
          <li>把建筑动线（Circulation）和采光要求建模为拓扑图中的边（Edges），例如 “卧室 -> 必须直达 -> 独立卫浴”、“沙发 -> 必须面对 -> 电视背景墙”。</li>
        </ul>

        <h3>二、基于空间约束的网络优化</h3>
        <p>我们将上述编码拼接进 prompt，利用专门经过空间拓扑对齐微调的开源底模进行布局推荐。模型会返回一组建议的三维物体坐标点。最后，通过传统的<strong>约束求解器 (Constraint Solver)</strong> 对物体坐标进行物理碰撞微调，避免软装穿墙或阻挡走道。</p>
        <pre><code>// 拓扑图依赖示例
Room: LivingRoom
Constraint 1: Sofa facing TV-Wall, distance [2.5m, 4.0m]
Constraint 2: CoffeeTable between Sofa and TV-Wall
Constraint 3: Free passage width >= 0.9m</code></pre>

        <h3>三、商业价值</h3>
        <p>该技术使普通用户可以仅用日常语言说出：“我需要一个能容纳三口之家、兼顾安静书房区和充足采光的客厅布局”，系统即可在 2 秒内输出符合人体工学与物理约束的三维设计模型，极大地降低了定制家居与精装房的设计门槛。</p>
      `
    },
    en: {
      title: 'Spatial LLM Implementations in Intelligent Interior Layout Planning',
      categoryName: 'Spatial AI',
      description: 'How to map 3D spatial boundary matrices into LLM tokens, achieving automatic floorplan auditing and ergonomic furniture layout suggestions.',
      content: `
        <p>Traditional Large Language Models (LLMs) are great at text but blind to physical spaces. To build smart layout planners, we must resolve <strong>"how to make LLMs understand 3D geometry and distance constraints"</strong>. We developed solutions inside purai-generator.</p>
        
        <h3>1. Spatial Tokenization</h3>
        <p>We encode indoor layouts using voxel subdivisions and topological graph representations:</p>
        <ul>
          <li>Rooms are divided into fine-grained voxels. Walls, columns, windows, and doors are modeled as Axis-Aligned Bounding Boxes (AABB).</li>
          <li>Circulations and lighting rules are modeled as graph edges (e.g. "Bedroom -> direct access -> Bathroom", "Sofa -> face -> TV-wall").</li>
        </ul>

        <h3>2. Integrating Constraint Solvers</h3>
        <p>The topological inputs are fed to a fine-tuned spatial LLM, which outputs proposed 3D coordinate boxes. We then pass coordinates through a **deterministic Constraint Solver** to prevent collisions, wall-clippings, or corridor blocks.</p>
        <pre><code>// Topological constraint model
Room: LivingRoom
Constraint 1: Sofa facing TV-Wall, distance [2.5m, 4.0m]
Constraint 2: CoffeeTable between Sofa and TV-Wall
Constraint 3: Free passage width >= 0.9m</code></pre>

        <h3>3. Commercial Impact</h3>
        <p>This enables users to input natural sentences: "Generate a layout for a family of three, prioritizing a quiet study corner and high solar exposure." In 2 seconds, the engine generates an ergonomic, physically validated 3D layout.</p>
      `
    }
  },
  {
    id: 'proptech-trends',
    category: 'proptech',
    date: '2026-05-02',
    zh: {
      title: '绿色低碳建筑：基于 AI 的光照与能耗模拟优化',
      categoryName: '行业生态',
      description: '应对全球低碳环保趋势，普瑞智能分析了如何结合快速代理模型 (Surrogate Model) 与 AI，将传统需要耗时数小时的日照折射与空调节能热工分析降至毫秒级，实现辅助建筑设计优化。',
      content: `
        <p>传统建筑热力学和光照分析需要极高的算力，设计方案微小的改动就需要重新运行复杂的流体与辐射模拟（如 EnergyPlus 或 Radiance）。<strong>AI 代理模型 (Surrogate Models)</strong> 的出现，彻底改变了耗时的能耗评估工作流。</p>
        
        <h3>一、什么是 AI 能耗代理模型</h3>
        <p>能耗代理模型并不是做真正的物理热传导计算，而是利用神经网络学习数万个历史物理模拟案例的“输入-输出”映射。当设计师修改窗墙比（WWR）、隔热材质或阳台挑檐宽度时，AI 可以在毫秒级内“预估”出全年的空调节能表现和日照系数（Daylight Factor），准确率高达 95% 以上。</p>

        <h3>二、在方案初期实现“性能导向设计”</h3>
        <p>借助快速预测能力，我们将能耗预测直接嵌入到建筑形体的生成式算法（即 purai PlanGenerator）中。算法在生成大楼朝向与高度时，会自动计算太阳辐射热增益。若某一个体块排布会导致强烈的西晒和空调能耗暴增，AI 会自动施加惩罚函数并旋转体块，最终帮助建筑师在创意初期就筛选出最具绿色低碳基因的建筑方案。</p>
      `
    },
    en: {
      title: 'Green Architecture: AI-Driven Daylight and Thermal Energy Simulation',
      categoryName: 'PropTech Ecosystem',
      description: 'Using deep surrogate neural networks to reduce traditional hours-long thermal heat gains and daylight simulations to milliseconds, driving sustainable architecture.',
      content: `
        <p>Traditional thermodynamics and lighting simulations demand massive CPU power. A tiny modification in structural massing forces designers to run hours-long radiation compute (e.g. EnergyPlus). **AI Surrogate Models** are modern game-changers.</p>
        
        <h3>1. What are AI Energy Surrogates?</h3>
        <p>Instead of solving raw partial differential equations, we train neural networks to learn mappings from thousands of physical simulations. When building facades, window-to-wall ratios (WWR), or insulation values are altered, the AI infers annual HVAC loads and Daylight Factors in milliseconds, with >95% accuracy.</p>

        <h3>2. Performance-Driven Generative Planning</h3>
        <p>Using millisecond predictions, we embed energy audits directly into shape-generating loops. As our genetic algorithm tweaks building orientations, it estimates solar heat gains. If a massing triggers extreme summer cooling loads, the AI scores it down, optimizing building blocks dynamically.</p>
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

let currentLang = localStorage.getItem('purai-lang') || (navigator.language.startsWith('zh') ? 'zh' : 'en');
let typewriterInstance = null;

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('purai-lang', lang);

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
    ? 'purai · AI & Spatial Architecture | 用人工智能重构建筑设计' 
    : 'purai · AI & Spatial Architecture | Reimagining Spatial Design with AI';
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

  let comments = localStorage.getItem('purai-inquiries');
  if (!comments) {
    const defaultComments = [
      { nickname: '林阳设计事务所', content: TRANSLATIONS[currentLang]['comment-default-1'], date: '2026-07-28 10:24', isDefault: true },
      { nickname: 'Matrix BIM Group', content: TRANSLATIONS[currentLang]['comment-default-2'], date: '2026-07-29 16:45', isDefault: true }
    ];
    localStorage.setItem('purai-inquiries', JSON.stringify(defaultComments));
    comments = JSON.stringify(defaultComments);
  }

  const list = JSON.parse(comments);
  commentsList.innerHTML = list.map(c => {
    let displayContent = c.content;
    if (c.isDefault) {
      displayContent = c.nickname.startsWith('林') || c.nickname.startsWith('L')
        ? TRANSLATIONS[currentLang]['comment-default-1']
        : TRANSLATIONS[currentLang]['comment-default-2'];
    }

    // Adapt nickname display to english if it's default
    let displayNickname = c.nickname;
    if (c.isDefault && currentLang === 'en') {
      displayNickname = c.nickname.startsWith('林') 
        ? 'Linyang Architecture Studio'
        : 'Matrix BIM Group';
    } else if (c.isDefault && currentLang === 'zh') {
      displayNickname = c.nickname.startsWith('Mat') 
        ? 'Matrix BIM 集团'
        : '林阳设计事务所';
    }

    return `
      <div class="comment-item">
        <div class="comment-header">
          <span class="comment-author">${escapeHtml(displayNickname)}</span>
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

    const list = JSON.parse(localStorage.getItem('purai-inquiries') || '[]');
    list.push(newComment);
    localStorage.setItem('purai-inquiries', JSON.stringify(list));

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
