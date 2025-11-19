export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bea",
    "jobTitle": "Technical Problem Solver",
    "description": "I help small businesses and passionate people solve technical problems with quick fixes, automation, and custom solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lisbon",
      "addressCountry": "PT"
    },
    "knowsAbout": [
      "Web Development",
      "Automation",
      "Data Analysis",
      "Technical Consulting",
      "Problem Solving"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tech Problem Solving Services",
    "description": "Quick tech fixes, automation workflows, and custom solutions for small businesses. From 1-hour quick fixes to ongoing partnerships.",
    "provider": {
      "@type": "Person",
      "name": "Bea"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Lisbon, Portugal"
    },
    "serviceType": [
      "Quick Fix (1-2 hours)",
      "Half-Day Solution (4 hours)",
      "Automation & Workflows",
      "Data Clarity Tools",
      "Custom Development"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Quick Clarity",
        "description": "Small, focused solutions for immediate technical problems",
        "priceRange": "Affordable hourly rates"
      },
      {
        "@type": "Offer",
        "name": "Let's Build Together",
        "description": "Ongoing partnership for bigger projects and continuous support",
        "priceRange": "Custom project pricing"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
