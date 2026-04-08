import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  type?: string;
  url?: string;
  image?: string;
}

export default function SEO({ 
  title, 
  description, 
  type = 'website', 
  url = 'https://fiorellas-oasis-cannes.com', 
  image = '/images/apartment.jpg' 
}: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags
    const setMetaTag = (attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('name', 'description', description);
    
    // OpenGraph
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:url', url);
    setMetaTag('property', 'og:image', image);

    // Some basic cleanup is possible, but usually not strictly necessary for simple SPAs
    // if we always overwrite them with valid content based on the route.
  }, [title, description, type, url, image]);

  return null;
}
