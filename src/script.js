// Modular initialization for Personal Website
// Follows project rules: modular, short files, easy for AI agents

import { initContactForm } from './modules/contact-form.js';
import { initNavigation } from './modules/navigation.js';
import { initScrollAnimations } from './modules/scroll-animations.js';
import { initThemeToggle } from './modules/theme.js';

initThemeToggle();
initNavigation();
initContactForm();
initScrollAnimations();

// Add any new features as new modules and import/initialize here.

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  const scrolled = window.pageYOffset;
  hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});
