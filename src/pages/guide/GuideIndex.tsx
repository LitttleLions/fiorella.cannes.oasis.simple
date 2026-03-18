import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { guideTranslations } from '../../i18n/guide/guideTranslations';
import { MapPin, Mail, Compass } from 'lucide-react';

export default function GuideIndex() {
  const { language } = useLanguage();
  const gt = guideTranslations[language];

  // Article registry - all 26 articles
  const articles = [
    { key: 'firstTimeVisitors', category: 'basics' },
    { key: 'croisette', category: 'basics' },
    { key: 'neighborhoods', category: 'basics' },
    { key: 'basseCalifornie', category: 'basics' },
    { key: 'rueDAntibes', category: 'basics' },
    { key: 'palaisFestivals', category: 'basics' },
    { key: 'filmFestival', category: 'culture' },
    { key: 'beyondFestival', category: 'culture' },
    { key: 'beaches', category: 'activities' },
    { key: 'publicVsPrivateBeaches', category: 'activities' },
    { key: 'walks', category: 'activities' },
    { key: 'leSuquet', category: 'basics' },
    { key: 'harbors', category: 'basics' },
    { key: 'markets', category: 'activities' },
    { key: 'architecture', category: 'culture' },
    { key: 'forCouples', category: 'target' },
    { key: 'longWeekend', category: 'target' },
    { key: 'tradeFairGuests', category: 'target' },
    { key: 'moreThanGlamour', category: 'culture' },
    { key: 'rivieraAround', category: 'region' },
    { key: 'cannesVsAntibes', category: 'region' },
    { key: 'cannesVsNice', category: 'region' },
    { key: 'spring', category: 'seasons' },
    { key: 'summer', category: 'seasons' },
    { key: 'autumn', category: 'seasons' },
    { key: 'winter', category: 'seasons' },
  ];

  const getArticleUrl = (slug: string) => `/cannes-guide/${slug}`;

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero */}
      <div className="bg-card border-b border-border">
        <div className="max-w-[1400px] mx-auto px-8 py-16">
          <div className="flex items-center gap-3 mb-6">
            <Compass className="w-8 h-8 text-primary" />
            <span className="text-primary font-medium">Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{gt.index.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">{gt.index.subtitle}</p>
          <p className="mt-6 text-muted-foreground max-w-2xl">{gt.index.intro}</p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-[1400px] mx-auto px-8 py-12">
        <h2 className="text-2xl font-semibold text-foreground mb-8">{gt.index.exploreSection}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(({ key }) => {
            // @ts-ignore
            const article = gt.articles?.[key];
            if (!article) return null;
            
            return (
              <Link 
                key={key}
                to={getArticleUrl(article.slug)}
                className="glass-card group hover:border-primary/30 transition-all"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {article.h1}
                </h3>
                {article.subtitle && (
                  <p className="text-sm text-muted-foreground">{article.subtitle}</p>
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-gradient-to-br from-secondary/50 to-background border border-border rounded-2xl">
          <h3 className="text-xl font-semibold text-foreground mb-3">{gt.cta.title}</h3>
          <p className="text-muted-foreground mb-6">{gt.cta.text}</p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="mailto:cannes.fiorella@gmail.com" 
              className="btn-primary inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              {gt.cta.button}
            </a>
            <Link to="/#lage" className="btn-outline inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {gt.cta.locationLink}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
