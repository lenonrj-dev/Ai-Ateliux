"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Skeleton } from "../components/ui/Skeleton";

const pulseDelays = [0, 0.18, 0.32];

export default function Loading() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.2),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.05),transparent,rgba(255,255,255,0.04))]" />

        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-5xl rounded-3xl border border-white/10 bg-black/70 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-8"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white">
                <Sparkles size={18} />
                {pulseDelays.map((delay) => (
                  <m.span
                    key={delay}
                    className="absolute inset-0 rounded-2xl border border-white/10"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.2, 0.6] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay }}
                  />
                ))}
              </div>
              <div className="space-y-1 text-white">
                <p className="text-sm font-semibold uppercase tracking-wide text-white/70">AI Ateliux</p>
                <p className="text-lg font-bold">Preparando seu painel</p>
              </div>
            </div>
            <div className="flex w-full max-w-sm items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(56,189,248,0.6)]" />
              IA iniciando automações e integrações
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Skeleton className="h-32 rounded-2xl" />
            <Skeleton className="h-32 rounded-2xl" />
            <Skeleton className="h-32 rounded-2xl" />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-28 rounded-full" />
                <Skeleton className="h-4 w-14 rounded-full" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 8 }).map((_, idx) => (
                  <Skeleton key={idx} className="h-16 rounded-xl" />
                ))}
              </div>
            </div>

            <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <Skeleton className="h-4 w-32 rounded-full" />
              <div className="grid grid-cols-1 gap-2">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <Skeleton key={idx} className="h-10 rounded-xl" />
                ))}
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </LazyMotion>
  );
}
