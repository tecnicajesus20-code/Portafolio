/* =========================================================
   Portafolio — Kleiderson Salcedo
   script.js

   La interactividad real (menú móvil, scroll suave, filtros, etc.)
   se implementa en el Commit 08. Este archivo solo verifica que
   el script se está cargando correctamente.
   ========================================================= */

console.log("script.js cargado correctamente");
document.addEventListener('DOMContentLoaded', () => {
   const form = document.getElementById('contact-form');
   const formStatus = document.getElementById('form-status');
 
   if (form) {
     form.addEventListener('submit', (e) => {
       e.preventDefault();
       
       // Feedback dinámico de simulación de envío
       formStatus.textContent = 'Enviando mensaje...';
       formStatus.className = 'form-status';
 
       setTimeout(() => {
         formStatus.textContent = '¡Mensaje recibido correctamente! Te responderé pronto.';
         formStatus.className = 'form-status form-status--success';
         form.reset();
       }, 1000);
     });
   }
 });

 // Resaltado dinámico de sección activa en el Navbar
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

const observerOptions = {
  root: null,
  rootMargin: '-20% 0px -70% 0px',
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const activeId = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        if (link.getAttribute('href') === `#${activeId}`) {
          link.classList.add('nav__link--active');
        } else {
          link.classList.remove('nav__link--active');
        }
      });
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));

document.addEventListener('DOMContentLoaded', () => {
   const revealElements = document.querySelectorAll('.reveal');
 
   const revealOnScroll = new IntersectionObserver((entries, observer) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add('active');
         observer.unobserve(entry.target); // Se anima una sola vez
       }
     });
   }, {
     threshold: 0.15 // Activa la animación cuando el 15% del elemento es visible
   });
 
   revealElements.forEach(element => revealOnScroll.observe(element));
 });