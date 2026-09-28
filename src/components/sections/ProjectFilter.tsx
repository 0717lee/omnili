'use client';

import { filteredProjects, projectFilters, type ProjectFilterValue } from '@/lib/project-filter';

interface ProjectFilterProps {
  activeFilter: ProjectFilterValue;
  onFilterChange: (filter: ProjectFilterValue) => void;
}

export default function ProjectFilter({
  activeFilter,
  onFilterChange,
}: ProjectFilterProps) {
  return (
    <div className="flex gap-2 border-b border-border sm:gap-8" role="tablist" aria-label="按项目类型筛选">
      {projectFilters.map((f, index) => {
        const active = activeFilter === f.value;
        return (
          <button
            key={f.value}
            type="button"
            role="tab"
            id={`filter-${f.value}`}
            data-filter={f.value}
            aria-controls="project-results"
            aria-selected={active}
            tabIndex={active ? 0 : -1}
            onClick={() => onFilterChange(f.value)}
            onKeyDown={(event) => {
              let nextIndex: number;
              if (event.key === 'ArrowRight') nextIndex = (index + 1) % projectFilters.length;
              else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + projectFilters.length) % projectFilters.length;
              else if (event.key === 'Home') nextIndex = 0;
              else if (event.key === 'End') nextIndex = projectFilters.length - 1;
              else return;
              event.preventDefault();
              const next = projectFilters[nextIndex];
              event.currentTarget.parentElement?.querySelector<HTMLButtonElement>(`[data-filter="${next.value}"]`)?.focus();
              onFilterChange(next.value);
            }}
            className={`meta-label -mb-px inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center gap-1.5 border-b-2 px-2 py-3 transition-colors duration-200 ${
              active
                ? 'border-accent-ink font-semibold text-accent-ink'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {f.label}
            <span aria-hidden="true" className="text-[0.6875rem] tabular-nums opacity-65">{filteredProjects(f.value).length}</span>
          </button>
        );
      })}
    </div>
  );
}
