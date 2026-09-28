'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const posRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)');
    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(() => {
          if (glowRef.current) {
            glowRef.current.style.left = `${posRef.current.x}px`;
            glowRef.current.style.top = `${posRef.current.y}px`;
          }
          rafRef.current = null;
        });
      }
    };

    const updateTracking = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      if (motion.matches) {
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
      } else if (glowRef.current) {
        glowRef.current.style.left = '-1000px';
        glowRef.current.style.top = '-1000px';
      }
    };
    updateTracking();
    motion.addEventListener('change', updateTracking);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      motion.removeEventListener('change', updateTracking);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, []);

  return <div ref={glowRef} aria-hidden="true" className="cursor-glow hidden md:block" style={{ left: -1000, top: -1000 }} />;
}
