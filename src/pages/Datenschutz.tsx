import { useLanguage } from '../i18n/LanguageContext';

export default function Datenschutz() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-8">
      <h1 className="text-4xl font-bold mb-8">{t('privacy', 'title')}</h1>
      <div className="prose prose-sand max-w-none text-muted-foreground space-y-6">
        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t('privacy', 'sec1Title')}</h2>
        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{t('privacy', 'sec1Sub1')}</h3>
        <p>{t('privacy', 'sec1Text1')}</p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{t('privacy', 'sec1Sub2')}</h3>
        <p><strong>{t('privacy', 'sec1Text2')}</strong></p>
        <p>{t('privacy', 'sec1Text3')}</p>

        <p><strong>{t('privacy', 'sec1Text4')}</strong></p>
        <p>{t('privacy', 'sec1Text5')}</p>
        <p>{t('privacy', 'sec1Text6')}</p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t('privacy', 'sec2Title')}</h2>
        <p>{t('privacy', 'sec2Text1')}</p>
        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{t('privacy', 'sec2Sub1')}</h3>
        <p>{t('privacy', 'sec2Text2')}</p>
        <p>{t('privacy', 'sec2Text3')}</p>
        <p>{t('privacy', 'sec2Text4')}</p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t('privacy', 'sec3Title')}</h2>
        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{t('privacy', 'sec3Sub1')}</h3>
        <p>{t('privacy', 'sec3Text1')}</p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{t('privacy', 'sec3Sub2')}</h3>
        <p>{t('privacy', 'sec3Text2')}</p>
        <p>
          Fiorella Cannes Oasis<br />
          Max Lingner Straße 17<br />
          13189 Berlin
        </p>
        <p>
          WhatsApp: +33 757 690837<br />
          E-Mail: cannes.fiorella@gmail.com
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t('privacy', 'sec4Title')}</h2>
        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{t('privacy', 'sec4Sub1')}</h3>
        <p>{t('privacy', 'sec4Text1')}</p>
        <p>{t('privacy', 'sec4Text2')}</p>
      </div>
    </div>
  );
}
