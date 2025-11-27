import React from "react";
import { cn } from "../../lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
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
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-0",
        variantMap[variant],
        sizeMap[size],
        className,
      )}
      {...props}
    >
      {icon && <span className="text-white/80">{icon}</span>}
      {children}
    </button>
  );
}
