import Link from 'next/link';
import type { Project } from '@/data/projects';
import { projectFilterQuery, type ProjectFilterValue } from '@/lib/project-filter';
import ProjectLinkStatus from './ProjectLinkStatus';

const CATEGORY_LABEL: Record<string, string> = {
  web: 'Web',
  ai: 'AI',
  tool: 'Tool',
};

interface ProjectIndexListProps {
  projects: Project[];
  filter?: ProjectFilterValue;
}

/**
 * 编辑式项目索引列表 — 杂志目录风格
 * 每行：序号（克莱因蓝）+ 名称（衬线）+ 副标题 + 分类/技术 + 箭头
 * hover 整行反色：墨黑底 · 纸白字
 */
export default function ProjectIndexList({ projects, filter = 'all' }: ProjectIndexListProps) {
  return (
    <ul className="project-index border-t border-border">
      {projects.map((project, idx) => (
        <li key={project.id}>
          <Link
            href={`/projects/${project.id}${projectFilterQuery(filter)}`}
            className="project-row group grid grid-cols-[1.75rem_minmax(0,1fr)_1rem] items-baseline gap-x-3 border-b border-border px-2 py-6 transition-colors duration-200 hover:bg-foreground sm:grid-cols-[2.5rem_minmax(0,1fr)_1.5rem] md:grid-cols-[3.5rem_minmax(0,1.15fr)_minmax(0,0.85fr)_10rem_2rem] md:gap-x-5 md:px-4"
          >
            {/* 序号 */}
            <span className="meta-label text-accent-ink transition-colors duration-300 group-hover:text-background/60">
              {String(idx + 1).padStart(2, '0')}
            </span>

            {/* 名称 + 副标题（移动端合并一列） */}
            <span className="min-w-0">
              <span className="project-title block break-words font-serif text-xl font-semibold leading-snug text-foreground transition-colors duration-200 group-hover:text-background md:text-2xl">
                {project.title}
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-muted-foreground transition-colors duration-200 group-hover:text-background/80 md:hidden">
                {project.subtitle}
              </span>
              <span className="meta-label mt-3 block text-accent-ink group-hover:text-background/80 md:hidden">
                {CATEGORY_LABEL[project.category]} · {project.techStack[0]}
              </span>
            </span>

            {/* 副标题 — 桌面端独立列 */}
            <span className="hidden text-sm leading-relaxed text-muted-foreground transition-colors duration-200 group-hover:text-background/80 md:block">
              {project.subtitle}
            </span>

            {/* 分类 / 技术 */}
            <span className="meta-label hidden text-muted-foreground transition-colors duration-300 group-hover:text-background/60 md:block">
              {CATEGORY_LABEL[project.category] ?? project.category} /{' '}
              {project.techStack[0]}
            </span>

            {/* 箭头 */}
            <ProjectLinkStatus />
          </Link>
        </li>
      ))}
    </ul>
  );
}
