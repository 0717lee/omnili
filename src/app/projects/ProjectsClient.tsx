'use client';

import { useState } from 'react';
import { projects, type Project } from '@/data/projects';
import Container from '@/components/layout/Container';
import ProjectIndexList from '@/components/project/ProjectIndexList';
import ProjectFilter from '@/components/sections/ProjectFilter';
import ScrollReveal from '@/components/ui/ScrollReveal';

type FilterType = 'all' | 'web' | 'ai' | 'tool';

function filterProjects(filter: FilterType): Project[] {
  switch (filter) {
    case 'all':
      return projects;
    case 'web':
      return projects.filter((p) => p.category === 'web' || p.category === 'featured');
    case 'ai':
      return projects.filter((p) => p.category === 'ai');
    case 'tool':
      return projects.filter((p) => p.category === 'tool');
  }
}

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const filtered = filterProjects(activeFilter);

  return (
    <Container as="section" className="py-14 md:py-20">
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
      <p className="mt-4 max-w-md font-serif text-sm italic leading-relaxed text-muted-foreground">
        Web 应用、AI Agent、开发工具——每一个都是一次认真的实验。
      </p>

      {/* 文字式 tab 筛选 */}
      <div className="mt-12">
        <ProjectFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      </div>

      {/* 编辑式索引列表 */}
      <div className="mt-10">
        <ScrollReveal key={activeFilter}>
          <ProjectIndexList projects={filtered} />
        </ScrollReveal>
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center font-serif text-sm italic text-muted-foreground">
          这个分类还空着，下个项目说不定就填上了。
        </p>
      )}
    </Container>
  );
}
