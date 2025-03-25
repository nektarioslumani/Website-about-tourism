// Μετρητές
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".card h4");
  const cards = document.querySelectorAll(".card");
  const speed = 100;

  const animateCounters = () => {
    counters.forEach((counter) => {
      const target = +counter.innerText;
      let count = 0;

      const update = () => {
        const increment = Math.ceil(target / speed);
        if (count < target) {
          count += increment;
          counter.innerText = count;
          setTimeout(update, 20);
        } else {
          counter.innerText = target;
        }
      };

      counter.innerText = "0";
      update();
    });
  };

  const revealCards = () => {
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        card.classList.add("visible");
      }
    });
  };

  // Εκκίνηση
  revealCards();
  animateCounters();

  window.addEventListener("scroll", revealCards);
});
