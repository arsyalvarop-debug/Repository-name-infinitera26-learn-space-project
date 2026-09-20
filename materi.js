/* =========================================
   THEME
========================================= */

(function () {
  const savedTheme = localStorage.getItem("learnspace_theme");

  document.body.classList.toggle(
    "dark-mode",
    savedTheme === "dark"
  );
})();

// =====================================
// USER
// =====================================

const currentUser = JSON.parse(localStorage.getItem("elearning_current_user"));

if (!currentUser) {
  window.location.href = "login.html";
}

// =====================================
// LEVEL & CLASS
// =====================================

const level = localStorage.getItem("elearning_selected_level") || "SD";

const classLevel = localStorage.getItem("elearning_selected_class") || "1";

// =====================================
// CURRENT SUBJECT
// =====================================

const subject = localStorage.getItem("elearning_current_subject") || "Materi";

// =====================================
// ELEMENTS
// =====================================

const levelBreadcrumb = document.getElementById("levelBreadcrumb");

const classBreadcrumb = document.getElementById("classBreadcrumb");

const subjectBreadcrumb = document.getElementById("subjectBreadcrumb");

const subjectTitle = document.getElementById("subjectTitle");

const subjectDescription = document.getElementById("subjectDescription");

const materialHeading = document.getElementById("materialHeading");

const materialText = document.getElementById("materialText");

// =====================================
// MATERIAL CONTENT
// =====================================

const content = {
  Matematika: {
    description:
      "Pelajari konsep matematika secara bertahap melalui penjelasan dan contoh.",

    title: "Pengenalan Matematika",

    body: `
            <p>
                Matematika membantu kita memahami pola,
                hubungan, ukuran, dan cara menyelesaikan
                berbagai masalah dalam kehidupan sehari-hari.
            </p>

            <h3>
                Apa yang akan kamu pelajari?
            </h3>

            <p>
                Kamu akan mempelajari konsep dasar,
                mengenali pola bilangan, melakukan operasi
                hitung, serta menggunakan matematika untuk
                menyelesaikan masalah sederhana.
            </p>

            <div class="learning-box">

                <div class="learning-icon">
                    <i data-feather="target"></i>
                </div>

                <div>

                    <strong>
                        Tujuan Pembelajaran
                    </strong>

                    <p>
                        Memahami konsep matematika dan
                        mampu menerapkannya pada persoalan
                        sederhana.
                    </p>

                </div>

            </div>

            <h3>
                Ringkasan
            </h3>

            <p>
                Pahami konsep terlebih dahulu sebelum
                melanjutkan ke contoh soal dan latihan.
            </p>
        `,
  },

  "Bahasa Indonesia": {
    description:
      "Kembangkan kemampuan membaca, memahami, dan menyampaikan informasi.",

    title: "Membaca dan Memahami Teks",

    body: `
            <p>
                Bahasa Indonesia digunakan untuk
                menyampaikan gagasan, informasi, dan
                perasaan secara lisan maupun tulisan.
            </p>

            <h3>
                Memahami sebuah teks
            </h3>

            <p>
                Saat membaca, perhatikan informasi utama,
                ide pokok, kata penting, dan hubungan
                antarbagian dalam teks.
            </p>

            <div class="learning-box">

                <div class="learning-icon">
                    <i data-feather="book-open"></i>
                </div>

                <div>

                    <strong>
                        Tujuan Pembelajaran
                    </strong>

                    <p>
                        Mampu menemukan informasi utama
                        dan memahami isi sebuah teks.
                    </p>

                </div>

            </div>
        `,
  },

  IPAS: {
    description:
      "Eksplorasi alam, makhluk hidup, lingkungan, dan kehidupan sosial.",

    title: "Makhluk Hidup dan Lingkungan",

    body: `
            <p>
                Makhluk hidup memiliki ciri dan kebutuhan
                yang berbeda. Lingkungan menyediakan berbagai
                sumber daya yang mendukung kehidupan.
            </p>

            <h3>
                Hubungan makhluk hidup dan lingkungan
            </h3>

            <p>
                Manusia, hewan, tumbuhan, dan lingkungan
                saling berhubungan dalam sebuah ekosistem.
            </p>

            <div class="learning-box">

                <div class="learning-icon">
                    <i data-feather="globe"></i>
                </div>

                <div>

                    <strong>
                        Tujuan Pembelajaran
                    </strong>

                    <p>
                        Memahami hubungan antara makhluk hidup
                        dengan lingkungan di sekitarnya.
                    </p>

                </div>

            </div>
        `,
  },

  "Bahasa Inggris": {
    description:
      "Bangun kemampuan komunikasi Bahasa Inggris melalui kosakata dan percakapan.",

    title: "Basic English",

    body: `
            <p>
                Bahasa Inggris dapat digunakan untuk
                berkomunikasi dengan orang dari berbagai
                negara dan mengakses informasi global.
            </p>

            <h3>
                Vocabulary
            </h3>

            <p>
                Vocabulary adalah kumpulan kata yang
                digunakan untuk menyampaikan berbagai
                informasi dan gagasan.
            </p>

            <div class="learning-box">

                <div class="learning-icon">
                    <i data-feather="message-circle"></i>
                </div>

                <div>

                    <strong>
                        Tujuan Pembelajaran
                    </strong>

                    <p>
                        Mengenali dan menggunakan kosakata
                        Bahasa Inggris sederhana.
                    </p>

                </div>

            </div>
        `,
  },

  // =================================
  // PABP
  // =================================

  PABP: {
    description:
      "Pelajari nilai agama, akhlak, dan budi pekerti dalam kehidupan sehari-hari.",

    title: "Pendidikan Agama dan Budi Pekerti",

    body: `
            <p>
                Pendidikan Agama dan Budi Pekerti membantu
                peserta didik mengenal nilai-nilai kebaikan
                dan menerapkannya dalam kehidupan sehari-hari.
            </p>

            <h3>
                Mengenal Budi Pekerti
            </h3>

            <p>
                Sikap jujur, bertanggung jawab, menghormati
                orang lain, dan menjaga lingkungan merupakan
                bagian dari perilaku baik dalam kehidupan.
            </p>

            <div class="learning-box">

                <div class="learning-icon">
                    <i data-feather="heart"></i>
                </div>

                <div>

                    <strong>
                        Tujuan Pembelajaran
                    </strong>

                    <p>
                        Mengenali nilai kebaikan dan
                        menerapkannya dalam kehidupan sehari-hari.
                    </p>

                </div>

            </div>
        `,
  },

  // =================================
  // PKN
  // =================================

  PKN: {
    description:
      "Kenali Pancasila, kewarganegaraan, hak, kewajiban, dan kehidupan bersama.",

    title: "Pancasila dan Kehidupan Sehari-hari",

    body: `
            <p>
                Pendidikan kewarganegaraan membantu kita
                memahami kehidupan sebagai bagian dari
                masyarakat dan negara.
            </p>

            <h3>
                Nilai Pancasila
            </h3>

            <p>
                Nilai-nilai Pancasila dapat diterapkan melalui
                sikap saling menghormati, bekerja sama,
                bertanggung jawab, dan menjaga persatuan.
            </p>

            <div class="learning-box">

                <div class="learning-icon">
                    <i data-feather="flag"></i>
                </div>

                <div>

                    <strong>
                        Tujuan Pembelajaran
                    </strong>

                    <p>
                        Memahami nilai Pancasila dan
                        menerapkannya dalam kehidupan sehari-hari.
                    </p>

                </div>

            </div>
        `,
  },

  // =================================
  // SENI BUDAYA
  // =================================

  "Seni Budaya": {
    description:
      "Kenali berbagai bentuk seni dan budaya sebagai bagian dari identitas Indonesia.",

    title: "Mengenal Seni dan Budaya",

    body: `
            <p>
                Seni merupakan salah satu cara manusia
                mengekspresikan gagasan, perasaan, dan
                kreativitas.
            </p>

            <h3>
                Bentuk Seni
            </h3>

            <p>
                Seni dapat hadir dalam berbagai bentuk,
                seperti seni rupa, musik, tari, dan
                berbagai karya budaya lainnya.
            </p>

            <div class="learning-box">

                <div class="learning-icon">
                    <i data-feather="music"></i>
                </div>

                <div>

                    <strong>
                        Tujuan Pembelajaran
                    </strong>

                    <p>
                        Mengenali bentuk seni dan menghargai
                        keberagaman budaya.
                    </p>

                </div>

            </div>
        `,
  },

  // =================================
  // KODING & AI
  // =================================

  "Koding & AI": {
    description:
      "Kenali dasar koding, logika komputasi, dan pengenalan kecerdasan buatan.",

    title: "Pengenalan Koding & AI",

    body: `
            <p>
                Koding adalah cara manusia memberikan
                instruksi kepada komputer untuk melakukan
                suatu tugas.
            </p>

            <h3>
                Berpikir Komputasional
            </h3>

            <p>
                Sebelum membuat program, kita dapat memecah
                masalah menjadi bagian-bagian yang lebih kecil,
                mencari pola, dan menyusun langkah penyelesaian.
            </p>

            <div class="learning-box">

                <div class="learning-icon">
                    <i data-feather="code"></i>
                </div>

                <div>

                    <strong>
                        Tujuan Pembelajaran
                    </strong>

                    <p>
                        Mengenal logika dasar pemrograman
                        dan memahami konsep awal kecerdasan buatan.
                    </p>

                </div>

            </div>

            <h3>
                Mengenal AI
            </h3>

            <p>
                Artificial Intelligence atau AI adalah
                teknologi yang memungkinkan sistem komputer
                melakukan tugas yang membutuhkan kemampuan
                seperti mengenali pola dan memproses informasi.
            </p>
        `,
  },

  // =================================
  // MUATAN LOKAL
  // =================================

  "Muatan Lokal": {
    description:
      "Pelajari budaya, bahasa, lingkungan, dan potensi yang ada di daerahmu.",

    title: "Budaya dan Lingkungan Daerah",

    body: `
            <p>
                Muatan Lokal memberikan kesempatan untuk
                mempelajari karakteristik daerah tempat
                peserta didik tinggal.
            </p>

            <h3>
                Mengenal Lingkungan Sekitar
            </h3>

            <p>
                Setiap daerah memiliki bahasa, budaya,
                kesenian, tradisi, dan potensi lingkungan
                yang berbeda.
            </p>

            <div class="learning-box">

                <div class="learning-icon">
                    <i data-feather="map"></i>
                </div>

                <div>

                    <strong>
                        Tujuan Pembelajaran
                    </strong>

                    <p>
                        Mengenal dan menghargai budaya serta
                        lingkungan daerah sendiri.
                    </p>

                </div>

            </div>
        `,
  },
};

// =====================================
// GET SUBJECT CONTENT
// =====================================

const currentContent = content[subject] || {
  description: "Materi pembelajaran tersedia untuk dipelajari.",

  title: "Materi Pembelajaran",

  body: `
            <p>
                Silakan pelajari materi ini secara bertahap.
            </p>

            <div class="learning-box">

                <div class="learning-icon">
                    <i data-feather="book-open"></i>
                </div>

                <div>

                    <strong>
                        Tujuan Pembelajaran
                    </strong>

                    <p>
                        Pahami materi sebelum melanjutkan
                        ke latihan.
                    </p>

                </div>

            </div>
        `,
};

// =====================================
// DISPLAY
// =====================================

levelBreadcrumb.textContent = level;

classBreadcrumb.textContent = `Kelas ${classLevel}`;

subjectBreadcrumb.textContent = subject;

subjectTitle.textContent = subject;

subjectDescription.textContent = currentContent.description;

materialHeading.textContent = currentContent.title;

materialText.innerHTML = currentContent.body;

// =====================================
// COMPLETE MATERIAL
// =====================================

const completeButton = document.getElementById("completeMaterial");

completeButton.addEventListener("click", function () {
  const progressKey = `elearning_progress_${currentUser.id}_${level}_${classLevel}`;

  const progress = JSON.parse(localStorage.getItem(progressKey)) || {};

  /*
   * BARU DI SINI PROGRESS BERUBAH.
   *
   * Masuk halaman materi = 0%
   * Membaca materi = tetap 0%
   * Klik selesai = 100%
   */

  progress[subject] = 100;

  localStorage.setItem(progressKey, JSON.stringify(progress));

  this.innerHTML = `
                Materi Selesai
                <i data-feather="check-circle"></i>
            `;

  this.disabled = true;

  this.style.opacity = ".7";

  feather.replace();

  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 800);
});

feather.replace();
