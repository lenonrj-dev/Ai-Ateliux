import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/60 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-white/50 sm:flex-row">
        <div className="flex items-center gap-2 text-white/70">
          <span className="text-lg font-bold text-white">Ateliux</span>
          <span className="text-white/50">Automação de Instagram com IA</span>
        </div>
        <div className="flex items-center gap-4">
          <Link className="hover:text-white" href="/pricing">
            Planos
          </Link>
          <Link className="hover:text-white" href="/integrations">
            Integrações
          </Link>
          <Link className="hover:text-white" href="/contact">
            Contato
          </Link>
        </div>
      </div>
    </footer>
  );
}
