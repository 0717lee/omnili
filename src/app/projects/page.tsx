import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: '项目',
  description: 'Fengmin 的全部作品——Web 应用、AI Agent、开发工具，每一个都是一次认真的实验。',
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
