'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Copy, LoaderCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CopyEmailProps {
  email: string;
  className?: string;
}

/** 兜底方案：clipboard API 不可用时用隐藏 textarea + execCommand */
function fallbackCopy(text: string): boolean {
  const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  const textarea = document.createElement('textarea');
  try {
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    return document.execCommand('copy');
  } catch {
    return false;
  } finally {
    textarea.remove();
    previousFocus?.focus({ preventScroll: true });
  }
}

export default function CopyEmail({
  email,
  className,
}: CopyEmailProps) {
  const [status, setStatus] = useState<'idle' | 'copying' | 'copied' | 'error'>('idle');
  const timerRef = useRef<number | null>(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopy = async () => {
    if (status === 'copying') return;
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    setStatus('copying');
    let ok = false;
    try {
      await navigator.clipboard.writeText(email);
      ok = true;
    } catch {
      if (!mountedRef.current) return;
      ok = fallbackCopy(email);
    }
    if (!mountedRef.current) return;
    if (!ok) {
      setStatus('error');
      return;
    }

    setStatus('copied');
    timerRef.current = window.setTimeout(() => setStatus('idle'), 2500);
  };

  const message = status === 'copying'
    ? '正在复制邮箱…'
    : status === 'copied'
      ? '已复制，可粘贴到邮件中。'
      : status === 'error' ? '复制未成功，可重试或发邮件。' : '';

  return (
    <span className="relative inline-flex align-baseline">
      <button
        type="button"
        onClick={handleCopy}
        title={`复制 ${email}`}
        aria-label={`复制邮箱 ${email}`}
        aria-busy={status === 'copying'}
        disabled={status === 'copying'}
        className={cn(
          'link-ink inline-flex min-h-11 min-w-28 cursor-pointer items-center justify-center gap-2 disabled:cursor-wait',
          className,
          status === 'copied' && 'text-accent-ink',
        )}
      >
        {status === 'copying' ? <LoaderCircle aria-hidden="true" className="h-4 w-4 motion-safe:animate-spin" />
          : status === 'copied' ? <Check aria-hidden="true" className="h-4 w-4" />
          : <Copy aria-hidden="true" className="h-4 w-4" />}
        {status === 'copied' ? '已复制' : status === 'copying' ? '复制中…' : status === 'error' ? '重试复制' : '复制邮箱'}
      </button>
      <span
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="copy-feedback pointer-events-none absolute left-0 top-full mt-2 whitespace-nowrap font-sans text-xs font-normal normal-case leading-5 tracking-normal text-accent-ink"
        data-state={status}
      >
        {message}
      </span>
    </span>
  );
}
