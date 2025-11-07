import { Droplets, Leaf, Heart, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const ImpactSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Impactos Devastadores
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O lixo eletrônico afeta o meio ambiente, a saúde humana e comunidades inteiras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ImpactCard 
            icon={<Droplets className="h-10 w-10" />}
            title="Contaminação Hídrica"
            description="Metais pesados como chumbo, mercúrio e cádmio infiltram-se no solo e nos lençóis freáticos, contaminando fontes de água potável."
            stats={[
              "Chumbo: neurotoxina que afeta o desenvolvimento cerebral",
              "Mercúrio: danos ao sistema nervoso e renal",
              "Cádmio: cancerígeno e tóxico para ossos"
            ]}
            color="text-secondary"
          />

          <ImpactCard 
            icon={<Leaf className="h-10 w-10" />}
            title="Poluição Atmosférica"
            description="A queima informal de e-lixo libera dioxinas e furanos, substâncias altamente tóxicas que persistem no ambiente por décadas."
            stats={[
              "Dioxinas: cancerígenas e disruptoras hormonais",
              "Furanos: causam danos ao fígado e sistema imune",
              "Retardantes de chama: bioacumulam na cadeia alimentar"
            ]}
            color="text-primary"
          />

          <ImpactCard 
            icon={<Heart className="h-10 w-10" />}
            title="Saúde Humana"
            description="Populações expostas sofrem com doenças respiratórias, problemas neurológicos, câncer e distúrbios reprodutivos."
            stats={[
              "Crianças são as mais vulneráveis aos efeitos",
              "Trabalhadores informais em alto risco",
              "Impactos de longo prazo e multigeracionais"
            ]}
            color="text-destructive"
          />

          <ImpactCard 
            icon={<MapPin className="h-10 w-10" />}
            title="Injustiça Ambiental"
            description="Países em desenvolvimento recebem 80% do e-lixo mundial, expondo comunidades vulneráveis a riscos desproporcionais."
            stats={[
              "África e Ásia: principais destinos do e-lixo",
              "Comunidades pobres sem proteção adequada",
              "Violação de direitos humanos fundamentais"
            ]}
            color="text-accent"
          />
        </div>

        <div className="mt-16 bg-card rounded-3xl p-8 md:p-12 border-2 border-destructive/20">
          <h3 className="text-3xl font-bold mb-6 text-destructive">Substâncias Tóxicas Comuns</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ToxicSubstance 
              name="Chumbo"
              sources="Soldas, baterias, tubos de TV"
              effects="Danos cerebrais, problemas renais"
            />
            <ToxicSubstance 
              name="Mercúrio"
              sources="Lâmpadas, interruptores, baterias"
              effects="Danos neurológicos e ao sistema nervoso"
            />
            <ToxicSubstance 
              name="Retardantes de Chama"
              sources="Plásticos, circuitos"
              effects="Disruptores hormonais, câncer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ImpactCard = ({ 
  icon, 
  title, 
  description, 
  stats, 
  color 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  stats: string[];
  color: string;
}) => (
  <Card className="p-8 hover:shadow-card transition-all border-2">
    <div className={`${color} mb-4`}>{icon}</div>
    <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
    <p className="text-muted-foreground mb-6">{description}</p>
    <ul className="space-y-2">
      {stats.map((stat, index) => (
        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
          <span className={`${color} text-xl leading-none`}>•</span>
          <span>{stat}</span>
        </li>
      ))}
    </ul>
  </Card>
);

const ToxicSubstance = ({ name, sources, effects }: { name: string; sources: string; effects: string }) => (
  <div className="bg-destructive/5 rounded-xl p-6 border border-destructive/20">
    <h4 className="font-bold text-lg mb-2 text-destructive">{name}</h4>
    <p className="text-sm text-muted-foreground mb-2">
      <span className="font-semibold">Fontes:</span> {sources}
    </p>
    <p className="text-sm text-muted-foreground">
      <span className="font-semibold">Efeitos:</span> {effects}
    </p>
  </div>
);

export default ImpactSection;
