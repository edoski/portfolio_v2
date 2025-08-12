"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type RevealProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Delay the reveal transition in ms */
  delayMs?: number;
  /** If true, the element reveals only once */
  once?: boolean;
};

export default function Reveal({
  className,
  delayMs = 0,
  once = true,
  children,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      element.dataset.visible = "true";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.setAttribute("data-visible", "false");
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={cn("reveal will-change-transform transform-gpu", className)}
      style={{ transitionDelay: `${Math.max(0, delayMs)}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}


