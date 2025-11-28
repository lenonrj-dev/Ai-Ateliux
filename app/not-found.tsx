import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_70%_0%,rgba(56,189,248,0.14),transparent_32%)] opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(0,0,0,0.55),transparent_60%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center px-5 pb-16 pt-24 text-center sm:pt-28">
        <div className="text-[22vw] font-black leading-none text-white/5 sm:text-[18vw]">404</div>

        <div className="relative -mt-14 w-full max-w-3xl overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 via-black/70 to-black/90 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.5)] sm:p-10">
          <h1 className="text-2xl font-semibold sm:text-3xl">Página não encontrada</h1>
          <p className="mt-3 text-sm text-white/70 sm:text-base">
            A rota que você acessou não existe na AI Ateliux. Conecte-se ao painel para automatizar postagens, comentários e DMs com IA.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/15 sm:w-auto"
            >
              <ArrowLeft size={16} />
              Voltar para o início
            </Link>
            <Link
              href="/login"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-black/80 px-5 py-3 text-sm font-semibold text-black shadow-[0_15px_45px_rgba(59,130,246,0.35)] transition hover:-translate-y-[1px] hover:shadow-[0_18px_55px_rgba(100,180,255,0.45)] sm:w-auto"
            >
              Entrar na AI Ateliux
            </Link>
          </div>
        </div>

        <div className="relative mt-12 w-full max-w-5xl overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-[#0b1020]/80 via-[#05070d]/90 to-black/90 p-8 shadow-[0_25px_90px_rgba(0,0,0,0.5)] sm:p-10">
          <div className="flex flex-col gap-4 text-left sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                <Sparkles size={14} className="text-accent" />
                AI Ateliux
              </div>
              <h2 className="text-2xl font-semibold sm:text-3xl">Automação inteligente para Instagram</h2>
              <p className="text-sm text-white/70 sm:max-w-2xl">
                Agende postagens e Stories, dispare comentários e DMs com IA e monitore tudo em um único painel. Conecte sua conta Meta e mantenha o perfil ativo 24/7.
              </p>
            </div>
            <Link
              href="/login"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-black shadow-[0_15px_45px_rgba(59,130,246,0.35)] transition hover:-translate-y-[1px] hover:shadow-[0_18px_55px_rgba(100,180,255,0.45)] sm:mt-0"
            >
              Ver dashboard
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 text-sm text-white/70 sm:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-white">Plataforma</h3>
              <ul className="space-y-1">
                <li>Automação de postagens</li>
                <li>DMs com IA</li>
                <li>Comentários inteligentes</li>
                <li>Métricas em tempo real</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-white">Navegação</h3>
              <ul className="space-y-1">
                <li>Início</li>
                <li>Recursos</li>
                <li>Integrações</li>
                <li>Planos</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-white">Suporte</h3>
              <ul className="space-y-1">
                <li>Segurança e conformidade</li>
                <li>FAQ</li>
                <li>Contato</li>
                <li>Dashboard / Login</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
