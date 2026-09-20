const SUBJECT = document.body.dataset.subject;
const LEVEL = "SD";
const CLASS_NUMBER = "2";
const user = JSON.parse(localStorage.getItem("elearning_current_user"));

function progressKey() {
  return user ? `elearning_progress_${user.id}_${LEVEL}_${CLASS_NUMBER}` : null;
}

document.querySelectorAll(".complete-chapter").forEach((button) => {
  button.addEventListener("click", () => {
    if (!user) {
      window.location.href = "login.html";
      return;
    }

    const chapter = Number(button.dataset.chapter);
    const key = progressKey();
    const progress = JSON.parse(localStorage.getItem(key)) || {};
    const oldValue = Number(progress[SUBJECT]) || 0;
    const newValue = Math.max(oldValue, chapter * 20);

    progress[SUBJECT] = newValue;
    localStorage.setItem(key, JSON.stringify(progress));

    button.innerHTML = '<i data-feather="check"></i> Bab selesai';
    button.classList.add("done");
    button.disabled = true;
    feather.replace();

    const note = button.closest(".finish-chapter").querySelector(".completion-note");
    if (note) note.textContent = `Progress ${SUBJECT}: ${newValue}%`;
  });
});

feather.replace();
