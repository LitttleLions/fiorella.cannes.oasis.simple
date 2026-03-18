import { Star } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export default function Reviews() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-32 bg-card" id="bewertungen">
      <div className="max-w-[1400px] mx-auto px-8 text-center">
        <div className="inline-flex items-center justify-center gap-1 mb-6">
          <span className="text-3xl font-bold text-foreground mr-2">{t('reviews', 'rating')}</span>
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-6 h-6 fill-primary text-primary" />
          ))}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">{t('reviews', 'title')}</h2>
        <p className="text-muted-foreground mb-16 max-w-2xl mx-auto text-base">{t('reviews', 'subtitle')}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            { name: t('reviews', 'r1Name'), text: t('reviews', 'r1Text') },
            { name: t('reviews', 'r2Name'), text: t('reviews', 'r2Text') },
            { name: t('reviews', 'r3Name'), text: t('reviews', 'r3Text') }
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
