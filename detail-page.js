function textOf(selector) {
  return document.querySelector(selector)?.textContent?.trim() || "";
}

function listText(selector) {
  return Array.from(document.querySelectorAll(selector)).map((item) => item.textContent.trim()).filter(Boolean);
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

function buildDetailInsights() {
  const main = document.querySelector("body.detail-page main");
  const detailContent = document.querySelector(".detail-content");
  if (!main || !detailContent) {
    return;
  }

  const beachName = textOf(".detail-copy h1");
  const location = listText(".detail-meta li")[0] || "Ubicacio per completar";
  const access = listText(".detail-meta li")[1] || "Acces per confirmar";
  const style = listText(".detail-meta li")[2] || "Ambient per confirmar";
  const highlights = listText(".detail-highlights li");
  const intro = textOf(".detail-intro");
  const idealFor = textOf(".detail-aside-card p:last-child");

  const section = document.createElement("section");
  section.className = "detail-insights";

  const snapshotGrid = document.createElement("div");
  snapshotGrid.className = "snapshot-grid";
  snapshotGrid.appendChild(createSnapshot("Ubicacio", location));
  snapshotGrid.appendChild(createSnapshot("Acces", access));
  snapshotGrid.appendChild(createSnapshot("Ambient", style));
  snapshotGrid.appendChild(createSnapshot("Ideal per", idealFor || `Visitar ${beachName} amb una expectativa clara del tipus d'experiencia.`));

  const insightsGrid = document.createElement("div");
  insightsGrid.className = "insights-grid";
  insightsGrid.appendChild(createCard(
    "El millor",
    `Aquesta fitxa posa en valor el caracter del lloc i els elements que la fan especial dins del directori.`,
    highlights.length ? highlights : ["Entorn natural", "Experiencia local", "Bona candidata per ampliar la guia"]
  ));
  insightsGrid.appendChild(createCard(
    "A tenir en compte",
    `Com en moltes cales i platges d'aquest directori, abans de sortir convé revisar l'acces real, l'afluencia segons temporada i si cal portar aigua o calcat adequat.`,
    [
      "Revisar l'acces abans de la visita",
      "Comprovar estat del mar i del temps",
      "Tenir en compte temporada alta i afluencia"
    ]
  ));
  insightsGrid.appendChild(createCard(
    "Ambient i perfil",
    intro || `Una platja pensada per a usuaris que volen mes context abans de decidir on anar.`,
    [
      `Tipus d'experiencia: ${style || "Per confirmar"}`,
      `Referencies rapides: ${highlights.slice(0, 3).join(", ") || "pendent d'afinar"}`
    ]
  ));
  insightsGrid.appendChild(createCard(
    "Com arribar-hi",
    `La fitxa manté un enfocament editorial i prudent: no pressuposa una ruta exacta si no la tenim confirmada, pero si et dona context per preparar millor la visita.`,
    [
      `Punt base actual: ${location}`,
      `Indicacio d'acces: ${access}`,
      "Val la pena afegir una ruta precisa en una seguent iteracio"
    ]
  ));

  section.appendChild(snapshotGrid);
  section.appendChild(insightsGrid);
  detailContent.after(section);
}

buildDetailInsights();
