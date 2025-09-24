const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// FAQ Toggle
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.querySelector('.faq-question').addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
