import { Check } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export default function Policies() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background border-t border-border" id="richtlinien">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="glass-card max-w-4xl mx-auto !p-8 md:!p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 tracking-tight text-center">{t('policies', 'title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2"><Check className="w-5 h-5 text-primary" /> {t('policies', 'checkinTitle')}</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li><strong className="text-foreground">{t('policies', 'arrival')}</strong> {t('policies', 'arrivalDesc')}</li>
                <li><strong className="text-foreground">{t('policies', 'departure')}</strong> {t('policies', 'departureDesc')}</li>
                <li>{t('policies', 'ageRestriction')}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2"><Check className="w-5 h-5 text-primary" /> {t('policies', 'rulesTitle')}</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li>{t('policies', 'smoking')}</li>
                <li>{t('policies', 'parties')}</li>
                <li>{t('policies', 'pets')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
