/* =========================================
   THEME
========================================= */

(function () {
  const savedTheme = localStorage.getItem("learnspace_theme");

  document.body.classList.toggle("dark-mode", savedTheme === "dark");
})();

/* =========================================
   LEARN-SPACE QUIZIZZ
   20 PILIHAN GANDA PER KELAS 1-12
========================================= */

const QUESTION_BANK = {
  1: [
    [
      "Matematika",
      "Berapakah 2 + 3?",
      ["4", "5", "6", "7"],
      1,
      "2 ditambah 3 menghasilkan 5.",
    ],
    [
      "Matematika",
      "Berapakah 7 - 4?",
      ["2", "3", "4", "5"],
      1,
      "7 dikurangi 4 adalah 3.",
    ],
    [
      "Matematika",
      "Angka mana yang paling besar?",
      ["3", "5", "2", "4"],
      1,
      "Di antara 3, 5, 2, dan 4, angka terbesar adalah 5.",
    ],
    [
      "Matematika",
      "Berapakah 4 + 4?",
      ["6", "7", "8", "9"],
      2,
      "4 ditambah 4 sama dengan 8.",
    ],
    [
      "Bahasa Indonesia",
      "Kalimat yang sopan untuk menyapa guru adalah ...",
      ["Selamat pagi, Bu.", "Pergi sana.", "Hei kamu!", "Diam!"],
      0,
      "Sapaan yang sopan kepada guru adalah 'Selamat pagi, Bu.'.",
    ],
    [
      "Bahasa Indonesia",
      "Huruf awal nama orang ditulis dengan ...",
      ["huruf kecil", "angka", "huruf kapital", "simbol"],
      2,
      "Nama orang diawali huruf kapital.",
    ],
    [
      "Bahasa Indonesia",
      "Kata yang menunjukkan benda adalah ...",
      ["berlari", "meja", "cantik", "makan"],
      1,
      "'Meja' adalah nama benda.",
    ],
    [
      "Bahasa Indonesia",
      "Lawan kata 'besar' adalah ...",
      ["panjang", "tinggi", "kecil", "lebar"],
      2,
      "Lawan kata besar adalah kecil.",
    ],
    [
      "IPAS",
      "Bagian tubuh untuk melihat adalah ...",
      ["telinga", "mata", "hidung", "tangan"],
      1,
      "Mata digunakan untuk melihat.",
    ],
    [
      "IPAS",
      "Matahari memberi kita ...",
      ["cahaya", "es", "pasir", "malam"],
      0,
      "Matahari merupakan sumber cahaya dan panas.",
    ],
    [
      "IPAS",
      "Hewan yang menghasilkan telur adalah ...",
      ["ayam", "kucing", "sapi", "kambing"],
      0,
      "Ayam berkembang biak dengan bertelur.",
    ],
    [
      "IPAS",
      "Air yang diminum sebaiknya ...",
      ["kotor", "bersih", "berwarna hitam", "berbau"],
      1,
      "Air minum harus bersih dan aman.",
    ],
    [
      "Pendidikan Pancasila",
      "Jumlah sila dalam Pancasila adalah ...",
      ["3", "4", "5", "6"],
      2,
      "Pancasila terdiri dari lima sila.",
    ],
    [
      "Pendidikan Pancasila",
      "Saat teman berbicara, kita sebaiknya ...",
      ["memotong", "mendengarkan", "berteriak", "pergi"],
      1,
      "Mendengarkan orang lain menunjukkan sikap menghargai.",
    ],
    [
      "Pendidikan Pancasila",
      "Warna bendera Indonesia adalah ...",
      ["merah-putih", "biru-putih", "hijau-kuning", "merah-biru"],
      0,
      "Bendera Indonesia berwarna merah dan putih.",
    ],
    [
      "Bahasa Inggris",
      "'Good morning' berarti ...",
      ["Selamat malam", "Selamat pagi", "Terima kasih", "Sampai jumpa"],
      1,
      "Good morning berarti selamat pagi.",
    ],
    [
      "Bahasa Inggris",
      "'Book' berarti ...",
      ["buku", "meja", "pintu", "tas"],
      0,
      "Book berarti buku.",
    ],
    [
      "Bahasa Inggris",
      "Angka 'five' adalah ...",
      ["3", "4", "5", "6"],
      2,
      "Five berarti lima.",
    ],
    [
      "Bahasa Inggris",
      "Warna 'red' adalah ...",
      ["biru", "merah", "hijau", "kuning"],
      1,
      "Red berarti merah.",
    ],
    [
      "Bahasa Inggris",
      "'Thank you' berarti ...",
      ["Maaf", "Tolong", "Terima kasih", "Selamat tinggal"],
      2,
      "Thank you berarti terima kasih.",
    ],
  ],
  2: [
    [
      "Matematika",
      "Berapakah 8 + 7?",
      ["14", "15", "16", "17"],
      1,
      "8 + 7 = 15.",
    ],
    ["Matematika", "Berapakah 12 - 5?", ["6", "7", "8", "9"], 1, "12 - 5 = 7."],
    [
      "Matematika",
      "Berapakah 3 × 4?",
      ["7", "10", "12", "14"],
      2,
      "3 × 4 = 12.",
    ],
    ["Matematika", "Berapakah 20 ÷ 5?", ["2", "3", "4", "5"], 2, "20 ÷ 5 = 4."],
    [
      "Bahasa Indonesia",
      "Kalimat tanya diakhiri dengan tanda ...",
      ["titik", "tanya", "koma", "hubung"],
      1,
      "Kalimat tanya diakhiri tanda tanya (?).",
    ],
    [
      "Bahasa Indonesia",
      "Kata yang tepat untuk melengkapi 'Ibu ... nasi' adalah ...",
      ["memasak", "berlari", "tidur", "terbang"],
      0,
      "Ibu memasak nasi; memasak sesuai dengan kegiatan membuat makanan.",
    ],
    [
      "Bahasa Indonesia",
      "Antonim kata 'panjang' adalah ...",
      ["tinggi", "pendek", "besar", "lebar"],
      1,
      "Lawan kata panjang adalah pendek.",
    ],
    [
      "Bahasa Indonesia",
      "Kata yang menunjukkan tempat adalah ...",
      ["sekolah", "menulis", "indah", "cepat"],
      0,
      "Sekolah merupakan nama tempat.",
    ],
    [
      "IPAS",
      "Alat untuk menunjukkan waktu adalah ...",
      ["jam", "penggaris", "pensil", "sendok"],
      0,
      "Jam digunakan untuk menunjukkan waktu.",
    ],
    [
      "IPAS",
      "Tumbuhan memerlukan ... untuk membuat makanan.",
      ["cahaya matahari", "plastik", "batu", "kertas"],
      0,
      "Tumbuhan memerlukan cahaya matahari dalam proses fotosintesis.",
    ],
    [
      "IPAS",
      "Air dapat berubah menjadi es jika ...",
      ["dipanaskan", "dibekukan", "diwarnai", "diaduk"],
      1,
      "Air membeku ketika mengalami pendinginan yang cukup.",
    ],
    [
      "IPAS",
      "Bagian tumbuhan yang menyerap air dari tanah adalah ...",
      ["bunga", "daun", "akar", "buah"],
      2,
      "Akar menyerap air dan mineral dari tanah.",
    ],
    [
      "Pendidikan Pancasila",
      "Sebelum makan, sebaiknya kita ...",
      ["mencuci tangan", "berlari", "berteriak", "tidur"],
      0,
      "Mencuci tangan membantu menjaga kebersihan sebelum makan.",
    ],
    [
      "Pendidikan Pancasila",
      "Saat berbeda pendapat dengan teman, sebaiknya ...",
      ["bertengkar", "memaksa", "bermusyawarah", "mengejek"],
      2,
      "Musyawarah membantu mencari keputusan dengan saling menghargai.",
    ],
    [
      "Pendidikan Pancasila",
      "Menolong teman yang kesulitan merupakan sikap ...",
      ["peduli", "malas", "sombong", "marah"],
      0,
      "Menolong menunjukkan kepedulian terhadap orang lain.",
    ],
    [
      "Bahasa Inggris",
      "'Two' berarti ...",
      ["1", "2", "3", "4"],
      1,
      "Two berarti dua.",
    ],
    [
      "Bahasa Inggris",
      "'Blue' berarti ...",
      ["merah", "hijau", "biru", "kuning"],
      2,
      "Blue berarti biru.",
    ],
    [
      "Bahasa Inggris",
      "'School' berarti ...",
      ["rumah", "sekolah", "pasar", "lapangan"],
      1,
      "School berarti sekolah.",
    ],
    [
      "Bahasa Inggris",
      "'Goodbye' digunakan ketika ...",
      ["berpisah", "makan", "tidur", "belajar"],
      0,
      "Goodbye digunakan untuk mengucapkan selamat tinggal.",
    ],
    [
      "Bahasa Inggris",
      "'I am happy' berarti ...",
      ["Saya sedih", "Saya lapar", "Saya senang", "Saya marah"],
      2,
      "Happy berarti senang.",
    ],
  ],
  3: [
    [
      "Matematika",
      "Berapakah 6 × 7?",
      ["36", "42", "48", "49"],
      1,
      "6 × 7 = 42.",
    ],
    ["Matematika", "Berapakah 36 ÷ 6?", ["4", "5", "6", "7"], 2, "36 ÷ 6 = 6."],
    [
      "Matematika",
      "Pecahan 1/2 dibaca ...",
      ["satu per tiga", "satu per dua", "dua per satu", "dua per tiga"],
      1,
      "1/2 dibaca satu per dua.",
    ],
    [
      "Matematika",
      "Keliling persegi dengan sisi 5 cm adalah ...",
      ["10 cm", "15 cm", "20 cm", "25 cm"],
      2,
      "Keliling persegi = 4 × sisi = 4 × 5 = 20 cm.",
    ],
    [
      "Bahasa Indonesia",
      "Gagasan utama sebuah paragraf disebut ...",
      ["judul", "ide pokok", "tanda baca", "kata sapaan"],
      1,
      "Ide pokok adalah gagasan utama dalam paragraf.",
    ],
    [
      "Bahasa Indonesia",
      "Kalimat perintah biasanya berisi ...",
      ["suruhan", "pertanyaan", "nama benda", "angka"],
      0,
      "Kalimat perintah digunakan untuk meminta seseorang melakukan sesuatu.",
    ],
    [
      "Bahasa Indonesia",
      "Lawan kata 'rajin' adalah ...",
      ["tekun", "malas", "cerdas", "cepat"],
      1,
      "Lawan kata rajin adalah malas.",
    ],
    [
      "Bahasa Indonesia",
      "Cerita yang tokohnya hewan disebut ...",
      ["fabel", "surat", "iklan", "jadwal"],
      0,
      "Fabel adalah cerita yang menggunakan hewan sebagai tokoh.",
    ],
    [
      "IPAS",
      "Proses tumbuhan membuat makanan disebut ...",
      ["fotosintesis", "respirasi", "evaporasi", "erosi"],
      0,
      "Fotosintesis adalah proses tumbuhan membuat makanan dengan bantuan cahaya.",
    ],
    [
      "IPAS",
      "Air yang berubah menjadi uap disebut ...",
      ["membeku", "menguap", "mengembun", "mencair"],
      1,
      "Menguap adalah perubahan dari cair menjadi gas.",
    ],
    [
      "IPAS",
      "Organ untuk bernapas pada manusia adalah ...",
      ["jantung", "paru-paru", "lambung", "ginjal"],
      1,
      "Paru-paru merupakan organ utama pernapasan manusia.",
    ],
    [
      "IPAS",
      "Sumber energi utama bagi bumi adalah ...",
      ["bulan", "matahari", "angin malam", "batu"],
      1,
      "Matahari merupakan sumber energi utama bagi kehidupan di bumi.",
    ],
    [
      "Pendidikan Pancasila",
      "Menghargai teman yang berbeda suku menunjukkan ...",
      ["toleransi", "permusuhan", "egoisme", "ketakutan"],
      0,
      "Toleransi berarti menghargai perbedaan.",
    ],
    [
      "Pendidikan Pancasila",
      "Contoh gotong royong di sekolah adalah ...",
      [
        "membersihkan kelas bersama",
        "menyontek",
        "datang terlambat",
        "merusak meja",
      ],
      0,
      "Membersihkan kelas bersama merupakan contoh gotong royong.",
    ],
    [
      "Pendidikan Pancasila",
      "Aturan di sekolah harus ...",
      ["dilanggar", "ditaati", "diabaikan", "disembunyikan"],
      1,
      "Aturan dibuat agar kehidupan sekolah tertib.",
    ],
    [
      "Bahasa Inggris",
      "'Yesterday' berarti ...",
      ["besok", "hari ini", "kemarin", "minggu depan"],
      2,
      "Yesterday berarti kemarin.",
    ],
    [
      "Bahasa Inggris",
      "'I have two books' berarti ...",
      [
        "Saya punya dua buku",
        "Saya punya tiga buku",
        "Saya membaca dua buku",
        "Saya membeli satu buku",
      ],
      0,
      "Kalimat tersebut berarti saya mempunyai dua buku.",
    ],
    [
      "Bahasa Inggris",
      "Bentuk jamak dari 'cat' adalah ...",
      ["catting", "cats", "cates", "cat"],
      1,
      "Bentuk jamak regular dari cat adalah cats.",
    ],
    [
      "Bahasa Inggris",
      "'Open the door' berarti ...",
      ["Tutup pintu", "Buka pintu", "Bersihkan pintu", "Cat pintu"],
      1,
      "Open berarti buka dan door berarti pintu.",
    ],
    [
      "Bahasa Inggris",
      "'Big' berarti ...",
      ["kecil", "besar", "panjang", "pendek"],
      1,
      "Big berarti besar.",
    ],
  ],
  4: [
    [
      "Matematika",
      "Berapakah 245 + 137?",
      ["372", "382", "392", "402"],
      1,
      "245 + 137 = 382.",
    ],
    [
      "Matematika",
      "Berapakah 500 - 275?",
      ["215", "225", "235", "245"],
      1,
      "500 - 275 = 225.",
    ],
    [
      "Matematika",
      "1/4 sama dengan ...",
      ["0,20", "0,25", "0,40", "0,50"],
      1,
      "1 ÷ 4 = 0,25.",
    ],
    [
      "Matematika",
      "Luas persegi panjang dengan panjang 8 cm dan lebar 5 cm adalah ...",
      ["13 cm²", "26 cm²", "40 cm²", "80 cm²"],
      2,
      "Luas = panjang × lebar = 8 × 5 = 40 cm².",
    ],
    [
      "Bahasa Indonesia",
      "Teks yang berisi langkah-langkah membuat sesuatu disebut ...",
      ["prosedur", "deskripsi", "puisi", "surat"],
      0,
      "Teks prosedur menjelaskan langkah-langkah melakukan sesuatu.",
    ],
    [
      "Bahasa Indonesia",
      "Kata baku dari 'ijin' adalah ...",
      ["ijin", "izin", "izien", "ijhin"],
      1,
      "Bentuk baku yang benar adalah izin.",
    ],
    [
      "Bahasa Indonesia",
      "Kalimat yang menunjukkan pertanyaan adalah ...",
      [
        "Saya pergi ke sekolah.",
        "Tolong tutup pintu.",
        "Kapan kamu datang?",
        "Hari ini cerah.",
      ],
      2,
      "Kalimat tanya memiliki tujuan meminta informasi dan diakhiri tanda tanya.",
    ],
    [
      "Bahasa Indonesia",
      "Tokoh utama adalah tokoh yang ...",
      [
        "paling sedikit muncul",
        "menjadi pusat cerita",
        "selalu jahat",
        "tidak punya peran",
      ],
      1,
      "Tokoh utama menjadi pusat perkembangan cerita.",
    ],
    [
      "IPAS",
      "Planet tempat manusia hidup adalah ...",
      ["Mars", "Venus", "Bumi", "Jupiter"],
      2,
      "Manusia hidup di planet Bumi.",
    ],
    [
      "IPAS",
      "Gaya yang menarik benda ke arah bumi disebut ...",
      ["gaya gesek", "gaya magnet", "gaya gravitasi", "gaya pegas"],
      2,
      "Gravitasi menarik benda menuju pusat bumi.",
    ],
    [
      "IPAS",
      "Perubahan energi pada lampu adalah ...",
      [
        "listrik menjadi cahaya",
        "cahaya menjadi listrik",
        "panas menjadi gerak",
        "gerak menjadi bunyi",
      ],
      0,
      "Lampu mengubah energi listrik menjadi cahaya dan sebagian panas.",
    ],
    [
      "IPAS",
      "Bagian tumbuhan tempat pertukaran gas terutama terjadi adalah ...",
      ["stomata", "akar", "buah", "biji"],
      0,
      "Stomata pada daun menjadi tempat pertukaran gas.",
    ],
    [
      "Pendidikan Pancasila",
      "Semboyan bangsa Indonesia adalah ...",
      [
        "Tut Wuri Handayani",
        "Bhinneka Tunggal Ika",
        "Ing Ngarsa Sung Tulada",
        "Merdeka Belajar",
      ],
      1,
      "Bhinneka Tunggal Ika berarti berbeda-beda tetapi tetap satu.",
    ],
    [
      "Pendidikan Pancasila",
      "Melaksanakan tugas piket merupakan contoh ...",
      ["tanggung jawab", "ketakutan", "kemalasan", "perselisihan"],
      0,
      "Melaksanakan tugas piket menunjukkan tanggung jawab.",
    ],
    [
      "Pendidikan Pancasila",
      "Keputusan bersama sebaiknya diambil melalui ...",
      ["musyawarah", "paksaan", "ejekan", "ancaman"],
      0,
      "Musyawarah membantu mencapai keputusan bersama.",
    ],
    [
      "Bahasa Inggris",
      "'There are three pencils' berarti ...",
      [
        "Ada dua pensil",
        "Ada tiga pensil",
        "Ada empat pensil",
        "Tidak ada pensil",
      ],
      1,
      "There are three pencils berarti ada tiga pensil.",
    ],
    [
      "Bahasa Inggris",
      "'Under' berarti ...",
      ["di atas", "di bawah", "di samping", "di dalam"],
      1,
      "Under berarti di bawah.",
    ],
    [
      "Bahasa Inggris",
      "'I like reading' berarti ...",
      [
        "Saya suka membaca",
        "Saya suka berlari",
        "Saya sedang tidur",
        "Saya tidak suka membaca",
      ],
      0,
      "Like reading berarti suka membaca.",
    ],
    [
      "Bahasa Inggris",
      "'Mother' berarti ...",
      ["ayah", "ibu", "kakak", "adik"],
      1,
      "Mother berarti ibu.",
    ],
    [
      "Bahasa Inggris",
      "'Beautiful' berarti ...",
      ["cantik", "cepat", "dingin", "tinggi"],
      0,
      "Beautiful berarti cantik atau indah.",
    ],
  ],
  5: [
    [
      "Matematika",
      "Berapakah 3,5 + 2,4?",
      ["5,7", "5,8", "5,9", "6,0"],
      2,
      "3,5 + 2,4 = 5,9.",
    ],
    [
      "Matematika",
      "25% dari 200 adalah ...",
      ["25", "40", "50", "75"],
      2,
      "25% = 1/4, jadi 1/4 × 200 = 50.",
    ],
    [
      "Matematika",
      "Volume kubus dengan sisi 4 cm adalah ...",
      ["16 cm³", "32 cm³", "64 cm³", "80 cm³"],
      2,
      "Volume kubus = s³ = 4³ = 64 cm³.",
    ],
    [
      "Matematika",
      "Rasio 2 : 3 berarti ...",
      ["2 dibanding 3", "3 dibanding 2", "2 ditambah 3", "3 dikurangi 2"],
      0,
      "Rasio 2 : 3 menunjukkan perbandingan dua bagian sebesar 2 terhadap 3.",
    ],
    [
      "Bahasa Indonesia",
      "Teks yang menjelaskan proses terjadinya suatu fenomena disebut ...",
      ["eksplanasi", "narasi", "iklan", "surat"],
      0,
      "Teks eksplanasi menjelaskan bagaimana atau mengapa suatu fenomena terjadi.",
    ],
    [
      "Bahasa Indonesia",
      "Kalimat utama biasanya memuat ...",
      ["gagasan utama", "nomor halaman", "nama penulis saja", "tanda tangan"],
      0,
      "Kalimat utama memuat gagasan utama paragraf.",
    ],
    [
      "Bahasa Indonesia",
      "Kata 'karena' biasanya menunjukkan hubungan ...",
      ["sebab", "waktu", "tempat", "ukuran"],
      0,
      "Kata karena digunakan untuk menyatakan sebab.",
    ],
    [
      "Bahasa Indonesia",
      "Meringkas berarti ...",
      [
        "memperpanjang teks",
        "mengambil inti informasi",
        "mengubah topik",
        "menghapus judul",
      ],
      1,
      "Meringkas berarti menyajikan inti informasi secara lebih singkat.",
    ],
    [
      "IPAS",
      "Hewan dan tumbuhan dalam suatu lingkungan disebut ...",
      ["komponen biotik", "komponen abiotik", "cuaca", "benda mati"],
      0,
      "Makhluk hidup merupakan komponen biotik.",
    ],
    [
      "IPAS",
      "Udara, air, dan tanah termasuk komponen ...",
      ["biotik", "abiotik", "hewan", "produsen"],
      1,
      "Komponen abiotik adalah unsur tak hidup dalam ekosistem.",
    ],
    [
      "IPAS",
      "Rantai makanan biasanya dimulai dari ...",
      ["produsen", "konsumen puncak", "pengurai", "predator"],
      0,
      "Rantai makanan umumnya dimulai dari produsen.",
    ],
    [
      "IPAS",
      "Contoh sumber energi terbarukan adalah ...",
      ["batu bara", "minyak bumi", "matahari", "gas alam"],
      2,
      "Energi matahari dapat diperbarui secara alami.",
    ],
    [
      "Pendidikan Pancasila",
      "Contoh kewajiban siswa adalah ...",
      [
        "mendapat nilai",
        "menaati aturan sekolah",
        "mendapat hadiah",
        "memilih teman",
      ],
      1,
      "Siswa berkewajiban menaati aturan sekolah.",
    ],
    [
      "Pendidikan Pancasila",
      "Hak dan kewajiban harus dilaksanakan secara ...",
      ["seimbang", "sembarangan", "terpisah", "paksa"],
      0,
      "Hak dan kewajiban perlu dijalankan secara seimbang dan bertanggung jawab.",
    ],
    [
      "Pendidikan Pancasila",
      "Sikap menghormati perbedaan agama termasuk ...",
      ["toleransi", "diskriminasi", "provokasi", "permusuhan"],
      0,
      "Menghormati perbedaan agama merupakan sikap toleransi.",
    ],
    [
      "Bahasa Inggris",
      "'Usually' berarti ...",
      ["selalu", "biasanya", "tidak pernah", "kemarin"],
      1,
      "Usually berarti biasanya.",
    ],
    [
      "Bahasa Inggris",
      "Kalimat yang benar adalah ...",
      [
        "She play football.",
        "She plays football.",
        "She playing football.",
        "She played football every day.",
      ],
      1,
      "Untuk kebiasaan saat ini, subjek she menggunakan kata kerja plays.",
    ],
    [
      "Bahasa Inggris",
      "'I went to school yesterday' menggunakan bentuk waktu ...",
      ["present", "past", "future", "continuous"],
      1,
      "Went adalah bentuk lampau dari go, sehingga kalimat menggunakan past tense.",
    ],
    [
      "Bahasa Inggris",
      "'Delicious' berarti ...",
      ["lezat", "mahal", "dingin", "besar"],
      0,
      "Delicious berarti lezat.",
    ],
    [
      "Bahasa Inggris",
      "'Before' berarti ...",
      ["setelah", "sebelum", "di antara", "selama"],
      1,
      "Before berarti sebelum.",
    ],
  ],
  6: [
    [
      "Matematika",
      "Perbandingan 12 : 18 disederhanakan menjadi ...",
      ["2 : 3", "3 : 2", "4 : 5", "6 : 9"],
      0,
      "12 dan 18 dibagi 6 sehingga menjadi 2 : 3.",
    ],
    [
      "Matematika",
      "Skala 1 : 100.000 berarti 1 cm pada peta mewakili ...",
      ["100 m", "500 m", "1 km", "10 km"],
      2,
      "100.000 cm = 1 km, jadi 1 cm pada peta mewakili 1 km.",
    ],
    [
      "Matematika",
      "Rata-rata dari 6, 8, dan 10 adalah ...",
      ["7", "8", "9", "10"],
      1,
      "(6 + 8 + 10) ÷ 3 = 24 ÷ 3 = 8.",
    ],
    [
      "Matematika",
      "Berapakah 2/3 dari 30?",
      ["10", "15", "20", "25"],
      2,
      "2/3 × 30 = 20.",
    ],
    [
      "Bahasa Indonesia",
      "Pidato yang bertujuan memengaruhi pendengar disebut pidato ...",
      ["naratif", "persuasif", "deskriptif", "eksposisi"],
      1,
      "Pidato persuasif bertujuan memengaruhi atau mengajak audiens.",
    ],
    [
      "Bahasa Indonesia",
      "Data yang berasal dari pengamatan disebut data ...",
      ["fiksi", "faktual", "khayalan", "imajinatif"],
      1,
      "Data hasil pengamatan merupakan data faktual.",
    ],
    [
      "Bahasa Indonesia",
      "Sumber informasi perlu diperiksa agar ...",
      ["menarik saja", "terjamin kebenarannya", "lebih panjang", "lebih lucu"],
      1,
      "Memeriksa sumber membantu menilai apakah informasi dapat dipercaya.",
    ],
    [
      "Bahasa Indonesia",
      "Kalimat efektif sebaiknya ...",
      ["bertele-tele", "jelas dan tepat", "sangat panjang", "tanpa subjek"],
      1,
      "Kalimat efektif menyampaikan gagasan dengan jelas dan tepat.",
    ],
    [
      "IPAS",
      "Rangkaian listrik yang hanya memiliki satu jalur disebut rangkaian ...",
      ["paralel", "seri", "campuran", "terbuka"],
      1,
      "Rangkaian seri memiliki satu jalur arus.",
    ],
    [
      "IPAS",
      "Energi listrik dapat dihemat dengan ...",
      [
        "menyalakan lampu sepanjang hari",
        "mematikan alat saat tidak digunakan",
        "membiarkan TV menyala",
        "mengisi daya terus-menerus",
      ],
      1,
      "Mematikan perangkat yang tidak digunakan menghemat energi.",
    ],
    [
      "IPAS",
      "Sistem peredaran darah manusia melibatkan organ utama ...",
      ["jantung", "paru-paru saja", "lambung", "kulit"],
      0,
      "Jantung memompa darah ke seluruh tubuh.",
    ],
    [
      "IPAS",
      "Planet yang dikenal sebagai planet merah adalah ...",
      ["Mars", "Venus", "Saturnus", "Merkurius"],
      0,
      "Mars tampak kemerahan karena permukaan dan debunya.",
    ],
    [
      "Pendidikan Pancasila",
      "Contoh menjaga persatuan di sekolah adalah ...",
      [
        "memilih teman berdasarkan suku",
        "bekerja sama tanpa membedakan",
        "mengejek perbedaan",
        "membuat kelompok tertutup",
      ],
      1,
      "Bekerja sama tanpa membedakan latar belakang memperkuat persatuan.",
    ],
    [
      "Pendidikan Pancasila",
      "Menghargai hak orang lain berarti ...",
      [
        "mengambil milik orang",
        "menghormati kebebasan orang lain",
        "memaksakan kehendak",
        "mengabaikan aturan",
      ],
      1,
      "Menghormati hak berarti tidak merugikan kebebasan orang lain.",
    ],
    [
      "Pendidikan Pancasila",
      "Musyawarah dilakukan untuk ...",
      [
        "mencari keputusan bersama",
        "mencari siapa yang salah",
        "membuat keributan",
        "memaksakan kehendak",
      ],
      0,
      "Tujuan musyawarah adalah mencapai keputusan bersama.",
    ],
    [
      "Bahasa Inggris",
      "'I will study tomorrow' menggunakan ...",
      ["past tense", "present tense", "future tense", "present perfect"],
      2,
      "Will + verb digunakan untuk menyatakan rencana atau kejadian di masa depan.",
    ],
    [
      "Bahasa Inggris",
      "'Environment' berarti ...",
      ["lingkungan", "perjalanan", "pekerjaan", "makanan"],
      0,
      "Environment berarti lingkungan.",
    ],
    [
      "Bahasa Inggris",
      "Kalimat yang tepat adalah ...",
      [
        "He don't like milk.",
        "He doesn't like milk.",
        "He doesn't likes milk.",
        "He not like milk.",
      ],
      1,
      "Untuk he/she/it pada simple present negatif digunakan doesn't + verb dasar.",
    ],
    [
      "Bahasa Inggris",
      "'Congratulations!' digunakan untuk ...",
      ["mengucapkan selamat", "meminta maaf", "menolak", "bertanya arah"],
      0,
      "Congratulations digunakan untuk mengucapkan selamat atas pencapaian.",
    ],
    [
      "Bahasa Inggris",
      "'Careful!' berarti ...",
      ["Cepat!", "Hati-hati!", "Diam!", "Ayo makan!"],
      1,
      "Careful berarti hati-hati.",
    ],
  ],
  7: [
    [
      "Matematika",
      "Hasil dari -8 + 13 adalah ...",
      ["-21", "-5", "5", "21"],
      2,
      "-8 + 13 = 5.",
    ],
    [
      "Matematika",
      "Bentuk aljabar dari '3 kali x ditambah 5' adalah ...",
      ["3 + x + 5", "3x + 5", "x/3 + 5", "3(x+5)"],
      1,
      "Tiga kali x ditulis 3x, lalu ditambah 5.",
    ],
    [
      "Matematika",
      "Jika 2x + 3 = 11, nilai x adalah ...",
      ["3", "4", "5", "7"],
      1,
      "2x = 8 sehingga x = 4.",
    ],
    [
      "Matematika",
      "Perbandingan 2 : 5 memiliki total bagian ...",
      ["2", "3", "5", "7"],
      3,
      "Total bagian perbandingan adalah 2 + 5 = 7.",
    ],
    [
      "Bahasa Indonesia",
      "Teks yang menggambarkan objek secara rinci disebut ...",
      ["deskripsi", "prosedur", "argumentasi", "eksposisi"],
      0,
      "Teks deskripsi menggambarkan objek agar pembaca seolah melihat atau merasakan.",
    ],
    [
      "Bahasa Indonesia",
      "Cerita fantasi biasanya mengandung ...",
      [
        "unsur imajinatif",
        "data statistik",
        "instruksi mesin",
        "laporan keuangan",
      ],
      0,
      "Cerita fantasi menonjolkan unsur khayalan atau imajinasi.",
    ],
    [
      "Bahasa Indonesia",
      "Teks prosedur bertujuan menjelaskan ...",
      [
        "langkah melakukan sesuatu",
        "riwayat keluarga",
        "pendapat politik",
        "hasil perhitungan",
      ],
      0,
      "Teks prosedur berisi langkah-langkah melakukan suatu kegiatan.",
    ],
    [
      "Bahasa Indonesia",
      "Laporan hasil observasi harus didasarkan pada ...",
      ["fakta hasil pengamatan", "rumor", "khayalan", "iklan"],
      0,
      "Laporan observasi harus berdasarkan fakta yang diamati.",
    ],
    [
      "IPA",
      "Satuan SI untuk panjang adalah ...",
      ["gram", "meter", "liter", "sekon"],
      1,
      "Satuan dasar SI untuk panjang adalah meter.",
    ],
    [
      "IPA",
      "Perubahan wujud cair menjadi gas disebut ...",
      ["membeku", "mengembun", "menguap", "menyublim"],
      2,
      "Menguap adalah perubahan wujud dari cair ke gas.",
    ],
    [
      "IPA",
      "Gaya dapat menyebabkan benda ...",
      [
        "selalu diam",
        "berubah gerak",
        "hilang massanya",
        "berubah menjadi air",
      ],
      1,
      "Gaya dapat mengubah gerak atau bentuk benda.",
    ],
    [
      "IPA",
      "Organisme yang membuat makanan sendiri disebut ...",
      ["konsumen", "produsen", "dekomposer", "parasit"],
      1,
      "Produsen dapat membuat makanan sendiri, misalnya tumbuhan.",
    ],
    [
      "IPS",
      "Interaksi sosial terjadi jika ada ...",
      [
        "kontak dan komunikasi",
        "uang saja",
        "peraturan tertulis saja",
        "teknologi",
      ],
      0,
      "Interaksi sosial melibatkan kontak sosial dan komunikasi.",
    ],
    [
      "IPS",
      "Kegiatan menghasilkan barang atau jasa disebut ...",
      ["konsumsi", "produksi", "distribusi", "investasi"],
      1,
      "Produksi adalah kegiatan menghasilkan barang atau jasa.",
    ],
    [
      "Sejarah",
      "Masa ketika manusia belum mengenal tulisan disebut masa ...",
      ["modern", "praaksara", "kolonial", "reformasi"],
      1,
      "Praaksara berarti masa sebelum manusia mengenal tulisan.",
    ],
    [
      "Bahasa Inggris",
      "'My name is Rina' digunakan untuk ...",
      [
        "memperkenalkan diri",
        "meminta izin",
        "mengucapkan selamat",
        "menutup percakapan",
      ],
      0,
      "Kalimat tersebut digunakan untuk memperkenalkan nama.",
    ],
    [
      "Pendidikan Pancasila",
      "Contoh penerapan persatuan adalah ...",
      [
        "menghargai perbedaan",
        "memaksakan pendapat",
        "mengejek teman",
        "membentuk konflik",
      ],
      0,
      "Menghargai perbedaan membantu menjaga persatuan.",
    ],
    [
      "Informatika",
      "Memecah masalah besar menjadi bagian kecil disebut ...",
      ["dekomposisi", "kompresi", "enkripsi", "simulasi"],
      0,
      "Dekomposisi adalah memecah masalah menjadi bagian yang lebih kecil.",
    ],
    [
      "Informatika",
      "Urutan langkah logis untuk menyelesaikan masalah disebut ...",
      ["algoritma", "folder", "browser", "monitor"],
      0,
      "Algoritma adalah langkah-langkah logis dan terstruktur.",
    ],
    [
      "PJOK",
      "Pemanasan sebelum olahraga bertujuan antara lain untuk ...",
      [
        "meningkatkan kesiapan tubuh",
        "membuat tubuh lelah",
        "mengurangi koordinasi",
        "menghentikan sirkulasi",
      ],
      0,
      "Pemanasan membantu mempersiapkan tubuh sebelum aktivitas fisik.",
    ],
  ],
  8: [
    [
      "Matematika",
      "Penyelesaian x + 5 = 12 adalah ...",
      ["5", "6", "7", "8"],
      2,
      "x = 12 - 5 = 7.",
    ],
    [
      "Matematika",
      "Sisi siku-siku segitiga 6 cm dan 8 cm. Sisi miringnya ...",
      ["9 cm", "10 cm", "12 cm", "14 cm"],
      1,
      "Dengan Pythagoras, c = √(6²+8²)=√100=10 cm.",
    ],
    [
      "Matematika",
      "Rata-rata data 4, 6, 8, dan 10 adalah ...",
      ["6", "7", "8", "9"],
      1,
      "Jumlah 28 dibagi 4 = 7.",
    ],
    [
      "Matematika",
      "Peluang muncul angka genap pada dadu fair adalah ...",
      ["1/6", "1/3", "1/2", "2/3"],
      2,
      "Ada 3 angka genap dari 6 sisi, jadi 3/6 = 1/2.",
    ],
    [
      "Bahasa Indonesia",
      "Teks yang menjelaskan proses terjadinya fenomena alam disebut ...",
      ["eksplanasi", "negosiasi", "ulasan", "iklan"],
      0,
      "Teks eksplanasi membahas proses atau sebab suatu fenomena.",
    ],
    [
      "Bahasa Indonesia",
      "Slogan sebaiknya dibuat ...",
      [
        "panjang dan rumit",
        "singkat dan mudah diingat",
        "tanpa pesan",
        "sulit dibaca",
      ],
      1,
      "Slogan efektif biasanya singkat, jelas, dan mudah diingat.",
    ],
    [
      "Bahasa Indonesia",
      "Puisi menggunakan bahasa yang cenderung ...",
      [
        "padat dan imajinatif",
        "hanya berupa angka",
        "selalu formal",
        "tanpa makna",
      ],
      0,
      "Puisi memanfaatkan bahasa padat, pilihan kata, dan imajinasi.",
    ],
    [
      "Bahasa Indonesia",
      "Resensi merupakan tulisan yang berisi ...",
      [
        "ulasan sebuah karya",
        "jadwal pelajaran",
        "hasil eksperimen",
        "daftar belanja",
      ],
      0,
      "Resensi mengulas dan menilai sebuah karya.",
    ],
    [
      "IPA",
      "Unit struktural terkecil makhluk hidup adalah ...",
      ["sel", "organ", "jaringan", "sistem organ"],
      0,
      "Sel merupakan unit struktural dan fungsional dasar makhluk hidup.",
    ],
    [
      "IPA",
      "Tekanan dipengaruhi oleh gaya dan ...",
      [
        "luas bidang tekan",
        "warna benda",
        "suhu ruangan saja",
        "massa jenis udara saja",
      ],
      0,
      "Secara sederhana tekanan = gaya / luas bidang tekan.",
    ],
    [
      "IPA",
      "Gelombang yang memerlukan medium untuk merambat disebut ...",
      ["elektromagnetik", "mekanik", "cahaya", "radio"],
      1,
      "Gelombang mekanik memerlukan medium untuk merambat.",
    ],
    [
      "IPA",
      "Cahaya dapat dipantulkan ketika mengenai ...",
      ["permukaan", "ruang kosong", "angka", "bunyi"],
      0,
      "Pemantulan terjadi ketika cahaya mengenai permukaan.",
    ],
    [
      "IPS",
      "Perpindahan status sosial seseorang disebut ...",
      ["mobilitas sosial", "integrasi", "urbanisasi", "produksi"],
      0,
      "Mobilitas sosial adalah perpindahan posisi/status sosial.",
    ],
    [
      "IPS",
      "VOC merupakan singkatan dari ...",
      [
        "Vereenigde Oostindische Compagnie",
        "Verenigde Organisatie Company",
        "Voluntary Oriental Company",
        "Dutch Ocean Council",
      ],
      0,
      "VOC adalah Vereenigde Oostindische Compagnie.",
    ],
    [
      "Sejarah",
      "Sumpah Pemuda diperingati sebagai tonggak penting ...",
      [
        "persatuan pemuda",
        "awal reformasi",
        "awal kolonialisme",
        "berdirinya VOC",
      ],
      0,
      "Sumpah Pemuda memperkuat kesadaran persatuan dan identitas kebangsaan.",
    ],
    [
      "Bahasa Inggris",
      "Recount text digunakan untuk ...",
      [
        "menceritakan pengalaman masa lalu",
        "memberi instruksi",
        "menjelaskan definisi",
        "menjual produk",
      ],
      0,
      "Recount text menceritakan kembali pengalaman atau peristiwa masa lalu.",
    ],
    [
      "Pendidikan Pancasila",
      "Peraturan perundang-undangan harus ...",
      [
        "selaras secara hierarkis",
        "saling bertentangan",
        "dihapus semua",
        "hanya berlaku di sekolah",
      ],
      0,
      "Peraturan yang lebih rendah harus selaras dengan aturan yang lebih tinggi.",
    ],
    [
      "Informatika",
      "Spreadsheet terutama digunakan untuk ...",
      ["mengolah data", "menggambar manual", "menonton film", "merekam suara"],
      0,
      "Spreadsheet digunakan untuk mengorganisasi dan mengolah data dalam tabel.",
    ],
    [
      "Informatika",
      "Program yang mengulang instruksi disebut menggunakan ...",
      ["loop", "folder", "driver", "ikon"],
      0,
      "Loop/perulangan digunakan untuk menjalankan instruksi berulang.",
    ],
    [
      "PJOK",
      "Gerakan mengangkat tubuh dengan bertumpu pada kedua tangan disebut ...",
      ["push-up", "sit-up", "jogging", "squat"],
      0,
      "Push-up dilakukan dengan tumpuan tangan untuk melatih tubuh bagian atas.",
    ],
  ],
  9: [
    [
      "Matematika",
      "Akar-akar x² - 5x + 6 = 0 adalah ...",
      ["1 dan 6", "2 dan 3", "-2 dan -3", "3 dan 5"],
      1,
      "x² - 5x + 6 = (x-2)(x-3), jadi akarnya 2 dan 3.",
    ],
    [
      "Matematika",
      "Transformasi yang memindahkan titik tanpa mengubah ukuran dan bentuk disebut ...",
      ["translasi", "dilatasi", "rotasi saja", "refleksi saja"],
      0,
      "Translasi memindahkan objek dengan jarak dan arah tertentu.",
    ],
    [
      "Matematika",
      "Dua bangun yang sama bentuk dan ukuran disebut ...",
      ["kongruen", "serupa saja", "sejajar", "berpotongan"],
      0,
      "Bangun kongruen memiliki bentuk dan ukuran yang sama.",
    ],
    [
      "Matematika",
      "Jika peluang suatu kejadian adalah 0, maka kejadian tersebut ...",
      ["pasti", "mustahil", "mungkin", "sangat sering"],
      1,
      "Peluang 0 berarti kejadian tidak mungkin terjadi.",
    ],
    [
      "Bahasa Indonesia",
      "Pidato persuasif bertujuan ...",
      [
        "mengajak atau meyakinkan",
        "mencatat data",
        "menghibur saja",
        "menghitung angka",
      ],
      0,
      "Pidato persuasif bertujuan memengaruhi atau mengajak audiens.",
    ],
    [
      "Bahasa Indonesia",
      "Cerpen merupakan singkatan dari ...",
      [
        "cerita pendek",
        "cerita pendapat",
        "cerita pendidikan",
        "cerita penjelasan",
      ],
      0,
      "Cerpen berarti cerita pendek.",
    ],
    [
      "Bahasa Indonesia",
      "Cek fakta dilakukan untuk ...",
      [
        "memeriksa kebenaran informasi",
        "membuat berita palsu",
        "menghapus sumber",
        "menambah rumor",
      ],
      0,
      "Cek fakta membantu memeriksa apakah sebuah klaim didukung bukti.",
    ],
    [
      "Bahasa Indonesia",
      "Laporan percobaan sebaiknya memuat ...",
      [
        "tujuan, metode, hasil, kesimpulan",
        "cerita khayalan",
        "iklan produk",
        "daftar lagu",
      ],
      0,
      "Laporan percobaan mendokumentasikan tujuan, metode, hasil, dan kesimpulan.",
    ],
    [
      "IPA",
      "Sifat yang diturunkan dari orang tua disebut ...",
      ["sifat hereditas", "sifat sementara", "gaya", "tekanan"],
      0,
      "Hereditas adalah pewarisan sifat dari orang tua kepada keturunannya.",
    ],
    [
      "IPA",
      "Satuan kuat arus listrik adalah ...",
      ["volt", "ampere", "ohm", "watt"],
      1,
      "Ampere (A) adalah satuan kuat arus listrik.",
    ],
    [
      "IPA",
      "Magnet memiliki dua kutub, yaitu ...",
      [
        "atas dan bawah",
        "utara dan selatan",
        "kiri dan kanan",
        "positif dan negatif",
      ],
      1,
      "Kutub magnet adalah utara dan selatan.",
    ],
    [
      "IPA",
      "Bioteknologi menggunakan ... untuk menghasilkan produk atau jasa tertentu.",
      [
        "makhluk hidup/sistem biologis",
        "batu saja",
        "logam saja",
        "cahaya saja",
      ],
      0,
      "Bioteknologi memanfaatkan organisme, sel, atau komponen biologis.",
    ],
    [
      "IPS",
      "Globalisasi menyebabkan hubungan antarwilayah menjadi ...",
      ["lebih terhubung", "selalu terpisah", "tidak berubah", "mustahil"],
      0,
      "Globalisasi meningkatkan keterhubungan antarwilayah.",
    ],
    [
      "IPS",
      "Kegiatan menjual barang ke luar negeri disebut ...",
      ["impor", "ekspor", "konsumsi", "barter"],
      1,
      "Ekspor adalah kegiatan menjual barang atau jasa ke luar negeri.",
    ],
    [
      "Sejarah",
      "Proklamasi Kemerdekaan Indonesia dibacakan pada ...",
      ["17 Agustus 1945", "20 Mei 1908", "28 Oktober 1928", "10 November 1945"],
      0,
      "Proklamasi Kemerdekaan Indonesia dibacakan pada 17 Agustus 1945.",
    ],
    [
      "Bahasa Inggris",
      "Passive voice menempatkan ... sebagai fokus kalimat.",
      ["penerima tindakan", "pelaku selalu", "tempat", "waktu"],
      0,
      "Passive voice memusatkan perhatian pada pihak atau benda yang menerima tindakan.",
    ],
    [
      "Pendidikan Pancasila",
      "Demokrasi memberi ruang bagi warga untuk ...",
      [
        "berpartisipasi",
        "memaksakan kehendak",
        "mengabaikan hukum",
        "menolak semua pendapat",
      ],
      0,
      "Demokrasi memberi ruang partisipasi warga sesuai aturan.",
    ],
    [
      "Informatika",
      "Python merupakan contoh ...",
      [
        "bahasa pemrograman",
        "sistem operasi",
        "mesin pencari",
        "perangkat keras",
      ],
      0,
      "Python adalah bahasa pemrograman.",
    ],
    [
      "Informatika",
      "AI merupakan singkatan dari ...",
      [
        "Artificial Intelligence",
        "Automatic Internet",
        "Applied Information",
        "Advanced Interface",
      ],
      0,
      "AI adalah Artificial Intelligence atau kecerdasan artifisial.",
    ],
    [
      "PJOK",
      "P3K merupakan singkatan dari ...",
      [
        "Pertolongan Pertama Pada Kecelakaan",
        "Perawatan Pribadi Pada Kegiatan",
        "Pelatihan Pertama Pemain Kelas",
        "Pemeriksaan Pertama Pada Kesehatan",
      ],
      0,
      "P3K berarti Pertolongan Pertama Pada Kecelakaan.",
    ],
  ],
  10: [
    ["Matematika", "Berapakah 2^5?", ["10", "16", "25", "32"], 3, "2^5 = 32."],
    [
      "Matematika",
      "Nilai log₂ 32 adalah ...",
      ["3", "4", "5", "6"],
      2,
      "Karena 2^5 = 32, maka log₂32 = 5.",
    ],
    [
      "Matematika",
      "Suku ke-5 barisan 3, 6, 9, 12, ... adalah ...",
      ["12", "15", "18", "21"],
      1,
      "Barisan aritmetika bertambah 3, sehingga suku ke-5 = 15.",
    ],
    [
      "Matematika",
      "Jika vektor a=(2,3) dan b=(1,4), a+b adalah ...",
      ["(3,7)", "(1,1)", "(2,12)", "(3,1)"],
      0,
      "Jumlah vektor dilakukan per komponen: (2+1, 3+4) = (3,7).",
    ],
    [
      "Fisika",
      "Satuan SI untuk massa adalah ...",
      ["gram", "kilogram", "newton", "joule"],
      1,
      "Satuan dasar SI untuk massa adalah kilogram.",
    ],
    [
      "Fisika",
      "Metode ilmiah dimulai dengan ...",
      [
        "pengamatan/identifikasi masalah",
        "kesimpulan",
        "publikasi",
        "menghapus data",
      ],
      0,
      "Penelitian biasanya dimulai dari observasi dan identifikasi masalah.",
    ],
    [
      "Fisika",
      "Energi dari matahari termasuk energi ...",
      ["tak terbarukan", "terbarukan", "fosil", "kimia konvensional"],
      1,
      "Energi matahari dapat diperbarui secara alami.",
    ],
    [
      "Kimia",
      "Partikel penyusun atom yang bermuatan negatif adalah ...",
      ["proton", "neutron", "elektron", "nukleon"],
      2,
      "Elektron bermuatan negatif.",
    ],
    [
      "Kimia",
      "Nomor atom menunjukkan jumlah ...",
      ["neutron", "proton", "proton + neutron", "kulit elektron"],
      1,
      "Nomor atom adalah jumlah proton dalam inti atom.",
    ],
    [
      "Kimia",
      "Unsur-unsur dalam tabel periodik disusun berdasarkan ...",
      ["nomor atom", "warna", "massa benda", "harga"],
      0,
      "Tabel periodik modern disusun berdasarkan kenaikan nomor atom.",
    ],
    [
      "Biologi",
      "Virus hanya dapat berkembang biak dengan bantuan ...",
      ["sel inang", "tanah", "cahaya", "batu"],
      0,
      "Virus memerlukan sel inang untuk bereplikasi.",
    ],
    [
      "Biologi",
      "Organisme yang menjadi dasar rantai makanan adalah ...",
      ["produsen", "konsumen puncak", "pengurai saja", "parasit"],
      0,
      "Produsen membentuk dasar aliran energi dalam rantai makanan.",
    ],
    [
      "Sosiologi",
      "Tindakan yang memiliki makna subjektif bagi pelakunya merupakan konsep ...",
      ["tindakan sosial", "produksi", "ekspor", "evaporasi"],
      0,
      "Tindakan sosial mempertimbangkan makna dan orientasi terhadap orang lain.",
    ],
    [
      "Ekonomi",
      "Masalah ekonomi muncul karena sumber daya ...",
      [
        "tidak terbatas",
        "terbatas sementara kebutuhan beragam",
        "selalu gratis",
        "tidak dibutuhkan",
      ],
      1,
      "Kelangkaan terjadi karena sumber daya terbatas sementara kebutuhan beragam.",
    ],
    [
      "Geografi",
      "Ilmu yang mempelajari hubungan manusia, ruang, dan lingkungan adalah ...",
      ["geografi", "kimia", "fisika", "linguistik"],
      0,
      "Geografi mengkaji fenomena ruang, lingkungan, dan interaksi manusia.",
    ],
    [
      "Bahasa Indonesia",
      "Teks negosiasi bertujuan mencapai ...",
      ["kesepakatan", "konflik", "hukuman", "cerita fiksi"],
      0,
      "Negosiasi bertujuan mencapai kesepakatan yang dapat diterima pihak terkait.",
    ],
    [
      "Bahasa Inggris",
      "Kalimat 'I think this idea is useful' digunakan untuk ...",
      [
        "expressing opinion",
        "asking direction",
        "giving warning",
        "introducing family",
      ],
      0,
      "I think digunakan untuk menyatakan pendapat.",
    ],
    [
      "Informatika",
      "Langkah algoritma yang memilih berdasarkan kondisi disebut ...",
      ["percabangan", "perulangan", "kompresi", "sortir"],
      0,
      "Percabangan memilih langkah berdasarkan kondisi.",
    ],
    [
      "Pendidikan Pancasila",
      "Pancasila berfungsi sebagai ...",
      ["dasar negara", "mata uang", "bahasa asing", "alat ukur"],
      0,
      "Pancasila berkedudukan sebagai dasar negara Republik Indonesia.",
    ],
    [
      "Bahasa Indonesia",
      "Teks laporan hasil observasi harus bersifat ...",
      ["objektif dan faktual", "khayalan", "provokatif", "tanpa data"],
      0,
      "Laporan observasi menyajikan hasil pengamatan secara objektif dan faktual.",
    ],
  ],
  11: [
    [
      "Matematika",
      "Determinan matriks [[2,1],[3,4]] adalah ...",
      ["5", "8", "-5", "11"],
      0,
      "Determinan = (2×4) - (1×3) = 5.",
    ],
    [
      "Matematika",
      "Titik puncak fungsi kuadrat y=x²-4x+3 memiliki koordinat ...",
      ["(2,-1)", "(4,3)", "(-2,-1)", "(2,1)"],
      0,
      "x puncak = -b/2a = 2, lalu y = -1.",
    ],
    [
      "Matematika",
      "Transformasi yang memutar suatu titik terhadap pusat tertentu disebut ...",
      ["rotasi", "translasi", "dilatasi", "refleksi"],
      0,
      "Rotasi adalah perputaran terhadap pusat dan sudut tertentu.",
    ],
    [
      "Matematika",
      "Pernyataan 'p dan q' dalam logika menggunakan operator ...",
      ["konjungsi", "disjungsi", "negasi", "implikasi"],
      0,
      "Kata 'dan' merepresentasikan konjungsi.",
    ],
    [
      "Fisika",
      "Hukum II Newton dirumuskan sebagai ...",
      ["F = ma", "F = m/a", "F = a/m", "F = mv"],
      0,
      "Hukum II Newton menyatakan resultan gaya F = ma.",
    ],
    [
      "Fisika",
      "Energi kinetik benda bermassa m dan kecepatan v adalah ...",
      ["mv", "1/2 mv²", "mgh", "F/s"],
      1,
      "Rumus energi kinetik adalah 1/2 mv².",
    ],
    [
      "Fisika",
      "Tekanan hidrostatis dipengaruhi oleh ...",
      [
        "kedalaman, massa jenis, gravitasi",
        "warna cairan",
        "bentuk gelas saja",
        "luas permukaan saja",
      ],
      0,
      "Tekanan hidrostatis p = ρgh.",
    ],
    [
      "Kimia",
      "Jumlah mol dapat dihitung dari massa dibagi ...",
      ["massa molar", "nomor atom", "volume saja", "suhu"],
      0,
      "n = m/M, sehingga massa dibagi massa molar.",
    ],
    [
      "Kimia",
      "Reaksi yang melepaskan panas disebut ...",
      ["eksoterm", "endoterm", "netral", "isoterm"],
      0,
      "Reaksi eksoterm melepaskan energi panas ke lingkungan.",
    ],
    [
      "Kimia",
      "Katalis berfungsi terutama untuk ...",
      [
        "menurunkan energi aktivasi",
        "mengubah hasil akhir",
        "menambah massa",
        "menghentikan reaksi",
      ],
      0,
      "Katalis menyediakan jalur dengan energi aktivasi lebih rendah.",
    ],
    [
      "Biologi",
      "Organel tempat respirasi sel terutama berlangsung adalah ...",
      ["mitokondria", "ribosom", "nukleus", "vakuola"],
      0,
      "Mitokondria merupakan tempat utama respirasi sel aerob.",
    ],
    [
      "Biologi",
      "Alveolus berfungsi sebagai tempat ...",
      ["pertukaran gas", "pencernaan", "pemompaan darah", "penyaringan urine"],
      0,
      "Pertukaran O₂ dan CO₂ terjadi di alveolus.",
    ],
    [
      "Sosiologi",
      "Konflik sosial dapat diselesaikan salah satunya melalui ...",
      ["mediasi", "provokasi", "kekerasan", "diskriminasi"],
      0,
      "Mediasi membantu pihak berkonflik mencari penyelesaian melalui pihak penengah.",
    ],
    [
      "Ekonomi",
      "Inflasi adalah kenaikan ...",
      [
        "tingkat harga umum secara terus-menerus",
        "produksi sekali",
        "nilai mata uang asing saja",
        "pajak saja",
      ],
      0,
      "Inflasi adalah kenaikan tingkat harga umum secara berkelanjutan.",
    ],
    [
      "Geografi",
      "Lapisan atmosfer tempat terjadinya sebagian besar cuaca adalah ...",
      ["troposfer", "stratosfer", "mesosfer", "eksosfer"],
      0,
      "Sebagian besar fenomena cuaca terjadi di troposfer.",
    ],
    [
      "Sejarah",
      "VOC didirikan oleh Belanda pada tahun ...",
      ["1602", "1700", "1808", "1945"],
      0,
      "VOC didirikan pada 1602.",
    ],
    [
      "Bahasa Inggris",
      "Analytical exposition bertujuan ...",
      [
        "meyakinkan pembaca terhadap suatu pendapat",
        "menceritakan masa lalu",
        "memberi resep",
        "mendeskripsikan keluarga",
      ],
      0,
      "Analytical exposition menyampaikan pendapat dengan argumen untuk meyakinkan pembaca.",
    ],
    [
      "Bahasa Indonesia",
      "Teks argumentasi harus didukung oleh ...",
      ["alasan dan bukti", "rumor", "emoji", "hiasan"],
      0,
      "Argumentasi yang baik didukung alasan logis dan bukti relevan.",
    ],
    [
      "Informatika",
      "Struktur data yang bekerja dengan prinsip LIFO adalah ...",
      ["stack", "queue", "graph", "tree"],
      0,
      "Stack mengikuti Last In, First Out.",
    ],
    [
      "Informatika",
      "Basis data digunakan untuk ...",
      [
        "menyimpan dan mengelola data terstruktur",
        "menggambar saja",
        "mencetak foto saja",
        "mengubah listrik",
      ],
      0,
      "Basis data menyimpan dan mengelola data terstruktur agar mudah diakses.",
    ],
  ],
  12: [
    [
      "Matematika",
      "Turunan dari f(x)=x² adalah ...",
      ["x", "2x", "x²", "2"],
      1,
      "Turunan x² adalah 2x.",
    ],
    [
      "Matematika",
      "Integral tak tentu dari 2x adalah ...",
      ["2x²+C", "x²+C", "x+C", "2"],
      1,
      "∫2x dx = x² + C.",
    ],
    [
      "Matematika",
      "Jika lim x→2 (x+3), nilainya ...",
      ["2", "3", "5", "6"],
      2,
      "Substitusi x=2 menghasilkan 5.",
    ],
    [
      "Matematika",
      "Turunan dapat digunakan untuk menentukan ...",
      ["laju perubahan", "warna grafik", "nama fungsi", "jumlah variabel saja"],
      0,
      "Turunan menyatakan laju perubahan suatu besaran.",
    ],
    [
      "Fisika",
      "Arus listrik adalah aliran ...",
      ["muatan listrik", "massa", "cahaya", "panas"],
      0,
      "Arus listrik adalah laju aliran muatan listrik.",
    ],
    [
      "Fisika",
      "Induksi elektromagnetik terjadi ketika ...",
      [
        "perubahan fluks magnet menghasilkan GGL",
        "benda diam tanpa medan",
        "suhu naik",
        "massa berkurang",
      ],
      0,
      "Perubahan fluks magnet dapat menimbulkan gaya gerak listrik induksi.",
    ],
    [
      "Fisika",
      "Foton merupakan kuanta ...",
      ["energi cahaya", "massa", "bunyi", "gravitasi"],
      0,
      "Foton adalah kuanta energi elektromagnetik/cahaya.",
    ],
    [
      "Kimia",
      "Pada sel volta, energi kimia diubah menjadi ...",
      ["energi listrik", "energi bunyi", "energi gravitasi", "massa"],
      0,
      "Sel volta menghasilkan energi listrik dari reaksi redoks spontan.",
    ],
    [
      "Kimia",
      "Elektrolisis menggunakan energi listrik untuk ...",
      [
        "mendorong reaksi kimia nonspontan",
        "menghilangkan semua ion",
        "mendinginkan larutan",
        "mengubah massa jadi ruang",
      ],
      0,
      "Elektrolisis menggunakan listrik untuk memaksa reaksi nonspontan.",
    ],
    [
      "Kimia",
      "Senyawa organik umumnya berbasis unsur ...",
      ["karbon", "besi", "natrium saja", "helium"],
      0,
      "Kimia organik terutama mempelajari senyawa yang berbasis karbon.",
    ],
    [
      "Biologi",
      "DNA merupakan materi genetik yang menyimpan ...",
      ["informasi genetik", "energi panas", "cairan tubuh", "oksigen"],
      0,
      "DNA menyimpan informasi genetik.",
    ],
    [
      "Biologi",
      "Pembelahan sel untuk pertumbuhan dan perbaikan jaringan adalah ...",
      ["mitosis", "meiosis", "fertilisasi", "transpirasi"],
      0,
      "Mitosis menghasilkan sel tubuh untuk pertumbuhan dan perbaikan.",
    ],
    [
      "Ekonomi",
      "Kegiatan membeli barang dari luar negeri disebut ...",
      ["impor", "ekspor", "produksi", "distribusi"],
      0,
      "Impor adalah kegiatan membeli barang atau jasa dari luar negeri.",
    ],
    [
      "Ekonomi",
      "Neraca perdagangan mencatat hubungan antara ...",
      [
        "ekspor dan impor barang",
        "gaji dan bonus",
        "pajak dan denda",
        "tabungan dan pinjaman saja",
      ],
      0,
      "Neraca perdagangan antara lain membandingkan nilai ekspor dan impor barang.",
    ],
    [
      "Geografi",
      "SIG adalah singkatan dari ...",
      [
        "Sistem Informasi Geografis",
        "Sistem Internet Global",
        "Sistem Integrasi Grafik",
        "Sistem Informasi Generik",
      ],
      0,
      "SIG adalah Sistem Informasi Geografis.",
    ],
    [
      "Sejarah",
      "Reformasi Indonesia mulai ditandai kuat oleh perubahan politik pada tahun ...",
      ["1945", "1965", "1998", "2004"],
      2,
      "1998 menjadi tonggak penting dimulainya era Reformasi.",
    ],
    [
      "Bahasa Indonesia",
      "Surat lamaran pekerjaan termasuk dokumen ...",
      ["formal", "fiksi", "pribadi rahasia saja", "hiburan"],
      0,
      "Surat lamaran merupakan dokumen formal untuk melamar pekerjaan.",
    ],
    [
      "Bahasa Inggris",
      "Dalam job interview, jawaban yang baik sebaiknya ...",
      [
        "jelas dan relevan",
        "sangat panjang tanpa fokus",
        "tanpa contoh",
        "menghindari pertanyaan",
      ],
      0,
      "Jawaban wawancara sebaiknya jelas, relevan, dan didukung contoh bila perlu.",
    ],
    [
      "Informatika",
      "Autentikasi bertujuan untuk ...",
      [
        "memverifikasi identitas pengguna",
        "menghapus data",
        "mengubah warna",
        "menambah kapasitas hard disk",
      ],
      0,
      "Autentikasi memverifikasi siapa pengguna sebelum akses diberikan.",
    ],
    [
      "Informatika",
      "Backup data berguna untuk ...",
      [
        "memulihkan data saat terjadi kehilangan",
        "mengurangi keamanan",
        "mematikan jaringan",
        "menghapus arsip",
      ],
      0,
      "Backup menyediakan salinan untuk membantu pemulihan data.",
    ],
  ],
};

const LEVEL_NAMES = {
  SD: "SD",
  SMP: "SMP",
  SMA: "SMA",
  SMK: "SMK",
};

let currentUser = {};

try {
  currentUser =
    JSON.parse(localStorage.getItem("elearning_current_user")) || {};
} catch (error) {
  currentUser = {};
}

/* =========================================
   STATE
========================================= */

let selectedLevel = localStorage.getItem("elearning_selected_level") || "SD";

let selectedClass = localStorage.getItem("elearning_selected_class") || "1";

/* Soal 10-12 dapat dipakai untuk SMA maupun SMK.
   Kelas menentukan bank soalnya. */
if (!QUESTION_BANK[String(selectedClass)]) {
  selectedClass = "1";
}

let questions = [...QUESTION_BANK[String(selectedClass)]];

let currentQuestion = 0;
let score = 0;
let answered = false;

/* =========================================
   ELEMENTS
========================================= */

const quizLevel = document.getElementById("quizLevel");

const quizClass = document.getElementById("quizClass");

const quizUserName = document.getElementById("quizUserName");

const quizAvatar = document.getElementById("quizAvatar");

const quizSubject = document.getElementById("quizSubject");

const questionCounter = document.getElementById("questionCounter");

const progressFill = document.getElementById("progressFill");

const questionText = document.getElementById("questionText");

const optionsContainer = document.getElementById("optionsContainer");

const explanationBox = document.getElementById("explanationBox");

const explanationTitle = document.getElementById("explanationTitle");

const explanationText = document.getElementById("explanationText");

const resultBadge = document.getElementById("resultBadge");

const correctAnswerText = document.getElementById("correctAnswerText");

const nextButton = document.getElementById("nextButton");

const quizCard = document.getElementById("quizCard");

const resultScreen = document.getElementById("resultScreen");

const finalScore = document.getElementById("finalScore");

const finalCorrect = document.getElementById("finalCorrect");

const finalWrong = document.getElementById("finalWrong");

const finalLevel = document.getElementById("finalLevel");

const retryButton = document.getElementById("retryButton");

const dashboardButton = document.getElementById("dashboardButton");

const profileLink = document.getElementById("quizProfileLink");

/* =========================================
   USER INFO
========================================= */

let savedProfile = {};

try {
  savedProfile = JSON.parse(localStorage.getItem("elearning_profile")) || {};
} catch (error) {
  savedProfile = {};
}

const userName =
  savedProfile.fullName ||
  currentUser?.name ||
  currentUser?.fullname ||
  "Siswa";

/* =========================================
   FEATHER
========================================= */

function refreshIcons() {
  if (window.feather) {
    feather.replace();
  }
}

/* =========================================
   HEADER
========================================= */

function updateHeader() {
  const level = LEVEL_NAMES[selectedLevel] || selectedLevel;

  if (quizLevel) {
    quizLevel.textContent = level;
  }

  if (quizClass) {
    quizClass.textContent = `Kelas ${selectedClass}`;
  }

  if (quizUserName) {
    quizUserName.textContent = userName;
  }

  if (quizAvatar) {
    quizAvatar.textContent = userName.trim().charAt(0).toUpperCase() || "S";
  }

  if (finalLevel) {
    finalLevel.textContent = `${level} • Kelas ${selectedClass}`;
  }

  const footerLevel = document.getElementById("footerLevel");

  if (footerLevel) {
    footerLevel.textContent = `${level} • Kelas ${selectedClass}`;
  }
}

/* =========================================
   ESCAPE HTML
========================================= */

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* =========================================
   RENDER QUESTION
========================================= */

function renderQuestion() {
  answered = false;

  const question = questions[currentQuestion];

  const questionNumber = currentQuestion + 1;

  const total = questions.length;

  if (questionCounter) {
    questionCounter.textContent = `${questionNumber} / ${total}`;
  }

  if (progressFill) {
    progressFill.style.width = `${(questionNumber / total) * 100}%`;
  }

  if (quizSubject) {
    quizSubject.textContent = question[0];
  }

  if (questionText) {
    questionText.textContent = question[1];
  }

  if (optionsContainer) {
    optionsContainer.innerHTML = "";
  }

  if (explanationBox) {
    explanationBox.hidden = true;
  }

  if (resultBadge) {
    resultBadge.textContent = "";
    resultBadge.className = "result-badge";
  }

  if (correctAnswerText) {
    correctAnswerText.textContent = "";
  }

  if (nextButton) {
    nextButton.disabled = true;
    nextButton.innerHTML = `
      <span>
        Jawab & Lanjutkan
      </span>
      <i data-feather="arrow-right"></i>
      `;
  }

  question[2].forEach((option, index) => {
    const button = document.createElement("button");

    button.type = "button";

    button.className = "answer-option";

    button.dataset.index = index;

    button.innerHTML = `
        <span class="answer-letter">
          ${String.fromCharCode(65 + index)}
        </span>

        <span class="answer-text">
          ${escapeHTML(option)}
        </span>

        <span class="answer-check">
          <i data-feather="circle"></i>
        </span>
      `;

    button.addEventListener("click", () => selectAnswer(index));

    optionsContainer.appendChild(button);
  });

  refreshIcons();
  updateHeader();
}

/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(selectedIndex) {
  if (answered) {
    return;
  }

  answered = true;

  const question = questions[currentQuestion];

  const correctIndex = question[3];

  const isCorrect = selectedIndex === correctIndex;

  if (isCorrect) {
    score++;
  }

  const buttons = optionsContainer.querySelectorAll(".answer-option");

  buttons.forEach((button, index) => {
    button.disabled = true;

    button.classList.add("locked");

    if (index === correctIndex) {
      button.classList.add("correct");

      const check = button.querySelector(".answer-check");

      if (check) {
        check.innerHTML = feather.icons.check.toSvg();
      }
    }

    if (index === selectedIndex && index !== correctIndex) {
      button.classList.add("wrong");

      const check = button.querySelector(".answer-check");

      if (check) {
        check.innerHTML = feather.icons.x.toSvg();
      }
    }
  });

  if (explanationBox) {
    explanationBox.hidden = false;
  }

  if (isCorrect) {
    resultBadge.textContent = "✓ Jawaban benar";

    resultBadge.className = "result-badge success";

    explanationTitle.textContent = "Jawaban kamu benar";

    explanationText.textContent = question[4];

    correctAnswerText.textContent = `Jawaban: ${question[2][correctIndex]}`;

    explanationBox.className = "explanation-box success";
  } else {
    resultBadge.textContent = "✕ Jawaban kurang tepat";

    resultBadge.className = "result-badge danger";

    explanationTitle.textContent = "Jawaban yang benar";

    explanationText.textContent = question[4];

    correctAnswerText.textContent = `Jawaban benar: ${question[2][correctIndex]}`;

    explanationBox.className = "explanation-box danger";
  }

  if (nextButton) {
    nextButton.disabled = false;

    nextButton.innerHTML =
      currentQuestion === questions.length - 1
        ? `
          <span>Lihat Hasil</span>
          <i data-feather="arrow-right"></i>
        `
        : `
          <span>Soal Berikutnya</span>
          <i data-feather="arrow-right"></i>
        `;
  }

  refreshIcons();
}

/* =========================================
   NEXT
========================================= */

if (nextButton) {
  nextButton.addEventListener("click", () => {
    if (!answered) {
      return;
    }

    if (currentQuestion >= questions.length - 1) {
      showResult();

      return;
    }

    currentQuestion++;

    renderQuestion();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

/* =========================================
   RESULT
========================================= */

function showResult() {
  if (quizCard) {
    quizCard.hidden = true;
  }

  if (resultScreen) {
    resultScreen.hidden = false;
  }

  const total = questions.length;

  const wrong = total - score;

  const percentage = Math.round((score / total) * 100);

  if (finalScore) {
    finalScore.textContent = `${percentage}%`;
  }

  if (finalCorrect) {
    finalCorrect.textContent = score;
  }

  if (finalWrong) {
    finalWrong.textContent = wrong;
  }

  localStorage.setItem(
    `quizizz_result_${selectedLevel}_${selectedClass}`,
    JSON.stringify({
      score,
      total,
      percentage,
      completedAt: new Date().toISOString(),
    }),
  );

  refreshIcons();
}

/* =========================================
   RETRY
========================================= */

if (retryButton) {
  retryButton.addEventListener("click", () => {
    currentQuestion = 0;

    score = 0;

    answered = false;

    questions = [...QUESTION_BANK[String(selectedClass)]];

    if (quizCard) {
      quizCard.hidden = false;
    }

    if (resultScreen) {
      resultScreen.hidden = true;
    }

    renderQuestion();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

/* =========================================
   DASHBOARD
========================================= */

if (dashboardButton) {
  dashboardButton.addEventListener("click", () => {
    window.location.href = "dashboard.html";
  });
}

/* =========================================
   PROFILE
========================================= */

if (profileLink) {
  profileLink.addEventListener("click", () => {
    window.location.href = "profile.html";
  });
}

/* =========================================
   INIT
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  updateHeader();
  renderQuestion();
  refreshIcons();
});
