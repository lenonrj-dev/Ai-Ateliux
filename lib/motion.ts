import { Variants } from "framer-motion";

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 12, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -10, filter: "blur(6px)" },
};

export const pageTransition = {
  duration: 0.55,
  ease: [0.25, 0.1, 0.25, 1],
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

export const itemFadeUp: Variants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
};

export const hoverLift = { y: -2, scale: 1.01 };

export const tapPress = { scale: 0.97 };
