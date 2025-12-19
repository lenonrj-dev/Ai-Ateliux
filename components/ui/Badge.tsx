import React from "react";
import { cn } from "../../lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon?: React.ReactNode;
  variant?: "solid" | "ghost";
}

export function Badge({
  className,
  children,
  icon,
  variant = "ghost",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-12 items-center gap-1 rounded-xl border py-2 text-sm font-semibold text-current shadow-soft transition duration-200",
        variant === "solid"
          ? "border-white/15 bg-black shadow-glow"
          : "border-white/10 bg-black hover:border-white/20 hover:bg-black/80",
        "backdrop-blur-md",
        className,
      )}
      {...props}
    >
      {icon && <span className="text-base text-current">{icon}</span>}
      {children}
    </span>
  );
}
