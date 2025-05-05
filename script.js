// Theme Toggle Functionality
const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Function to set the theme
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Check for saved theme preference or use the system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else if (prefersDarkScheme.matches) {
  setTheme('dark');
}

// Toggle theme when the button is clicked
themeToggle.addEventListener('click', () => {
  const currentTheme =
    document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});

// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Here you would typically send the form data to a server
  alert('Thank you for your message! I will get back to you soon.');
  contactForm.reset();
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);

document.querySelectorAll('.project-card').forEach((card) => {
  observer.observe(card);
});

// Add parallax effect to hero section
let isScrolling = false;

window.addEventListener('scroll', () => {
  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(() => {
      const hero = document.querySelector('.hero');
      const scrolled = window.pageYOffset;
      hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
      isScrolling = false;
    });
  }
});
