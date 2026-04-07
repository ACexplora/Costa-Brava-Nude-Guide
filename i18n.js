const I18N_STORAGE_KEY = "costa-brava-language";

const I18N_TEXT = {
  ca: {
    langLabel: "Idioma",
    nav: ["Platges", "Zones", "FAQ", "Qui som", "Consells"],
    headerChip: "Directori viu",
    heroEyebrow: "Guia local 2026",
    heroTitle: "Descobreix les platges nudistes mes especials de la Costa Brava",
    heroText: "Una proposta visual inspirada en directoris moderns: filtres rapids, fitxes clares i informacio util per escollir cala tranquil·la, platja accessible o raco mes salvatge.",
    heroCards: [["Directori", "Fitxes clares i visuals"], ["Mapa", "Navegacio geografica rapida"], ["Seleccio", "4 recomanades a portada"]],
    heroButtons: ["Explorar platges", "Veure recomanacions"],
    heroStats: ["platges destacades", "zones de la costa", "tipus d'experiencia"],
    filters: ["Troba el teu raco", "Filtra per ambient, acces i zona"],
    searchPlaceholder: "Cerca per nom o municipi",
    zoneOptions: ["Totes les zones", "Alt Emporda", "Baix Emporda", "La Selva"],
    typeOptions: ["Tots els ambients", "Tranquil", "Salvatge", "Accessible", "Amb caminada"],
    map: ["Mapa interactiu", "Ubicacions sobre la Costa Brava", "Clica un marcador per veure la fitxa resumida"],
    directory: ["Directori visual", "Platges recomanades"],
    tipsTitles: ["Respecte i convivencia", "Acces i aparcament", "Mapa interactiu despres"],
    tipsTexts: [
      "Indica clarament si una platja es exclusivament nudista o mixta, i recomana comportaments respectuosos per a visitants nous.",
      "Afegeix temps de caminada, dificultat d'acces i opcions d'aparcament. Es de les dades mes utils per a l'usuari.",
      "Pots comencar amb HTML pur i mes endavant integrar Leaflet o Google Maps per ubicar les cales sobre el mapa."
    ],
    faqTitle: "Preguntes frequents",
    faq: [
      ["Les platges son exclusivament nudistes?", "No sempre. Algunes tenen tradicio naturista molt clara i d'altres son mixtes. A cada fitxa cal indicar-ho amb la maxima precisio possible."],
      ["La informacio d'acces es definitiva?", "La base actual esta pensada com a directori editorial. Es recomanable revisar accessos, aparcament i condicions locals abans de sortir."],
      ["Puc deixar comentaris sobre una platja?", "Si. Cada fitxa te un espai de comentaris. En aquesta versio estatica, els comentaris es guarden al teu navegador."],
      ["Afegireu mes dades a cada fitxa?", "Si, la idea es ampliar amb coordenades, serveis, dificultat d'acces, estat del terreny i recomanacions de visita."]
    ],
    aboutKicker: "Qui som",
    aboutTitle: "Una parella arrelada a la Costa Brava que combina natura, viatges i cultura nudista",
    aboutText: [
      "Som una parella que viu a la zona de la Costa Brava i que coneix el territori des de dins. Ens agrada explorar cales, camins, pobles i racons naturals, i compartir-los amb una mirada propera, respectuosa i practica.",
      "A traves de Free Hiking, AC Explora i altres projectes vinculats, organitzem viatges, rutes i experiencies per a persones que volen connectar amb la natura, el territori i una manera mes lliure de viure el cos.",
      "Promovem el nudisme, l'acceptacio corporal i les experiencies amb sentit: senderisme, escapades, viatges d'autor i activitats pensades per descobrir la Costa Brava i altres destinacions des d'una perspectiva conscient."
    ],
    aboutStats: ["fitxes actives", "comarques cobertes", "criteri editorial propi"],
    aboutTrustTitle: "Com treballem",
    aboutTrustItems: [
      "Coneixement directe del territori, les rutes i l'entorn natural de la Costa Brava.",
      "Especialitzacio en viatges per a la comunitat nudista, senderisme nudista i activitats outdoor amb enfocament respectuos.",
      "Projectes connectats amb viatges d'autor, e-bike, senderisme, massatge i tallers per a parelles."
    ],
    aboutLinksTitle: "Projectes i perfils relacionats",
    aboutLinks: ["X Nudist Travel", "Instagram Travel NKD", "Free Hiking", "AC Explora"],
    detailNav: ["Platges", "Zones", "Consells"],
    detailLabels: {
      idealFor: "Ideal per",
      profileKicker: "La fitxa",
      profileTitle: "Que hi trobaras",
      usefulKicker: "Informacio util",
      usefulTitle: "Abans d'anar-hi",
      back: "Tornar al directori"
    }
  },
  es: {
    langLabel: "Idioma",
    nav: ["Playas", "Zonas", "FAQ", "Quienes somos", "Consejos"],
    headerChip: "Directorio vivo",
    heroEyebrow: "Guia local 2026",
    heroTitle: "Descubre las playas nudistas mas especiales de la Costa Brava",
    heroText: "Una propuesta visual inspirada en directorios modernos: filtros rapidos, fichas claras e informacion util para elegir cala tranquila, playa accesible o rincon mas salvaje.",
    heroCards: [["Directorio", "Fichas claras y visuales"], ["Mapa", "Navegacion geografica rapida"], ["Seleccion", "4 destacadas en portada"]],
    heroButtons: ["Explorar playas", "Ver recomendaciones"],
    heroStats: ["playas destacadas", "zonas de costa", "tipos de experiencia"],
    filters: ["Encuentra tu rincon", "Filtra por ambiente, acceso y zona"],
    searchPlaceholder: "Busca por nombre o municipio",
    zoneOptions: ["Todas las zonas", "Alt Emporda", "Baix Emporda", "La Selva"],
    typeOptions: ["Todos los ambientes", "Tranquilo", "Salvaje", "Accesible", "Con caminata"],
    map: ["Mapa interactivo", "Ubicaciones sobre la Costa Brava", "Haz clic en un marcador para ver la ficha resumida"],
    directory: ["Directorio visual", "Playas recomendadas"],
    tipsTitles: ["Respeto y convivencia", "Acceso y aparcamiento", "Mapa interactivo despues"],
    tipsTexts: [
      "Indica claramente si una playa es exclusivamente nudista o mixta, y recomienda comportamientos respetuosos para visitantes nuevos.",
      "Anade tiempo de caminata, dificultad de acceso y opciones de aparcamiento. Es uno de los datos mas utiles para el usuario.",
      "Puedes empezar con HTML puro e integrar mas adelante Leaflet o Google Maps para ubicar las calas en el mapa."
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      ["Las playas son exclusivamente nudistas?", "No siempre. Algunas tienen tradicion naturista muy clara y otras son mixtas. En cada ficha conviene indicarlo con la maxima precision posible."],
      ["La informacion de acceso es definitiva?", "La base actual esta pensada como directorio editorial. Es recomendable revisar accesos, aparcamiento y condiciones locales antes de salir."],
      ["Puedo dejar comentarios sobre una playa?", "Si. Cada ficha tiene un espacio de comentarios. En esta version estatica, los comentarios se guardan en tu navegador."],
      ["Vais a anadir mas datos a cada ficha?", "Si, la idea es ampliar con coordenadas, servicios, dificultad de acceso, estado del terreno y recomendaciones de visita."]
    ],
    aboutKicker: "Quienes somos",
    aboutTitle: "Una pareja arraigada en la Costa Brava que une naturaleza, viajes y cultura nudista",
    aboutText: [
      "Somos una pareja que vive en la zona de la Costa Brava y que conoce el territorio desde dentro. Nos apasiona explorar calas, caminos, pueblos y rincones naturales, y compartirlos con una mirada cercana, respetuosa y practica.",
      "A traves de Free Hiking, AC Explora y otros proyectos vinculados, organizamos viajes, rutas y experiencias para personas que quieren conectar con la naturaleza, el territorio y una forma mas libre de vivir el cuerpo.",
      "Promovemos el nudismo, la aceptacion corporal y las experiencias con sentido: senderismo, escapadas, viajes de autor y actividades pensadas para descubrir la Costa Brava y otros destinos desde una perspectiva consciente."
    ],
    aboutStats: ["fichas activas", "comarcas cubiertas", "criterio editorial propio"],
    aboutTrustTitle: "Como trabajamos",
    aboutTrustItems: [
      "Conocimiento directo del territorio, las rutas y el entorno natural de la Costa Brava.",
      "Especializacion en viajes para la comunidad nudista, senderismo nudista y actividades outdoor con enfoque respetuoso.",
      "Proyectos conectados con viajes de autor, e-bike, senderismo, masaje y talleres para parejas."
    ],
    aboutLinksTitle: "Proyectos y perfiles relacionados",
    aboutLinks: ["X Nudist Travel", "Instagram Travel NKD", "Free Hiking", "AC Explora"],
    detailNav: ["Playas", "Zonas", "Consejos"],
    detailLabels: {
      idealFor: "Ideal para",
      profileKicker: "La ficha",
      profileTitle: "Que encontraras",
      usefulKicker: "Informacion util",
      usefulTitle: "Antes de ir",
      back: "Volver al directorio"
    }
  },
  en: {
    langLabel: "Language",
    nav: ["Beaches", "Areas", "FAQ", "About", "Tips"],
    headerChip: "Live directory",
    heroEyebrow: "Local guide 2026",
    heroTitle: "Discover the most special nudist beaches on the Costa Brava",
    heroText: "A visual directory inspired by modern discovery products: fast filters, clear beach profiles and useful context to choose a quiet cove, an easy-access beach or a wilder spot.",
    heroCards: [["Directory", "Clear visual profiles"], ["Map", "Fast geographic browsing"], ["Selection", "4 featured beaches on the homepage"]],
    heroButtons: ["Explore beaches", "See recommendations"],
    heroStats: ["featured beaches", "coastal areas", "experience types"],
    filters: ["Find your spot", "Filter by vibe, access and area"],
    searchPlaceholder: "Search by name or town",
    zoneOptions: ["All areas", "Alt Emporda", "Baix Emporda", "La Selva"],
    typeOptions: ["All vibes", "Quiet", "Wild", "Accessible", "With hike"],
    map: ["Interactive map", "Locations across the Costa Brava", "Click a marker to open the summary profile"],
    directory: ["Visual directory", "Recommended beaches"],
    tipsTitles: ["Respect and coexistence", "Access and parking", "Interactive map later"],
    tipsTexts: [
      "Clearly explain whether a beach is fully nudist or mixed, and suggest respectful behavior for first-time visitors.",
      "Add walking time, access difficulty and parking options. It is one of the most useful data points for visitors.",
      "You can start with plain HTML and later integrate Leaflet or Google Maps to place each cove on the map."
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      ["Are these beaches exclusively nudist?", "Not always. Some have a strong naturist tradition and others are mixed. Each profile should explain that as clearly as possible."],
      ["Is the access information final?", "The current base is designed as an editorial directory. It is still a good idea to double-check local access, parking and conditions before going."],
      ["Can I leave comments about a beach?", "Yes. Each beach profile includes a comment section. In the static version, comments are stored in your browser."],
      ["Will you add more data to each profile?", "Yes. The idea is to expand each page with coordinates, facilities, access difficulty, terrain and visit recommendations."]
    ],
    aboutKicker: "About",
    aboutTitle: "A Costa Brava-based couple connecting nature, travel and nudist culture",
    aboutText: [
      "We are a couple living in the Costa Brava area, deeply connected to the territory and its natural landscape. We love exploring coves, trails, villages and hidden corners, then sharing them through a close, practical and respectful lens.",
      "Through Free Hiking, AC Explora and related projects, we organise trips, routes and experiences for people who want to connect with nature, place and a freer way of inhabiting the body.",
      "We promote naturism, body acceptance and meaningful experiences: hiking, authored trips, local escapes and outdoor activities designed to discover the Costa Brava and other destinations more consciously."
    ],
    aboutStats: ["active profiles", "covered areas", "independent editorial criteria"],
    aboutTrustTitle: "How we work",
    aboutTrustItems: [
      "First-hand knowledge of the Costa Brava, its routes and its natural environment.",
      "Specialisation in nudist travel, nudist hiking and respectful outdoor experiences.",
      "Connected projects spanning authored travel, e-bike routes, hiking, massage and couples workshops."
    ],
    aboutLinksTitle: "Related projects and profiles",
    aboutLinks: ["X Nudist Travel", "Instagram Travel NKD", "Free Hiking", "AC Explora"],
    detailNav: ["Beaches", "Areas", "Tips"],
    detailLabels: {
      idealFor: "Ideal for",
      profileKicker: "The profile",
      profileTitle: "What you will find",
      usefulKicker: "Useful info",
      usefulTitle: "Before you go",
      back: "Back to directory"
    }
  },
  fr: {
    langLabel: "Langue",
    nav: ["Plages", "Zones", "FAQ", "Qui sommes-nous", "Conseils"],
    headerChip: "Annuaire vivant",
    heroEyebrow: "Guide local 2026",
    heroTitle: "Decouvrez les plages nudistes les plus speciales de la Costa Brava",
    heroText: "Une proposition visuelle inspiree des annuaires modernes: filtres rapides, fiches claires et informations utiles pour choisir une crique tranquille, une plage accessible ou un coin plus sauvage.",
    heroCards: [["Annuaire", "Fiches claires et visuelles"], ["Carte", "Navigation geographique rapide"], ["Selection", "4 mises en avant sur la page d'accueil"]],
    heroButtons: ["Explorer les plages", "Voir les recommandations"],
    heroStats: ["plages mises en avant", "zones cotieres", "types d'experience"],
    filters: ["Trouvez votre coin", "Filtrez par ambiance, acces et zone"],
    searchPlaceholder: "Rechercher par nom ou commune",
    zoneOptions: ["Toutes les zones", "Alt Emporda", "Baix Emporda", "La Selva"],
    typeOptions: ["Toutes les ambiances", "Calme", "Sauvage", "Accessible", "Avec marche"],
    map: ["Carte interactive", "Emplacements sur la Costa Brava", "Cliquez sur un marqueur pour voir la fiche resumee"],
    directory: ["Annuaire visuel", "Plages recommandees"],
    tipsTitles: ["Respect et coexistence", "Acces et parking", "Carte interactive ensuite"],
    tipsTexts: [
      "Indiquez clairement si une plage est exclusivement nudiste ou mixte, et recommandez un comportement respectueux pour les nouveaux visiteurs.",
      "Ajoutez le temps de marche, la difficulte d'acces et les options de stationnement. C'est l'une des informations les plus utiles pour l'utilisateur.",
      "Vous pouvez commencer en HTML simple puis integrer plus tard Leaflet ou Google Maps pour situer les criques sur la carte."
    ],
    faqTitle: "Questions frequentes",
    faq: [
      ["Les plages sont-elles exclusivement nudistes?", "Pas toujours. Certaines ont une tradition naturiste tres claire et d'autres sont mixtes. Chaque fiche doit l'expliquer le plus clairement possible."],
      ["Les informations d'acces sont-elles definitives?", "La base actuelle est pensee comme un annuaire editorial. Il est recommande de verifier l'acces, le parking et les conditions locales avant de partir."],
      ["Puis-je laisser des commentaires sur une plage?", "Oui. Chaque fiche dispose d'un espace de commentaires. Dans cette version statique, les commentaires sont stockes dans votre navigateur."],
      ["Allez-vous ajouter plus de donnees a chaque fiche?", "Oui. L'idee est d'ajouter coordonnees, services, difficulte d'acces, etat du terrain et recommandations de visite."]
    ],
    aboutKicker: "Qui sommes-nous",
    aboutTitle: "Un couple ancre sur la Costa Brava, entre nature, voyage et culture nudiste",
    aboutText: [
      "Nous sommes un couple qui vit dans la zone de la Costa Brava et qui connait le territoire de l'interieur. Nous aimons explorer criques, sentiers, villages et coins naturels, puis les partager avec un regard proche, utile et respectueux.",
      "A travers Free Hiking, AC Explora et d'autres projets lies, nous organisons des voyages, des itinerares et des experiences pour les personnes qui veulent se reconnecter a la nature, au territoire et a une relation plus libre au corps.",
      "Nous promouvons le naturisme, l'acceptation du corps et les experiences qui ont du sens: randonnee, escapades, voyages d'auteur et activites outdoor pour decouvrir la Costa Brava et d'autres destinations avec plus de conscience."
    ],
    aboutStats: ["fiches actives", "zones couvertes", "ligne editoriale propre"],
    aboutTrustTitle: "Notre methode",
    aboutTrustItems: [
      "Connaissance directe du territoire, des itineraires et de l'environnement naturel de la Costa Brava.",
      "Specialisation dans les voyages pour la communaute nudiste, la randonnee nudiste et les activites outdoor respectueuses.",
      "Des projets relies au voyage d'auteur, au velo electrique, a la randonnee, au massage et aux ateliers pour couples."
    ],
    aboutLinksTitle: "Profils et projets lies",
    aboutLinks: ["X Nudist Travel", "Instagram Travel NKD", "Free Hiking", "AC Explora"],
    detailNav: ["Plages", "Zones", "Conseils"],
    detailLabels: {
      idealFor: "Ideal pour",
      profileKicker: "La fiche",
      profileTitle: "Ce que vous trouverez",
      usefulKicker: "Informations utiles",
      usefulTitle: "Avant d'y aller",
      back: "Retour au repertoire"
    }
  }
};

window.COSTA_BRAVA_I18N = {
  dictionaries: I18N_TEXT
};

function absoluteUrl(path) {
  return new URL(path, window.location.href).href;
}

function logoAssetPath() {
  const path = window.location.pathname.replace(/\\/g, "/");
  const parts = path.split("/").filter(Boolean);
  const hasLanguageFolder = parts.some((part) => ["ca", "es", "en", "fr"].includes(part));

  if (!hasLanguageFolder) {
    return document.body.classList.contains("detail-page") ? "../logo2.PNG" : "logo2.PNG";
  }

  return document.body.classList.contains("detail-page") ? "../../logo2.PNG" : "../logo2.PNG";
}

function ensureBranding() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const existingWrap = header.querySelector(".brand-wrap");
  const brandNode = existingWrap?.querySelector(".brand") || header.querySelector(".brand");
  if (!brandNode) return;

  const brandText = brandNode.textContent.trim() || "Costa Brava Nude Guide";
  const wrap = existingWrap || document.createElement("div");
  wrap.className = "brand-wrap";

  let logo = wrap.querySelector(".brand-logo");
  if (!logo) {
    logo = document.createElement("img");
    logo.className = "brand-logo";
    logo.alt = brandText;
    wrap.prepend(logo);
  }
  logo.src = logoAssetPath();

  if (!wrap.querySelector(".brand")) {
    const label = document.createElement("div");
    label.className = "brand";
    label.textContent = brandText;
    wrap.appendChild(label);
  } else {
    wrap.querySelector(".brand").textContent = brandText;
  }

  wrap.querySelector(".brand-mark")?.remove();

  if (!existingWrap) {
    brandNode.replaceWith(wrap);
  }
}

function getCurrentLanguage() {
  return document.documentElement.lang || localStorage.getItem(I18N_STORAGE_KEY) || "ca";
}

function setCurrentLanguage(language) {
  localStorage.setItem(I18N_STORAGE_KEY, language);
  document.documentElement.lang = language;
}

function safeSetText(selector, text) {
  const node = document.querySelector(selector);
  if (node) node.textContent = text;
}

function safeSetAll(selector, values) {
  document.querySelectorAll(selector).forEach((node, index) => {
    if (values[index] !== undefined) {
      node.textContent = values[index];
    }
  });
}

function homeSchemaText(language, t) {
  const dictionary = {
    ca: {
      organizationDescription: "Projecte editorial d'una parella arrelada a la Costa Brava, especialitzada en platges nudistes, senderisme, viatges i experiencies outdoor amb enfocament respectuos.",
      websiteName: "Costa Brava Nude Guide"
    },
    es: {
      organizationDescription: "Proyecto editorial de una pareja arraigada en la Costa Brava, especializada en playas nudistas, senderismo, viajes y experiencias outdoor con enfoque respetuoso.",
      websiteName: "Costa Brava Nude Guide"
    },
    en: {
      organizationDescription: "Editorial project by a Costa Brava-based couple specialising in nudist beaches, hiking, travel and respectful outdoor experiences.",
      websiteName: "Costa Brava Nude Guide"
    },
    fr: {
      organizationDescription: "Projet editorial porte par un couple ancre sur la Costa Brava, specialise dans les plages nudistes, la randonnee, le voyage et les experiences outdoor respectueuses.",
      websiteName: "Costa Brava Nude Guide"
    }
  };

  return dictionary[language] || dictionary.ca;
}

function renderHomeStructuredData(language, t) {
  if (!document.body.classList.contains("app-home")) {
    return;
  }

  document.querySelectorAll('script[data-schema="organization"], script[data-schema="website"]').forEach((node) => {
    node.remove();
  });

  const schemaText = homeSchemaText(language, t);
  const homeUrl = window.location.href;
  const logoUrl = absoluteUrl(document.body.classList.contains("app-home") ? "../logo2.PNG" : "logo2.PNG");
  const searchTarget = `${window.location.origin}${window.location.pathname}?q={search_term_string}`;

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Costa Brava Nude Guide",
    url: homeUrl,
    logo: logoUrl,
    image: logoUrl,
    description: schemaText.organizationDescription,
    sameAs: [
      "https://x.com/NudistTravel",
      "https://www.instagram.com/travel_nkd",
      "https://freehiking.eu/",
      "https://acexplora.com/"
    ],
    areaServed: [
      {
        "@type": "Place",
        name: "Costa Brava"
      },
      {
        "@type": "Place",
        name: "Catalunya"
      },
      {
        "@type": "Country",
        name: "Spain"
      }
    ],
    knowsAbout: [
      "Nudist beaches",
      "Costa Brava travel",
      "Naturism",
      "Beach access guidance",
      "Outdoor travel"
    ]
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: schemaText.websiteName,
    url: homeUrl,
    inLanguage: language,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: searchTarget
      },
      "query-input": "required name=search_term_string"
    }
  };

  [
    { key: "organization", data: organization },
    { key: "website", data: website }
  ].forEach((entry) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.schema = entry.key;
    script.textContent = JSON.stringify(entry.data);
    document.head.appendChild(script);
  });
}

function applyHomeTranslations(t) {
  safeSetAll(".site-nav a", t.nav);
  safeSetText(".lang-switcher span", t.langLabel);
  safeSetText(".header-chip", t.headerChip);
  safeSetText(".hero-copy .eyebrow", t.heroEyebrow);
  safeSetText(".hero-copy h1", t.heroTitle);
  safeSetText(".hero-text", t.heroText);
  document.querySelectorAll(".hero-mini-grid article").forEach((article, index) => {
    const pair = t.heroCards[index];
    if (!pair) return;
    const span = article.querySelector("span");
    const strong = article.querySelector("strong");
    if (span) span.textContent = pair[0];
    if (strong) strong.textContent = pair[1];
  });
  safeSetAll(".hero-actions a", t.heroButtons);
  safeSetAll(".hero-stats li span", t.heroStats);
  safeSetText(".filters-head .section-kicker", t.filters[0]);
  safeSetText(".filters-head h2", t.filters[1]);
  const search = document.getElementById("searchInput");
  if (search) search.placeholder = t.searchPlaceholder;
  safeSetAll("#zoneFilter option", t.zoneOptions);
  safeSetAll("#typeFilter option", t.typeOptions);
  safeSetText(".map-section .section-kicker", t.map[0]);
  safeSetText(".map-section h2", t.map[1]);
  safeSetText(".map-section .results-count", t.map[2]);
  safeSetText(".beach-section .section-kicker", t.directory[0]);
  safeSetText(".beach-section h2", t.directory[1]);
  safeSetAll(".info-strip article h3", t.tipsTitles);
  safeSetAll(".info-strip article p", t.tipsTexts);
  safeSetText("#faq .section-heading h2", t.faqTitle);
  document.querySelectorAll(".faq-card").forEach((card, index) => {
    const pair = t.faq[index];
    if (!pair) return;
    const h3 = card.querySelector("h3");
    const p = card.querySelector("p");
    if (h3) h3.textContent = pair[0];
    if (p) p.textContent = pair[1];
  });
  safeSetText("#qui-som .section-kicker", t.aboutKicker);
  safeSetText("#qui-som h2", t.aboutTitle);
  safeSetAll("#qui-som .about-copy p", t.aboutText);
  safeSetAll("#qui-som .about-stat span", t.aboutStats);
  safeSetText("#qui-som .about-trust h3", t.aboutTrustTitle);
  safeSetAll("#qui-som .about-trust li", t.aboutTrustItems);
  safeSetText("#qui-som .about-links h3", t.aboutLinksTitle);
  safeSetAll("#qui-som .about-links a", t.aboutLinks);
}

function applyDetailTranslations(t) {
  safeSetAll(".site-nav a", t.detailNav || t.nav.filter((_, index) => index !== 2 && index !== 3));
  safeSetText(".lang-switcher span", t.langLabel);
  safeSetText(".detail-aside-card .section-kicker", t.detailLabels?.idealFor);
  safeSetText(".detail-content .detail-section:first-child .section-kicker", t.detailLabels?.profileKicker);
  safeSetText(".detail-content .detail-section:first-child h2", t.detailLabels?.profileTitle);
  safeSetText(".detail-content .detail-section:last-child .section-kicker", t.detailLabels?.usefulKicker);
  safeSetText(".detail-content .detail-section:last-child h2", t.detailLabels?.usefulTitle);
  safeSetText(".detail-back", t.detailLabels?.back);
}

function ensureLanguageSelector() {
  if (document.getElementById("languageSwitcher")) return;
  const siteHeader = document.querySelector(".site-header");
  if (!siteHeader) return;
  const wrapper = document.createElement("div");
  wrapper.className = "header-actions";
  wrapper.innerHTML = `
    <label class="lang-switcher">
      <span>Idioma</span>
      <select id="languageSwitcher" aria-label="Language selector">
        <option value="ca">CA</option>
        <option value="es">ES</option>
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </select>
    </label>
  `;
  siteHeader.appendChild(wrapper);
}

function localizedPath(language) {
  const currentPath = window.location.pathname.replace(/\\/g, "/");
  const parts = currentPath.split("/").filter(Boolean);
  const knownLanguages = new Set(["ca", "es", "en", "fr"]);
  const endsWithSlash = currentPath.endsWith("/");
  const languageIndex = parts.findIndex((part) => knownLanguages.has(part));

  if (languageIndex >= 0) {
    parts[languageIndex] = language;
    return `/${parts.join("/")}${endsWithSlash ? "/" : ""}`;
  }

  if (parts.length === 0) {
    return `/${language}/`;
  }

  return `/${[parts[0], language, ...parts.slice(1)].join("/")}`;
}

function applyTranslations(language) {
  const t = I18N_TEXT[language] || I18N_TEXT.ca;
  setCurrentLanguage(language);
  ensureBranding();
  ensureLanguageSelector();
  const switcher = document.getElementById("languageSwitcher");
  if (switcher) switcher.value = language;
  if (document.body.classList.contains("app-home")) {
    applyHomeTranslations(t);
  }
  if (document.body.classList.contains("detail-page")) {
    applyDetailTranslations(t);
  }
  renderHomeStructuredData(language, t);
  window.dispatchEvent(new CustomEvent("costa-brava-language-change", { detail: { language, dictionary: t } }));
}

document.addEventListener("DOMContentLoaded", () => {
  const language = getCurrentLanguage();
  ensureBranding();
  applyTranslations(language);
  const switcher = document.getElementById("languageSwitcher");
  if (switcher) {
    switcher.addEventListener("change", (event) => {
      const selectedLanguage = event.target.value;
      localStorage.setItem(I18N_STORAGE_KEY, selectedLanguage);
      window.location.href = localizedPath(selectedLanguage);
    });
  }
});
