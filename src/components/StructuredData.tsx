import { useEffect } from 'react';

export default function StructuredData() {
  useEffect(() => {
    // Generate the JSON-LD schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      "name": "Fiorella Oasis Cannes Basse-Californie",
      "alternateName": "Fiorella Oasis Cannes",
      "description": "Fiorella Oasis Cannes Basse-Californie ist eine stilvolle Ferienwohnung in ruhiger Lage nahe Croisette, Strand und Zentrum – ideal für entspannte Cannes-Aufenthalte.",
      "image": "https://fiorellas-oasis-cannes.com/images/apartment.jpg",
      "url": "https://fiorellas-oasis-cannes.com/",
      "telephone": "+33757690837",
      "email": "cannes.fiorella@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "10 Rue du Parc Alexandre III, Pointe Croisette",
        "addressLocality": "Cannes",
        "postalCode": "06400",
        "addressCountry": "FR"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "9.2",
        "reviewCount": "15"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'structured-data';
    script.innerHTML = JSON.stringify(schema);
    
    // Remove old script if exists
    const existing = document.getElementById('structured-data');
    if (existing) {
      existing.remove();
    }

    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('structured-data');
      if (el) el.remove();
    };
  }, []);

  return null;
}
