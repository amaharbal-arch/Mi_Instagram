(function () {
  "use strict";

  const TARGET_URL = "https://www.instagram.com/mi_galeria2026/";
  let deferredPrompt = null;

  // 1. Registrar el Service Worker inmediatamente
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
      .then(reg => console.log("SW listo en Vercel:", reg.scope))
      .catch(err => console.warn("Error SW:", err));
  }

  // 2. Capturar el evento de instalación PWA de Android/Chrome
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Cambiar la interfaz para avisar que está lista para instalar
    const statusText = document.querySelector(".launcher-card p");
    if (statusText) {
      statusText.innerText = "¡App lista para instalar en tu inicio!";
    }
  });

  // 3. Redirigir SOLO si el usuario toca la tarjeta o después de darle tiempo al navegador
  document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".launcher-card");
    
    if (card) {
      card.style.cursor = "pointer";
      card.addEventListener("click", () => {
        // Si el navegador tiene lista la instalación, la lanza
        if (deferredPrompt) {
          deferredPrompt.prompt();
        } else {
          // Si no, abre Instagram
          window.location.href = TARGET_URL;
        }
      });
    }
  });
})();
