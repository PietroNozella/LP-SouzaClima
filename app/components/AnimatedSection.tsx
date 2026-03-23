"use client";

import { useIntersectionObserver } from "@/app/hooks/useIntersectionObserver";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

// Wrapper reutilizável que aplica fade-up via Intersection Observer
export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
}: Props) {
  const ref = useIntersectionObserver<HTMLDivElement>({ threshold });

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
