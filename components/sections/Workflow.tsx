"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CreditCard,
  LineChart,
  Link2,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

const bars = [48, 72, 60, 82, 58, 76, 68, 90, 64, 80];
const incomeTrend = [22, 38, 30, 44, 36, 50, 42, 52, 48, 56, 60, 68, 62, 74, 78, 72];

const cardVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export function Workflow() {
  return (
    <section id="workflow" className="relative overflow-hidden bg-black px-4 py-20">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-[13vw] font-black uppercase tracking-[0.22em] text-white/5 select-none">
        COMO FUNCIONA
      </div>
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-accent/25 blur-[140px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3 text-white/60">
            <span className="h-px w-12 bg-white/20" />
            <Badge variant="solid" icon={<Sparkles size={16} />}>
              Como funciona
            </Badge>
            <span className="h-px w-12 bg-white/20" />
          </div>
          <h2 className="text-balance text-4xl font-bold leading-tight text-white sm:text-5xl">
            Comece em minutos e deixe a IA Ateliux automatizar o Instagram
          </h2>
          <p className="max-w-2xl text-sm text-white/60 sm:text-base">
            Conecte sua conta Meta, configure automações e acompanhe postagens, comentários e DMs em um painel único.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2"
          >
            <DashboardPanel />
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.05, duration: 0.4 }}
          >
            <LinkAccountsCard />
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <IntegrateDataCard />
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="lg:col-span-2"
          >
            <IncomeCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DashboardPanel() {
  return (
    <Card
      gradient={false}
      className="relative min-h-[360px] overflow-hidden rounded-3xl border-white/10 bg-gradient-to-br from-[#0e0b14]/90 via-[#0c0f18]/90 to-[#05070d] p-6 shadow-soft"
    >
      <div className="pointer-events-none absolute -left-10 top-0 h-48 w-48 rounded-full bg-primary/25 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[#f472b6]/20 blur-[140px]" />

      <div className="relative flex flex-col gap-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs uppercase text-white/50">Bem-vindo de volta</p>
            <p className="text-lg font-semibold text-white">AI Ateliux</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Instagram conectado
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Stat label="Engajamento total" value="+248k interações" note="+18% na semana" />
          <Stat label="Conversas respondidas" value="12.430 DMs" note="+12.4% via IA" />
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
          <div className="flex items-center justify-between text-xs text-white/60">
            <span>Volume de postagens</span>
            <span>Últimos 30 dias</span>
          </div>
          <div className="mt-3 flex h-24 items-end gap-2 rounded-xl border border-white/5 bg-gradient-to-t from-white/5 via-transparent to-transparent p-3">
            {bars.map((height, idx) => (
              <div key={idx} className="flex h-full w-full items-end">
                <span
                  className="w-full rounded-full bg-gradient-to-t from-primary/50 via-accent/80 to-white/80"
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-white">
          <div className="max-w-xl">
            <p className="font-semibold">Cadastre-se e automatize</p>
            <p className="text-xs text-white/60">
              Crie sua conta, conecte o Instagram/Meta e deixe a IA Ateliux publicar, comentar e responder DMs por você.
            </p>
          </div>
          <Sparkles size={18} className="text-accent" aria-hidden />
        </div>
      </div>
    </Card>
  );
}

function LinkAccountsCard() {
  const accounts = [
    { name: "Conta Instagram", number: "@sua-marca", value: "agendada: 18 posts", delta: "24 Stories" },
    { name: "Conta Facebook", number: "Página Meta", value: "9 posts cruzados", delta: "IA ativa" },
    { name: "WhatsApp", number: "Canal de entrada", value: "DMs sincronizadas", delta: "Responder com IA" },
  ];

  return (
    <Card
      gradient={false}
      className="flex h-full flex-col gap-4 rounded-3xl border-white/10 bg-gradient-to-b from-[#0f0d18]/85 via-[#0c0f16]/90 to-[#05070d] p-5"
    >
      <div className="flex items-start justify-between">
        <div className="max-w-[210px]">
          <p className="text-lg font-semibold text-white">Conecte suas contas</p>
          <p className="text-sm text-white/60">
            Instagram e Facebook conectados via Meta, com segurança e controle de permissões.
          </p>
        </div>
        <ShieldCheck size={18} className="text-accent" aria-hidden />
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
        <StatRow label="Status da conta" value="IA Ateliux conectada" delta="Sincronização contínua" />

        <div className="mt-4 space-y-3">
          {accounts.map((account) => (
            <div
              key={account.name}
              className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-3 py-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                  <CreditCard size={16} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{account.name}</div>
                  <div className="text-xs text-white/50">{account.number}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-white">{account.value}</div>
                <div className="text-xs text-emerald-300">{account.delta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

function IntegrateDataCard() {
  return (
    <Card
      gradient={false}
      className="flex h-full flex-col items-center justify-center gap-4 rounded-3xl border-white/10 bg-gradient-to-b from-[#140b23]/70 via-[#0c0f18]/90 to-[#05070d] p-6 text-center"
    >
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/40 via-accent/60 to-[#f472b6]/60 text-white shadow-glow">
        <Link2 size={26} aria-hidden />
      </div>
      <h3 className="text-lg font-semibold text-white">Integre seus canais</h3>
      <p className="text-sm text-white/70">
        Conecte Instagram, páginas do Facebook e fluxos de WhatsApp para centralizar atendimentos e publicações.
      </p>
    </Card>
  );
}

function IncomeCard() {
  return (
    <Card
      gradient={false}
      className="relative overflow-hidden rounded-3xl border-white/10 bg-gradient-to-r from-[#0f0d1a]/90 via-[#0b0d15]/90 to-[#05070d] p-6"
    >
      <div className="pointer-events-none absolute -right-16 -top-12 h-48 w-48 rounded-full bg-primary/20 blur-[120px]" />
      <div className="relative flex flex-col gap-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-white">Conversões pelo Direct</p>
            <p className="text-3xl font-bold text-white">+7.389 leads</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
            +12%
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-xs text-white/60">
            <span className="flex items-center gap-2">
              <Wallet size={14} className="text-accent" aria-hidden />
              Performance
            </span>
            <span>Q1 - Q4</span>
          </div>
          <div className="mt-3 flex h-28 items-end gap-1 rounded-xl border border-white/10 bg-black/40 p-3">
            {incomeTrend.map((height, idx) => (
              <div key={idx} className="flex h-full w-full items-end">
                <span
                  className="w-full rounded-full bg-gradient-to-t from-primary/40 via-accent/70 to-white/80"
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/5 bg-white/5 p-4 text-sm text-white">
          <div className="flex items-center gap-2 text-base font-semibold">
            <LineChart size={18} className="text-accent" aria-hidden />
            Ver dashboard em ação
          </div>
          <p className="mt-2 text-xs text-white/70">
            Acompanhe postagens, respostas de IA e métricas de engajamento em um único painel, sem troca de abas.
          </p>
        </div>
      </div>
    </Card>
  );
}

function Stat({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs uppercase text-white/50">{label}</p>
      <p className="mt-1 text-lg font-semibold text-white">{value}</p>
      <p className="text-xs text-emerald-300">{note}</p>
    </div>
  );
}

function StatRow({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white">
          <ArrowUpRight size={14} />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">{label}</span>
          <span className="text-xs text-white/60">{delta}</span>
        </div>
      </div>
      <span className="font-semibold">{value}</span>
    </div>
  );
}
