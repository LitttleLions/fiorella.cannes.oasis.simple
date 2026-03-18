import { motion } from 'motion/react';
import { Star, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/apartment.jpg" 
          alt="Blick auf das Meer an der Côte d'Azur" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <span className="badge-secondary">
              <Star className="w-4 h-4 fill-primary text-primary" />
              9,2 Hervorragend bewertet
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[48px] font-extrabold text-foreground mb-6 leading-tight tracking-tight">
            Fiorella's Cannes Oasis <br/>
            <span className="text-primary">Ihr Traumurlaub an der Côte d'Azur</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground mb-10 leading-relaxed">
            Entfliehen Sie dem Alltag und genießen Sie das mediterrane Lebensgefühl in unserer hellen, freundlichen Ferienwohnung. Schreiben Sie uns einfach eine E-Mail – wir antworten kurzfristig!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:cannes.fiorella@gmail.com" 
              className="btn-primary large shadow-glow"
            >
              Jetzt anfragen <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#galerie" 
              className="btn-outline large"
            >
              Bilder ansehen
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
