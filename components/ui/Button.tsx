"use client";

import React from "react";
import { HTMLMotionProps, m, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/utils";
import { hoverLift, tapPress } from "../../lib/motion";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  loading?: boolean;
  children?: React.ReactNode;
}

const variantMap: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-black shadow-glow hover:shadow-[0_15px_60px_rgba(59,130,246,0.35)] hover:-translate-y-[1px]",
  secondary:
    "bg-white/10 text-white border border-white/10 hover:bg-white/20 hover:border-white/20",
  ghost:
    "bg-transparent text-white border border-white/5 hover:border-white/20 hover:bg-white/5",
};

const sizeMap: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  icon,
  loading = false,
  children,
  ...props
}: ButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <m.button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
        variantMap[variant],
        sizeMap[size],
        className,
      )}
      whileHover={prefersReducedMotion ? undefined : hoverLift}
      whileTap={prefersReducedMotion ? undefined : tapPress}
      aria-busy={loading}
      disabled={props.disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="relative flex h-4 w-4 items-center justify-center">
          <span className="absolute h-4 w-4 rounded-full border border-white/20" />
          <span className="absolute h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
        </span>
      ) : (
        icon && <span className="text-white/80">{icon}</span>
      )}
      <span className={cn(loading ? "opacity-80" : null)}>{children}</span>
    </m.button>
  );
}
