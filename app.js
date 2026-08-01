(function () {
  "use strict";

  const TARGET_URL = "https://www.instagram.com/mi_galeria2026/";

  // Registrar Service Worker
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
      .then(reg => console.log("SW registrado en Vercel:", reg.scope))
      .catch(err => console.warn("Error en SW:", err));
  }

  // Redirección directa
  setTimeout(function () {
    window.location.replace(TARGET_URL);
  }, 200);
})();
