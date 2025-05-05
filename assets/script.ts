// TypeScript version of script.js (migrated)

interface ObserverOptions {
  threshold: number;
}

function setTheme(theme: string): void {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

const themeToggle = document.querySelector<HTMLButtonElement>('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else if (prefersDarkScheme.matches) {
  setTheme('dark');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme =
      document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  });
}

document
  .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
  .forEach((anchor) => {
    anchor.addEventListener('click', function (e: MouseEvent) {
      e.preventDefault();
      const href = (this as HTMLAnchorElement).getAttribute('href');
      if (!href) return;
      const target = document.querySelector<HTMLElement>(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

const hamburger = document.querySelector<HTMLButtonElement>('.hamburger');
const navLinks = document.querySelector<HTMLElement>('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.style.display =
      navLinks.style.display === 'flex' ? 'none' : 'flex';
  });
}

const contactForm = document.getElementById(
  'contact-form'
) as HTMLFormElement | null;
if (contactForm) {
  contactForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
}

const observerOptions: ObserverOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver(
  (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  },
  observerOptions
);

document
  .querySelectorAll<HTMLElement>('.animate-on-scroll')
  .forEach((element) => {
    observer.observe(element);
  });
