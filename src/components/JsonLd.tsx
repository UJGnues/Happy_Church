export const JsonLd = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: "행복한교회",
    alternateName: "Happy Church",
    url: "https://happychurch.netlify.app/",
    logo: "https://happychurch.netlify.app/logo.webp",
    description: "행복한교회 - 삶의 행복을 주는 교회",
    address: {
      "@type": "PostalAddress",
      streetAddress: "경기도 부천시 오정구 원종로 26(원종동 217)",
      addressLocality: "경기도",
      addressRegion: "오정구",
      postalCode: "14431",
      addressCountry: "KR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.523937,
      longitude: 126.802761,
    },
    telephone: "+82-32-682-0590",
    email: "info@happychurch.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "06:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "05:00",
        closes: "22:00",
      },
    ],
    sameAs: [
      "https://www.youtube.com/user/YFGCFGTV",
      "https://www.instagram.com/yfgcprb/",
      "http://pf.kakao.com/_NrTxkK",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "교회 예배 및 프로그램",
      itemListElement: [
        {
          "@type": "Offer",
          name: "주일예배",
          category: "예배",
        },
        {
          "@type": "Offer",
          name: "수요예배",
          category: "예배",
        },
        {
          "@type": "Offer",
          name: "금요성령대망회",
          category: "예배",
        },
        {
          "@type": "Offer",
          name: "새벽기도회",
          category: "예배",
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
