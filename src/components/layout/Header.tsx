'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Container from './Container';

const navLinks = [
  { index: '01', label: '首页', href: '/' },
  { index: '02', label: '项目', href: '/projects' },
  { index: '03', label: '关于', href: '/about' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        close();
        menuButtonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) close();
    };
    const desktop = window.matchMedia('(min-width: 768px)');
    const onBreakpointChange = () => {
      if (desktop.matches) close();
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('popstate', close);
    desktop.addEventListener('change', onBreakpointChange);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('popstate', close);
      desktop.removeEventListener('change', onBreakpointChange);
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 min-h-16 border-b border-border bg-background/90 backdrop-blur-md"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false);
      }}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* 刊物名 */}
          <Link href="/" onClick={() => setMenuOpen(false)} className="inline-flex min-h-11 items-center font-serif text-lg font-semibold tracking-wide text-foreground">
            Fengmin
          </Link>

          {/* Desktop nav — 目录式编号导航 */}
          <nav aria-label="主导航" className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`nav-link meta-label transition-colors ${
                  isActive(link.href)
                    ? 'active text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span className="mr-1.5 text-accent-ink">{link.index}</span>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-muted-foreground transition-colors hover:text-foreground md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        <div className="mobile-navigation" data-open={menuOpen} inert={!menuOpen} aria-hidden={!menuOpen}>
          <nav id="mobile-navigation" aria-label="移动导航" className="min-h-0 overflow-hidden bg-background">
            <ul className="flex flex-col border-t border-border py-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    className={`meta-label flex min-h-12 items-center border-b border-border px-2 py-4 last:border-b-0 ${isActive(link.href) ? 'text-accent-ink' : 'text-muted-foreground'}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="mr-2 text-accent-ink">{link.index}</span>
                    {link.label}
                    {isActive(link.href) && <span className="ml-auto text-xs">当前页面</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
