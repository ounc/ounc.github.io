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
    'hero-subtitle': 'Applied AI & Systems Engineering',
    'hero-title-prefix': '探索大模型前沿与',
    'hero-title-gradient': '空间智能物理落地',
    'hero-btn-explore': '探索技术文章',
    'hero-btn-projects': '查看开源成果',
    'blog-tag': 'Read Articles',
    'blog-title': '技术博客录',
    'filter-all': '全部',
    'filter-backend': '大模型与推理计算',
    'filter-architecture': '空间多模态与视觉',
    'filter-ai': '时序与工程系统',
    'projects-tag': 'Showcase',
    'projects-title': '科研课题与工程实践',
    'brand-name': 'ounc (刘文帝)',
    'about-tag': 'About Me',
    'about-title': '个人简介',
    'about-intro': '我是 ounc (刘文帝)，南洋理工大学 (NTU) 计算机硕士在读 (M.Comp. in Applied AI)。',
    'about-p1': '我的研究重点聚焦于大语言模型推理时计算优化（Test-Time Compute 动态路由与 MCTS 慢思考）以及高分辨率多模态空间计算（VLM 图纸解析与空间拓扑图谱构建）。此前拥有 4 年大型工程项目数字化与全周期商务管控经验。',
    'about-p2': '在这里，我记录自己在前沿大模型推理算法、多模态时空计算、工程规范 RAG 知识库以及全栈 AI 应用落地中的实战思考。我相信好的算法不仅存在于学术论文中，更应该成为赋能物理世界与复杂业务的坚实基石。',
    'about-github-btn': '在 GitHub 关注我',
    'skill-backend': 'Python & FastAPI (深度学习工程与高效推理部署)',
    'skill-distributed': 'LLMs, MCTS & Test-Time Compute (大模型慢思考与算力路由)',
    'skill-ai': 'Multimodal VLM & Scene Graph (空间多模态实体抽取与拓扑图谱)',
    'skill-cloud': 'Spatio-Temporal & Time-Series AI (时序深度学习与统计检验)',
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
    'comment-default-1': '网页排版真舒服，暖色调在冷冰冰的极客主页里确实有温度。催更你的 MCTS 实践文！',
    'comment-default-2': '对时序风电预测模型的特征工程分析很到位，期待更多前沿推理优化的深度文章。'
  },
  en: {
    'nav-blog': 'Blog',
    'nav-projects': 'Projects',
    'nav-about': 'About',
    'nav-guestbook': 'Guestbook',
    'hero-subtitle': 'Applied AI & Systems Engineering',
    'hero-title-prefix': 'Advancing Foundation Models &',
    'hero-title-gradient': 'Spatial Intelligence Systems',
    'hero-btn-explore': 'Explore Articles',
    'hero-btn-projects': 'View Projects',
    'blog-tag': 'Read Articles',
    'blog-title': 'Technical Blog',
    'filter-all': 'All',
    'filter-backend': 'LLM & Reasoning',
    'filter-architecture': 'Spatial Multimodal & Vision',
    'filter-ai': 'Time-Series & Systems',
    'projects-tag': 'Showcase',
    'projects-title': 'Research Projects & Engineering Practice',
    'brand-name': 'ounc (Wendi Liu)',
    'about-tag': 'About Me',
    'about-title': 'Profile',
    'about-intro': 'I\'m ounc (Wendi Liu), M.Comp. candidate in Applied Artificial Intelligence at Nanyang Technological University (NTU).',
    'about-p1': 'My core research interests center on LLM test-time compute scaling (dynamic entropy routing & MCTS search) and multimodal spatial computing (VLM document parsing & Scene Graph construction). I also bring 4 years of full-cycle construction engineering & commerce experience.',
    'about-p2': 'Here, I document my journey across frontier reasoning algorithms, multimodal spatial perception, engineering-grade RAG systems, and production AI deployments. I believe the true value of AI lies in bridging foundational models with physical-world complexity.',
    'about-github-btn': 'Follow me on GitHub',
    'skill-backend': 'Python & FastAPI (DL Engineering & Inference Deployment)',
    'skill-distributed': 'LLMs, MCTS & Test-Time Compute (Reasoning Routing & Search)',
    'skill-ai': 'Multimodal VLM & Scene Graph (Visual Entity Extraction & Topology)',
    'skill-cloud': 'Spatio-Temporal & Time-Series AI (Forecasting & Robustness Testing)',
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
    '南洋理工大学 (NTU) 计算机硕士在读 (M.Comp. in Applied AI)。',
    '专注大模型推理优化 (Test-Time Compute) 与多模态空间计算。',
    '深耕垂直领域 AI 落地：从工程规范 RAG 到物理空间拓扑自动化。'
  ],
  en: [
    'NTU M.Comp. in Applied AI candidate.',
    'Specializing in Test-Time Compute routing & Multimodal Spatial AI.',
    'Bridging foundational reasoning algorithms with industrial engineering domains.'
  ]
};

// --- 2. BILINGUAL PROJECTS DATA ---

const PROJECTS = [
  {
    id: 'lightweight-adaptive-search',
    icon: '🧠',
    github: 'https://github.com/ounc/lightweight-adaptive-search',
    demo: '#',
    tech: ['vLLM', 'MCTS', 'Test-Time Compute', 'Qwen-2.5-7B', 'Entropy Routing', 'PyTorch'],
    zh: {
      title: 'lightweight-adaptive-search',
      description: '大模型推理算力自适应路由框架（LAS）。通过前5个生成Token的预测熵动态评估任务难度，低难度走快速贪心解码，高难度路由至基于 vLLM 开发的隐式值引导蒙特卡洛树搜索（MCTS）引擎。在 MATH 数学推理集上超越基线 3.75% 准确率，并将平均推理开销由 2.00x 压缩至 1.67x。'
    },
    en: {
      title: 'lightweight-adaptive-search',
      description: 'Lightweight Adaptive Search (LAS), a test-time compute routing framework dynamically measuring query difficulty via early token predictive entropy. Routes easy queries to greedy decoding and complex queries to an implicit-value-guided MCTS engine on vLLM, outperforming baselines by +3.75% on MATH with 1.67x compute.'
    }
  },
  {
    id: 'multimodal-draft-spatial-ai',
    icon: '📐',
    github: 'https://github.com/ounc/multimodal-draft-spatial-ai',
    demo: '#',
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
    github: 'https://github.com/ounc/llm-rag-building-code-assistant',
    demo: '#',
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
    github: 'https://github.com/ounc/automated-boq-pipeline',
    demo: '#',
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
    id: 'wind-power-forecasting',
    icon: '🌪️',
    github: 'https://github.com/ounc/wind-power-forecasting',
    demo: './wind-forecast/',
    tech: ['PyTorch', '1D-CNN', 'GRU', 'TimeSeries', 'Hypothesis-Testing'],
    zh: {
      title: 'wind-power-forecasting',
      description: '基于 1D-CNN + GRU 混合时空深度学习架构的超短期风电功率预测系统。集成气象物理特征工程（风向正余弦分解、动态空气密度修正）、全套基准对照（LSTM/SVR/ARIMA）与学术级 Wilcoxon/Friedman 统计显著性检验，单样本推理时延仅 0.26ms。'
    },
    en: {
      title: 'wind-power-forecasting',
      description: 'An ultra-short-term wind power forecasting system using a hybrid 1D-CNN + GRU architecture. Captures multi-variable spatial correlations and temporal dynamics, featuring aerodynamic feature engineering, multi-model baselines, and Wilcoxon/Friedman hypothesis tests with 0.26ms latency.'
    }
  },
  {
    id: 'multimodal-pv-defect-detection',
    icon: '☀️',
    github: 'https://github.com/ounc/multimodal-pv-defect-detection',
    demo: '#',
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

// --- 3. BILINGUAL BLOG POSTS DATA ---

const BLOG_POSTS = [
  {
    id: 'wind-power-forecasting-post',
    category: 'llm',
    date: '2026-08-15',
    zh: {
      title: '超短期风电功率预测实战：CNN-GRU 时空建模、非参数检验与低延迟工程落地',
      categoryName: '大模型与时序AI',
      description: '本文详细拆解如何为风电场构建超短期（15min~4h）功率预测系统。涵盖风向正余弦周期性分解、空气密度温压修正、1D-CNN+GRU 混合时空架构、全栈基线对照（LSTM/SVR/ARIMA），以及学术级 Wilcoxon 符号秩检验与 Friedman 检验实战。',
      content: `
        <p>风能是一种清洁而极具潜力的可再生能源，但风电场并网面临着<strong>强间歇性、随机性与剧烈波动冲击</strong>的天然痛点。国家电网对风电场的“双细则”考核要求超短期（未来 15 分钟至 4 小时）预测准确率通常必须高于 85%（即容量归一化误差 NRMSE &lt; 15%），预测偏差不仅会导致巨额考核罚款，更直接危及区域电网的频率与电能质量稳定。</p>

        <h3>一、气象物理特征工程：正余弦周期分解与空气密度</h3>
        <p>在构建机器学习模型前，物理第一性原理的特征工程至关重要：</p>
        <ul>
          <li><strong>风向角度断崖消除</strong>：风向物理上处于 0°~360° 圆周。若直接进行归一化，359° 与 1° 会产生 0.997 与 0.003 的数值断崖，导致梯度震荡。我们采用正弦与余弦连续周期性编码（\\(WD_{\\sin} = \\sin(2\\pi\\theta/360), WD_{\\cos} = \\cos(2\\pi\\theta/360)\\)），将其映射为单位圆二维连续流形。</li>
          <li><strong>温压动态修正空气密度</strong>：贝兹极限理论指出 \\(P = \\frac{1}{2} \\rho A v^3 C_p\\)。传统方法往往假定空气密度恒定，而在高海拔或季风强冷空气侵袭下，空气密度漂移可达 15%~20%。通过理想气体状态方程 \\(\\rho = \\frac{P_{atm}}{R_{spec} T}\\) 重构动态密度特征，显著消除了季节性系统误差。</li>
        </ul>

        <h3>二、CNN-GRU 时空深度混合模型</h3>
        <p>循环网络善于捕捉沿时间轴的因果记忆，但难以快速从同一时间步的高维异构传感器（风速、风向正余弦、温湿压、滞后功率）中提取高阶交叉关联特征。为此，我们设计了级联架构：</p>
        <ol>
          <li><strong>1D-CNN 特征提取层</strong>：通过多通道一维卷积，在时序滑动窗口内部提取局部微气象模式（如阵风前兆、温压骤变模式）；</li>
          <li><strong>双层 GRU 时序单元</strong>：相比标准 LSTM，GRU 缺少细胞状态，仅含更新门和重置门，参数量精简约 30%，显存占用更小且有效避免中小规模工业时序上的过拟合；</li>
          <li><strong>单样本低延迟推理</strong>：CPU 实测推理时延仅 <strong>0.264 ms</strong>，相比国家电网 15 分钟调度周期绰绰有余，甚至可直接下放至风电场边缘工控机支撑秒级变桨控制。</li>
        </ol>

        <h3>三、基准模型对比与非参数统计检验</h3>
        <p>我们在 120 天连续 SCADA 运行数据上，与 LSTM、SVR、ARIMA 建立了严谨基线对比：</p>
        <ul>
          <li><strong>CNN-GRU (提出的模型)</strong>：RMSE 156.90 kW | MAE 106.18 kW | NRMSE 7.84% | \\(R^2\\) 0.7540</li>
          <li><strong>LSTM (深度基线)</strong>：RMSE 153.78 kW | MAE 99.82 kW | NRMSE 7.69% | \\(R^2\\) 0.7637</li>
          <li><strong>SVR (机器学习基线)</strong>：RMSE 180.99 kW | MAE 127.73 kW | NRMSE 9.05% | \\(R^2\\) 0.6726</li>
          <li><strong>ARIMA (时序统计基线)</strong>：RMSE 121.05 kW | MAE 78.77 kW | NRMSE 6.05% | \\(R^2\\) 0.8536</li>
        </ul>
        <p>为证明算法优越性并非随机抽样偶然，我们引入了非参数统计检验：<strong>Friedman 检验</strong> 获得卡方统计量 72.29，\\(p = 1.38 \\times 10^{-15} \\ll 0.05\\)，强力拒绝无差异假设；成对 <strong>Wilcoxon 符号秩检验</strong> 证明 CNN-GRU 相对于传统 SVR 误差显著更优（\\(p = 1.76 \\times 10^{-7}\\)）。</p>

        <h3>四、特征消融与敏感性分析</h3>
        <p>通过逐变量置零消融实验，当剔除风速特征时，测试集 RMSE 瞬间激增至 <strong>397.09 kW (+153.1%)</strong>，用实证数据严谨证明了风电机组功率对风速三次方关系的极度依赖，验证了模型内部决策逻辑与空气动力学第一性原理的严丝合缝。</p>

        <p style="margin-top: 24px;">
          <a href="./wind-forecast/" target="_blank" class="btn btn-primary" style="display:inline-flex;align-items:center;gap:8px;padding:9px 20px;text-decoration:none;border-radius:8px;color:#fff;font-weight:600;">
            <span>🌪️</span> 立即体验：打开超短期风电调度交互式大屏 (Live Demo) →
          </a>
        </p>
      `
    },
    en: {
      title: 'Ultra-Short-Term Wind Power Forecasting: Spatio-Temporal CNN-GRU, Hypothesis Testing & Low-Latency Deployment',
      categoryName: 'AI & TimeSeries',
      description: 'A deep-dive technical write-up on ultra-short-term (15min~4h) wind power forecasting pipelines. Covering cyclical angle decomposition, dynamic air density modeling, 1D-CNN + GRU hybrid neural architecture, baseline comparisons, and Wilcoxon/Friedman hypothesis tests.',
      content: `
        <p>Wind power is a crucial clean energy pillar, but wind farms face challenges from high intermittency and sudden gusts. Grid codes enforce strict accuracy standards for ultra-short-term forecasts (15 minutes to 4 hours ahead), requiring capacity-normalized error NRMSE &lt; 15%.</p>
        
        <h3>1. Aerodynamic Feature Engineering</h3>
        <p>We engineered domain-specific features: sinusoidal cyclical decomposition for wind direction eliminating angle discontinuity, and ideal gas air density dynamic correction based on atmospheric pressure and ambient temperature.</p>

        <h3>2. Spatio-Temporal CNN-GRU Architecture</h3>
        <p>1D-CNN temporal convolution extracts local cross-sensor patterns, while two-layer GRU captures temporal dynamics. GRU uses 30% fewer parameters than LSTM, reaching <strong>0.264 ms per-sample inference latency</strong> on standard CPUs.</p>

        <h3>3. Benchmarking & Statistical Significance</h3>
        <p>Evaluated against LSTM, SVR, and ARIMA. The Friedman non-parametric test achieved \\(\\chi^2 = 72.29, p = 1.38 \\times 10^{-15} \\ll 0.05\\), confirming statistically significant performance differences across models.</p>

        <p style="margin-top: 24px;">
          <a href="./wind-forecast/" target="_blank" class="btn btn-primary" style="display:inline-flex;align-items:center;gap:8px;padding:9px 20px;text-decoration:none;border-radius:8px;color:#fff;font-weight:600;">
            <span>🌪️</span> Launch Interactive Wind Power Dispatch Dashboard (Live Demo) →
          </a>
        </p>
      `
    }
  },
  {
    id: 'lightweight-adaptive-search-post',
    category: 'backend',
    date: '2026-08-20',
    zh: {
      title: '深入理解大模型 Test-Time Compute：基于预测熵的动态路由与 vLLM MCTS 慢思考实践',
      categoryName: '大模型与推理计算',
      description: '大模型推理计算（Test-Time Compute）是当前提升复杂逻辑与数学推理能力的关键前沿。本文详细拆解如何通过前 5 个生成 Token 的预测熵评估题目难度，并将困难样本自适应路由至基于 vLLM 实现的隐式值引导 MCTS 搜索引擎。',
      content: `
        <p>在大语言模型（LLM）的复杂逻辑与数学推理中，固定计算预算的贪心解码（Greedy Decoding）对于难题往往表现乏力，而全局慢思考搜索又会导致极其高昂的算力开销。<strong>为了解决算力分配与推理深度的矛盾，我设计了 Lightweight Adaptive Search (LAS) 动态算力路由框架。</strong></p>
        
        <h3>一、预测熵与动态难度评估</h3>
        <p>在模型推理的初始阶段，模型对后续思路的“自信度”往往直接体现在首批生成的 Token 概率分布中：</p>
        <ul>
          <li><strong>前置 Token 预测熵计算</strong>：通过提取模型生成的前 5 个 Token 的概率分布，计算香农预测熵 \\(H = -\\sum p_i \\log p_i\\)。若预测熵显著高于自适应阈值，表明模型处于不确定性极高的分支点。</li>
          <li><strong>双轨路由机制</strong>：低熵样本（简单算术、直接知识提取）直接走高效贪心解码；高熵样本（复杂代数变换、竞赛级证明）则被调度引擎截获，转入深度搜索队列。</li>
        </ul>

        <h3>二、基于 vLLM 的隐式值引导 MCTS 引擎</h3>
        <p>传统蒙特卡洛树搜索依赖独立的 Value Model 或复杂的自我评估 Prompt，存在极大的量化噪音。我们在 vLLM 架构之上实现了轻量级隐式搜索：</p>
        <ol>
          <li><strong>节点扩展与剪枝</strong>：每次扩展时保留 Top-K 高概率且高信息熵的推理步骤，结合束搜索（Beam Search）生成备选推导分支；</li>
          <li><strong>无 Prompt 价值打分</strong>：通过 Token 级困惑度（Perplexity）与多采样自一致性（Self-Consistency）的一致率计算节点隐式得分；</li>
          <li><strong>回溯与决策</strong>：采用改进的 UCT 公式平衡探索与利用，最终选取最优推理路径。</li>
        </ol>
        
        <pre><code>// 动态难度路由伪代码 (Python / vLLM)
def route_and_generate(prompt, model, threshold=0.42):
    # 预先生成前5个Token并计算平均预测熵
    early_tokens, entropies = model.generate_early_tokens(prompt, max_tokens=5)
    mean_entropy = sum(entropies) / len(entropies)
    
    if mean_entropy < threshold:
        # 低难度：直接快速贪心生成
        return model.greedy_decode(prompt)
    else:
        # 高难度：调度至隐式值引导 MCTS 慢思考搜索
        mcts_engine = ImplicitMCTSEngine(model, beam_width=4, max_depth=8)
        return mcts_engine.search(prompt, initial_context=early_tokens)</code></pre>

        <h3>三、MATH 基准评测与算力开销削减</h3>
        <p>在严苛的 <strong>MATH</strong> 数学推理数据集上（基于 Qwen-2.5-7B）：</p>
        <ul>
          <li>准确率从 Greedy 基线的 <strong>42.25%</strong> 大幅提升至 <strong>46.0% (+3.75%)</strong>；</li>
          <li>由于动态路由机制避免了在海量简单题目上滥用搜索，整体平均算力开销仅为单次推理的 <strong>1.67x</strong>（传统全量搜索通常需要 2.0x~4.0x 以上）。</li>
        </ul>
      `
    },
    en: {
      title: 'Deep Dive into LLM Test-Time Compute: Predictive Entropy Routing & vLLM MCTS in Practice',
      categoryName: 'LLM & Reasoning',
      description: 'Test-time compute scaling is pivotal for LLM complex reasoning. This article details how I designed Lightweight Adaptive Search (LAS) using early-token predictive entropy to route hard queries to an implicit-value-guided MCTS engine on vLLM.',
      content: `
        <p>In mathematical and logical reasoning, static greedy decoding fails on challenging problems, while exhaustive tree search imposes prohibitive latency. **I designed Lightweight Adaptive Search (LAS) to dynamically allocate test-time compute based on problem difficulty.**</p>
        
        <h3>1. Predictive Entropy as Difficulty Indicator</h3>
        <p>A model\'s confidence surfaces in its initial output distribution:</p>
        <ul>
          <li><strong>Early Token Entropy</strong>: By evaluating Shannon entropy over the first 5 generated tokens, the system reliably predicts whether the query falls into low-confidence territory.</li>
          <li><strong>Dual-Track Routing</strong>: Queries with low entropy finish immediately via greedy decoding, while high-entropy queries enter tree search.</li>
        </ul>

        <h3>2. Implicit-Value-Guided MCTS on vLLM</h3>
        <p>Traditional MCTS relies on noisy self-evaluation prompts. We built a lightweight engine directly inside vLLM:</p>
        <ol>
          <li><strong>Expansion</strong>: Expands Top-K high-information candidate steps at key branch points;</li>
          <li><strong>Implicit Scoring</strong>: Evaluates node quality using token-level perplexity and self-consistency consensus rather than slow LLM-as-a-judge prompts;</li>
          <li><strong>Backpropagation</strong>: Applies adaptive UCT bounds to select optimal reasoning trajectories.</li>
        </ol>
        
        <pre><code># Dynamic routing pseudo-code (Python / vLLM)
def route_and_generate(prompt, model, threshold=0.42):
    early_tokens, entropies = model.generate_early_tokens(prompt, max_tokens=5)
    mean_entropy = sum(entropies) / len(entropies)
    
    if mean_entropy < threshold:
        return model.greedy_decode(prompt)
    else:
        mcts_engine = ImplicitMCTSEngine(model, beam_width=4, max_depth=8)
        return mcts_engine.search(prompt, initial_context=early_tokens)</code></pre>

        <h3>3. Benchmark Results on MATH</h3>
        <p>On the competitive <strong>MATH</strong> benchmark using Qwen-2.5-7B, LAS boosted accuracy from <strong>42.25% to 46.0% (+3.75%)</strong>, while capping compute overhead at just <strong>1.67x</strong> compared to standard 2.00x+ search baselines.</p>
      `
    }
  },
  {
    id: 'multimodal-spatial-ai-post',
    category: 'architecture',
    date: '2026-07-25',
    zh: {
      title: '多模态大模型工程实践：从高分辨率 A0 图纸解析到空间拓扑图谱 (Scene Graph) 的构建与校验',
      categoryName: '空间多模态与视觉',
      description: '大尺寸工程图纸在传统多模态模型中面临严重的像素下采样失真问题。本文系统回顾了我在微调 Qwen-VL 进行空间实体定位、利用动态分幅保留细节、构建 Scene Graph 空间拓扑图以及对接 NetworkX 算法进行安全疏散距离核验的全套落地流程。',
      content: `
        <p>建筑与工程图纸（如 A0/A1 规格）通常包含数十万像素的密集细线、文字标注与拓扑空间结构。普通的通用多模态视觉大模型（VLM）在面对大图时会直接将其等比缩放至 448x448 或 1024x1024，导致关键的消防门、走廊尺寸和墙体边界全部模糊成不可读的噪点。<strong>为此，我主导设计并实现了高分辨率图纸解析与空间拓扑图谱构建系统。</strong></p>
        
        <h3>一、动态分幅 (Dynamic Patching) 与微调 Qwen-VL</h3>
        <ul>
          <li><strong>动态分幅算法</strong>：针对 A0/A1 图纸自适应划分网格瓦片（Patches），在保持全局坐标锚点（Anchor）的同时，将局部高分辨率图元保留并送入 Vision Transformer。</li>
          <li><strong>归一化坐标与空间实体抽取</strong>：通过微调 <strong>Qwen-VL</strong>，模型能够准确理解图纸中的视觉提示词，精准输出房间名称、承重墙体以及消防安全门的边界框（Bounding Box）坐标：<code>[ymin, xmin, ymax, xmax]</code>。</li>
        </ul>

        <h3>二、自动构建 Scene Graph 空间拓扑图</h3>
        <p>仅有空间实体的离散坐标是远远不够的。为了辅助设计师和审查人员完成合规验证，必须将空间重塑为关系图：</p>
        <ol>
          <li><strong>实体节点生成</strong>：每个识别出的空间（房间、前室、走廊、疏散楼梯间）成为拓扑图中的节点；</li>
          <li><strong>连通性边判定</strong>：基于门窗物理交集判定实体间的可通行性（Passable Edge），并赋予几何中心距离权重；</li>
          <li><strong>对接 NetworkX 算法验证</strong>：调用 Dijkstra 与全源最短路径算法，全自动遍历任意房间到最近疏散出口的最长行走距离，与国家规范阈值进行秒级比对。</li>
        </ol>
        
        <pre><code># 空间拓扑合规校验伪代码 (NetworkX)
import networkx as nx

def verify_evacuation_compliance(scene_graph, max_evac_distance=30.0):
    violations = []
    for room in scene_graph.get_occupied_spaces():
        # 寻找到达任一最近防烟楼梯间的最短路径
        min_dist = float('inf')
        for exit_node in scene_graph.get_fire_exits():
            if nx.has_path(scene_graph.graph, room.id, exit_node.id):
                d = nx.shortest_path_length(scene_graph.graph, room.id, exit_node.id, weight='distance')
                min_dist = min(min_dist, d)
        
        if min_dist > max_evac_distance:
            violations.append({'space': room.name, 'actual_distance': min_dist, 'limit': max_evac_distance})
    return violations</code></pre>

        <h3>三、DPO 对齐与高性能 vLLM 部署</h3>
        <p>为了让 AI 输出的审查报告符合严谨的工程术语规范，我们采用 **DPO (Direct Preference Optimization)** 进行了规范性偏好对齐。最终模型经过 AWQ 4-bit 量化，部署在 **vLLM** 多卡推理引擎上，实现了毫秒级的高清图纸交互式在线审查体验。</p>
      `
    },
    en: {
      title: 'Multimodal Spatial AI: From A0 Draft Parsing to Scene Graph Construction & Path Validation',
      categoryName: 'Spatial Multimodal & Vision',
      description: 'Large-scale architectural drafts suffer severe downsampling loss in generic VLMs. This post reviews how I built a dynamic patching pipeline, fine-tuned Qwen-VL for spatial entity extraction, constructed Scene Graphs, and interfaced NetworkX for code compliance.',
      content: `
        <p>Architectural drafts (A0/A1) pack hundreds of thousands of fine vector lines and dense annotations. Standard VLMs compress images to 448x448, turning vital fire doors and corridors into unreadable blurs. **I designed a high-resolution multimodal parsing and Scene Graph topology pipeline to solve this.**</p>
        
        <h3>1. Dynamic Patching & Qwen-VL Fine-Tuning</h3>
        <ul>
          <li><strong>Dynamic Patching</strong>: Adaptive tile division preserves vector-raster details while maintaining unified global anchor coordinates.</li>
          <li><strong>Visual Entity Extraction</strong>: Fine-tuned **Qwen-VL** with normalized bounding boxes to locate rooms, structural walls, and fire escape exits.</li>
        </ul>

        <h3>2. Automated Scene Graph Topology</h3>
        <p>Spatial coordinates alone cannot verify building regulations. We transform discrete boxes into a connected topological graph:</p>
        <ol>
          <li><strong>Nodes</strong>: Each physical room or transit space becomes a graph vertex;</li>
          <li><strong>Edges</strong>: Doorway intersections dynamically instantiate passable edges with Euclidean distance weights;</li>
          <li><strong>NetworkX Compliance Solving</strong>: Runs shortest-path calculations to verify maximum evacuation distances against statutory standards.</li>
        </ol>
        
        <pre><code># Compliance checking pseudo-code
import networkx as nx

def verify_evacuation_compliance(scene_graph, max_evac_distance=30.0):
    violations = []
    for room in scene_graph.get_occupied_spaces():
        distances = [nx.shortest_path_length(scene_graph.graph, room.id, exit.id, weight='distance')
                     for exit in scene_graph.get_fire_exits() if nx.has_path(scene_graph.graph, room.id, exit.id)]
        if distances and min(distances) > max_evac_distance:
            violations.append((room.name, min(distances)))
    return violations</code></pre>

        <h3>3. DPO Alignment & vLLM Serving</h3>
        <p>We aligned outputs with professional terminology using **Direct Preference Optimization (DPO)**. Quantized to AWQ 4-bit and served on **vLLM**, the engine powers sub-second interactive layout validation.</p>
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
    ? 'ounc (刘文帝) · Tech Blog | 后端架构 · AI 工程与算法实践' 
    : 'ounc (Wendi Liu) · Tech Blog | Backend · AI & Spatial Systems';
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
