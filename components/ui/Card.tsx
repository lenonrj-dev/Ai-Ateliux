import React from "react";
import { cn } from "../../lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradient?: boolean;
  dimmed?: boolean;
}

export function Card({
  className,
  children,
  gradient = true,
  dimmed = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 text-gray-100 shadow-soft",
        dimmed ? "bg-[#080c15]/80" : null,
        "backdrop-blur-sm",
        className,
      )}
      {...props}
    >
      {gradient && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-60" />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
