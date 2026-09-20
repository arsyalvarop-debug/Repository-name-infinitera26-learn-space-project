const currentUser = JSON.parse(localStorage.getItem("elearning_current_user"));

const welcomeUser = document.getElementById("welcomeUser");

if (currentUser) {
  welcomeUser.textContent = `Halo, ${currentUser.name || "User"}`;
}

// =====================================
// SELECT LEVEL
// =====================================

document.querySelectorAll(".level-card").forEach((card) => {
  card.addEventListener("click", function () {
    const level = this.dataset.level;
    const classLevel = this.dataset.class;

    localStorage.setItem("elearning_selected_level", level);

    localStorage.setItem("elearning_selected_class", classLevel);

    // Masuk dashboard setelah memilih jenjang
    window.location.href = "dashboard.html";
  });
});

// =====================================
// LOGOUT
// =====================================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("elearning_current_user");
    localStorage.removeItem("elearning_login");
    localStorage.removeItem("elearning_guest");

    window.location.href = "login.html";
  });
}

feather.replace();
