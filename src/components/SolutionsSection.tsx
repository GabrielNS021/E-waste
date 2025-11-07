import { Smartphone, Package, Repeat, Users, Building2, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SolutionsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-accent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            O Que Podemos Fazer?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Soluções práticas para reduzir o impacto do lixo eletrônico
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <SolutionCard 
            icon={<Smartphone className="h-8 w-8" />}
            title="Use por Mais Tempo"
            description="Mantenha seus dispositivos o máximo possível. Conserte em vez de substituir."
            tips={[
              "Faça manutenção preventiva",
              "Use capas e proteções",
              "Atualize o software"
            ]}
          />

          <SolutionCard 
            icon={<Package className="h-8 w-8" />}
            title="Descarte Corretamente"
            description="Nunca jogue eletrônicos no lixo comum. Use pontos de coleta apropriados."
            tips={[
              "Procure postos de coleta",
              "Apague dados pessoais",
              "Remova baterias"
            ]}
          />

          <SolutionCard 
            icon={<Repeat className="h-8 w-8" />}
            title="Compre Remanufaturado"
            description="Considere produtos recondicionados ou de segunda mão."
            tips={[
              "Economia de até 70%",
              "Menor impacto ambiental",
              "Qualidade garantida"
            ]}
          />

          <SolutionCard 
            icon={<Users className="h-8 w-8" />}
            title="Doe ou Venda"
            description="Dispositivos funcionais podem ter segunda vida com outros usuários."
            tips={[
              "ONGs e escolas aceitam doações",
              "Plataformas de venda usados",
              "Programas de troca"
            ]}
          />

          <SolutionCard 
            icon={<Building2 className="h-8 w-8" />}
            title="Cobre Fabricantes"
            description="Exija responsabilidade e produtos sustentáveis das empresas."
            tips={[
              "Escolha marcas sustentáveis",
              "Participe de consultas públicas",
              "Apoie logística reversa"
            ]}
          />

          <SolutionCard 
            icon={<Lightbulb className="h-8 w-8" />}
            title="Eduque e Conscientize"
            description="Compartilhe conhecimento sobre o impacto do e-lixo."
            tips={[
              "Converse com amigos e família",
              "Compartilhe nas redes sociais",
              "Apoie iniciativas locais"
            ]}
          />
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-6">Economia Circular: O Futuro</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-white/90 mb-4">
                A economia circular propõe um modelo onde produtos são projetados para durabilidade, 
                reparo e reciclagem desde o início. Isso significa:
              </p>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent text-xl">✓</span>
                  <span>Design modular e reparável</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent text-xl">✓</span>
                  <span>Uso de materiais reciclados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent text-xl">✓</span>
                  <span>Responsabilidade estendida do produtor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent text-xl">✓</span>
                  <span>Incentivo ao compartilhamento e aluguel</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <div className="bg-white/20 rounded-2xl p-6 mb-4">
                <p className="text-4xl font-bold text-white mb-2">$57 Bi</p>
                <p className="text-white/80">Valor de materiais recuperáveis perdidos anualmente</p>
              </div>
              <div className="bg-white/20 rounded-2xl p-6">
                <p className="text-4xl font-bold text-white mb-2">80%</p>
                <p className="text-white/80">Redução potencial de e-lixo com economia circular</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionCard = ({ 
  icon, 
  title, 
  description, 
  tips 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  tips: string[];
}) => (
  <Card className="bg-white/95 backdrop-blur p-6 hover:shadow-glow transition-all hover:scale-105 border-2">
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
    <p className="text-muted-foreground mb-4">{description}</p>
    <ul className="space-y-1">
      {tips.map((tip, index) => (
        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
          <span className="text-accent">•</span>
          <span>{tip}</span>
        </li>
      ))}
    </ul>
  </Card>
);

export default SolutionsSection;
