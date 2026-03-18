import { motion } from 'motion/react';
import { MapPin, Star, Sun, Waves, Check, Phone, Mail, ArrowRight, Anchor, Wifi, Wind, Coffee, Tv, Car, Utensils } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?q=80&w=2671&auto=format&fit=crop" 
            alt="Blick auf das Meer an der Côte d'Azur" 
            className="w-full h-full object-cover opacity-10"
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

      {/* Features Section */}
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
                  src="https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&w=2000&auto=format&fit=crop" 
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

      {/* Gallery Section */}
      <section className="py-20 lg:py-32 bg-background" id="galerie">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Impressionen</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              Ein kleiner Einblick in Ihre zukünftige Urlaubsresidenz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
            <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden shadow-card group">
              <img 
                src="https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&w=2000&auto=format&fit=crop" 
                alt="Wohnzimmer" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card group">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop" 
                alt="Küche" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card group">
              <img 
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1000&auto=format&fit=crop" 
                alt="Schlafzimmer" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-card group">
              <img 
                src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2000&auto=format&fit=crop" 
                alt="Balkon und Aussicht" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer" 
              />
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Hinweis: Dies sind aktuell Platzhalter-Bilder. Die echten Bilder der Wohnung werden hier in Kürze hochgeladen.
            </p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 lg:py-32 bg-background" id="lage">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Die perfekte Lage in Cannes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              10 Rue du Parc Alexandre III, Pointe Croisette, 06400 Cannes. Zentral gelegen und doch wunderbar ruhig.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6">
                <Waves className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">Strandnähe</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">In weniger als 1 km erreichen Sie den wunderschönen Sandstrand Plage Gazagnaire und das azurblaue Meer.</p>
            </div>
            <div className="glass-card">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">Zentral & Praktisch</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Nur 2,4 km zum Palais des Festivals. Supermärkte (Carrefour 250m) und Restaurants sind in wenigen Gehminuten erreichbar.</p>
            </div>
            <div className="glass-card">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6">
                <Sun className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">Perfekt angebunden</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Gute Anbindung an öffentliche Verkehrsmittel. Der Flughafen Nizza (Aéroport Nice Côte d’Azur) ist nur 23 km entfernt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 lg:py-32 bg-card" id="bewertungen">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <div className="inline-flex items-center justify-center gap-1 mb-6">
            <span className="text-3xl font-bold text-foreground mr-2">9,2</span>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">Hervorragend bewertet</h2>
          <p className="text-muted-foreground mb-16 max-w-2xl mx-auto text-base">Gäste lieben die gute Lage, Sauberkeit (9,5) und das Preis-Leistungs-Verhältnis.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { name: "Susanne (Deutschland)", text: "Helle, moderne Wohnung. Sehr stilvoll und liebevoll eingerichtet. Die Ausstattung war außergewöhnlich gut. Die Lage war super, da gut angebunden an die öffentlichen..." },
              { name: "Patrick (Frankreich)", text: "Schöne Wohnung, funktional, sehr gut aufgeteilt. Gut gelegen (lokale Geschäfte, Croisette, Bushaltestelle) mit Parkmöglichkeiten an der Straße. Ruhig, hell..." },
              { name: "Martynas (Litauen)", text: "Alles war perfekt! Tolle Wohnung, gute Nachbarschaft." }
            ].map((review, i) => (
              <div key={i} className="glass-card">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{review.text}"</p>
                <p className="font-semibold text-foreground text-sm">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-20 bg-background border-t border-border" id="richtlinien">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="glass-card max-w-4xl mx-auto !p-8 md:!p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 tracking-tight text-center">Gut zu wissen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2"><Check className="w-5 h-5 text-primary" /> Check-in & Check-out</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li><strong className="text-foreground">Anreise:</strong> Ab 16:00 Uhr</li>
                  <li><strong className="text-foreground">Abreise:</strong> Bis 11:00 Uhr</li>
                  <li>Keine Altersbeschränkung für den Check-in.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2"><Check className="w-5 h-5 text-primary" /> Hausregeln</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li>Rauchen ist nicht gestattet.</li>
                  <li>Partys/Veranstaltungen sind nicht erlaubt.</li>
                  <li>Haustiere sind nicht gestattet.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden" id="buchen">
        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="glass-card max-w-4xl mx-auto text-center !p-12 border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">Kontaktieren Sie uns</h2>
            <p className="text-base text-muted-foreground mb-12 max-w-2xl mx-auto">
              Schreiben Sie uns einfach eine E-Mail mit Ihrem Wunschzeitraum. Wir antworten Ihnen kurzfristig und persönlich.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <a href="mailto:cannes.fiorella@gmail.com" className="flex flex-col items-center p-8 bg-muted rounded-2xl hover:bg-secondary transition-colors group">
                <div className="w-16 h-16 bg-card rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">E-Mail schreiben</h3>
                <span className="text-muted-foreground text-sm">cannes.fiorella@gmail.com</span>
              </a>
              
              <a href="tel:+4917619690707" className="flex flex-col items-center p-8 bg-muted rounded-2xl hover:bg-secondary transition-colors group">
                <div className="w-16 h-16 bg-card rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Anrufen</h3>
                <span className="text-muted-foreground text-sm">0176 19690707</span>
              </a>
            </div>
            
            <div className="text-center border-t border-border pt-8">
              <p className="text-sm font-medium text-foreground mb-2">Fiorella's Cannes Oasis</p>
              <p className="text-sm text-muted-foreground">Max Lingner Straße 17, 13189 Berlin</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
