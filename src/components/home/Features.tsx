import { motion } from 'motion/react';
import { Sun, Wifi, Wind, Tv, Car, Utensils } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Link } from 'react-router-dom';

export default function Features() {
  const { t } = useLanguage();

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
                alt={t('features', 'imgAlt')}
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
                  <h4 className="text-xl font-semibold tracking-tight">{t('features', 'badgeTitle')}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{t('features', 'badgeSub')}</p>
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
              {t('features', 'title1')} <br/><span className="text-primary">{t('features', 'title2')}</span>
            </h2>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              {t('features', 'description')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-10">
              {[
                { icon: <Wifi className="w-5 h-5 text-primary" />, text: t('features', 'wifi') },
                { icon: <Wind className="w-5 h-5 text-primary" />, text: t('features', 'ac') },
                { icon: <Utensils className="w-5 h-5 text-primary" />, text: t('features', 'kitchen') },
                { icon: <Sun className="w-5 h-5 text-primary" />, text: t('features', 'balcony') },
                { icon: <Tv className="w-5 h-5 text-primary" />, text: t('features', 'tv') },
                { icon: <Car className="w-5 h-5 text-primary" />, text: t('features', 'parking') },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-secondary p-2.5 rounded-xl shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-foreground font-medium text-sm md:text-base">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 p-6 bg-muted rounded-2xl border border-border mt-8">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">4</p>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{t('features', 'guests')}</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">2</p>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{t('features', 'bedrooms')}</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">65</p>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{t('features', 'sqm')}</p>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/cannes-guide/basse-californie" className="text-primary hover:underline font-medium inline-flex items-center gap-2">
                Entdecken Sie unsere ruhige Lage in Basse-Californie &rarr;
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
