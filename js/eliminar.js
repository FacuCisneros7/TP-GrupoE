import { requerirSesion, cerrarSesion, eliminarUsuarioActual } from "./sesion.js";

import { mostrarPopup } from "./ui.js";


const usuarioActivo = requerirSesion("../index.html");

if (usuarioActivo) {
    mostrarDatosUsuario(usuarioActivo);
    configurarEliminarCuenta();
    configurarCerrarSesion();
}



function mostrarDatosUsuario(usuario) {

    const racha = usuario.racha || 0;
    const xp = usuario.xp || 0;

    // Compatible mientras el grupo cambia monedas por gemas
    const gemas = usuario.gemas || 0;

    const textoDias = racha === 1 ? "Día" : "Días";

    ponerTexto("eliminar-racha", "🔥 " + racha + " " + textoDias);
    ponerTexto("eliminar-xp", "⚡ " + xp + " XP");
    ponerTexto("eliminar-gemas", "💎 " + gemas);
}



function configurarEliminarCuenta() {

    const botonEliminar = document.getElementById("confirmar-eliminar");

    if (botonEliminar === null) {
        return;
    }

    botonEliminar.addEventListener("click", function (evento) {

        evento.preventDefault();

        const eliminado = eliminarUsuarioActual();

        if (eliminado) {

            window.location.replace("eliminado.html");

        } else {
            mostrarPopup(
                "No se pudo eliminar la cuenta. Intentá nuevamente.",
                "error"
            );
        }
    });
}


function configurarCerrarSesion() {

    const botonCerrar = document.getElementById("eliminar-cerrar-sesion");

    if (botonCerrar === null) {
        return;
    }

    botonCerrar.addEventListener("click", function (evento) {
        evento.preventDefault();
        cerrarSesion();
        window.location.replace("../index.html");
    });
}

function ponerTexto(id, texto) {

    const elemento = document.getElementById(id);

    if (elemento !== null) {
        elemento.textContent = texto;
    }
}