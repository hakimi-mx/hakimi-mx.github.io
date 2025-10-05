(function () {
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navMenu = document.querySelector('[data-nav-menu]');

  if (navToggle && navMenu) {
    const openLabel = navToggle.getAttribute('data-label-open') || navToggle.getAttribute('aria-label');
    const closeLabel = navToggle.getAttribute('data-label-close') || openLabel;

    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('hidden');
      navToggle.setAttribute('aria-label', expanded ? openLabel : closeLabel);
    });
  }

  const carousel = document.querySelector('[data-carousel]');
  if (carousel) {
    const slides = carousel.querySelectorAll('[data-carousel-slide]');
    if (slides.length > 1) {
      let current = 0;
      setInterval(() => {
        slides[current].classList.add('hidden');
        current = (current + 1) % slides.length;
        slides[current].classList.remove('hidden');
      }, 5000);
    }
  }
})();
