import { requerirSesion, cerrarSesion } from "./sesion.js";

import { porcentajeCurso } from "./progreso.js";


const usuarioActivo = requerirSesion("../index.html");

if (usuarioActivo) {
    mostrarDashboard(usuarioActivo);
    configurarCerrarSesion();
}


function mostrarDashboard(usuario) {

    const racha = usuario.racha || 0;
    const xp = usuario.xp || 0;

    const gemas = usuario.gemas || 0;

    const textoDias = racha === 1 ? "Día" : "Días";

    ponerTexto("dashboard-racha", "🔥 " + racha + " " + textoDias);

    ponerTexto("dashboard-xp", "⚡ " + xp + " XP");

    ponerTexto("dashboard-gemas", "💎 " + gemas);


    const progresoIngles = porcentajeCurso(usuario, "ingles");
    const progresoAleman = porcentajeCurso(usuario, "aleman");
    const progresoChino = porcentajeCurso(usuario, "chino");

    ponerTexto("dashboard-progreso-ingles", "Progreso: " + progresoIngles + "%");
    ponerTexto("dashboard-progreso-aleman", "Progreso: " + progresoAleman + "%");
    ponerTexto("dashboard-progreso-chino", "Progreso: " + progresoChino + "%");

    actualizarBotonCurso("dashboard-progreso-ingles", progresoIngles);
    actualizarBotonCurso("dashboard-progreso-aleman", progresoAleman);
    actualizarBotonCurso("dashboard-progreso-chino", progresoChino);
}


function ponerTexto(id, texto) {
    const elemento = document.getElementById(id);

    if (elemento !== null) {
        elemento.textContent = texto;
    }
}


function actualizarBotonCurso(idProgreso, porcentaje) {

    const progreso = document.getElementById(idProgreso);

    if (progreso === null) {
        return;
    }

    const tarjeta = progreso.closest(".tarjeta_curso");

    if (tarjeta === null) {
        return;
    }

    const boton = tarjeta.querySelector(".btn");

    if (boton === null) {
        return;
    }

    if (porcentaje === 0) {
        boton.textContent = "Empezar";
    } else {
        boton.textContent = "Continuar";
    }
}


function configurarCerrarSesion() {
    const boton = document.getElementById("dashboard-cerrar-sesion");

    if (boton === null) {
        return;
    }

    boton.addEventListener("click", function (evento) {
        evento.preventDefault();

        cerrarSesion();

        window.location.replace("../index.html");
    });
}