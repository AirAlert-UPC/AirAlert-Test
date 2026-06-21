document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menú Desplegable Responsive
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // 2. Acordeón Interactivo para Preguntas Frecuentes (FAQ)
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const span = question.querySelector('span');
            
            if (answer.style.maxHeight && answer.style.maxHeight !== '0px') {
                answer.style.maxHeight = '0px';
                span.textContent = '+';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                span.textContent = '-';
            }
        });
    });

    // 3. Envío del formulario ficticio (Validación básica)
    const formulario = document.getElementById('formulario');
    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por tu interés en AirAlert! Tu solicitud ha sido registrada correctamente.');
            formulario.reset();
        });
    }
});