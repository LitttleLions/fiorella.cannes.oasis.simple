import { Star } from 'lucide-react';

export default function Reviews() {
  return (
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
  );
}
