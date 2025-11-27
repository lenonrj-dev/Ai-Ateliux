"use client";

import { motion } from "framer-motion";
import {
  Bolt,
  Component,
  LayoutList,
  Link2,
  Settings,
  Sparkles,
  Wand2,
} from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Pill } from "../ui/Pill";

const tags = [
  { label: "Postagens", icon: <Component size={14} /> },
  { label: "Stories", icon: <Bolt size={14} /> },
  { label: "Comentários IA", icon: <Link2 size={14} /> },
  { label: "DMs automáticas", icon: <LayoutList size={14} /> },
  { label: "Fluxos", icon: <Settings size={14} /> },
  { label: "Relatórios", icon: <Sparkles size={14} /> },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-24 pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[url('/hero_ai_glow_bg_blue.svg')] bg-cover bg-top bg-no-repeat opacity-80" />

      <div className="relative z-10 mt-40 mx-auto flex max-w-6xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <h1 className="text-balance text-6xl font-black leading-[1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-9xl">
            AI-Ateliux
          </h1>
          <Pill tone="glass" icon={<Sparkles size={16} />}>
            AI Ateliux para Instagram e Facebook
          </Pill>

          <p className="max-w-2xl text-pretty text-sm text-white/60 sm:text-base">
            Dispare postagens, comentários e mensagens no Direct em massa, com um agente de IA que conversa com leads, otimiza campanhas e mantém seu perfil ativo 24/7.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="primary" size="lg">
              Começar
            </Button>
            <Button variant="ghost" size="lg">
              Ver dashboard em ação
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 grid w-100 max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3"
        >
          {tags.map((tag) => (
            <Badge
              key={tag.label}
              className="flex items-center justify-center gap-2 bg-[#0b1220]/80 px-1 text-sm font-semibold text-white shadow-soft hover:border-white/20 hover:bg-white/10"
              icon={tag.icon}
            >
              {tag.label}
            </Badge>
          ))}
        </motion.div>
      </div>

      <FloatingCards />
    </section>
  );
}

function FloatingCards() {
  return (
    <>
      <FloatingCard className="left-70 top-60 hidden w-48 flex-col gap-3 lg:flex">
        <p className="text-xs uppercase text-white/50">Formatos</p>
        <div className="flex flex-col gap-2 text-sm text-white/80">
          <ControlChip label="Feed" active />
          <ControlChip label="Stories" />
          <ControlChip label="Comentários" />
          <ControlChip label="DMs" />
        </div>
      </FloatingCard>

      <FloatingCard className="left-90 bottom-57 hidden w-52 flex-col gap-4 sm:flex">
        <div className="flex items-center justify-between text-sm text-white/70">
          <span>Próximo envio</span>
          <div className="flex items-center gap-2 rounded-full bg-white/5 px-2 py-1 text-[11px]">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span>IA</span>
          </div>
        </div>
        <div className="relative h-1.5 overflow-hidden rounded-full bg-white/5">
          <span className="absolute inset-y-0 left-0 w-3/4 rounded-full bg-gradient-to-r from-primary to-accent" />
        </div>
        <Button size="sm" variant="secondary" className="w-full text-xs">
          Conectar Instagram
        </Button>
      </FloatingCard>

      <FloatingCard className="right-68 top-60 hidden w-52 flex-col gap-3 md:flex">
        <p className="text-xs uppercase text-white/50">Ações</p>
        <div className="flex flex-col gap-2 text-sm text-white/80">
          <ControlChip label="Agendar post" />
          <ControlChip label="Responder DMs" active />
          <ControlChip label="Interagir com seguidores" />
        </div>
      </FloatingCard>

      <FloatingCard className="right-74 bottom-59 hidden w-56 flex-col gap-4 md:flex">
        <div className="flex items-center justify-between text-xs text-white/70">
          <span>Acesso seguro</span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-[11px]">
            Conta Meta
          </span>
        </div>
        <Input placeholder="Email corporativo..." />
        <Button size="sm" variant="secondary" className="w-full text-xs">
          Entrar na minha conta
        </Button>
      </FloatingCard>
    </>
  );
}

function FloatingCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.01 }}
      className={`backdrop-panel absolute rounded-2xl p-4 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function ControlChip({ label, active }: { label: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between rounded-xl border px-3 py-2 ${
        active
          ? "border-white/20 bg-white/20 text-white"
          : "border-white/10 bg-white/5 text-white/70"
      }`}
    >
      <span>{label}</span>
      {active && <Wand2 size={14} className="text-accent" aria-hidden />}
    </div>
  );
}
