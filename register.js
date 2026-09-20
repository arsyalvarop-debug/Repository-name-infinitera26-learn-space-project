document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");

  const fullNameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  const successMessage = document.getElementById("successMessage");

  const registerButton = document.getElementById("registerButton");

  if (window.feather) {
    feather.replace();
  }

  function showError(element, message) {
    element.textContent = message;
    element.classList.add("show");
  }

  function hideError(element) {
    element.textContent = "";
    element.classList.remove("show");
  }

  function getUsers() {
    try {
      const savedUsers = localStorage.getItem("elearning_users");

      if (!savedUsers) {
        return [];
      }

      const users = JSON.parse(savedUsers);

      return Array.isArray(users) ? users : [];
    } catch (error) {
      console.error("Gagal membaca data pengguna:", error);

      return [];
    }
  }

  function saveUsers(users) {
    localStorage.setItem("elearning_users", JSON.stringify(users));
  }

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    hideError(nameError);
    hideError(emailError);
    hideError(passwordError);
    hideError(confirmPasswordError);

    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    let valid = true;

    /* =========================
       VALIDASI NAMA
    ========================= */

    if (fullName.length < 2) {
      showError(nameError, "Nama minimal 2 karakter.");

      valid = false;
    }

    /* =========================
       VALIDASI EMAIL
    ========================= */

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      showError(emailError, "Masukkan alamat email yang valid.");

      valid = false;
    }

    /* =========================
       VALIDASI PASSWORD
    ========================= */

    if (password.length < 6) {
      showError(passwordError, "Password minimal 6 karakter.");

      valid = false;
    }

    /* =========================
       KONFIRMASI PASSWORD
    ========================= */

    if (password !== confirmPassword) {
      showError(confirmPasswordError, "Konfirmasi password tidak sama.");

      valid = false;
    }

    if (!valid) {
      return;
    }

    /* =========================
       AMBIL USERS
    ========================= */

    const users = getUsers();

    /* =========================
       CEK EMAIL
    ========================= */

    const existingUser = users.find(
      (user) => String(user.email || "").toLowerCase() === email,
    );

    if (existingUser) {
      showError(
        emailError,
        "Email tersebut sudah terdaftar. Gunakan email lain.",
      );

      return;
    }

    /* =========================
       BUAT USER BARU
    ========================= */

    const newUser = {
      id: Date.now().toString() + Math.random().toString(36).slice(2),

      name: fullName,
      fullname: fullName,

      email: email,

      password: password,

      level: "SD",
      class: "1",

      createdAt: new Date().toISOString(),
    };

    users.push(newUser);

    try {
      saveUsers(users);

      /* =========================
         SET USER AKTIF
      ========================= */

      const currentUser = {
        id: newUser.id,

        name: newUser.name,

        fullname: newUser.fullname,

        email: newUser.email,

        level: newUser.level,

        class: newUser.class,
      };

      localStorage.setItem(
        "elearning_current_user",
        JSON.stringify(currentUser),
      );

      localStorage.setItem("elearning_login", "true");

      localStorage.setItem("elearning_selected_level", "SD");

      localStorage.setItem("elearning_selected_class", "1");

      /* =========================
         PROFILE AWAL
      ========================= */

      const profileData = {
        fullName: newUser.name,

        email: newUser.email,

        phone: "",

        gender: "",

        birthDate: "",

        school: "",

        className: "1",

        level: "SD",

        address: "",

        bio: "",

        photo: "",
      };

      localStorage.setItem("elearning_profile", JSON.stringify(profileData));

      /* =========================
         SUCCESS
      ========================= */

      successMessage.classList.add("show");

      registerButton.disabled = true;

      registerButton.textContent = "Akun berhasil dibuat";

      registerForm.querySelectorAll("input").forEach((input) => {
        input.disabled = true;
      });

      /* =========================
         REDIRECT DASHBOARD
      ========================= */

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 900);
    } catch (error) {
      console.error("Gagal membuat akun:", error);

      alert("Akun gagal dibuat karena penyimpanan browser bermasalah.");
    }
  });
});
