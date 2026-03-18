import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { Compass, ArrowRight } from 'lucide-react';

export default function GuideTeaser() {
  const { language, t } = useLanguage();

  const content = {
    de: {
      badge: 'Entdecken',
      title: 'Cannes entdecken',
      subtitle: 'Ein stilvoller Guide durch die Stadt',
      description: 'Entdecken Sie Cannes in all seinen Facetten – von der berühmten Croisette bis zu den ruhigen Ecken des Viertels Basse-Californie. Unser Guide bietet zeitlose Einblicke für anspruchsvolle Reisende.',
      cta: 'Guide erkunden',
      articles: [
        { title: 'Cannes auf einen Blick', slug: 'cannes-auf-einen-blick' },
        { title: 'Die Croisette', slug: 'croisette' },
        { title: 'Basse-Californie', slug: 'basse-californie' },
      ]
    },
    en: {
      badge: 'Discover',
      title: 'Discover Cannes',
      subtitle: 'A stylish guide to the city',
      description: 'Discover Cannes in all its facets – from the famous Croisette to the quiet corners of the Basse-Californie district. Our guide offers timeless insights for discerning travelers.',
      cta: 'Explore Guide',
      articles: [
        { title: 'Cannes at a Glance', slug: 'cannes-auf-einen-blick' },
        { title: 'The Croisette', slug: 'croisette' },
        { title: 'Basse-Californie', slug: 'basse-californie' },
      ]
    }
  };

  const c = content[language];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="glass-card bg-gradient-to-br from-secondary/30 to-background">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Compass className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">{c.badge}</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-3">{c.title}</h2>
              <p className="text-lg text-muted-foreground mb-4">{c.subtitle}</p>
              <p className="text-muted-foreground mb-8">{c.description}</p>
              
              <Link 
                to="/cannes-guide"
                className="btn-primary inline-flex items-center gap-2"
              >
                {c.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Featured Articles */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {language === 'de' ? 'Beliebte Artikel' : 'Popular Articles'}
              </p>
              {c.articles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/cannes-guide/${article.slug}`}
                  className="block p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {article.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
