const beaches = [
  {
    name: "Cala del Senyor Ramon",
    town: "Santa Cristina d'Aro / Tossa de Mar",
    zone: "Selva",
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
    tags: ["Amplia", "Aparcament", "Familiar"],
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
  }
];

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
    </div>
  `;
}

function updateMap(items) {
  markersLayer.clearLayers();
  markersByBeach.clear();
  const latLngs = [];

  items.forEach((beach) => {
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
    card.dataset.beachName = beach.name;
    card.addEventListener("click", () => {
      highlightCard(beach.name);
      map.setView(beach.coords, 13);
      markersByBeach.get(beach.name)?.openPopup();
    });

    card.querySelector(".card-image").style.backgroundImage = `url("${beach.image}")`;
    card.querySelector(".zone-pill").textContent = beach.zone;
    card.querySelector(".distance-pill").textContent = beach.distance;
    card.querySelector(".beach-name").textContent = beach.name;
    card.querySelector(".beach-location").textContent = beach.town;
    card.querySelector(".beach-description").textContent = beach.description;

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

  const filtered = beaches.filter((beach) => {
    const matchesQuery =
      beach.name.toLowerCase().includes(query) ||
      beach.town.toLowerCase().includes(query);
    const matchesZone = selectedZone === "all" || beach.zone === selectedZone;
    const matchesType = selectedType === "all" || beach.type === selectedType;

    return matchesQuery && matchesZone && matchesType;
  });

  renderBeaches(filtered);
}

[searchInput, zoneFilter, typeFilter].forEach((element) => {
  element.addEventListener("input", filterBeaches);
  element.addEventListener("change", filterBeaches);
});

renderBeaches(beaches);
