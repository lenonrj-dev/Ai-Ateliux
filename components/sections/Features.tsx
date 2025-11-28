"use client";

import { motion } from "framer-motion";
import { BarChart3, Cpu, Workflow } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-black px-4 py-20">
      <div className="absolute inset-0 flex items-center justify-center text-[13vw] font-black uppercase tracking-[0.3em] text-white/5 pointer-events-none select-none">
        RECURSOS
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Badge variant="solid" icon={<Cpu size={20} />} className="p-5 text-white">
            Recursos da AI Ateliux
          </Badge>
          <div className="max-w-xl text-sm text-white/60">
            Automação de Instagram em massa com IA: agende postagens, responda DMs e monitore tudo em um painel.
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <PredictiveCard />
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <WorkflowCard />
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <RealtimeCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PredictiveCard() {
  return (
    <Card className="relative min-h-[320px] overflow-hidden bg-[#000]">
      <div className="relative h-[270px] overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-[url('/analytics_wave_card_bg_blue.webp')] bg-contain bg-center bg-no-repeat opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/80" />

        <div className="relative flex h-full flex-col justify-between p-5">
          <div className="flex items-center justify-between text-xs text-white/75">
            <span className="rounded-full bg-white/12 px-3 py-1">Calendário ativo</span>
            <span className="rounded-full border border-white/15 px-3 py-1">
              Sugestão da IA
            </span>
          </div>

          <div className="relative h-full">
            <span className="absolute left-6 top-10 rounded-full bg-white/18 px-3 py-1 text-[11px] text-white/90">
              Melhor horário
            </span>
            <span className="absolute bottom-10 left-5 rounded-full bg-white/12 px-3 py-1 text-[11px] text-white/75">
              Trilha de Stories
            </span>
          </div>
        </div>
      </div>

      <div className="relative mt-2 flex flex-col gap-3 rounded-xl bg-black/80 p-5 backdrop-blur-md">
        <h3 className="text-lg font-semibold text-white">Automação de Postagens</h3>
        <p className="text-sm text-white/60">
          Agende feed e Stories com sugestões da IA, publique em massa e mantenha o perfil sempre atualizado sem esforço manual.
        </p>
      </div>

      <div className="pb-6" />
    </Card>
  );
}

function WorkflowCard() {
  return (
    <Card className="flex min-h-[420px] flex-col justify-between p-6">
      <div className="h-[24 0px] flex flex-col gap-5">
        {["Novo seguidor", "Responder DM", "Publicar post"].map((action, idx) => (
          <div
            key={action}
            className="relative flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/85"
          >
            <span>{action}</span>
            <Workflow size={16} className="text-accent" aria-hidden />
            {idx < 2 && (
              <span className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 text-white/30">
                ·
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="relative mt-4 flex flex-col gap-3 rounded-xl bg-black/50 p-5 backdrop-blur-md">
        <h3 className="text-lg font-semibold text-white">Fluxos automatizados</h3>
        <p className="text-sm text-white/60">
          Crie gatilhos do tipo “se acontecer X, faça Y” para campanhas, respostas e funis no Instagram.
        </p>
      </div>
    </Card>
  );
}

function RealtimeCard() {
  return (
    <Card className="flex min-h-[420px] flex-col justify-between overflow-hidden p-6">
      <div className="h-[203px] flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center justify-between text-sm text-white/80">
          <span className="flex items-center gap-2 text-sm font-semibold text-white">
            <BarChart3 size={16} className="text-accent" /> Métricas em tempo real
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Ao vivo</span>
        </div>
        <div className="grid grid-cols-6 gap-2 rounded-xl border border-white/10 bg-black/40 p-3">
          {[38, 65, 52, 80, 60, 78].map((height, idx) => (
            <div key={idx} className="flex h-24 items-end">
              <span
                className="w-full rounded-full bg-gradient-to-t from-primary/50 via-accent/80 to-white/85"
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-4 flex flex-col gap-3 rounded-xl bg-black/50 p-5 backdrop-blur-md">
        <div className="flex items-center justify-between text-xs text-white/70">
          <span className="rounded-full bg-white/10 px-3 py-1">Últimas 24h</span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-white/80">
            IA ativa
          </span>
        </div>
        <h3 className="text-lg font-semibold text-white">Gestão de performance</h3>
        <p className="text-sm text-white/60">
          Visualize alcance, engajamento e respostas de DMs em tempo real para ajustar campanhas sem sair do painel.
        </p>
      </div>
    </Card>
  );
}
