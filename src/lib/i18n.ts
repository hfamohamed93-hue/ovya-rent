export const locales = ["fr", "en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
  ar: "AR",
};

export const localeFlags: Record<Locale, string> = {
  fr: "🇫🇷",
  en: "🇬🇧",
  ar: "🇲🇦",
};

export const localePrefix: Record<Locale, string> = {
  fr: "",
  en: "/en",
  ar: "/ar",
};

export const dir: Record<Locale, "ltr" | "rtl"> = {
  fr: "ltr",
  en: "ltr",
  ar: "rtl",
};

export const htmlLang: Record<Locale, string> = {
  fr: "fr",
  en: "en",
  ar: "ar",
};

export const dict = {
  fr: {
    nav: {
      accueil: "Accueil",
      flotte: "Flotte",
      tarifs: "Tarifs",
      villes: "Villes",
      aPropos: "À propos",
      faq: "FAQ",
      contact: "Contact",
      reserver: "Réserver",
    },
    hero: {
      eyebrow: "Location de voitures au Maroc",
      titre: "Prenez la route en toute confiance.",
      texte:
        "Véhicules récents, assistance WhatsApp 7j/7 et livraison à l'aéroport, à votre hôtel ou à domicile — partout au Maroc.",
      ctaReserver: "Réserver un véhicule",
      ctaFlotte: "Voir la flotte",
    },
    categories: {
      titre: "Parcourir par catégorie",
      texte: "Trouvez le véhicule adapté à votre séjour, du budget économique au haut de gamme.",
    },
    selection: {
      titre: "Notre sélection",
      texte: "Un aperçu de notre flotte disponible.",
      lien: "Toute la flotte →",
    },
    chiffres: {
      satisfaits: "Clients satisfaits",
      vehicules: "Véhicules récents",
      assistance: "Assistance & livraison",
    },
    pourquoi: {
      titre: "Pourquoi choisir OVYA Rent",
    },
    villesSection: {
      titre: "Villes desservies",
      texte: "Une agence proche de vous, à l'aéroport comme en centre-ville.",
      lien: "Toutes les villes →",
    },
    ctaFinal: {
      titre: "Une question avant de réserver ?",
      texte: "Notre équipe répond directement sur WhatsApp pour vous aider à choisir le véhicule adapté à votre séjour.",
      bouton: "Nous contacter",
    },
    footer: {
      accroche: "« Prenez la route en toute confiance. » Location de véhicules récents et premium au Maroc.",
      navigation: "Navigation",
      villesDesservies: "Villes desservies",
      contact: "Contact",
      formulaireContact: "Formulaire de contact",
      mentionsLegales: "Mentions légales",
      cgv: "CGV",
      droits: "Tous droits réservés.",
    },
    carCard: {
      kmIllimite: "Km illimité",
      kmLimite: "Km limité",
      jour: "/jour",
      details: "Détails",
      premium: "Premium",
      automatique: "Automatique",
    },
    whatsapp: "Discuter sur WhatsApp",
    flotte: {
      titre: "Notre flotte",
      texte: "Filtrez par catégorie, transmission ou carburant pour trouver le véhicule adapté à votre séjour.",
      categorie: "Catégorie",
      transmission: "Transmission",
      carburant: "Carburant",
      toutes: "Toutes",
      tous: "Tous",
      aucunResultat: "Aucun véhicule ne correspond à ces critères pour le moment. Contactez-nous sur WhatsApp, nous trouverons une solution.",
    },
    tarifs: {
      titre: "Grille tarifaire",
      texte: "Tarifs indicatifs par jour, en euros (€) — équivalent en dirhams marocains (MAD) donné à titre indicatif.",
      vehicule: "Véhicule",
      km: "Km",
      franchise: "Franchise",
      prixJour: "Prix / jour (€)",
      approxMad: "≈ MAD / jour",
      bonASavoir: "Bon à savoir",
      infos: [
        "Paiement sur place, à la prise en charge du véhicule.",
        "Documents requis : permis de conduire valide, passeport ou CIN.",
        "Une caution (franchise) est demandée et restituée en fin de location, sauf dommages.",
      ],
    },
    reservation: {
      titre: "Demande de réservation",
      texte: "Remplissez ce formulaire : nous ouvrons WhatsApp avec votre demande pré-remplie, à envoyer à notre équipe. Aucune donnée n'est stockée ni transmise ailleurs.",
      vehiculeSouhaite: "Véhicule souhaité",
      pasDecide: "Pas encore décidé",
      dateDebut: "Date de début",
      dateFin: "Date de fin",
      lieu: "Lieu de prise en charge / restitution",
      selectionnezVille: "Sélectionnez une ville",
      nomComplet: "Nom complet",
      envoyer: "Envoyer la demande sur WhatsApp",
    },
    aPropos: {
      titre: "À propos d'OVYA Rent",
      texte: "OVYA Rent se positionne comme un acteur de référence dans la location de véhicules récents et premium au Maroc. Notre ambition : inspirer la rigueur, l'excellence du service et une totale sérénité pour le conducteur, à Marrakech, Casablanca, Agadir et Rabat.",
      citation: "« Prenez la route en toute confiance. »",
      valeurs: [
        { titre: "Modernité", texte: "Une flotte régulièrement renouvelée, à la pointe du confort et de la sécurité." },
        { titre: "Prestige", texte: "Un service pensé pour offrir une expérience de location premium, sans complexité." },
        { titre: "Fiabilité", texte: "Des conditions claires, sans frais cachés, communiquées avant chaque réservation." },
        { titre: "Réactivité", texte: "Une équipe joignable directement sur WhatsApp, pour des réponses rapides." },
      ],
    },
    contact: {
      titre: "Contact",
      texte: "La façon la plus rapide de nous joindre reste WhatsApp — notre équipe vous répond directement.",
      ouvrir: "Ouvrir →",
      nom: "Nom",
      message: "Message",
      envoyer: "Envoyer sur WhatsApp",
    },
    faq: {
      titre: "Questions fréquentes",
      questions: [
        { q: "Quel âge minimum pour louer un véhicule ?", r: "L'âge minimum est de 21 ans pour les catégories économique et citadine, et de 23 ans pour les SUV et véhicules de luxe, avec un permis détenu depuis au moins 2 ans." },
        { q: "Quels documents dois-je présenter ?", r: "Un permis de conduire valide (national ou international selon votre pays d'origine) et une pièce d'identité — passeport pour les visiteurs étrangers, CIN pour les résidents marocains." },
        { q: "Une caution est-elle demandée ?", r: "Oui, une franchise (caution) est demandée à la prise en charge du véhicule. Son montant varie selon la catégorie du véhicule et vous est communiqué avant la réservation. Elle est restituée en fin de location, sauf dommages constatés." },
        { q: "Le kilométrage est-il illimité ?", r: "La majorité de nos véhicules sont proposés avec un kilométrage illimité. Certains modèles premium peuvent avoir un forfait kilométrique — l'information est précisée sur chaque fiche véhicule." },
        { q: "Comment réserver un véhicule ?", r: "Via notre formulaire de réservation en ligne, ou directement sur WhatsApp. Nous confirmons la disponibilité et les modalités avant votre arrivée." },
        { q: "Le paiement se fait-il en ligne ?", r: "Non, le paiement s'effectue sur place, à la prise en charge du véhicule." },
      ],
    },
    villesPage: {
      titre: "Villes desservies",
      texte: "OVYA Rent vous accompagne dans plusieurs villes du Maroc, à l'aéroport comme en centre-ville.",
    },
    villeDetail: {
      retour: "← Toutes les villes",
      vehiculesDisponibles: "Véhicules disponibles à",
      aucunVehicule: "Contactez-nous sur WhatsApp pour connaître les véhicules disponibles à",
    },
    vehiculeDetail: {
      retour: "← Retour à la flotte",
      transmission: "Transmission",
      carburant: "Carburant",
      places: "Places",
      kilometrage: "Kilométrage",
      illimite: "Illimité",
      limite: "Limité",
      franchise: "Franchise / caution",
      disponibleA: "Disponible à :",
      reserverSur: "Réserver ce véhicule sur WhatsApp",
    },
  },
  en: {
    nav: {
      accueil: "Home",
      flotte: "Fleet",
      tarifs: "Rates",
      villes: "Cities",
      aPropos: "About",
      faq: "FAQ",
      contact: "Contact",
      reserver: "Book Now",
    },
    hero: {
      eyebrow: "Car Rental in Morocco",
      titre: "Hit the road with confidence.",
      texte:
        "Recent vehicles, WhatsApp support 7/7 and delivery to the airport, your hotel or your door — anywhere in Morocco.",
      ctaReserver: "Book a vehicle",
      ctaFlotte: "View the fleet",
    },
    categories: {
      titre: "Browse by category",
      texte: "Find the right vehicle for your stay, from budget to premium.",
    },
    selection: {
      titre: "Our selection",
      texte: "A preview of our available fleet.",
      lien: "View full fleet →",
    },
    chiffres: {
      satisfaits: "Satisfied customers",
      vehicules: "Recent vehicles",
      assistance: "Support & delivery",
    },
    pourquoi: {
      titre: "Why choose OVYA Rent",
    },
    villesSection: {
      titre: "Cities we serve",
      texte: "An agency close to you, at the airport or downtown.",
      lien: "All cities →",
    },
    ctaFinal: {
      titre: "A question before booking?",
      texte: "Our team replies directly on WhatsApp to help you choose the right vehicle for your stay.",
      bouton: "Contact us",
    },
    footer: {
      accroche: "\"Hit the road with confidence.\" Recent, premium vehicle rental in Morocco.",
      navigation: "Navigation",
      villesDesservies: "Cities we serve",
      contact: "Contact",
      formulaireContact: "Contact form",
      mentionsLegales: "Legal notice",
      cgv: "Terms & conditions",
      droits: "All rights reserved.",
    },
    carCard: {
      kmIllimite: "Unlimited mileage",
      kmLimite: "Limited mileage",
      jour: "/day",
      details: "Details",
      premium: "Premium",
      automatique: "Automatic",
    },
    whatsapp: "Chat on WhatsApp",
    flotte: {
      titre: "Our Fleet",
      texte: "Filter by category, transmission or fuel type to find the vehicle that suits your stay.",
      categorie: "Category",
      transmission: "Transmission",
      carburant: "Fuel",
      toutes: "All",
      tous: "All",
      aucunResultat: "No vehicle matches these criteria right now. Contact us on WhatsApp, we'll find a solution.",
    },
    tarifs: {
      titre: "Rate Card",
      texte: "Indicative daily rates in euros (€) — Moroccan dirham (MAD) equivalent given for reference.",
      vehicule: "Vehicle",
      km: "Mileage",
      franchise: "Deposit",
      prixJour: "Price / day (€)",
      approxMad: "≈ MAD / day",
      bonASavoir: "Good to know",
      infos: [
        "Payment on site, at vehicle pickup.",
        "Required documents: valid driving licence, passport or national ID.",
        "A security deposit is required and refunded at the end of the rental, barring damage.",
      ],
    },
    reservation: {
      titre: "Booking Request",
      texte: "Fill in this form: we'll open WhatsApp with your pre-filled request, ready to send to our team. No data is stored or shared elsewhere.",
      vehiculeSouhaite: "Preferred vehicle",
      pasDecide: "Not decided yet",
      dateDebut: "Start date",
      dateFin: "End date",
      lieu: "Pickup / drop-off location",
      selectionnezVille: "Select a city",
      nomComplet: "Full name",
      envoyer: "Send request on WhatsApp",
    },
    aPropos: {
      titre: "About OVYA Rent",
      texte: "OVYA Rent positions itself as a reference in recent, premium vehicle rental in Morocco. Our ambition: rigor, service excellence and total peace of mind for drivers, in Marrakech, Casablanca, Agadir and Rabat.",
      citation: "\"Hit the road with confidence.\"",
      valeurs: [
        { titre: "Modernity", texte: "A regularly renewed fleet, at the cutting edge of comfort and safety." },
        { titre: "Prestige", texte: "A service designed to offer a premium rental experience, without complexity." },
        { titre: "Reliability", texte: "Clear terms, no hidden fees, communicated before every booking." },
        { titre: "Responsiveness", texte: "A team reachable directly on WhatsApp, for fast replies." },
      ],
    },
    contact: {
      titre: "Contact",
      texte: "The fastest way to reach us remains WhatsApp — our team replies directly.",
      ouvrir: "Open →",
      nom: "Name",
      message: "Message",
      envoyer: "Send on WhatsApp",
    },
    faq: {
      titre: "Frequently Asked Questions",
      questions: [
        { q: "What is the minimum age to rent a vehicle?", r: "The minimum age is 21 for economy and city car categories, and 23 for SUVs and luxury vehicles, with a licence held for at least 2 years." },
        { q: "What documents do I need to provide?", r: "A valid driving licence (national or international depending on your home country) and an ID — passport for foreign visitors, national ID for Moroccan residents." },
        { q: "Is a security deposit required?", r: "Yes, a deposit is required at vehicle pickup. The amount varies by vehicle category and is communicated before booking. It is refunded at the end of the rental, barring any damage found." },
        { q: "Is mileage unlimited?", r: "Most of our vehicles come with unlimited mileage. Some premium models may have a mileage cap — this is specified on each vehicle's page." },
        { q: "How do I book a vehicle?", r: "Via our online booking form, or directly on WhatsApp. We confirm availability and details before your arrival." },
        { q: "Is payment made online?", r: "No, payment is made on site, at vehicle pickup." },
      ],
    },
    villesPage: {
      titre: "Cities We Serve",
      texte: "OVYA Rent supports you in several cities across Morocco, at the airport as well as downtown.",
    },
    villeDetail: {
      retour: "← All cities",
      vehiculesDisponibles: "Vehicles available in",
      aucunVehicule: "Contact us on WhatsApp to find out which vehicles are available in",
    },
    vehiculeDetail: {
      retour: "← Back to fleet",
      transmission: "Transmission",
      carburant: "Fuel",
      places: "Seats",
      kilometrage: "Mileage",
      illimite: "Unlimited",
      limite: "Limited",
      franchise: "Deposit",
      disponibleA: "Available in:",
      reserverSur: "Book this vehicle on WhatsApp",
    },
  },
  ar: {
    nav: {
      accueil: "الرئيسية",
      flotte: "الأسطول",
      tarifs: "الأثمنة",
      villes: "المدن",
      aPropos: "من احنا",
      faq: "الأسئلة",
      contact: "اتصل بينا",
      reserver: "احجز دابا",
    },
    hero: {
      eyebrow: "كراء السيارات فالمغرب",
      titre: "خود الطريق فالثقة التامة.",
      texte:
        "طوموبيلات جداد، مساعدة فواتساب 7/7، والتوصيل للمطار، للأوتيل ولا للدار — فجميع المغرب.",
      ctaReserver: "احجز طوموبيل",
      ctaFlotte: "شوف الأسطول",
    },
    categories: {
      titre: "قلب حسب الفئة",
      texte: "لقا الطوموبيل اللي تناسبك، من الاقتصادية حتال الفاخرة.",
    },
    selection: {
      titre: "الاختيار ديالنا",
      texte: "نظرة على الأسطول المتوفر.",
      lien: "الأسطول كامل ←",
    },
    chiffres: {
      satisfaits: "زبون راضي",
      vehicules: "طوموبيل جداد",
      assistance: "مساعدة و توصيل",
    },
    pourquoi: {
      titre: "علاش تختار OVYA Rent",
    },
    villesSection: {
      titre: "المدن اللي كنخدمو فيهم",
      texte: "وكالة قريبة منك، فالمطار ولا فوسط المدينة.",
      lien: "جميع المدن ←",
    },
    ctaFinal: {
      titre: "عندك سؤال قبل الحجز؟",
      texte: "الفريق ديالنا كيجاوب مباشرة فواتساب باش يعاونك تختار الطوموبيل المناسبة ليك.",
      bouton: "اتصل بينا",
    },
    footer: {
      accroche: "«خود الطريق فالثقة التامة.» كراء طوموبيلات جداد وفاخرة فالمغرب.",
      navigation: "التصفح",
      villesDesservies: "المدن اللي كنخدمو فيهم",
      contact: "اتصل بينا",
      formulaireContact: "فورم ديال الاتصال",
      mentionsLegales: "الإشارات القانونية",
      cgv: "شروط البيع",
      droits: "جميع الحقوق محفوظة.",
    },
    carCard: {
      kmIllimite: "كيلومتراج ماشي محدود",
      kmLimite: "كيلومتراج محدود",
      jour: "/نهار",
      details: "التفاصيل",
      premium: "بريميوم",
      automatique: "أوتوماتيك",
    },
    whatsapp: "هضر معانا فواتساب",
    flotte: {
      titre: "الأسطول ديالنا",
      texte: "فلتري حسب الفئة، الفيتاس أو المحروق باش تلقا الطوموبيل اللي تناسب السفرة ديالك.",
      categorie: "الفئة",
      transmission: "الفيتاس",
      carburant: "المحروق",
      toutes: "الكل",
      tous: "الكل",
      aucunResultat: "ماكاينش طوموبيل كيوافق هاد المعايير دابا. اتصل بينا فواتساب، غادي نلقاو ليك حل.",
    },
    tarifs: {
      titre: "لائحة الأثمنة",
      texte: "أثمنة تقريبية فالنهار، باليورو (€) — والمعادل بالدرهم (MAD) معطى للإشارة.",
      vehicule: "الطوموبيل",
      km: "كيلومتراج",
      franchise: "الكاوسيون",
      prixJour: "الثمن / النهار (€)",
      approxMad: "≈ درهم / النهار",
      bonASavoir: "خاصك تعرف",
      infos: [
        "الخلاص كيتم فعين المكان، فوقت استلام الطوموبيل.",
        "الوثائق المطلوبة: رخصة السياقة صالحة، الباسبور ولا البطاقة الوطنية.",
        "الكاوسيون كتطلب وكترجع فآخر الكراء، إلا ما كانش ضرر.",
      ],
    },
    reservation: {
      titre: "طلب الحجز",
      texte: "عمر هاد الفورم: غادي نحلو ليك واتساب بالطلب ديالك معمر، باش تصيفطو للفريق ديالنا. حتى معلومة ماكتبقاش محفوظة ولا كتصيفط لحد آخر.",
      vehiculeSouhaite: "الطوموبيل اللي بغيتي",
      pasDecide: "مازال ما قررتش",
      dateDebut: "تاريخ البداية",
      dateFin: "تاريخ النهاية",
      lieu: "بلاصة الاستلام / الرجوع",
      selectionnezVille: "ختار مدينة",
      nomComplet: "السميا كاملة",
      envoyer: "صيفط الطلب فواتساب",
    },
    aPropos: {
      titre: "من احنا فـ OVYA Rent",
      texte: "OVYA Rent هي وكالة مرجعية فكراء الطوموبيلات الجداد والفاخرة فالمغرب. الهدف ديالنا: الجدية، خدمة ممتازة وراحة البال الكاملة للسايق، فمراكش، الدار البيضاء، أكادير ولارباط.",
      citation: "«خود الطريق فالثقة التامة.»",
      valeurs: [
        { titre: "الحداثة", texte: "أسطول كيتجدد بانتظام، فأعلى مستوى ديال الراحة والسلامة." },
        { titre: "البريستيج", texte: "خدمة مدروسة باش تعطي تجربة كراء بريميوم، بلا تعقيد." },
        { titre: "الثقة", texte: "شروط واضحة، بلا مصاريف خفية، كتقال ليك قبل الحجز." },
        { titre: "رد الفعل السريع", texte: "فريق متوفر مباشرة فواتساب، للجواب السريع." },
      ],
    },
    contact: {
      titre: "اتصل بينا",
      texte: "أسرع طريقة باش توصل لينا هي واتساب — الفريق ديالنا كيجاوبك مباشرة.",
      ouvrir: "حل ←",
      nom: "السميا",
      message: "الرسالة",
      envoyer: "صيفط فواتساب",
    },
    faq: {
      titre: "الأسئلة المتكررة",
      questions: [
        { q: "شحال العمر الأدنى باش تكري طوموبيل؟", r: "العمر الأدنى هو 21 عام للفئة الاقتصادية والمدينية، و23 عام للـ SUV والفاخرة، مع رخصة عندها على الأقل عامين." },
        { q: "أشنو هي الوثائق اللي خاصني نجيب؟", r: "رخصة السياقة صالحة (وطنية ولا دولية حسب البلد ديالك) وبطاقة تعريف — الباسبور للزوار الأجانب، البطاقة الوطنية للمقيمين فالمغرب." },
        { q: "واش كاين كاوسيون؟", r: "أيه، كاين كاوسيون كتطلب فوقت استلام الطوموبيل. المبلغ كيتفاوت حسب فئة الطوموبيل وكنقولوه ليك قبل الحجز. كترجع فآخر الكراء، إلا ما كانش ضرر." },
        { q: "واش الكيلومتراج ماشي محدود؟", r: "غالبية الطوموبيلات ديالنا عندهم كيلومتراج ماشي محدود. بعض الموديلات البريميوم يمكن يكون عندهم حد للكيلومتراج — المعلومة موجودة فكل فيش ديال الطوموبيل." },
        { q: "كيفاش نحجز طوموبيل؟", r: "من خلال الفورم ديال الحجز فالسيت، ولا مباشرة فواتساب. كنأكدو التوفر والتفاصيل قبل ما توصل." },
        { q: "واش الخلاص كيتم أونلاين؟", r: "لا، الخلاص كيتم فعين المكان، فوقت استلام الطوموبيل." },
      ],
    },
    villesPage: {
      titre: "المدن اللي كنخدمو فيهم",
      texte: "OVYA Rent كتخدمك فبزاف ديال المدن فالمغرب، فالمطار ولا فوسط المدينة.",
    },
    villeDetail: {
      retour: "← جميع المدن",
      vehiculesDisponibles: "الطوموبيلات المتوفرة فـ",
      aucunVehicule: "اتصل بينا فواتساب باش تعرف أشنو متوفر فـ",
    },
    vehiculeDetail: {
      retour: "← رجوع للأسطول",
      transmission: "الفيتاس",
      carburant: "المحروق",
      places: "بلايص",
      kilometrage: "كيلومتراج",
      illimite: "ماشي محدود",
      limite: "محدود",
      franchise: "الكاوسيون",
      disponibleA: "متوفرة فـ:",
      reserverSur: "احجز هاد الطوموبيل فواتساب",
    },
  },
} as const;

export function t(locale: Locale) {
  return dict[locale];
}

export function localizedPath(path: string, target: Locale): string {
  if (target === "fr") return path.replace(/^\/(en|ar)(\/|$)/, "/");
  // Only the homepage exists in a translated version for now, so any other
  // page falls back to the target locale's homepage instead of a 404.
  return `/${target}`;
}
