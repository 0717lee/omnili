'use client';

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CopyEmailProps {
  email: string;
  className?: string;
  children?: ReactNode;
  /**
   * 复制成功后的反馈模式：
   * - replace：文字整体替换为「已复制 ✓」（默认，适合小的邮箱地址链接）
   * - hint：内容保持不变，在右上角浮现小提示「邮箱已复制 ✓」（适合大字场景）
   */
  feedback?: 'replace' | 'hint';
}

/** 兜底方案：clipboard API 不可用时用隐藏 textarea + execCommand */
function fallbackCopy(text: string): boolean {
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

export default function CopyEmail({
  email,
  className,
  children,
  feedback = 'replace',
}: CopyEmailProps) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopy = useCallback(async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(email);
      ok = true;
    } catch {
      ok = fallbackCopy(email);
    }
    if (!ok) return;

    setCopied(true);
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setCopied(false), 2000);
  }, [email]);

  if (feedback === 'hint') {
    return (
      <button
        type="button"
        onClick={handleCopy}
        title={`复制 ${email}`}
        aria-live="polite"
        className={cn('link-ink relative cursor-pointer', className)}
      >
        {children ?? email}
        {/* 复制成功小提示 — 浮在右上角，不改动大字本身 */}
        <span
          aria-hidden={!copied}
          className={cn(
            'pointer-events-none absolute left-full top-0 ml-3 whitespace-nowrap font-mono text-xs font-normal tracking-[0.15em] text-accent-ink transition-opacity duration-300',
            copied ? 'opacity-100' : 'opacity-0',
          )}
        >
          邮箱已复制 ✓
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={`复制 ${email}`}
      aria-live="polite"
      className={cn(
        'link-ink cursor-pointer',
        copied && 'text-accent-ink',
        className,
      )}
    >
      {copied ? '已复制 ✓' : (children ?? email)}
    </button>
  );
}
