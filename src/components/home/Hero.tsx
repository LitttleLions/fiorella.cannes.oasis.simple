import { motion } from 'motion/react';
import { Star, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/apartment.jpg" 
          alt={t('hero', 'imgAlt')}
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
              {t('hero', 'rating')}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[48px] font-extrabold text-foreground mb-6 leading-tight tracking-tight">
            {t('hero', 'title1')} <br/>
            <span className="text-primary">{t('hero', 'title2')}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground mb-10 leading-relaxed">
            {t('hero', 'subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:cannes.fiorella@gmail.com" 
              className="btn-primary large shadow-glow"
            >
              {t('hero', 'cta1')} <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#galerie" 
              className="btn-outline large"
            >
              {t('hero', 'cta2')}
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
