// ===============================
// LOGIN SYSTEM
// ===============================

const USERS_KEY = "elearning_users";
const CURRENT_USER_KEY = "elearning_current_user";
const LOGIN_KEY = "elearning_login";
const GUEST_KEY = "elearning_guest";

function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function showMessage(message, type = "error") {
  const messageBox = document.getElementById("formMessage");

  if (!messageBox) return;

  messageBox.textContent = message;
  messageBox.className = `form-message ${type}`;
}

// =====================================
// REGISTER
// =====================================

const registerBtn = document.getElementById("showRegister");
const backLoginBtn = document.getElementById("backLogin");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

if (registerBtn) {
  registerBtn.addEventListener("click", function (e) {
    e.preventDefault();

    loginForm.style.display = "none";
    registerForm.style.display = "block";

    document.querySelector(".auth-title").textContent = "Buat akun baru";
    document.querySelector(".auth-subtitle").textContent =
      "Daftarkan akunmu untuk mulai belajar.";

    showMessage("");
  });
}

if (backLoginBtn) {
  backLoginBtn.addEventListener("click", function (e) {
    e.preventDefault();

    registerForm.style.display = "none";
    loginForm.style.display = "block";

    document.querySelector(".auth-title").textContent =
      "Selamat datang kembali";
    document.querySelector(".auth-subtitle").textContent =
      "Masuk untuk melanjutkan perjalanan belajarmu.";

    showMessage("");
  });
}

// =====================================
// REGISTER SUBMIT
// =====================================

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("registerName").value.trim();
    const username = document.getElementById("registerUsername").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value;

    if (!name || !username || !email || !password) {
      showMessage("Semua kolom wajib diisi.");
      return;
    }

    if (password.length < 6) {
      showMessage("Password minimal 6 karakter.");
      return;
    }

    const users = getUsers();

    const duplicate = users.find(
      (user) =>
        user.username.toLowerCase() === username.toLowerCase() ||
        user.email.toLowerCase() === email.toLowerCase(),
    );

    if (duplicate) {
      showMessage("Username atau email sudah digunakan.");
      return;
    }

    const newUser = {
      id: Date.now().toString(),
      name,
      username,
      email,
      password,
      role: "student",
    };

    users.push(newUser);

    saveUsers(users);

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));
    localStorage.setItem(LOGIN_KEY, "true");
    localStorage.setItem(GUEST_KEY, "false");

    // Setelah register → PILIH JENJANG
    window.location.href = "jenjang.html";
  });
}

// =====================================
// LOGIN SUBMIT
// =====================================

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const identity = document
      .getElementById("loginIdentity")
      .value.trim()
      .toLowerCase();

    const password = document.getElementById("loginPassword").value;

    const users = getUsers();

    const user = users.find(
      (item) =>
        (item.username.toLowerCase() === identity ||
          item.email.toLowerCase() === identity) &&
        item.password === password,
    );

    if (!user) {
      showMessage("Username/email atau password salah.");
      return;
    }

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    localStorage.setItem(LOGIN_KEY, "true");
    localStorage.setItem(GUEST_KEY, "false");

    // Setelah login → PILIH JENJANG
    window.location.href = "jenjang.html";
  });
}

// =====================================
// GUEST
// =====================================

const guestBtn = document.getElementById("guestLogin");

if (guestBtn) {
  guestBtn.addEventListener("click", function () {
    const guestUser = {
      id: "guest",
      name: "Tamu",
      username: "guest",
      email: "",
      role: "guest",
    };

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(guestUser));

    localStorage.setItem(LOGIN_KEY, "true");
    localStorage.setItem(GUEST_KEY, "true");

    // Guest juga pilih jenjang terlebih dahulu
    window.location.href = "jenjang.html";
  });
}

// =====================================
// SHOW / HIDE PASSWORD
// =====================================

document.querySelectorAll(".password-toggle").forEach((button) => {
  button.addEventListener("click", function () {
    const input = this.parentElement.querySelector("input");

    if (!input) return;

    if (input.type === "password") {
      input.type = "text";

      this.innerHTML = '<i data-feather="eye-off"></i>';
    } else {
      input.type = "password";

      this.innerHTML = '<i data-feather="eye"></i>';
    }

    feather.replace();
  });
});

// =====================================
// FORGOT PASSWORD
// =====================================

const forgotPassword = document.getElementById("forgotPassword");

if (forgotPassword) {
  forgotPassword.addEventListener("click", function (e) {
    e.preventDefault();

    showMessage("Reset password membutuhkan sistem server/database.", "info");
  });
}

feather.replace();
