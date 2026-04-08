// Import all article content from separate files
import { filmFestival } from './filmFestival';
import { beyondFestival } from './beyondFestival';
import { beaches } from './beaches';
import { publicVsPrivateBeaches } from './publicVsPrivateBeaches';
import { walks } from './walks';
import { leSuquet } from './leSuquet';
import { harbors } from './harbors';
import { markets } from './markets';
import { architecture } from './architecture';
import { forCouples } from './forCouples';
import { longWeekend } from './longWeekend';
import { tradeFairGuests } from './tradeFairGuests';
import { spring, summer, autumn, winter } from './seasons';
import { moreThanGlamour } from './moreThanGlamour';
import { rivieraAround } from './rivieraAround';
import { cannesVsAntibes, cannesVsNice } from './comparisons';
import { basseCalifornie } from './basseCalifornie';

// Base translations (navigation, index, CTA)
const baseTranslations = {
  de: {
    nav: {
      guide: "Cannes entdecken",
      backToGuide: "← Zurück zur Übersicht",
      relatedArticles: "Verwandte Artikel",
      inquireCTA: "Aufenthalt anfragen",
      apartmentLink: "Zur Wohnung",
      locationLink: "Lage",
      bookingLink: "Direkt buchen"
    },
    index: {
      title: "Cannes entdecken",
      subtitle: "Ein stilvoller Guide durch die Stadt an der Côte d'Azur – zeitlose Einblicke für anspruchsvolle Reisende.",
      intro: "Cannes ist mehr als das Filmfestival. Diese Sammlung von Artikeln lädt ein, die Stadt in all ihren Facetten kennenzulernen – von der berühmten Croisette bis zu den ruhigen Ecken des Viertels Basse-Californie. Geschrieben mit Blick auf Qualität und echte Relevanz, nicht für schnelle Klicks.",
      exploreSection: "Themen entdecken"
    },
    cta: {
      title: "Cannes entspannt erleben",
      text: "Wer Cannes nicht nur besuchen, sondern wirklich erleben möchte, findet mit Fiorella Oasis Cannes eine stilvolle Unterkunft in ruhiger, zugleich sehr gut angebundener Lage. Das Apartment vereint mediterranen Charme mit zeitgemäßem Komfort.",
      button: "Aufenthalt anfragen",
      locationLink: "Lage ansehen"
    }
  },
  en: {
    nav: {
      guide: "Discover Cannes",
      backToGuide: "← Back to overview",
      relatedArticles: "Related articles",
      inquireCTA: "Inquire about stay",
      apartmentLink: "The apartment",
      locationLink: "Location",
      bookingLink: "Book directly"
    },
    index: {
      title: "Discover Cannes",
      subtitle: "A stylish guide to the city on the French Riviera – timeless insights for discerning travelers.",
      intro: "Cannes is more than the film festival. This collection of articles invites you to discover the city in all its facets – from the famous Croisette to the quiet corners of the Basse-Californie district. Written with a focus on quality and genuine relevance, not quick clicks.",
      exploreSection: "Explore topics"
    },
    cta: {
      title: "Experience Cannes at ease",
      text: "Those who wish not just to visit Cannes but to truly experience it will find in Fiorella Oasis Cannes a stylish accommodation in a quiet yet excellently connected location. The apartment combines Mediterranean charm with contemporary comfort.",
      button: "Inquire about stay",
      locationLink: "View location"
    }
  }
};

// Articles that are defined in this file (first 6 articles)
const localArticles = {
  de: {
    firstTimeVisitors: {
      slug: "cannes-auf-einen-blick",
      metaTitle: "Cannes auf einen Blick – Orientierung für Erstbesucher",
      metaDescription: "Erstbesucher in Cannes? Eine klare Orientierungshilfe mit den wichtigsten Vierteln, Sehenswürdigkeiten und praktischen Tipps für Ihren Aufenthalt an der Côte d'Azur.",
      h1: "Cannes auf einen Blick",
      subtitle: "Orientierung für Erstbesucher",
      intro: "Cannes liegt eingebettet zwischen dem azurblauen Mittelmeer und den sanften Hügeln der Provence. Für Erstbesucher kann die Stadt auf den ersten Blick verwirrend wirken – glamourös und geschäftig zugleich, mit einer langen Küstenlinie und verschiedenen Stadtvierteln, die jeweils ihren eigenen Charakter haben. Diese Übersicht hilft, sich zurechtzufinden und die Stadt in den ersten Tagen entspannt zu erkunden.",
      sections: {
        geography: {
          h2: "Geografie und Orientierung",
          content: "Die Stadt erstreckt sich etwa acht Kilometer entlang der Küste. Im Westen liegt der Hafen Vieux Port mit der Altstadt Le Suquet darüber, im Zentrum die berühmte Croisette mit ihren Palästen und Hotels, östlich davon die Rue d'Antibes als Haupteinkaufsstraße und schließlich die ruhigeren Wohnviertel wie Basse-Californie. Wer diese Grundstruktur verinnerlicht, findet sich schnell zurecht. Die Berge im Hinterland, die Esterel-Kette, prägen das Stadtbild und sind bei klarem Wetter stets sichtbar."
        },
        neighborhoods: {
          h2: "Die wichtigsten Viertel",
          content: "Le Suquet, die Altstadt auf dem Hügel über dem Alten Hafen, zeigt Cannes von seiner ursprünglichen Seite mit engen Gassen und einer malerischen Kirche. Die Croisette ist die berühmte Promenade mit Palästen, dem Palais des Festivals und exklusiven Hotels. Die Rue d'Antibes bildet das kommerzielle Herz mit Boutiquen und Cafés. Basse-Californie östlich der Innenstadt ist ein Wohnviertel mit Villen und einer ausgesprochen angenehmen Atmosphäre. Jedes dieser Gebiete hat seinen eigenen Rhythmus und seine eigene Tageszeit, zu der es sich am besten erkunden lässt."
        },
        practical: {
          h2: "Praktische Grundlagen",
          content: "Cannes ist zu Fuß gut erkundbar, besonders der Bereich zwischen dem Alten Hafen und dem Hafen von Cannes (Port Canto). Für längere Strecken oder den Weg in die hügeligen Viertel bieten sich Busse oder Taxis an. Der Bahnhof liegt zentral und verbindet Cannes mit Nizza, Antibes und Monaco. Viele Besucher nutzen Cannes als Ausgangspunkt für die Region – die Lage an der Küste und die gute Anbindung machen dies sehr praktikabel. Die Stadt ist sicher, sauber und gut organisiert, was den Aufenthalt auch für weniger erfahrene Reisende angenehm macht."
        },
        whenToVisit: {
          h2: "Wann welcher Bereich?",
          content: "Morgens empfiehlt sich ein Spaziergang entlang der Croisette bei noch angenehmen Temperaturen und weniger Menschen. Der Vormittag ist ideal für die Altstadt Le Suquet und den Markt Forville. Die Rue d'Antibes lädt den ganzen Tag zum Flanieren ein, ist aber besonders vormittags und am späten Nachmittag angenehm. Die Strände sind nachmittags beliebt, die Häfen am späten Nachmittag am stimmungsvollsten. Abends kommt die Stadt mit den Restaurants und Bars zum Leben, besonders rund um den Alten Hafen und in der Rue Saint-Antoine."
        }
      },
      internalLinks: ["viertel-von-cannes", "croisette", "le-suquet", "basse-californie"]
    },
    croisette: {
      slug: "croisette",
      metaTitle: "Die Croisette – Promenade, Atmosphäre und Bedeutung",
      metaDescription: "Die Croisette in Cannes: Geschichte, Atmosphäre und was die berühmte Promenade an der Côte d'Azur so besonders macht. Ein stilvoller Einblick.",
      h1: "Die Croisette",
      subtitle: "Promenade, Atmosphäre und Bedeutung",
      intro: "Die Boulevard de la Croisette ist das berühmteste Stück Küste der Côte d'Azur. Über drei Kilometer erstreckt sich die Promenade zwischen dem Palais des Festivals und der Pointe Croisette, gesäumt von Palmen, Palästen und dem azurblauen Meer. Doch die Croisette ist mehr als eine Postkartenkulisse – sie ist das Herzstück von Cannes und spiegelt die gesamte Geschichte und Atmosphäre der Stadt wider.",
      sections: {
        history: {
          h2: "Geschichte und Entstehung",
          content: "Die Croisette verdankt ihren Namen den kleinen Kreuzwegkapellen, die einst an dieser Küste standen. Im 19. Jahrhundert begann die Entwicklung zu der Promenade, die wir heute kennen, als englische und russische Aristokraten Cannes als Winterquartier entdeckten. Die großen Hotels und Villen entstanden in dieser Zeit, die Strandkultur entwickelte sich später. Die Croisette wurde zum Schaufenster von Cannes, einer Bühne, auf der sich die Stadt präsentierte. Diese Geschichte spürt man noch heute in der Architektur und der besonderen Atmosphäre."
        },
        atmosphere: {
          h2: "Atmosphäre zu verschiedenen Tageszeiten",
          content: "Morgens ist die Croisette ein beliebter Ort für Jogger und Spaziergänger, die die frische Luft und den Blick auf das Meer genießen. Der Tag bringt Touristen, die die Paläste bewundern, und Geschäftsleute, die zwischen Meetings eine Pause einlegen. Abends verändert sich das Licht, die Fassaden der Hotels leuchten golden, und die Promenade wird zum Ort des Flanierens. Die Atmosphäre ist zu jeder Zeit besonders, nie hektisch, immer elegant. Die Croisette ist ein öffentlicher Raum, der dennoch Exklusivität ausstrahlt – eine seltene Kombination."
        },
        buildings: {
          h2: "Bauten und Architektur",
          content: "Entlang der Croisette reihen sich historische Hotels wie das Carlton, das Martinez und das Majestic, jedes mit eigener Geschichte und eigenem Stil. Zwischen ihnen stehen exklusive Residenzen und der Palais des Festivals, der jährlich zum Zentrum des Filmfestivals wird. Die Architektur misst sich an internationalen Maßstäben, ohne dabei die mediterrane Leichtigkeit zu verlieren. Viele Gebäude stammen aus den Goldenen Zwanziger Jahren oder dem späten 19. Jahrhundert und wurden liebevoll erhalten und modernisiert."
        },
        beaches: {
          h2: "Strände und Meer",
          content: "Die Croisette ist gesäumt von Strandbaden, die zu den exklusivsten der Welt zählen. Private Beach Clubs bieten Liegen, Service und Restaurants direkt am Wasser, während die öffentlichen Abschnitte einen ungezwungenen Zugang zum Meer ermöglichen. Das Wasser ist klar und in den Sommermonaten angenehm warm. Der Blick von den Strandbars auf das Meer und die vorgelagerte Inselgruppe der Lérins-Inseln gehört zu den schönsten der Côte d'Azur."
        },
        palais: {
          h2: "Der Palais des Festivals",
          content: "Am östlichen Ende der Croisette steht der Palais des Festivals, das Kongress- und Festivalzentrum von Cannes. Das Gebäude ist architektonisch eher nüchtern, aber seine Bedeutung für die Stadt ist enorm. Die berühmten roten Stufen, die Treppe für die Stars, befinden sich hier. Das Palais prägt das Bild der Croisette und ist zugleich ein Arbeitsort für die vielen Kongresse, die jährlich in Cannes stattfinden. Außerhalb der Festivalzeiten ist der Bereich um den Palais ruhiger, aber immer noch von besonderer Bedeutung."
        }
      },
      internalLinks: ["palais-des-festivals", "straende-cannes", "cannes-auf-einen-blick", "filmfestival"]
    }
  },
  en: {
    firstTimeVisitors: {
      slug: "cannes-at-a-glance",
      metaTitle: "Cannes at a Glance – Orientation for First-Time Visitors",
      metaDescription: "First time in Cannes? A clear guide with the most important neighborhoods, sights, and practical tips for your stay on the French Riviera.",
      h1: "Cannes at a Glance",
      subtitle: "Orientation for first-time visitors",
      intro: "Cannes is nestled between the azure Mediterranean Sea and the gentle hills of Provence. For first-time visitors, the city can seem confusing at first glance – glamorous and bustling at the same time, with a long coastline and different neighborhoods, each with its own character. This overview helps you find your way around and explore the city at ease during your first days.",
      sections: {
        geography: {
          h2: "Geography and orientation",
          content: "The city stretches about eight kilometers along the coast. In the west lies the Vieux Port with the old town of Le Suquet above it, in the center the famous Croisette with its palaces and hotels, east of that the Rue d'Antibes as the main shopping street, and finally the quieter residential districts like Basse-Californie. Anyone who internalizes this basic structure will quickly find their way around. The mountains in the hinterland, the Esterel range, shape the cityscape and are always visible in clear weather."
        },
        neighborhoods: {
          h2: "The most important districts",
          content: "Le Suquet, the old town on the hill above the Old Port, shows Cannes from its original side with narrow streets and a picturesque church. The Croisette is the famous promenade with palaces, the Palais des Festivals, and exclusive hotels. The Rue d'Antibes forms the commercial heart with boutiques and cafés. Basse-Californie east of the city center is a residential district with villas and a particularly pleasant atmosphere. Each of these areas has its own rhythm and its own time of day when it can best be explored."
        },
        practical: {
          h2: "Practical basics",
          content: "Cannes is easily explored on foot, especially the area between the Old Port and the Port of Cannes (Port Canto). For longer distances or the way to the hilly districts, buses or taxis are recommended. The train station is centrally located and connects Cannes with Nice, Antibes, and Monaco. Many visitors use Cannes as a starting point for the region – the coastal location and good connections make this very practical. The city is safe, clean, and well organized, which makes the stay pleasant even for less experienced travelers."
        },
        whenToVisit: {
          h2: "When to visit which area?",
          content: "In the morning, a walk along the Croisette is recommended while temperatures are still pleasant and there are fewer people. The late morning is ideal for the old town of Le Suquet and the Forville market. The Rue d'Antibes invites you to stroll all day, but is especially pleasant in the late morning and late afternoon. The beaches are popular in the afternoon, the harbors are most atmospheric in the late afternoon. In the evenings, the city comes to life with restaurants and bars, especially around the Old Port and in Rue Saint-Antoine."
        }
      },
      internalLinks: ["cannes-neighborhoods", "the-croisette", "le-suquet", "basse-californie"]
    },
    croisette: {
      slug: "the-croisette",
      metaTitle: "The Croisette – Promenade, Atmosphere and Significance",
      metaDescription: "The Croisette in Cannes: History, atmosphere, and what makes the famous promenade on the French Riviera so special. A stylish insight.",
      h1: "The Croisette",
      subtitle: "Promenade, atmosphere and significance",
      intro: "The Boulevard de la Croisette is the most famous stretch of coast on the French Riviera. Over three kilometers, the promenade extends between the Palais des Festivals and the Pointe Croisette, lined with palm trees, palaces, and the azure sea. But the Croisette is more than a postcard backdrop – it is the heart of Cannes and reflects the entire history and atmosphere of the city.",
      sections: {
        history: {
          h2: "History and origins",
          content: "The Croisette owes its name to the small wayside chapels that once stood on this coast. In the 19th century, the development began to the promenade we know today, when English and Russian aristocrats discovered Cannes as a winter residence. The grand hotels and villas were built during this time, beach culture developed later. The Croisette became the showcase of Cannes, a stage on which the city presented itself. This history can still be felt today in the architecture and the special atmosphere."
        },
        atmosphere: {
          h2: "Atmosphere at different times of day",
          content: "In the morning, the Croisette is a popular place for joggers and walkers who enjoy the fresh air and the view of the sea. The day brings tourists admiring the palaces and business people taking a break between meetings. In the evening, the light changes, the facades of the hotels glow golden, and the promenade becomes a place for strolling. The atmosphere is special at all times, never hectic, always elegant. The Croisette is a public space that nevertheless radiates exclusivity – a rare combination."
        },
        buildings: {
          h2: "Buildings and architecture",
          content: "Along the Croisette, historic hotels like the Carlton, the Martinez, and the Majestic line up, each with its own history and style. Between them stand exclusive residences and the Palais des Festivals, which becomes the center of the film festival every year. The architecture meets international standards without losing Mediterranean lightness. Many buildings date from the Roaring Twenties or the late 19th century and have been lovingly preserved and modernized."
        },
        beaches: {
          h2: "Beaches and sea",
          content: "The Croisette is lined with beach establishments that rank among the most exclusive in the world. Private beach clubs offer loungers, service, and restaurants right on the water, while public sections allow casual access to the sea. The water is clear and pleasantly warm in the summer months. The view from the beach bars over the sea and the offshore island group of the Lérins Islands is among the most beautiful on the French Riviera."
        },
        palais: {
          h2: "The Palais des Festivals",
          content: "At the eastern end of the Croisette stands the Palais des Festivals, the congress and festival center of Cannes. Architecturally rather sober, but its significance for the city is enormous. The famous red steps, the staircase for the stars, are located here. The Palais shapes the image of the Croisette and is at the same time a workplace for the many congresses held in Cannes every year. Outside the festival season, the area around the Palais is quieter, but still of special importance."
        }
      },
      internalLinks: ["palais-des-festivals", "beaches-in-cannes", "cannes-at-a-glance", "cannes-film-festival"]
    }
  }
};

// Combine all translations
export const guideTranslations = {
  de: {
    ...baseTranslations.de,
    articles: {
      ...localArticles.de,
      filmFestival: filmFestival.de,
      beyondFestival: beyondFestival.de,
      beaches: beaches.de,
      publicVsPrivateBeaches: publicVsPrivateBeaches.de,
      walks: walks.de,
      leSuquet: leSuquet.de,
      harbors: harbors.de,
      markets: markets.de,
      architecture: architecture.de,
      forCouples: forCouples.de,
      longWeekend: longWeekend.de,
      tradeFairGuests: tradeFairGuests.de,
      spring: spring.de,
      summer: summer.de,
      autumn: autumn.de,
      winter: winter.de,
      moreThanGlamour: moreThanGlamour.de,
      rivieraAround: rivieraAround.de,
      cannesVsAntibes: cannesVsAntibes.de,
      cannesVsNice: cannesVsNice.de,
      // Add placeholder articles for neighborhoods, rueDAntibes, palaisFestivals
      // These would need to be extracted to separate files as well for consistency
      neighborhoods: localArticles.de.firstTimeVisitors, // Temporary - should be extracted
      basseCalifornie: basseCalifornie.de,
      rueDAntibes: localArticles.de.firstTimeVisitors, // Temporary
      palaisFestivals: localArticles.de.croisette // Temporary
    }
  },
  en: {
    ...baseTranslations.en,
    articles: {
      ...localArticles.en,
      filmFestival: filmFestival.en,
      beyondFestival: beyondFestival.en,
      beaches: beaches.en,
      publicVsPrivateBeaches: publicVsPrivateBeaches.en,
      walks: walks.en,
      leSuquet: leSuquet.en,
      harbors: harbors.en,
      markets: markets.en,
      architecture: architecture.en,
      forCouples: forCouples.en,
      longWeekend: longWeekend.en,
      tradeFairGuests: tradeFairGuests.en,
      spring: spring.en,
      summer: summer.en,
      autumn: autumn.en,
      winter: winter.en,
      moreThanGlamour: moreThanGlamour.en,
      rivieraAround: rivieraAround.en,
      cannesVsAntibes: cannesVsAntibes.en,
      cannesVsNice: cannesVsNice.en,
      // Temporary placeholders
      neighborhoods: localArticles.en.firstTimeVisitors,
      basseCalifornie: basseCalifornie.en,
      rueDAntibes: localArticles.en.firstTimeVisitors,
      palaisFestivals: localArticles.en.croisette
    }
  }
};

export type GuideLanguage = 'de' | 'en';
