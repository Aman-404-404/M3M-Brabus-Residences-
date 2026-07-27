import { faqs } from '../data';

const SITE_URL = 'https://m3m-brabus-residences.vercel.app';

export const residenceSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  name: 'M3M BRABUS Luxury Residences',
  description:
    'A limited collection of luxury branded residences by M3M India in partnership with BRABUS, located in Sector 65, Gurugram.',
  url: SITE_URL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gurugram',
    addressRegion: 'Haryana',
    addressCountry: 'IN',
    streetAddress: 'Sector 65, Golf Course Extension Road',
  },
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answer,
    },
  })),
};
