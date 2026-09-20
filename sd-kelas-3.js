/* =========================================================
   LEARN-SPACE — SD KELAS 3
   SHARED MATERIAL SCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  function refreshIcons() {
    if (window.feather && typeof feather.replace === "function") {
      feather.replace();
    }
  }

  const body = document.body;
  const THEME_KEY = "learnspace_theme";
  const subject = body.dataset.subject || "Materi";
  const level = body.dataset.level || "SD";
  const grade = body.dataset.grade || "3";
  const progressKey = `elearning_progress_${getUserId()}_${level}_${grade}`;

  function getUserId() {
    try {
      const user = JSON.parse(localStorage.getItem("elearning_current_user"));
      return user?.id ?? "guest";
    } catch (error) {
      return "guest";
    }
  }

  function getProgress() {
    try {
      return JSON.parse(localStorage.getItem(progressKey)) || {};
    } catch (error) {
      return {};
    }
  }

  function saveProgress(progress) {
    localStorage.setItem(progressKey, JSON.stringify(progress));
  }

  function getTheme() {
    return localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
  }

  function updateThemeButton(theme) {
    const button = document.getElementById("materialThemeToggle");
    if (!button) return;

    if (theme === "dark") {
      button.innerHTML = '<i data-feather="sun"></i>';
      button.title = "Mode terang";
      button.setAttribute("aria-label", "Aktifkan mode terang");
    } else {
      button.innerHTML = '<i data-feather="moon"></i>';
      button.title = "Mode gelap";
      button.setAttribute("aria-label", "Aktifkan mode gelap");
    }

    refreshIcons();
  }

  function applyTheme(theme) {
    const isDark = theme === "dark";
    body.classList.toggle("dark-mode", isDark);
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
    updateThemeButton(isDark ? "dark" : "light");
  }

  function createThemeButton() {
    const topbar = document.querySelector(".lesson-topbar");
    if (!topbar || document.getElementById("materialThemeToggle")) return;

    const button = document.createElement("button");
    button.type = "button";
    button.id = "materialThemeToggle";
    button.className = "material-theme-toggle";
    topbar.appendChild(button);

    button.addEventListener("click", () => {
      const isDark = body.classList.contains("dark-mode");
      applyTheme(isDark ? "light" : "dark");
    });
  }

  function chapterProgress(chapter) {
    const progress = getProgress();
    return Number(progress[`${subject}::${chapter}`]) || 0;
  }

  function setChapterProgress(chapter, value) {
    const progress = getProgress();
    progress[`${subject}::${chapter}`] = value;
    progress[subject] = Math.max(
      0,
      Math.min(100, Math.round((getCompletedCount(progress) / totalChapters) * 100))
    );
    saveProgress(progress);
    return progress[subject];
  }

  const chapterSections = [...document.querySelectorAll(".chapter-section")];
  const totalChapters = chapterSections.length || 1;

  function getCompletedCount(progress = getProgress()) {
    return chapterSections.filter((_, index) => progress[`${subject}::${index + 1}`] >= 100).length;
  }

  function updateCompletionUI() {
    const progress = getProgress();

    document.querySelectorAll(".complete-chapter").forEach((button) => {
      const chapter = Number(button.dataset.chapter);
      const done = progress[`${subject}::${chapter}`] >= 100;
      button.classList.toggle("completed", done);
      button.innerHTML = done
        ? '<i data-feather="check-circle"></i> Bab selesai'
        : '<i data-feather="check"></i> Bab selesai';

      const note = button.closest(".finish-card")?.querySelector(".completion-note");
      if (note) {
        note.textContent = done
          ? "Progress bab ini sudah tersimpan."
          : "Progress belum berubah sebelum tombol ditekan.";
      }
    });

    const overall = progress[subject] || 0;
    document.querySelectorAll("[data-overall-progress]").forEach((el) => {
      el.textContent = `${overall}%`;
    });

    refreshIcons();
  }

  document.querySelectorAll(".complete-chapter").forEach((button) => {
    button.addEventListener("click", () => {
      const chapter = Number(button.dataset.chapter);
      const progress = getProgress();
      const current = progress[`${subject}::${chapter}`] || 0;
      const next = current >= 100 ? 0 : 100;
      const overall = setChapterProgress(chapter, next);

      const note = button.closest(".finish-card")?.querySelector(".completion-note");
      if (note) {
        note.textContent = next >= 100
          ? `Bab ${chapter} selesai. Progress ${subject}: ${overall}%.`
          : "Progress bab ini dibatalkan.";
      }

      updateCompletionUI();
    });
  });

  document.querySelectorAll(".chapter-link").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".chapter-link").forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        document.querySelectorAll(".chapter-link").forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      });
    }, {
      threshold: 0.2,
      rootMargin: "-90px 0px -50% 0px",
    });

    chapterSections.forEach((section) => observer.observe(section));
  }

  window.addEventListener("storage", (event) => {
    if (event.key === THEME_KEY) {
      applyTheme(event.newValue === "dark" ? "dark" : "light");
    }
  });

  createThemeButton();
  applyTheme(getTheme());
  updateCompletionUI();
  refreshIcons();
});
