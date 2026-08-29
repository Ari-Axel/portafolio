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

/*Agrandar Imagenes*/
function mostrarModal(img) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modalImg.src = img.src;
  modal.classList.remove("closing");
  modal.style.display = "flex";
}

function cerrarModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("closing");
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("closing"); 
  }, 300);
}

/*Proceso UX*/

const procesosUX = {
  hch: {
    proyecto: "Inmobiliaria HCH",
    pasos: [
      { titulo: "Problema", texto: "El cliente necesitaba un sitio que transmitiera confianza a compradores y le ayudara a mostrar sus propiedades disponibles." },
      { titulo: "Exploración", texto: "En una llamada con el cliente recopilé qué propiedades quería destacar, su público objetivo y el tono de marca que buscaba." },
      { titulo: "Requerimientos", texto: "Traduje lo conversado en requisitos funcionales (catálogo de propiedades, botón de agendar visita), no funcionales (carga rápida, responsive) y de diseño (paleta oscura y dorada)." },
      { titulo: "Prototipado", texto: "Hice un boceto a mano de la estructura antes de programar y lo compartí con el cliente para validar el orden de la información." },
      { titulo: "Iteración y resultado", texto: "Con feedback semanal fui ajustando textos, colores y secciones hasta llegar a una versión final aprobada por el cliente." }
    ]
  },
  quinta26: {
    proyecto: "Quinta 26",
    pasos: [
      { titulo: "Problema", texto: "\"Quinta 26\" no tenía presencia digital y perdía contactos que buscaban cotizar por redes sociales." },
      { titulo: "Exploración", texto: "Conversé con el cliente sobre los tipos de eventos que ofrece y qué información buscan más los interesados antes de cotizar." },
      { titulo: "Requerimientos", texto: "Definí requisitos funcionales (formulario de cotización, galería de eventos), de diseño (tono cálido y visual) y no funcionales (uso cómodo desde celular)." },
      { titulo: "Prototipado", texto: "Armé una maqueta sencilla y la compartí con el cliente para validar el orden de las secciones antes de construir la landing final." },
      { titulo: "Iteración y resultado", texto: "Ajusté textos e imágenes en varias rondas hasta un sitio que el cliente pudiera usar directamente para cerrar cotizaciones." }
    ]
  },
  cafeteria: {
    proyecto: "Landing cafetería",
    pasos: [
      { titulo: "Problema", texto: "Proyecto universitario para dar presencia digital a una cafetería local que no tenía sitio web." },
      { titulo: "Exploración", texto: "Investigué el menú y la identidad visual del negocio junto con los criterios del curso para definir el alcance del sitio." },
      { titulo: "Requerimientos", texto: "Definí como requisitos funcionales el menú y la ubicación, y como requisitos de diseño una estética cálida acorde a una cafetería." },
      { titulo: "Prototipado", texto: "Bocetó la landing antes de programarla, validando la estructura con los criterios de la materia." },
      { titulo: "Iteración y resultado", texto: "Ajusté el diseño en varias rondas hasta entregar una landing funcional y visualmente coherente." }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.proceso-slider').forEach(contenedor => {
    const datos = procesosUX[contenedor.dataset.proceso];
    if (!datos) return;

    const tituloEl = contenedor.querySelector('.proceso-slider-titulo');
    const textoEl = contenedor.querySelector('.proceso-slider-texto');
    const puntosEl = contenedor.querySelector('.proceso-slider-puntos');

    let paso = 0;

    datos.pasos.forEach((_, i) => {
      const punto = document.createElement('span');
      if (i === 0) punto.classList.add('activo');
      punto.addEventListener('click', () => {
        paso = i;
        mostrarPaso();
      });
      puntosEl.appendChild(punto);
    });

    function mostrarPaso() {
      tituloEl.style.opacity = 0;
      textoEl.style.opacity = 0;
      setTimeout(() => {
        tituloEl.textContent = datos.pasos[paso].titulo;
        textoEl.textContent = datos.pasos[paso].texto;
        puntosEl.querySelectorAll('span').forEach((punto, i) => {
          punto.classList.toggle('activo', i === paso);
        });
        tituloEl.style.opacity = 1;
        textoEl.style.opacity = 1;
      }, 300);
    }

    mostrarPaso();
    setInterval(() => {
      paso = (paso + 1) % datos.pasos.length;
      mostrarPaso();
    }, 4000);
  });
});

/*Modo Oscuro*/
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('dark-mode-toggle');
    const iconImg = document.getElementById('toggle-icon');
    const body = document.body;

    // Rutas de tus imágenes
    const moonOutline = "img/moon-outline.svg";
    const moonFilled = "img/moon-filled.svg";

    const updateUI = (isDark) => {
        if (isDark) {
            body.classList.add('dark');
            iconImg.src = moonFilled; // Cambia a luna llena
        } else {
            body.classList.remove('dark');
            iconImg.src = moonOutline; // Cambia a luna contorno
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
