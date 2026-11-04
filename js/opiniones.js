import { obtenerOpiniones, guardarOpiniones } from './sesion.js';
import { mostrarPopup } from './ui.js';

const nodoSeccion = document.querySelector('#seccion_opiniones');
const nodoPromedio = document.querySelector('#opiniones_promedio');
const nodoLista = document.querySelector('#lista_opiniones');
const nodoVacio = document.querySelector('#sin_opiniones');
const formulario = document.querySelector('#formulario_opinion');
const nodoEstrellas = document.querySelector('#opinion_estrellas');
const nodoTexto = document.querySelector('#opinion_texto');
const plantilla = document.querySelector('#plantilla-opinion');

// Muestra las opiniones del curso y permite publicar una nueva
export function mostrarOpiniones(usuario, cursoId) {
    nodoSeccion.hidden = false;
    dibujarOpiniones(cursoId);

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        const texto = nodoTexto.value.trim();

        if (!nodoEstrellas.value) {
            mostrarError('Elegí una calificación.', nodoEstrellas);
            return;
        }
        if (!texto) {
            mostrarError('Escribí un comentario.', nodoTexto);
            return;
        }

        const opiniones = obtenerOpiniones();
        opiniones.push({
            cursoId: cursoId,
            usuario: usuario.usuario,
            estrellas: Number(nodoEstrellas.value),
            texto: texto,
            fecha: new Date().toISOString()
        });

        if (!guardarOpiniones(opiniones)) {
            mostrarError('No se pudo guardar tu opinión. Revisá si tu navegador permite almacenamiento.', null);
            return;
        }

        formulario.reset();
        dibujarOpiniones(cursoId);
        mostrarPopup('Tu opinión fue publicada.', 'exito');
    });
}

function dibujarOpiniones(cursoId) {
    const opiniones = obtenerOpiniones().filter(function (opinion) {
        return opinion.cursoId === cursoId;
    });

    nodoLista.replaceChildren();
    let suma = 0;

    opiniones.forEach(function (opinion) {
        suma += opinion.estrellas;

        const nodo = plantilla.content.cloneNode(true);
        nodo.querySelector('strong').textContent = opinion.usuario;
        nodo.querySelector('.opinion_estrellas').textContent = '★'.repeat(opinion.estrellas) + ' ' + opinion.estrellas + ' de 5';
        nodo.querySelector('.opinion_fecha').textContent = new Date(opinion.fecha).toLocaleDateString('es-AR');
        nodo.querySelector('.opinion_texto').textContent = opinion.texto;
        nodoLista.appendChild(nodo);
    });

    nodoVacio.hidden = opiniones.length > 0;
    nodoPromedio.hidden = opiniones.length === 0;

    if (opiniones.length > 0) {
        const promedio = (suma / opiniones.length).toFixed(1);
        nodoPromedio.textContent = 'Promedio: ' + promedio + ' de 5 (' + opiniones.length + (opiniones.length === 1 ? ' opinión)' : ' opiniones)');
    }
}

function mostrarError(mensaje, nodoCampo) {
    mostrarPopup(mensaje, 'error', function () {
        if (nodoCampo) nodoCampo.focus();
    });
}
