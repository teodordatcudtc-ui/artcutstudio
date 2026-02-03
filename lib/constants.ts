export const SITE = {
  name: 'Art Cut Studio',
  description: 'Frizerie premium – experiență de grooming de neuitat. Tunsori, barbă, styling în București.',
  phone: '0768548138',
  address: 'Bulevardul Iuliu Maniu 69, 061087 București',
  addressShort: 'Bd. Iuliu Maniu 69, București',
  email: 'contact@artcutstudio.ro',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.967577023567!2d26.017440399999998!3d44.4338273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2010056a741dd%3A0x98975151f495a23a!2sArt%20Cut%20Studio!5e0!3m2!1sen!2sro!4v1770121428036!5m2!1sen!2sro',
} as const;

export const NAV = [
  { href: '/', label: 'Acasă' },
  { href: '/despre-noi', label: 'Despre noi' },
  { href: '/servicii', label: 'Servicii' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/contact', label: 'Contact' },
] as const;

export const SERVICII = [
  {
    slug: 'tunsoare-barba',
    title: 'Tunsoare & Barbă',
    shortDesc: 'Tunsoare clasică sau modernă și contur barbă.',
    price: 'de la 80 lei',
    duration: '45 min',
  },
  {
    slug: 'tunsoare-premium',
    title: 'Tunsoare Premium',
    shortDesc: 'Tunsoare completă cu spălare, masaj și produse premium.',
    price: 'de la 120 lei',
    duration: '60 min',
  },
  {
    slug: 'barba-completa',
    title: 'Barbă Completă',
    shortDesc: 'Contur, tăiere și condiționare barbă.',
    price: 'de la 50 lei',
    duration: '30 min',
  },
  {
    slug: 'tunsoare-copil',
    title: 'Tunsoare Copil',
    shortDesc: 'Tunsoare adaptată pentru cei mici.',
    price: 'de la 60 lei',
    duration: '30 min',
  },
] as const;

export const LEGAL_LINKS = [
  { href: '/legal/privacy', label: 'Confidențialitate' },
  { href: '/legal/terms', label: 'Termeni și condiții' },
] as const;
