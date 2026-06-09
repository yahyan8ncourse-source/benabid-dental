/**
 * Source unique de vérité pour toutes les informations du cabinet.
 * Modifier ces valeurs met à jour automatiquement tout le site.
 */

export const site = {
  name: "Cabinet Dentaire Dr Benabid",
  shortName: "Dr Benabid",
  dentist: "Dr Benabid Wahiba",
  role: "Chirurgien-Dentiste",
  tagline: "Votre sourire, notre passion",
  slogan: "Des soins dentaires d'excellence au cœur d'Alger",
  description:
    "Le Cabinet Dentaire Dr Benabid Wahiba à Alger Centre vous accueille pour des soins dentaires de qualité : esthétique du sourire, facettes, prothèses zircone, implants, blanchiment, orthodontie et soins généraux dans un environnement moderne et chaleureux.",
  url: "https://www.benabid-dental.dz",

  // Coordonnées
  address: {
    street: "79 Rue Didouche Mourad",
    city: "Alger Centre",
    region: "Alger",
    country: "Algérie",
    full: "79 Rue Didouche Mourad, Alger Centre, Alger, Algérie",
  },
  phoneDisplay: "0556 88 51 94",
  phoneIntl: "+213556885194",
  whatsapp: "213556885194",
  email: "contact@benabid-dental.dz",

  // Carte Google
  map: {
    lat: 36.7653804,
    lng: 3.0504961,
    placeUrl:
      "https://maps.app.goo.gl/SzJ1ySzscQ6DTzGU6",
    embedSrc:
      "https://www.google.com/maps?q=Cabinet+dentaire+Dr+Benabid+Alger+centre,79+Rue+Didouche+Mourad,Alger&output=embed",
  },

  // Réseaux sociaux
  social: {
    tiktok: "https://www.tiktok.com/@benabiddental",
    tiktokHandle: "@benabiddental",
    facebook: "https://www.facebook.com/profile.php?id=benabiddental",
    instagram: "https://www.instagram.com/benabiddental",
  },

  // Horaires
  hours: [
    { day: "Samedi", time: "09:00 – 18:00" },
    { day: "Dimanche", time: "09:00 – 18:00" },
    { day: "Lundi", time: "09:00 – 18:00" },
    { day: "Mardi", time: "09:00 – 18:00" },
    { day: "Mercredi", time: "09:00 – 18:00" },
    { day: "Jeudi", time: "09:00 – 18:00" },
    { day: "Vendredi", time: "Fermé" },
  ],
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string; // lucide icon name reference handled in component
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "esthetique",
    title: "Esthétique dentaire",
    short: "Sublimez votre sourire",
    description:
      "Transformez votre sourire grâce à nos traitements esthétiques sur-mesure : harmonie, éclat et naturel pour un résultat qui vous ressemble.",
    icon: "Sparkles",
    highlights: ["Design du sourire", "Composite esthétique", "Résultat naturel"],
  },
  {
    slug: "facettes",
    title: "Facettes dentaires",
    short: "Un sourire de star",
    description:
      "Des facettes en céramique ultra-fines pour corriger la forme, la couleur et l'alignement de vos dents avec un rendu lumineux et durable.",
    icon: "Layers",
    highlights: ["Céramique premium", "Aspect ultra-naturel", "Pose minutieuse"],
  },
  {
    slug: "blanchiment",
    title: "Blanchiment dentaire",
    short: "Des dents plus blanches",
    description:
      "Un blanchiment professionnel sûr et efficace pour retrouver l'éclat de vos dents en une séance, sous contrôle du praticien.",
    icon: "Sun",
    highlights: ["Effet immédiat", "Sans douleur", "Émail protégé"],
  },
  {
    slug: "protheses",
    title: "Prothèses & Zircone",
    short: "Couronnes et bridges",
    description:
      "Couronnes, bridges et prothèses en zircone haute résistance, esthétiques et biocompatibles, pour restaurer fonction et beauté de vos dents.",
    icon: "Crown",
    highlights: ["Zircone premium", "Sur-mesure", "Confort optimal"],
  },
  {
    slug: "implants",
    title: "Implants dentaires",
    short: "Remplacez vos dents",
    description:
      "Remplacement définitif des dents manquantes par des implants de qualité, pour retrouver une mastication et un sourire naturels.",
    icon: "Anchor",
    highlights: ["Solution durable", "Mastication naturelle", "Suivi complet"],
  },
  {
    slug: "orthodontie",
    title: "Orthodontie",
    short: "Aligner vos dents",
    description:
      "Correction de l'alignement dentaire pour adultes et enfants grâce à des solutions modernes, discrètes et confortables.",
    icon: "AlignHorizontalDistributeCenter",
    highlights: ["Bilan personnalisé", "Solutions discrètes", "Enfants & adultes"],
  },
  {
    slug: "soins",
    title: "Soins & Caries",
    short: "Soins conservateurs",
    description:
      "Traitement des caries et soins conservateurs avec des matériaux modernes pour préserver vos dents naturelles le plus longtemps possible.",
    icon: "ShieldCheck",
    highlights: ["Diagnostic précis", "Soins indolores", "Prévention"],
  },
  {
    slug: "endodontie",
    title: "Endodontie",
    short: "Traitement de canal",
    description:
      "Traitement des racines (dévitalisation) réalisé avec précision pour sauver vos dents et soulager la douleur efficacement.",
    icon: "Stethoscope",
    highlights: ["Précision", "Anti-douleur", "Conservation dentaire"],
  },
  {
    slug: "detartrage",
    title: "Détartrage & Hygiène",
    short: "Gencives saines",
    description:
      "Détartrage et nettoyage professionnel pour des gencives saines, une haleine fraîche et une bouche en pleine santé.",
    icon: "Brush",
    highlights: ["Gencives saines", "Prévention", "Conseils d'hygiène"],
  },
];

export const reasons = [
  {
    title: "Praticienne expérimentée",
    text: "Dr Benabid Wahiba met son expertise et son écoute au service de votre santé bucco-dentaire.",
    icon: "Award",
  },
  {
    title: "Équipement moderne",
    text: "Un plateau technique récent pour des soins précis, confortables et sécurisés.",
    icon: "Cpu",
  },
  {
    title: "Approche douce",
    text: "Des soins sans stress, dans une ambiance chaleureuse et rassurante.",
    icon: "HeartHandshake",
  },
  {
    title: "Hygiène irréprochable",
    text: "Protocoles de stérilisation stricts pour votre sécurité à chaque visite.",
    icon: "ShieldCheck",
  },
  {
    title: "Au cœur d'Alger",
    text: "Idéalement situé Rue Didouche Mourad, facile d'accès en plein centre-ville.",
    icon: "MapPin",
  },
  {
    title: "Tarifs transparents",
    text: "Un devis clair et des explications détaillées avant chaque traitement.",
    icon: "BadgeCheck",
  },
];

export const testimonials = [
  {
    name: "Amel K.",
    text: "Un travail remarquable et un accueil chaleureux. Dr Benabid a complètement transformé mon sourire, je recommande vivement !",
    rating: 5,
  },
  {
    name: "Yacine B.",
    text: "Professionnelle, à l'écoute et très douce. Le cabinet est moderne et propre. Enfin une dentiste en qui j'ai confiance.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    text: "Mes facettes sont magnifiques et tellement naturelles. Merci docteur pour votre patience et votre savoir-faire.",
    rating: 5,
  },
  {
    name: "Karim D.",
    text: "Pose d'implant parfaite, sans douleur. Suivi sérieux et explications claires à chaque étape. Excellent cabinet.",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "Comment prendre rendez-vous ?",
    a: "Vous pouvez réserver en quelques secondes via WhatsApp, par téléphone au 0556 88 51 94, ou en remplissant le formulaire de contact sur le site.",
  },
  {
    q: "Où se situe le cabinet ?",
    a: "Le cabinet est situé au 79 Rue Didouche Mourad, en plein cœur d'Alger Centre, facilement accessible.",
  },
  {
    q: "Le premier rendez-vous est-il une consultation ?",
    a: "Oui. La première visite permet d'établir un bilan complet, de répondre à vos questions et de proposer un plan de traitement personnalisé avec un devis clair.",
  },
  {
    q: "Proposez-vous des soins esthétiques ?",
    a: "Absolument : blanchiment, facettes, design du sourire, couronnes et prothèses en zircone font partie de nos spécialités.",
  },
  {
    q: "Les soins sont-ils douloureux ?",
    a: "Nous privilégions une approche douce et indolore, avec anesthésie adaptée et une attention particulière à votre confort.",
  },
];
