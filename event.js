
const filterLinks = document.querySelectorAll('.categories a');
const cards = document.querySelectorAll('.article-card');

filterLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    
    filterLinks.forEach(l => l.classList.remove('active'));
    
    link.classList.add('active');

    const category = link.dataset.filter;

    cards.forEach(card => {
      const cardCategory = card.dataset.category;

      if (category === 'all' || cardCategory === category) {
        card.style.display = 'block'; 
      } else {
        card.style.display = 'none';  
      }
    });
  });
});
