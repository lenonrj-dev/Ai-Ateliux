"use client";

import React from "react";
import Link from "next/link";
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
  href?: string;
}

const variantMap: Record<ButtonVariant, string> = {
  primary:
    "bg-black text-white border border-white/20 shadow-glow hover:shadow-[0_15px_60px_rgba(59,130,246,0.35)] hover:-translate-y-[1px]",
  secondary:
    "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20",
  ghost:
    "bg-transparent text-white border border-white/10 hover:border-white/20 hover:bg-white/5",
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
  href,
  ...props
}: ButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  const content = (
    <m.button
      className={cn(
        "group inline-flex cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none",
        variantMap[variant],
        sizeMap[size],
        className,
      )}
      whileHover={
        prefersReducedMotion
          ? undefined
          : { ...hoverLift, scale: 1.02, transition: { duration: 0.18, ease: "easeOut" } }
      }
      whileTap={
        prefersReducedMotion
          ? undefined
          : { ...tapPress, transition: { duration: 0.15, ease: "easeOut" } }
      }
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
        icon && (
          <span className="shrink-0 text-white/80 transition-transform duration-150 ease-out group-hover:scale-105 group-active:scale-95">
            {icon}
          </span>
        )
      )}
      <span className={cn("transition duration-150", loading ? "opacity-80" : null)}>{children}</span>
      <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition duration-150 group-active:opacity-30 group-active:shadow-[0_0_0_6px_rgba(59,130,246,0.15)]" />
    </m.button>
  );

  if (href) {
    return (
      <Link href={href} prefetch={false} className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}
