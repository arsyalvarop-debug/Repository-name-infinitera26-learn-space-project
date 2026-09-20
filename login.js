document.addEventListener("DOMContentLoaded", () => {
  /* =========================================
     ELEMENT
  ========================================= */

  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  const showRegister = document.getElementById("showRegister");
  const backToLogin = document.getElementById("backToLogin");

  const loginIdentity = document.getElementById("loginIdentity");
  const loginPassword = document.getElementById("loginPassword");

  const registerName = document.getElementById("registerName");
  const registerUsername = document.getElementById("registerUsername");
  const registerEmail = document.getElementById("registerEmail");
  const registerPassword = document.getElementById("registerPassword");

  const toggleLoginPassword = document.getElementById("toggleLoginPassword");

  const toggleRegisterPassword = document.getElementById(
    "toggleRegisterPassword",
  );

  const loginMessage = document.getElementById("loginMessage");

  const guestButton = document.getElementById("guestButton");

  const forgotPassword = document.getElementById("forgotPassword");

  const rememberMe = document.getElementById("rememberMe");

  /* =========================================
     FEATHER
  ========================================= */

  function refreshIcons() {
    if (window.feather) {
      feather.replace();
    }
  }

  refreshIcons();

  /* =========================================
     MESSAGE
  ========================================= */

  function showMessage(message, type = "error") {
    if (!loginMessage) {
      return;
    }

    loginMessage.textContent = message;

    loginMessage.classList.remove("success", "error", "show");

    loginMessage.classList.add(type, "show");
  }

  function clearMessage() {
    if (!loginMessage) {
      return;
    }

    loginMessage.textContent = "";

    loginMessage.classList.remove("success", "error", "show");
  }

  /* =========================================
     LOCAL STORAGE
  ========================================= */

  function getUsers() {
    try {
      const data = localStorage.getItem("elearning_users");

      if (!data) {
        return [];
      }

      const users = JSON.parse(data);

      return Array.isArray(users) ? users : [];
    } catch (error) {
      console.error("Gagal membaca data pengguna:", error);

      return [];
    }
  }

  function saveUsers(users) {
    localStorage.setItem("elearning_users", JSON.stringify(users));
  }

  /* =========================================
     JENJANG DARI URL
  ========================================= */

  const params = new URLSearchParams(window.location.search);

  const requestedLevel = params.get("jenjang");

  let defaultLevel = "SD";

  if (
    requestedLevel === "SD" ||
    requestedLevel === "SMP" ||
    requestedLevel === "SMA" ||
    requestedLevel === "SMK"
  ) {
    defaultLevel = requestedLevel;
  }

  /* =========================================
     SWITCH LOGIN / REGISTER
  ========================================= */

  function openRegister() {
    clearMessage();

    if (loginForm) {
      loginForm.classList.add("hidden");
    }

    if (registerForm) {
      registerForm.classList.remove("hidden");
    }

    if (showRegister) {
      showRegister.parentElement.style.display = "none";
    }

    if (registerName) {
      registerName.focus();
    }

    refreshIcons();
  }

  function openLogin() {
    clearMessage();

    if (registerForm) {
      registerForm.classList.add("hidden");
    }

    if (loginForm) {
      loginForm.classList.remove("hidden");
    }

    if (showRegister) {
      showRegister.parentElement.style.display = "";
    }

    if (loginIdentity) {
      loginIdentity.focus();
    }

    refreshIcons();
  }

  if (showRegister) {
    showRegister.addEventListener("click", openRegister);
  }

  if (backToLogin) {
    backToLogin.addEventListener("click", openLogin);
  }

  /* =========================================
     PASSWORD TOGGLE
  ========================================= */

  function setupPasswordToggle(button, input) {
    if (!button || !input) {
      return;
    }

    button.addEventListener("click", () => {
      const isPassword = input.type === "password";

      input.type = isPassword ? "text" : "password";

      button.setAttribute(
        "aria-label",
        isPassword ? "Sembunyikan password" : "Tampilkan password",
      );

      const icon = button.querySelector("svg");

      if (icon) {
        button.innerHTML = isPassword
          ? '<i data-feather="eye-off"></i>'
          : '<i data-feather="eye"></i>';
      }

      refreshIcons();
    });
  }

  setupPasswordToggle(toggleLoginPassword, loginPassword);

  setupPasswordToggle(toggleRegisterPassword, registerPassword);

  /* =========================================
     LOGIN
  ========================================= */

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      clearMessage();

      const identity = loginIdentity.value.trim();

      const password = loginPassword.value;

      if (!identity || !password) {
        showMessage("Username/email dan password wajib diisi.", "error");

        return;
      }

      const users = getUsers();

      const user = users.find((item) => {
        const username = String(item.username || "").toLowerCase();

        const email = String(item.email || "").toLowerCase();

        const input = identity.toLowerCase();

        return username === input || email === input;
      });

      if (!user) {
        showMessage(
          "Akun tidak ditemukan. Silakan buat akun terlebih dahulu.",
          "error",
        );

        return;
      }

      if (String(user.password || "") !== password) {
        showMessage("Password yang kamu masukkan salah.", "error");

        return;
      }

      /* =========================
           USER AKTIF
        ========================= */

      const currentUser = {
        id: user.id,
        name: user.name,
        fullname: user.fullname || user.name,
        username: user.username || "",
        email: user.email || "",
        level: user.level || defaultLevel,
        class: user.class || "1",
      };

      localStorage.setItem(
        "elearning_current_user",
        JSON.stringify(currentUser),
      );

      localStorage.setItem("elearning_login", "true");

      localStorage.removeItem("elearning_guest");

      /* =========================
           JENJANG
        ========================= */

      const userLevel = currentUser.level || defaultLevel;

      const userClass = currentUser.class || (userLevel === "SMP" ? "7" : "1");

      localStorage.setItem("elearning_selected_level", userLevel);

      localStorage.setItem("elearning_selected_class", userClass);

      /* =========================
           REMEMBER ME
        ========================= */

      if (rememberMe && rememberMe.checked) {
        localStorage.setItem("elearning_remember", "true");
      } else {
        localStorage.removeItem("elearning_remember");
      }

      showMessage("Login berhasil. Mengarahkan ke dashboard...", "success");

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 700);
    });
  }

  /* =========================================
     REGISTER
  ========================================= */

  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();

      clearMessage();

      const name = registerName.value.trim();

      const username = registerUsername.value.trim().toLowerCase();

      const email = registerEmail.value.trim().toLowerCase();

      const password = registerPassword.value;

      /* =========================
           VALIDASI
        ========================= */

      if (name.length < 2) {
        alert("Nama minimal 2 karakter.");

        return;
      }

      if (username.length < 3) {
        alert("Username minimal 3 karakter.");

        return;
      }

      const usernamePattern = /^[a-zA-Z0-9._-]+$/;

      if (!usernamePattern.test(username)) {
        alert(
          "Username hanya boleh menggunakan huruf, angka, titik, garis bawah, atau tanda minus.",
        );

        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {
        alert("Masukkan email yang valid.");

        return;
      }

      if (password.length < 6) {
        alert("Password minimal 6 karakter.");

        return;
      }

      /* =========================
           CEK AKUN
        ========================= */

      const users = getUsers();

      const usernameExists = users.some(
        (user) => String(user.username || "").toLowerCase() === username,
      );

      if (usernameExists) {
        alert("Username sudah digunakan. Silakan pilih username lain.");

        return;
      }

      const emailExists = users.some(
        (user) => String(user.email || "").toLowerCase() === email,
      );

      if (emailExists) {
        alert("Email sudah terdaftar. Silakan gunakan email lain.");

        return;
      }

      /* =========================
           DEFAULT KELAS
        ========================= */

      let defaultClass = "1";

      if (defaultLevel === "SMP") {
        defaultClass = "7";
      }

      if (defaultLevel === "SMA" || defaultLevel === "SMK") {
        defaultClass = "10";
      }

      /* =========================
           USER BARU
        ========================= */

      const newUser = {
        id: Date.now().toString() + Math.random().toString(36).substring(2),

        name: name,

        fullname: name,

        username: username,

        email: email,

        password: password,

        level: defaultLevel,

        class: defaultClass,

        createdAt: new Date().toISOString(),
      };

      users.push(newUser);

      try {
        saveUsers(users);

        /* =========================
             SET CURRENT USER
          ========================= */

        const currentUser = {
          id: newUser.id,
          name: newUser.name,
          fullname: newUser.fullname,
          username: newUser.username,
          email: newUser.email,
          level: newUser.level,
          class: newUser.class,
        };

        localStorage.setItem(
          "elearning_current_user",
          JSON.stringify(currentUser),
        );

        localStorage.setItem("elearning_login", "true");

        localStorage.removeItem("elearning_guest");

        /* =========================
             LEVEL & CLASS
          ========================= */

        localStorage.setItem("elearning_selected_level", defaultLevel);

        localStorage.setItem("elearning_selected_class", defaultClass);

        /* =========================
             PROFILE AWAL
          ========================= */

        const profileData = {
          fullName: name,
          email: email,
          phone: "",
          gender: "",
          birthDate: "",
          school: "",
          className: defaultClass,
          level: defaultLevel,
          address: "",
          bio: "",
          photo: "",
        };

        localStorage.setItem("elearning_profile", JSON.stringify(profileData));

        /* =========================
             BERHASIL
          ========================= */

        showMessage(
          "Akun berhasil dibuat. Mengarahkan ke dashboard...",
          "success",
        );

        registerForm.querySelectorAll("input").forEach((input) => {
          input.disabled = true;
        });

        const submitButton = registerForm.querySelector(
          'button[type="submit"]',
        );

        if (submitButton) {
          submitButton.disabled = true;

          submitButton.querySelector("span").textContent = "Berhasil dibuat";
        }

        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 900);
      } catch (error) {
        console.error("Gagal menyimpan akun:", error);

        alert("Akun gagal dibuat karena penyimpanan browser bermasalah.");
      }
    });
  }

  /* =========================================
     GUEST
  ========================================= */

  if (guestButton) {
    guestButton.addEventListener("click", () => {
      clearMessage();

      const guestUser = {
        id: "guest",
        name: "Tamu",
        fullname: "Tamu",
        username: "guest",
        email: "",
        level: defaultLevel,
        class:
          defaultLevel === "SMP"
            ? "7"
            : defaultLevel === "SMA" || defaultLevel === "SMK"
              ? "10"
              : "1",
      };

      localStorage.setItem("elearning_current_user", JSON.stringify(guestUser));

      localStorage.setItem("elearning_login", "true");

      localStorage.setItem("elearning_guest", "true");

      localStorage.setItem("elearning_selected_level", guestUser.level);

      localStorage.setItem("elearning_selected_class", guestUser.class);

      window.location.href = "dashboard.html";
    });
  }

  /* =========================================
     FORGOT PASSWORD
  ========================================= */

  if (forgotPassword) {
    forgotPassword.addEventListener("click", (event) => {
      event.preventDefault();

      alert("Fitur lupa password belum tersedia pada versi demo Learn-Space.");
    });
  }

  /* =========================================
     ENTER / ESCAPE
  ========================================= */

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      registerForm &&
      !registerForm.classList.contains("hidden")
    ) {
      openLogin();
    }
  });
});
