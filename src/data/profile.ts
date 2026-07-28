export interface Profile {
  name: string;
  title: string;
  bio: string;
  avatar?: string;
  skills: {
    category: string;
    items: string[];
  }[];
  social: {
    github?: string;
    email?: string;
  };
}

export const profile: Profile = {
  name: 'Fengmin',
  title: '独立开发者 & 产品构建者',
  bio: `写代码像在写信——给未来的自己，给偶然点进这个网站的你。

从浏览器里一个像素的偏移，到 AI Agent 的一次自主决策，我都觉得有趣。做过实时协作白板，做过工厂质检系统，也做过古籍智能解读——跨度很大，但本质上都是在解同一个问题：怎么让复杂的东西变得好用。

开源社区是我的健身房。最近在琢磨 AI 和前端工程交叉的地带，那里有很多还没被命名的东西等着被创造。`,
  skills: [
    {
      category: '界面工程',
      items: ['React', 'TypeScript', 'Next.js', 'Vue', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      category: '智能应用',
      items: ['LangGraph', 'RAG', 'FastAPI', 'OpenAI API', 'DashScope', 'FAISS'],
    },
    {
      category: '服务与数据',
      items: ['Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Prisma', 'WebSocket'],
    },
    {
      category: '工程化',
      items: ['Docker', 'Git', 'Vercel', 'Figma', 'Python'],
    },
  ],
  social: {
    github: 'https://github.com/0717lee',
    email: '2080291162@qq.com',
  },
};
