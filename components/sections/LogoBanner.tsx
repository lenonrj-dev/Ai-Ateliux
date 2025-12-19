"use client";

import { motion } from "framer-motion";

const logos = [
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
];

export function LogoBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative bg-black px-4 py-14 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4 }}
        className="mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-[28px] border border-white/10 bg-black/70 px-8 py-10 text-center shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur"
      >
        <div className="space-y-3">
          <p className="text-2xl font-semibold text-white sm:text-3xl">
            Mais de 300.000 negócios automatizam com a AI Ateliux.
          </p>
          <p className="text-sm text-white/70">Crie posts, Stories e DMs inteligentes com o copiloto de social media.</p>
        </div>
        <div className="grid w-full gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {logos.map((logo, idx) => (
            <motion.div
              key={`${logo}-${idx}`}
              className="flex items-center justify-center rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm font-semibold text-white/60"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
