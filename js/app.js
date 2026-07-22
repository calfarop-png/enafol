/* =====================================
   ENAFOL
   app.js
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("btnWhatsapp");

    if (btn) {

        btn.addEventListener("click", () => {

            const opcion = prompt(
`¿Con quién deseas comunicarte?

1 - Juan Cerda (Presidencia)

2 - Marisol (Contrataciones)

3 - Carlos (Difusión)

4 - Jaime Francisco (Difusión)

5 - Silvia (Difusión)

Escribe un número del 1 al 5`
            );

            let telefono = "";
            let nombre = "";

            switch(opcion){

                case "1":
                    telefono = "56954256592";
                    nombre = "Juan Cerda";
                    break;

                case "2":
                    telefono = "56977661780";
                    nombre = "Marisol";
                    break;

                case "3":
                    telefono = "56971276747";
                    nombre = "Carlos";
                    break;

                case "4":
                    telefono = "56955281455";
                    nombre = "Jaime Francisco";
                    break;

                case "5":
                    telefono = "56988896918";
                    nombre = "Silvia";
                    break;

                default:
                    return;

            }

            const mensaje =
                encodeURIComponent(
                    `Hola ${nombre}, me gustaría obtener información sobre ENAFOL.`
                );

            window.open(
                `https://wa.me/${telefono}?text=${mensaje}`,
                "_blank"
            );

        });

    }

    /* Animación simple del menú */

    const links = document.querySelectorAll("nav a");

    links.forEach(link => {

        link.addEventListener("mouseenter", () => {

            link.style.transform = "translateY(-2px)";

        });

        link.addEventListener("mouseleave", () => {

            link.style.transform = "translateY(0px)";

        });

    });

});