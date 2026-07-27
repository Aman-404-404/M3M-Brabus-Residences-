import type { LucideIcon } from 'lucide-react';
import { Car, Dumbbell, Gem, MapPin, ShieldCheck, Sparkles, Waves, Zap } from 'lucide-react';

export const nav = ['About', 'Amenities', 'Floor Plans', 'Gallery', 'Location', 'Contact'] as const;

export interface Highlight {
  title: string;
  copy: string;
  Icon: LucideIcon;
}

export const highlights: Highlight[] = [
  { title: 'Luxury Residences', copy: 'Expansive homes with private decks and immaculate finishes.', Icon: Gem },
  { title: 'Sector 65', copy: 'An exceptional Golf Course Extension Road address.', Icon: MapPin },
  { title: 'German Design', copy: 'A purposeful design language inspired by BRABUS.', Icon: Sparkles },
  { title: 'Smart Home', copy: 'Seamless technology crafted around everyday comfort.', Icon: Zap },
  { title: 'Sky Lounge', copy: 'Elevated spaces for private moments and grand views.', Icon: Waves },
  { title: 'Private Club', copy: 'A curated world reserved exclusively for residents.', Icon: ShieldCheck },
];

export interface Amenity {
  name: string;
  copy: string;
  Icon: LucideIcon;
}

export const amenities: Amenity[] = [
  { Icon: Waves, name: 'Infinity Pool', copy: 'A serene water sanctuary, reserved for residents.' },
  { Icon: Dumbbell, name: 'Performance Studio', copy: 'State-of-the-art training in a private setting.' },
  { Icon: Car, name: 'Automated Car Gallery', copy: 'A seamless arrival experience, every day.' },
  { Icon: ShieldCheck, name: 'Private Concierge', copy: 'Attentive service at every moment.' },
];

export interface FloorPlan {
  number: string;
  name: string;
  area: string;
  meta: string;
}

export const floorPlans: FloorPlan[] = [
  { number: '01', name: '3 BHK', area: '3,200 sq. ft.', meta: 'Three bedrooms · Private deck' },
  { number: '02', name: '4 BHK', area: '4,200 sq. ft.', meta: 'Four bedrooms · Family lounge' },
  { number: '03', name: 'Penthouse', area: '6,500 sq. ft.', meta: 'Private terrace · Double-height living' },
];

export interface GalleryItem {
  image: string;
  label: string;
}

export const gallery: GalleryItem[] = [
  { image: 'photo-1600566753086-00f18fb6b3ea', label: 'The grand arrival' },
  { image: 'photo-1600607687939-ce8a6c25118c', label: 'Private living' },
  { image: 'photo-1600210492486-724fe5c67fb0', label: 'Crafted interiors' },
  { image: 'photo-1618221195710-dd6b41faaea6', label: 'A view without limits' },
];

export const locationList: { place: string; time: string }[] = [
  { place: 'Golf Course Extension Road', time: '2 min' },
  { place: 'Rapid Metro', time: '12 min' },
  { place: 'Cyber City', time: '20 min' },
  { place: 'IGI Airport', time: '35 min' },
];

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'What is M3M BRABUS?',
    answer:
      'M3M BRABUS is a limited collection of branded luxury residences by M3M India, developed in partnership with BRABUS, the German performance and design house. Every residence carries BRABUS\u2019s design language into everyday living.',
  },
  {
    question: 'Where is M3M BRABUS located?',
    answer:
      'The project is located in Sector 65, Gurugram, on the Golf Course Extension Road corridor \u2014 close to Rapid Metro, Cyber City, and IGI Airport.',
  },
  {
    question: 'What configurations are available?',
    answer:
      'Residences are available in 3 BHK (3,200 sq. ft.), 4 BHK (4,200 sq. ft.), and Penthouse (6,500 sq. ft.) layouts, each with a private deck or terrace.',
  },
  {
    question: 'What makes these residences unique?',
    answer:
      'Each home reflects BRABUS\u2019s German design philosophy paired with M3M\u2019s development expertise \u2014 combining private outdoor space, a smart home system, and a dedicated private club for residents.',
  },
  {
    question: 'Are there private outdoor spaces?',
    answer:
      'Yes. Every residence includes a private deck or terrace, and every 3 BHK, 4 BHK, and Penthouse layout is designed around private outdoor living space.',
  },
  {
    question: 'What lifestyle amenities are offered?',
    answer:
      'Residents have access to an infinity pool, a performance training studio, an automated car gallery, and a private concierge service, alongside a residents-only sky lounge and private club.',
  },
  {
    question: 'Is this a low-density project?',
    answer:
      'Yes. M3M BRABUS is designed as a limited, low-density collection of residences rather than a high-volume tower, prioritising privacy and space over unit count.',
  },
  {
    question: 'How can I schedule a site visit?',
    answer:
      'Fill in the enquiry form in the Contact section with your name, phone number, and email, or call our relationship team directly \u2014 we\u2019ll arrange a private site visit at your convenience.',
  },
  {
    question: 'Can I receive the project brochure?',
    answer:
      'Yes. Use the "Download Brochure" button in the hero section, or request one directly through the Contact form and our team will send it to your email.',
  },
  {
    question: 'Who should I contact for pricing?',
    answer:
      'Our relationship team handles all pricing and availability enquiries \u2014 reach them via the Contact form below or by phone, and they will respond with current pricing.',
  },
];
