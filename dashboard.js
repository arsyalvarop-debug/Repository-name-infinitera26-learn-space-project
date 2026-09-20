  /* =========================================
    LEARN-SPACE DASHBOARD
    FULL VERSION
    SD • SMP • SMA • SMK
  ========================================= */

  /* =========================================
    HELPER
  ========================================= */

  function refreshIcons() {
    if (window.feather) {
      feather.replace();
    }
  }

  function normalizeText(text) {
    return String(text || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function escapeHTML(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function refreshIcons() {
    if (window.feather) {
      feather.replace();
    }
  }

  function normalizeText(text) {
    return String(text || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function escapeHTML(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /* =========================================
    DARK / LIGHT MODE
  ========================================= */

  (function () {
    const THEME_KEY = "learnspace_theme";

    const themeToggle = document.getElementById("themeToggle");

    /* =====================================
      GET SAVED THEME
    ===================================== */

    let savedTheme = localStorage.getItem(THEME_KEY);

    if (savedTheme !== "dark" && savedTheme !== "light") {
      savedTheme = "light";
    }

    /* =====================================
      APPLY THEME
    ===================================== */

    function applyTheme(theme) {
      const dark = theme === "dark";

      document.body.classList.toggle("dark-mode", dark);

      document.documentElement.setAttribute(
        "data-theme",
        dark ? "dark" : "light",
      );

      localStorage.setItem(THEME_KEY, dark ? "dark" : "light");

      updateThemeButton(dark ? "dark" : "light");
    }

    /* =====================================
      ICON TOMBOL
    ===================================== */

    function updateThemeButton(theme) {
      if (!themeToggle) {
        return;
      }

      if (theme === "dark") {
        themeToggle.innerHTML = `
          <i data-feather="sun"></i>
        `;

        themeToggle.setAttribute("title", "Mode terang");

        themeToggle.setAttribute("aria-label", "Aktifkan mode terang");
      } else {
        themeToggle.innerHTML = `
          <i data-feather="moon"></i>
        `;

        themeToggle.setAttribute("title", "Mode gelap");

        themeToggle.setAttribute("aria-label", "Aktifkan mode gelap");
      }

      if (window.feather && typeof feather.replace === "function") {
        feather.replace();
      }
    }

    /* =====================================
      BUTTON CLICK
    ===================================== */

    if (themeToggle) {
      themeToggle.addEventListener("click", function (event) {
        event.preventDefault();

        event.stopPropagation();

        const isDark = document.body.classList.contains("dark-mode");

        applyTheme(isDark ? "light" : "dark");
      });
    }

    /* =====================================
      APPLY SAAT DASHBOARD DIBUKA
    ===================================== */

    applyTheme(savedTheme);
  })();

  /* =========================================
    USER
  ========================================= */

  let currentUser = null;

  try {
    currentUser = JSON.parse(localStorage.getItem("elearning_current_user"));
  } catch (error) {
    currentUser = null;
  }

  if (!currentUser) {
    window.location.href = "login.html";
  }

  /* =========================================
    LEVEL & KELAS
  ========================================= */

  const levelClasses = {
    SD: ["1", "2", "3", "4", "5", "6"],
    SMP: ["7", "8", "9"],
    SMA: ["10", "11", "12"],
    SMK: ["10", "11", "12"],
  };

  const defaultClass = {
    SD: "1",
    SMP: "7",
    SMA: "10",
    SMK: "10",
  };

  /* =========================================
    AMBIL JENJANG TERSIMPAN
  ========================================= */

  let selectedLevel = localStorage.getItem("elearning_selected_level");

  if (!selectedLevel || !levelClasses[selectedLevel]) {
    selectedLevel = "SD";

    localStorage.setItem("elearning_selected_level", selectedLevel);
  }

  /* =========================================
    AMBIL KELAS TERSIMPAN
  ========================================= */

  let selectedClass = localStorage.getItem("elearning_selected_class");

  if (!selectedClass || !levelClasses[selectedLevel].includes(selectedClass)) {
    selectedClass = defaultClass[selectedLevel];

    localStorage.setItem("elearning_selected_class", selectedClass);
  }

  /* =========================================
    ELEMENTS
  ========================================= */

  const userName = document.getElementById("userName");

  const profileName = document.getElementById("profileName");

  const profileClass = document.getElementById("profileClass");

  const welcomeName = document.getElementById("welcomeName");

  const currentLevelText = document.getElementById("currentLevelText");

  const avatarText = document.getElementById("avatarText");

  const educationText = document.getElementById("educationText");

  const courseGrid = document.getElementById("courseGrid");

  const lessonList = document.getElementById("lessonList");

  const courseCount = document.getElementById("courseCount");

  const completedCount = document.getElementById("completedCount");

  const assignmentCount = document.getElementById("assignmentCount");

  const searchInput = document.getElementById("searchInput");

  const searchResultInfo = document.getElementById("searchResultInfo");

  const courseEmpty = document.getElementById("courseEmpty");

  const lessonEmpty = document.getElementById("lessonEmpty");

  /* =========================================
    MATERIAL DATABASE
  ========================================= */

  const materials = {
    /* =======================================
      SD
    ======================================= */

    SD: {
      subjects: [
        {
          name: "Matematika",
          description:
            "Bilangan, operasi hitung, geometri, dan pemecahan masalah.",
          icon: "triangle",
          color: "blue",
          topics: ["Bilangan", "Operasi Hitung", "Pecahan", "Geometri", "Data"],
        },

        {
          name: "Bahasa Indonesia",
          description: "Membaca, menulis, memahami teks, dan berkomunikasi.",
          icon: "book-open",
          color: "pink",
          topics: ["Membaca", "Menulis", "Teks", "Kosakata", "Komunikasi"],
        },

        {
          name: "IPAS",
          description:
            "Mengenal alam, lingkungan, makhluk hidup, dan kehidupan sosial.",
          icon: "globe",
          color: "green",
          topics: ["Makhluk Hidup", "Lingkungan", "Energi", "Masyarakat", "Bumi"],
        },

        {
          name: "Bahasa Inggris",
          description: "Kosakata, percakapan, membaca, dan komunikasi dasar.",
          icon: "message-circle",
          color: "purple",
          topics: [
            "Vocabulary",
            "Greeting",
            "Conversation",
            "Reading",
            "Writing",
          ],
        },

        {
          name: "PABP",
          description:
            "Pendidikan agama dan budi pekerti dalam kehidupan sehari-hari.",
          icon: "heart",
          color: "orange",
          topics: ["Keimanan", "Ibadah", "Akhlak", "Toleransi", "Karakter"],
        },

        {
          name: "PKN",
          description:
            "Pancasila, kewarganegaraan, aturan, hak, dan tanggung jawab.",
          icon: "flag",
          color: "red",
          topics: [
            "Pancasila",
            "Hak dan Kewajiban",
            "Aturan",
            "Persatuan",
            "Kewarganegaraan",
          ],
        },

        {
          name: "Seni Budaya",
          description: "Seni rupa, musik, tari, dan ekspresi budaya Indonesia.",
          icon: "music",
          color: "purple",
          topics: ["Seni Rupa", "Seni Musik", "Seni Tari", "Budaya"],
        },

        {
          name: "Koding & AI",
          description:
            "Pengenalan logika pemrograman, teknologi, dan kecerdasan artifisial.",
          icon: "code",
          color: "blue",
          topics: ["Algoritma", "Logika", "Koding", "Teknologi", "AI"],
        },

        {
          name: "Muatan Lokal",
          description: "Pembelajaran yang disesuaikan dengan budaya daerah.",
          icon: "map",
          color: "green",
          topics: ["Bahasa Daerah", "Budaya Lokal", "Kearifan Lokal"],
        },
      ],

      lessons: [
        "Bilangan dan Operasi Hitung",
        "Membaca dan Memahami Teks",
        "Makhluk Hidup dan Lingkungannya",
        "Kosakata Bahasa Inggris",
        "Budi Pekerti",
        "Pancasila",
        "Seni dan Budaya",
        "Pengenalan Koding & AI",
      ],
    },

    /* =======================================
      SMP
    ======================================= */

    SMP: {
      7: {
        subjects: [
          {
            name: "Matematika",
            description:
              "Bilangan, aljabar, persamaan, perbandingan, geometri, dan data.",
            icon: "triangle",
            color: "blue",
            topics: [
              "Bilangan Bulat dan Rasional",
              "Aljabar Dasar",
              "PLSV dan PtLSV",
              "Perbandingan",
              "Geometri",
              "Penyajian Data",
            ],
          },

          {
            name: "Bahasa Indonesia",
            description:
              "Teks deskripsi, fantasi, prosedur, observasi, dan ulasan.",
            icon: "book-open",
            color: "pink",
            topics: [
              "Teks Deskripsi",
              "Teks Fantasi",
              "Teks Prosedur",
              "Laporan Observasi",
              "Teks Ulasan",
            ],
          },

          {
            name: "IPA",
            description: "Sains, zat, suhu, kalor, gaya, gerak, dan ekosistem.",
            icon: "activity",
            color: "green",
            topics: [
              "Hakikat Sains",
              "Pengukuran",
              "Zat",
              "Suhu dan Kalor",
              "Gaya dan Gerak",
              "Ekosistem",
            ],
          },

          {
            name: "IPS",
            description: "Kehidupan sosial, ekonomi, masyarakat, dan sejarah.",
            icon: "globe",
            color: "orange",
            topics: [
              "Interaksi Sosial",
              "Keberagaman",
              "Ekonomi",
              "Lingkungan",
              "Sejarah Lokal",
            ],
          },

          {
            name: "Sejarah",
            description:
              "Pra-aksara, Hindu-Buddha, kerajaan Nusantara, dan Islam.",
            icon: "clock",
            color: "red",
            topics: ["Pra-Aksara", "Hindu-Buddha", "Kerajaan Nusantara", "Islam"],
          },

          {
            name: "Bahasa Inggris",
            description:
              "Greetings, about me, food, home, school, dan digital stories.",
            icon: "message-circle",
            color: "purple",
            topics: [
              "About Me",
              "Culinary",
              "Home",
              "School Activities",
              "Digital Stories",
            ],
          },

          {
            name: "Pendidikan Pancasila",
            description: "Pancasila, norma, keberagaman, dan NKRI.",
            icon: "flag",
            color: "red",
            topics: ["Pancasila", "Norma", "Keberagaman", "NKRI"],
          },

          {
            name: "Informatika",
            description:
              "Berpikir komputasional, TIK, jaringan, algoritma, dan etika.",
            icon: "code",
            color: "blue",
            topics: [
              "Computational Thinking",
              "TIK",
              "Sistem Komputer",
              "Jaringan",
              "Algoritma",
              "Etika Digital",
            ],
          },

          {
            name: "PJOK",
            description:
              "Permainan bola, atletik, bela diri, renang, dan kebugaran.",
            icon: "activity",
            color: "green",
            topics: [
              "Bola Besar",
              "Bola Kecil",
              "Atletik",
              "Pencak Silat",
              "Renang",
              "Kebugaran",
            ],
          },
        ],

        lessons: [
          "Bilangan Bulat",
          "Teks Deskripsi",
          "Pengukuran",
          "Interaksi Sosial",
          "Pra-Aksara",
          "About Me",
          "Pancasila",
          "Berpikir Komputasional",
        ],
      },

      8: {
        subjects: [
          {
            name: "Matematika",
            description:
              "Aljabar lanjut, SPLDV, fungsi linear, Pythagoras, statistika, dan peluang.",
            icon: "triangle",
            color: "blue",
            topics: [
              "Aljabar Lanjut",
              "SPLDV",
              "Fungsi Linear",
              "Pythagoras",
              "Statistika",
              "Peluang",
            ],
          },

          {
            name: "Bahasa Indonesia",
            description: "Puisi, eksplanasi, iklan, resensi, dan diskusi.",
            icon: "book-open",
            color: "pink",
            topics: [
              "Puisi",
              "Eksplanasi",
              "Iklan",
              "Slogan",
              "Resensi",
              "Diskusi",
            ],
          },

          {
            name: "IPA",
            description:
              "Sel, organ tubuh, usaha, tekanan, gelombang, cahaya, dan zat.",
            icon: "activity",
            color: "green",
            topics: [
              "Sel",
              "Sistem Organ",
              "Usaha",
              "Tekanan",
              "Gelombang",
              "Cahaya",
            ],
          },

          {
            name: "IPS",
            description:
              "Keragaman alam, mobilitas, kolonialisme, ekonomi, dan pergerakan nasional.",
            icon: "globe",
            color: "orange",
            topics: [
              "Keragaman",
              "Mobilitas Sosial",
              "Kolonialisme",
              "Ekonomi",
              "Pergerakan Nasional",
            ],
          },

          {
            name: "Sejarah",
            description:
              "Bangsa Barat, perlawanan daerah, penjajahan, Jepang, dan nasionalisme.",
            icon: "clock",
            color: "red",
            topics: [
              "Bangsa Barat",
              "VOC",
              "Perlawanan Daerah",
              "Sumpah Pemuda",
              "Jepang",
            ],
          },

          {
            name: "Bahasa Inggris",
            description:
              "Recount, narrative, environment, past-present, dan digital literacy.",
            icon: "message-circle",
            color: "purple",
            topics: [
              "Recount",
              "Narrative",
              "Environment",
              "Past and Present",
              "Digital Literacy",
            ],
          },

          {
            name: "Pendidikan Pancasila",
            description: "Pancasila, UUD, peraturan, Sumpah Pemuda, dan budaya.",
            icon: "flag",
            color: "red",
            topics: ["Pancasila", "UUD", "Peraturan", "Sumpah Pemuda", "Budaya"],
          },

          {
            name: "Informatika",
            description:
              "Data, spreadsheet, jaringan, pemrograman, dan proyek digital.",
            icon: "code",
            color: "blue",
            topics: [
              "Spreadsheet",
              "Jaringan",
              "Pemrograman",
              "Data",
              "Proyek Digital",
            ],
          },

          {
            name: "PJOK",
            description:
              "Permainan, atletik, bela diri, senam, aktivitas air, dan kebugaran.",
            icon: "activity",
            color: "green",
            topics: [
              "Bola Besar",
              "Bola Kecil",
              "Atletik",
              "Beladiri",
              "Senam",
              "Aktivitas Air",
            ],
          },
        ],

        lessons: [
          "SPLDV",
          "Puisi",
          "Sistem Organ",
          "Kolonialisme",
          "Sumpah Pemuda",
          "Recount Text",
          "Pancasila dan UUD",
          "Spreadsheet",
        ],
      },

      9: {
        subjects: [
          {
            name: "Matematika",
            description:
              "Persamaan kuadrat, transformasi, kesebangunan, bangun ruang, dan peluang.",
            icon: "triangle",
            color: "blue",
            topics: [
              "Persamaan Kuadrat",
              "Fungsi Kuadrat",
              "Transformasi",
              "Kesebangunan",
              "Bangun Ruang",
              "Peluang",
            ],
          },

          {
            name: "Bahasa Indonesia",
            description:
              "Laporan percobaan, pidato, kritik, cerpen, dan literasi media.",
            icon: "book-open",
            color: "pink",
            topics: [
              "Laporan Percobaan",
              "Pidato Persuasif",
              "Kritik dan Esai",
              "Cerpen",
              "Cek Fakta",
            ],
          },

          {
            name: "IPA",
            description:
              "Genetika, reproduksi, listrik, magnet, bioteknologi, dan lingkungan.",
            icon: "activity",
            color: "green",
            topics: [
              "Pewarisan Sifat",
              "Reproduksi",
              "Listrik",
              "Magnet",
              "Bioteknologi",
            ],
          },

          {
            name: "IPS",
            description:
              "Perubahan sosial, globalisasi, ekonomi kreatif, kemerdekaan, dan kerja sama.",
            icon: "globe",
            color: "orange",
            topics: [
              "Perubahan Sosial",
              "Globalisasi",
              "Ekonomi Kreatif",
              "Kemerdekaan",
              "Kerja Sama",
            ],
          },

          {
            name: "Sejarah",
            description:
              "Proklamasi, perjuangan kemerdekaan, demokrasi, Orde Baru, dan Reformasi.",
            icon: "clock",
            color: "red",
            topics: [
              "Proklamasi",
              "Perjuangan",
              "Demokrasi",
              "Orde Baru",
              "Reformasi",
            ],
          },

          {
            name: "Bahasa Inggris",
            description:
              "Hopes, congratulations, labels, passive voice, legends, dan public speaking.",
            icon: "message-circle",
            color: "purple",
            topics: [
              "Hopes",
              "Congratulations",
              "Labels",
              "Passive Voice",
              "Legends",
              "Public Speaking",
            ],
          },

          {
            name: "Pendidikan Pancasila",
            description:
              "Dinamika Pancasila, UUD, demokrasi, keberagaman, dan bela negara.",
            icon: "flag",
            color: "red",
            topics: [
              "Dinamika Pancasila",
              "Pembukaan UUD",
              "Demokrasi",
              "Keberagaman",
              "Bela Negara",
            ],
          },

          {
            name: "Informatika",
            description:
              "Algoritma, Python, AI, robotika, cybersecurity, dan etika digital.",
            icon: "code",
            color: "blue",
            topics: [
              "Python",
              "Graf dan Pohon",
              "AI",
              "Machine Learning",
              "Robotika",
              "Cybersecurity",
            ],
          },

          {
            name: "PJOK",
            description:
              "Taktik permainan, senam kompleks, P3K, dan pola hidup sehat.",
            icon: "activity",
            color: "green",
            topics: [
              "Taktik Permainan",
              "Atletik",
              "Senam",
              "P3K",
              "Pola Hidup Sehat",
            ],
          },
        ],

        lessons: [
          "Fungsi Kuadrat",
          "Laporan Percobaan",
          "Pewarisan Sifat",
          "Perubahan Sosial",
          "Proklamasi",
          "Passive Voice",
          "Bela Negara",
          "Python Dasar",
        ],
      },
    },

    /* =======================================
      SMA
    ======================================= */

    SMA: {
      10: {
        subjects: [
          {
            name: "Matematika",
            description:
              "Eksponen, logaritma, barisan, vektor, trigonometri, data, dan peluang.",
            icon: "triangle",
            color: "blue",
            topics: [
              "Eksponen",
              "Logaritma",
              "Barisan dan Deret",
              "Vektor",
              "Trigonometri",
              "Analisis Data",
              "Peluang",
            ],
          },

          {
            name: "Bahasa Indonesia",
            description:
              "Laporan observasi, eksposisi, anekdot, negosiasi, dan hikayat.",
            icon: "book-open",
            color: "pink",
            topics: [
              "Laporan Observasi",
              "Eksposisi",
              "Anekdot",
              "Negosiasi",
              "Hikayat",
            ],
          },

          {
            name: "Fisika",
            description:
              "Metode ilmiah, pengukuran, energi terbarukan, dan pemanasan global.",
            icon: "zap",
            color: "green",
            topics: [
              "Metode Ilmiah",
              "Pengukuran",
              "Energi Terbarukan",
              "Pemanasan Global",
            ],
          },

          {
            name: "Kimia",
            description:
              "Struktur atom, tabel periodik, hukum dasar kimia, dan kimia hijau.",
            icon: "droplet",
            color: "purple",
            topics: [
              "Struktur Atom",
              "Tabel Periodik",
              "Hukum Dasar Kimia",
              "Green Chemistry",
            ],
          },

          {
            name: "Biologi",
            description:
              "Keanekaragaman hayati, virus, ekosistem, dan perubahan lingkungan.",
            icon: "heart",
            color: "orange",
            topics: ["Keanekaragaman", "Virus", "Ekosistem", "Lingkungan"],
          },

          {
            name: "Sosiologi",
            description:
              "Identitas, tindakan sosial, interaksi, dan dinamika masyarakat.",
            icon: "users",
            color: "purple",
            topics: [
              "Identitas",
              "Tindakan Sosial",
              "Interaksi Sosial",
              "Dinamika Masyarakat",
            ],
          },

          {
            name: "Ekonomi",
            description: "Kelangkaan, kebutuhan, pasar, dan lembaga keuangan.",
            icon: "dollar-sign",
            color: "green",
            topics: ["Kelangkaan", "Kebutuhan", "Pasar", "Lembaga Keuangan"],
          },

          {
            name: "Geografi",
            description:
              "Konsep geografi, pemetaan, sosiogeografi, dan penelitian wilayah.",
            icon: "map",
            color: "orange",
            topics: [
              "Konsep Geografi",
              "Pemetaan",
              "Sosiogeografi",
              "Penelitian Wilayah",
            ],
          },

          {
            name: "Sejarah",
            description: "Konsep sejarah, penelitian, dan sejarah Indonesia.",
            icon: "clock",
            color: "red",
            topics: [
              "Konsep Sejarah",
              "Penelitian Sejarah",
              "Pra-Aksara",
              "Hindu-Buddha",
              "Islam",
            ],
          },

          {
            name: "Bahasa Inggris",
            description:
              "Recount, narrative, description, dan expressing opinion.",
            icon: "message-circle",
            color: "purple",
            topics: ["Recount", "Narrative", "Descriptive", "Opinion"],
          },

          {
            name: "Informatika",
            description:
              "Berpikir komputasional, data, algoritma, dan dampak sosial TIK.",
            icon: "code",
            color: "blue",
            topics: [
              "Computational Thinking",
              "Data",
              "Algoritma",
              "Dampak Sosial TIK",
            ],
          },

          {
            name: "Pendidikan Pancasila",
            description: "Perumusan Pancasila, nilai Pancasila, dan norma.",
            icon: "flag",
            color: "red",
            topics: ["Sejarah Pancasila", "Nilai Pancasila", "Norma", "UUD 1945"],
          },
        ],

        lessons: [
          "Eksponen dan Logaritma",
          "Laporan Observasi",
          "Struktur Atom",
          "Energi Terbarukan",
          "Keanekaragaman Hayati",
          "Recount Text",
          "Algoritma",
          "Pancasila",
        ],
      },

      11: {
        subjects: [
          {
            name: "Matematika Lanjut",
            description:
              "Polinomial, matriks, fungsi trigonometri, dan geometri analitik.",
            icon: "triangle",
            color: "blue",
            topics: [
              "Polinomial",
              "Matriks",
              "Trigonometri",
              "Geometri Analitik",
            ],
          },

          {
            name: "Fisika",
            description:
              "Kinematika, dinamika, gravitasi, fluida, termodinamika, dan gelombang.",
            icon: "zap",
            color: "green",
            topics: [
              "Kinematika",
              "Dinamika",
              "Gravitasi",
              "Fluida",
              "Termodinamika",
              "Gelombang",
            ],
          },

          {
            name: "Kimia",
            description:
              "Ikatan kimia, stoikiometri, termokimia, laju reaksi, dan kesetimbangan.",
            icon: "droplet",
            color: "purple",
            topics: [
              "Ikatan Kimia",
              "Stoikiometri",
              "Termokimia",
              "Laju Reaksi",
              "Kesetimbangan",
              "Asam Basa",
            ],
          },

          {
            name: "Biologi",
            description: "Sel, jaringan, dan sistem organ manusia.",
            icon: "heart",
            color: "orange",
            topics: [
              "Struktur Sel",
              "Jaringan",
              "Sistem Pencernaan",
              "Sistem Pernapasan",
              "Sirkulasi",
              "Ekskresi",
            ],
          },

          {
            name: "Sosiologi",
            description:
              "Kelompok sosial, kesetaraan, konflik, dan penyelesaian masalah.",
            icon: "users",
            color: "purple",
            topics: [
              "Kelompok Sosial",
              "Kesetaraan",
              "Konflik Sosial",
              "Penyelesaian Masalah",
            ],
          },

          {
            name: "Ekonomi",
            description:
              "Pendapatan nasional, pertumbuhan ekonomi, inflasi, dan kebijakan.",
            icon: "dollar-sign",
            color: "green",
            topics: [
              "Pendapatan Nasional",
              "Pertumbuhan Ekonomi",
              "Ketenagakerjaan",
              "Inflasi",
              "Moneter",
              "Fiskal",
            ],
          },

          {
            name: "Geografi",
            description:
              "Litosfer, atmosfer, hidrosfer, kependudukan, dan kebencanaan.",
            icon: "map",
            color: "orange",
            topics: [
              "Litosfer",
              "Atmosfer",
              "Hidrosfer",
              "Kependudukan",
              "Kebencanaan",
            ],
          },

          {
            name: "Sejarah Lanjut",
            description: "Kolonialisme, pergerakan nasional, dan Perang Dunia.",
            icon: "clock",
            color: "red",
            topics: [
              "Kolonialisme",
              "Perlawanan",
              "Pergerakan Nasional",
              "Perang Dunia",
            ],
          },

          {
            name: "Bahasa Indonesia",
            description: "Argumentasi, persuasif, cerpen, dan drama.",
            icon: "book-open",
            color: "pink",
            topics: ["Argumentasi", "Persuasif", "Cerpen", "Drama"],
          },

          {
            name: "Bahasa Inggris",
            description:
              "Analytical exposition, argumentasi, data, dan statistik.",
            icon: "message-circle",
            color: "purple",
            topics: [
              "Analytical Exposition",
              "Argumentative Text",
              "Data",
              "Statistics",
            ],
          },
        ],

        lessons: [
          "Matriks",
          "Kinematika",
          "Ikatan Kimia",
          "Struktur Sel",
          "Pendapatan Nasional",
          "Kolonialisme",
          "Argumentasi",
          "Analytical Exposition",
        ],
      },

      12: {
        subjects: [
          {
            name: "Matematika Lanjut",
            description: "Limit, kalkulus, turunan, integral, dan penerapannya.",
            icon: "triangle",
            color: "blue",
            topics: ["Limit", "Turunan", "Integral", "Kalkulus"],
          },

          {
            name: "Fisika",
            description: "Listrik, elektromagnetik, kuantum, dan fisika inti.",
            icon: "zap",
            color: "green",
            topics: [
              "Listrik Statis",
              "Listrik Dinamis",
              "Induksi Elektromagnetik",
              "Fisika Kuantum",
              "Fisika Inti",
            ],
          },

          {
            name: "Kimia",
            description: "Larutan, elektrokimia, dan kimia organik.",
            icon: "droplet",
            color: "purple",
            topics: [
              "Sifat Koligatif",
              "Sel Volta",
              "Elektrolisis",
              "Kimia Organik",
            ],
          },

          {
            name: "Biologi",
            description:
              "Pembelahan sel, metabolisme, genetika, dan bioteknologi.",
            icon: "heart",
            color: "orange",
            topics: [
              "Pembelahan Sel",
              "Metabolisme",
              "Genetika",
              "DNA",
              "RNA",
              "Bioteknologi",
            ],
          },

          {
            name: "Sosiologi",
            description:
              "Perubahan sosial, modernisasi, globalisasi, dan pemberdayaan.",
            icon: "users",
            color: "purple",
            topics: [
              "Perubahan Sosial",
              "Modernisasi",
              "Globalisasi",
              "Kearifan Lokal",
            ],
          },

          {
            name: "Ekonomi",
            description:
              "Perdagangan internasional, ekonomi global, dan akuntansi.",
            icon: "dollar-sign",
            color: "green",
            topics: ["Perdagangan Internasional", "Ekonomi Global", "Akuntansi"],
          },

          {
            name: "Geografi",
            description: "Tata ruang, desa-kota, penginderaan jauh, dan SIG.",
            icon: "map",
            color: "orange",
            topics: ["Tata Ruang", "Desa-Kota", "Penginderaan Jauh", "SIG"],
          },

          {
            name: "Sejarah Lanjut",
            description:
              "Perang Dingin, organisasi dunia, dan sejarah Indonesia.",
            icon: "clock",
            color: "red",
            topics: ["Perang Dingin", "PBB", "ASEAN", "Kemerdekaan", "Reformasi"],
          },

          {
            name: "Bahasa Indonesia",
            description:
              "Resensi, artikel ilmiah, esai kritis, dan surat lamaran.",
            icon: "book-open",
            color: "pink",
            topics: ["Resensi", "Artikel Ilmiah", "Esai Kritis", "Surat Lamaran"],
          },

          {
            name: "Bahasa Inggris",
            description:
              "Discussion text, dokumen formal, public speaking, dan presentasi.",
            icon: "message-circle",
            color: "purple",
            topics: [
              "Discussion Text",
              "Formal Documents",
              "Public Speaking",
              "Presentation",
            ],
          },
        ],

        lessons: [
          "Limit dan Turunan",
          "Listrik Dinamis",
          "Genetika",
          "Perdagangan Internasional",
          "SIG",
          "Perang Dingin",
          "Surat Lamaran",
          "Public Speaking",
        ],
      },
    },

    /* =======================================
      SMK
    ======================================= */

    SMK: {
      /* =====================================
        KELAS 10
      ===================================== */

      10: {
        subjects: [
          {
            name: "Pendidikan Agama dan Budi Pekerti",
            description:
              "Keimanan, akhlak, karakter, toleransi, dan etika kehidupan.",
            icon: "heart",
            color: "orange",
            topics: [
              "Keimanan dan Ketakwaan",
              "Akhlak dan Karakter",
              "Etika Pergaulan",
              "Etika Digital",
            ],
          },

          {
            name: "Pendidikan Pancasila",
            description:
              "Pancasila, UUD NRI 1945, norma, demokrasi, keberagaman, dan NKRI.",
            icon: "flag",
            color: "red",
            topics: [
              "Perumusan Pancasila",
              "Nilai Pancasila",
              "UUD NRI 1945",
              "Norma",
              "Demokrasi",
              "Keberagaman",
            ],
          },

          {
            name: "Bahasa Indonesia",
            description:
              "Laporan observasi, eksposisi, anekdot, negosiasi, dan hikayat.",
            icon: "book-open",
            color: "pink",
            topics: [
              "Laporan Observasi",
              "Eksposisi",
              "Anekdot",
              "Negosiasi",
              "Hikayat",
              "Monolog",
            ],
          },

          {
            name: "Matematika",
            description:
              "Eksponen, logaritma, barisan, vektor, trigonometri, data, dan peluang.",
            icon: "triangle",
            color: "blue",
            topics: [
              "Eksponen",
              "Logaritma",
              "Barisan dan Deret",
              "Vektor",
              "Trigonometri",
              "Analisis Data",
              "Peluang",
            ],
          },

          {
            name: "Bahasa Inggris",
            description:
              "Recount, narrative, descriptive, opinion, procedure, dan komunikasi.",
            icon: "message-circle",
            color: "purple",
            topics: [
              "Recount Text",
              "Narrative Text",
              "Descriptive Text",
              "Opinion",
              "Procedure",
              "Conversation",
            ],
          },

          {
            name: "PJOK",
            description:
              "Permainan, atletik, kebugaran, aktivitas air, kesehatan, dan keselamatan.",
            icon: "activity",
            color: "green",
            topics: [
              "Bola Besar",
              "Bola Kecil",
              "Atletik",
              "Kebugaran",
              "Aktivitas Air",
              "Kesehatan",
            ],
          },

          {
            name: "Sejarah",
            description:
              "Konsep sejarah, penelitian, pra-aksara, Hindu-Buddha, dan Islam.",
            icon: "clock",
            color: "red",
            topics: [
              "Konsep Sejarah",
              "Penelitian Sejarah",
              "Pra-Aksara",
              "Hindu-Buddha",
              "Islam",
              "Jalur Rempah",
            ],
          },

          {
            name: "Seni Budaya",
            description: "Apresiasi seni, ekspresi, kreativitas, dan budaya.",
            icon: "music",
            color: "purple",
            topics: [
              "Apresiasi Seni",
              "Seni Rupa",
              "Seni Musik",
              "Seni Tari",
              "Seni Teater",
            ],
          },

          {
            name: "Informatika",
            description:
              "Berpikir komputasional, sistem komputer, jaringan, algoritma, data, dan etika digital.",
            icon: "code",
            color: "blue",
            topics: [
              "Berpikir Komputasional",
              "Sistem Komputer",
              "Jaringan",
              "Algoritma",
              "Pemrograman",
              "Data",
              "Etika Digital",
            ],
          },

          {
            name: "Projek IPAS",
            description:
              "Integrasi sains dan sosial melalui observasi, data, dan projek.",
            icon: "globe",
            color: "green",
            topics: [
              "Metode Ilmiah",
              "Fenomena Alam",
              "Energi",
              "Fenomena Sosial",
              "Data",
              "Projek Terapan",
            ],
          },

          {
            name: "Dasar-Dasar Program Keahlian",
            description:
              "Fondasi bidang keahlian, proses bisnis, budaya kerja, K3LH, alat, SOP, dan mutu.",
            icon: "tool",
            color: "orange",
            topics: [
              "Orientasi Keahlian",
              "Proses Bisnis",
              "Budaya Kerja",
              "K3LH",
              "Alat dan Bahan",
              "SOP",
              "Pengendalian Mutu",
              "Projek",
            ],
          },

          {
            name: "Koding & Kecerdasan Artifisial",
            description:
              "Algoritma, pemrograman, data, AI, dan penggunaan teknologi secara bertanggung jawab.",
            icon: "cpu",
            color: "blue",
            topics: [
              "Algoritma",
              "Pemrograman",
              "Data AI",
              "Etika AI",
              "Projek Digital",
            ],
          },

          {
            name: "Muatan Lokal",
            description:
              "Bahasa, budaya, dan potensi daerah sesuai kebijakan sekolah.",
            icon: "map",
            color: "green",
            topics: ["Bahasa Daerah", "Budaya Lokal", "Kearifan Lokal"],
          },
        ],

        lessons: [
          "Eksponen dan Logaritma",
          "Laporan Hasil Observasi",
          "Berpikir Komputasional",
          "K3LH dan Budaya Kerja",
          "Metode Ilmiah",
          "Nilai-Nilai Pancasila",
          "Recount Text",
          "Kebugaran Jasmani",
        ],
      },

      /* =====================================
        KELAS 11
      ===================================== */

      11: {
        subjects: [
          {
            name: "Pendidikan Agama dan Budi Pekerti",
            description:
              "Integritas, etika, tanggung jawab, toleransi, dan kehidupan profesional.",
            icon: "heart",
            color: "orange",
            topics: [
              "Integritas",
              "Etika Kehidupan",
              "Etika Dunia Kerja",
              "Toleransi",
            ],
          },

          {
            name: "Pendidikan Pancasila",
            description:
              "Konstitusi, peraturan, hak dan kewajiban, demokrasi, dan taat hukum.",
            icon: "flag",
            color: "red",
            topics: [
              "UUD NRI 1945",
              "Tata Urutan Peraturan",
              "Budaya Taat Hukum",
              "Hak dan Kewajiban",
              "Demokrasi",
            ],
          },

          {
            name: "Bahasa Indonesia",
            description:
              "Argumentasi, persuasi, laporan kerja, prosedur teknis, drama, dan presentasi.",
            icon: "book-open",
            color: "pink",
            topics: [
              "Argumentasi",
              "Persuasif",
              "Laporan Kerja",
              "Prosedur Teknis",
              "Drama",
              "Presentasi",
            ],
          },

          {
            name: "Matematika",
            description:
              "Matriks, fungsi kuadrat, transformasi, lingkaran, logika, dan pemodelan.",
            icon: "triangle",
            color: "blue",
            topics: [
              "Matriks",
              "Fungsi Kuadrat",
              "Transformasi Geometri",
              "Lingkaran",
              "Logika",
              "Pemodelan",
            ],
          },

          {
            name: "Bahasa Inggris",
            description:
              "Analytical exposition, manual kerja, komunikasi teknis, email, dan presentasi.",
            icon: "message-circle",
            color: "purple",
            topics: [
              "Analytical Exposition",
              "Manual",
              "Technical Communication",
              "Professional Email",
              "Presentation",
            ],
          },

          {
            name: "PJOK",
            description:
              "Strategi permainan, atletik, senam, kebugaran, dan kesehatan.",
            icon: "activity",
            color: "green",
            topics: [
              "Strategi Permainan",
              "Atletik",
              "Senam",
              "Kebugaran",
              "Kesehatan",
            ],
          },

          {
            name: "Sejarah",
            description:
              "Kolonialisme, perlawanan, pergerakan nasional, Jepang, dan Perang Dunia.",
            icon: "clock",
            color: "red",
            topics: [
              "Kolonialisme",
              "Perlawanan",
              "Pergerakan Nasional",
              "Sumpah Pemuda",
              "Jepang",
              "Perang Dunia",
            ],
          },

          {
            name: "Seni Budaya",
            description: "Kajian karya, produksi, ekspresi, dan projek seni.",
            icon: "music",
            color: "purple",
            topics: [
              "Kajian Karya",
              "Seni Rupa",
              "Seni Musik",
              "Seni Pertunjukan",
              "Projek Seni",
            ],
          },

          {
            name: "Informatika",
            description:
              "Pemrograman, struktur data, basis data, jaringan, keamanan, dan produk digital.",
            icon: "code",
            color: "blue",
            topics: [
              "Pemrograman Lanjutan",
              "Struktur Data",
              "Basis Data",
              "Jaringan",
              "Keamanan",
              "Pengolahan Data",
            ],
          },

          {
            name: "Konsentrasi Keahlian",
            description:
              "Pendalaman kompetensi teknis sesuai jurusan atau konsentrasi.",
            icon: "settings",
            color: "orange",
            topics: [
              "Pendalaman Kompetensi",
              "Praktik Terstruktur",
              "Troubleshooting",
              "Quality Assurance",
              "Projek Kejuruan",
            ],
          },

          {
            name: "Koding & Kecerdasan Artifisial",
            description: "Pemrograman, data, AI, evaluasi, dan projek digital.",
            icon: "cpu",
            color: "blue",
            topics: [
              "Fungsi dan Modul",
              "Pengolahan Data",
              "AI Produktivitas",
              "Evaluasi AI",
              "Projek AI",
            ],
          },

          {
            name: "Kreativitas, Inovasi & Kewirausahaan",
            description:
              "Kreativitas, inovasi, design thinking, usaha, pemasaran, HAKI, dan keuangan.",
            icon: "briefcase",
            color: "green",
            topics: [
              "Kreativitas",
              "Inovasi",
              "Design Thinking",
              "Peluang Usaha",
              "Business Plan",
              "Pemasaran",
              "HAKI",
              "Keuangan",
            ],
          },

          {
            name: "Muatan Lokal",
            description: "Budaya, bahasa, dan potensi daerah.",
            icon: "map",
            color: "purple",
            topics: ["Budaya Lokal", "Bahasa Daerah", "Kearifan Lokal"],
          },
        ],

        lessons: [
          "Matriks",
          "Teks Argumentasi",
          "Pemrograman Lanjutan",
          "Troubleshooting",
          "Design Thinking",
          "Analytical Exposition",
          "Pergerakan Nasional",
          "Business Plan",
        ],
      },

      /* =====================================
        KELAS 12
      ===================================== */

      12: {
        subjects: [
          {
            name: "Pendidikan Agama dan Budi Pekerti",
            description:
              "Integritas, tanggung jawab, etika kerja, dan kontribusi sosial.",
            icon: "heart",
            color: "orange",
            topics: [
              "Integritas",
              "Tanggung Jawab",
              "Etika Kerja",
              "Kontribusi Sosial",
            ],
          },

          {
            name: "Pendidikan Pancasila",
            description:
              "Kedaulatan, HAM, demokrasi, keberagaman, bela negara, dan partisipasi.",
            icon: "flag",
            color: "red",
            topics: [
              "Kedaulatan Negara",
              "HAM",
              "Demokrasi",
              "Keberagaman",
              "Bela Negara",
              "Partisipasi",
            ],
          },

          {
            name: "Bahasa Indonesia",
            description:
              "Lamaran kerja, artikel ilmiah, esai kritis, laporan PKL, dan cek fakta.",
            icon: "book-open",
            color: "pink",
            topics: [
              "Surat Lamaran",
              "Artikel Ilmiah",
              "Esai Kritis",
              "Laporan PKL",
              "Cek Fakta",
            ],
          },

          {
            name: "Matematika",
            description:
              "Statistika industri, kalkulus dasar, dan matematika terapan.",
            icon: "triangle",
            color: "blue",
            topics: [
              "Statistika Industri",
              "Limit",
              "Turunan",
              "Integral",
              "Matematika Terapan",
            ],
          },

          {
            name: "Bahasa Inggris",
            description:
              "CV, wawancara kerja, public speaking, presentasi bisnis, dan komunikasi profesional.",
            icon: "message-circle",
            color: "purple",
            topics: [
              "CV / Resume",
              "Job Interview",
              "Public Speaking",
              "Business Presentation",
              "Professional Communication",
            ],
          },

          {
            name: "PJOK",
            description:
              "Program kebugaran, keselamatan aktivitas, kesehatan, dan gaya hidup.",
            icon: "activity",
            color: "green",
            topics: [
              "Program Kebugaran",
              "Keselamatan",
              "Kesehatan",
              "Gaya Hidup",
            ],
          },

          {
            name: "Sejarah",
            description:
              "Proklamasi, perjuangan, demokrasi, Orde Baru, Reformasi, dan dunia.",
            icon: "clock",
            color: "red",
            topics: [
              "Proklamasi",
              "Kemerdekaan",
              "Demokrasi Liberal",
              "Demokrasi Terpimpin",
              "Orde Baru",
              "Reformasi",
              "Perang Dingin",
            ],
          },

          {
            name: "Seni Budaya",
            description:
              "Kajian karya, kreativitas, projek, dan presentasi seni.",
            icon: "music",
            color: "purple",
            topics: ["Kajian Seni", "Karya Kreatif", "Projek Seni", "Presentasi"],
          },

          {
            name: "Informatika",
            description:
              "Proyek digital, API, cybersecurity, data, AI, dan portofolio.",
            icon: "code",
            color: "blue",
            topics: [
              "Proyek Pemrograman",
              "API",
              "Cybersecurity",
              "Analisis Data",
              "AI",
              "Portofolio",
            ],
          },

          {
            name: "Konsentrasi Keahlian Lanjutan",
            description:
              "Kompetensi teknis, proyek akhir, portofolio, uji kompetensi, dan kesiapan kerja.",
            icon: "award",
            color: "orange",
            topics: [
              "Kompetensi Teknis",
              "Proyek Akhir",
              "Portofolio",
              "Uji Kompetensi",
              "Kesiapan Kerja",
            ],
          },

          {
            name: "Kreativitas, Inovasi & Kewirausahaan",
            description:
              "Penyempurnaan produk, komersialisasi, HAKI, keuangan, dan evaluasi bisnis.",
            icon: "briefcase",
            color: "green",
            topics: [
              "Penyempurnaan Produk",
              "Komersialisasi",
              "HAKI",
              "Laporan Keuangan",
              "Evaluasi Bisnis",
            ],
          },

          {
            name: "Praktik Kerja Lapangan",
            description:
              "Pengalaman belajar langsung di dunia kerja melalui praktik dan refleksi.",
            icon: "briefcase",
            color: "purple",
            topics: [
              "Orientasi Dunia Kerja",
              "K3LH",
              "Pelaksanaan Tugas",
              "Komunikasi Kerja",
              "Dokumentasi",
              "Evaluasi PKL",
              "Presentasi",
            ],
          },

          {
            name: "Koding & Kecerdasan Artifisial",
            description:
              "Pemrograman lanjutan, AI, API, evaluasi model, dan etika AI.",
            icon: "cpu",
            color: "blue",
            topics: [
              "Pemrograman Lanjutan",
              "Prompt Engineering",
              "Model AI",
              "API AI",
              "Etika AI",
            ],
          },

          {
            name: "Muatan Lokal",
            description: "Pendalaman budaya, bahasa, dan potensi daerah.",
            icon: "map",
            color: "green",
            topics: ["Budaya Lokal", "Bahasa Daerah", "Pelestarian Budaya"],
          },
        ],

        lessons: [
          "Statistika Industri",
          "Surat Lamaran Pekerjaan",
          "Proyek Akhir Kejuruan",
          "Praktik Kerja Lapangan",
          "Job Interview",
          "Cybersecurity",
          "Komersialisasi Produk",
          "Portofolio Kompetensi",
        ],
      },
    },
  };

  /* =========================================
    DATA LEVEL
  ========================================= */

  let levelData;

  if (selectedLevel === "SMP") {
    levelData = materials.SMP[selectedClass];
  } else if (selectedLevel === "SMK") {
    levelData = materials.SMK[selectedClass];
  } else if (selectedLevel === "SMA") {
    levelData = materials.SMA[selectedClass];
  } else {
    levelData = materials[selectedLevel];
  }

  /* =========================================
    FALLBACK
  ========================================= */

  if (!levelData) {
    selectedLevel = "SD";
    selectedClass = "1";

    localStorage.setItem("elearning_selected_level", selectedLevel);

    localStorage.setItem("elearning_selected_class", selectedClass);

    levelData = materials.SD;
  }

  /* =========================================
    PROGRESS
  ========================================= */

  const progressKey = `elearning_progress_${currentUser.id}_${selectedLevel}_${selectedClass}`;

  function getProgress() {
    try {
      return JSON.parse(localStorage.getItem(progressKey)) || {};
    } catch (error) {
      return {};
    }
  }

  /* =========================================
    STATUS
  ========================================= */

  function getStatus(progress) {
    if (progress >= 100) {
      return {
        label: "Selesai",
        className: "completed",
      };
    }

    if (progress > 0) {
      return {
        label: "Berlangsung",
        className: "in-progress",
      };
    }

    return {
      label: "Belum mulai",
      className: "available",
    };
  }

  /* =========================================
    ROUTE SD KELAS 2
  ========================================= */

  const sdClass2Routes = {
    Matematika: "matematika-sd-2.html",

    "Bahasa Indonesia": "b-indo-sd-2.html",

    IPAS: "ipas-sd-2.html",

    "Bahasa Inggris": "b.ing-sd-2.html",

    PABP: "pabp-sd-2.html",

    PKN: "pkn-sd-2.html",

    "Seni Budaya": "seni-sd-2.html",

    "Koding & AI": "koding-sd-2.html",

    "Muatan Lokal": "mulok-sd-2.html",
  };

  /* =========================================
    ROUTE SD KELAS 3
  ========================================= */

  const sdClass3Routes = {
    Matematika: "matematika-sd-3.html",

    "Bahasa Indonesia": "bahasa-indonesia-sd-3.html",

    IPAS: "ipas-sd-3.html",

    "Bahasa Inggris": "bahasa-inggris-sd-3.html",

    PABP: "pabp-sd-3.html",

    PKN: "pkn-sd-3.html",

    "Seni Budaya": "seni-budaya-sd-3.html",

    "Koding & AI": "koding-ai-sd-3.html",

    "Muatan Lokal": "muatan-lokal-sd-3.html",
  };

  /* =========================================
    GET SUBJECT ROUTE
  ========================================= */

  function getSubjectRoute(subject) {
    /* SD KELAS 2 */

    if (selectedLevel === "SD" && selectedClass === "2") {
      return sdClass2Routes[subject] || "materi.html";
    }

    /* SD KELAS 3 */

    if (selectedLevel === "SD" && selectedClass === "3") {
      return sdClass3Routes[subject] || "materi.html";
    }

    /* SMK */

    if (selectedLevel === "SMK") {
      return `materi-smk.html?subject=${encodeURIComponent(
        subject,
      )}&grade=${encodeURIComponent(selectedClass)}`;
    }

    /* SMA */

    if (selectedLevel === "SMA") {
      return `materi-sma.html?subject=${encodeURIComponent(
        subject,
      )}&grade=${encodeURIComponent(selectedClass)}`;
    }

    /* MAPEL LAIN */

    const routeMap = {
      Matematika: "matematika",

      "Matematika Lanjut": "matematika",

      "Bahasa Indonesia": "b-indo",

      IPAS: "ipas",

      "Bahasa Inggris": "b.ing",

      PABP: "pabp",

      PKN: "pkn",

      "Pendidikan Pancasila": "pendidikan-pancasila",

      "Seni Budaya": "seni-budaya",

      "Koding & AI": "koding-ai",

      "Koding & Kecerdasan Artifisial": "koding-ai",

      "Muatan Lokal": "muatan-lokal",

      IPA: "ipa",

      IPS: "ips",

      Sejarah: "sejarah",

      "Sejarah Lanjut": "sejarah",

      Informatika: "informatika",

      PJOK: "pjok",

      Fisika: "fisika",

      Kimia: "kimia",

      Biologi: "biologi",

      Sosiologi: "sosiologi",

      Ekonomi: "ekonomi",

      Geografi: "geografi",
    };

    const prefix = routeMap[subject];

    if (!prefix) {
      return "materi.html";
    }

    return `${prefix}-${selectedLevel.toLowerCase()}-${selectedClass}.html`;
  }

  /* =========================================
    RENDER COURSES
  ========================================= */

  function renderCourses() {
    if (!courseGrid || !levelData?.subjects) {
      return;
    }

    const progress = getProgress();

    courseGrid.innerHTML = "";

    levelData.subjects.forEach((subject, index) => {
      const value = Math.max(
        0,
        Math.min(100, Number(progress[subject.name]) || 0),
      );

      const topics = Array.isArray(subject.topics) ? subject.topics : [];

      const status = getStatus(value);

      const card = document.createElement("article");

      card.className = "course-card";

      card.dataset.subject = subject.name;

      card.dataset.search = normalizeText(
        [subject.name, subject.description, ...topics].join(" "),
      );

      const visibleTopics = topics.slice(0, 2);

      card.innerHTML = `

          <div class="course-card-head">

            <div
              class="subject-icon ${escapeHTML(subject.color)}"
            >

              <i
                data-feather="${escapeHTML(subject.icon)}"
              ></i>

            </div>


            <span
              class="course-status ${status.className}"
            >

              <span class="status-dot"></span>

              ${status.label}

            </span>

          </div>


          <div class="course-card-body">

            <div class="course-index">

              MATERI
              ${String(index + 1).padStart(2, "0")}

            </div>


            <h3>

              ${escapeHTML(subject.name)}

            </h3>


            <p>

              ${escapeHTML(subject.description)}

            </p>


            <div class="course-topics">

              ${
                visibleTopics.length
                  ? visibleTopics
                      .map(
                        (topic) => `

                          <div class="topic-chip">

                            <i
                              data-feather="check"
                            ></i>

                            <span>
                              ${escapeHTML(topic)}
                            </span>

                          </div>

                        `,
                      )
                      .join("")
                  : `

                    <div class="topic-chip">

                      <i
                        data-feather="book-open"
                      ></i>

                      <span>
                        Materi tersedia
                      </span>

                    </div>

                  `
              }

            </div>

          </div>


          <div class="course-progress">

            <div class="progress-row">

              <span>
                Progress belajar
              </span>

              <strong>
                ${value}%
              </strong>

            </div>


            <div
              class="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow="${value}"
            >

              <div
                class="progress-fill"
                style="width:${value}%"
              ></div>

            </div>

          </div>


          <div class="course-bottom">

            <span class="course-material-count">

              <i data-feather="layers"></i>

              ${Math.max(topics.length, 1)}

              topik

            </span>


            <button
              type="button"
              class="course-button"
              data-subject="${escapeHTML(subject.name)}"
            >

              <span>
                Buka Materi
              </span>

              <i
                data-feather="arrow-up-right"
              ></i>

            </button>

          </div>

        `;

      courseGrid.appendChild(card);
    });

    refreshIcons();

    /* =====================================
      BUTTON BUKA MATERI
    ===================================== */

    courseGrid.querySelectorAll(".course-button").forEach((button) => {
      button.addEventListener("click", () => {
        const subject = button.dataset.subject;

        localStorage.setItem("elearning_current_subject", subject);

        localStorage.setItem("elearning_current_level", selectedLevel);

        localStorage.setItem("elearning_current_class", selectedClass);

        window.location.href = getSubjectRoute(subject);
      });
    });
  }

  /* =========================================
    RENDER LESSONS
  ========================================= */

  function renderLessons() {
    if (!lessonList || !levelData?.lessons) {
      return;
    }

    lessonList.innerHTML = "";

    levelData.lessons.forEach((lesson, index) => {
      const item = document.createElement("article");

      item.className = "lesson-item";

      item.dataset.search = normalizeText(
        `${lesson}
            ${selectedLevel}
            kelas
            ${selectedClass}`,
      );

      item.innerHTML = `

          <div class="lesson-number">

            ${String(index + 1).padStart(2, "0")}

          </div>


          <div class="lesson-icon">

            <i
              data-feather="play"
            ></i>

          </div>


          <div class="lesson-info">

            <strong>

              ${escapeHTML(lesson)}

            </strong>


            <span>

              ${escapeHTML(selectedLevel)}

              • Kelas

              ${escapeHTML(selectedClass)}

              <b>•</b>

              Materi pembelajaran

            </span>

          </div>

        `;

      lessonList.appendChild(item);
    });

    refreshIcons();
  }

  /* =========================================
    SEARCH
  ========================================= */

  function searchMaterials() {
    const query = normalizeText(searchInput?.value || "");

    const courseCards = document.querySelectorAll(".course-card");

    const lessonItems = document.querySelectorAll(".lesson-item");

    let visibleCourses = 0;

    let visibleLessons = 0;

    /* MAPEL */

    courseCards.forEach((card) => {
      const text = normalizeText(card.dataset.search || "");

      const match = !query || text.includes(query);

      card.hidden = !match;

      if (match) {
        visibleCourses++;
      }
    });

    /* MATERI */

    lessonItems.forEach((item) => {
      const text = normalizeText(item.dataset.search || "");

      const match = !query || text.includes(query);

      item.hidden = !match;

      if (match) {
        visibleLessons++;
      }
    });

    const totalResults = visibleCourses + visibleLessons;

    if (searchResultInfo) {
      searchResultInfo.textContent = query
        ? `${totalResults} hasil ditemukan`
        : `${levelData.subjects.length} mata pelajaran`;
    }

    if (courseEmpty) {
      courseEmpty.hidden = visibleCourses !== 0;
    }

    if (lessonEmpty) {
      lessonEmpty.hidden = visibleLessons !== 0;
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", searchMaterials);
  }

  /* =========================================
    OVERVIEW
  ========================================= */

  function updateOverview() {
    if (!levelData?.subjects) {
      return;
    }

    const progress = getProgress();

    const values = levelData.subjects.map((subject) => {
      return Math.max(0, Math.min(100, Number(progress[subject.name]) || 0));
    });

    const completed = values.filter((value) => value >= 100).length;

    const totalProgress = values.length
      ? Math.round(values.reduce((sum, value) => sum + value, 0) / values.length)
      : 0;

    if (courseCount) {
      courseCount.textContent = levelData.subjects.length;
    }

    if (completedCount) {
      completedCount.textContent = completed;
    }

    if (assignmentCount) {
      assignmentCount.textContent = levelData.subjects.length;
    }

    const overallValue = document.getElementById("overallProgressValue");

    const overallFill = document.getElementById("overallProgressFill");

    if (overallValue) {
      overallValue.textContent = `${totalProgress}%`;
    }

    if (overallFill) {
      overallFill.style.width = `${totalProgress}%`;
    }
  }

  /* =========================================
    PROFILE DROPDOWN
  ========================================= */

  const profileArea = document.querySelector(".profile-area");

  const profileMini = document.getElementById("profileMini");

  const profileDropdown = document.getElementById("profileDropdown");

  /* =========================================
    PROFILE PAGE LINK
  ========================================= */

  const avatarProfileLink = document.getElementById("avatarProfileLink");

  const profileInfoLink = document.getElementById("profileInfoLink");

  const profileChevron = document.getElementById("profileChevron");

  function openProfilePage(event) {
    if (event) {
      event.stopPropagation();
    }

    window.location.href = "profile.html";
  }

  /* AVATAR */

  if (avatarProfileLink) {
    avatarProfileLink.addEventListener("click", openProfilePage);
  }

  /* NAMA */

  if (profileInfoLink) {
    profileInfoLink.addEventListener("click", openProfilePage);
  }

  /* =========================================
    PROFILE DROPDOWN
  ========================================= */

  function closeProfileDropdown() {
    if (!profileDropdown) {
      return;
    }

    profileDropdown.classList.remove("show");
  }

  if (profileChevron && profileDropdown) {
    profileChevron.addEventListener("click", (event) => {
      event.stopPropagation();

      profileDropdown.classList.toggle("show");
    });
  }

  if (profileMini && profileDropdown) {
    profileMini.addEventListener("click", (event) => {
      /*
          Hanya area profile kosong
          yang membuka dropdown.

          Avatar dan nama punya handler sendiri
          menuju profile.html.
        */

      if (
        event.target.closest("#avatarProfileLink") ||
        event.target.closest("#profileInfoLink") ||
        event.target.closest("#profileChevron")
      ) {
        return;
      }

      event.stopPropagation();

      profileDropdown.classList.toggle("show");
    });
  }

  document.addEventListener("click", (event) => {
    if (profileArea && !profileArea.contains(event.target)) {
      closeProfileDropdown();
    }
  });

  /* =========================================
    EDUCATION DROPDOWN
  ========================================= */

  const educationSelector = document.getElementById("educationSelector");

  const classDropdown = document.getElementById("classDropdown");

  const classOptions = document.getElementById("classOptions");

  const classDropdownTitle = document.getElementById("classDropdownTitle");

  const educationMain = educationSelector
    ? educationSelector.querySelector(".education-main")
    : null;

  /* =========================================
    CLOSE EDUCATION
  ========================================= */

  function closeEducationDropdown() {
    if (!educationSelector) {
      return;
    }

    educationSelector.classList.remove("open");

    if (educationMain) {
      educationMain.setAttribute("aria-expanded", "false");
    }
  }

  /* =========================================
    RENDER KELAS
  ========================================= */

  function renderClassOptions() {
    if (!classOptions) {
      return;
    }

    classOptions.innerHTML = "";

    if (classDropdownTitle) {
      classDropdownTitle.textContent = `PILIH KELAS ${selectedLevel}`;
    }

    const classes = levelClasses[selectedLevel] || [];

    classes.forEach((classNumber) => {
      const button = document.createElement("button");

      button.type = "button";

      button.className = "class-option";

      if (classNumber === selectedClass) {
        button.classList.add("active");
      }

      button.dataset.class = classNumber;

      button.innerHTML = `

          <span class="class-option-number">

            ${String(classNumber).padStart(2, "0")}

          </span>


          <span class="class-option-content">

            <strong>
              Kelas
              ${escapeHTML(classNumber)}
            </strong>

            <small>
              ${escapeHTML(selectedLevel)}
            </small>

          </span>


          <i
            data-feather="check"
          ></i>

        `;

      button.addEventListener("click", (event) => {
        event.stopPropagation();

        selectedClass = classNumber;

        localStorage.setItem("elearning_selected_level", selectedLevel);

        localStorage.setItem("elearning_selected_class", selectedClass);

        window.location.reload();
      });

      classOptions.appendChild(button);
    });

    refreshIcons();
  }

  /* =========================================
    EDUCATION BUTTON
  ========================================= */

  if (educationMain && educationSelector && classDropdown) {
    educationMain.setAttribute("role", "button");

    educationMain.setAttribute("tabindex", "0");

    educationMain.setAttribute("aria-expanded", "false");

    educationMain.addEventListener("click", (event) => {
      event.stopPropagation();

      const isOpen = educationSelector.classList.contains("open");

      educationSelector.classList.toggle("open", !isOpen);

      educationMain.setAttribute("aria-expanded", String(!isOpen));

      if (!isOpen) {
        renderClassOptions();
      }
    });

    document.addEventListener("click", (event) => {
      if (!educationSelector.contains(event.target)) {
        closeEducationDropdown();
      }
    });
  }

  /* =========================================
    LEVEL SWITCHER
  ========================================= */

  const levelButtons = document.querySelectorAll(
    ".level-switcher .level-option, #profileDropdown .level-option",
  );

  levelButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      event.stopPropagation();

      const nextLevel = button.dataset.level;

      if (!nextLevel || !levelClasses[nextLevel]) {
        return;
      }

      /*
            UPDATE LEVEL
          */

      selectedLevel = nextLevel;

      /*
            KELAS DIRESET KE KELAS AWAL
            SESUAI JENJANG
          */

      selectedClass = defaultClass[selectedLevel];

      /*
            SIMPAN
          */

      localStorage.setItem("elearning_selected_level", selectedLevel);

      localStorage.setItem("elearning_selected_class", selectedClass);

      /*
            UPDATE TAMPILAN
          */

      updateDashboardLevelUI();

      closeProfileDropdown();

      closeEducationDropdown();

      /*
            RELOAD DATA
          */

      window.location.reload();
    });
  });

  /* =========================================
    UPDATE LEVEL UI
  ========================================= */

  function updateDashboardLevelUI() {
    const educationText = document.getElementById("educationText");

    if (educationText) {
      educationText.textContent = `${selectedLevel} • Kelas ${selectedClass}`;
    }

    const profileClass = document.getElementById("profileClass");

    if (profileClass) {
      profileClass.textContent = `${selectedLevel} • Kelas ${selectedClass}`;
    }

    const currentLevelText = document.getElementById("currentLevelText");

    if (currentLevelText) {
      currentLevelText.textContent = selectedLevel;
    }

    const classDropdownTitle = document.getElementById("classDropdownTitle");

    if (classDropdownTitle) {
      classDropdownTitle.textContent = `PILIH KELAS ${selectedLevel}`;
    }
  }

  /* =========================================
    LOGOUT
  ========================================= */

  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("elearning_current_user");

      localStorage.removeItem("elearning_login");

      localStorage.removeItem("elearning_guest");

      localStorage.removeItem("elearning_profile");

      localStorage.removeItem("elearning_selected_level");

      localStorage.removeItem("elearning_selected_class");

      window.location.href = "login.html";
    });
  }

  /* =========================================
    LOAD PROFILE TERBARU
  ========================================= */

  function loadProfileToDashboard() {
    let savedProfile = {};

    try {
      savedProfile = JSON.parse(localStorage.getItem("elearning_profile")) || {};
    } catch (error) {
      savedProfile = {};
    }

    /*
      NAMA PROFIL
    */

    const latestName =
      savedProfile.fullName ||
      currentUser?.name ||
      currentUser?.fullname ||
      "Siswa";

    if (profileName) {
      profileName.textContent = latestName;
    }

    if (welcomeName) {
      welcomeName.textContent = latestName;
    }

    if (userName) {
      userName.textContent = latestName;
    }

    /*
      INITIAL AVATAR
    */

    const initial = latestName.trim().charAt(0).toUpperCase() || "S";

    if (avatarText) {
      avatarText.textContent = initial;

      avatarText.style.display = "block";
    }

    /*
      FOTO PROFIL
    */

    const avatarImage = document.getElementById("avatarImage");

    if (avatarImage && savedProfile.photo) {
      avatarImage.src = savedProfile.photo;

      avatarImage.hidden = false;

      if (avatarText) {
        avatarText.style.display = "none";
      }
    } else {
      if (avatarImage) {
        avatarImage.hidden = true;

        avatarImage.removeAttribute("src");
      }

      if (avatarText) {
        avatarText.style.display = "block";
      }
    }

    /*
      JANGAN mengubah:
        selectedLevel
        selectedClass

      Karena dashboard punya
      pilihan jenjang sendiri.
    */
  }

  /* =========================================
    INITIALIZE
  ========================================= */

  loadProfileToDashboard();

  updateDashboardLevelUI();

  renderClassOptions();

  renderCourses();

  renderLessons();

  updateOverview();

  searchMaterials();

  refreshIcons();

  /* =========================================
    PUSAT BANTUAN
  ========================================= */

  const helpCenterBtn = document.getElementById("helpCenterBtn");

  const helpModal = document.getElementById("helpModal");

  const helpOverlay = document.getElementById("helpOverlay");

  const helpClose = document.getElementById("helpClose");

  const helpBack = document.getElementById("helpBack");

  function openHelpModal() {
    if (!helpModal) {
      return;
    }

    helpModal.classList.add("show");

    document.body.style.overflow = "hidden";

    refreshIcons();
  }

  function closeHelpModal() {
    if (!helpModal) {
      return;
    }

    helpModal.classList.remove("show");

    document.body.style.overflow = "";
  }

  if (helpCenterBtn) {
    helpCenterBtn.addEventListener("click", openHelpModal);
  }

  if (helpOverlay) {
    helpOverlay.addEventListener("click", closeHelpModal);
  }

  if (helpClose) {
    helpClose.addEventListener("click", closeHelpModal);
  }

  if (helpBack) {
    helpBack.addEventListener("click", closeHelpModal);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeHelpModal();
    }
  });

  /* =========================================
    SIDEBAR NAVIGATION
  ========================================= */

  const mataPelajaranMenu = document.getElementById("mataPelajaranMenu");

  const materiTerbaruMenu = document.getElementById("materiTerbaruMenu");

  const mataPelajaranSection = document.getElementById("mataPelajaranSection");

  const materiTerbaruSection = document.getElementById("materiTerbaruSection");

  function smoothScrollTo(element) {
    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  if (mataPelajaranMenu) {
    mataPelajaranMenu.addEventListener("click", () => {
      smoothScrollTo(mataPelajaranSection);
    });
  }

  if (materiTerbaruMenu) {
    materiTerbaruMenu.addEventListener("click", () => {
      smoothScrollTo(materiTerbaruSection);
    });
  }

  /* =========================================
    MODAL HELPER
  ========================================= */

  function openDashboardModal(id) {
    const modal = document.getElementById(id);

    if (!modal) {
      return;
    }

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

    refreshIcons();
  }

  function closeDashboardModal(id) {
    const modal = document.getElementById(id);

    if (!modal) {
      return;
    }

    modal.classList.remove("show");

    document.body.style.overflow = "";
  }

  /* =========================================
    PROGRESS MODAL
  ========================================= */

  const progressMenu = document.getElementById("progressMenu");

  const progressChartList = document.getElementById("progressChartList");

  const progressOverallValue = document.getElementById("progressOverallValue");

  const progressOverallBar = document.getElementById("progressOverallBar");

  function renderProgressDiagram() {
    if (!progressChartList || !levelData?.subjects) {
      return;
    }

    const progress = getProgress();

    progressChartList.innerHTML = "";

    let total = 0;

    levelData.subjects.forEach((subject) => {
      const value = Math.max(
        0,
        Math.min(100, Number(progress[subject.name]) || 0),
      );

      total += value;

      const item = document.createElement("div");

      item.className = "progress-chart-item";

      item.innerHTML = `
          <div class="progress-chart-head">

            <span class="progress-chart-name">
              ${escapeHTML(subject.name)}
            </span>

            <span class="progress-chart-value">
              ${value}%
            </span>

          </div>

          <div class="progress-chart-track">

            <div
              class="progress-chart-fill"
              style="width: ${value}%"
            ></div>

          </div>
        `;

      progressChartList.appendChild(item);
    });

    const overall = levelData.subjects.length
      ? Math.round(total / levelData.subjects.length)
      : 0;

    if (progressOverallValue) {
      progressOverallValue.textContent = `${overall}%`;
    }

    if (progressOverallBar) {
      progressOverallBar.style.width = `${overall}%`;
    }

    refreshIcons();
  }

  if (progressMenu) {
    progressMenu.addEventListener("click", () => {
      renderProgressDiagram();

      openDashboardModal("progressModal");
    });
  }

  /* =========================================
    LIVE UPDATE PROGRESS
  ========================================= */

  let progressLiveTimer = null;

  function startProgressLiveUpdate() {
    if (progressLiveTimer) {
      clearInterval(progressLiveTimer);
    }

    progressLiveTimer = setInterval(() => {
      const modal = document.getElementById("progressModal");

      if (modal && modal.classList.contains("show")) {
        renderProgressDiagram();
      }
    }, 1000);
  }

  startProgressLiveUpdate();

  window.addEventListener("storage", (event) => {
    if (event.key && event.key.startsWith("elearning_progress_")) {
      renderProgressDiagram();
    }
  });

  /* =========================================
    CALENDAR MODAL
  ========================================= */

  const calendarMenu = document.getElementById("calendarMenu");

  const calendarClassText = document.getElementById("calendarClassText");

  const calendarSubjectList = document.getElementById("calendarSubjectList");

  function renderCalendarSubjects() {
    if (!calendarSubjectList || !levelData?.subjects) {
      return;
    }

    calendarSubjectList.innerHTML = "";

    if (calendarClassText) {
      calendarClassText.textContent = `${selectedLevel} • Kelas ${selectedClass}`;
    }

    levelData.subjects.forEach((subject, index) => {
      const item = document.createElement("article");

      item.className = "calendar-subject";

      item.innerHTML = `
          <div class="calendar-subject-top">

            <span class="calendar-subject-number">
              ${String(index + 1).padStart(2, "0")}
            </span>

            <h3>
              ${escapeHTML(subject.name)}
            </h3>

          </div>

          <p>
            ${escapeHTML(subject.description || "Materi pembelajaran tersedia.")}
          </p>
        `;

      calendarSubjectList.appendChild(item);
    });
  }

  if (calendarMenu) {
    calendarMenu.addEventListener("click", () => {
      renderCalendarSubjects();

      openDashboardModal("calendarModal");
    });
  }

  /* =========================================
    CLOSE MODALS
  ========================================= */

  document.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", () => {
      closeDashboardModal(element.dataset.closeModal);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    closeDashboardModal("progressModal");

    closeDashboardModal("calendarModal");
  });

