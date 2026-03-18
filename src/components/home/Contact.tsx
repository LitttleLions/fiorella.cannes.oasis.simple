import { Phone, Mail } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden" id="buchen">
      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <div className="glass-card max-w-4xl mx-auto text-center !p-12 border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">{t('contact', 'title')}</h2>
          <p className="text-base text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('contact', 'subtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <a href="mailto:cannes.fiorella@gmail.com" className="flex flex-col items-center p-8 bg-muted rounded-2xl hover:bg-secondary transition-colors group">
              <div className="w-16 h-16 bg-card rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{t('contact', 'emailTitle')}</h3>
              <span className="text-muted-foreground text-sm">cannes.fiorella@gmail.com</span>
            </a>
            
            <a href="tel:+4917619690707" className="flex flex-col items-center p-8 bg-muted rounded-2xl hover:bg-secondary transition-colors group">
              <div className="w-16 h-16 bg-card rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{t('contact', 'phoneTitle')}</h3>
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
  );
}
