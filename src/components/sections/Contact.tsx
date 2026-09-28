import { profile } from '@/data/profile';
import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
import CopyEmail from '@/components/ui/CopyEmail';

export default function Contact() {
  const { social } = profile;

  return (
    <section id="contact" className="py-20 md:py-32">
      <Container>
        <ScrollReveal>
          {/* Section 标题行 — 杂志栏目式 */}
          <div className="mb-16 flex items-baseline gap-6">
            <span className="meta-label text-accent-ink">Contact</span>
            <span className="h-px flex-1 self-center bg-border" aria-hidden="true" />
            <span className="meta-label text-muted-foreground">Say Hello</span>
          </div>

          {/* 大字告白 */}
          <h2 className="font-serif font-semibold leading-[1.2] text-foreground [font-size:clamp(2.5rem,7vw,5rem)]">
            有个想法？
            <br />
            {social.email ? (
              <a href={`mailto:${social.email}`} className="link-ink">发封邮件</a>
            ) : (
              '聊聊'
            )}
            <span aria-hidden="true"> →</span>
          </h2>
          {social.email && <p className="mt-6 select-all break-all text-base text-muted-foreground">{social.email}</p>}

          {/* 底部小字链接 */}
          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-6">
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-ink meta-label text-muted-foreground"
              >
                GitHub ↗
              </a>
            )}
            {social.email && (
              <CopyEmail
                email={social.email}
                className="meta-label text-muted-foreground"
              />
            )}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
