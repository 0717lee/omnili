'use client';

type FilterType = 'all' | 'web' | 'ai' | 'tool';

interface ProjectFilterProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters: { label: string; value: FilterType }[] = [
  { label: '全部', value: 'all' },
  { label: 'Web 应用', value: 'web' },
  { label: 'AI', value: 'ai' },
  { label: '工具', value: 'tool' },
];

export default function ProjectFilter({
  activeFilter,
  onFilterChange,
}: ProjectFilterProps) {
  return (
    <div className="flex gap-8 border-b border-border" role="tablist">
      {filters.map((f) => {
        const active = activeFilter === f.value;
        return (
          <button
            key={f.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onFilterChange(f.value)}
            className={`meta-label -mb-px cursor-pointer border-b pb-3 transition-colors duration-300 ${
              active
                ? 'border-accent-ink text-foreground'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}
