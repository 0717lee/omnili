'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const posRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
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

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow hidden md:block" />;
}
