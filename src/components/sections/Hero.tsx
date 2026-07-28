import Link from 'next/link';
import Image from 'next/image';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import Container from '@/components/layout/Container';

export default function Hero() {
  const quote = profile.bio.split('\n')[0].trim();
  const workCount = projects.length;

  return (
    <section className="relative bg-background">
      <Container>
        {/* ── 顶部元信息行：刊号 ─────────────────────── */}
        <div
          className="stagger-item flex items-center justify-between border-b border-border py-4"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="meta-label text-muted-foreground">
            Issue Nº 01 — 2026
          </span>
          <span className="meta-label text-muted-foreground">Portfolio</span>
        </div>

        {/* ── 封面主体 ──────────────────────────────── */}
        <div className="grid grid-cols-1 items-center gap-12 py-16 md:py-20 lg:grid-cols-12 lg:gap-16">
          {/* 左侧：姓名 + 标语 + 引言 + CTA */}
          <div className="lg:col-span-7">
            {/* 小标签 — 克莱因蓝 */}
            <p
              className="stagger-item meta-label text-accent-ink"
              style={{ animationDelay: '0.2s' }}
            >
              {profile.title}
            </p>

            {/* 超大衬线姓名 — 纯墨黑 */}
            <h1
              className="stagger-item hero-display mt-6 font-serif font-semibold text-foreground"
              style={{ animationDelay: '0.3s' }}
            >
              {profile.name}
            </h1>

            {/* 中文标语 — 大字衬线，两行 */}
            <p
              className="stagger-item hero-slogan mt-8 font-serif font-semibold text-foreground"
              style={{ animationDelay: '0.45s' }}
            >
              把想法
              <br />
              做成产品。
            </p>

            {/* 衬线斜体引言 */}
            <p
              className="stagger-item mt-10 max-w-md border-l border-foreground/20 pl-5 font-serif text-base italic leading-[1.9] text-muted-foreground"
              style={{ animationDelay: '0.6s' }}
            >
              「{quote.replace(/。$/, '')}」
            </p>

            {/* 文字链接式 CTA */}
            <div
              className="stagger-item mt-12 flex items-center gap-10"
              style={{ animationDelay: '0.75s' }}
            >
              <Link
                href="#works"
                className="link-ink text-sm font-medium text-foreground"
              >
                查看作品 ↓
              </Link>
              {profile.social.github && (
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-ink text-sm font-medium text-foreground"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>

          {/* 右侧：抽象艺术图 — 直角 + 墨黑描边 */}
          <div
            className="stagger-item lg:col-span-5"
            style={{ animationDelay: '0.5s' }}
          >
            <figure className="relative border border-foreground/80 p-2">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/images/hero-art.png"
                  alt="抽象艺术 — 墨与蓝的构成"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <figcaption className="meta-label flex items-center justify-between pt-2 text-muted-foreground">
                <span>Fig. 01</span>
                <span>Composition in Ink & Blue</span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* ── 底部元信息行 ──────────────────────────── */}
        <div
          className="stagger-item flex items-center justify-between border-t border-border py-4"
          style={{ animationDelay: '0.9s' }}
        >
          <span className="meta-label text-muted-foreground">Scroll</span>
          <span className="meta-label text-muted-foreground">
            {workCount} Works
          </span>
        </div>
      </Container>
    </section>
  );
}
