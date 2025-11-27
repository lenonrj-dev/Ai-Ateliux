import { Badge } from "../../components/ui/Badge";
import { Card } from "../../components/ui/Card";

export default function LogsPage() {
  return (
    <div className="relative min-h-screen bg-black px-4 pb-20 pt-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <Badge variant="solid" className="text-white">
          Atividade
        </Badge>
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-white">Registros de automação</h1>
          <p className="max-w-2xl text-sm text-white/60">
            Acompanhe cada disparo de post, comentário e DM automatizada. Veja o que a IA fez e mantenha controle total.
          </p>
        </div>
        <Card className="p-6 text-sm text-white/70">
          A visualização de logs ficará aqui. Defina quais eventos deseja monitorar para garantir transparência das ações da IA.
        </Card>
      </div>
    </div>
  );
}
