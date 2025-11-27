"use client";

import { motion } from "framer-motion";
import { Dribbble, Figma, Framer, Globe2, Zap } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

const integrations = [
  { name: "Meta / Instagram", icon: <Figma size={18} />, action: "Conectar conta" },
  { name: "Facebook Pages", icon: <Framer size={18} />, action: "Sincronizar página" },
  { name: "WhatsApp / Direct", icon: <Dribbble size={18} />, action: "Ativar respostas" },
  { name: "Zapier / Webhook", icon: <Zap size={18} />, action: "Automatizar com IA" },
];

export function Integrations() {
  return (
    <section id="integrations" className="relative overflow-hidden bg-black px-4 pb-20 pt-8">
      <div className="absolute inset-0 flex items-center justify-center text-[13vw] font-black uppercase tracking-[0.2em] text-white/5 pointer-events-none select-none">
        INTEGRAÇÕES
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Badge variant="solid" icon={<Globe2 size={14} />} className="p-5 text-white">
            Integrações
          </Badge>
          <div className="max-w-xl text-sm text-white/60">
            Conecte Instagram, Facebook e fluxos externos para acionar automações e responder leads sem sair da AI Ateliux.
          </div>
        </div>

        <div className="relative flex flex-col items-center gap-10">
        <div className="relative flex flex-col items-center">
            <div className="rounded-full ml-26 border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-soft">
              Conecte e automatize
            </div>
          </div>

          <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-4">
            {integrations.map((integration, idx) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
              >
                <IntegrationCard {...integration} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IntegrationCard({
  name,
  icon,
  action,
}: {
  name: string;
  icon: React.ReactNode;
  action: string;
}) {
  return (
    <Card className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-[#0b1220]/70 p-5 text-white hover:border-white/20 hover:bg-white/5 transition">
      <div className="flex items-center gap-3 text-sm font-semibold">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
          {icon}
        </div>
        <div className="text-base text-white">{name}</div>
      </div>
      <div className="text-sm text-white/60">
        Centralize as conexões do Instagram e de canais Meta para acionar automações com IA.
      </div>
      <div className="text-sm font-semibold text-white">{action}</div>
    </Card>
  );
}
