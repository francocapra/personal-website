document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section:not(.hero)');

  if (!sections.length) {
    console.warn('No sections found for scroll animation.');
    return;
  }

  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1, // Trigger when 10% of the element is visible
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Optional: Stop observing the element once it's visible
        // observer.unobserve(entry.target);
      }
      // Optional: Remove class if element scrolls out of view (for repeat animations)
      // else {
      //   entry.target.classList.remove('is-visible');
      // }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach((section) => {
    section.classList.add('fade-in-section'); // Add the initial hidden state class
    observer.observe(section);
  });
});
