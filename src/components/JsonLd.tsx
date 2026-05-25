import { siteConfig } from "@/lib/site";
import { contacts } from "@/content/contacts";

/**
 * JSON-LD schema.org Restaurant — структуровані дані для Google.
 * Перевіряється на https://search.google.com/test/rich-results
 */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: contacts.phoneHref.replace("tel:", ""),
    email: contacts.email,
    image: `${siteConfig.url}/opengraph-image.jpg`,
    servesCuisine: ["Ukrainian", "Cossack"],
    priceRange: "₴₴",
    address: {
      "@type": "PostalAddress",
      streetAddress: "острів Хортиця",
      addressLocality: "Запоріжжя",
      postalCode: "69000",
      addressCountry: "UA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: contacts.address.geo.lat,
      longitude: contacts.address.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: contacts.hours.open,
        closes: contacts.hours.close,
      },
    ],
    sameAs: [contacts.social.instagram.url, contacts.social.facebook.url],
    hasMenu: `${siteConfig.url}/#menu`,
    acceptsReservations: true,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
