document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links li a').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }));


    // --- Form Handling (EmailJS) ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Simulación de envío para mostrar la interfaz
        // En producción, descomentar la sección de EmailJS abajo

        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;

        btn.innerText = 'Enviando...';
        btn.disabled = true;

        /* 
           INTEGRACIÓN CON EMAILJS
           1. Crear cuenta en https://www.emailjs.com/
           2. Crear servicio (Service ID)
           3. Crear template (Template ID)
           4. Obtener Public Key
           
           Código a usar:
           
           emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
               .then(function() {
                   formStatus.innerHTML = '<span style="color: green;">Mensaje enviado con éxito. Contactaremos pronto.</span>';
                   contactForm.reset();
                   btn.innerText = originalText;
                   btn.disabled = false;
               }, function(error) {
                   formStatus.innerHTML = '<span style="color: red;">Error al enviar. Intente de nuevo.</span>';
                   btn.innerText = originalText;
                   btn.disabled = false;
               });
        */

        // Simulación de respuesta exitosa (Eliminar esto cuando se configure EmailJS real)
        setTimeout(() => {
            formStatus.innerHTML = '<span style="color: green;"><i class="fa-solid fa-check-circle"></i> Mensaje enviado correctamente (Modo Demo).</span>';
            contactForm.reset();
            btn.innerText = originalText;
            btn.disabled = false;
        }, 1500);
    });
});
