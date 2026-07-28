import { profile } from '@/data/profile';
import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Skills() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <ScrollReveal>
          {/* Section 标题行 — 杂志栏目式 */}
          <div className="mb-4 flex items-baseline gap-6">
            <span className="meta-label text-accent-ink">Capabilities</span>
            <span className="h-px flex-1 self-center bg-border" aria-hidden="true" />
            <span className="meta-label text-muted-foreground">Tools of Trade</span>
          </div>
          <h2 className="mb-12 font-serif text-3xl font-semibold text-foreground md:text-4xl">
            技术清单
          </h2>
        </ScrollReveal>

        {/* 纯排版式清单 — 左分类名 · 右技术列表 */}
        <ScrollReveal delay={100}>
          <dl className="border-t border-border">
            {profile.skills.map((group) => (
              <div
                key={group.category}
                className="grid grid-cols-1 gap-2 border-b border-border px-2 py-7 md:grid-cols-[14rem_1fr] md:gap-8 md:px-4"
              >
                <dt className="font-serif text-lg font-semibold text-foreground">
                  {group.category}
                </dt>
                <dd className="self-center text-sm leading-relaxed text-muted-foreground">
                  {group.items.map((skill, i) => (
                    <span key={skill}>
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
        </ScrollReveal>
      </Container>
    </section>
  );
}
