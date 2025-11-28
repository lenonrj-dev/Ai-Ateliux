"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "../../lib/utils";

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
      className="fixed inset-x-0 top-6 z-50 flex justify-center px-4"
    >
      <div className="flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
        <Link href="/" className="flex items-center gap-2 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 p-1 shadow-[0_10px_30px_rgba(59,130,246,0.35)]">
            <Image src="/logoAteliux.svg" alt="Logo Ateliux" width={36} height={36} />
          </span>
          <span className="text-base font-semibold tracking-tight">AI Ateliux</span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium text-white/70 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={isHome ? link.href : `/${link.href}`}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden rounded-full border border-[#4da3ff]/40 bg-[#1b2f52]/70 px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(56,189,248,0.25)] transition hover:border-[#6ac4ff]/60 hover:bg-[#22406d] md:inline-flex"
          >
            Criar minha conta
          </Link>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
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
              className="fixed inset-0 z-40 bg-black"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-0 right-0 z-50 h-full w-[78vw] max-w-xs bg-[#0b0d12] px-5 py-6 shadow-[0_20px_70px_rgba(0,0,0,0.55)] md:hidden"
            >
              <div className="mb-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-white" onClick={() => setOpen(false)}>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 p-1 shadow-[0_10px_30px_rgba(59,130,246,0.35)]">
                    <Image src="/logoAteliux.svg" alt="Logo Ateliux" width={32} height={32} />
                  </span>
                  <span className="text-sm font-semibold tracking-tight">AI Ateliux</span>
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80"
                  aria-label="Fechar menu"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={isHome ? link.href : `/${link.href}`}
                    className="rounded-xl px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-6">
                <Link
                  href="/login"
                  className="flex w-full items-center justify-center rounded-xl border border-[#4da3ff]/40 bg-[#1b2f52]/70 px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(56,189,248,0.25)] transition hover:border-[#6ac4ff]/60 hover:bg-[#22406d]"
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
