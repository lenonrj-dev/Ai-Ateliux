"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Marina Silva",
    role: "E-commerce",
    quote: "Agendo feed e Stories em minutos e a IA responde o Direct sozinha. Sobrou tempo para criar campanhas melhores.",
  },
  {
    name: "Lucas Andrade",
    role: "Social media",
    quote:
      "Configuro fluxos do tipo “se seguir, envia DM” e a AI Ateliux já nutre o lead. Meu engajamento subiu sem aumentar equipe.",
  },
  {
    name: "Patrícia Nogueira",
    role: "Agência de marketing",
    quote:
      "Unifiquei todas as contas em um painel. Os relatórios em tempo real mostram o que dá resultado no Instagram dos clientes.",
  },
  {
    name: "Rafael Costa",
    role: "Criador de conteúdo",
    quote:
      "Deixo respostas prontas e a IA adapta o tom. Fecho parcerias direto pelo Direct, mesmo quando não estou online.",
  },
  {
    name: "Juliana Prado",
    role: "Infoprodutora",
    quote:
      "O disparo de DMs para novos inscritos salvou meu lançamento. Automação em massa sem perder o toque humano.",
  },
  {
    name: "Eduardo Martins",
    role: "Loja virtual",
    quote:
      "As automações deixam o Instagram ativo 24/7 e o suporte em português é rápido. Vendas e atendimento em um só lugar.",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-black px-4 py-20">
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-primary/25 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-[13vw] font-black uppercase tracking-[0.24em] text-white/5 select-none">
        CLIENTES
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3 text-white/60">
            <span className="h-px w-12 bg-white/20" />
            <Badge variant="solid" icon={<Quote size={16} />}>
              Depoimentos
            </Badge>
            <span className="h-px w-12 bg-white/20" />
          </div>
          <h2 className="text-balance text-4xl font-bold leading-tight text-white sm:text-5xl">
            Como a AI Ateliux acelera resultados no Instagram
          </h2>
          <p className="max-w-2xl text-sm text-white/60 sm:text-base">
            Profissionais e equipes mantêm o Instagram ativo, respondem leads no Direct e ganham horas por semana com automação inteligente.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, role, quote }: Testimonial) {
  return (
    <Card
      gradient={false}
      className="group flex h-full flex-col gap-4 overflow-hidden border-white/10 bg-gradient-to-b from-[#120b1d]/75 via-[#0b0d15]/90 to-[#06070e] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-glow"
    >
      <div className="pointer-events-none absolute inset-x-4 bottom-0 h-28 rounded-full bg-gradient-to-t from-primary/25 via-accent/15 to-transparent blur-3xl" />

      <div className="flex items-center gap-3">
        <Avatar name={name} />
        <div>
          <div className="text-sm font-semibold text-white">{name}</div>
          <div className="text-xs text-white/60">{role}</div>
        </div>
      </div>

      <div className="flex gap-3 text-sm leading-relaxed text-white/75">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/70 via-accent/70 to-[#f472b6] text-white shadow-soft">
          <Quote size={16} aria-hidden />
        </div>
        <p className="text-sm text-white/75">{quote}</p>
      </div>
    </Card>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-primary/30 via-[#f472b6]/50 to-accent/30 text-sm font-semibold text-white shadow-soft">
      {initials}
    </div>
  );
}
