import Link from 'next/link';
import { projects } from '@/data/projects';
import Container from '@/components/layout/Container';
import ProjectIndexList from '@/components/project/ProjectIndexList';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function FeaturedProjects() {
  const featured = projects
    .filter((p) => p.isFeatured)
    .sort((a, b) => a.order - b.order)
    .slice(0, 8);

  return (
    <section id="works" className="py-20 md:py-28">
      <Container>
        <ScrollReveal>
          {/* Section 标题行 — 杂志栏目式 */}
          <div className="mb-4 flex items-baseline gap-6">
            <span className="meta-label text-accent-ink">Selected Works</span>
            <span className="h-px flex-1 self-center bg-border" aria-hidden="true" />
            <span className="meta-label text-muted-foreground">2022–2026</span>
          </div>
          <h2 className="mb-12 font-serif text-3xl font-semibold text-foreground md:text-4xl">
            精选作品
          </h2>
        </ScrollReveal>

        {/* 编辑式索引列表 */}
        <ScrollReveal delay={100}>
          <ProjectIndexList projects={featured} />
        </ScrollReveal>

        {/* 查看全部 */}
        <ScrollReveal delay={150}>
          <div className="mt-10 flex justify-end">
            <Link
              href="/projects"
              className="link-ink text-sm font-medium text-foreground"
            >
              查看全部 {projects.length} 个项目 →
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
