/* =========================================
   LEARN-SPACE GLOBAL THEME
========================================= */

(function () {
  const THEME_KEY = "learnspace_theme";

  /* =====================================
     AMBIL TEMA TERSIMPAN
  ===================================== */

  let savedTheme = localStorage.getItem(THEME_KEY);

  if (savedTheme !== "dark" && savedTheme !== "light") {
    savedTheme = "light";
  }

  /* =====================================
     APPLY THEME
  ===================================== */

  function applyTheme(theme) {
    document.body.classList.toggle("dark-mode", theme === "dark");

    localStorage.setItem(THEME_KEY, theme);

    updateButton(theme);
  }

  /* =====================================
     UPDATE ICON
  ===================================== */

  function updateButton(theme) {
    const button = document.getElementById("themeToggle");

    if (!button) {
      return;
    }

    if (theme === "dark") {
      button.innerHTML = `<i data-feather="sun"></i>`;

      button.title = "Mode terang";

      button.setAttribute("aria-label", "Aktifkan mode terang");
    } else {
      button.innerHTML = `<i data-feather="moon"></i>`;

      button.title = "Mode gelap";

      button.setAttribute("aria-label", "Aktifkan mode gelap");
    }

    if (window.feather && typeof feather.replace === "function") {
      feather.replace();
    }
  }

  /* =====================================
     INIT
  ===================================== */

  function initTheme() {
    applyTheme(savedTheme);

    const button = document.getElementById("themeToggle");

    if (!button) {
      return;
    }

    button.addEventListener("click", function () {
      const isDark = document.body.classList.contains("dark-mode");

      applyTheme(isDark ? "light" : "dark");
    });
  }

  /* =====================================
     DOM READY
  ===================================== */

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTheme);
  } else {
    initTheme();
  }
})();
