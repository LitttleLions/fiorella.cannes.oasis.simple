import { Check } from 'lucide-react';

export default function Policies() {
  return (
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
  );
}
