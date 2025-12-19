"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const socials = [
  { icon: <Facebook size={16} />, href: "#" },
  { icon: <Twitter size={16} />, href: "#" },
  { icon: <Instagram size={16} />, href: "#" },
  { icon: <Linkedin size={16} />, href: "#" },
  { icon: <Youtube size={16} />, href: "#" },
];

const columns = [
  {
    title: "Serviços",
    links: [
      "Automações de Instagram",
      "Planejamento de conteúdo",
      "Fluxos de DMs com IA",
      "Relatórios em tempo real",
      "Integrações e Webhooks",
    ],
  },
  {
    title: "Suporte",
    links: ["Central de ajuda", "FAQ", "Status do sistema", "Fale com vendas", "Contato"],
  },
  {
    title: "Empresa",
    links: ["Sobre nós", "Time", "Carreiras", "Artigos e novidades", "Jurídico"],
  },
];

export function PricingFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-black px-4 pb-10 pt-16 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-6xl divide-y divide-white/5"
      >
        <div className="grid gap-10 pb-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white shadow-soft border border-white/10">
                AI
              </div>
              <div className="text-lg font-bold text-white">Ateliux</div>
            </div>
            <p className="text-sm text-white/70">
              Ateliux é IA para Instagram e Facebook: posts, Stories, DMs e relatórios em um painel único e seguro.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  prefetch={false}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/70 transition duration-200 ease-out hover:text-white hover:border-white/20 hover:brightness-110 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">{col.title}</h3>
              <ul className="space-y-2 text-sm text-white/70">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      prefetch={false}
                      className="transition duration-150 ease-out hover:text-white hover:underline active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © 2023 Ateliux. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            {["Termos de uso", "Política de Privacidade", "Política de Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                prefetch={false}
                className="transition duration-150 ease-out hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
}
