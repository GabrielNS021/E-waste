import { Button } from "@/components/ui/button";
import { ExternalLink, Youtube } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-white/80 text-sm uppercase tracking-wider mb-2">
            NOSSOS PARCEIROS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Rede que multiplica<br />impacto positivo
          </h2>
          <p className="text-white/90 text-lg max-w-xl">
            Conteúdo, experiência e engajamento para falar de descarte correto em todos os formatos. 
            Fique de olho no Instagram do projeto e explore os materiais extras criados por iniciativas amigas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20">
            <p className="text-white/80 text-xs uppercase tracking-wider mb-2">
              INSTAGRAM OFICIAL
            </p>
            <h3 className="text-2xl font-bold text-white mb-2">
              @recicla_mack
            </h3>
            <p className="text-white/90 text-sm mb-6">
              Bastidores, dicas e alertas rápidos sobre o universo do lixo eletrônico.
            </p>
            <Button 
              asChild
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              <a 
                href="https://www.instagram.com/recicla_mack/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Abrir no Instagram
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20">
            <p className="text-white/80 text-xs uppercase tracking-wider mb-2">
              SITE PARCEIRO
            </p>
            <h3 className="text-2xl font-bold text-white mb-2">
              Ecologia Interativa
            </h3>
            <p className="text-white/90 text-sm mb-6">
              Jogo online que mostra, de forma divertida, o impacto das nossas escolhas tecnológicas.
            </p>
            <Button 
              asChild
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              <a 
                href="https://will1wood.github.io/siteecologia/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Acessar agora
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white mb-8">
            Veja nossos podcasts educativos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PodcastCard 
              title="Recicla Mack #1"
              description="O impacto ambiental do descarte incorreto de lixo eletrônico"
              youtubeUrl="https://youtu.be/-6Dx_tjFqE8?si=xPyWK4gxuCChGXYu"
            />
            <PodcastCard 
              title="Recicla Mack #2"
              description="Logística Reversa: o caminho de volta dos eletrônicos"
              youtubeUrl="https://youtu.be/dpV9Km25yLE?si=-6IuVP5ziACNS4C0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const PodcastCard = ({ title, description, youtubeUrl }: { title: string; description: string; youtubeUrl: string }) => (
  <a 
    href={youtubeUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="group"
  >
    <div className="relative bg-gradient-to-br from-[#2D5016] to-[#1a3010] rounded-2xl overflow-hidden aspect-video flex items-center justify-center mb-4 border-4 border-black">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full border-8 border-[#2D5016] flex items-center justify-center bg-white/10 backdrop-blur-sm">
          <svg className="w-20 h-20 text-[#2D5016]" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
            <circle cx="12" cy="12" r="4" fill="currentColor"/>
          </svg>
          <div className="absolute text-[#4A7C2E] text-2xl font-bold">
            MACK
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
      <div className="absolute w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
        <Youtube className="w-10 h-10 text-white" />
      </div>
      <div className="absolute bottom-4 left-4 text-white font-semibold text-sm flex items-center gap-2">
        <Youtube className="w-5 h-5" />
        Assistir no Youtube
      </div>
    </div>
    <h4 className="text-white font-bold text-lg mb-2">{title}</h4>
    <p className="text-white/80 text-sm">{description}</p>
  </a>
);

export default CallToAction;
