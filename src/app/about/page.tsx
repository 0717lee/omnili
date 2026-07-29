import type { Metadata } from "next";
import { profile } from "@/data/profile";
import CopyEmail from "@/components/ui/CopyEmail";

export const metadata: Metadata = {
  title: "关于",
  description: profile.bio.slice(0, 120).replace(/\n/g, ""),
};

export default function AboutPage() {
  const paragraphs = profile.bio.split("\n\n");
  const pullQuote = paragraphs[0].trim();
  const bodyParagraphs = paragraphs.slice(1);

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      {/* ── 扉页 — 人物专访刊头 ── */}
      <header>
        <div className="mb-4 flex items-baseline gap-6">
          <span className="meta-label text-accent-ink">Profile — Interview</span>
          <span className="h-px flex-1 self-center bg-border" aria-hidden="true" />
          <span className="meta-label text-muted-foreground">Fengmin</span>
        </div>
        <h1 className="font-serif font-semibold leading-[1.1] text-foreground [font-size:clamp(3rem,8vw,5.5rem)]">
          关于我
        </h1>
        <p className="meta-label mt-6 text-muted-foreground">{profile.title}</p>
      </header>

      {/* ── 大字引言 ── */}
      <section className="mt-16 border-y border-border py-14">
        <p className="mx-auto max-w-2xl text-center font-serif text-2xl font-semibold italic leading-[1.6] text-foreground md:text-3xl">
          「{pullQuote.replace(/。$/, "")}」
        </p>
      </section>

      {/* ── 分栏正文 ── */}
      <section className="mt-16">
        <p className="meta-label mb-6 text-accent-ink">正文 — The Story</p>
        <div className="gap-12 md:columns-2">
          {bodyParagraphs.map((paragraph, i) => (
            <p
              key={i}
              className="mb-6 break-inside-avoid text-base leading-[1.9] text-foreground/80"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ── 技术清单 ── */}
      <section className="mt-20">
        <div className="mb-10 flex items-baseline gap-6">
          <span className="meta-label text-accent-ink">Capabilities</span>
          <span className="h-px flex-1 self-center bg-border" aria-hidden="true" />
        </div>
        <dl className="border-t border-border">
          {profile.skills.map((group) => (
            <div
              key={group.category}
              className="grid grid-cols-1 gap-2 border-b border-border px-2 py-6 md:grid-cols-[14rem_1fr] md:gap-8 md:px-4"
            >
              <dt className="font-serif text-base font-semibold text-foreground">
                {group.category}
              </dt>
              <dd className="flex flex-wrap items-baseline gap-y-1 self-center text-sm leading-relaxed text-muted-foreground">
                {group.items.map((skill, i) => (
                  <span key={skill} className="whitespace-nowrap">
                    {i > 0 && (
                      <span className="mx-2 text-border" aria-hidden="true">
                        /
                      </span>
                    )}
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── 联络 ── */}
      <section className="mt-20">
        <div className="mb-12 flex items-baseline gap-6">
          <span className="meta-label text-accent-ink">Contact</span>
          <span className="h-px flex-1 self-center bg-border" aria-hidden="true" />
        </div>
        <h2 className="font-serif text-3xl font-semibold leading-[1.3] text-foreground md:text-4xl">
          GitHub 看代码，
          <br />
          邮件聊想法。
        </h2>
        <div className="mt-10 flex items-center gap-10">
          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-ink meta-label text-muted-foreground"
            >
              GitHub ↗
            </a>
          )}
          {profile.social.email && (
            <CopyEmail
              email={profile.social.email}
              className="meta-label text-muted-foreground"
            />
          )}
        </div>
      </section>
    </div>
  );
}
