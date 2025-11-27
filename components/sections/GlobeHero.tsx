"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function GlobeHero() {
  return (
    <section className="relative overflow-hidden bg-black pb-20 pt-24 text-white sm:pt-28">
      <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center px-4">
        <div className="mt-14 flex flex-col items-center gap-6 text-center sm:mt-10">
          <h2 className="text-balance text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Seu copiloto de automação para Instagram em um só painel
          </h2>
          <p className="max-w-2xl text-base text-[#c6d7ff] sm:text-lg">
            Conecte sua conta Meta, programe postagens, comentários e DMs em massa e deixe a IA da Ateliux responder leads, nutrir contatos e manter o perfil ativo 24/7.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="rounded-lg bg-[#4da3ff] px-5 py-3 text-sm font-semibold text-white shadow-[0_15px_45px_rgba(77,163,255,0.45)] transition hover:translate-y-[-1px] hover:shadow-[0_18px_55px_rgba(100,180,255,0.55)] focus:outline-none focus:ring-2 focus:ring-[#73bcff]"
            >
              Criar minha conta na AI Ateliux
            </button>
            <button
              type="button"
              aria-label="Ver dashboard em ação"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition hover:border-[#4da3ff]/70 hover:bg-[#122039]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition group-hover:border-[#4da3ff]/70 group-hover:bg-[#1b3259]">
                <Play size={16} />
              </span>
              Ver dashboard em ação
            </button>
          </div>
        </div>

        <Diagram />
      </div>
    </section>
  );
}

function Diagram() {
  const cards = [
    { title: "Fila de postagens", position: "top-left" as const },
    { title: "Fluxos automáticos", position: "bottom-left" as const },
    { title: "Analytics do Instagram", position: "top-right" as const },
    { title: "Insights da IA", position: "bottom-right" as const },
  ];

  return (
    <>
      <div className="relative mt-14 hidden w-full max-w-6xl rounded-[28px] bg-transparent md:block">
        <div className="relative h-[560px]">
          <svg
            className="absolute inset-0"
            viewBox="0 0 1200 640"
            fill="none"
            aria-hidden
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#5bb5ff" stopOpacity="0.12" />
                <stop offset="50%" stopColor="#6ec5ff" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#5bb5ff" stopOpacity="0.12" />
              </linearGradient>
            </defs>
            <path
              d="M600 330 C520 320 430 305 320 260"
              stroke="url(#lineGlow)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M600 360 C520 380 440 410 320 470"
              stroke="url(#lineGlow)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M600 330 C690 320 780 305 880 260"
              stroke="url(#lineGlow)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M600 360 C700 390 770 420 900 470"
              stroke="url(#lineGlow)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <div className="absolute left-1/2 top-78 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/globe.png"
              alt="Interface luminosa da AI Ateliux centralizando automações do Instagram"
              width={860}
              height={860}
              priority
              className="relative drop-shadow-[0_20px_60px_rgba(80,168,255,0.6)]"
            />
          </div>

          {cards.map((card) => (
            <FeatureCard key={card.title} title={card.title} position={card.position} />
          ))}
        </div>
      </div>

      <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-4 md:hidden">
        {cards.map((card) => (
          <FeatureCard key={card.title} title={card.title} position="stacked" />
        ))}
      </div>
    </>
  );
}

type CardPosition = "top-left" | "bottom-left" | "top-right" | "bottom-right" | "stacked";

function FeatureCard({ title, position }: { title: string; position: CardPosition }) {
  const base = "absolute w-[250px] rounded-[18px]";

  const placement = {
    "top-left": "left-20 top-2",
    "bottom-left": "left-15 bottom-2",
    "top-right": "right-15 top-10",
    "bottom-right": "right-8 bottom-4",
    stacked: "static w-full",
  }[position];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4 }}
      className={cn(
        position === "stacked" ? "relative" : base,
        placement,
        "overflow-hidden rounded-[18px] border border-[#1f3c70] bg-[rgba(10,20,40,0.72)] shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-md",
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[18px] border border-white/5" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(95,178,255,0.16),transparent_40%)]" />

      <div className="relative space-y-3 p-4 text-sm text-white">
        <div className="flex items-center justify-between text-[13px] font-semibold text-white">
          <span>{title}</span>
          <span className="h-2 w-2 rounded-full bg-[#53b0ff] shadow-[0_0_12px_rgba(83,176,255,0.9)]" />
        </div>
        {title === "Fila de postagens" && <TaskListContent />}
        {title === "Fluxos automáticos" && <WorkflowContent />}
        {title === "Analytics do Instagram" && <AnalyticsContent />}
        {title === "Insights da IA" && <InsightsContent />}
      </div>
    </motion.div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-[13px] text-[#dce8ff] shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#61c3ff]" />
      {children}
    </span>
  );
}

function TaskListContent() {
  return (
    <div className="flex flex-col gap-2">
      <Chip>Agendar carrossel no feed</Chip>
      <Chip>Publicar Stories com CTA</Chip>
      <Chip>Comentário automático em parceiros</Chip>
      <Chip>Disparar DMs após novos seguidores</Chip>
    </div>
  );
}

function WorkflowContent() {
  return (
    <div className="space-y-2 text-[13px] text-[#c6d7ff]">
      <WorkflowRow label="Se entrar lead, iniciar conversa no Direct" active />
      <WorkflowRow label="Responder dúvidas frequentes com IA" />
      <WorkflowRow label="Agendar sequência de posts da semana" />
    </div>
  );
}

function WorkflowRow({ label, active }: { label: string; active?: boolean }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-md border border-white/10 px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.35)]",
        active ? "bg-white/8 text-white" : "bg-white/5 text-[#c6d7ff]",
      )}
    >
      <span className="truncate">{label}</span>
      <span
        className={cn(
          "ml-3 h-2.5 w-2.5 rounded-full",
          active ? "bg-[#61c3ff] shadow-[0_0_10px_rgba(97,195,255,0.9)]" : "bg-white/30",
        )}
      />
    </div>
  );
}

function AnalyticsContent() {
  const bars = [45, 60, 38, 70, 78, 65];
  const labels = ["Jun", "Jul", "Ago", "Set", "Out", "Nov"];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-[12px] text-[#c6d7ff]">
        <span>+60% de tempo salvo</span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#61c3ff]" />
          Crescimento
        </span>
      </div>
      <div className="flex h-32 items-end gap-2 rounded-lg border border-white/10 bg-white/5 p-3">
        {bars.map((value, idx) => (
          <div key={idx} className="flex flex-1 flex-col items-center gap-1 text-[11px] text-[#9ab4de]">
            <div className="flex h-full w-full items-end">
              <span
                className="w-full rounded-full bg-gradient-to-t from-[#1f4c9e] via-[#2f7ae2] to-[#7ed0ff]"
                style={{ height: `${value}%` }}
              />
            </div>
            <span>{labels[idx]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InsightsContent() {
  const items = [
    "Automatizar follow-up de leads no Direct",
    "Trilhas de nutrição por interesse",
    "Sugerir melhores horários de post",
    "Priorizar respostas urgentes",
  ];

  return (
    <div className="space-y-2 text-[13px] text-[#c6d7ff]">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
        >
          <span className="truncate">{item}</span>
          <span className="ml-3 inline-flex h-5 items-center rounded-full border border-[#61c3ff]/60 px-2 text-[11px] text-[#9acaff]">
            IA
          </span>
        </div>
      ))}
    </div>
  );
}
