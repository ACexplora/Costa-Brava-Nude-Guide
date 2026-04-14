const BEACH_CONTENT = window.COSTA_BRAVA_BEACH_CONTENT || {};

function textOf(selector) {
  return document.querySelector(selector)?.textContent?.trim() || "";
}

function slugValue() {
  const fileName = window.location.pathname.split("/").pop() || "";
  return fileName.replace(/\.html$/i, "");
}

function extractBackgroundImage(selector) {
  const value = window.getComputedStyle(document.querySelector(selector) || document.body).backgroundImage;
  const match = value.match(/url\(["']?(.*?)["']?\)/);
  return match ? match[1] : "";
}

function currentLanguage() {
  return document.documentElement.lang || localStorage.getItem("costa-brava-language") || "ca";
}

function detailUiText() {
  const language = currentLanguage();
  const dictionary = {
    ca: {
      gallery: "Galeria",
      viewLabel: "Vista",
      mainImage: "Imatge principal de",
      supportingImage: "Vista complementaria per entendre millor l'entorn i el tipus de platja.",
      location: "Ubicacio",
      coordinates: "Coordenades",
      map: "Mapa",
      openMap: "Obrir mapa",
      access: "Acces",
      vibe: "Ambient",
      idealFor: "Ideal per",
      best: "El millor",
      note: "A tenir en compte",
      profile: "Ambient i perfil",
      directions: "Com arribar-hi",
      bestBody: "Aquesta fitxa posa en valor el caracter del lloc i els elements que la fan especial dins del directori.",
      fallbackHighlights: ["Entorn natural", "Experiencia local", "Bona candidata per ampliar la guia"],
      noteBody: "Com en moltes cales i platges d'aquest directori, abans de sortir conve revisar l'acces real, l'afluencia segons temporada i si cal portar aigua o calcat adequat.",
      noteList: [
        "Revisar l'acces abans de la visita",
        "Comprovar estat del mar i del temps",
        "Tenir en compte temporada alta i afluencia"
      ],
      profileFallback: "Una platja pensada per a usuaris que volen mes context abans de decidir on anar.",
      profileExperience: "Tipus d'experiencia",
      profileReferences: "Referencies rapides",
      pending: "pendent d'afinar",
      directionsBody: "La fitxa mante un enfocament editorial i prudent: no pressuposa una ruta exacta si no la tenim confirmada, pero si et dona context per preparar millor la visita.",
      directionsBase: "Punt base actual",
      directionsAccess: "Indicacio d'acces",
      directionsNext: "Val la pena afegir una ruta precisa en una seguent iteracio",
      locationFallback: "Ubicacio per completar",
      accessFallback: "Acces per confirmar",
      vibeFallback: "Ambient per confirmar",
      idealFallbackPrefix: "Visitar",
      idealFallbackSuffix: "amb una expectativa clara del tipus d'experiencia."
    },
    es: {
      gallery: "Galeria",
      viewLabel: "Vista",
      mainImage: "Imagen principal de",
      supportingImage: "Vista complementaria para entender mejor el entorno y el tipo de playa.",
      location: "Ubicacion",
      coordinates: "Coordenadas",
      map: "Mapa",
      openMap: "Abrir mapa",
      access: "Acceso",
      vibe: "Ambiente",
      idealFor: "Ideal para",
      best: "Lo mejor",
      note: "A tener en cuenta",
      profile: "Ambiente y perfil",
      directions: "Como llegar",
      bestBody: "Esta ficha pone en valor el caracter del lugar y los elementos que la hacen especial dentro del directorio.",
      fallbackHighlights: ["Entorno natural", "Experiencia local", "Buena candidata para ampliar la guia"],
      noteBody: "Como en muchas calas y playas de este directorio, antes de salir conviene revisar el acceso real, la afluencia segun la temporada y si hace falta llevar agua o calzado adecuado.",
      noteList: [
        "Revisar el acceso antes de la visita",
        "Comprobar el estado del mar y del tiempo",
        "Tener en cuenta temporada alta y afluencia"
      ],
      profileFallback: "Una playa pensada para personas que quieren mas contexto antes de decidir adonde ir.",
      profileExperience: "Tipo de experiencia",
      profileReferences: "Referencias rapidas",
      pending: "pendiente de afinar",
      directionsBody: "La ficha mantiene un enfoque editorial y prudente: no presupone una ruta exacta si no la tenemos confirmada, pero si te da contexto para preparar mejor la visita.",
      directionsBase: "Punto base actual",
      directionsAccess: "Indicacion de acceso",
      directionsNext: "Vale la pena anadir una ruta precisa en una siguiente iteracion",
      locationFallback: "Ubicacion por completar",
      accessFallback: "Acceso por confirmar",
      vibeFallback: "Ambiente por confirmar",
      idealFallbackPrefix: "Visitar",
      idealFallbackSuffix: "con una expectativa clara del tipo de experiencia."
    },
    en: {
      gallery: "Gallery",
      viewLabel: "View",
      mainImage: "Main image of",
      supportingImage: "Supporting view to better understand the setting and the beach type.",
      location: "Location",
      coordinates: "Coordinates",
      map: "Map",
      openMap: "Open map",
      access: "Access",
      vibe: "Vibe",
      idealFor: "Ideal for",
      best: "Best bits",
      note: "Things to keep in mind",
      profile: "Vibe and profile",
      directions: "How to get there",
      bestBody: "This profile highlights the character of the place and the elements that make it stand out within the directory.",
      fallbackHighlights: ["Natural setting", "Local feel", "Strong candidate for a richer guide"],
      noteBody: "As with many coves and beaches in this directory, it is worth checking real access conditions, seasonal crowds and whether you should bring water or suitable footwear before heading out.",
      noteList: [
        "Check access before visiting",
        "Review sea and weather conditions",
        "Keep peak season and crowd levels in mind"
      ],
      profileFallback: "A beach profile designed for visitors who want more context before deciding where to go.",
      profileExperience: "Experience type",
      profileReferences: "Quick references",
      pending: "still to refine",
      directionsBody: "This page keeps an editorial and careful approach: it does not assume an exact route unless confirmed, but it still gives you enough context to plan the visit better.",
      directionsBase: "Current base point",
      directionsAccess: "Access note",
      directionsNext: "It would be worth adding a precise route in a future iteration",
      locationFallback: "Location to complete",
      accessFallback: "Access to confirm",
      vibeFallback: "Vibe to confirm",
      idealFallbackPrefix: "Visit",
      idealFallbackSuffix: "with a clear expectation of the type of experience."
    },
    fr: {
      gallery: "Galerie",
      viewLabel: "Vue",
      mainImage: "Image principale de",
      supportingImage: "Vue complementaire pour mieux comprendre l'environnement et le type de plage.",
      location: "Emplacement",
      coordinates: "Coordonnees",
      map: "Carte",
      openMap: "Ouvrir la carte",
      access: "Acces",
      vibe: "Ambiance",
      idealFor: "Ideal pour",
      best: "Le meilleur",
      note: "A prendre en compte",
      profile: "Ambiance et profil",
      directions: "Comment y aller",
      bestBody: "Cette fiche met en valeur le caractere du lieu et les elements qui le rendent special dans l'annuaire.",
      fallbackHighlights: ["Cadre naturel", "Experience locale", "Bonne candidate pour enrichir le guide"],
      noteBody: "Comme pour beaucoup de criques et de plages de cet annuaire, il vaut mieux verifier l'acces reel, l'affluence selon la saison et s'il faut apporter de l'eau ou des chaussures adaptees avant de partir.",
      noteList: [
        "Verifier l'acces avant la visite",
        "Consulter l'etat de la mer et la meteo",
        "Tenir compte de la haute saison et de l'affluence"
      ],
      profileFallback: "Une plage pensee pour les visiteurs qui veulent plus de contexte avant de choisir ou aller.",
      profileExperience: "Type d'experience",
      profileReferences: "Reperes rapides",
      pending: "a affiner",
      directionsBody: "La fiche conserve une approche editoriale et prudente: elle ne suppose pas un itineraire exact si nous ne l'avons pas confirme, mais elle donne quand meme du contexte pour mieux preparer la visite.",
      directionsBase: "Point de depart actuel",
      directionsAccess: "Indication d'acces",
      directionsNext: "Cela vaut la peine d'ajouter un itineraire precis dans une prochaine iteration",
      locationFallback: "Emplacement a completer",
      accessFallback: "Acces a confirmer",
      vibeFallback: "Ambiance a confirmer",
      idealFallbackPrefix: "Visiter",
      idealFallbackSuffix: "avec une attente claire du type d'experience."
    }
  };

  return dictionary[language] || dictionary.ca;
}

function mergeBeachTranslation(base = {}, override = {}) {
  return {
    ...base,
    ...override,
    seo: { ...(base.seo || {}), ...(override.seo || {}) },
    meta: Array.isArray(override.meta) && override.meta.length ? override.meta : (base.meta || []),
    highlights: Array.isArray(override.highlights) && override.highlights.length ? override.highlights : (base.highlights || []),
    sections: Array.isArray(override.sections) && override.sections.length ? override.sections : (base.sections || [])
  };
}

function detailContentForPage() {
  const entry = BEACH_CONTENT[slugValue()];
  if (!entry) {
    return null;
  }

  const base = entry.translations?.ca || {};
  const override = entry.translations?.[currentLanguage()] || {};
  return {
    image: entry.image,
    slug: entry.slug,
    mapUrl: entry.mapUrl,
    coordinates: entry.coordinates,
    ...mergeBeachTranslation(base, override)
  };
}

function absoluteUrl(path) {
  return new URL(path, window.location.href).href;
}

function breadcrumbName() {
  const language = currentLanguage();
  const dictionary = {
    ca: "Platges",
    es: "Playas",
    en: "Beaches",
    fr: "Plages"
  };
  return dictionary[language] || dictionary.ca;
}

function renderStructuredData(content) {
  if (!content) {
    return;
  }

  document.querySelectorAll('script[data-schema="tourist-attraction"], script[data-schema="breadcrumb"]').forEach((node) => {
    node.remove();
  });

  const metaItems = Array.isArray(content.meta) ? content.meta : [];
  const locality = metaItems[0] || "";
  const access = metaItems[1] || "";
  const vibe = metaItems[2] || "";
  const description = content.seo?.description || content.intro || "";
  const pageUrl = window.location.href;
  const collectionUrl = absoluteUrl("../index.html#platges");
  const coordinates = Array.isArray(content.coordinates) && content.coordinates.length === 2
    ? {
        "@type": "GeoCoordinates",
        latitude: content.coordinates[0],
        longitude: content.coordinates[1]
      }
    : undefined;

  const touristAttraction = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: content.title,
    description,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    image: content.image,
    hasMap: content.mapUrl || undefined,
    geo: coordinates,
    publicAccess: true,
    isAccessibleForFree: true,
    touristType: vibe || undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: locality || undefined,
      addressRegion: content.eyebrow || undefined,
      addressCountry: "ES"
    },
    containedInPlace: {
      "@type": "Place",
      name: "Costa Brava"
    },
    keywords: Array.isArray(content.highlights) ? content.highlights.join(", ") : undefined,
    additionalProperty: access ? [
      {
        "@type": "PropertyValue",
        name: "Access",
        value: access
      }
    ] : undefined
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Costa Brava Nude Guide",
        item: absoluteUrl("../index.html")
      },
      {
        "@type": "ListItem",
        position: 2,
        name: breadcrumbName(),
        item: collectionUrl
      },
      {
        "@type": "ListItem",
        position: 3,
        name: content.title,
        item: pageUrl
      }
    ]
  };

  [
    { key: "tourist-attraction", data: touristAttraction },
    { key: "breadcrumb", data: breadcrumb }
  ].forEach((entry) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.schema = entry.key;
    script.textContent = JSON.stringify(entry.data);
    document.head.appendChild(script);
  });
}

function renderSimpleList(container, items) {
  if (!container) {
    return;
  }

  container.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  });
}

function renderDetailSections(sections) {
  const detailContent = document.querySelector(".detail-content");
  if (!detailContent || !Array.isArray(sections) || sections.length === 0) {
    return;
  }

  detailContent.innerHTML = "";
  sections.slice(0, 2).forEach((section, index) => {
    const node = document.createElement(index === 0 ? "article" : "aside");
    node.className = "detail-section";

    if (section.kicker) {
      const kicker = document.createElement("p");
      kicker.className = "section-kicker";
      kicker.textContent = section.kicker;
      node.appendChild(kicker);
    }

    if (section.title) {
      const title = document.createElement("h2");
      title.textContent = section.title;
      node.appendChild(title);
    }

    (section.paragraphs || []).forEach((paragraph) => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      node.appendChild(p);
    });

    if (section.items && section.items.length) {
      const ul = document.createElement("ul");
      section.items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
      node.appendChild(ul);
    }

    detailContent.appendChild(node);
  });
}

function renderDetailContent() {
  const content = detailContentForPage();
  if (!content) {
    return;
  }

  const eyebrow = document.querySelector(".detail-copy .eyebrow");
  const title = document.querySelector(".detail-copy h1");
  const intro = document.querySelector(".detail-intro");
  const metaList = document.querySelector(".detail-meta");
  const highlightsList = document.querySelector(".detail-highlights");
  const aside = document.querySelector(".detail-aside");
  const idealFor = document.querySelector(".detail-aside-card p:last-child");
  const metaDescription = document.querySelector('meta[name="description"]');

  if (eyebrow) eyebrow.textContent = content.eyebrow || eyebrow.textContent;
  if (title) title.textContent = content.title || title.textContent;
  if (intro) intro.textContent = content.intro || intro.textContent;
  if (idealFor) idealFor.textContent = content.idealFor || idealFor.textContent;
  if (aside && content.image) {
    aside.style.backgroundImage = `url('${content.image}')`;
  }

  renderSimpleList(metaList, content.meta || []);
  renderSimpleList(highlightsList, content.highlights || []);
  renderDetailSections(content.sections || []);

  if (content.seo?.title) {
    document.title = content.seo.title;
  }
  if (metaDescription && content.seo?.description) {
    metaDescription.setAttribute("content", content.seo.description);
  }
}

function galleryDataForPage() {
  const heroImage = extractBackgroundImage(".detail-aside");
  const beachName = textOf(".detail-copy h1");
  const slug = slugValue();
  const texts = detailUiText();

  const fallbackSets = [
    [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1501959915551-4e8a04b6f9c1?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1400&q=80"
    ],
    [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80"
    ]
  ];

  const setIndex = slug.length % fallbackSets.length;
  const images = [heroImage, ...fallbackSets[setIndex]].filter(Boolean).slice(0, 4);

  return images.map((image, index) => ({
    src: image,
    title: index === 0 ? beachName : `${texts.viewLabel} ${index + 1}`,
    description: index === 0 ? `${texts.mainImage} ${beachName}.` : texts.supportingImage
  }));
}

function createCard(title, body, list = []) {
  const article = document.createElement("article");
  article.className = "insight-card";
  article.innerHTML = `
    <p class="section-kicker">${title}</p>
    <p>${body}</p>
  `;

  if (list.length > 0) {
    const ul = document.createElement("ul");
    list.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
    article.appendChild(ul);
  }

  return article;
}

function createSnapshot(label, value) {
  const article = document.createElement("article");
  article.className = "snapshot-card";
  article.innerHTML = `
    <strong>${label}</strong>
    <p>${value}</p>
  `;
  return article;
}

function createLinkSnapshot(label, href, text) {
  const article = document.createElement("article");
  article.className = "snapshot-card";
  const strong = document.createElement("strong");
  strong.textContent = label;
  const link = document.createElement("a");
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = text;
  article.appendChild(strong);
  article.appendChild(link);
  return article;
}

function buildDetailInsights() {
  const detailContent = document.querySelector(".detail-content");
  if (!document.querySelector("body.detail-page main") || !detailContent) {
    return;
  }

  document.querySelector(".detail-insights")?.remove();

  const beachName = textOf(".detail-copy h1");
  const texts = detailUiText();
  const metaItems = Array.from(document.querySelectorAll(".detail-meta li")).map((item) => item.textContent.trim());
  const location = metaItems[0] || texts.locationFallback;
  const access = metaItems[1] || texts.accessFallback;
  const vibe = metaItems[2] || texts.vibeFallback;
  const highlights = Array.from(document.querySelectorAll(".detail-highlights li")).map((item) => item.textContent.trim());
  const intro = textOf(".detail-intro");
  const idealFor = textOf(".detail-aside-card p:last-child");
  const content = detailContentForPage();

  const section = document.createElement("section");
  section.className = "detail-insights";

  const snapshotGrid = document.createElement("div");
  snapshotGrid.className = "snapshot-grid";
  snapshotGrid.appendChild(createSnapshot(texts.location, location));
  if (Array.isArray(content?.coordinates) && content.coordinates.length === 2) {
    snapshotGrid.appendChild(
      createSnapshot(texts.coordinates, `${content.coordinates[0]}, ${content.coordinates[1]}`)
    );
  }
  if (content?.mapUrl) {
    snapshotGrid.appendChild(createLinkSnapshot(texts.map, content.mapUrl, texts.openMap));
  }
  snapshotGrid.appendChild(createSnapshot(texts.access, access));
  snapshotGrid.appendChild(createSnapshot(texts.vibe, vibe));
  snapshotGrid.appendChild(createSnapshot(
    texts.idealFor,
    idealFor || `${texts.idealFallbackPrefix} ${beachName} ${texts.idealFallbackSuffix}`
  ));

  const insightsGrid = document.createElement("div");
  insightsGrid.className = "insights-grid";
  insightsGrid.appendChild(createCard(
    texts.best,
    texts.bestBody,
    highlights.length ? highlights : texts.fallbackHighlights
  ));
  insightsGrid.appendChild(createCard(
    texts.note,
    texts.noteBody,
    texts.noteList
  ));
  insightsGrid.appendChild(createCard(
    texts.profile,
    intro || texts.profileFallback,
    [
      `${texts.profileExperience}: ${vibe || texts.vibeFallback}`,
      `${texts.profileReferences}: ${highlights.slice(0, 3).join(", ") || texts.pending}`
    ]
  ));
  insightsGrid.appendChild(createCard(
    texts.directions,
    texts.directionsBody,
    [
      `${texts.directionsBase}: ${location}`,
      `${texts.directionsAccess}: ${access}`,
      texts.directionsNext
    ]
  ));

  section.appendChild(snapshotGrid);
  section.appendChild(insightsGrid);
  detailContent.after(section);
}

function buildDetailGallery() {
  const hero = document.querySelector(".detail-hero");
  if (!hero) {
    return;
  }

  document.querySelector(".detail-gallery")?.remove();

  const images = galleryDataForPage();
  const texts = detailUiText();
  if (images.length === 0) {
    return;
  }

  const section = document.createElement("section");
  section.className = "detail-gallery";
  section.innerHTML = `
    <div class="gallery-stage">
      <div class="gallery-stage-info">
        <p class="section-kicker">${texts.gallery}</p>
        <strong class="gallery-title"></strong>
        <p class="gallery-description"></p>
      </div>
    </div>
    <div class="gallery-thumbs"></div>
  `;

  hero.after(section);

  const stage = section.querySelector(".gallery-stage");
  const title = section.querySelector(".gallery-title");
  const description = section.querySelector(".gallery-description");
  const thumbs = section.querySelector(".gallery-thumbs");

  function setActive(index) {
    const image = images[index];
    stage.style.backgroundImage = `url("${image.src}")`;
    title.textContent = image.title;
    description.textContent = image.description;

    thumbs.querySelectorAll("button").forEach((button, buttonIndex) => {
      button.classList.toggle("is-active", buttonIndex === index);
    });
  }

  images.forEach((image, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.style.backgroundImage = `url("${image.src}")`;
    button.innerHTML = `<span>${image.title}</span>`;
    button.addEventListener("click", () => setActive(index));
    thumbs.appendChild(button);
  });

  setActive(0);
}

function refreshDetailPage() {
  const content = detailContentForPage();
  renderDetailContent();
  buildDetailGallery();
  buildDetailInsights();
  renderStructuredData(content);
}

refreshDetailPage();

window.addEventListener("costa-brava-language-change", () => {
  refreshDetailPage();
});

