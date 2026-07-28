export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detail: string;
  techStack: string[];
  category: 'featured' | 'web' | 'ai' | 'tool';
  links: {
    demo?: string;
    github?: string;
    video?: string;
    package?: string;
  };
  images?: string[];
  isFeatured: boolean;
  order: number;
}

export const projects: Project[] = [
  // ── Tier 1 ──────────────────────────────────────────────────────────────
  {
    id: 'collabboard',
    title: 'CollabBoard',
    subtitle: '实时协作白板',
    description: '支持多人实时协作的在线白板工具，让远程创意协作触手可及。',
    detail:
      '基于 Fabric.js 构建画布引擎，结合 Liveblocks 实现毫秒级多人同步，' +
      '支持画笔、形状、文本、便签等多种工具。' +
      '使用 Supabase 提供持久化存储与实时订阅，确保数据不丢失。',
    techStack: ['React 19', 'TypeScript', 'Fabric.js', 'Liveblocks', 'Supabase'],
    category: 'web',
    links: {
      demo: 'https://collabboard.pages.dev',
      github: 'https://github.com/0717lee/collabboard',
    },
    images: ['/images/projects/collabboard.png'],
    isFeatured: true,
    order: 1,
  },
  {
    id: 'lumina-flow',
    title: 'Lumina Flow',
    subtitle: '空间思维引擎',
    description: '以节点画布为核心的空间化思维整理与知识管理工具。',
    detail:
      '借助 React Flow 打造无限画布，支持节点拖拽、连线、分组与缩放，' +
      '用 Zustand 管理全局状态，保证复杂交互下的流畅体验。' +
      'Tailwind CSS 构建清新简洁的界面，让思维自由流动。',
    techStack: ['React 19', 'React Flow', 'Zustand', 'Tailwind CSS'],
    category: 'web',
    links: {
      github: 'https://github.com/0717lee/lumina-flow',
    },
    images: ['/images/projects/lumina-flow.png'],
    isFeatured: true,
    order: 2,
  },
  {
    id: 'maintainer-agent',
    title: 'maintainer-agent',
    subtitle: '开源维护助手',
    description: '基于 LLM 的开源项目维护 Agent，辅助 Issue 分析与 PR 审查。',
    detail:
      '使用 LangGraph 编排多步骤 Agent 工作流，FastAPI 提供后端服务，' +
      'React 前端可视化展示分析结果。' +
      'Docker 一键部署，降低开源社区维护门槛。',
    techStack: ['Python', 'LangGraph', 'FastAPI', 'React', 'Docker'],
    category: 'ai',
    links: {
      demo: 'https://maintainer-agent.onrender.com',
      github: 'https://github.com/0717lee/OSS-Maintainer-Assistant',
    },
    images: ['/images/projects/maintainer-agent.png'],
    isFeatured: true,
    order: 3,
  },
  {
    id: 'wendao',
    title: 'WenDao 古籍智解',
    subtitle: 'AI 古籍阅读平台',
    description: '将 RAG 检索增强技术应用于古籍阅读，让经典触手可及。',
    detail:
      '基于 FAISS 向量检索构建古籍知识库，结合 RAG 管线实现精准问答，' +
      'React 19 前端提供沉浸式阅读体验，FastAPI 后端保障高并发性能。' +
      'PostgreSQL 持久化存储，让古籍研究更高效。',
    techStack: ['React 19', 'FastAPI', 'FAISS', 'RAG', 'PostgreSQL'],
    category: 'ai',
    links: {
      demo: 'https://47.122.117.93/',
    },
    images: ['/images/projects/wendao.png'],
    isFeatured: true,
    order: 4,
  },

  // ── Tier 2 ──────────────────────────────────────────────────────────────
  {
    id: 'qice-agent',
    title: '启策 Vertical Industry Agent',
    subtitle: '高企申报 Agent',
    description: '面向高新技术企业申报场景的垂直领域智能 Agent。',
    detail:
      '基于 Next.js 14 构建全栈应用，接入阿里云百炼平台与 Qwen 大模型，' +
      '针对高企申报政策进行深度微调，实现材料智能生成与合规性检查。',
    techStack: ['Next.js 14', '阿里云百炼', 'Qwen'],
    category: 'ai',
    links: {},
    images: ['/images/projects/qice-agent.png'],
    isFeatured: true,
    order: 5,
  },
  {
    id: 'screenwright',
    title: 'Screenwright 剧本工坊',
    subtitle: 'AI 小说转剧本',
    description: '一键将小说文本转化为专业影视剧本格式。',
    detail:
      '使用 Python + Streamlit 快速搭建交互界面，调用 OpenAI API 完成' +
      '文本理解与格式转换，支持角色提取、场景分割与对白格式化。' +
      '演示视频已发布于 Bilibili。',
    techStack: ['Python', 'Streamlit', 'OpenAI'],
    category: 'tool',
    links: {
      video: 'https://www.bilibili.com/video/BV1yAEb6BEke/',
      github: 'https://github.com/0717lee/screenwright',
    },
    images: ['/images/projects/screenwright.png'],
    isFeatured: true,
    order: 6,
  },
  {
    id: 'pupil',
    title: 'Pupil 瞳话',
    subtitle: 'AI 视觉对话助手',
    description: '融合视觉理解与语言生成的多模态 AI 对话助手。',
    detail:
      '基于 FastAPI 构建后端服务，接入阿里云 DashScope 多模态模型，' +
      '实现图像理解与智能问答的无缝结合，让 AI 真正"看见"并"回应"。',
    techStack: ['Python', 'FastAPI', '阿里云 DashScope'],
    category: 'ai',
    links: {
      video: 'https://www.bilibili.com/video/BV18qJA6VEND/',
      github: 'https://github.com/0717lee/pupil',
    },
    images: ['/images/projects/pupil.png'],
    isFeatured: true,
    order: 7,
  },
  {
    id: 'aeronexus',
    title: 'AeroNexus 空枢',
    subtitle: '低空交通管理',
    description: '面向低空经济场景的无人机交通管理与可视化平台。',
    detail:
      'React 前端结合 deck.gl 实现大规模空间数据可视化，' +
      'FastAPI + WebSocket 提供实时数据推送，支撑低空航路规划与冲突检测。',
    techStack: ['React', 'deck.gl', 'FastAPI', 'WebSocket'],
    category: 'web',
    links: {},
    images: ['/images/projects/aeronexus.png'],
    isFeatured: true,
    order: 8,
  },
  {
    id: 'processmind',
    title: 'ProcessMind 工艺大脑',
    subtitle: '工业质量管理',
    description: '融合机器学习与知识图谱的工业质量智能管控系统。',
    detail:
      'React 前端提供工艺数据看板，FastAPI 后端集成 LangGraph Agent 与 ML 模型，' +
      '实现缺陷预测、根因分析与工艺参数优化建议。',
    techStack: ['React', 'FastAPI', 'LangGraph', 'ML'],
    category: 'ai',
    links: {},
    images: ['/images/projects/processmind.png'],
    isFeatured: true,
    order: 9,
  },

  // ── Tier 3 ──────────────────────────────────────────────────────────────
  {
    id: 'competemate',
    title: 'CompeteMate 竞搭',
    subtitle: '竞赛组队平台',
    description: '帮助大学生高效找到志同道合的竞赛队友的组队平台。',
    detail:
      'React 19 构建现代前端，Node.js + Express 提供 RESTful API，' +
      'PostgreSQL 存储用户与队伍数据，Docker 容器化部署，保障稳定运行。',
    techStack: ['React 19', 'Node.js', 'PostgreSQL', 'Docker'],
    category: 'web',
    links: {},
    images: ['/images/projects/competemate.png'],
    isFeatured: false,
    order: 10,
  },
  {
    id: 'smart-display',
    title: 'Smart Display 小惠',
    subtitle: '政务智能屏',
    description: '集成手势识别的政务服务大厅智能交互终端。',
    detail:
      'React 前端结合 MediaPipe 实现手势识别交互，FastAPI 后端对接政务知识库，' +
      '为办事群众提供自然流畅的自助查询体验。',
    techStack: ['React', 'MediaPipe', 'FastAPI'],
    category: 'ai',
    links: {},
    images: ['/images/projects/smart-display.png'],
    isFeatured: false,
    order: 11,
  },
  {
    id: 'pixelforge',
    title: 'PixelForge',
    subtitle: 'MoonBit 图像处理库',
    description: '基于 MoonBit 语言编译到 WASM 的高性能图像处理库。',
    detail:
      '利用 MoonBit 编译到 WebAssembly，在浏览器端实现接近原生的图像处理性能，' +
      '提供滤镜、变换、调色等常用 API，供 JavaScript 项目直接调用。',
    techStack: ['MoonBit', 'WASM', 'JavaScript'],
    category: 'tool',
    links: {
      github: 'https://github.com/0717lee/pixelforge',
      package: 'https://mooncakes.io/docs/0717lee/pixelforge',
    },
    images: ['/images/projects/pixelforge.png'],
    isFeatured: false,
    order: 12,
  },
  {
    id: 'parkpilot',
    title: 'ParkPilot 园擎',
    subtitle: '园区管理 Agent',
    description: '面向产业园区的智能运维与物业管理 Agent 系统。',
    detail:
      'React 前端提供园区数据大屏，FastAPI + WebSocket 实现设备状态实时推送，' +
      'Agent 自动巡检并生成运维报告，提升园区管理效率。',
    techStack: ['React', 'FastAPI', 'WebSocket'],
    category: 'ai',
    links: {},
    images: ['/images/projects/parkpilot.png'],
    isFeatured: false,
    order: 13,
  },
  {
    id: 'anban',
    title: 'Anban 安伴',
    subtitle: '银龄守护 Agent',
    description: '面向独居老人的智能陪伴与健康守护 Agent。',
    detail:
      'React 前端为家属提供远程监护面板，Node.js 后端结合 WebSocket 实现' +
      '异常事件实时告警，Agent 主动关怀对话让老人不再孤单。',
    techStack: ['React', 'Node.js', 'WebSocket'],
    category: 'ai',
    links: {},
    images: ['/images/projects/anban.png'],
    isFeatured: false,
    order: 14,
  },
  {
    id: 'focus-tracker',
    title: 'Focus Tracker',
    subtitle: '专注时间追踪 PWA',
    description: '帮助记录与分析每日专注时长的渐进式 Web 应用。',
    detail:
      'React 19 构建 PWA 应用，支持离线使用与桌面安装，Supabase 云端同步数据，' +
      'Recharts 可视化专注趋势图表，帮助你养成深度工作习惯。',
    techStack: ['React 19', 'Supabase', 'Recharts', 'PWA'],
    category: 'web',
    links: {},
    images: ['/images/projects/focus-tracker.png'],
    isFeatured: false,
    order: 15,
  },
  {
    id: 'huihou-xingdongpai',
    title: 'huihou-xingdongpai 会后行动派',
    subtitle: 'AI 会议转任务',
    description: '将会议录音自动提炼为可执行任务清单的 AI 工具。',
    detail:
      '前端使用原生 HTML/CSS/JS 构建轻量界面，Node.js 后端接入 DashScope' +
      '语音识别与摘要能力，自动提取待办事项并分配责任人。',
    techStack: ['HTML/CSS/JS', 'Node.js', 'DashScope'],
    category: 'tool',
    links: {
      demo: 'https://huihou-xingdongpai.onrender.com',
    },
    images: ['/images/projects/huihou-xingdongpai.png'],
    isFeatured: false,
    order: 16,
  },
  {
    id: 'anxinban',
    title: 'anxinban 安心办',
    subtitle: 'AI 数字生活助手',
    description: '帮助中老年群体跨越数字鸿沟的智能办事助手。',
    detail:
      '简洁的 HTML/CSS/JS 前端搭配 Node.js 后端，接入大语言模型' +
      '以自然语言引导用户完成常见政务办事流程，降低数字政务使用门槛。',
    techStack: ['HTML/CSS/JS', 'Node.js'],
    category: 'tool',
    links: {
      demo: 'https://anxinban.onrender.com',
    },
    images: ['/images/projects/anxinban.png'],
    isFeatured: false,
    order: 17,
  },
];
