document.addEventListener('DOMContentLoaded', () => {
    // Animation for cards on load
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.transform = 'translateY(0)';
      }, index * 200);
    });
  });
  