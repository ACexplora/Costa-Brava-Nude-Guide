(function loadHomeScripts() {
  const current = document.currentScript;
  if (!current) {
    return;
  }

  const baseUrl = new URL("./", current.src);
  const scripts = ["app-data.js", "app-home.js"];

  function appendScript(index) {
    if (index >= scripts.length) {
      return;
    }

    const script = document.createElement("script");
    script.src = new URL(scripts[index], baseUrl).href;
    script.onload = () => appendScript(index + 1);
    document.body.appendChild(script);
  }

  appendScript(0);
})();
