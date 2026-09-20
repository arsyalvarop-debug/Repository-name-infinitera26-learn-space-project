// ========================================
// DATA PROGRESS
// ========================================

const defaultProgress = {
  materi: 0,
  quiz: 0,
  tugas: 0,
};

// Ambil progress dari localStorage
function getProgress() {
  const saved = localStorage.getItem("learnspaceProgress");

  if (!saved) {
    return defaultProgress;
  }

  return JSON.parse(saved);
}

// Simpan progress
function saveProgress(progress) {
  localStorage.setItem("learnspaceProgress", JSON.stringify(progress));
}

// ========================================
// HITUNG PROGRESS
// ========================================

function calculateProgress() {
  const progress = getProgress();

  const total = progress.materi + progress.quiz + progress.tugas;

  const max = 3;

  return Math.round((total / max) * 100);
}

// ========================================
// UPDATE DASHBOARD
// ========================================

function updateProgressDisplay() {
  const progress = calculateProgress();

  const progressNumber = document.getElementById("heroProgress");

  const progressBar = document.getElementById("heroProgressBar");

  const progressText = document.getElementById("heroProgressText");

  if (progressNumber) {
    progressNumber.textContent = progress + "%";
  }

  if (progressBar) {
    progressBar.style.width = progress + "%";
  }

  if (progressText) {
    if (progress === 0) {
      progressText.textContent = "Belum ada materi yang diselesaikan";
    } else if (progress < 100) {
      progressText.textContent = "Terus lanjutkan perjalanan belajarmu";
    } else {
      progressText.textContent = "Semua aktivitas telah selesai";
    }
  }
}

// ========================================
// SELESAIKAN MATERI
// ========================================

function completeMateri() {
  const progress = getProgress();

  progress.materi = 1;

  saveProgress(progress);

  updateProgressDisplay();
}

// ========================================
// SELESAIKAN QUIZ
// ========================================

function completeQuiz() {
  const progress = getProgress();

  progress.quiz = 1;

  saveProgress(progress);

  updateProgressDisplay();
}

// ========================================
// KUMPULKAN TUGAS
// ========================================

function completeTugas() {
  const progress = getProgress();

  progress.tugas = 1;

  saveProgress(progress);

  updateProgressDisplay();
}

// ========================================
// JALANKAN SAAT HALAMAN DIBUKA
// ========================================

document.addEventListener("DOMContentLoaded", function () {
  updateProgressDisplay();
});
