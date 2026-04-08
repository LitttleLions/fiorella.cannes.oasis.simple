import { Anchor, Globe } from 'lucide-react';
import { Outlet, Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import StructuredData from './StructuredData';

export default function Layout() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <StructuredData />
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2">
              <Anchor className="w-6 h-6 text-primary" />
              <span className="text-2xl font-bold text-foreground tracking-tight">Fiorella Oasis Cannes</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <a href="/#apartment" className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm">{t('nav', 'apartment')}</a>
              <a href="/#galerie" className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm">{t('nav', 'gallery')}</a>
              <a href="/#lage" className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm">{t('nav', 'location')}</a>
              <a href="/#bewertungen" className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm">{t('nav', 'reviews')}</a>
              <Link to="/cannes-guide" className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm">{t('nav', 'guide')}</Link>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <Globe className="w-4 h-4" />
                {language === 'de' ? 'EN' : 'DE'}
              </button>
              <a 
                href="mailto:cannes.fiorella@gmail.com" 
                className="btn-primary"
              >
                {t('nav', 'inquire')}
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-card py-12 border-t border-border mt-auto">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="flex items-center gap-2">
                <Anchor className="w-5 h-5 text-primary" />
                <span className="font-bold text-foreground">Fiorella Oasis Cannes Basse-Californie</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2 max-w-sm text-center md:text-left">
                {language === 'de' 
                  ? 'Fiorella Oasis Cannes Basse-Californie – stilvolle Ferienwohnung in ruhiger Lage nahe Croisette und Strand.'
                  : 'Fiorella Oasis Cannes Basse-Californie – stylish holiday apartment in a quiet location near Croisette and the beach.'}
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/impressum" className="text-muted-foreground hover:text-primary transition-colors font-medium">{t('nav', 'imprint')}</Link>
              <Link to="/datenschutz" className="text-muted-foreground hover:text-primary transition-colors font-medium">{t('nav', 'privacy')}</Link>
            </div>
            <p className="text-xs text-muted-foreground font-medium">© {new Date().getFullYear()} Fiorella Oasis Cannes Basse-Californie. {t('nav', 'rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
