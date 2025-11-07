import { AlertTriangle, TrendingUp, Recycle } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProblemSection = () => {
  return (
    <section id="problema" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            A Crise Global dos Resíduos Eletrônicos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma ameaça silenciosa e crescente que afeta todo o planeta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ProblemCard 
            icon={<AlertTriangle className="h-12 w-12" />}
            title="Paradoxo do Progresso"
            description="A mesma inovação que impulsiona o desenvolvimento gera um fluxo de resíduos cada vez mais volumoso e perigoso."
          />
          <ProblemCard 
            icon={<TrendingUp className="h-12 w-12" />}
            title="Crescimento Acelerado"
            description="A geração de e-lixo cresce 5x mais rápido que a taxa de reciclagem documentada globalmente."
          />
          <ProblemCard 
            icon={<Recycle className="h-12 w-12" />}
            title="Gap de Reciclagem"
            description="Menos de 25% do lixo eletrônico global é oficialmente coletado e reciclado adequadamente."
          />
        </div>

        <div className="bg-gradient-secondary rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-6">Por que isso acontece?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ReasonItem 
              title="Obsolescência Programada"
              description="Produtos projetados para ter vida útil curta, forçando substituições frequentes."
            />
            <ReasonItem 
              title="Cultura do Consumo"
              description="Busca constante por dispositivos mais novos, mesmo quando os atuais ainda funcionam."
            />
            <ReasonItem 
              title="Falta de Infraestrutura"
              description="Sistemas de coleta e reciclagem inadequados ou inexistentes em muitas regiões."
            />
            <ReasonItem 
              title="Complexidade dos Produtos"
              description="Dispositivos modernos contêm múltiplos materiais difíceis de separar e reciclar."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProblemCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <Card className="p-6 hover:shadow-card transition-all hover:scale-105 border-2">
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </Card>
);

const ReasonItem = ({ title, description }: { title: string; description: string }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-white mt-2" />
    <div>
      <h4 className="font-semibold text-lg mb-1">{title}</h4>
      <p className="text-white/80 text-sm">{description}</p>
    </div>
  </div>
);

export default ProblemSection;
