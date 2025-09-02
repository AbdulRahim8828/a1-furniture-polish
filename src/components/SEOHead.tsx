import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
}

const SEOHead = ({ title, description, keywords, canonical }: SEOHeadProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }

    // Update canonical URL
    if (canonical) {
      const existingCanonical = document.querySelector('link[rel="canonical"]');
      if (existingCanonical) {
        existingCanonical.setAttribute('href', canonical);
      } else {
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = canonical;
        document.head.appendChild(link);
      }
    }

    // Add local business schema
    const existingSchema = document.querySelector('#local-business-schema');
    if (!existingSchema) {
      const script = document.createElement('script');
      script.id = 'local-business-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'A1 Furniture Polish',
        description: 'Professional furniture polishing and restoration services in Mumbai',
        url: 'https://a1furniturepolish.com',
        telephone: '+919920397636',
        email: 'A1furniturepolish@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Shop No 18, Akbar Ali Compound, Relief Road, near HK College',
          addressLocality: 'Mumbai',
          addressRegion: 'Maharashtra',
          addressCountry: 'IN',
          postalCode: '400102'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '19.1383',
          longitude: '72.8347'
        },
        openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59',
        serviceArea: {
          '@type': 'City',
          name: 'Mumbai'
        },
        priceRange: '₹₹',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '127'
        }
      });
      document.head.appendChild(script);
    }
  }, [title, description, keywords, canonical]);

  return null;
};

export default SEOHead;