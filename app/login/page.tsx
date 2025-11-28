import { Github, Mail } from "lucide-react";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-[1090px] w-full items-center justify-center overflow-hidden bg-black px-4 py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[url('/bg_tecnology_login.svg')] bg-cover bg-center" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-2">
        <GradientPanel />
        <FormPanel />
      </div>
    </div>
  );
}

function GradientPanel() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0a4dcc] via-[#0a3fa3] to-black shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.14),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.14),transparent_32%)] opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/75" />

      <div className="relative flex min-h-[520px] flex-col items-center justify-center gap-6 px-6 py-10 text-center sm:px-10 lg:px-12">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/80 shadow-soft">
          <span className="h-2 w-2 rounded-full bg-white" />
          AI Ateliux
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">Comece com a AI Ateliux</h1>
          <p className="text-sm text-white/70 sm:text-base">
            Siga os passos para criar sua conta e conectar seu Instagram/Meta com segurança.
          </p>
        </div>

        <div className="flex w-full max-w-sm flex-col gap-3 text-left text-sm text-white/80">
          {[
            { label: "Criar sua conta", active: true },
            { label: "Configurar workspace", active: false },
            { label: "Personalizar perfil", active: false },
          ].map((step) => (
            <button
              key={step.label}
              type="button"
              className={`flex w-full items-center justify-between rounded-xl px-4 py-3 ${
                step.active
                  ? "bg-white text-black shadow-[0_12px_45px_rgba(0,0,0,0.35)]"
                  : "border border-white/10 bg-white/5 text-white/80 hover:border-white/20 hover:bg-white/10"
              }`}
            >
              <span>{step.label}</span>
              {step.active && <span className="text-xs font-semibold text-black">Ativo</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function FormPanel() {
  return (
    <div className="flex w-full flex-col gap-6 rounded-3xl border border-white/10 bg-[#0b0d12]/70 p-6 shadow-soft backdrop-blur-md sm:p-8">
      <div className="space-y-2 text-center">
        <Badge variant="solid" className="mx-auto px-5 text-white">
          Entrar
        </Badge>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Acessar sua conta</h2>
        <p className="text-sm text-white/70">
          Entre para gerenciar suas automações de Instagram com a AI Ateliux.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <SocialButton icon={<Mail size={16} />} label="Google" />
          <SocialButton icon={<Github size={16} />} label="GitHub" />
        </div>
        <div className="flex items-center gap-3 text-xs uppercase tracking-wide text-white/50">
          <span className="h-px flex-1 bg-white/10" />
          ou
          <span className="h-px flex-1 bg-white/10" />
        </div>
      </div>

      <form className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-white/70">Nome</label>
            <Input placeholder="Ex.: Maria" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-white/70">Sobrenome</label>
            <Input placeholder="Ex.: Souza" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-white/70">Email</label>
          <Input placeholder="seuemail@empresa.com" type="email" />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-white/70">Senha</label>
          <Input placeholder="Mínimo 8 caracteres" type="password" />
          <span className="text-[11px] text-white/50">Use uma senha forte para proteger sua conta.</span>
        </div>

        <Button type="button" className="w-full justify-center rounded-xl">
          Entrar na AI Ateliux
        </Button>
      </form>

      <div className="text-center text-sm text-white/70">
        Ainda não tem conta?{" "}
        <a className="font-semibold text-white hover:text-accent" href="/contact">
          Falar com o time
        </a>
      </div>
    </div>
  );
}

function SocialButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
