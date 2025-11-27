import { Badge } from "../../components/ui/Badge";
import { Card } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-black px-4 pb-20 pt-28">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <Badge variant="solid" className="text-white">
          Contato
        </Badge>
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-white">Fale com o time Ateliux</h1>
          <p className="max-w-2xl text-sm text-white/60">
            Quer entender como a AI Ateliux pode automatizar seu Instagram? Envie seus dados e retornaremos com uma demonstração personalizada.
          </p>
        </div>
        <Card className="flex flex-col gap-4 p-6 text-white">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input placeholder="Nome completo" />
            <Input placeholder="Email corporativo" />
          </div>
          <Input placeholder="Empresa ou @perfil no Instagram" />
          <textarea
            className="min-h-[120px] rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/20 focus:ring-2 focus:ring-primary/30"
            placeholder="Conte como deseja automatizar postagens, comentários ou DMs..."
          />
          <div className="flex justify-end">
            <Button>Falar com o time Ateliux</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
