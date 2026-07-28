import Link from 'next/link';
import type { Project } from '@/data/projects';

const CATEGORY_LABEL: Record<string, string> = {
  web: 'Web',
  ai: 'AI',
  tool: 'Tool',
  featured: 'Web',
};

interface ProjectIndexListProps {
  projects: Project[];
}

/**
 * 编辑式项目索引列表 — 杂志目录风格
 * 每行：序号（克莱因蓝）+ 名称（衬线）+ 副标题 + 分类/技术 + 箭头
 * hover 整行反色：墨黑底 · 纸白字
 */
export default function ProjectIndexList({ projects }: ProjectIndexListProps) {
  return (
    <ul className="border-t border-border">
      {projects.map((project, idx) => (
        <li key={project.id}>
          <Link
            href={`/projects/${project.id}`}
            className="group grid grid-cols-[2.5rem_1fr_1.5rem] items-baseline gap-x-4 border-b border-border px-2 py-6 transition-colors duration-300 hover:bg-foreground md:grid-cols-[3.5rem_minmax(0,1.15fr)_minmax(0,0.85fr)_11rem_2rem] md:px-4"
          >
            {/* 序号 */}
            <span className="meta-label text-accent-ink transition-colors duration-300 group-hover:text-background/60">
              {String(idx + 1).padStart(2, '0')}
            </span>

            {/* 名称 + 副标题（移动端合并一列） */}
            <span className="min-w-0">
              <span className="block truncate font-serif text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-background md:text-2xl">
                {project.title}
              </span>
              <span className="mt-1 block text-sm text-muted-foreground transition-colors duration-300 group-hover:text-background/60 md:hidden">
                {project.subtitle}
              </span>
            </span>

            {/* 副标题 — 桌面端独立列 */}
            <span className="hidden truncate text-sm text-muted-foreground transition-colors duration-300 group-hover:text-background/60 md:block">
              {project.subtitle}
            </span>

            {/* 分类 / 技术 */}
            <span className="meta-label hidden text-muted-foreground transition-colors duration-300 group-hover:text-background/60 md:block">
              {CATEGORY_LABEL[project.category] ?? project.category} /{' '}
              {project.techStack[0]}
            </span>

            {/* 箭头 */}
            <span
              className="justify-self-end text-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-background"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
