"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";
import { itemFadeUp, staggerContainer, hoverLift, tapPress } from "../../lib/motion";

const faqs = [
  {
    question: "Como a IA responde às minhas DMs e comentários?",
    answer:
      "Você define prompts e tom de voz. A IA usa esses padrões para responder leads, clientes e seguidores com segurança e contexto.",
  },
  {
    question: "Posso agendar posts e Stories no mesmo fluxo?",
    answer: "Sim. Crie trilhas que combinam posts, Stories e comentários automáticos com horários sugeridos pela IA.",
  },
  {
    question: "Quais integrações estão incluídas?",
    answer: "Meta/Instagram, páginas do Facebook e Webhooks. Conecte também automações externas via API.",
  },
  {
    question: "Como funciona o suporte?",
    answer: "Planos têm suporte por chat. O Enterprise inclui fila prioritária e acompanhamento dedicado.",
  },
  {
    question: "Posso pausar ou cancelar quando quiser?",
    answer: "Sim. Gestão de assinatura direto no painel, sem multas ou fidelidade.",
  },
];

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative bg-black px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.1fr,1.4fr] lg:items-start"
      >
        <motion.div variants={itemFadeUp} className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Perguntas Frequentes</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Perguntas mais populares</h2>
          <p className="max-w-xl text-sm text-white/70">
            Dúvidas sobre automação, IA nas DMs ou integrações? Confira as respostas mais pedidas.
          </p>
          <Button variant="primary" size="md" href="/contact" className="mt-4">
            Falar com o time
          </Button>
        </motion.div>

        <motion.div
          variants={itemFadeUp}
          className="rounded-3xl border border-white/10 bg-black/70 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur"
        >
          <motion.ul layout className="divide-y divide-white/5">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.li key={faq.question} layout transition={{ duration: 0.25, ease: "easeOut" }}>
                  <button
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-white transition duration-200 ease-out hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                  >
                    <span className="text-sm font-semibold">{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                  <AnimatePresence initial={false} mode="wait">
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${idx}`}
                        layout
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                        className="px-4 pb-4 text-sm text-white/70"
                      >
                        <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="pt-1">
                          {faq.answer}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
