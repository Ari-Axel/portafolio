/Animación del logo/
document.addEventListener("DOMContentLoaded", () => {
const logo = document.querySelector(".logo");
const iconoMenu = document.querySelector(".c-menu-icono");

if (logo) {
logo.addEventListener("animationend", () => {
logo.classList.add("modo-oscuro");
});
}

// Animar icono si está en vista móvil
if (iconoMenu && window.innerWidth <= 1200) {
iconoMenu.style.opacity = 0;
iconoMenu.style.animation = "fadeInUpIcono 1.2s ease forwards";
iconoMenu.style.animationDelay = "0.4s";
}
});

/* Menú comprimido con animaciones reiniciadas */
function toggleMenu() {
const menu = document.querySelector(".menu-links");
const icon = document.querySelector(".c-menu-icono");

// Evita errores en páginas que no tengan menú móvil
if (!menu || !icon) return;

const links = menu.querySelectorAll("li");

menu.classList.toggle("open");
icon.classList.toggle("open");

if (menu.classList.contains("open")) {
links.forEach((link, index) => {
link.style.animation = "none";
link.offsetHeight;
link.style.animation = fadeInUp 0.8s ease forwards;
link.style.animationDelay = ${0.2 + index * 0.2}s;
});
} else {
links.forEach(link => {
link.style.animation = "";
link.style.animationDelay = "";
});
}
}

/* Animación cambio de texto */

const frases = [
{ text: "Ingeniero de Software", color: "#2f4156" },
{ text: "Desarrollador front-end", color: "#c21919" },
{ text: "PC Builder", color: "#2596be" },
{ text: "Diseñador Web", color: "#007bff" }
];

let index = 0;
let letra = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function escribir() {

// Evita errores en páginas que no tienen #typing
if (!typingElement) return;

const { text, color } = frases[index];
typingElement.style.color = color;

if (!isDeleting) {
typingElement.textContent = text.substring(0, letra + 1);
letra++;

if (letra === text.length) {
  isDeleting = true;
  setTimeout(escribir, 1800); // pausa antes de borrar
  return;
}


} else {
typingElement.textContent = text.substring(0, letra - 1);
letra--;

if (letra === 0) {
  isDeleting = false;
  index = (index + 1) % frases.length;
}


}

setTimeout(escribir, isDeleting ? 60 : 120);
}

document.addEventListener("DOMContentLoaded", () => {
if (typingElement) {
setTimeout(escribir, 2000); // espera 2.0 segundos antes de comenzar
}
});

/* Scroll Section*/
const secciones = document.querySelectorAll('.hidden-scroll');

if (secciones.length > 0 && "IntersectionObserver" in window) {
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('scroll-visible');
observer.unobserve(entry.target);
}
});
}, {
threshold: 0.1
});

secciones.forEach(seccion => observer.observe(seccion));
}

/Agrandar Imagenes/
function mostrarModal(img) {
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

if (!modal || !modalImg || !img) return;

modalImg.src = img.src;
modal.classList.remove("closing");
modal.style.display = "flex";
}

function cerrarModal() {
const modal = document.getElementById("modal");

if (!modal) return;

modal.classList.add("closing");

setTimeout(() => {
modal.style.display = "none";
modal.classList.remove("closing");
}, 300);
}

/Modo Oscuro/
document.addEventListener('DOMContentLoaded', () => {
const btn = document.getElementById('dark-mode-toggle');
const iconImg = document.getElementById('toggle-icon');
const body = document.body;

// Detectar si estamos dentro de la carpeta recursos
const estaEnRecursos = window.location.pathname.includes("/recursos/");

// Rutas de tus imágenes
const moonOutline = estaEnRecursos
    ? "../img/moon-outline.svg"
    : "./img/moon-outline.svg";

const moonFilled = estaEnRecursos
    ? "../img/moon-filled.svg"
    : "./img/moon-filled.svg";

const updateUI = (isDark) => {

    if (isDark) {
        body.classList.add('dark');

        if (iconImg) {
            iconImg.src = moonFilled;
        }

    } else {
        body.classList.remove('dark');

        if (iconImg) {
            iconImg.src = moonOutline;
        }
    }
};

// Detección inicial
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    updateUI(true);
} else {
    updateUI(false);
}

if (btn) {
    btn.addEventListener('click', () => {
        const isDark = !body.classList.contains('dark');

        updateUI(isDark);

        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}


});

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
const btn = document.getElementById('dark-mode-toggle');

if (!btn) return;

let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scroll hacia abajo - Ocultar
    btn.classList.add('hidden');
} else {
    // Scroll hacia arriba - Mostrar
    btn.classList.remove('hidden');
}

lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;


}, { passive: true });

document.addEventListener('DOMContentLoaded', () => {
const enlaces = document.querySelectorAll('a');

enlaces.forEach(link => {

    const esLogo = link.classList.contains('logo') || link.querySelector('.logo');

    const esIcono = link.querySelector('img.icono') || link.classList.contains('btn-toggle');

    if (esLogo || esIcono) {
        return;
    }

    const linea = document.createElement('div');
    linea.classList.add('linea-js');
    link.appendChild(linea);

    link.addEventListener('mouseenter', () => {
        linea.style.width = '100%';
    });

    link.addEventListener('mouseleave', () => {
        linea.style.width = '0';
    });
});


});
