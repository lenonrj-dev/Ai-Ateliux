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
          ? "border-white/15 bg-white/10 shadow-glow"
          : "border-white/10 bg-[#0b0d12] hover:border-white/20 hover:bg-white/5",
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
