(function initCostaBravaHome() {
  const homeData = window.COSTA_BRAVA_HOME_DATA;
  if (!homeData) {
    return;
  }

  const beaches = homeData.beaches || [];
  const featuredNames = new Set(homeData.featured || []);
  const heroNames = homeData.hero || [];

  const beachGrid = document.getElementById("beachGrid");
  const resultsCount = document.getElementById("resultsCount");
  const template = document.getElementById("beachCardTemplate");
  const searchInput = document.getElementById("searchInput");
  const zoneFilter = document.getElementById("zoneFilter");
  const typeFilter = document.getElementById("typeFilter");

  const heroTrack = document.getElementById("heroCarouselTrack");
  const heroTitle = document.getElementById("heroCarouselTitle");
  const heroLocation = document.getElementById("heroCarouselLocation");
  const heroDots = document.getElementById("heroCarouselDots");
  const heroPrev = document.getElementById("heroCarouselPrev");
  const heroNext = document.getElementById("heroCarouselNext");
  const heroKicker = document.querySelector(".hero-carousel-kicker");

  const mapElement = document.getElementById("map");
  const pageQuery = new URLSearchParams(window.location.search);

  let map = null;
  let markersLayer = null;
  const markersByBeach = new Map();

  function currentLanguage() {
    return document.documentElement.lang || localStorage.getItem("costa-brava-language") || "ca";
  }

  function uiText() {
    const dictionary = {
      ca: {
        cardLink: "Veure fitxa completa",
        results: "platges visibles",
        carouselKicker: "Seleccio visual",
        previousSlide: "Imatge anterior",
        nextSlide: "Imatge seguent",
        popupLink: "Obrir fitxa completa"
      },
      es: {
        cardLink: "Ver ficha completa",
        results: "playas visibles",
        carouselKicker: "Seleccion visual",
        previousSlide: "Imagen anterior",
        nextSlide: "Imagen siguiente",
        popupLink: "Abrir ficha completa"
      },
      en: {
        cardLink: "Open full guide",
        results: "visible beaches",
        carouselKicker: "Visual selection",
        previousSlide: "Previous image",
        nextSlide: "Next image",
        popupLink: "Open full guide"
      },
      fr: {
        cardLink: "Voir la fiche complete",
        results: "plages visibles",
        carouselKicker: "Selection visuelle",
        previousSlide: "Image precedente",
        nextSlide: "Image suivante",
        popupLink: "Ouvrir la fiche complete"
      }
    };

    return dictionary[currentLanguage()] || dictionary.ca;
  }

  function normalizeText(value) {
    return (value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function highlightCard(name) {
    document.querySelectorAll(".beach-card").forEach((card) => {
      card.classList.toggle("is-active", card.dataset.beachName === name);
    });
  }

  function ensureMap() {
    if (!mapElement || typeof L === "undefined" || map) {
      return;
    }

    map = L.map("map", { scrollWheelZoom: true }).setView([42.02, 3.08], 9);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      referrerPolicy: "strict-origin-when-cross-origin",
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    markersLayer = L.layerGroup().addTo(map);
  }

  function createPopupMarkup(beach) {
    const texts = uiText();
    return `
      <div class="map-popup">
        <h3>${beach.name}</h3>
        <p><strong>${beach.town}</strong></p>
        <p>${beach.description}</p>
        <p>${beach.distance} · ${beach.zone}</p>
        <p><a href="${beach.href}">${texts.popupLink}</a></p>
      </div>
    `;
  }

  function updateMap(items) {
    ensureMap();
    if (!map || !markersLayer) {
      return;
    }

    markersLayer.clearLayers();
    markersByBeach.clear();
    const latLngs = [];

    items.forEach((beach) => {
      if (!Array.isArray(beach.coords)) {
        return;
      }

      const marker = L.marker(beach.coords).addTo(markersLayer);
      marker.bindPopup(createPopupMarkup(beach));
      marker.on("click", () => {
        highlightCard(beach.name);
        document.querySelector(`[data-beach-name="${CSS.escape(beach.name)}"]`)?.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      });

      markersByBeach.set(beach.name, marker);
      latLngs.push(beach.coords);
    });

    if (!latLngs.length) {
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
    if (!beachGrid || !template) {
      return;
    }

    beachGrid.innerHTML = "";
    const texts = uiText();

    items.forEach((beach) => {
      const node = template.content.cloneNode(true);
      const card = node.querySelector(".beach-card");
      const titleLink = node.querySelector(".beach-name-link");
      const cardLink = node.querySelector(".card-link");

      card.dataset.beachName = beach.name;
      card.querySelector(".card-image").style.backgroundImage = `url("${beach.image}")`;
      card.querySelector(".zone-pill").textContent = beach.zone;
      card.querySelector(".distance-pill").textContent = beach.distance;
      card.querySelector(".beach-name").textContent = beach.name;
      card.querySelector(".beach-location").textContent = beach.town;
      card.querySelector(".beach-description").textContent = beach.description;

      titleLink.href = beach.href;
      cardLink.href = beach.href;
      cardLink.textContent = texts.cardLink;

      const tagsContainer = card.querySelector(".card-tags");
      tagsContainer.innerHTML = "";
      (beach.tags || []).forEach((tag) => {
        const tagElement = document.createElement("span");
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
      });

      card.addEventListener("click", (event) => {
        if (event.target.closest(".card-link") || event.target.closest(".beach-name-link")) {
          return;
        }

        highlightCard(beach.name);
        if (Array.isArray(beach.coords) && map) {
          map.setView(beach.coords, 13);
          markersByBeach.get(beach.name)?.openPopup();
        }
      });

      beachGrid.appendChild(node);
    });

    if (resultsCount) {
      resultsCount.textContent = `${items.length} ${texts.results}`;
    }

    updateMap(items);
  }

  function getFilteredBeaches() {
    const query = normalizeText(searchInput?.value);
    const selectedZone = zoneFilter?.value || "all";
    const selectedType = typeFilter?.value || "all";
    const hasActiveFilters = query || selectedZone !== "all" || selectedType !== "all";

    let filtered = beaches.filter((beach) => {
      const matchesQuery =
        !query ||
        normalizeText(`${beach.name} ${beach.town} ${beach.description} ${(beach.tags || []).join(" ")}`).includes(query);
      const matchesZone = selectedZone === "all" || beach.zone === selectedZone;
      const matchesType = selectedType === "all" || beach.type === selectedType;
      return matchesQuery && matchesZone && matchesType;
    });

    if (!hasActiveFilters) {
      filtered = filtered.filter((beach) => featuredNames.has(beach.name));
    }

    return filtered;
  }

  function filterBeaches() {
    renderBeaches(getFilteredBeaches());
  }

  function initHeroCarousel() {
    if (!heroTrack || !heroTitle || !heroLocation || !heroDots || !heroPrev || !heroNext || !heroKicker) {
      return;
    }

    const slides = heroNames
      .map((name) => beaches.find((beach) => beach.name === name))
      .filter(Boolean);

    if (!slides.length) {
      return;
    }

    const texts = uiText();
    heroKicker.textContent = texts.carouselKicker;
    heroPrev.setAttribute("aria-label", texts.previousSlide);
    heroNext.setAttribute("aria-label", texts.nextSlide);

    heroTrack.innerHTML = "";
    heroDots.innerHTML = "";

    slides.forEach((beach, index) => {
      const slide = document.createElement("article");
      slide.className = "hero-carousel-slide";
      slide.style.backgroundImage = `url("${beach.image}")`;
      slide.setAttribute("aria-hidden", index === 0 ? "false" : "true");
      heroTrack.appendChild(slide);

      const dot = document.createElement("button");
      dot.className = "hero-carousel-dot";
      dot.type = "button";
      dot.setAttribute("aria-label", beach.name);
      dot.addEventListener("click", () => {
        setSlide(index);
        restartAutoplay();
      });
      heroDots.appendChild(dot);
    });

    const dots = Array.from(heroDots.querySelectorAll(".hero-carousel-dot"));
    let activeIndex = 0;
    let autoplayId = null;

    function setSlide(index) {
      activeIndex = (index + slides.length) % slides.length;
      heroTrack.style.transform = `translateX(-${activeIndex * 100}%)`;
      heroTitle.textContent = slides[activeIndex].name;
      heroLocation.textContent = slides[activeIndex].town;

      Array.from(heroTrack.children).forEach((slide, slideIndex) => {
        slide.setAttribute("aria-hidden", slideIndex === activeIndex ? "false" : "true");
      });

      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === activeIndex);
      });
    }

    function startAutoplay() {
      window.clearInterval(autoplayId);
      autoplayId = window.setInterval(() => {
        setSlide(activeIndex + 1);
      }, 5500);
    }

    function restartAutoplay() {
      startAutoplay();
    }

    heroPrev.onclick = () => {
      setSlide(activeIndex - 1);
      restartAutoplay();
    };

    heroNext.onclick = () => {
      setSlide(activeIndex + 1);
      restartAutoplay();
    };

    heroTrack.onmouseenter = () => window.clearInterval(autoplayId);
    heroTrack.onmouseleave = () => startAutoplay();

    setSlide(0);
    restartAutoplay();
  }

  [searchInput, zoneFilter, typeFilter].forEach((element) => {
    element?.addEventListener("input", filterBeaches);
    element?.addEventListener("change", filterBeaches);
  });

  if (pageQuery.has("q") && searchInput) {
    searchInput.value = pageQuery.get("q") || "";
  }

  if (pageQuery.has("zone") && zoneFilter) {
    zoneFilter.value = pageQuery.get("zone") || "all";
  }

  if (pageQuery.has("type") && typeFilter) {
    typeFilter.value = pageQuery.get("type") || "all";
  }

  filterBeaches();
  initHeroCarousel();

  window.addEventListener("costa-brava-language-change", () => {
    filterBeaches();
    initHeroCarousel();
  });
})();
