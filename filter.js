document.getElementById("filter-btn").addEventListener("click", function () {
    const selected = Array.from(document.querySelectorAll(".sidebar input[type='checkbox']:checked"))
      .map(cb => cb.value.toLowerCase());
  
    const cards = document.querySelectorAll(".gallery .card");
  
    cards.forEach(card => {
      const categories = card.getAttribute("data-category").toLowerCase();
      const matches = selected.every(val => categories.includes(val));
  
      if (selected.length === 0 || matches) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
  