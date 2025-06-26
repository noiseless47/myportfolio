'use client';

import { ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  // We'll implement smooth scrolling with standard CSS instead
  return <div className="smooth-scroll">{children}</div>;
} 