import { Badge } from "../../components/ui/Badge";
import { Card } from "../../components/ui/Card";

export default function IntegrationsPage() {
  return (
    <div className="relative min-h-screen bg-black px-4 pb-20 pt-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <Badge variant="solid" className="text-white">
          Integrações
        </Badge>
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-white">Integrações oficiais</h1>
          <p className="max-w-2xl text-sm text-white/60">
            Conecte Instagram e Facebook com segurança pela Meta, dispare Webhooks e integre automações com as ferramentas que você já usa.
          </p>
        </div>
        <Card className="p-6 text-sm text-white/70">
          Em breve você verá os conectores detalhados aqui. Enquanto isso, comece conectando seu Instagram para testar as automações da AI Ateliux.
        </Card>
      </div>
    </div>
  );
}
