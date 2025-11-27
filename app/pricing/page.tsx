import { Badge } from "../../components/ui/Badge";
import { Card } from "../../components/ui/Card";

export default function PricingPage() {
  return (
    <div className="relative min-h-screen bg-black px-4 pb-20 pt-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <Badge variant="solid" className="text-white">
          Planos
        </Badge>
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-white">Planos e acesso</h1>
          <p className="max-w-2xl text-sm text-white/60">
            Escolha o plano certo para conectar seu Instagram, automatizar campanhas e escalar o atendimento com IA.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {["Starter", "Growth", "Enterprise"].map((tier) => (
            <Card key={tier} className="flex flex-col gap-3 p-6 text-white">
              <div className="text-lg font-semibold">{tier}</div>
              <div className="text-sm text-white/60">
                Plano focado em acesso à dashboard, conexão de perfis Instagram/Meta e automações em massa. Detalhes serão publicados em breve.
              </div>
              <div className="mt-auto text-sm font-semibold text-accent">
                Em breve
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
