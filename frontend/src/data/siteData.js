/**
 * ============================================================
 *  FRAGCEYLON – SITE CONTENT & SETTINGS
 *  Edit business details, team, products etc. in ONE place.
 *  Products / testimonials / offers here are the FALLBACK used
 *  when the backend API is not running. The live copies are in
 *  backend/data/*.json – keep both in sync.
 * ============================================================
 */

// ---------- Business details ----------
export const SITE = {
  name: 'FragCeylon',
  tagline: 'Pure Ceylon spices, from our island to your kitchen.',
  email: 'fragceylonpvtltd@gmail.com',
  phones: [
    { display: '+94 71 460 4536', tel: '+94714604536' },
    { display: '+94 71 760 5393', tel: '+94717605393' },
  ],
  whatsapp: '94714604536', // number only, no "+" or spaces
  address: 'No 48, Baduwaththa, Kahagolla Road, Pilessa, Kurunegala, Sri Lanka',
  // PLACEHOLDER – replace with the real opening hours
  hours: 'Mon – Sat, 8:30 AM – 5:30 PM',
  // REPLACE: Google Maps → search the address → Share → Embed a map → copy the "src" link
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Pilessa%2C%20Kahagolla%20Road%2C%20Kurunegala%2C%20Sri%20Lanka&z=14&output=embed',
  social: {
    facebook: '#', // REPLACE with real page links
    instagram: '#',
    tiktok: '#',
  },
};

// Build a WhatsApp link with an optional pre-filled message
export const whatsappLink = (text = '') =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

// ---------- Products (fallback – same as backend/data/products.json) ----------
const SIZES = ['50g', '100g', '250g', '1kg']; // PLACEHOLDER sizes
export const PRODUCTS = [
  {
    id: 1,
    slug: 'ceylon-cinnamon-powder',
    name: 'Ceylon Cinnamon Powder',
    description:
      'Finely ground from true Ceylon cinnamon (Cinnamomum verum). Sweet, delicate and perfect for baking, drinks and desserts.',
    image: '/images/products/cinnamon-powder.jpg',
    sizes: SIZES,
  },
  {
    id: 2,
    slug: 'ceylon-cinnamon-quills',
    name: 'Ceylon Cinnamon Quills',
    description:
      'Hand-rolled quills peeled by skilled Sri Lankan artisans. Light, layered and naturally aromatic.',
    image: '/images/products/cinnamon-quills.jpg',
    sizes: SIZES,
  },
  {
    id: 3,
    slug: 'ceylon-black-pepper',
    name: 'Ceylon Black Pepper',
    description: 'Bold, sun-dried peppercorns with a rich, sharp heat. Ideal for everyday cooking.',
    image: '/images/products/black-pepper.jpg',
    sizes: SIZES,
  },
  {
    id: 4,
    slug: 'white-pepper',
    name: 'White Pepper',
    description: 'Smooth and mildly earthy, great for soups, sauces and light-coloured dishes.',
    image: '/images/products/white-pepper.jpg',
    sizes: SIZES,
  },
  {
    id: 5,
    slug: 'ginger-powder',
    name: 'Ginger Powder',
    description:
      'Warm and zesty, made from carefully dried ginger root. Great for curries, teas and baking.',
    image: '/images/products/ginger-powder.jpg',
    sizes: SIZES,
  },
  {
    id: 6,
    slug: 'cloves',
    name: 'Cloves',
    description: 'Whole, hand-picked cloves with an intense, sweet-spicy aroma.',
    image: '/images/products/cloves.jpg',
    sizes: SIZES,
  },
  {
    id: 7,
    slug: 'chilli',
    name: 'Chilli',
    description: 'Vibrant Sri Lankan chilli (powder / flakes) for authentic colour and heat.',
    image: '/images/products/chilli.jpg',
    sizes: SIZES,
  },
  {
    id: 8,
    slug: 'turmeric',
    name: 'Turmeric',
    description: 'Bright golden turmeric powder with a natural earthy flavour.',
    image: '/images/products/turmeric.jpg',
    sizes: SIZES,
  },
];

// ---------- Testimonials (PLACEHOLDER reviews) ----------
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'United Kingdom',
    rating: 5,
    quote: 'The cinnamon quills are incredibly fragrant – nothing like the supermarket kind.',
  },
  {
    id: 2,
    name: 'Nimal P.',
    location: 'Colombo',
    rating: 5,
    quote: 'Fresh, well-packed and delivered on time. The black pepper has a real kick.',
  },
  {
    id: 3,
    name: 'Chef Ahmed R.',
    location: 'Dubai',
    rating: 5,
    quote: 'Our restaurant switched to their turmeric and chilli. Customers notice the difference.',
  },
  {
    id: 4,
    name: 'Emily T.',
    location: 'Australia',
    rating: 4,
    quote: "Friendly service and genuine Ceylon cinnamon. I'll be ordering again.",
  },
];

// ---------- Offers (PLACEHOLDER – set active:false to hide one) ----------
export const OFFERS = [
  {
    id: 1,
    badge: '10% OFF',
    title: 'First Order Discount',
    description: 'Enjoy 10% off your very first order with FragCeylon.',
    code: 'CEYLON10',
    validUntil: '[DATE]',
    active: true,
  },
  {
    id: 2,
    badge: 'WHOLESALE',
    title: 'Bulk Orders – Special Prices',
    description:
      'Special wholesale prices for orders of 5kg and above. Perfect for restaurants and retailers.',
    code: '',
    validUntil: '[DATE]',
    active: true,
  },
  {
    id: 3,
    badge: 'SAVE 15%',
    title: 'Spice Gift Box',
    description:
      'A curated mix of cinnamon, pepper, cloves and turmeric – a perfect gift, now 15% off.',
    code: '',
    validUntil: '[DATE]',
    active: true,
  },
];

// ---------- Team (PLACEHOLDER names) ----------
export const TEAM = [
  {
    name: '[NAME]',
    role: 'Founder & Managing Director',
    bio: 'Leads our vision and farmer partnerships.',
    image: '/images/team-1.jpg',
  },
  {
    name: '[NAME]',
    role: 'Quality & Operations Manager',
    bio: 'Makes sure every batch meets our standards.',
    image: '/images/team-2.jpg',
  },
  {
    name: '[NAME]',
    role: 'Sales & Customer Relations',
    bio: 'Your go-to person for orders and enquiries.',
    image: '/images/team-3.jpg',
  },
];

// ---------- Why choose us ----------
export const WHY_CHOOSE_US = [
  { icon: 'globe', title: 'Authentic Ceylon Origin', text: 'Genuine spices grown in Sri Lanka.' },
  { icon: 'handshake', title: 'Direct from Farmers', text: 'Fair partnerships, fresher produce.' },
  { icon: 'leaf', title: '100% Natural', text: 'No artificial colours, fillers or additives.' },
  { icon: 'sparkle', title: 'Careful Processing', text: 'Cleaned, dried and graded with care.' },
  { icon: 'box', title: 'Fresh Packaging', text: 'Sealed to lock in aroma and flavour.' },
  { icon: 'chat', title: 'Friendly Support', text: 'Fast replies for retail and bulk orders.' },
];
