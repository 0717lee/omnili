import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { projects } from '@/data/projects';

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: '项目未找到' };
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — Fengmin`,
      description: project.description,
      type: 'article',
      locale: 'zh_CN',
      siteName: 'Fengmin',
      images: [
        {
          url: `/api/og?id=${project.id}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

const CATEGORY_LABEL: Record<string, string> = {
  web: 'Web',
  ai: 'AI',
  tool: 'Tool',
  featured: 'Web',
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];

  if (!project) notFound();

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const externalLinks = [
    project.links.demo && { label: '在线演示 ↗', href: project.links.demo },
    project.links.github && { label: 'GitHub ↗', href: project.links.github },
    project.links.video && { label: '演示视频 ↗', href: project.links.video },
    project.links.package && { label: 'Mooncakes ↗', href: project.links.package },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <article className="mx-auto max-w-4xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      {/* 返回索引 */}
      <Link href="/projects" className="link-ink meta-label text-muted-foreground">
        ← 返回索引
      </Link>

      {/* 刊头元信息行 */}
      <div className="mt-10 flex items-baseline gap-6">
        <span className="meta-label text-accent-ink">
          Nº {String(projectIndex + 1).padStart(2, '0')} /{' '}
          {String(projects.length).padStart(2, '0')}
        </span>
        <span className="h-px flex-1 self-center bg-border" aria-hidden="true" />
        <span className="meta-label text-muted-foreground">
          {CATEGORY_LABEL[project.category] ?? project.category}
        </span>
      </div>

      {/* 大标题 — 衬线 */}
      <h1 className="mt-8 font-serif font-semibold leading-[1.1] text-foreground [font-size:clamp(2.5rem,6vw,4.5rem)]">
        {project.title}
      </h1>
      <p className="mt-4 font-serif text-lg italic text-muted-foreground">
        {project.subtitle}
      </p>

      {/* 元信息栏 — 分类 / 技术 / 链接 */}
      <div className="mt-12 grid grid-cols-1 gap-8 border-y border-border py-8 sm:grid-cols-3">
        <div className="min-w-0">
          <p className="meta-label mb-3 text-muted-foreground">Category</p>
          <p className="text-sm text-foreground">
            {CATEGORY_LABEL[project.category] ?? project.category}
          </p>
        </div>
        <div className="min-w-0">
          <p className="meta-label mb-3 text-muted-foreground">Stack</p>
          <p className="flex flex-wrap items-baseline gap-y-1 text-sm leading-relaxed text-foreground">
            {project.techStack.map((tech, i) => (
              <span key={tech} className="whitespace-nowrap">
                {i > 0 && (
                  <span className="mx-1.5 text-border" aria-hidden="true">
                    /
                  </span>
                )}
                {tech}
              </span>
            ))}
          </p>
        </div>
        <div className="min-w-0">
          <p className="meta-label mb-3 text-muted-foreground">Links</p>
          {externalLinks.length > 0 ? (
            <div className="flex flex-col items-start gap-2">
              {externalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-ink text-sm text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">—</p>
          )}
        </div>
      </div>

      {/* 图片 — 直角 + 描边；无图时用墨黑/克莱因蓝双色版面 */}
      {project.images && project.images.length > 0 ? (
        <div className="mt-12 flex flex-col gap-10">
          {project.images.map((src, i) => (
            <figure key={src} className="border border-foreground/80 p-2">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={src}
                  alt={`${project.title} — 界面截图 ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 900px) 100vw, 900px"
                  priority={i === 0}
                />
              </div>
              <figcaption className="meta-label flex items-center justify-between pt-2 text-muted-foreground">
                <span>Fig. {String(i + 1).padStart(2, '0')}</span>
                <span>{project.subtitle}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <figure className="mt-12 border border-foreground/80 p-2">
          <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-foreground">
            {/* 克莱因蓝色块 — 构成主义式版面 */}
            <div
              className="absolute inset-y-0 right-0 w-1/3 bg-accent-ink"
              aria-hidden="true"
            />
            <span className="relative z-10 px-8 text-center font-serif text-2xl font-semibold text-background md:text-3xl">
              {project.title}
            </span>
          </div>
          <figcaption className="meta-label flex items-center justify-between pt-2 text-muted-foreground">
            <span>Fig. {String(projectIndex + 1).padStart(2, '0')}</span>
            <span>{project.subtitle}</span>
          </figcaption>
        </figure>
      )}

      {/* 正文 */}
      <div className="mt-12 max-w-2xl">
        <p className="meta-label mb-4 text-accent-ink">About</p>
        <p className="text-base leading-[1.9] text-foreground/80 whitespace-pre-line">
          {project.detail}
        </p>
      </div>

      {/* 上一篇 / 下一篇 */}
      <nav className="mt-16 grid grid-cols-2 border-t border-border pt-8">
        {prevProject ? (
          <Link href={`/projects/${prevProject.id}`} className="group flex flex-col gap-2">
            <span className="meta-label text-muted-foreground">← 上一个</span>
            <span className="font-serif text-lg font-semibold text-foreground transition-colors group-hover:text-accent-ink">
              {prevProject.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {nextProject ? (
          <Link
            href={`/projects/${nextProject.id}`}
            className="group flex flex-col items-end gap-2 text-right"
          >
            <span className="meta-label text-muted-foreground">下一个 →</span>
            <span className="font-serif text-lg font-semibold text-foreground transition-colors group-hover:text-accent-ink">
              {nextProject.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
