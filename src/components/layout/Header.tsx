'use client';

import { useState } from 'react';
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

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 min-h-16 border-b border-border bg-background/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* 刊物名 */}
          <Link href="/" className="font-serif text-lg font-semibold tracking-wide text-foreground">
            Fengmin
          </Link>

          {/* Desktop nav — 目录式编号导航 */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
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
            type="button"
            className="inline-flex items-center justify-center p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="border-t border-border bg-background py-4 md:hidden">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="meta-label block border-b border-border px-2 py-4 text-foreground last:border-b-0"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="mr-2 text-accent-ink">{link.index}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}
