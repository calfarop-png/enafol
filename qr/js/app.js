/*==================================================
ENAFOL QR CARD
Version 1.0
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================
      ANIMACIÓN DE ENTRADA
    =========================*/

    const card = document.querySelector(".card");

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {

        card.style.transition = ".7s ease";

        card.style.opacity = "1";

        card.style.transform = "translateY(0)";

    },150);



    /*=========================
      EFECTO BOTONES
    =========================*/

    const botones = document.querySelectorAll(".link");

    botones.forEach((boton,index)=>{

        boton.style.opacity="0";

        boton.style.transform="translateY(25px)";

        setTimeout(()=>{

            boton.style.transition=".45s ease";

            boton.style.opacity="1";

            boton.style.transform="translateY(0)";

        },250+(index*90));

    });



    /*=========================
      EFECTO CLICK
    =========================*/

    botones.forEach(boton=>{

        boton.addEventListener("click",function(){

            this.style.transform="scale(.97)";

            setTimeout(()=>{

                this.style.transform="";

            },150);

        });

    });



    /*=========================
      LOGO
    =========================*/

    const logo=document.querySelector(".logo img");

    logo.addEventListener("mouseenter",()=>{

        logo.style.transform="rotate(5deg) scale(1.05)";

    });

    logo.addEventListener("mouseleave",()=>{

        logo.style.transform="";

    });



    /*=========================
      VIBRACIÓN EN MOVILES
    =========================*/

    botones.forEach(link=>{

        link.addEventListener("click",()=>{

            if(navigator.vibrate){

                navigator.vibrate(30);

            }

        });

    });



    /*=========================
      FOOTER
    =========================*/

    const footer=document.querySelector("footer");

    const year=new Date().getFullYear();

    footer.innerHTML="© "+year+" ENAFOL";



    /*=========================
      DETECCIÓN PWA
    =========================*/

    if(window.matchMedia("(display-mode: standalone)").matches){

        console.log("ENAFOL ejecutándose como PWA");

    }



    /*=========================
      EFECTO PARALLAX
    =========================*/

    document.addEventListener("mousemove",(e)=>{

        const fondo=document.querySelector(".background");

        const x=(e.clientX/window.innerWidth)*8;

        const y=(e.clientY/window.innerHeight)*8;

        fondo.style.backgroundPosition=x+"px "+y+"px";

    });



    /*=========================
      LAZY LOADING IMÁGENES
    =========================*/

    document.querySelectorAll("img").forEach(img=>{

        img.loading="lazy";

    });

});