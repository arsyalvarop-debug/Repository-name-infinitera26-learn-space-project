/* =========================================
   THEME SYNC
========================================= */

(function () {
  const savedTheme = localStorage.getItem("learnspace_theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  /* =========================================
     USER
  ========================================= */

  let currentUser = {};

  try {
    currentUser =
      JSON.parse(localStorage.getItem("elearning_current_user")) || {};
  } catch (error) {
    currentUser = {};
  }

  /* =========================================
     USER INFO
  ========================================= */

  const selectedLevel =
    localStorage.getItem("elearning_selected_level") || "SD";

  const selectedClass = localStorage.getItem("elearning_selected_class") || "1";

  /* =========================================
     ELEMENT
  ========================================= */

  const achievementGrid = document.getElementById("achievementGrid");

  const achievementCount = document.getElementById("achievementCount");

  const achievementInfo = document.getElementById("achievementInfo");

  const overallProgress = document.getElementById("overallProgress");

  const progressPercent = document.getElementById("progressPercent");

  const progressText = document.getElementById("progressText");

  const logoutBtn = document.getElementById("logoutBtn");

  /* =========================================
     FEATHER
  ========================================= */

  function refreshIcons() {
    if (window.feather) {
      feather.replace();
    }
  }

  /* =========================================
     GET PROGRESS
  ========================================= */

  function getProgress() {
    const userId = currentUser.id || "guest";

    const progressKey = `elearning_progress_${userId}_${selectedLevel}_${selectedClass}`;

    try {
      return JSON.parse(localStorage.getItem(progressKey)) || {};
    } catch (error) {
      return {};
    }
  }

  /* =========================================
     HITUNG PROGRESS
  ========================================= */

  const progress = getProgress();

  const values = Object.values(progress)
    .map(Number)
    .filter((value) => Number.isFinite(value));

  const totalProgress = values.length
    ? Math.round(
        values.reduce(
          (sum, value) => sum + Math.max(0, Math.min(100, value)),
          0,
        ) / values.length,
      )
    : 0;

  const completedSubjects = values.filter((value) => value >= 100).length;

  /* =========================================
     ACHIEVEMENT DATA
  ========================================= */

  const achievements = [
    {
      id: "first-login",

      title: "Langkah Pertama",

      description:
        "Berhasil masuk dan memulai perjalanan belajar di Learn-Space.",

      icon: "log-in",

      unlocked: Boolean(currentUser.id),
    },

    {
      id: "first-material",

      title: "Mulai Belajar",

      description: "Menyelesaikan progress belajar pertama.",

      icon: "book-open",

      unlocked: totalProgress > 0,
    },

    {
      id: "active-student",

      title: "Pelajar Aktif",

      description: "Mencapai progress belajar minimal 25%.",

      icon: "activity",

      unlocked: totalProgress >= 25,
    },

    {
      id: "half-way",

      title: "Setengah Jalan",

      description: "Mencapai progress belajar minimal 50%.",

      icon: "trending-up",

      unlocked: totalProgress >= 50,
    },

    {
      id: "almost-there",

      title: "Hampir Selesai",

      description: "Mencapai progress belajar minimal 75%.",

      icon: "target",

      unlocked: totalProgress >= 75,
    },

    {
      id: "course-master",

      title: "Ahli Materi",

      description: "Menyelesaikan seluruh progress pada satu mata pelajaran.",

      icon: "award",

      unlocked: completedSubjects >= 1,
    },

    {
      id: "three-courses",

      title: "Penjelajah Ilmu",

      description: "Menyelesaikan tiga mata pelajaran.",

      icon: "compass",

      unlocked: completedSubjects >= 3,
    },

    {
      id: "all-courses",

      title: "Juara Belajar",

      description: "Menyelesaikan seluruh mata pelajaran yang tersedia.",

      icon: "star",

      unlocked: completedSubjects >= values.length && values.length > 0,
    },
  ];

  /* =========================================
     RENDER
  ========================================= */

  function renderAchievements() {
    if (!achievementGrid) {
      return;
    }

    achievementGrid.innerHTML = "";

    const unlockedCount = achievements.filter((item) => item.unlocked).length;

    if (achievementCount) {
      achievementCount.textContent = unlockedCount;
    }

    if (achievementInfo) {
      achievementInfo.textContent = `${unlockedCount} dari ${achievements.length} terbuka`;
    }

    achievements.forEach((achievement) => {
      const card = document.createElement("article");

      card.className = "achievement-card";

      if (!achievement.unlocked) {
        card.classList.add("locked");
      }

      card.innerHTML = `
          <div class="achievement-icon">
            <i data-feather="${achievement.icon}"></i>
          </div>

          <span class="achievement-status">
            ${achievement.unlocked ? "TERBUKA" : "TERKUNCI"}
          </span>

          <h3>
            ${achievement.title}
          </h3>

          <p>
            ${achievement.description}
          </p>
        `;

      achievementGrid.appendChild(card);
    });

    refreshIcons();
  }

  /* =========================================
     PROGRESS UI
  ========================================= */

  if (progressPercent) {
    progressPercent.textContent = `${totalProgress}%`;
  }

  if (overallProgress) {
    overallProgress.style.width = `${totalProgress}%`;
  }

  if (progressText) {
    if (totalProgress === 0) {
      progressText.textContent =
        "Mulai belajar untuk mendapatkan pencapaian pertama.";
    } else if (totalProgress < 50) {
      progressText.textContent = "Perjalananmu baru dimulai. Tetap semangat!";
    } else if (totalProgress < 100) {
      progressText.textContent =
        "Bagus! Kamu sudah melewati setengah perjalanan.";
    } else {
      progressText.textContent =
        "Luar biasa! Semua progress belajar sudah selesai.";
    }
  }

  /* =========================================
     LOGOUT
  ========================================= */

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("elearning_current_user");

      localStorage.removeItem("elearning_login");

      localStorage.removeItem("elearning_guest");

      localStorage.removeItem("elearning_profile");

      window.location.href = "login.html";
    });
  }

  /* =========================================
     INIT
  ========================================= */

  renderAchievements();
  refreshIcons();
});
