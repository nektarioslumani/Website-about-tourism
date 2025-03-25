document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;
    let autoplay = true;
    let intervalId;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }
  
    function startAutoplay() {
      intervalId = setInterval(nextSlide, 4000); // Αλλαγή κάθε 4 δευτ.
    }
  
    function stopAutoplay() {
      clearInterval(intervalId);
      autoplay = false;
    }
  
    // Ξεκινάμε με autoplay
    startAutoplay();
  
    // ➡️ Επόμενο
    document.getElementById('nextBtn').addEventListener('click', () => {
      nextSlide();
      if (autoplay) stopAutoplay();
    });
  
    // ⬅️ Προηγούμενο
    document.getElementById('prevBtn').addEventListener('click', () => {
      prevSlide();
      if (autoplay) stopAutoplay();
    });
  
    // ⏸️ Παύση
    document.getElementById('pauseBtn').addEventListener('click', () => {
      stopAutoplay();
    });
  });
  