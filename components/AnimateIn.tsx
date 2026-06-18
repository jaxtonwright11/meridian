'use client';

import { ReactNode } from 'react';

/* Scroll-reveal animations were removed by request. These components now render
   their children directly, preserving the same API so call sites are unchanged. */

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'none';
}

export function AnimateIn({ children, className = '' }: AnimateInProps) {
  return <div className={className}>{children}</div>;
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({ children, className = '' }: StaggerContainerProps) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}
