document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("btnWhatsapp");
    const modal = document.getElementById("modalWhatsapp");
    const cerrar = document.getElementById("cerrarModal");

    if (!boton || !modal || !cerrar) return;

    // Abrir modal
    boton.addEventListener("click", () => {
        modal.classList.add("activo");
        document.body.style.overflow = "hidden";
    });

    // Cerrar con X
    cerrar.addEventListener("click", cerrarModal);

    // Cerrar haciendo clic fuera
    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            cerrarModal();

        }

    });

    // Cerrar con ESC
    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            cerrarModal();

        }

    });

    function cerrarModal(){

        modal.classList.remove("activo");

        document.body.style.overflow = "auto";

    }

});