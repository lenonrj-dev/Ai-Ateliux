"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bolt, Menu } from "lucide-react";
import { cn } from "../../lib/utils";

const navLinks = [
  { href: "#features", label: "Recursos" },
  { href: "#workflow", label: "Como funciona" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#integrations", label: "Integrações" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-5"
    >
      <div className="flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:px-5 sm:py-3">
        <Link href="/" className="flex items-center gap-2 text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#76b7ff,#1e7bff_60%,#0c3a7a)] shadow-[0_10px_30px_rgba(59,130,246,0.35)] sm:h-9 sm:w-9">
            <Bolt size={18} className="text-white" aria-hidden />
          </span>
          <span className="text-sm font-semibold tracking-tight sm:text-base">AI Ateliux</span>
        </Link>

        <nav className="hidden items-center gap-1 text-xs font-medium text-white/70 md:flex lg:text-sm">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            className="hidden rounded-full border border-[#4da3ff]/40 bg-[#1b2f52]/70 px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_35px_rgba(56,189,248,0.25)] transition hover:border-[#6ac4ff]/60 hover:bg-[#22406d] md:inline-flex md:text-sm md:px-5"
            type="button"
          >
            Criar minha conta
          </button>
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 md:hidden">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </motion.header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white",
      )}
    >
      {children}
    </Link>
  );
}
