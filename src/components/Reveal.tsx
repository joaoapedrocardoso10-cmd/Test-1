import {ReactNode, useEffect, useRef, useState} from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({children, className = '', delay = 0}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      setSettled(true);
      return;
    }

    const node = ref.current;
    if (!node) {
      setSettled(true);
      return;
    }

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.98) {
      setSettled(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setSettled(true);
            observer.disconnect();
            break;
          }
        }
      },
      {threshold: 0.02, rootMargin: '0px 0px 80px 0px'},
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: '450ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${Math.round(delay * 1000)}ms`,
      }}
      className={`${
        settled ? 'opacity-100 translate-y-0' : 'opacity-95 translate-y-2'
      } ${className}`}
    >
      {children}
    </div>
  );
}
