"use client";

import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { pageTransition, pageVariants } from "../../lib/motion";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  }, [pathname, prefersReducedMotion]);

  const variants = prefersReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : pageVariants;

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait" initial={false}>
        <m.main
          key={pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          transition={pageTransition}
          className="relative min-h-screen"
        >
          {children}
        </m.main>
      </AnimatePresence>
    </LazyMotion>
  );
}
