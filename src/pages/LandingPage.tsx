import { motion } from 'motion/react';
import { Star, MapPin, Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const { t } = useLanguage();

  return (
    <>
      <SEO 
        title={t('seo', 'landingPage').title}
        description={t('seo', 'landingPage').description}
      />
      <article className="pt-20 pb-20 min-h-screen bg-background">
        <div className="max-w-[1000px] mx-auto px-8 pt-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <span className="badge-secondary bg-primary/10 text-primary border border-primary/20">
                <Star className="w-4 h-4 fill-primary" />
                {t('landingPage', 'subtitle')}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {t('landingPage', 'title')}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t('landingPage', 'description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/images/apartment.jpg" 
                alt="Fiorella Oasis Cannes Basse-Californie" 
                className="rounded-2xl shadow-lg object-cover h-[400px] w-full" 
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <MapPin className="text-primary w-6 h-6" />
                Ihre Vorteile in Basse-Californie
              </h2>
              
              <ul className="space-y-4 mb-8">
                {t('landingPage', 'benefits').map((benefit: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="p-6 bg-card border border-border rounded-xl">
                <p className="text-sm text-muted-foreground mb-4 font-medium">
                  Entdecken Sie das Quartier im Detail:
                </p>
                <Link to="/cannes-guide/basse-californie" className="text-primary font-medium flex items-center gap-2 hover:underline">
                  Mehr über die Lage in Basse-Californie
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-primary/5 rounded-3xl p-12 border border-primary/10"
          >
            <h2 className="text-3xl font-bold mb-4">Interesse geweckt?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Sichern Sie sich Ihren Aufenthalt in der Fiorella Oasis Cannes Basse-Californie.
            </p>
            <div className="flex justify-center gap-4">
               <a 
                 href="mailto:cannes.fiorella@gmail.com" 
                 className="btn-primary"
               >
                 {t('landingPage', 'cta')}
               </a>
               <Link to="/" className="btn-outline">
                 Zurück zur Startseite
               </Link>
            </div>
          </motion.div>

        </div>
      </article>
    </>
  );
}
