const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

if (btnMenu && menu) {

    btnMenu.addEventListener("click", () => {

        menu.classList.toggle("activo");

    });

}

document.querySelectorAll('#menu a').forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("activo");

    });

});

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.background = "rgba(0,0,0,.90)";

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(0,0,0,.70)";

        header.style.boxShadow = "none";

    }

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            destino.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});
const modal = document.getElementById("modalWhatsapp");

const btnWhatsapp = document.getElementById("btnWhatsapp");

const cerrarModal = document.getElementById("cerrarModal");

if (btnWhatsapp && modal) {

    btnWhatsapp.addEventListener("click", () => {

        modal.classList.add("activo");

        document.body.style.overflow = "hidden";

    });

}

if (cerrarModal) {

    cerrarModal.addEventListener("click", () => {

        modal.classList.remove("activo");

        document.body.style.overflow = "";

    });

}

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.remove("activo");

        document.body.style.overflow = "";

    }

});

window.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        modal.classList.remove("activo");

        document.body.style.overflow = "";

    }

});
window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(

    ".about-card, .event-card, .social-card, .contact-box"

).forEach(element => {

    observer.observe(element);

});

console.log("%cENAFOL", "font-size:28px;font-weight:bold;color:#d81b27;");

console.log("%cEnamorados del Folklor", "font-size:16px;color:#ffffff;");

console.log("%cSitio desarrollado con HTML, CSS y JavaScript.", "font-size:13px;color:#9e9e9e;");
// Fin de app.js