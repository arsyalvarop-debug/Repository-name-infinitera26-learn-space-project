/* =========================================
   THEME
========================================= */

(function () {
  const savedTheme = localStorage.getItem("learnspace_theme");

  document.body.classList.toggle("dark-mode", savedTheme === "dark");
})();

/* =========================================
   LEARN-SPACE PROFILE
========================================= */

function refreshIcons() {
  if (window.feather) {
    feather.replace();
  }
}

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

if (!currentUser || Object.keys(currentUser).length === 0) {
  window.location.href = "login.html";
}

/* =========================================
   ELEMENTS
========================================= */

const profileForm = document.getElementById("profileForm");

const fullName = document.getElementById("fullName");

const email = document.getElementById("email");

const phone = document.getElementById("phone");

const gender = document.getElementById("gender");

const birthDate = document.getElementById("birthDate");

const school = document.getElementById("school");

const className = document.getElementById("className");

const address = document.getElementById("address");

const bio = document.getElementById("bio");

const photoInput = document.getElementById("photoInput");

const resetBtn = document.getElementById("resetBtn");

const saveMessage = document.getElementById("saveMessage");

/* =========================================
   AVATAR
========================================= */

const profileAvatarText = document.getElementById("profileAvatarText");

const profileAvatarImage = document.getElementById("profileAvatarImage");

const sidebarAvatarText = document.getElementById("sidebarAvatarText");

const sidebarAvatarImage = document.getElementById("sidebarAvatarImage");

const sidebarName = document.getElementById("sidebarName");

const sidebarClass = document.getElementById("sidebarClass");

const profileHeroName = document.getElementById("profileHeroName");

const profileHeroClass = document.getElementById("profileHeroClass");

/* =========================================
   GET PROFILE
========================================= */

function getProfile() {
  try {
    return JSON.parse(localStorage.getItem("elearning_profile")) || {};
  } catch (error) {
    return {};
  }
}

/* =========================================
   SAVED PROFILE
========================================= */

let savedProfile = getProfile();

/* =========================================
   DEFAULT
========================================= */

const defaultName = currentUser.name || currentUser.fullname || "Siswa";

const defaultLevel =
  currentUser.level ||
  localStorage.getItem("elearning_selected_level") ||
  "SMK";

const defaultClass =
  currentUser.class || localStorage.getItem("elearning_selected_class") || "10";

/* =========================================
   LOAD FORM
========================================= */

function loadProfile() {
  savedProfile = getProfile();

  fullName.value = savedProfile.fullName || defaultName;

  email.value = savedProfile.email || currentUser.email || "";

  phone.value = savedProfile.phone || "";

  gender.value = savedProfile.gender || "";

  birthDate.value = savedProfile.birthDate || "";

  school.value = savedProfile.school || "";

  className.value = savedProfile.className || defaultClass;

  address.value = savedProfile.address || "";

  bio.value = savedProfile.bio || "";

  updateLevelButtons(savedProfile.level || defaultLevel);

  selectedPhoto = savedProfile.photo || "";

  updateProfilePreview();

  showPhoto(selectedPhoto);
}

/* =========================================
   LEVEL BUTTON
========================================= */

function updateLevelButtons(level) {
  document.querySelectorAll(".level-tag").forEach((button) => {
    button.classList.toggle("active", button.dataset.level === level);
  });
}

/* =========================================
   GET LEVEL
========================================= */

function getSelectedLevel() {
  const active = document.querySelector(".level-tag.active");

  return active ? active.dataset.level : defaultLevel;
}

/* =========================================
   PREVIEW
========================================= */

function updateProfilePreview() {
  const name = fullName.value.trim() || "Siswa";

  const level = getSelectedLevel();

  const kelas = className.value || defaultClass;

  if (profileHeroName) {
    profileHeroName.textContent = name;
  }

  if (profileHeroClass) {
    profileHeroClass.textContent = `${level} • Kelas ${kelas}`;
  }

  if (sidebarName) {
    sidebarName.textContent = name;
  }

  if (sidebarClass) {
    sidebarClass.textContent = `${level} • Kelas ${kelas}`;
  }

  const initial = name.charAt(0).toUpperCase();

  if (profileAvatarText) {
    profileAvatarText.textContent = initial;
  }

  if (sidebarAvatarText) {
    sidebarAvatarText.textContent = initial;
  }
}

/* =========================================
   LEVEL CLICK
========================================= */

document.querySelectorAll(".level-tag").forEach((button) => {
  button.addEventListener("click", () => {
    updateLevelButtons(button.dataset.level);

    updateProfilePreview();
  });
});

/* =========================================
   LIVE PREVIEW
========================================= */

fullName.addEventListener("input", updateProfilePreview);

className.addEventListener("change", updateProfilePreview);

/* =========================================
   PHOTO
========================================= */

let selectedPhoto = "";

/* =========================================
   SHOW PHOTO
========================================= */

function showPhoto(photo) {
  if (!photo) {
    if (profileAvatarImage) {
      profileAvatarImage.hidden = true;

      profileAvatarImage.removeAttribute("src");
    }

    if (sidebarAvatarImage) {
      sidebarAvatarImage.hidden = true;

      sidebarAvatarImage.removeAttribute("src");
    }

    if (profileAvatarText) {
      profileAvatarText.style.display = "block";
    }

    if (sidebarAvatarText) {
      sidebarAvatarText.style.display = "block";
    }

    return;
  }

  if (profileAvatarImage) {
    profileAvatarImage.src = photo;

    profileAvatarImage.hidden = false;
  }

  if (profileAvatarText) {
    profileAvatarText.style.display = "none";
  }

  if (sidebarAvatarImage) {
    sidebarAvatarImage.src = photo;

    sidebarAvatarImage.hidden = false;
  }

  if (sidebarAvatarText) {
    sidebarAvatarText.style.display = "none";
  }
}

/* =========================================
   PHOTO INPUT
   TIDAK ADA BATAS 2 MB
========================================= */

if (photoInput) {
  photoInput.addEventListener("change", (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      alert("File harus berupa gambar.");

      photoInput.value = "";

      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      selectedPhoto = reader.result;

      showPhoto(selectedPhoto);
    };

    reader.onerror = () => {
      alert("Foto gagal dibaca.");
    };

    reader.readAsDataURL(file);
  });
}

/* =========================================
   SAVE
========================================= */

if (profileForm) {
  profileForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const level = getSelectedLevel();

    const kelas = className.value || defaultClass;

    const profileData = {
      fullName: fullName.value.trim(),

      email: email.value.trim(),

      phone: phone.value.trim(),

      gender: gender.value,

      birthDate: birthDate.value,

      school: school.value.trim(),

      className: kelas,

      level: level,

      address: address.value.trim(),

      bio: bio.value.trim(),

      photo: selectedPhoto || "",
    };

    /* =============================
         SIMPAN PROFILE
      ============================= */

    try {
      localStorage.setItem("elearning_profile", JSON.stringify(profileData));
    } catch (error) {
      console.error("Gagal menyimpan profile:", error);

      alert(
        "Data profil terlalu besar untuk penyimpanan browser. Coba gunakan foto yang lebih kecil atau format JPG/WebP.",
      );

      return;
    }

    /* =============================
         UPDATE USER
      ============================= */

    currentUser.name = profileData.fullName;

    currentUser.fullname = profileData.fullName;

    currentUser.email = profileData.email;

    currentUser.level = profileData.level;

    currentUser.class = profileData.className;

    try {
      localStorage.setItem(
        "elearning_current_user",
        JSON.stringify(currentUser),
      );
    } catch (error) {
      console.error(error);
    }

    /* =============================
         UPDATE DASHBOARD
      ============================= */

    localStorage.setItem("elearning_selected_level", profileData.level);

    localStorage.setItem("elearning_selected_class", profileData.className);

    /* =============================
         UPDATE UI
      ============================= */

    savedProfile = profileData;

    selectedPhoto = profileData.photo;

    updateProfilePreview();

    showPhoto(selectedPhoto);

    showSaveMessage();
  });
}

/* =========================================
   SAVE MESSAGE
========================================= */

function showSaveMessage() {
  if (!saveMessage) {
    return;
  }

  saveMessage.classList.add("show");

  setTimeout(() => {
    saveMessage.classList.remove("show");
  }, 2500);
}

/* =========================================
   RESET
========================================= */

if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    const confirmed = confirm(
      "Kembalikan ke data profil terakhir yang tersimpan?",
    );

    if (!confirmed) {
      return;
    }

    loadProfile();
  });
}

/* =========================================
   INITIALIZE
========================================= */

loadProfile();

refreshIcons();
