import { projects, type Project } from '@/data/projects';

export type ProjectFilterValue = 'all' | Project['category'];

export const projectFilters: { value: ProjectFilterValue; label: string }[] = [
  { value: 'all', label: '全部' },
  { value: 'web', label: 'Web 应用' },
  { value: 'ai', label: 'AI' },
  { value: 'tool', label: '工具' },
];

export function parseProjectFilter(value: string | string[] | null | undefined): ProjectFilterValue {
  return value === 'web' || value === 'ai' || value === 'tool' ? value : 'all';
}

export function filteredProjects(filter: ProjectFilterValue): Project[] {
  return filter === 'all' ? projects : projects.filter((project) => project.category === filter);
}

export function projectFilterQuery(filter: ProjectFilterValue): string {
  return filter === 'all' ? '' : `?category=${filter}`;
}
