import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black px-4 py-10 backdrop-blur">
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
      className="relative py-1 text-white/60 transition duration-200 ease-out hover:text-white hover:brightness-110 active:scale-[0.98] active:brightness-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      href={href}
      prefetch={false}
    >
      <span>{label}</span>
      <span className="absolute left-0 right-0 -bottom-1 h-px origin-left scale-x-0 bg-white/60 transition duration-200 ease-out hover:scale-x-100" />
    </Link>
  );
}
