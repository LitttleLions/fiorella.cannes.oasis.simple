import { MapPin, Sun, Waves } from 'lucide-react';

export default function Location() {
  return (
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
  );
}
