import { MapPin, Sun, Waves } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Link } from 'react-router-dom';

export default function Location() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-32 bg-background" id="lage">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{t('location', 'title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            {t('location', 'subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6">
              <Waves className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 tracking-tight">{t('location', 'beachTitle')}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{t('location', 'beachDesc')}</p>
          </div>
          <div className="glass-card">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 tracking-tight">{t('location', 'centralTitle')}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{t('location', 'centralDesc')}</p>
          </div>
          <div className="glass-card">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6">
              <Sun className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 tracking-tight">{t('location', 'transportTitle')}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{t('location', 'transportDesc')}</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-medium mb-4">Möchten Sie mehr über unser Viertel erfahren?</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/fiorella-oasis-cannes-basse-californie" className="btn-primary">
              Fiorella Oasis Cannes Basse-Californie
            </Link>
            <Link to="/cannes-guide/basse-californie" className="btn-outline">
              Mehr über die Lage in Cannes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
