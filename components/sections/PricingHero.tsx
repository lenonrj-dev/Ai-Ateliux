"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "../ui/Button";
import { staggerContainer, itemFadeUp, hoverLift, tapPress } from "../../lib/motion";

type Plan = {
  name: string;
  description: string;
  price: string;
  note: string;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    description: "Automação essencial para perfis menores validarem fluxos de postagens e respostas.",
    price: "R$49",
    note: "*Ideal para validar automações e manter o perfil ativo com IA.",
  },
  {
    name: "Profissional",
    description: "Planejamento completo de conteúdo e DMs com IA para marcas em crescimento.",
    price: "R$99",
    popular: true,
    note: "*Perfeito para social media e marcas que já usam automação diariamente.",
  },
  {
    name: "Enterprise",
    description: "Automação em escala, governança e prioridades de suporte para squads e agências.",
    price: "R$199",
    note: "*Suporte dedicado e limites expandidos para operações críticas.",
  },
];

const features = [
  "Agendamento de posts e Stories com IA",
  "Respostas inteligentes em DMs e comentários",
  "Fluxos automáticos por gatilho",
  "Biblioteca de prompts e templates",
  "Relatórios de engajamento em tempo real",
];

export function PricingHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative overflow-hidden bg-black"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(59,130,246,0.18),transparent_45%),radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.14),transparent_50%)]" />
      <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Planos</p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Preço claro. Sem surpresas.</h1>
          <p className="mx-auto max-w-2xl text-sm text-white/70">
            Valor previsível para automatizar Instagram e Facebook com IA. Sem taxas ocultas.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3"
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              variants={itemFadeUp}
              whileHover={{ ...hoverLift, scale: 1.02 }}
              whileTap={tapPress}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-black/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur"
            >
              {plan.popular && (
                <span className="absolute -top-3 right-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white shadow-soft">
                  Mais Popular
                </span>
              )}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <p className="text-sm text-white/60">{plan.description}</p>
              </div>

              <div className="flex items-baseline gap-2 text-white">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Mensal</span>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">Inclui:</p>
                <ul className="space-y-2 text-sm text-white/80">
                  {features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <Check size={16} className="mt-0.5 text-accent shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button size="lg" className="w-full" href="/login">
                Assinar agora
              </Button>

              <p className="text-[11px] text-white/60">{plan.note}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
