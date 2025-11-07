import { Recycle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Recycle className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">E-waste Awareness</span>
            </div>
            <p className="text-background/80 text-sm">
              Conscientização sobre o impacto ambiental do lixo eletrônico 
              e promoção de práticas sustentáveis.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#problema" className="hover:text-accent transition-colors">
                  O Problema
                </a>
              </li>
              <li>
                <a href="#impacto" className="hover:text-accent transition-colors">
                  Impactos
                </a>
              </li>
              <li>
                <a href="#dados" className="hover:text-accent transition-colors">
                  Dados
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-accent transition-colors">
                  Soluções
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Sobre Este Site</h4>
            <p className="text-background/80 text-sm mb-4">
              Este site foi criado com o objetivo de educar e conscientizar 
              sobre a importância da reciclagem de lixo eletrônico.
            </p>
            <p className="text-background/80 text-xs">
              Dados baseados no Global E-waste Monitor 2024 e outras fontes científicas.
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-sm text-background/70">
            Gabriel Neman Silva | Nicolas Gonçalves Santos | Cainan Tomim Machado
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
