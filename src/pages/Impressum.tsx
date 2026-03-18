import { useLanguage } from '../i18n/LanguageContext';

export default function Impressum() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-8">
      <h1 className="text-4xl font-bold mb-8">{t('imprint', 'title')}</h1>
      <div className="prose prose-sand max-w-none text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t('imprint', 'sec1Title')}</h2>
        <p>
          Fiorella Cannes Oasis<br />
          Max Lingner Straße 17<br />
          13189 Berlin
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t('imprint', 'sec2Title')}</h2>
        <p>
          {t('imprint', 'sec2Text')}
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t('imprint', 'sec3Title')}</h2>
        <p>
          {t('imprint', 'sec3Phone')}<br />
          {t('imprint', 'sec3Email')}
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t('imprint', 'sec4Title')}</h2>
        <p>
          Fiorella Cannes Oasis<br />
          Max Lingner Straße 17<br />
          13189 Berlin
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t('imprint', 'sec5Title')}</h2>
        <p>
          {t('imprint', 'sec5Text1')}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
            https://ec.europa.eu/consumers/odr/
          </a>.<br />
          {t('imprint', 'sec5Text2')}
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t('imprint', 'sec6Title')}</h2>
        <p>
          {t('imprint', 'sec6Text')}
        </p>
      </div>
    </div>
  );
}
