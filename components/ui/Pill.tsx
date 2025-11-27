import React from "react";
import { cn } from "../../lib/utils";

interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  tone?: "muted" | "primary" | "glass";
}

export function Pill({
  className,
  children,
  icon,
  tone = "muted",
  ...props
}: PillProps) {
  const toneClass =
    tone === "primary"
      ? "bg-gradient-to-r from-primary to-accent text-white shadow-glow"
      : tone === "glass"
        ? "bg-white/10 text-white border border-white/10 backdrop-blur-md"
        : "bg-white/10 text-white border border-white/10";

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold",
        toneClass,
        className,
      )}
      {...props}
    >
      {icon && <span className="text-white/80">{icon}</span>}
      {children}
    </div>
  );
}
