import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Gallery from '../components/home/Gallery';
import Location from '../components/home/Location';
import Reviews from '../components/home/Reviews';
import Policies from '../components/home/Policies';
import Contact from '../components/home/Contact';
import GuideTeaser from '../components/home/GuideTeaser';
import SEO from '../components/SEO';
import { useLanguage } from '../i18n/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <SEO 
        title={t('seo', 'home').title}
        description={t('seo', 'home').description}
      />
      <Hero />
      <Features />
      <Gallery />
      <GuideTeaser />
      <Location />
      <Reviews />
      <Policies />
      <Contact />
    </>
  );
}
