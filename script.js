// ============== Script para el Header con Sombra al Scroll ==============
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// ============== Script para el Menú Hamburguesa (Mobile) ==============
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    // Mostrar/Ocultar menú
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show-menu');
            // Añade/quita la clase 'toggled' AL BOTÓN
            navToggle.classList.toggle('toggled'); 
        });
    }

    // Cerrar menú al hacer clic en un enlace (útil para Single Page Apps)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('show-menu')) {
                navMenu.classList.remove('show-menu');
                // Quita la clase 'toggled' del botón para mostrar el icono de barras
                navToggle.classList.remove('toggled'); 
            }
        });
    });
});