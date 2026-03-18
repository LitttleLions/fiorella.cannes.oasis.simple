import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { guideTranslations } from '../../i18n/guide/guideTranslations';
import { ArrowLeft, MapPin, Mail } from 'lucide-react';

interface GuideLayoutProps {
  articleKey: string;
  children?: React.ReactNode;
}

export default function GuideLayout({ articleKey, children }: GuideLayoutProps) {
  const { language } = useLanguage();
  const gt = guideTranslations[language];
  
  // @ts-ignore
  const article = gt.articles?.[articleKey];
  
  if (!article) {
    return <div>Article not found</div>;
  }

  const getArticleUrl = (slug: string) => {
    return `/cannes-guide/${slug}`;
  };

  return (
    <article className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-[1400px] mx-auto px-8 py-8">
          <Link 
            to="/cannes-guide" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            {gt.nav.backToGuide}
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{article.h1}</h1>
          {article.subtitle && (
            <p className="text-xl text-muted-foreground">{article.subtitle}</p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed mb-8">{article.intro}</p>
              
              {children || (
                <>
                  {article.sections && Object.entries(article.sections).map(([key, section]: [string, any]) => (
                    <section key={key} className="mb-8">
                      <h2 className="text-2xl font-semibold text-foreground mb-4">{section.h2}</h2>
                      <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                    </section>
                  ))}
                </>
              )}
            </div>

            {/* CTA Box */}
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

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Related Articles */}
              {article.internalLinks && article.internalLinks.length > 0 && (
                <div className="glass-card">
                  <h3 className="font-semibold text-foreground mb-4">{gt.nav.relatedArticles}</h3>
                  <ul className="space-y-3">
                    {article.internalLinks.map((slug: string) => {
                      // Find article title by slug
                      const relatedArticle = Object.values(gt.articles || {}).find(
                        (a: any) => a.slug === slug
                      );
                      if (!relatedArticle) return null;
                      return (
                        <li key={slug}>
                          <Link 
                            to={getArticleUrl(slug)}
                            className="text-muted-foreground hover:text-primary transition-colors text-sm"
                          >
                            {(relatedArticle as any).h1}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* Quick Links */}
              <div className="glass-card">
                <h3 className="font-semibold text-foreground mb-4">Fiorella Oasis Cannes</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {gt.nav.apartmentLink}
                    </Link>
                  </li>
                  <li>
                    <Link to="/#lage" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {gt.nav.locationLink}
                    </Link>
                  </li>
                  <li>
                    <a 
                      href="mailto:cannes.fiorella@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {gt.nav.inquireCTA}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
