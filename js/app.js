/*==================================================
 ENAFOL 4.0
 app.js
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
      HEADER SCROLL
    =========================================*/

    const header = document.querySelector(".header");

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 80) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();


    /*=========================================
      MENU MOVIL
    =========================================*/

    const menu = document.querySelector("#menu");
    const menuBtn = document.querySelector(".menu-toggle");

    if (menu && menuBtn) {

        menuBtn.addEventListener("click", () => {

            menu.classList.toggle("open");

            menuBtn.classList.toggle("active");

        });

        menu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                menu.classList.remove("open");

                menuBtn.classList.remove("active");

            });

        });

    }


    /*=========================================
      SCROLL SUAVE
    =========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e) {

            const destino = document.querySelector(this.getAttribute("href"));

            if (destino) {

                e.preventDefault();

                destino.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });


    /*=========================================
      MODAL WHATSAPP
    =========================================*/

    const modal = document.getElementById("modalWhatsapp");

    const abrir = document.querySelectorAll(".abrirWhatsapp");

    const cerrar = document.querySelector(".cerrar");

    if (modal) {

        abrir.forEach(btn => {

            btn.addEventListener("click", (e) => {

                e.preventDefault();

                modal.classList.add("activo");

                document.body.style.overflow = "hidden";

            });

        });

        if (cerrar) {

            cerrar.addEventListener("click", cerrarModal);

        }

        modal.addEventListener("click", function(e){

            if(e.target === modal){

                cerrarModal();

            }

        });

        document.addEventListener("keydown", function(e){

            if(e.key === "Escape"){

                cerrarModal();

            }

        });

    }

    function cerrarModal(){

        modal.classList.remove("activo");

        document.body.style.overflow = "";

    }


    /*=========================================
      ANIMACIONES
    =========================================*/

    const elementos = document.querySelectorAll(

        ".about-card, .gallery-item, .service-card, .video-card, .stat-card, .social-card"

    );

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";

                entry.target.style.transform="translateY(0)";

            }

        });

    },{

        threshold:.15

    });

    elementos.forEach(el=>{

        el.style.opacity="0";

        el.style.transform="translateY(50px)";

        el.style.transition=".8s";

        observer.observe(el);

    });


    /*=========================================
      BOTON VOLVER ARRIBA
    =========================================*/

    const topButton = document.querySelector(".back-to-top");

    if(topButton){

        window.addEventListener("scroll",()=>{

            if(window.scrollY>500){

                topButton.classList.add("show");

            }else{

                topButton.classList.remove("show");

            }

        });

        topButton.addEventListener("click",()=>{

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }


    /*=========================================
      MENU ACTIVO
    =========================================*/

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll("#menu a");

    function activeMenu(){

        let current = "";

        sections.forEach(section=>{

            const top = section.offsetTop - 120;

            const height = section.offsetHeight;

            if(window.scrollY >= top){

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#" + current){

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll",activeMenu);

    activeMenu();


    /*=========================================
      PRELOAD IMAGENES
    =========================================*/

    const images = document.querySelectorAll("img[data-src]");

    if(images.length){

        const imgObserver = new IntersectionObserver((entries,observer)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    const img = entry.target;

                    img.src = img.dataset.src;

                    img.removeAttribute("data-src");

                    observer.unobserve(img);

                }

            });

        });

        images.forEach(img=>{

            imgObserver.observe(img);

        });

    }


    /*=========================================
      AÑO AUTOMATICO FOOTER
    =========================================*/

    const year = document.getElementById("year");

    if(year){

        year.textContent = new Date().getFullYear();

    }

});
/*=========================================
 REGISTRO DEL SERVICE WORKER
=========================================*/

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker

            .register("./sw.js")

            .then(() => {

                console.log("Service Worker registrado correctamente.");

            })

            .catch(error => {

                console.error("Error al registrar el Service Worker:", error);

            });

    });

}