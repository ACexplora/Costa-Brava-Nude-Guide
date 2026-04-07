const beaches = [
  {
    name: "Cala del Senyor Ramon",
    town: "Santa Cristina d'Aro / Tossa de Mar",
    zone: "Baix Emporda",
    type: "salvatge",
    distance: "10 min a peu",
    description: "Cala coneguda per l'entorn rocós, aigües transparents i una zona on el nudisme és habitual i ben acceptat.",
    tags: ["Mixta", "Snorkel", "Entorn natural"],
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    coords: [41.756, 2.936],
    href: "platges/cala-del-senyor-ramon.html"
  },
  {
    name: "Platja de Castell",
    town: "Palamós",
    zone: "Baix Emporda",
    type: "accessible",
    distance: "Accés fàcil",
    description: "Gran platja natural amb sectors més tranquils on molts banyistes practiquen nudisme, ideal per començar.",
    tags: ["Àmplia", "Aparcament", "Familiar"],
    image: "https://images.unsplash.com/photo-1501959915551-4e8a04b6f9c1?auto=format&fit=crop&w=1200&q=80",
    coords: [41.862, 3.158],
    href: "platges/platja-de-castell.html"
  },
  {
    name: "Cala Estreta",
    town: "Palamós",
    zone: "Baix Emporda",
    type: "senderisme",
    distance: "25 min a peu",
    description: "Una de les cales més emblemàtiques de la zona, envoltada de pins i amb ambient discret i natural.",
    tags: ["Caminada", "Salvatge", "Fotogènica"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    coords: [41.878, 3.173],
    href: "platges/cala-estreta.html"
  },
  {
    name: "Illa Roja",
    town: "Begur",
    zone: "Baix Emporda",
    type: "tranquil",
    distance: "15 min a peu",
    description: "Probablement la platja nudista més famosa de la Costa Brava, amb sorra daurada i gran presència nudista.",
    tags: ["Clàssica", "Panoràmica", "Popular"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    coords: [41.967, 3.226],
    href: "platges/illa-roja.html"
  },
  {
    name: "Platja del Tornet",
    town: "Roses",
    zone: "Alt Emporda",
    type: "tranquil",
    distance: "8 min a peu",
    description: "Espai més apartat dins l'entorn de Roses, interessant per a qui busca calma i menys densitat de visitants.",
    tags: ["Discreta", "Poc massificada", "Calma"],
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    coords: [42.252, 3.196],
    href: "platges/platja-del-tornet.html"
  },
  {
    name: "Cala Murtra",
    town: "Roses",
    zone: "Alt Emporda",
    type: "senderisme",
    distance: "20 min a peu",
    description: "Cala naturista molt apreciada al Cap de Creus, sense urbanització immediata i amb una sensació de retirada total.",
    tags: ["Cap de Creus", "Naturista", "Aïllada"],
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
    coords: [42.276, 3.245],
    href: "platges/cala-murtra.html"
  },
  {
    name: "Cala Pi",
    town: "Portbou",
    zone: "Alt Emporda",
    type: "senderisme",
    distance: "Consultar accés",
    description: "Cala de l'extrem nord de la Costa Brava, interessant per a qui busca un entorn discret i més retirat.",
    tags: ["Portbou", "Rocosa", "Tranquila"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-pi.html"
  },
  {
    name: "Cala Borro",
    town: "Cap Ras, entre Llanca i Colera",
    zone: "Alt Emporda",
    type: "salvatge",
    distance: "Consultar accés",
    description: "Raco de Cap Ras amb perfil natural i bona cabuda dins d'un directori de cales nudistes del nord de la Costa Brava.",
    tags: ["Cap Ras", "Natural", "Calma"],
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-borro.html"
  },
  {
    name: "Cala Tamariua",
    town: "El Port de la Selva",
    zone: "Alt Emporda",
    type: "tranquil",
    distance: "Consultar accés",
    description: "Cala del Port de la Selva amb personalitat pròpia i un entorn que encaixa molt bé en una fitxa visual.",
    tags: ["Port de la Selva", "Aigües clares", "Discreta"],
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-tamariua.html"
  },
  {
    name: "Cala Taballera",
    town: "El Port de la Selva",
    zone: "Alt Emporda",
    type: "senderisme",
    distance: "Consultar accés",
    description: "Una de les cales amb més caràcter del sector del Cap de Creus, ideal per a usuaris que valoren paisatge i sensació d'aïllament.",
    tags: ["Cap de Creus", "Senderisme", "Salvatge"],
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-taballera.html"
  },
  {
    name: "Cala Fredosa",
    town: "Cap de Creus, Cadaques",
    zone: "Alt Emporda",
    type: "senderisme",
    distance: "Consultar accés",
    description: "Cala associada al paisatge més obert i mineral del Cap de Creus, perfecta per a un perfil de visitant que busca entorn cru i natural.",
    tags: ["Cadaques", "Cap de Creus", "Vistes"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-fredosa.html"
  },
  {
    name: "Cala Jugadora",
    town: "Cap de Creus, Cadaques",
    zone: "Alt Emporda",
    type: "salvatge",
    distance: "Consultar accés",
    description: "Cala molt ben situada dins l'imaginari del Cap de Creus, adequada per a una fitxa centrada en paisatge i tranquil·litat.",
    tags: ["Cadaques", "Salvatge", "Rocosa"],
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-jugadora.html"
  },
  {
    name: "Cala de Sant Lluis",
    town: "Cadaques",
    zone: "Alt Emporda",
    type: "tranquil",
    distance: "Consultar accés",
    description: "Cala de Cadaques amb molt potencial per a una fitxa clara, pensada per orientar visitants sobre ambient i tipus d'entorn.",
    tags: ["Cadaques", "Calma", "Entorn natural"],
    image: "https://images.unsplash.com/photo-1501959915551-4e8a04b6f9c1?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-de-sant-lluis.html"
  },
  {
    name: "Cala s'Alqueria Gran",
    town: "Cadaques",
    zone: "Alt Emporda",
    type: "tranquil",
    distance: "Consultar accés",
    description: "Raco de Cadaques que funciona molt bé dins d'una col·lecció de cales nudistes per la seva identitat i ubicació.",
    tags: ["Cadaques", "Discreta", "Natural"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-s-alqueria-gran.html"
  },
  {
    name: "Platja de Sa Conca",
    town: "Cadaques",
    zone: "Alt Emporda",
    type: "accessible",
    distance: "Consultar accés",
    description: "Platja de Cadaques adequada per oferir una fitxa simple i orientativa dins del catàleg general de la comarca.",
    tags: ["Cadaques", "Platja", "Mixta"],
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/platja-de-sa-conca.html"
  },
  {
    name: "Cala Sa Sabolla",
    town: "Cadaques",
    zone: "Alt Emporda",
    type: "senderisme",
    distance: "Consultar accés",
    description: "Cala que reforça el bloc de Cadaques i Cap de Creus, amb una proposta enfocada a usuaris que volen llocs més apartats.",
    tags: ["Cadaques", "Aillada", "Senderisme"],
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-sa-sabolla.html"
  },
  {
    name: "Platja de Can Comes",
    town: "Castello d'Empuries",
    zone: "Alt Emporda",
    type: "accessible",
    distance: "Consultar accés",
    description: "Una opcio de tram de platja ampli, interessant per a qui prefereix espai obert i menys sensacio de cala tancada.",
    tags: ["Llarga", "Arenosa", "Espai obert"],
    image: "https://images.unsplash.com/photo-1501959915551-4e8a04b6f9c1?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/platja-de-can-comes.html"
  },
  {
    name: "Platja del Cortal de la Vila",
    town: "Sant Pere Pescador",
    zone: "Alt Emporda",
    type: "accessible",
    distance: "Consultar accés",
    description: "Platja de tram extens molt útil per representar l'oferta nudista de Sant Pere Pescador i l'entorn dels Aiguamolls.",
    tags: ["Sant Pere Pescador", "Natural", "Llarga"],
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/platja-del-cortal-de-la-vila.html"
  },
  {
    name: "Platja del Riuet",
    town: "L'Escala",
    zone: "Alt Emporda",
    type: "tranquil",
    distance: "Consultar accés",
    description: "Tram de platja de l'Escala interessant per a qui busca una opcio oberta i menys recollida que les cales rocoses.",
    tags: ["L'Escala", "Arenosa", "Vent"],
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/platja-del-riuet.html"
  },
  {
    name: "Platja de la Platera",
    town: "L'Estartit, Torroella de Montgri",
    zone: "Baix Emporda",
    type: "accessible",
    distance: "Consultar accés",
    description: "Tram de platja llarga i oberta, molt útil per donar varietat al catàleg més enllà de les cales petites.",
    tags: ["L'Estartit", "Llarga", "Arenosa"],
    image: "https://images.unsplash.com/photo-1501959915551-4e8a04b6f9c1?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/platja-de-la-platera.html"
  },
  {
    name: "Platja de Pals",
    town: "Pals",
    zone: "Baix Emporda",
    type: "accessible",
    distance: "Consultar accés",
    description: "Gran platja del Baix Emporda amb espai suficient per orientar diferents perfils de visitant segons tram i temporada.",
    tags: ["Pals", "Espai obert", "Arenosa"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/platja-de-pals.html"
  },
  {
    name: "Cala del Crit",
    town: "Entre Palamos i Calella de Palafrugell",
    zone: "Baix Emporda",
    type: "senderisme",
    distance: "Consultar accés",
    description: "Cala vinculada al conjunt d'Estreta i Roca Bona, pensada per a visitants que prefereixen racons amb paisatge i una arribada més pausada.",
    tags: ["Caminada", "Natural", "Baix Emporda"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-del-crit.html"
  },
  {
    name: "Roca Bona",
    town: "Entre Palamos i Calella de Palafrugell",
    zone: "Baix Emporda",
    type: "salvatge",
    distance: "Consultar accés",
    description: "Raco del mateix sector que Cala Estreta i Cala del Crit, adient per completar la xarxa de fitxes d'aquest tram costaner.",
    tags: ["Rocosa", "Discreta", "Caminada"],
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/roca-bona.html"
  },
  {
    name: "Cala de les Roques Planes",
    town: "Sant Antoni de Calonge",
    zone: "Baix Emporda",
    type: "tranquil",
    distance: "Consultar accés",
    description: "Cala coneguda dins del sector de Calonge, adequada per a una fitxa amb orientacio visual i recomanacions de visita.",
    tags: ["Calonge", "Rocosa", "Calma"],
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-de-les-roques-planes.html"
  },
  {
    name: "Cala Canyers",
    town: "Platja d'Aro",
    zone: "Baix Emporda",
    type: "salvatge",
    distance: "Consultar accés",
    description: "Cala amb perfil discret dins del tram de Platja d'Aro, molt útil per donar cobertura a aquesta zona del directori.",
    tags: ["Platja d'Aro", "Discreta", "Rocosa"],
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-canyers.html"
  },
  {
    name: "Cala del Vigata",
    town: "Sant Feliu de Guixols",
    zone: "Baix Emporda",
    type: "salvatge",
    distance: "Consultar accés",
    description: "Cala de Sant Feliu de Guixols apropiada per a qui busca roques, mar i una atmosfera menys multitudinaria.",
    tags: ["Sant Feliu", "Rocosa", "Natural"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-del-vigata.html"
  },
  {
    name: "Cala Vallpresona",
    town: "Santa Cristina d'Aro",
    zone: "Baix Emporda",
    type: "senderisme",
    distance: "Consultar accés",
    description: "Cala amb molta personalitat entre penya-segats i vegetacio, molt bona candidata per a una fitxa centrada en natura i tranquil·litat.",
    tags: ["Santa Cristina", "Aillada", "Senderisme"],
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-vallpresona.html"
  },
  {
    name: "Cala Figuera",
    town: "Tossa de Mar",
    zone: "Selva",
    type: "senderisme",
    distance: "Consultar accés",
    description: "Cala de Tossa de Mar pensada per a qui busca un raco amb entorn potent i menys sensacio urbana.",
    tags: ["Tossa", "Salvatge", "Caminada"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-figuera.html"
  },
  {
    name: "Cala Boadella",
    town: "Lloret de Mar",
    zone: "Selva",
    type: "accessible",
    distance: "Consultar accés",
    description: "Una de les opcions més conegudes de la Selva per a banyistes que busquen una combinacio d'accessibilitat i ambient natural.",
    tags: ["Lloret", "Popular", "Mixta"],
    image: "https://images.unsplash.com/photo-1501959915551-4e8a04b6f9c1?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-boadella.html"
  },
  {
    name: "Platja Delta de la Tordera",
    town: "Delta de la Tordera",
    zone: "Selva",
    type: "accessible",
    distance: "Consultar accés",
    description: "Tram final del cataleg, amb perfil de platja oberta i util per a qui vol espai i menys concentracio de gent.",
    tags: ["Delta", "Llarga", "Arenosa"],
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/platja-delta-de-la-tordera.html"
  }
];

const featuredBeachNames = new Set([
  "Cala Taballera",
  "Cala Estreta",
  "Illa Roja",
  "Cala Boadella"
]);

const beachGrid = document.getElementById("beachGrid");
const resultsCount = document.getElementById("resultsCount");
const template = document.getElementById("beachCardTemplate");
const searchInput = document.getElementById("searchInput");
const zoneFilter = document.getElementById("zoneFilter");
const typeFilter = document.getElementById("typeFilter");
const map = L.map("map", { scrollWheelZoom: true }).setView([42.02, 3.08], 9);
const markersLayer = L.layerGroup().addTo(map);
const markersByBeach = new Map();

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  referrerPolicy: "strict-origin-when-cross-origin",
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function highlightCard(name) {
  document.querySelectorAll(".beach-card").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.beachName === name);
  });
}

function createPopupMarkup(beach) {
  return `
    <div class="map-popup">
      <h3>${beach.name}</h3>
      <p><strong>${beach.town}</strong></p>
      <p>${beach.description}</p>
      <p>${beach.distance} · ${beach.zone}</p>
      <p><a href="${beach.href}">Obrir fitxa completa</a></p>
    </div>
  `;
}

function updateMap(items) {
  markersLayer.clearLayers();
  markersByBeach.clear();
  const latLngs = [];

  items.forEach((beach) => {
    if (!beach.coords) {
      return;
    }

    const marker = L.marker(beach.coords).addTo(markersLayer);
    marker.bindPopup(createPopupMarkup(beach));
    markersByBeach.set(beach.name, marker);
    marker.on("click", () => {
      highlightCard(beach.name);
      document.querySelector(`[data-beach-name="${CSS.escape(beach.name)}"]`)?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });
    latLngs.push(beach.coords);
  });

  if (latLngs.length === 0) {
    map.setView([42.02, 3.08], 9);
    return;
  }

  if (latLngs.length === 1) {
    map.setView(latLngs[0], 13);
    return;
  }

  map.fitBounds(latLngs, { padding: [30, 30] });
}

function renderBeaches(items) {
  beachGrid.innerHTML = "";

  items.forEach((beach) => {
    const node = template.content.cloneNode(true);
    const card = node.querySelector(".beach-card");
    const cardLink = node.querySelector(".card-link");
    const titleLink = node.querySelector(".beach-name-link");

    card.dataset.beachName = beach.name;
    card.addEventListener("click", (event) => {
      if (event.target.closest(".card-link") || event.target.closest(".beach-name-link")) {
        return;
      }

      highlightCard(beach.name);
      if (beach.coords) {
        map.setView(beach.coords, 13);
        markersByBeach.get(beach.name)?.openPopup();
      }
    });

    card.querySelector(".card-image").style.backgroundImage = `url("${beach.image}")`;
    card.querySelector(".zone-pill").textContent = beach.zone;
    card.querySelector(".distance-pill").textContent = beach.distance;
    card.querySelector(".beach-name").textContent = beach.name;
    card.querySelector(".beach-location").textContent = beach.town;
    card.querySelector(".beach-description").textContent = beach.description;
    cardLink.href = beach.href;
    titleLink.href = beach.href;

    const tagsContainer = card.querySelector(".card-tags");
    beach.tags.forEach((tag) => {
      const tagElement = document.createElement("span");
      tagElement.textContent = tag;
      tagsContainer.appendChild(tagElement);
    });

    beachGrid.appendChild(node);
  });

  resultsCount.textContent = `${items.length} platges visibles`;
  updateMap(items);
}

function filterBeaches() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedZone = zoneFilter.value;
  const selectedType = typeFilter.value;
  const hasActiveFilters =
    query !== "" || selectedZone !== "all" || selectedType !== "all";

  let filtered = beaches.filter((beach) => {
    const matchesQuery =
      beach.name.toLowerCase().includes(query) ||
      beach.town.toLowerCase().includes(query);
    const matchesZone = selectedZone === "all" || beach.zone === selectedZone;
    const matchesType = selectedType === "all" || beach.type === selectedType;

    return matchesQuery && matchesZone && matchesType;
  });

  if (!hasActiveFilters) {
    filtered = filtered.filter((beach) => featuredBeachNames.has(beach.name));
  }

  renderBeaches(filtered);
}

[searchInput, zoneFilter, typeFilter].forEach((element) => {
  element.addEventListener("input", filterBeaches);
  element.addEventListener("change", filterBeaches);
});

filterBeaches();
