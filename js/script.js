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