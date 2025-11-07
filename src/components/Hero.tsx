import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContent = () => {
    document.getElementById('problema')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            O Legado Tóxico da<br />
            <span className="text-accent">Era Digital</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Cada ano, geramos 62 milhões de toneladas de lixo eletrônico. É hora de agir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up">
          <StatCard 
            number="62M" 
            label="Toneladas de e-lixo em 2022" 
          />
          <StatCard 
            number="22.3%" 
            label="Taxa de reciclagem global" 
          />
          <StatCard 
            number="82M" 
            label="Toneladas previstas para 2030" 
          />
        </div>

        <Button 
          onClick={scrollToContent}
          size="lg"
          className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6 rounded-full shadow-glow transition-all hover:scale-105"
        >
          Descubra o Impacto
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-white/50" />
      </div>
    </section>
  );
};

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{number}</div>
    <div className="text-sm md:text-base text-white/80">{label}</div>
  </div>
);

export default Hero;
