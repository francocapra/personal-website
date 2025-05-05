// Scroll-based animations (Intersection Observer)
export function initScrollAnimations() {
  const observerOptions = { threshold: 0.1 };
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
}
