/* =========================================
   THEME
========================================= */

(function () {
  const savedTheme = localStorage.getItem("learnspace_theme");

  document.body.classList.toggle("dark-mode", savedTheme === "dark");
})();

const DATA = {
  Matematika: {
    10: [
      {
        title: "Eksponen dan Bentuk Akar",
        desc: "Mempelajari eksponen dan bentuk akar melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Eksponen dan Bentuk Akar merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Definisi dan notasi",
          "Rumus/prinsip penting",
          "Langkah penyelesaian",
          "Interpretasi hasil",
          "Penerapan pada bidang keahlian",
        ],
        example: "Contoh: 2³ × 2² = 2⁵.",
      },
      {
        title: "Logaritma",
        desc: "Mempelajari logaritma melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Logaritma merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Definisi dan notasi",
          "Rumus/prinsip penting",
          "Langkah penyelesaian",
          "Interpretasi hasil",
          "Penerapan pada bidang keahlian",
        ],
        example: "Contoh: log₂(32) = 5 karena 2⁵ = 32.",
      },
      {
        title: "Barisan dan Deret",
        desc: "Mempelajari barisan dan deret melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Barisan dan Deret merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Definisi dan notasi",
          "Rumus/prinsip penting",
          "Langkah penyelesaian",
          "Interpretasi hasil",
          "Penerapan pada bidang keahlian",
        ],
        example:
          "Contoh: buat model dari data yang diketahui, kerjakan langkahnya, lalu cek kembali satuan dan hasil.",
      },
      {
        title: "Vektor",
        desc: "Mempelajari vektor melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Vektor merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Definisi dan notasi",
          "Rumus/prinsip penting",
          "Langkah penyelesaian",
          "Interpretasi hasil",
          "Penerapan pada bidang keahlian",
        ],
        example: "Contoh: vektor bidang dapat ditulis sebagai (x, y).",
      },
      {
        title: "Trigonometri Dasar",
        desc: "Mempelajari trigonometri dasar melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Trigonometri Dasar merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Definisi dan notasi",
          "Rumus/prinsip penting",
          "Langkah penyelesaian",
          "Interpretasi hasil",
          "Penerapan pada bidang keahlian",
        ],
        example:
          "Contoh: buat model dari data yang diketahui, kerjakan langkahnya, lalu cek kembali satuan dan hasil.",
      },
      {
        title: "Persamaan dan Pertidaksamaan",
        desc: "Mempelajari persamaan dan pertidaksamaan melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Persamaan dan Pertidaksamaan merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Definisi dan notasi",
          "Rumus/prinsip penting",
          "Langkah penyelesaian",
          "Interpretasi hasil",
          "Penerapan pada bidang keahlian",
        ],
        example:
          "Contoh: buat model dari data yang diketahui, kerjakan langkahnya, lalu cek kembali satuan dan hasil.",
      },
      {
        title: "Fungsi dan Grafik",
        desc: "Mempelajari fungsi dan grafik melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Fungsi dan Grafik merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Definisi dan notasi",
          "Rumus/prinsip penting",
          "Langkah penyelesaian",
          "Interpretasi hasil",
          "Penerapan pada bidang keahlian",
        ],
        example:
          "Contoh: buat model dari data yang diketahui, kerjakan langkahnya, lalu cek kembali satuan dan hasil.",
      },
      {
        title: "Analisis Data",
        desc: "Mempelajari analisis data melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Analisis Data merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Definisi dan notasi",
          "Rumus/prinsip penting",
          "Langkah penyelesaian",
          "Interpretasi hasil",
          "Penerapan pada bidang keahlian",
        ],
        example:
          "Contoh: buat model dari data yang diketahui, kerjakan langkahnya, lalu cek kembali satuan dan hasil.",
      },
      {
        title: "Peluang",
        desc: "Mempelajari peluang melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Peluang merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Definisi dan notasi",
          "Rumus/prinsip penting",
          "Langkah penyelesaian",
          "Interpretasi hasil",
          "Penerapan pada bidang keahlian",
        ],
        example:
          "Contoh: pada dadu fair, peluang muncul bilangan genap adalah 3/6 = 1/2.",
      },
    ],
    11: [
      {
        title: "Matriks",
        desc: "Mempelajari matriks melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Matriks merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Definisi dan notasi",
          "Rumus/prinsip penting",
          "Langkah penyelesaian",
          "Interpretasi hasil",
          "Penerapan pada bidang keahlian",
        ],
        example:
          "Contoh: buat model dari data yang diketahui, kerjakan langkahnya, lalu cek kembali satuan dan hasil.",
      },
      {
        title: "Fungsi Kuadrat",
        desc: "Mempelajari fungsi kuadrat melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Fungsi Kuadrat merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Definisi dan notasi",
          "Rumus/prinsip penting",
          "Langkah penyelesaian",
          "Interpretasi hasil",
          "Penerapan pada bidang keahlian",
        ],
        example:
          "Contoh: buat model dari data yang diketahui, kerjakan langkahnya, lalu cek kembali satuan dan hasil.",
      },
      {
        title: "Transformasi Geometri",
        desc: "Mempelajari transformasi geometri melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Transformasi Geometri merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Definisi dan notasi",
          "Rumus/prinsip penting",
          "Langkah penyelesaian",
          "Interpretasi hasil",
          "Penerapan pada bidang keahlian",
        ],
        example:
          "Contoh: buat model dari data yang diketahui, kerjakan langkahnya, lalu cek kembali satuan dan hasil.",
      },
      {
        title: "Lingkaran",
        desc: "Mempelajari lingkaran melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Lingkaran merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Definisi dan notasi",
          "Rumus/prinsip penting",
          "Langkah penyelesaian",
          "Interpretasi hasil",
          "Penerapan pada bidang keahlian",
        ],
        example:
          "Contoh: buat model dari data yang diketahui, kerjakan langkahnya, lalu cek kembali satuan dan hasil.",
      },
      {
        title: "Logika Matematika",
        desc: "Mempelajari logika matematika melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Logika Matematika merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Definisi dan notasi",
          "Rumus/prinsip penting",
          "Langkah penyelesaian",
          "Interpretasi hasil",
          "Penerapan pada bidang keahlian",
        ],
        example:
          "Contoh: buat model dari data yang diketahui, kerjakan langkahnya, lalu cek kembali satuan dan hasil.",
      },
      {
        title: "Pemodelan Matematika",
        desc: "Mempelajari pemodelan matematika melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Pemodelan Matematika merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Definisi dan notasi",
          "Rumus/prinsip penting",
          "Langkah penyelesaian",
          "Interpretasi hasil",
          "Penerapan pada bidang keahlian",
        ],
        example:
          "Contoh: buat model dari data yang diketahui, kerjakan langkahnya, lalu cek kembali satuan dan hasil.",
      },
    ],
    12: [
      {
        title: "Statistika Industri",
        desc: "Mempelajari statistika industri melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Statistika Industri merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Definisi dan notasi",
          "Rumus/prinsip penting",
          "Langkah penyelesaian",
          "Interpretasi hasil",
          "Penerapan pada bidang keahlian",
        ],
        example:
          "Contoh: buat model dari data yang diketahui, kerjakan langkahnya, lalu cek kembali satuan dan hasil.",
      },
      {
        title: "Limit Fungsi",
        desc: "Mempelajari limit fungsi melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Limit Fungsi merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Definisi dan notasi",
          "Rumus/prinsip penting",
          "Langkah penyelesaian",
          "Interpretasi hasil",
          "Penerapan pada bidang keahlian",
        ],
        example:
          "Contoh: buat model dari data yang diketahui, kerjakan langkahnya, lalu cek kembali satuan dan hasil.",
      },
      {
        title: "Turunan",
        desc: "Mempelajari turunan melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Turunan merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Definisi dan notasi",
          "Rumus/prinsip penting",
          "Langkah penyelesaian",
          "Interpretasi hasil",
          "Penerapan pada bidang keahlian",
        ],
        example: "Contoh: jika f(x)=x², maka f'(x)=2x.",
      },
      {
        title: "Integral",
        desc: "Mempelajari integral melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Integral merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Definisi dan notasi",
          "Rumus/prinsip penting",
          "Langkah penyelesaian",
          "Interpretasi hasil",
          "Penerapan pada bidang keahlian",
        ],
        example: "Contoh: ∫2x dx = x² + C.",
      },
      {
        title: "Penerapan Matematika pada Bidang Keahlian",
        desc: "Mempelajari penerapan matematika pada bidang keahlian melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Penerapan Matematika pada Bidang Keahlian merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Definisi dan notasi",
          "Rumus/prinsip penting",
          "Langkah penyelesaian",
          "Interpretasi hasil",
          "Penerapan pada bidang keahlian",
        ],
        example:
          "Contoh: buat model dari data yang diketahui, kerjakan langkahnya, lalu cek kembali satuan dan hasil.",
      },
    ],
  },
  "Bahasa Indonesia": {
    10: [
      {
        title: "Teks Laporan Hasil Observasi",
        desc: "Mempelajari teks laporan hasil observasi melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Teks Laporan Hasil Observasi merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Tujuan dan konteks teks",
          "Struktur dan ciri kebahasaan",
          "Analisis isi",
          "Menulis atau menyunting",
          "Penyajian hasil",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan teks laporan hasil observasi.",
      },
      {
        title: "Teks Eksposisi",
        desc: "Mempelajari teks eksposisi melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Teks Eksposisi merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Tujuan dan konteks teks",
          "Struktur dan ciri kebahasaan",
          "Analisis isi",
          "Menulis atau menyunting",
          "Penyajian hasil",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan teks eksposisi.",
      },
      {
        title: "Teks Anekdot",
        desc: "Mempelajari teks anekdot melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Teks Anekdot merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Tujuan dan konteks teks",
          "Struktur dan ciri kebahasaan",
          "Analisis isi",
          "Menulis atau menyunting",
          "Penyajian hasil",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan teks anekdot.",
      },
      {
        title: "Teks Negosiasi",
        desc: "Mempelajari teks negosiasi melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Teks Negosiasi merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Tujuan dan konteks teks",
          "Struktur dan ciri kebahasaan",
          "Analisis isi",
          "Menulis atau menyunting",
          "Penyajian hasil",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan teks negosiasi.",
      },
      {
        title: "Hikayat",
        desc: "Mempelajari hikayat melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Hikayat merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Tujuan dan konteks teks",
          "Struktur dan ciri kebahasaan",
          "Analisis isi",
          "Menulis atau menyunting",
          "Penyajian hasil",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan hikayat.",
      },
      {
        title: "Monolog",
        desc: "Mempelajari monolog melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Monolog merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Tujuan dan konteks teks",
          "Struktur dan ciri kebahasaan",
          "Analisis isi",
          "Menulis atau menyunting",
          "Penyajian hasil",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan monolog.",
      },
      {
        title: "Membaca Kritis",
        desc: "Mempelajari membaca kritis melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Membaca Kritis merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Tujuan dan konteks teks",
          "Struktur dan ciri kebahasaan",
          "Analisis isi",
          "Menulis atau menyunting",
          "Penyajian hasil",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan membaca kritis.",
      },
    ],
    11: [
      {
        title: "Teks Argumentasi",
        desc: "Mempelajari teks argumentasi melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Teks Argumentasi merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Tujuan dan konteks teks",
          "Struktur dan ciri kebahasaan",
          "Analisis isi",
          "Menulis atau menyunting",
          "Penyajian hasil",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan teks argumentasi.",
      },
      {
        title: "Teks Persuasif",
        desc: "Mempelajari teks persuasif melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Teks Persuasif merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Tujuan dan konteks teks",
          "Struktur dan ciri kebahasaan",
          "Analisis isi",
          "Menulis atau menyunting",
          "Penyajian hasil",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan teks persuasif.",
      },
      {
        title: "Laporan Kerja",
        desc: "Mempelajari laporan kerja melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Laporan Kerja merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Tujuan dan konteks teks",
          "Struktur dan ciri kebahasaan",
          "Analisis isi",
          "Menulis atau menyunting",
          "Penyajian hasil",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan laporan kerja.",
      },
      {
        title: "Prosedur Teknis",
        desc: "Mempelajari prosedur teknis melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Prosedur Teknis merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Tujuan dan konteks teks",
          "Struktur dan ciri kebahasaan",
          "Analisis isi",
          "Menulis atau menyunting",
          "Penyajian hasil",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan prosedur teknis.",
      },
      {
        title: "Drama",
        desc: "Mempelajari drama melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Drama merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Tujuan dan konteks teks",
          "Struktur dan ciri kebahasaan",
          "Analisis isi",
          "Menulis atau menyunting",
          "Penyajian hasil",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan drama.",
      },
      {
        title: "Presentasi Profesional",
        desc: "Mempelajari presentasi profesional melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Presentasi Profesional merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Tujuan dan konteks teks",
          "Struktur dan ciri kebahasaan",
          "Analisis isi",
          "Menulis atau menyunting",
          "Penyajian hasil",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan presentasi profesional.",
      },
    ],
    12: [
      {
        title: "Surat Lamaran Pekerjaan",
        desc: "Mempelajari surat lamaran pekerjaan melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Surat Lamaran Pekerjaan merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Tujuan dan konteks teks",
          "Struktur dan ciri kebahasaan",
          "Analisis isi",
          "Menulis atau menyunting",
          "Penyajian hasil",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan surat lamaran pekerjaan.",
      },
      {
        title: "Artikel Ilmiah",
        desc: "Mempelajari artikel ilmiah melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Artikel Ilmiah merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Tujuan dan konteks teks",
          "Struktur dan ciri kebahasaan",
          "Analisis isi",
          "Menulis atau menyunting",
          "Penyajian hasil",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan artikel ilmiah.",
      },
      {
        title: "Esai Kritis",
        desc: "Mempelajari esai kritis melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Esai Kritis merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Tujuan dan konteks teks",
          "Struktur dan ciri kebahasaan",
          "Analisis isi",
          "Menulis atau menyunting",
          "Penyajian hasil",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan esai kritis.",
      },
      {
        title: "Laporan Hasil PKL",
        desc: "Mempelajari laporan hasil pkl melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Laporan Hasil PKL merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Tujuan dan konteks teks",
          "Struktur dan ciri kebahasaan",
          "Analisis isi",
          "Menulis atau menyunting",
          "Penyajian hasil",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan laporan hasil pkl.",
      },
      {
        title: "Literasi Media dan Cek Fakta",
        desc: "Mempelajari literasi media dan cek fakta melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Literasi Media dan Cek Fakta merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Tujuan dan konteks teks",
          "Struktur dan ciri kebahasaan",
          "Analisis isi",
          "Menulis atau menyunting",
          "Penyajian hasil",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan literasi media dan cek fakta.",
      },
    ],
  },
  "Bahasa Inggris": {
    10: [
      {
        title: "Recount Text",
        desc: "Mempelajari recount text melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Recount Text merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Purpose",
          "Text structure",
          "Grammar/vocabulary",
          "Comprehension",
          "Workplace application",
        ],
        example: 'Example: "I joined an internship program last month."',
      },
      {
        title: "Narrative Text",
        desc: "Mempelajari narrative text melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Narrative Text merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Purpose",
          "Text structure",
          "Grammar/vocabulary",
          "Comprehension",
          "Workplace application",
        ],
        example:
          "Example: gunakan konteks, struktur teks, vocabulary, dan grammar yang sesuai tujuan komunikasi.",
      },
      {
        title: "Descriptive Text",
        desc: "Mempelajari descriptive text melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Descriptive Text merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Purpose",
          "Text structure",
          "Grammar/vocabulary",
          "Comprehension",
          "Workplace application",
        ],
        example:
          'Example: "The laboratory is clean, bright, and well organized."',
      },
      {
        title: "Expressing Opinion",
        desc: "Mempelajari expressing opinion melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Expressing Opinion merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Purpose",
          "Text structure",
          "Grammar/vocabulary",
          "Comprehension",
          "Workplace application",
        ],
        example:
          'Example: "I think this method is effective because it saves time."',
      },
      {
        title: "Procedure and Instructions",
        desc: "Mempelajari procedure and instructions melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Procedure and Instructions merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Purpose",
          "Text structure",
          "Grammar/vocabulary",
          "Comprehension",
          "Workplace application",
        ],
        example:
          "Example: gunakan konteks, struktur teks, vocabulary, dan grammar yang sesuai tujuan komunikasi.",
      },
      {
        title: "Conversation Skills",
        desc: "Mempelajari conversation skills melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Conversation Skills merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Purpose",
          "Text structure",
          "Grammar/vocabulary",
          "Comprehension",
          "Workplace application",
        ],
        example:
          "Example: gunakan konteks, struktur teks, vocabulary, dan grammar yang sesuai tujuan komunikasi.",
      },
    ],
    11: [
      {
        title: "Analytical Exposition",
        desc: "Mempelajari analytical exposition melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Analytical Exposition merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Purpose",
          "Text structure",
          "Grammar/vocabulary",
          "Comprehension",
          "Workplace application",
        ],
        example:
          "Example: gunakan konteks, struktur teks, vocabulary, dan grammar yang sesuai tujuan komunikasi.",
      },
      {
        title: "Manual and Procedure",
        desc: "Mempelajari manual and procedure melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Manual and Procedure merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Purpose",
          "Text structure",
          "Grammar/vocabulary",
          "Comprehension",
          "Workplace application",
        ],
        example:
          "Example: gunakan konteks, struktur teks, vocabulary, dan grammar yang sesuai tujuan komunikasi.",
      },
      {
        title: "Technical Communication",
        desc: "Mempelajari technical communication melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Technical Communication merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Purpose",
          "Text structure",
          "Grammar/vocabulary",
          "Comprehension",
          "Workplace application",
        ],
        example:
          "Example: gunakan konteks, struktur teks, vocabulary, dan grammar yang sesuai tujuan komunikasi.",
      },
      {
        title: "Professional Email",
        desc: "Mempelajari professional email melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Professional Email merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Purpose",
          "Text structure",
          "Grammar/vocabulary",
          "Comprehension",
          "Workplace application",
        ],
        example:
          "Example: gunakan konteks, struktur teks, vocabulary, dan grammar yang sesuai tujuan komunikasi.",
      },
      {
        title: "Presentation Skills",
        desc: "Mempelajari presentation skills melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Presentation Skills merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Purpose",
          "Text structure",
          "Grammar/vocabulary",
          "Comprehension",
          "Workplace application",
        ],
        example:
          "Example: gunakan konteks, struktur teks, vocabulary, dan grammar yang sesuai tujuan komunikasi.",
      },
    ],
    12: [
      {
        title: "CV / Resume",
        desc: "Mempelajari cv / resume melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "CV / Resume merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Purpose",
          "Text structure",
          "Grammar/vocabulary",
          "Comprehension",
          "Workplace application",
        ],
        example:
          "Example: susun profile, education, skills, projects, and experience.",
      },
      {
        title: "Job Interview",
        desc: "Mempelajari job interview melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Job Interview merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Purpose",
          "Text structure",
          "Grammar/vocabulary",
          "Comprehension",
          "Workplace application",
        ],
        example:
          "Example: gunakan konteks, struktur teks, vocabulary, dan grammar yang sesuai tujuan komunikasi.",
      },
      {
        title: "Public Speaking",
        desc: "Mempelajari public speaking melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Public Speaking merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Purpose",
          "Text structure",
          "Grammar/vocabulary",
          "Comprehension",
          "Workplace application",
        ],
        example:
          "Example: gunakan konteks, struktur teks, vocabulary, dan grammar yang sesuai tujuan komunikasi.",
      },
      {
        title: "Business Presentation",
        desc: "Mempelajari business presentation melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Business Presentation merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Purpose",
          "Text structure",
          "Grammar/vocabulary",
          "Comprehension",
          "Workplace application",
        ],
        example:
          "Example: gunakan konteks, struktur teks, vocabulary, dan grammar yang sesuai tujuan komunikasi.",
      },
      {
        title: "Professional Communication",
        desc: "Mempelajari professional communication melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Professional Communication merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Purpose",
          "Text structure",
          "Grammar/vocabulary",
          "Comprehension",
          "Workplace application",
        ],
        example:
          "Example: gunakan konteks, struktur teks, vocabulary, dan grammar yang sesuai tujuan komunikasi.",
      },
    ],
  },
  "Pendidikan Pancasila": {
    10: [
      {
        title: "Sejarah Perumusan Pancasila",
        desc: "Mempelajari sejarah perumusan pancasila melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Sejarah Perumusan Pancasila merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep/ketentuan",
          "Konteks kehidupan warga",
          "Hak dan kewajiban",
          "Analisis kasus",
          "Refleksi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan sejarah perumusan pancasila.",
      },
      {
        title: "Nilai-Nilai Pancasila",
        desc: "Mempelajari nilai-nilai pancasila melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Nilai-Nilai Pancasila merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep/ketentuan",
          "Konteks kehidupan warga",
          "Hak dan kewajiban",
          "Analisis kasus",
          "Refleksi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan nilai-nilai pancasila.",
      },
      {
        title: "UUD NRI Tahun 1945",
        desc: "Mempelajari uud nri tahun 1945 melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "UUD NRI Tahun 1945 merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep/ketentuan",
          "Konteks kehidupan warga",
          "Hak dan kewajiban",
          "Analisis kasus",
          "Refleksi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan uud nri tahun 1945.",
      },
      {
        title: "Norma dan Aturan",
        desc: "Mempelajari norma dan aturan melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Norma dan Aturan merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep/ketentuan",
          "Konteks kehidupan warga",
          "Hak dan kewajiban",
          "Analisis kasus",
          "Refleksi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan norma dan aturan.",
      },
      {
        title: "Demokrasi dan Kewarganegaraan",
        desc: "Mempelajari demokrasi dan kewarganegaraan melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Demokrasi dan Kewarganegaraan merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep/ketentuan",
          "Konteks kehidupan warga",
          "Hak dan kewajiban",
          "Analisis kasus",
          "Refleksi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan demokrasi dan kewarganegaraan.",
      },
      {
        title: "Keberagaman dan Bhinneka Tunggal Ika",
        desc: "Mempelajari keberagaman dan bhinneka tunggal ika melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Keberagaman dan Bhinneka Tunggal Ika merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep/ketentuan",
          "Konteks kehidupan warga",
          "Hak dan kewajiban",
          "Analisis kasus",
          "Refleksi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan keberagaman dan bhinneka tunggal ika.",
      },
      {
        title: "NKRI dan Bela Negara",
        desc: "Mempelajari nkri dan bela negara melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "NKRI dan Bela Negara merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep/ketentuan",
          "Konteks kehidupan warga",
          "Hak dan kewajiban",
          "Analisis kasus",
          "Refleksi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan nkri dan bela negara.",
      },
    ],
    11: [
      {
        title: "Kedudukan UUD NRI 1945",
        desc: "Mempelajari kedudukan uud nri 1945 melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Kedudukan UUD NRI 1945 merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep/ketentuan",
          "Konteks kehidupan warga",
          "Hak dan kewajiban",
          "Analisis kasus",
          "Refleksi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan kedudukan uud nri 1945.",
      },
      {
        title: "Tata Urutan Peraturan",
        desc: "Mempelajari tata urutan peraturan melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Tata Urutan Peraturan merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep/ketentuan",
          "Konteks kehidupan warga",
          "Hak dan kewajiban",
          "Analisis kasus",
          "Refleksi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan tata urutan peraturan.",
      },
      {
        title: "Budaya Taat Hukum",
        desc: "Mempelajari budaya taat hukum melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Budaya Taat Hukum merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep/ketentuan",
          "Konteks kehidupan warga",
          "Hak dan kewajiban",
          "Analisis kasus",
          "Refleksi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan budaya taat hukum.",
      },
      {
        title: "Hak dan Kewajiban Warga Negara",
        desc: "Mempelajari hak dan kewajiban warga negara melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Hak dan Kewajiban Warga Negara merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep/ketentuan",
          "Konteks kehidupan warga",
          "Hak dan kewajiban",
          "Analisis kasus",
          "Refleksi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan hak dan kewajiban warga negara.",
      },
      {
        title: "Demokrasi dan Partisipasi",
        desc: "Mempelajari demokrasi dan partisipasi melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Demokrasi dan Partisipasi merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep/ketentuan",
          "Konteks kehidupan warga",
          "Hak dan kewajiban",
          "Analisis kasus",
          "Refleksi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan demokrasi dan partisipasi.",
      },
      {
        title: "Keadilan dan Kesetaraan",
        desc: "Mempelajari keadilan dan kesetaraan melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Keadilan dan Kesetaraan merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep/ketentuan",
          "Konteks kehidupan warga",
          "Hak dan kewajiban",
          "Analisis kasus",
          "Refleksi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan keadilan dan kesetaraan.",
      },
    ],
    12: [
      {
        title: "Konstitusi dan Kehidupan Bernegara",
        desc: "Mempelajari konstitusi dan kehidupan bernegara melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Konstitusi dan Kehidupan Bernegara merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep/ketentuan",
          "Konteks kehidupan warga",
          "Hak dan kewajiban",
          "Analisis kasus",
          "Refleksi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan konstitusi dan kehidupan bernegara.",
      },
      {
        title: "Kedaulatan Negara",
        desc: "Mempelajari kedaulatan negara melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Kedaulatan Negara merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep/ketentuan",
          "Konteks kehidupan warga",
          "Hak dan kewajiban",
          "Analisis kasus",
          "Refleksi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan kedaulatan negara.",
      },
      {
        title: "Hak Asasi Manusia",
        desc: "Mempelajari hak asasi manusia melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Hak Asasi Manusia merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep/ketentuan",
          "Konteks kehidupan warga",
          "Hak dan kewajiban",
          "Analisis kasus",
          "Refleksi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan hak asasi manusia.",
      },
      {
        title: "Persatuan dalam Keberagaman",
        desc: "Mempelajari persatuan dalam keberagaman melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Persatuan dalam Keberagaman merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep/ketentuan",
          "Konteks kehidupan warga",
          "Hak dan kewajiban",
          "Analisis kasus",
          "Refleksi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan persatuan dalam keberagaman.",
      },
      {
        title: "Bela Negara",
        desc: "Mempelajari bela negara melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Bela Negara merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep/ketentuan",
          "Konteks kehidupan warga",
          "Hak dan kewajiban",
          "Analisis kasus",
          "Refleksi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan bela negara.",
      },
      {
        title: "Partisipasi Warga",
        desc: "Mempelajari partisipasi warga melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Partisipasi Warga merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep/ketentuan",
          "Konteks kehidupan warga",
          "Hak dan kewajiban",
          "Analisis kasus",
          "Refleksi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan partisipasi warga.",
      },
      {
        title: "Refleksi Kewarganegaraan",
        desc: "Mempelajari refleksi kewarganegaraan melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Refleksi Kewarganegaraan merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep/ketentuan",
          "Konteks kehidupan warga",
          "Hak dan kewajiban",
          "Analisis kasus",
          "Refleksi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan refleksi kewarganegaraan.",
      },
    ],
  },
  Sejarah: {
    10: [
      {
        title: "Konsep Dasar Ilmu Sejarah",
        desc: "Mempelajari konsep dasar ilmu sejarah melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Konsep Dasar Ilmu Sejarah merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kronologi",
          "Konteks peristiwa",
          "Sumber sejarah",
          "Sebab-akibat",
          "Interpretasi",
        ],
        example:
          "Contoh: susun kronologi, periksa sumber, lalu jelaskan hubungan sebab-akibat dan konteks zamannya.",
      },
      {
        title: "Kronologi, Diakronis, dan Sinkronis",
        desc: "Mempelajari kronologi, diakronis, dan sinkronis melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Kronologi, Diakronis, dan Sinkronis merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kronologi",
          "Konteks peristiwa",
          "Sumber sejarah",
          "Sebab-akibat",
          "Interpretasi",
        ],
        example:
          "Contoh: susun kronologi, periksa sumber, lalu jelaskan hubungan sebab-akibat dan konteks zamannya.",
      },
      {
        title: "Penelitian Sejarah Sederhana",
        desc: "Mempelajari penelitian sejarah sederhana melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Penelitian Sejarah Sederhana merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kronologi",
          "Konteks peristiwa",
          "Sumber sejarah",
          "Sebab-akibat",
          "Interpretasi",
        ],
        example:
          "Contoh: susun kronologi, periksa sumber, lalu jelaskan hubungan sebab-akibat dan konteks zamannya.",
      },
      {
        title: "Sejarah Indonesia Masa Pra-Aksara",
        desc: "Mempelajari sejarah indonesia masa pra-aksara melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Sejarah Indonesia Masa Pra-Aksara merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kronologi",
          "Konteks peristiwa",
          "Sumber sejarah",
          "Sebab-akibat",
          "Interpretasi",
        ],
        example:
          "Contoh: susun kronologi, periksa sumber, lalu jelaskan hubungan sebab-akibat dan konteks zamannya.",
      },
      {
        title: "Hindu-Buddha di Indonesia",
        desc: "Mempelajari hindu-buddha di indonesia melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Hindu-Buddha di Indonesia merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kronologi",
          "Konteks peristiwa",
          "Sumber sejarah",
          "Sebab-akibat",
          "Interpretasi",
        ],
        example:
          "Contoh: susun kronologi, periksa sumber, lalu jelaskan hubungan sebab-akibat dan konteks zamannya.",
      },
      {
        title: "Islam di Indonesia",
        desc: "Mempelajari islam di indonesia melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Islam di Indonesia merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kronologi",
          "Konteks peristiwa",
          "Sumber sejarah",
          "Sebab-akibat",
          "Interpretasi",
        ],
        example:
          "Contoh: susun kronologi, periksa sumber, lalu jelaskan hubungan sebab-akibat dan konteks zamannya.",
      },
      {
        title: "Sejarah Lokal dan Jalur Rempah",
        desc: "Mempelajari sejarah lokal dan jalur rempah melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Sejarah Lokal dan Jalur Rempah merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kronologi",
          "Konteks peristiwa",
          "Sumber sejarah",
          "Sebab-akibat",
          "Interpretasi",
        ],
        example:
          "Contoh: susun kronologi, periksa sumber, lalu jelaskan hubungan sebab-akibat dan konteks zamannya.",
      },
    ],
    11: [
      {
        title: "Kolonialisme dan Imperialisme",
        desc: "Mempelajari kolonialisme dan imperialisme melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Kolonialisme dan Imperialisme merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kronologi",
          "Konteks peristiwa",
          "Sumber sejarah",
          "Sebab-akibat",
          "Interpretasi",
        ],
        example:
          "Contoh: susun kronologi, periksa sumber, lalu jelaskan hubungan sebab-akibat dan konteks zamannya.",
      },
      {
        title: "Perlawanan Bangsa Indonesia",
        desc: "Mempelajari perlawanan bangsa indonesia melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Perlawanan Bangsa Indonesia merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kronologi",
          "Konteks peristiwa",
          "Sumber sejarah",
          "Sebab-akibat",
          "Interpretasi",
        ],
        example:
          "Contoh: susun kronologi, periksa sumber, lalu jelaskan hubungan sebab-akibat dan konteks zamannya.",
      },
      {
        title: "Tanam Paksa dan Kebijakan Kolonial",
        desc: "Mempelajari tanam paksa dan kebijakan kolonial melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Tanam Paksa dan Kebijakan Kolonial merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kronologi",
          "Konteks peristiwa",
          "Sumber sejarah",
          "Sebab-akibat",
          "Interpretasi",
        ],
        example:
          "Contoh: susun kronologi, periksa sumber, lalu jelaskan hubungan sebab-akibat dan konteks zamannya.",
      },
      {
        title: "Pergerakan Nasional",
        desc: "Mempelajari pergerakan nasional melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Pergerakan Nasional merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kronologi",
          "Konteks peristiwa",
          "Sumber sejarah",
          "Sebab-akibat",
          "Interpretasi",
        ],
        example:
          "Contoh: susun kronologi, periksa sumber, lalu jelaskan hubungan sebab-akibat dan konteks zamannya.",
      },
      {
        title: "Sumpah Pemuda",
        desc: "Mempelajari sumpah pemuda melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Sumpah Pemuda merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kronologi",
          "Konteks peristiwa",
          "Sumber sejarah",
          "Sebab-akibat",
          "Interpretasi",
        ],
        example:
          "Contoh: susun kronologi, periksa sumber, lalu jelaskan hubungan sebab-akibat dan konteks zamannya.",
      },
      {
        title: "Pendudukan Jepang",
        desc: "Mempelajari pendudukan jepang melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Pendudukan Jepang merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kronologi",
          "Konteks peristiwa",
          "Sumber sejarah",
          "Sebab-akibat",
          "Interpretasi",
        ],
        example:
          "Contoh: susun kronologi, periksa sumber, lalu jelaskan hubungan sebab-akibat dan konteks zamannya.",
      },
      {
        title: "Perang Dunia I dan II",
        desc: "Mempelajari perang dunia i dan ii melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Perang Dunia I dan II merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kronologi",
          "Konteks peristiwa",
          "Sumber sejarah",
          "Sebab-akibat",
          "Interpretasi",
        ],
        example:
          "Contoh: susun kronologi, periksa sumber, lalu jelaskan hubungan sebab-akibat dan konteks zamannya.",
      },
    ],
    12: [
      {
        title: "Proklamasi Kemerdekaan",
        desc: "Mempelajari proklamasi kemerdekaan melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Proklamasi Kemerdekaan merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kronologi",
          "Konteks peristiwa",
          "Sumber sejarah",
          "Sebab-akibat",
          "Interpretasi",
        ],
        example:
          "Contoh: susun kronologi, periksa sumber, lalu jelaskan hubungan sebab-akibat dan konteks zamannya.",
      },
      {
        title: "Mempertahankan Kemerdekaan",
        desc: "Mempelajari mempertahankan kemerdekaan melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Mempertahankan Kemerdekaan merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kronologi",
          "Konteks peristiwa",
          "Sumber sejarah",
          "Sebab-akibat",
          "Interpretasi",
        ],
        example:
          "Contoh: susun kronologi, periksa sumber, lalu jelaskan hubungan sebab-akibat dan konteks zamannya.",
      },
      {
        title: "Demokrasi Liberal",
        desc: "Mempelajari demokrasi liberal melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Demokrasi Liberal merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kronologi",
          "Konteks peristiwa",
          "Sumber sejarah",
          "Sebab-akibat",
          "Interpretasi",
        ],
        example:
          "Contoh: susun kronologi, periksa sumber, lalu jelaskan hubungan sebab-akibat dan konteks zamannya.",
      },
      {
        title: "Demokrasi Terpimpin",
        desc: "Mempelajari demokrasi terpimpin melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Demokrasi Terpimpin merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kronologi",
          "Konteks peristiwa",
          "Sumber sejarah",
          "Sebab-akibat",
          "Interpretasi",
        ],
        example:
          "Contoh: susun kronologi, periksa sumber, lalu jelaskan hubungan sebab-akibat dan konteks zamannya.",
      },
      {
        title: "Orde Baru",
        desc: "Mempelajari orde baru melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Orde Baru merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kronologi",
          "Konteks peristiwa",
          "Sumber sejarah",
          "Sebab-akibat",
          "Interpretasi",
        ],
        example:
          "Contoh: susun kronologi, periksa sumber, lalu jelaskan hubungan sebab-akibat dan konteks zamannya.",
      },
      {
        title: "Reformasi",
        desc: "Mempelajari reformasi melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Reformasi merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kronologi",
          "Konteks peristiwa",
          "Sumber sejarah",
          "Sebab-akibat",
          "Interpretasi",
        ],
        example:
          "Contoh: susun kronologi, periksa sumber, lalu jelaskan hubungan sebab-akibat dan konteks zamannya.",
      },
      {
        title: "Perang Dingin",
        desc: "Mempelajari perang dingin melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Perang Dingin merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kronologi",
          "Konteks peristiwa",
          "Sumber sejarah",
          "Sebab-akibat",
          "Interpretasi",
        ],
        example:
          "Contoh: susun kronologi, periksa sumber, lalu jelaskan hubungan sebab-akibat dan konteks zamannya.",
      },
      {
        title: "Organisasi Internasional",
        desc: "Mempelajari organisasi internasional melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Organisasi Internasional merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kronologi",
          "Konteks peristiwa",
          "Sumber sejarah",
          "Sebab-akibat",
          "Interpretasi",
        ],
        example:
          "Contoh: susun kronologi, periksa sumber, lalu jelaskan hubungan sebab-akibat dan konteks zamannya.",
      },
    ],
  },
  Informatika: {
    10: [
      {
        title: "Berpikir Komputasional",
        desc: "Mempelajari berpikir komputasional melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Berpikir Komputasional merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep sistem",
          "Algoritma/solusi",
          "Data",
          "Testing/debugging",
          "Etika dan keamanan",
        ],
        example:
          "Contoh: rancang solusi, implementasikan, uji, catat error, lalu lakukan perbaikan.",
      },
      {
        title: "Sistem Komputer",
        desc: "Mempelajari sistem komputer melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Sistem Komputer merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep sistem",
          "Algoritma/solusi",
          "Data",
          "Testing/debugging",
          "Etika dan keamanan",
        ],
        example:
          "Contoh: rancang solusi, implementasikan, uji, catat error, lalu lakukan perbaikan.",
      },
      {
        title: "Jaringan Komputer Dasar",
        desc: "Mempelajari jaringan komputer dasar melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Jaringan Komputer Dasar merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep sistem",
          "Algoritma/solusi",
          "Data",
          "Testing/debugging",
          "Etika dan keamanan",
        ],
        example:
          "Contoh: periksa alamat IP, konektivitas, dan konfigurasi sebelum menyimpulkan sumber gangguan.",
      },
      {
        title: "Algoritma dan Logika",
        desc: "Mempelajari algoritma dan logika melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Algoritma dan Logika merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep sistem",
          "Algoritma/solusi",
          "Data",
          "Testing/debugging",
          "Etika dan keamanan",
        ],
        example:
          "Contoh: input → proses → output, kemudian uji dengan beberapa data.",
      },
      {
        title: "Pemrograman Dasar",
        desc: "Mempelajari pemrograman dasar melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Pemrograman Dasar merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep sistem",
          "Algoritma/solusi",
          "Data",
          "Testing/debugging",
          "Etika dan keamanan",
        ],
        example:
          "Contoh: rancang solusi, implementasikan, uji, catat error, lalu lakukan perbaikan.",
      },
      {
        title: "Analisis Data",
        desc: "Mempelajari analisis data melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Analisis Data merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep sistem",
          "Algoritma/solusi",
          "Data",
          "Testing/debugging",
          "Etika dan keamanan",
        ],
        example:
          "Contoh: rancang solusi, implementasikan, uji, catat error, lalu lakukan perbaikan.",
      },
      {
        title: "Dampak Sosial TIK dan Etika Digital",
        desc: "Mempelajari dampak sosial tik dan etika digital melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Dampak Sosial TIK dan Etika Digital merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep sistem",
          "Algoritma/solusi",
          "Data",
          "Testing/debugging",
          "Etika dan keamanan",
        ],
        example:
          "Contoh: rancang solusi, implementasikan, uji, catat error, lalu lakukan perbaikan.",
      },
    ],
    11: [
      {
        title: "Pemrograman Lanjutan",
        desc: "Mempelajari pemrograman lanjutan melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Pemrograman Lanjutan merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep sistem",
          "Algoritma/solusi",
          "Data",
          "Testing/debugging",
          "Etika dan keamanan",
        ],
        example:
          "Contoh: rancang solusi, implementasikan, uji, catat error, lalu lakukan perbaikan.",
      },
      {
        title: "Struktur Data Dasar",
        desc: "Mempelajari struktur data dasar melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Struktur Data Dasar merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep sistem",
          "Algoritma/solusi",
          "Data",
          "Testing/debugging",
          "Etika dan keamanan",
        ],
        example:
          "Contoh: rancang solusi, implementasikan, uji, catat error, lalu lakukan perbaikan.",
      },
      {
        title: "Basis Data",
        desc: "Mempelajari basis data melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Basis Data merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep sistem",
          "Algoritma/solusi",
          "Data",
          "Testing/debugging",
          "Etika dan keamanan",
        ],
        example:
          "Contoh: rancang solusi, implementasikan, uji, catat error, lalu lakukan perbaikan.",
      },
      {
        title: "Jaringan dan Keamanan",
        desc: "Mempelajari jaringan dan keamanan melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Jaringan dan Keamanan merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep sistem",
          "Algoritma/solusi",
          "Data",
          "Testing/debugging",
          "Etika dan keamanan",
        ],
        example:
          "Contoh: periksa alamat IP, konektivitas, dan konfigurasi sebelum menyimpulkan sumber gangguan.",
      },
      {
        title: "Pengolahan Data",
        desc: "Mempelajari pengolahan data melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Pengolahan Data merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep sistem",
          "Algoritma/solusi",
          "Data",
          "Testing/debugging",
          "Etika dan keamanan",
        ],
        example:
          "Contoh: rancang solusi, implementasikan, uji, catat error, lalu lakukan perbaikan.",
      },
      {
        title: "Pengembangan Produk Digital",
        desc: "Mempelajari pengembangan produk digital melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Pengembangan Produk Digital merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep sistem",
          "Algoritma/solusi",
          "Data",
          "Testing/debugging",
          "Etika dan keamanan",
        ],
        example:
          "Contoh: rancang solusi, implementasikan, uji, catat error, lalu lakukan perbaikan.",
      },
    ],
    12: [
      {
        title: "Pemrograman Berbasis Proyek",
        desc: "Mempelajari pemrograman berbasis proyek melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Pemrograman Berbasis Proyek merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep sistem",
          "Algoritma/solusi",
          "Data",
          "Testing/debugging",
          "Etika dan keamanan",
        ],
        example:
          "Contoh: rancang solusi, implementasikan, uji, catat error, lalu lakukan perbaikan.",
      },
      {
        title: "API dan Integrasi Sistem",
        desc: "Mempelajari api dan integrasi sistem melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "API dan Integrasi Sistem merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep sistem",
          "Algoritma/solusi",
          "Data",
          "Testing/debugging",
          "Etika dan keamanan",
        ],
        example:
          "Contoh: rancang solusi, implementasikan, uji, catat error, lalu lakukan perbaikan.",
      },
      {
        title: "Keamanan Siber",
        desc: "Mempelajari keamanan siber melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Keamanan Siber merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep sistem",
          "Algoritma/solusi",
          "Data",
          "Testing/debugging",
          "Etika dan keamanan",
        ],
        example:
          "Contoh: rancang solusi, implementasikan, uji, catat error, lalu lakukan perbaikan.",
      },
      {
        title: "Analisis dan Visualisasi Data",
        desc: "Mempelajari analisis dan visualisasi data melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Analisis dan Visualisasi Data merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep sistem",
          "Algoritma/solusi",
          "Data",
          "Testing/debugging",
          "Etika dan keamanan",
        ],
        example:
          "Contoh: rancang solusi, implementasikan, uji, catat error, lalu lakukan perbaikan.",
      },
      {
        title: "Kecerdasan Artifisial",
        desc: "Mempelajari kecerdasan artifisial melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Kecerdasan Artifisial merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep sistem",
          "Algoritma/solusi",
          "Data",
          "Testing/debugging",
          "Etika dan keamanan",
        ],
        example:
          "Contoh: hasil AI dibandingkan dengan sumber atau data lain sebelum digunakan.",
      },
      {
        title: "Portofolio Digital",
        desc: "Mempelajari portofolio digital melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Portofolio Digital merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep sistem",
          "Algoritma/solusi",
          "Data",
          "Testing/debugging",
          "Etika dan keamanan",
        ],
        example:
          "Contoh: rancang solusi, implementasikan, uji, catat error, lalu lakukan perbaikan.",
      },
    ],
  },
  "Projek IPAS": {
    10: [
      {
        title: "Metode Ilmiah",
        desc: "Mempelajari metode ilmiah melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Metode Ilmiah merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Pertanyaan ilmiah",
          "Data dan bukti",
          "Analisis sains/sosial",
          "Solusi",
          "Presentasi/refleksi",
        ],
        example:
          "Contoh: tentukan masalah, kumpulkan data, analisis temuan, buat solusi, lalu presentasikan hasil.",
      },
      {
        title: "Fenomena Alam dan Lingkungan",
        desc: "Mempelajari fenomena alam dan lingkungan melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Fenomena Alam dan Lingkungan merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Pertanyaan ilmiah",
          "Data dan bukti",
          "Analisis sains/sosial",
          "Solusi",
          "Presentasi/refleksi",
        ],
        example:
          "Contoh: tentukan masalah, kumpulkan data, analisis temuan, buat solusi, lalu presentasikan hasil.",
      },
      {
        title: "Energi dan Teknologi",
        desc: "Mempelajari energi dan teknologi melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Energi dan Teknologi merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Pertanyaan ilmiah",
          "Data dan bukti",
          "Analisis sains/sosial",
          "Solusi",
          "Presentasi/refleksi",
        ],
        example:
          "Contoh: tentukan masalah, kumpulkan data, analisis temuan, buat solusi, lalu presentasikan hasil.",
      },
      {
        title: "Fenomena Sosial",
        desc: "Mempelajari fenomena sosial melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Fenomena Sosial merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Pertanyaan ilmiah",
          "Data dan bukti",
          "Analisis sains/sosial",
          "Solusi",
          "Presentasi/refleksi",
        ],
        example:
          "Contoh: tentukan masalah, kumpulkan data, analisis temuan, buat solusi, lalu presentasikan hasil.",
      },
      {
        title: "Data dan Pengamatan",
        desc: "Mempelajari data dan pengamatan melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Data dan Pengamatan merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Pertanyaan ilmiah",
          "Data dan bukti",
          "Analisis sains/sosial",
          "Solusi",
          "Presentasi/refleksi",
        ],
        example:
          "Contoh: tentukan masalah, kumpulkan data, analisis temuan, buat solusi, lalu presentasikan hasil.",
      },
      {
        title: "Projek Terapan",
        desc: "Mempelajari projek terapan melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Projek Terapan merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Pertanyaan ilmiah",
          "Data dan bukti",
          "Analisis sains/sosial",
          "Solusi",
          "Presentasi/refleksi",
        ],
        example:
          "Contoh: tentukan masalah, kumpulkan data, analisis temuan, buat solusi, lalu presentasikan hasil.",
      },
    ],
  },
  "Dasar-Dasar Program Keahlian": {
    10: [
      {
        title: "Orientasi Bidang Keahlian",
        desc: "Mempelajari orientasi bidang keahlian melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Orientasi Bidang Keahlian merupakan bagian dari pembentukan kompetensi kejuruan. Siswa perlu memahami alasan setiap langkah kerja, bukan hanya meniru prosedur.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kompetensi bidang",
          "Alat dan bahan",
          "K3LH",
          "SOP",
          "Mutu dan dokumentasi",
        ],
        example:
          "Contoh: lakukan identifikasi risiko → siapkan APD → ikuti SOP → cek mutu → dokumentasikan hasil.",
      },
      {
        title: "Budaya Kerja Industri",
        desc: "Mempelajari budaya kerja industri melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Budaya Kerja Industri merupakan bagian dari pembentukan kompetensi kejuruan. Siswa perlu memahami alasan setiap langkah kerja, bukan hanya meniru prosedur.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kompetensi bidang",
          "Alat dan bahan",
          "K3LH",
          "SOP",
          "Mutu dan dokumentasi",
        ],
        example:
          "Contoh: lakukan identifikasi risiko → siapkan APD → ikuti SOP → cek mutu → dokumentasikan hasil.",
      },
      {
        title: "K3LH",
        desc: "Mempelajari k3lh melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "K3LH merupakan bagian dari pembentukan kompetensi kejuruan. Siswa perlu memahami alasan setiap langkah kerja, bukan hanya meniru prosedur.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kompetensi bidang",
          "Alat dan bahan",
          "K3LH",
          "SOP",
          "Mutu dan dokumentasi",
        ],
        example:
          "Contoh: lakukan identifikasi risiko → siapkan APD → ikuti SOP → cek mutu → dokumentasikan hasil.",
      },
      {
        title: "Peralatan dan Bahan",
        desc: "Mempelajari peralatan dan bahan melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Peralatan dan Bahan merupakan bagian dari pembentukan kompetensi kejuruan. Siswa perlu memahami alasan setiap langkah kerja, bukan hanya meniru prosedur.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kompetensi bidang",
          "Alat dan bahan",
          "K3LH",
          "SOP",
          "Mutu dan dokumentasi",
        ],
        example:
          "Contoh: lakukan identifikasi risiko → siapkan APD → ikuti SOP → cek mutu → dokumentasikan hasil.",
      },
      {
        title: "SOP dan Prosedur Kerja",
        desc: "Mempelajari sop dan prosedur kerja melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "SOP dan Prosedur Kerja merupakan bagian dari pembentukan kompetensi kejuruan. Siswa perlu memahami alasan setiap langkah kerja, bukan hanya meniru prosedur.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kompetensi bidang",
          "Alat dan bahan",
          "K3LH",
          "SOP",
          "Mutu dan dokumentasi",
        ],
        example:
          "Contoh: lakukan identifikasi risiko → siapkan APD → ikuti SOP → cek mutu → dokumentasikan hasil.",
      },
      {
        title: "Gambar dan Diagram Kerja",
        desc: "Mempelajari gambar dan diagram kerja melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Gambar dan Diagram Kerja merupakan bagian dari pembentukan kompetensi kejuruan. Siswa perlu memahami alasan setiap langkah kerja, bukan hanya meniru prosedur.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kompetensi bidang",
          "Alat dan bahan",
          "K3LH",
          "SOP",
          "Mutu dan dokumentasi",
        ],
        example:
          "Contoh: lakukan identifikasi risiko → siapkan APD → ikuti SOP → cek mutu → dokumentasikan hasil.",
      },
      {
        title: "Pengendalian Mutu",
        desc: "Mempelajari pengendalian mutu melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Pengendalian Mutu merupakan bagian dari pembentukan kompetensi kejuruan. Siswa perlu memahami alasan setiap langkah kerja, bukan hanya meniru prosedur.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kompetensi bidang",
          "Alat dan bahan",
          "K3LH",
          "SOP",
          "Mutu dan dokumentasi",
        ],
        example:
          "Contoh: lakukan identifikasi risiko → siapkan APD → ikuti SOP → cek mutu → dokumentasikan hasil.",
      },
      {
        title: "Dokumentasi Kerja",
        desc: "Mempelajari dokumentasi kerja melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Dokumentasi Kerja merupakan bagian dari pembentukan kompetensi kejuruan. Siswa perlu memahami alasan setiap langkah kerja, bukan hanya meniru prosedur.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kompetensi bidang",
          "Alat dan bahan",
          "K3LH",
          "SOP",
          "Mutu dan dokumentasi",
        ],
        example:
          "Contoh: lakukan identifikasi risiko → siapkan APD → ikuti SOP → cek mutu → dokumentasikan hasil.",
      },
      {
        title: "Projek Dasar Keahlian",
        desc: "Mempelajari projek dasar keahlian melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Projek Dasar Keahlian merupakan bagian dari pembentukan kompetensi kejuruan. Siswa perlu memahami alasan setiap langkah kerja, bukan hanya meniru prosedur.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Kompetensi bidang",
          "Alat dan bahan",
          "K3LH",
          "SOP",
          "Mutu dan dokumentasi",
        ],
        example:
          "Contoh: lakukan identifikasi risiko → siapkan APD → ikuti SOP → cek mutu → dokumentasikan hasil.",
      },
    ],
  },
  "Koding dan Kecerdasan Artifisial": {
    10: [
      {
        title: "Algoritma dan Logika",
        desc: "Mempelajari algoritma dan logika melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Algoritma dan Logika merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Problem solving",
          "Data",
          "Algoritma/koding",
          "Evaluasi hasil",
          "Etika dan privasi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan algoritma dan logika.",
      },
      {
        title: "Pemrograman Dasar",
        desc: "Mempelajari pemrograman dasar melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Pemrograman Dasar merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Problem solving",
          "Data",
          "Algoritma/koding",
          "Evaluasi hasil",
          "Etika dan privasi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan pemrograman dasar.",
      },
      {
        title: "Data dan AI",
        desc: "Mempelajari data dan ai melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Data dan AI merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Problem solving",
          "Data",
          "Algoritma/koding",
          "Evaluasi hasil",
          "Etika dan privasi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan data dan ai.",
      },
      {
        title: "Etika dan Keamanan AI",
        desc: "Mempelajari etika dan keamanan ai melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Etika dan Keamanan AI merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Problem solving",
          "Data",
          "Algoritma/koding",
          "Evaluasi hasil",
          "Etika dan privasi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan etika dan keamanan ai.",
      },
      {
        title: "Produk Digital Sederhana",
        desc: "Mempelajari produk digital sederhana melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Produk Digital Sederhana merupakan salah satu kompetensi penting pada kelas 10 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Problem solving",
          "Data",
          "Algoritma/koding",
          "Evaluasi hasil",
          "Etika dan privasi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan produk digital sederhana.",
      },
    ],
    11: [
      {
        title: "Fungsi dan Modul",
        desc: "Mempelajari fungsi dan modul melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Fungsi dan Modul merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Problem solving",
          "Data",
          "Algoritma/koding",
          "Evaluasi hasil",
          "Etika dan privasi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan fungsi dan modul.",
      },
      {
        title: "Pengolahan Data dengan Program",
        desc: "Mempelajari pengolahan data dengan program melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Pengolahan Data dengan Program merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Problem solving",
          "Data",
          "Algoritma/koding",
          "Evaluasi hasil",
          "Etika dan privasi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan pengolahan data dengan program.",
      },
      {
        title: "AI untuk Produktivitas",
        desc: "Mempelajari ai untuk produktivitas melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "AI untuk Produktivitas merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Problem solving",
          "Data",
          "Algoritma/koding",
          "Evaluasi hasil",
          "Etika dan privasi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan ai untuk produktivitas.",
      },
      {
        title: "Evaluasi Hasil AI",
        desc: "Mempelajari evaluasi hasil ai melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Evaluasi Hasil AI merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Problem solving",
          "Data",
          "Algoritma/koding",
          "Evaluasi hasil",
          "Etika dan privasi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan evaluasi hasil ai.",
      },
      {
        title: "Projek Digital",
        desc: "Mempelajari projek digital melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Projek Digital merupakan salah satu kompetensi penting pada kelas 11 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Problem solving",
          "Data",
          "Algoritma/koding",
          "Evaluasi hasil",
          "Etika dan privasi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan projek digital.",
      },
    ],
    12: [
      {
        title: "Pemrograman Lanjutan",
        desc: "Mempelajari pemrograman lanjutan melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Pemrograman Lanjutan merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Problem solving",
          "Data",
          "Algoritma/koding",
          "Evaluasi hasil",
          "Etika dan privasi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan pemrograman lanjutan.",
      },
      {
        title: "Prompt Engineering",
        desc: "Mempelajari prompt engineering melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Prompt Engineering merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Problem solving",
          "Data",
          "Algoritma/koding",
          "Evaluasi hasil",
          "Etika dan privasi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan prompt engineering.",
      },
      {
        title: "Model AI Sederhana",
        desc: "Mempelajari model ai sederhana melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Model AI Sederhana merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Problem solving",
          "Data",
          "Algoritma/koding",
          "Evaluasi hasil",
          "Etika dan privasi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan model ai sederhana.",
      },
      {
        title: "API dan Integrasi AI",
        desc: "Mempelajari api dan integrasi ai melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "API dan Integrasi AI merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Problem solving",
          "Data",
          "Algoritma/koding",
          "Evaluasi hasil",
          "Etika dan privasi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan api dan integrasi ai.",
      },
      {
        title: "Dampak AI terhadap Pekerjaan",
        desc: "Mempelajari dampak ai terhadap pekerjaan melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Dampak AI terhadap Pekerjaan merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Problem solving",
          "Data",
          "Algoritma/koding",
          "Evaluasi hasil",
          "Etika dan privasi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan dampak ai terhadap pekerjaan.",
      },
      {
        title: "Etika dan Governance AI",
        desc: "Mempelajari etika dan governance ai melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Etika dan Governance AI merupakan salah satu kompetensi penting pada kelas 12 SMK. Pemahaman dimulai dari konsep dasar, kemudian berkembang ke analisis, penerapan, dan evaluasi.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Problem solving",
          "Data",
          "Algoritma/koding",
          "Evaluasi hasil",
          "Etika dan privasi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan etika dan governance ai.",
      },
    ],
  },
  "Mata Pelajaran Kejuruan": {
    11: [
      {
        title: "Pendalaman Konsentrasi Keahlian",
        desc: "Mempelajari pendalaman konsentrasi keahlian melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Pendalaman Konsentrasi Keahlian merupakan bagian dari pembentukan kompetensi kejuruan. Siswa perlu memahami alasan setiap langkah kerja, bukan hanya meniru prosedur.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep dan istilah utama Pendalaman Konsentrasi Keahlian",
          "Hubungan antarbagian dalam Pendalaman Konsentrasi Keahlian",
          "Langkah analisis atau penerapan Pendalaman Konsentrasi Keahlian",
          "Kesalahan umum dan cara memeriksa hasil",
          "Contoh kontekstual Pendalaman Konsentrasi Keahlian",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan pendalaman konsentrasi keahlian.",
      },
      {
        title: "Praktik Terstruktur",
        desc: "Mempelajari praktik terstruktur melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Praktik Terstruktur merupakan bagian dari pembentukan kompetensi kejuruan. Siswa perlu memahami alasan setiap langkah kerja, bukan hanya meniru prosedur.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep dan istilah utama Praktik Terstruktur",
          "Hubungan antarbagian dalam Praktik Terstruktur",
          "Langkah analisis atau penerapan Praktik Terstruktur",
          "Kesalahan umum dan cara memeriksa hasil",
          "Contoh kontekstual Praktik Terstruktur",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan praktik terstruktur.",
      },
      {
        title: "Troubleshooting",
        desc: "Mempelajari troubleshooting melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Troubleshooting merupakan bagian dari pembentukan kompetensi kejuruan. Siswa perlu memahami alasan setiap langkah kerja, bukan hanya meniru prosedur.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep dan istilah utama Troubleshooting",
          "Hubungan antarbagian dalam Troubleshooting",
          "Langkah analisis atau penerapan Troubleshooting",
          "Kesalahan umum dan cara memeriksa hasil",
          "Contoh kontekstual Troubleshooting",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan troubleshooting.",
      },
      {
        title: "Quality Assurance",
        desc: "Mempelajari quality assurance melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Quality Assurance merupakan bagian dari pembentukan kompetensi kejuruan. Siswa perlu memahami alasan setiap langkah kerja, bukan hanya meniru prosedur.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep dan istilah utama Quality Assurance",
          "Hubungan antarbagian dalam Quality Assurance",
          "Langkah analisis atau penerapan Quality Assurance",
          "Kesalahan umum dan cara memeriksa hasil",
          "Contoh kontekstual Quality Assurance",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan quality assurance.",
      },
      {
        title: "Projek Kejuruan",
        desc: "Mempelajari projek kejuruan melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Projek Kejuruan merupakan bagian dari pembentukan kompetensi kejuruan. Siswa perlu memahami alasan setiap langkah kerja, bukan hanya meniru prosedur.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep dan istilah utama Projek Kejuruan",
          "Hubungan antarbagian dalam Projek Kejuruan",
          "Langkah analisis atau penerapan Projek Kejuruan",
          "Kesalahan umum dan cara memeriksa hasil",
          "Contoh kontekstual Projek Kejuruan",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan projek kejuruan.",
      },
      {
        title: "Dokumentasi dan Presentasi Produk",
        desc: "Mempelajari dokumentasi dan presentasi produk melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Dokumentasi dan Presentasi Produk merupakan bagian dari pembentukan kompetensi kejuruan. Siswa perlu memahami alasan setiap langkah kerja, bukan hanya meniru prosedur.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep dan istilah utama Dokumentasi dan Presentasi Produk",
          "Hubungan antarbagian dalam Dokumentasi dan Presentasi Produk",
          "Langkah analisis atau penerapan Dokumentasi dan Presentasi Produk",
          "Kesalahan umum dan cara memeriksa hasil",
          "Contoh kontekstual Dokumentasi dan Presentasi Produk",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan dokumentasi dan presentasi produk.",
      },
    ],
  },
  "Mata Pelajaran Kejuruan Lanjutan": {
    12: [
      {
        title: "Pendalaman Kompetensi Teknis",
        desc: "Mempelajari pendalaman kompetensi teknis melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Pendalaman Kompetensi Teknis merupakan bagian dari pembentukan kompetensi kejuruan. Siswa perlu memahami alasan setiap langkah kerja, bukan hanya meniru prosedur.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep dan istilah utama Pendalaman Kompetensi Teknis",
          "Hubungan antarbagian dalam Pendalaman Kompetensi Teknis",
          "Langkah analisis atau penerapan Pendalaman Kompetensi Teknis",
          "Kesalahan umum dan cara memeriksa hasil",
          "Contoh kontekstual Pendalaman Kompetensi Teknis",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan pendalaman kompetensi teknis.",
      },
      {
        title: "Proyek Akhir",
        desc: "Mempelajari proyek akhir melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Proyek Akhir merupakan bagian dari pembentukan kompetensi kejuruan. Siswa perlu memahami alasan setiap langkah kerja, bukan hanya meniru prosedur.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep dan istilah utama Proyek Akhir",
          "Hubungan antarbagian dalam Proyek Akhir",
          "Langkah analisis atau penerapan Proyek Akhir",
          "Kesalahan umum dan cara memeriksa hasil",
          "Contoh kontekstual Proyek Akhir",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan proyek akhir.",
      },
      {
        title: "Portofolio Kompetensi",
        desc: "Mempelajari portofolio kompetensi melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Portofolio Kompetensi merupakan bagian dari pembentukan kompetensi kejuruan. Siswa perlu memahami alasan setiap langkah kerja, bukan hanya meniru prosedur.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep dan istilah utama Portofolio Kompetensi",
          "Hubungan antarbagian dalam Portofolio Kompetensi",
          "Langkah analisis atau penerapan Portofolio Kompetensi",
          "Kesalahan umum dan cara memeriksa hasil",
          "Contoh kontekstual Portofolio Kompetensi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan portofolio kompetensi.",
      },
      {
        title: "Uji Kompetensi",
        desc: "Mempelajari uji kompetensi melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Uji Kompetensi merupakan bagian dari pembentukan kompetensi kejuruan. Siswa perlu memahami alasan setiap langkah kerja, bukan hanya meniru prosedur.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep dan istilah utama Uji Kompetensi",
          "Hubungan antarbagian dalam Uji Kompetensi",
          "Langkah analisis atau penerapan Uji Kompetensi",
          "Kesalahan umum dan cara memeriksa hasil",
          "Contoh kontekstual Uji Kompetensi",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan uji kompetensi.",
      },
      {
        title: "Kesiapan Kerja",
        desc: "Mempelajari kesiapan kerja melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Kesiapan Kerja merupakan bagian dari pembentukan kompetensi kejuruan. Siswa perlu memahami alasan setiap langkah kerja, bukan hanya meniru prosedur.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep dan istilah utama Kesiapan Kerja",
          "Hubungan antarbagian dalam Kesiapan Kerja",
          "Langkah analisis atau penerapan Kesiapan Kerja",
          "Kesalahan umum dan cara memeriksa hasil",
          "Contoh kontekstual Kesiapan Kerja",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan kesiapan kerja.",
      },
      {
        title: "Simulasi Dunia Kerja",
        desc: "Mempelajari simulasi dunia kerja melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Simulasi Dunia Kerja merupakan bagian dari pembentukan kompetensi kejuruan. Siswa perlu memahami alasan setiap langkah kerja, bukan hanya meniru prosedur.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Konsep dan istilah utama Simulasi Dunia Kerja",
          "Hubungan antarbagian dalam Simulasi Dunia Kerja",
          "Langkah analisis atau penerapan Simulasi Dunia Kerja",
          "Kesalahan umum dan cara memeriksa hasil",
          "Contoh kontekstual Simulasi Dunia Kerja",
        ],
        example:
          "Contoh: gunakan kasus nyata di lingkungan sekolah, masyarakat, atau dunia kerja untuk menerapkan simulasi dunia kerja.",
      },
    ],
  },
  "Kreativitas, Inovasi, dan Kewirausahaan": {
    11: [
      {
        title: "Kreativitas dan Growth Mindset",
        desc: "Mempelajari kreativitas dan growth mindset melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Kreativitas dan Growth Mindset dipelajari sebagai proses menghasilkan nilai dari sebuah masalah atau peluang. Siswa belajar mengubah ide menjadi keputusan, produk, atau layanan yang dapat diuji.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Masalah/peluang",
          "Ide",
          "Prototype",
          "Pasar dan biaya",
          "Evaluasi",
        ],
        example:
          "Contoh: temukan masalah pelanggan → buat ide → prototype → uji → perbaiki → siapkan komersialisasi.",
      },
      {
        title: "Inovasi",
        desc: "Mempelajari inovasi melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Inovasi dipelajari sebagai proses menghasilkan nilai dari sebuah masalah atau peluang. Siswa belajar mengubah ide menjadi keputusan, produk, atau layanan yang dapat diuji.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Masalah/peluang",
          "Ide",
          "Prototype",
          "Pasar dan biaya",
          "Evaluasi",
        ],
        example:
          "Contoh: temukan masalah pelanggan → buat ide → prototype → uji → perbaiki → siapkan komersialisasi.",
      },
      {
        title: "Design Thinking",
        desc: "Mempelajari design thinking melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Design Thinking dipelajari sebagai proses menghasilkan nilai dari sebuah masalah atau peluang. Siswa belajar mengubah ide menjadi keputusan, produk, atau layanan yang dapat diuji.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Masalah/peluang",
          "Ide",
          "Prototype",
          "Pasar dan biaya",
          "Evaluasi",
        ],
        example:
          "Contoh: temukan masalah pelanggan → buat ide → prototype → uji → perbaiki → siapkan komersialisasi.",
      },
      {
        title: "Peluang Usaha",
        desc: "Mempelajari peluang usaha melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Peluang Usaha dipelajari sebagai proses menghasilkan nilai dari sebuah masalah atau peluang. Siswa belajar mengubah ide menjadi keputusan, produk, atau layanan yang dapat diuji.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Masalah/peluang",
          "Ide",
          "Prototype",
          "Pasar dan biaya",
          "Evaluasi",
        ],
        example:
          "Contoh: temukan masalah pelanggan → buat ide → prototype → uji → perbaiki → siapkan komersialisasi.",
      },
      {
        title: "Perencanaan Usaha",
        desc: "Mempelajari perencanaan usaha melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Perencanaan Usaha dipelajari sebagai proses menghasilkan nilai dari sebuah masalah atau peluang. Siswa belajar mengubah ide menjadi keputusan, produk, atau layanan yang dapat diuji.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Masalah/peluang",
          "Ide",
          "Prototype",
          "Pasar dan biaya",
          "Evaluasi",
        ],
        example:
          "Contoh: temukan masalah pelanggan → buat ide → prototype → uji → perbaiki → siapkan komersialisasi.",
      },
      {
        title: "Pemasaran Digital",
        desc: "Mempelajari pemasaran digital melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Pemasaran Digital dipelajari sebagai proses menghasilkan nilai dari sebuah masalah atau peluang. Siswa belajar mengubah ide menjadi keputusan, produk, atau layanan yang dapat diuji.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Masalah/peluang",
          "Ide",
          "Prototype",
          "Pasar dan biaya",
          "Evaluasi",
        ],
        example:
          "Contoh: temukan masalah pelanggan → buat ide → prototype → uji → perbaiki → siapkan komersialisasi.",
      },
      {
        title: "Biaya dan Harga",
        desc: "Mempelajari biaya dan harga melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Biaya dan Harga dipelajari sebagai proses menghasilkan nilai dari sebuah masalah atau peluang. Siswa belajar mengubah ide menjadi keputusan, produk, atau layanan yang dapat diuji.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Masalah/peluang",
          "Ide",
          "Prototype",
          "Pasar dan biaya",
          "Evaluasi",
        ],
        example:
          "Contoh: temukan masalah pelanggan → buat ide → prototype → uji → perbaiki → siapkan komersialisasi.",
      },
      {
        title: "Legalitas dan HAKI",
        desc: "Mempelajari legalitas dan haki melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Legalitas dan HAKI dipelajari sebagai proses menghasilkan nilai dari sebuah masalah atau peluang. Siswa belajar mengubah ide menjadi keputusan, produk, atau layanan yang dapat diuji.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Masalah/peluang",
          "Ide",
          "Prototype",
          "Pasar dan biaya",
          "Evaluasi",
        ],
        example:
          "Contoh: temukan masalah pelanggan → buat ide → prototype → uji → perbaiki → siapkan komersialisasi.",
      },
      {
        title: "Laporan Keuangan",
        desc: "Mempelajari laporan keuangan melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Laporan Keuangan dipelajari sebagai proses menghasilkan nilai dari sebuah masalah atau peluang. Siswa belajar mengubah ide menjadi keputusan, produk, atau layanan yang dapat diuji.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Masalah/peluang",
          "Ide",
          "Prototype",
          "Pasar dan biaya",
          "Evaluasi",
        ],
        example:
          "Contoh: temukan masalah pelanggan → buat ide → prototype → uji → perbaiki → siapkan komersialisasi.",
      },
      {
        title: "Pitching Produk",
        desc: "Mempelajari pitching produk melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Pitching Produk dipelajari sebagai proses menghasilkan nilai dari sebuah masalah atau peluang. Siswa belajar mengubah ide menjadi keputusan, produk, atau layanan yang dapat diuji.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Masalah/peluang",
          "Ide",
          "Prototype",
          "Pasar dan biaya",
          "Evaluasi",
        ],
        example:
          "Contoh: temukan masalah pelanggan → buat ide → prototype → uji → perbaiki → siapkan komersialisasi.",
      },
    ],
    12: [
      {
        title: "Penyempurnaan Produk",
        desc: "Mempelajari penyempurnaan produk melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Penyempurnaan Produk dipelajari sebagai proses menghasilkan nilai dari sebuah masalah atau peluang. Siswa belajar mengubah ide menjadi keputusan, produk, atau layanan yang dapat diuji.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Masalah/peluang",
          "Ide",
          "Prototype",
          "Pasar dan biaya",
          "Evaluasi",
        ],
        example:
          "Contoh: temukan masalah pelanggan → buat ide → prototype → uji → perbaiki → siapkan komersialisasi.",
      },
      {
        title: "Komersialisasi",
        desc: "Mempelajari komersialisasi melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Komersialisasi dipelajari sebagai proses menghasilkan nilai dari sebuah masalah atau peluang. Siswa belajar mengubah ide menjadi keputusan, produk, atau layanan yang dapat diuji.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Masalah/peluang",
          "Ide",
          "Prototype",
          "Pasar dan biaya",
          "Evaluasi",
        ],
        example:
          "Contoh: temukan masalah pelanggan → buat ide → prototype → uji → perbaiki → siapkan komersialisasi.",
      },
      {
        title: "Legalitas dan HAKI Lanjutan",
        desc: "Mempelajari legalitas dan haki lanjutan melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Legalitas dan HAKI Lanjutan dipelajari sebagai proses menghasilkan nilai dari sebuah masalah atau peluang. Siswa belajar mengubah ide menjadi keputusan, produk, atau layanan yang dapat diuji.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Masalah/peluang",
          "Ide",
          "Prototype",
          "Pasar dan biaya",
          "Evaluasi",
        ],
        example:
          "Contoh: temukan masalah pelanggan → buat ide → prototype → uji → perbaiki → siapkan komersialisasi.",
      },
      {
        title: "Laporan Keuangan",
        desc: "Mempelajari laporan keuangan melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Laporan Keuangan dipelajari sebagai proses menghasilkan nilai dari sebuah masalah atau peluang. Siswa belajar mengubah ide menjadi keputusan, produk, atau layanan yang dapat diuji.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Masalah/peluang",
          "Ide",
          "Prototype",
          "Pasar dan biaya",
          "Evaluasi",
        ],
        example:
          "Contoh: temukan masalah pelanggan → buat ide → prototype → uji → perbaiki → siapkan komersialisasi.",
      },
      {
        title: "Evaluasi Bisnis",
        desc: "Mempelajari evaluasi bisnis melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Evaluasi Bisnis dipelajari sebagai proses menghasilkan nilai dari sebuah masalah atau peluang. Siswa belajar mengubah ide menjadi keputusan, produk, atau layanan yang dapat diuji.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Masalah/peluang",
          "Ide",
          "Prototype",
          "Pasar dan biaya",
          "Evaluasi",
        ],
        example:
          "Contoh: temukan masalah pelanggan → buat ide → prototype → uji → perbaiki → siapkan komersialisasi.",
      },
      {
        title: "Strategi Pengembangan Usaha",
        desc: "Mempelajari strategi pengembangan usaha melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Strategi Pengembangan Usaha dipelajari sebagai proses menghasilkan nilai dari sebuah masalah atau peluang. Siswa belajar mengubah ide menjadi keputusan, produk, atau layanan yang dapat diuji.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "Masalah/peluang",
          "Ide",
          "Prototype",
          "Pasar dan biaya",
          "Evaluasi",
        ],
        example:
          "Contoh: temukan masalah pelanggan → buat ide → prototype → uji → perbaiki → siapkan komersialisasi.",
      },
    ],
  },
  "Praktik Kerja Lapangan": {
    12: [
      {
        title: "Orientasi Dunia Kerja",
        desc: "Mempelajari orientasi dunia kerja melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Orientasi Dunia Kerja membantu siswa menghubungkan kompetensi sekolah dengan kondisi kerja nyata. Fokusnya adalah kemampuan bekerja aman, teratur, berkomunikasi, dan menghasilkan pekerjaan yang dapat dipertanggungjawabkan.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "K3LH",
          "Budaya kerja",
          "Tugas",
          "Komunikasi",
          "Dokumentasi/refleksi",
        ],
        example:
          "Contoh: pahami instruksi → kerjakan sesuai SOP → laporkan hasil → catat pengalaman → refleksikan kompetensi.",
      },
      {
        title: "K3LH dan Etika Kerja",
        desc: "Mempelajari k3lh dan etika kerja melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "K3LH dan Etika Kerja membantu siswa menghubungkan kompetensi sekolah dengan kondisi kerja nyata. Fokusnya adalah kemampuan bekerja aman, teratur, berkomunikasi, dan menghasilkan pekerjaan yang dapat dipertanggungjawabkan.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "K3LH",
          "Budaya kerja",
          "Tugas",
          "Komunikasi",
          "Dokumentasi/refleksi",
        ],
        example:
          "Contoh: pahami instruksi → kerjakan sesuai SOP → laporkan hasil → catat pengalaman → refleksikan kompetensi.",
      },
      {
        title: "Pelaksanaan Tugas",
        desc: "Mempelajari pelaksanaan tugas melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Pelaksanaan Tugas membantu siswa menghubungkan kompetensi sekolah dengan kondisi kerja nyata. Fokusnya adalah kemampuan bekerja aman, teratur, berkomunikasi, dan menghasilkan pekerjaan yang dapat dipertanggungjawabkan.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "K3LH",
          "Budaya kerja",
          "Tugas",
          "Komunikasi",
          "Dokumentasi/refleksi",
        ],
        example:
          "Contoh: pahami instruksi → kerjakan sesuai SOP → laporkan hasil → catat pengalaman → refleksikan kompetensi.",
      },
      {
        title: "Komunikasi dengan Pembimbing",
        desc: "Mempelajari komunikasi dengan pembimbing melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Komunikasi dengan Pembimbing membantu siswa menghubungkan kompetensi sekolah dengan kondisi kerja nyata. Fokusnya adalah kemampuan bekerja aman, teratur, berkomunikasi, dan menghasilkan pekerjaan yang dapat dipertanggungjawabkan.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "K3LH",
          "Budaya kerja",
          "Tugas",
          "Komunikasi",
          "Dokumentasi/refleksi",
        ],
        example:
          "Contoh: pahami instruksi → kerjakan sesuai SOP → laporkan hasil → catat pengalaman → refleksikan kompetensi.",
      },
      {
        title: "Dokumentasi PKL",
        desc: "Mempelajari dokumentasi pkl melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Dokumentasi PKL membantu siswa menghubungkan kompetensi sekolah dengan kondisi kerja nyata. Fokusnya adalah kemampuan bekerja aman, teratur, berkomunikasi, dan menghasilkan pekerjaan yang dapat dipertanggungjawabkan.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "K3LH",
          "Budaya kerja",
          "Tugas",
          "Komunikasi",
          "Dokumentasi/refleksi",
        ],
        example:
          "Contoh: pahami instruksi → kerjakan sesuai SOP → laporkan hasil → catat pengalaman → refleksikan kompetensi.",
      },
      {
        title: "Evaluasi dan Refleksi",
        desc: "Mempelajari evaluasi dan refleksi melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Evaluasi dan Refleksi membantu siswa menghubungkan kompetensi sekolah dengan kondisi kerja nyata. Fokusnya adalah kemampuan bekerja aman, teratur, berkomunikasi, dan menghasilkan pekerjaan yang dapat dipertanggungjawabkan.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "K3LH",
          "Budaya kerja",
          "Tugas",
          "Komunikasi",
          "Dokumentasi/refleksi",
        ],
        example:
          "Contoh: pahami instruksi → kerjakan sesuai SOP → laporkan hasil → catat pengalaman → refleksikan kompetensi.",
      },
      {
        title: "Presentasi Hasil PKL",
        desc: "Mempelajari presentasi hasil pkl melalui konsep, contoh, penerapan, dan evaluasi.",
        explanation: [
          "Presentasi Hasil PKL membantu siswa menghubungkan kompetensi sekolah dengan kondisi kerja nyata. Fokusnya adalah kemampuan bekerja aman, teratur, berkomunikasi, dan menghasilkan pekerjaan yang dapat dipertanggungjawabkan.",
          "Dalam pembelajaran, siswa diarahkan untuk memahami istilah, prinsip, hubungan antarbagian, dan cara menggunakan informasi. Setelah memahami konsep, siswa mengerjakan contoh atau kasus sehingga dapat menjelaskan mengapa suatu langkah dipilih dan bagaimana hasilnya diperiksa.",
          "Pada level SMK, materi juga perlu dikaitkan dengan keterampilan abad ke-21 dan konteks dunia kerja: berpikir kritis, pemecahan masalah, komunikasi, kolaborasi, literasi digital, budaya mutu, serta refleksi terhadap proses belajar. Untuk mata pelajaran kejuruan, contoh penerapan harus disesuaikan dengan konsentrasi keahlian sekolah.",
        ],
        focus: [
          "K3LH",
          "Budaya kerja",
          "Tugas",
          "Komunikasi",
          "Dokumentasi/refleksi",
        ],
        example:
          "Contoh: pahami instruksi → kerjakan sesuai SOP → laporkan hasil → catat pengalaman → refleksikan kompetensi.",
      },
    ],
  },
};
const DISPLAY = {
  Matematika: "Matematika",
  "Bahasa Indonesia": "Bahasa Indonesia",
  "Bahasa Inggris": "Bahasa Inggris",
  "Pendidikan Pancasila": "Pendidikan Pancasila",
  Sejarah: "Sejarah",
  Informatika: "Informatika",
  "Projek IPAS": "Projek IPAS",
  "Dasar-Dasar Program Keahlian": "Dasar-Dasar Program Keahlian",
  "Koding dan Kecerdasan Artifisial": "Koding & Kecerdasan Artifisial",
  "Mata Pelajaran Kejuruan": "Konsentrasi Keahlian",
  "Mata Pelajaran Kejuruan Lanjutan": "Konsentrasi Keahlian Lanjutan",
  "Kreativitas, Inovasi, dan Kewirausahaan":
    "Kreativitas, Inovasi & Kewirausahaan",
  "Praktik Kerja Lapangan": "Praktik Kerja Lapangan",
};
const ICONS = {
  Matematika: "hash",
  "Bahasa Indonesia": "book-open",
  "Bahasa Inggris": "message-circle",
  "Pendidikan Pancasila": "flag",
  Sejarah: "clock",
  Informatika: "code",
  "Projek IPAS": "flask",
  "Dasar-Dasar Program Keahlian": "tool",
  "Koding dan Kecerdasan Artifisial": "cpu",
  "Kreativitas, Inovasi, dan Kewirausahaan": "briefcase",
  "Mata Pelajaran Kejuruan": "tool",
  "Mata Pelajaran Kejuruan Lanjutan": "award",
  "Praktik Kerja Lapangan": "briefcase",
};
const INTRO = {
  Matematika:
    "Matematika SMK dipelajari untuk membangun penalaran kuantitatif sekaligus kemampuan memodelkan persoalan. Konsep, rumus, grafik, data, dan perhitungan perlu dihubungkan dengan situasi nyata dan kebutuhan bidang keahlian.",
  "Bahasa Indonesia":
    "Bahasa Indonesia di SMK menekankan kemampuan memahami informasi, menyusun gagasan, menulis dokumen, berkomunikasi profesional, dan menyajikan hasil pekerjaan secara jelas.",
  "Bahasa Inggris":
    "Bahasa Inggris di SMK mengembangkan komunikasi sehari-hari sekaligus komunikasi akademik dan profesional, termasuk membaca instruksi, menulis dokumen, menjelaskan pekerjaan, dan presentasi.",
  "Pendidikan Pancasila":
    "Pendidikan Pancasila menghubungkan nilai, konstitusi, hukum, demokrasi, keberagaman, dan tanggung jawab warga dengan kehidupan sekolah, masyarakat, dan dunia kerja.",
  Sejarah:
    "Sejarah melatih kemampuan berpikir kronologis, membaca sumber, melihat sebab-akibat, membandingkan perspektif, dan memahami perubahan masyarakat dari waktu ke waktu.",
  Informatika:
    "Informatika membangun kemampuan berpikir komputasional, pengelolaan data, pemrograman, sistem komputer, jaringan, keamanan, dan etika pemanfaatan teknologi.",
  "Projek IPAS":
    "Projek IPAS mengintegrasikan sains dan ilmu sosial untuk membaca masalah nyata. Murid menggunakan observasi, data, eksperimen atau kajian sosial, lalu mengomunikasikan hasilnya.",
  "Dasar-Dasar Program Keahlian":
    "Mata pelajaran ini menjadi jembatan dari pembelajaran umum menuju dunia kejuruan. Materi mencakup wawasan bidang, budaya kerja, K3LH, alat, prosedur, mutu, dan projek dasar.",
  "Koding dan Kecerdasan Artifisial":
    "Koding dan Kecerdasan Artifisial dapat menjadi mata pelajaran pilihan/pengayaan. Fokusnya adalah penyelesaian masalah dengan program, pemahaman data, penggunaan AI secara etis, serta kemampuan membangun solusi digital.",
  "Mata Pelajaran Kejuruan":
    "Materi kejuruan kelas XI berfokus pada pendalaman konsentrasi. Detail kompetensi teknis perlu disesuaikan dengan program dan konsentrasi keahlian sekolah.",
  "Mata Pelajaran Kejuruan Lanjutan":
    "Materi lanjutan kelas XII berfokus pada kemandirian teknis, proyek akhir, portofolio, uji kompetensi, dan kesiapan masuk dunia kerja.",
  "Kreativitas, Inovasi, dan Kewirausahaan":
    "KIK membangun kemampuan menemukan peluang, merancang solusi, membuat produk, menguji gagasan, memasarkannya, dan mengevaluasi keberlanjutan usaha.",
  "Praktik Kerja Lapangan":
    "PKL merupakan pengalaman belajar di dunia kerja. Fokusnya bukan hanya menyelesaikan tugas, tetapi juga memahami budaya kerja, keselamatan, komunikasi, dokumentasi, dan refleksi kompetensi.",
};
const COLORS = ["blue", "purple", "green", "orange", "pink", "cyan"];

function esc(v) {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
function getParams() {
  const p = new URLSearchParams(location.search);
  return {
    subject: p.get("subject") || "Matematika",
    grade: p.get("grade") || "10",
  };
}
function pick(s, g) {
  if (DATA[s]?.[g]) return s;
  return Object.keys(DATA).find((x) => DATA[x]?.[g]) || "Matematika";
}

function render() {
  const p = getParams(),
    s = pick(p.subject, p.grade),
    g = String(p.grade),
    display = DISPLAY[s] || s,
    chapters = DATA[s][g];
  document.title = `${display} SMK Kelas ${g} — Learn-Space`;
  document.getElementById("sidebarSubject").textContent = display.toUpperCase();
  document.getElementById("courseTitle").textContent = `SMK • Kelas ${g}`;
  document.getElementById("coursePhase").textContent =
    (g === "10" ? "FASE E" : "FASE F") + ` • KELAS ${g}`;
  document.getElementById("breadcrumbSubject").textContent = display;
  document.getElementById("breadcrumbGrade").textContent = `Kelas ${g}`;
  document.getElementById("topSubject").textContent = display.toUpperCase();
  document.getElementById("topCourse").textContent = `SMK Kelas ${g}`;
  document.getElementById("heroSubject").textContent = display;
  document.getElementById("heroGrade").textContent = `Kelas ${g}`;
  document.getElementById("heroDescription").textContent =
    INTRO[s] || `Materi ${display} untuk pembelajaran SMK.`;
  document.getElementById("phaseNote").textContent =
    g === "10"
      ? "Fase E: fondasi umum dan dasar-dasar program keahlian."
      : "Fase F: pendalaman kompetensi, praktik, kesiapan kerja, dan konteks dunia kerja.";
  document.getElementById("chapterCount").textContent =
    `${chapters.length} Topik`;
  const icon = ICONS[s] || "book-open";
  document.getElementById("heroIcon").setAttribute("data-feather", icon);
  document.getElementById("heroIconCircle").setAttribute("data-feather", icon);

  document.getElementById("chapterNav").innerHTML = chapters
    .map(
      (c, i) => `
    <a href="#bab${i + 1}" class="chapter-link${i === 0 ? " active" : ""}">
      <span class="chapter-number">${String(i + 1).padStart(2, "0")}</span>
      <span><strong>${esc(c.title)}</strong><small>Penjelasan & praktik</small></span>
    </a>`,
    )
    .join("");

  document.getElementById("chapterContainer").innerHTML = chapters
    .map(
      (c, i) => `
    <section class="chapter-section" id="bab${i + 1}">
      <div class="chapter-header">
        <div class="chapter-badge">BAB ${String(i + 1).padStart(2, "0")}</div>
        <div><h2>${esc(c.title)}</h2><p>${esc(c.desc)}</p></div>
      </div>

      <div class="material-grid">
        <article class="material-card">
          <div class="material-icon ${COLORS[i % COLORS.length]}"><i data-feather="${esc(icon)}"></i></div>
          <span class="material-label">PENJELASAN MATERI</span>
          <h3>Memahami ${esc(c.title)}</h3>
          <div class="explanation">${c.explanation.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
        </article>

        <article class="material-card">
          <div class="material-icon ${COLORS[(i + 1) % COLORS.length]}"><i data-feather="layers"></i></div>
          <span class="material-label">RUANG LINGKUP</span>
          <h3>Yang perlu dikuasai</h3>
          <ul class="learning-list">${c.focus.map((x) => `<li><span class="bullet-check"><i data-feather="check"></i></span><span>${esc(x)}</span></li>`).join("")}</ul>
        </article>
      </div>

      <div class="example-box">
        <div class="example-icon"><i data-feather="bookmark"></i></div>
        <div>
          <span>CATATAN & CONTOH</span>
          <h3>Penerapan</h3>
          <p>${esc(c.desc)}</p>
          <strong>${esc(c.example)}</strong>
        </div>
      </div>

      <div class="summary-box">
        <h3>Rangkuman Bab ${String(i + 1).padStart(2, "0")}</h3>
        <p>${esc(c.explanation.join(" "))}</p>
      </div>
    </section>`,
    )
    .join("");

  document.getElementById("footerCourse").textContent =
    `${display} • SMK Kelas ${g}`;
  feather.replace();

  const links = [...document.querySelectorAll(".chapter-link")],
    sections = [...document.querySelectorAll(".chapter-section")];
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        const v = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!v) return;
        links.forEach((x) => x.classList.remove("active"));
        const a = document.querySelector(
          `.chapter-link[href="#${v.target.id}"]`,
        );
        if (a) a.classList.add("active");
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((x) => io.observe(x));
  }
  links.forEach((a) =>
    a.addEventListener("click", () => {
      links.forEach((x) => x.classList.remove("active"));
      a.classList.add("active");
    }),
  );

  document.getElementById("practiceButton").onclick = () => {
    localStorage.setItem("elearning_current_subject", s);
    localStorage.setItem("elearning_current_level", "SMK");
    localStorage.setItem("elearning_current_class", g);
    location.href = "latihan-soal.html";
  };
}
document.addEventListener("DOMContentLoaded", render);
