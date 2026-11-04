import { CURSOS } from './datos.js';
import { requerirSesion, guardarUsuario } from './sesion.js';
import { cargarHeader, mostrarPopup } from './ui.js';
import { porcentajeCurso } from './progreso.js';

const nodoLista = document.querySelector('#lista_cursos');
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

// Dibuja las dos listas. Se llama de nuevo cada vez que se oculta o se restaura un curso.
function mostrarCursos(usuario) {
    const ocultos = usuario.ocultos || [];

    const visibles = CURSOS.filter(function (curso) {
        return !ocultos.includes(curso.id);
    });
    const escondidos = CURSOS.filter(function (curso) {
        return ocultos.includes(curso.id);
    });

    nodoLista.replaceChildren();
    visibles.forEach(function (curso) {
        nodoLista.appendChild(crearTarjeta(curso, usuario));
    });

    if (visibles.length === 0) {
        const mensaje = document.createElement("p");
        mensaje.className = "mensaje_vacio";
        mensaje.textContent = 'Ocultaste todos tus cursos. Podés restaurarlos desde "Cursos ocultos".';
        nodoLista.appendChild(mensaje);
    }

    nodoOcultos.replaceChildren();
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

