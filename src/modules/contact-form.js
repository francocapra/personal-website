// Contact form handling
export function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const formValues = Object.fromEntries(formData.entries());
    // For demonstration, we'll just log the values
    console.log('Form submitted with values:', formValues);
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
}
