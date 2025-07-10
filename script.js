/*Animación del logo*/
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");
  const iconoMenu = document.querySelector(".c-menu-icono");

  logo.addEventListener("animationend", () => {
    logo.classList.add("modo-oscuro");
  });

  // Animar icono si está en vista móvil
  if (window.innerWidth <= 1200) {
    iconoMenu.style.opacity = 0;
    iconoMenu.style.animation = "fadeInUpIcono 1.2s ease forwards";
    iconoMenu.style.animationDelay = "0.4s";
  }
});

/* Menú comprimido con animaciones reiniciadas */
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".c-menu-icono");
  const links = menu.querySelectorAll("li");

  menu.classList.toggle("open");
  icon.classList.toggle("open");

  if (menu.classList.contains("open")) {
    links.forEach((link, index) => {
      link.style.animation = "none";
      link.offsetHeight;
      link.style.animation = `fadeInUp 0.8s ease forwards`;
      link.style.animationDelay = `${0.2 + index * 0.2}s`;
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
  setTimeout(escribir, 2000); // espera 2.0 segundos antes de comenzar
});

/* Scroll Section*/
const secciones = document.querySelectorAll('.hidden-scroll');

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