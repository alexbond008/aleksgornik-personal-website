// Smooth scroll for internal anchors (works on pages that use #ids)
const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return; // only prevent default if target exists on the page
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Dark mode toggle + persistence
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('darkToggle');
  const toggleBtnMobile = document.getElementById('darkToggleMobile');

  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
  if (toggleBtnMobile) {
    toggleBtnMobile.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    });
  }
});