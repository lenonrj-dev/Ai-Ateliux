import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/60 px-4 py-10 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-white/60 sm:flex-row">
        <div className="flex items-center gap-3 text-white">
          <span className="text-lg font-bold">Ateliux</span>
          <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">Automação IA</span>
        </div>
        <div className="flex items-center gap-4">
          <FooterLink href="/pricing" label="Planos" />
          <FooterLink href="/integrations" label="Integrações" />
          <FooterLink href="/contact" label="Contato" />
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      className="relative py-1 text-white/60 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-0"
      href={href}
    >
      <span>{label}</span>
      <span className="absolute left-0 right-0 -bottom-1 h-px origin-left scale-x-0 bg-white/60 transition duration-200 ease-out hover:scale-x-100" />
    </Link>
  );
}
