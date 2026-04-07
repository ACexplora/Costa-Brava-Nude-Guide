const SUPABASE_CDN_URL = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";

function getCommentStorageKey() {
  return `costa-brava-comments:${window.location.pathname}`;
}

function getBeachSlug() {
  const fileName = window.location.pathname.split("/").pop() || "";
  return fileName.replace(/\.html$/i, "");
}

function getConfigUrl() {
  return new URL("../supabase-comments-config.json", window.location.href);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function readLocalComments() {
  try {
    return JSON.parse(localStorage.getItem(getCommentStorageKey()) || "[]");
  } catch {
    return [];
  }
}

function writeLocalComments(comments) {
  localStorage.setItem(getCommentStorageKey(), JSON.stringify(comments));
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("ca-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function createCommentMarkup(comment) {
  const article = document.createElement("article");
  article.innerHTML = `
    <header>
      <strong>${escapeHtml(comment.name)}</strong>
      <span>${formatDate(comment.createdAt)}</span>
    </header>
    <p>${escapeHtml(comment.message)}</p>
  `;
  return article;
}

async function loadJsonConfig() {
  try {
    const response = await fetch(getConfigUrl(), { cache: "no-store" });
    if (!response.ok) {
      return null;
    }
    const config = await response.json();
    if (!config?.supabaseUrl || !config?.supabaseAnonKey) {
      return null;
    }
    if (String(config.supabaseUrl).includes("YOUR_") || String(config.supabaseAnonKey).includes("YOUR_")) {
      return null;
    }
    return config;
  } catch {
    return null;
  }
}

async function loadSupabaseClient() {
  if (window.supabase?.createClient) {
    return window.supabase;
  }

  await new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = SUPABASE_CDN_URL;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });

  return window.supabase;
}

async function createCommentStore() {
  const config = await loadJsonConfig();
  if (!config) {
    return {
      mode: "local",
      async list() {
        return readLocalComments();
      },
      async create(payload) {
        const comments = readLocalComments();
        comments.push(payload);
        writeLocalComments(comments);
      }
    };
  }

  try {
    const supabaseLib = await loadSupabaseClient();
    const client = supabaseLib.createClient(config.supabaseUrl, config.supabaseAnonKey);

    return {
      mode: "supabase",
      async list() {
        const { data, error } = await client
          .from("beach_comments")
          .select("name, message, created_at")
          .eq("beach_slug", getBeachSlug())
          .order("created_at", { ascending: false });

        if (error) {
          throw error;
        }

        return (data || []).map((item) => ({
          name: item.name,
          message: item.message,
          createdAt: item.created_at
        }));
      },
      async create(payload) {
        const { error } = await client.from("beach_comments").insert({
          beach_slug: getBeachSlug(),
          page_path: window.location.pathname,
          name: payload.name,
          message: payload.message
        });

        if (error) {
          throw error;
        }
      }
    };
  } catch {
    return {
      mode: "local",
      async list() {
        return readLocalComments();
      },
      async create(payload) {
        const comments = readLocalComments();
        comments.push(payload);
        writeLocalComments(comments);
      }
    };
  }
}

async function createCommentsSection() {
  const main = document.querySelector("body.detail-page main");
  const backLink = document.querySelector(".detail-back");
  if (!main || !backLink) {
    return;
  }

  const store = await createCommentStore();
  const beachName = document.querySelector(".detail-copy h1")?.textContent?.trim() || "aquesta platja";
  const section = document.createElement("section");
  section.className = "comments-section";
  section.innerHTML = `
    <p class="section-kicker">Comentaris</p>
    <h2>Experiencies a ${escapeHtml(beachName)}</h2>
    <p class="comments-intro">Comparteix impressions sobre l'ambient, l'acces o consells de visita.</p>
    <div class="comment-note">${store.mode === "supabase"
      ? "Comentaris publics actius amb Supabase."
      : "Mode local actiu: els comentaris es guarden nomes en aquest navegador fins que configuris Supabase."}
    </div>
    <form class="comment-form">
      <input type="text" name="name" placeholder="El teu nom" required>
      <textarea name="message" placeholder="Escriu un comentari sobre aquesta platja" required></textarea>
      <button class="button primary" type="submit">Publicar comentari</button>
    </form>
    <div class="comment-list"></div>
  `;

  backLink.before(section);

  const form = section.querySelector(".comment-form");
  const list = section.querySelector(".comment-list");
  const note = section.querySelector(".comment-note");

  async function renderComments() {
    list.innerHTML = "";

    try {
      const comments = await store.list();
      if (comments.length === 0) {
        const empty = document.createElement("p");
        empty.className = "comments-empty";
        empty.textContent = "Encara no hi ha comentaris per aquesta platja.";
        list.appendChild(empty);
        return;
      }

      comments.forEach((comment) => {
        list.appendChild(createCommentMarkup(comment));
      });
    } catch (error) {
      note.textContent = "No s'han pogut carregar els comentaris ara mateix.";
    }
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !message) {
      return;
    }

    const payload = {
      name,
      message,
      createdAt: new Date().toISOString()
    };

    try {
      await store.create(payload);
      form.reset();
      await renderComments();
    } catch (error) {
      note.textContent = "No s'ha pogut publicar el comentari. Revisa la configuracio de Supabase.";
    }
  });

  await renderComments();
}

createCommentsSection();
