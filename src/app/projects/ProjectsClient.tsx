'use client';

import { useEffect, useState } from 'react';
import { projects } from '@/data/projects';
import Container from '@/components/layout/Container';
import ProjectIndexList from '@/components/project/ProjectIndexList';
import ProjectFilter from '@/components/sections/ProjectFilter';
import { filteredProjects, parseProjectFilter, projectFilterQuery, type ProjectFilterValue } from '@/lib/project-filter';

export default function ProjectsClient({ initialFilter }: { initialFilter: ProjectFilterValue }) {
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const filtered = filteredProjects(activeFilter);

  useEffect(() => {
    const syncFilter = () => setActiveFilter(parseProjectFilter(new URL(window.location.href).searchParams.get('category')));
    window.addEventListener('popstate', syncFilter);
    return () => window.removeEventListener('popstate', syncFilter);
  }, []);

  const changeFilter = (filter: ProjectFilterValue) => {
    if (filter === activeFilter) return;
    setActiveFilter(filter);
    window.history.pushState(null, '', `/projects${projectFilterQuery(filter)}`);
  };

  return (
    <Container as="section" className="py-12 md:py-20">
      {/* 页面头部 — 索引扉页 */}
      <div className="mb-4 flex items-baseline gap-6">
        <span className="meta-label text-accent-ink">Index — All Works</span>
        <span className="h-px flex-1 self-center bg-border" aria-hidden="true" />
        <span className="meta-label text-muted-foreground">
          {String(projects.length).padStart(2, '0')} Entries
        </span>
      </div>
      <h1 className="font-serif text-4xl font-semibold text-foreground md:text-5xl">
        全部作品
      </h1>
      <p className="mt-4 max-w-xl font-serif text-base italic leading-relaxed text-muted-foreground">
        Web 应用、AI Agent、开发工具——每一个都是一次认真的实验。
      </p>

      {/* 文字式 tab 筛选 */}
      <div className="mt-12">
        <ProjectFilter activeFilter={activeFilter} onFilterChange={changeFilter} />
      </div>

      <p className="mt-4 text-sm text-muted-foreground" role="status" aria-live="polite" aria-atomic="true">
        显示 {filtered.length} 个项目，共 {projects.length} 个
      </p>

      {/* 编辑式索引列表 */}
      <div id="project-results" role="tabpanel" aria-labelledby={`filter-${activeFilter}`} tabIndex={0} className="project-results mt-6">
        <ProjectIndexList key={activeFilter} projects={filtered} filter={activeFilter} />
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center font-serif text-sm italic text-muted-foreground">
          这个分类还空着，下个项目说不定就填上了。
        </p>
      )}
    </Container>
  );
}
