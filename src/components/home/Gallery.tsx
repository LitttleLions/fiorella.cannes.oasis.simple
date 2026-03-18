import { useLanguage } from '../../i18n/LanguageContext';

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-32 bg-background" id="galerie">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{t('gallery', 'title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            {t('gallery', 'subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {/* Großes Bild 1 */}
          <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden shadow-card group relative">
            <img 
              src="/images/IMG_8341.jpg" 
              alt={t('gallery', 'img1Alt')}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white text-sm md:text-base font-medium">{t('gallery', 'img1Desc')}</p>
            </div>
          </div>
          
          {/* Bild 2 */}
          <div className="rounded-2xl overflow-hidden shadow-card group relative">
            <img 
              src="/images/IMG_1090.jpg" 
              alt={t('gallery', 'img2Alt')}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>

          {/* Bild 3 */}
          <div className="rounded-2xl overflow-hidden shadow-card group relative">
            <img 
              src="/images/IMG_3450.JPG" 
              alt={t('gallery', 'img3Alt')}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>

          {/* Bild 4 */}
          <div className="rounded-2xl overflow-hidden shadow-card group relative">
            <img 
              src="/images/IMG_8313.jpg" 
              alt={t('gallery', 'img4Alt')}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>

          {/* Bild 5 */}
          <div className="rounded-2xl overflow-hidden shadow-card group relative">
            <img 
              src="/images/apartment.jpg" 
              alt={t('gallery', 'img5Alt')}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {t('gallery', 'uploadNote')}
          </p>
        </div>
      </div>
    </section>
  );
}
