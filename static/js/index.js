document.addEventListener("DOMContentLoaded", function () {
  const levelCards = document.querySelectorAll(".level-card");

  levelCards.forEach(function (card) {
    card.addEventListener("click", function () {
      console.log("User memilih:", this.querySelector("h3").textContent);
    });
  });

  /*
   * Smooth scroll tambahan
   */

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
