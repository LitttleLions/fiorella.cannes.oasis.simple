import { motion } from 'motion/react';
import { Sun, Wifi, Wind, Tv, Car, Utensils } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-20 lg:py-32 bg-card" id="apartment">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
              <img 
                src="/images/apartment.jpg" 
                alt="Helles, freundliches Apartment Interieur" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass-card max-w-xs hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                  <Sun className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold tracking-tight">Lichtdurchflutet</h4>
                  <p className="text-sm text-muted-foreground mt-1">Südfranzösische Sonne</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
              Ein Zuhause mit <br/><span className="text-primary">mediterranem Charme</span>
            </h2>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              Die Unterkunft Fiorella's Cannes Oasis besticht durch ihre helle, moderne und liebevolle Einrichtung. Auf 65 m² bietet das Apartment mit 2 Schlafzimmern, einem großzügigen Wohnbereich mit Schlafsofa und einer voll ausgestatteten Küche ausreichend Platz für bis zu 4 Gäste. Genießen Sie entspannte Stunden auf dem Balkon mit Blick auf die Stadt und den Garten.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-10">
              {[
                { icon: <Wifi className="w-5 h-5 text-primary" />, text: 'Kostenloses WLAN' },
                { icon: <Wind className="w-5 h-5 text-primary" />, text: 'Klimaanlage' },
                { icon: <Utensils className="w-5 h-5 text-primary" />, text: 'Küche mit Geschirrspüler' },
                { icon: <Sun className="w-5 h-5 text-primary" />, text: 'Balkon & Gartenblick' },
                { icon: <Tv className="w-5 h-5 text-primary" />, text: 'Flachbild-TV' },
                { icon: <Car className="w-5 h-5 text-primary" />, text: 'Kostenloser Parkplatz' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-secondary p-2.5 rounded-xl shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-foreground font-medium text-sm md:text-base">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 p-6 bg-muted rounded-2xl border border-border">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">4</p>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Gäste</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">2</p>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Schlafzimmer</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">65</p>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">m²</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
