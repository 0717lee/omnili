'use client';

import { useLinkStatus } from 'next/link';
import { LoaderCircle } from 'lucide-react';

export default function ProjectLinkStatus() {
  const { pending } = useLinkStatus();

  return (
    <span className="justify-self-end text-foreground transition-transform duration-200 group-hover:text-background motion-safe:group-hover:translate-x-1">
      <span aria-hidden="true">
        {pending ? <LoaderCircle className="h-4 w-4 motion-safe:animate-spin" /> : '→'}
      </span>
      <span role="status" className="sr-only">{pending ? '正在打开项目…' : ''}</span>
    </span>
  );
}
