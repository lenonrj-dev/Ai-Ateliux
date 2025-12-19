"use client";

import React from "react";
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
import { hoverLift, itemFadeUp, staggerContainer } from "../../lib/motion";

const tags = [
  { label: "Postagens", icon: <Component size={14} /> },
  { label: "Stories", icon: <Bolt size={14} /> },
  { label: "Comentários IA", icon: <Link2 size={14} /> },
  { label: "DMs automáticas", icon: <LayoutList size={14} /> },
  { label: "Fluxos", icon: <Settings size={14} /> },
  { label: "Relatórios", icon: <Sparkles size={14} /> },
];

const heroStats = [
  { label: "Agendamentos ativos", value: "128", accent: "IA priorizando horários" },
  { label: "Conversas no Direct", value: "12.4k", accent: "Respostas com IA" },
  { label: "Integrações", value: "Meta / WhatsApp", accent: "Conta segura" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-transparent px-4 pb-28 pt-32 sm:pt-36">
      
      <div className="pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-14 top-10 h-64 w-64 rounded-full bg-accent/25 blur-[120px]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center gap-6"
        >
          <motion.div variants={itemFadeUp}>
            <Pill tone="glass" icon={<Sparkles size={16} />}>
              Explore automações por IA
            </Pill>
          </motion.div>

          <motion.h1
            variants={itemFadeUp}
            className="text-balance text-5xl font-black leading-[1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            AI-ATELIUX
          </motion.h1>

          <motion.p variants={itemFadeUp} className="max-w-3xl text-pretty text-base text-white/70 sm:text-lg">
            Dispare postagens, comentários e mensagens no Direct em massa com um agente de IA que conversa com leads, otimiza campanhas e mantém seu perfil ativo 24/7.
          </motion.p>

          <motion.div variants={itemFadeUp} className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="primary" size="lg" href="/login">
              Começar
            </Button>
            <Button variant="ghost" size="lg" className="border-white/15" href="/login">
              Ver dashboard em ação
            </Button>
          </motion.div>

          <motion.div
            variants={itemFadeUp}
            className="grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3"
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {heroStats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={hoverLift}
              className="rounded-2xl border border-white/10 bg-black/60 p-4 text-left text-white shadow-soft backdrop-blur"
            >
              <p className="text-xs uppercase text-white/50">{stat.label}</p>
              <p className="mt-2 text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-white/60">{stat.accent}</p>
            </motion.div>
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
      <FloatingCard className="left-4 top-48 hidden w-56 flex-col gap-3 lg:left-10 xl:flex">
        <p className="text-xs uppercase text-white/50">Formatos</p>
        <div className="flex flex-col gap-2 text-sm text-white/80">
          <ControlChip label="Feed" active />
          <ControlChip label="Stories" />
          <ControlChip label="Comentários" />
          <ControlChip label="DMs" />
        </div>
      </FloatingCard>

      <FloatingCard className="left-6 bottom-44 hidden w-64 flex-col gap-4 sm:flex lg:left-12">
        <div className="flex items-center justify-between text-sm text-white/70">
          <span>Próximo envio</span>
          <div className="flex items-center gap-2 rounded-full bg-black/60 px-2 py-1 text-[11px]">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span>IA</span>
          </div>
        </div>
        <div className="relative h-1.5 overflow-hidden rounded-full bg-black/50">
          <span className="absolute inset-y-0 left-0 w-3/4 rounded-full bg-gradient-to-r from-primary to-accent" />
        </div>
        <Button size="sm" variant="secondary" className="w-full text-xs">
          Conectar Instagram
        </Button>
      </FloatingCard>

      <FloatingCard className="right-4 top-48 hidden w-60 flex-col gap-3 lg:right-10 lg:flex">
        <p className="text-xs uppercase text-white/50">Ações</p>
        <div className="flex flex-col gap-2 text-sm text-white/80">
          <ControlChip label="Agendar Post" />
          <ControlChip label="Responder DMs" active />
          <ControlChip label="Interagir com Seguidores" />
        </div>
      </FloatingCard>

      <FloatingCard className="right-6 bottom-48 hidden w-64 flex-col gap-4 md:flex lg:right-12">
        <div className="flex items-center justify-between text-xs text-white/70">
          <span>Acesso Seguro</span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-[11px]">Conta Meta</span>
        </div>
        <Input placeholder="Email..." />
        <Button size="sm" variant="secondary" className="w-full text-xs">
          Entrar na Meta
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
      className={`backdrop-panel absolute rounded-2xl bg-black/70 p-4 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function ControlChip({ label, active }: { label: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between rounded-xl border px-3 py-2 ${
        active ? "border-white/20 bg-white/20 text-white" : "border-white/10 bg-white/5 text-white/70"
      }`}
    >
      <span>{label}</span>
      {active && <Wand2 size={14} className="text-accent" aria-hidden />}
    </div>
  );
}
