"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { hoverLift, itemFadeUp, staggerContainer, tapPress } from "../../lib/motion";

const navLinks = [
  { href: "#features", label: "Recursos" },
  { href: "#workflow", label: "Como funciona" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#integrations", label: "Integrações" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6"
    >
      <div className="relative flex w-full max-w-6xl items-center justify-between overflow-hidden rounded-full border border-white/10 bg-white/5 px-5 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md">
        <div className="pointer-events-none absolute inset-0 opacity-50 [mask-image:linear-gradient(90deg,transparent,white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-primary/10 to-transparent blur-2xl" />
        </div>

        <Link
          href="/"
          className="relative flex items-center gap-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-0"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 p-1 shadow-[0_10px_30px_rgba(59,130,246,0.35)]">
            <Image src="/logoAteliux.svg" alt="Logo Ateliux" width={36} height={36} />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight">AI Ateliux</span>
            <span className="text-[11px] text-white/60">Automação social</span>
          </div>
        </Link>

        <motion.nav
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="relative hidden items-center gap-1 text-sm font-medium text-white/70 md:flex"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={isHome ? link.href : `/${link.href}`}
              isActive={isHome && link.href === "#features"}
            >
              {link.label}
            </NavLink>
          ))}
        </motion.nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden rounded-full border border-[#4da3ff]/40 bg-[#0f1a2f]/70 px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(56,189,248,0.25)] transition hover:-translate-y-[1px] hover:border-[#6ac4ff]/60 hover:bg-[#1b2f52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 md:inline-flex"
            aria-label="Criar minha conta"
          >
            Criar minha conta
          </Link>
          <motion.button
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            whileHover={hoverLift}
            whileTap={tapPress}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-0 right-0 z-50 h-full w-[78vw] max-w-xs bg-[#070b12]/95 px-5 py-6 shadow-[0_20px_70px_rgba(0,0,0,0.55)] backdrop-blur-lg md:hidden"
            >
              <div className="mb-6 flex items-center justify-between">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                  onClick={() => setOpen(false)}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 p-1 shadow-[0_10px_30px_rgba(59,130,246,0.35)]">
                    <Image src="/logoAteliux.svg" alt="Logo Ateliux" width={32} height={32} />
                  </span>
                  <span className="text-sm font-semibold tracking-tight">AI Ateliux</span>
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                  aria-label="Fechar menu"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex flex-col gap-2" aria-label="Navegação mobile">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={isHome ? link.href : `/${link.href}`}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                    <Sparkles size={14} className="text-accent" aria-hidden />
                  </Link>
                ))}
              </nav>

              <div className="mt-6">
                <Link
                  href="/login"
                  className="flex w-full items-center justify-center rounded-xl border border-[#4da3ff]/40 bg-[#1b2f52]/70 px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(56,189,248,0.25)] transition hover:-translate-y-[1px] hover:border-[#6ac4ff]/60 hover:bg-[#22406d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                  onClick={() => setOpen(false)}
                >
                  Entrar / Criar conta
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLink({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <motion.div variants={itemFadeUp}>
      <Link
        href={href}
        className={cn(
          "relative rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
          isActive ? "text-white" : "text-white/70",
        )}
        aria-current={isActive ? "page" : undefined}
      >
        <span className="relative z-10">{children}</span>
        <motion.span
          layoutId="nav-pill"
          className={cn(
            "absolute inset-0 rounded-full bg-white/10",
            isActive ? "opacity-100" : "opacity-0",
          )}
          transition={{ duration: 0.25 }}
        />
      </Link>
    </motion.div>
  );
}
