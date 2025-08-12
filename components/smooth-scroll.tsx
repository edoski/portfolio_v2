"use client";

import { useEffect } from "react";

// JS smooth scrolling for browsers that ignore CSS scroll-behavior (e.g., older Safari).
export default function SmoothScroll() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      // Ignore if link has other modifiers
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || anchor.target === "_blank") {
        return;
      }

      const el = document.querySelector(href);
      if (!el) return;

      e.preventDefault();

      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      // Use scrollIntoView so scroll-margin-top is respected.
      (el as HTMLElement).scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
      // Keep the URL hash in sync without adding a new history entry.
      history.replaceState(null, "", href);
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}

