import { CURSOS } from './datos.js';
import { requerirSesion, guardarUsuario } from './sesion.js';
import { cargarHeader, actualizarHeader, mostrarPopup } from './ui.js';
import { porcentajeCurso, reiniciarProgreso } from './progreso.js';

const nodoMisCursos = document.querySelector('#mis_cursos');
const nodoOtrosCursos = document.querySelector('#otros_cursos');
const nodoOcultos = document.querySelector('#lista_ocultos');
const nodoSinOcultos = document.querySelector('#sin_ocultos');
const nodoInvitacion = document.querySelector('#invitacion');

const plantillaCurso = document.querySelector('#plantilla-curso');
const plantillaOculto = document.querySelector('#plantilla-oculto');

const usuarioActivo = requerirSesion("../index.html");
if (usuarioActivo) {
    cargarHeader(usuarioActivo);
    mostrarResumen(usuarioActivo);
    mostrarCursos(usuarioActivo);

    document.querySelector('#reiniciar_progreso').addEventListener('click', function () {
        confirmarReinicio(usuarioActivo);
    });
}

function confirmarReinicio(usuario) {
    if (!window.confirm('Se van a borrar tu XP, racha, gemas, productos y el avance de todos los cursos. Tu cuenta y tus opiniones se conservan. ¿Querés continuar?')) {
        return;
    }

    if (!reiniciarProgreso(usuario)) {
        mostrarPopup('No se pudo reiniciar el progreso. Revisá si tu navegador permite almacenamiento.', 'error');
        return;
    }

    actualizarHeader(usuario);
    mostrarResumen(usuario);
    mostrarCursos(usuario);
    mostrarPopup('Tu progreso fue reiniciado.', 'exito');
}

function mostrarResumen(usuario) {
    const racha = usuario.racha || 0;
    const xp = usuario.xp || 0;
    const xpHoy = usuario.xpHoy || 0;
    const metaDiaria = usuario.metaDiaria || 50;
    const liga = usuario.liga || "bronce";
    const textoLiga = liga.charAt(0).toUpperCase() + liga.slice(1);


    document.querySelector('#resumen_racha').textContent = '🔥 Racha: ' + racha + (racha === 1 ? " día" : " días");
    document.querySelector('#resumen_xp').textContent = '⚡ Experiencia: ' + xp + " XP";
    document.querySelector('#resumen_meta').textContent = '🎯 Meta de hoy: ' + xpHoy + " de " + metaDiaria + " XP";
    document.querySelector('#resumen_liga').textContent = '🏆 Liga ' + textoLiga;
}

function mostrarCursos(usuario) {

    const ocultos = usuario.ocultos || [];
    const misCursos = usuario.misCursos || [];

    // Separamos los cursos según su estado
    const visibles = CURSOS.filter(function (curso) {
        return !ocultos.includes(curso.id);
    });

    const propios = visibles.filter(function (curso) {
        return misCursos.includes(curso.id);
    });

    const otros = visibles.filter(function (curso) {
        return !misCursos.includes(curso.id);
    });

    const escondidos = CURSOS.filter(function (curso) {
        return ocultos.includes(curso.id);
    });

    // Limpiamos las listas
    nodoMisCursos.replaceChildren();
    nodoOtrosCursos.replaceChildren();
    nodoOcultos.replaceChildren();

    // Mostramos Mis cursos
    propios.forEach(function (curso) {
        nodoMisCursos.appendChild(crearTarjeta(curso, usuario));
    });

    // Si no tiene cursos iniciados
    if (propios.length === 0) {
        const mensaje = document.createElement("p");
        mensaje.className = "mensaje_vacio";
        mensaje.textContent = "Todavía no comenzaste ningún curso.";
        nodoMisCursos.appendChild(mensaje);
    }

    // Mostramos los demás cursos
    otros.forEach(function (curso) {
        nodoOtrosCursos.appendChild(crearTarjeta(curso, usuario));
    });

    // Mostramos los cursos ocultos
    escondidos.forEach(function (curso) {
        nodoOcultos.appendChild(crearOculto(curso, usuario));
    });

    nodoSinOcultos.hidden = escondidos.length > 0;

    mostrarInvitacion(usuario, visibles);
}

function crearTarjeta(curso, usuario) {
    const nodo = plantillaCurso.content.cloneNode(true);
    const porcentaje = porcentajeCurso(usuario, curso.id);

    const nodoBandera = nodo.querySelector(".bandera_curso");
    nodoBandera.src = "../img/" + curso.bandera;
    nodoBandera.alt = curso.banderaAlt;

    nodo.querySelector("h3").textContent = curso.nombre;
    nodo.querySelector(".curso_progreso").textContent = "Progreso: " + porcentaje + "%";
    nodo.querySelector('.curso_nivel').textContent = "Nivel: " + curso.nivel;

    const accion = porcentaje > 0 ? "Continuar" : "Empezar";
    const nodoBoton = nodo.querySelector(".btn");

    nodoBoton.href = '../unidades/unidades.html?id=' + curso.id;
    nodoBoton.textContent = accion;
    nodoBoton.setAttribute("aria-label", accion + " " + curso.nombre);

    nodoBoton.addEventListener('click', function () {
        const misCursos = usuario.misCursos || [];

        if (!misCursos.includes(curso.id)) {
            usuario.misCursos = misCursos.concat(curso.id);
            guardarUsuario(usuario);
        }
    });

    const nodoOcultar = nodo.querySelector(".enlace_secundario");
    nodoOcultar.setAttribute("aria-label", "Ocultar " + curso.nombre);
    nodoOcultar.addEventListener('click', function () {
        const ocultosActuales = usuario.ocultos || [];
        cambiarOcultos(usuario, ocultosActuales.concat(curso.id));
    });

    return nodo;
}

function crearOculto(curso, usuario) {
    const nodo = plantillaOculto.content.cloneNode(true);

    nodo.querySelector("p").textContent = curso.nombre;

    const nodoRestaurar = nodo.querySelector(".enlace_secundario");
    nodoRestaurar.setAttribute("aria-label", "Restaurar " + curso.nombre);
    nodoRestaurar.addEventListener("click", function () {
        const ocultosActuales = usuario.ocultos || [];
        const restantes = ocultosActuales.filter(function (id) {
            return id !== curso.id;
        });
        cambiarOcultos(usuario, restantes);
    });

    return nodo;
}

// Guarda la nueva lista de cursos ocultos. Si no se pudo guardar, deja todo como estaba.
function cambiarOcultos(usuario, nuevosOcultos) {
    const anteriores = usuario.ocultos || [];
    usuario.ocultos = nuevosOcultos;

    if (!guardarUsuario(usuario)) {
        usuario.ocultos = anteriores;
        mostrarPopup("No se pudo guardar el cambio. Revisá si tu navegador permite almacenamiento.", "error");
        return;
    }
    mostrarCursos(usuario);
}

// Estado inicial: si la cuenta todavía no tiene actividad, invita a empezar
function mostrarInvitacion(usuario, visibles) {
    const sinActividad = (usuario.xp || 0) === 0;

    nodoInvitacion.hidden = !sinActividad || visibles.length === 0;
    if (nodoInvitacion.hidden) {
        return;
    }
    const curso = visibles[0];
    const nodoEnlace = nodoInvitacion.querySelector('a');
    nodoEnlace.href = '../unidades/unidades.html?id=' + curso.id;
    nodoEnlace.textContent = 'Empezá con ' + curso.nombre;
}

