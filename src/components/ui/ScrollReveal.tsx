'use client';

import { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.reveal = 'visible';
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    const prepareReveal = () => {
      observer.disconnect();
      delete el.dataset.reveal;
      if (motion.matches || el.getBoundingClientRect().top < window.innerHeight) return;
      el.dataset.reveal = 'pending';
      observer.observe(el);
    };
    prepareReveal();
    motion.addEventListener('change', prepareReveal);
    return () => {
      observer.disconnect();
      motion.removeEventListener('change', prepareReveal);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={['scroll-reveal', className].filter(Boolean).join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
