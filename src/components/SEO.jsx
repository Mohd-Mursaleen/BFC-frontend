import React from 'react';
import { Helmet } from 'react-helmet-async';

  const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl = 'https://www.bengalurufitnessclub.in',
  ogImage = '/src/assets/photo/logo.jpeg' 
}) => {
  const siteTitle = 'BFC | Bengaluru Fitness Club';
  const fullTitle = title ? `${title} | BFC` : siteTitle;
  
  // Structured Data for LocalBusiness
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "GymOrFitnessCenter",
    "name": "Bengaluru Fitness Club",
    "image": [
      "https://www.bengalurufitnessclub.in/src/assets/photo/logo.jpeg"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address", // Update with real address if known
      "addressLocality": "Bengaluru",
      "addressRegion": "KA",
      "postalCode": "560000", // Update with real zip
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716, // Update with real coords
      "longitude": 77.5946
    },
    "url": "https://www.bengalurufitnessclub.in",
    "telephone": "+919876543210",
    "priceRange": "₹1500 - ₹10000",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "05:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "05:00",
        "closes": "12:00"
      }
    ]
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
