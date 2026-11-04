import { COMUNIDAD } from './datos.js';
import { requerirSesion } from './sesion.js';
import { cargarHeader } from './ui.js';

// Lo usan seguidos, seguidores y actividad: cada página tiene su propia plantilla
const usuarioActivo = requerirSesion('../index.html');

if (usuarioActivo) {
    cargarHeader(usuarioActivo);

    const nodoCantidad = document.querySelector('#cantidad_personas');
    const nodoVolver = document.querySelector('.volver-perfil');
    const plantillaPersona = document.querySelector('#plantilla-persona');
    const plantillaActividad = document.querySelector('#plantilla-actividad');

    if (nodoCantidad) {
        nodoCantidad.textContent = COMUNIDAD.length;
    }

    COMUNIDAD.forEach(function (persona) {
        if (plantillaPersona) {
            nodoVolver.before(crearPersona(plantillaPersona, persona));
        }
        if (plantillaActividad) {
            nodoVolver.before(crearActividad(plantillaActividad, persona));
        }
    });
}

function crearPersona(plantilla, persona) {
    const nodo = plantilla.content.cloneNode(true);
    const nodoAvatar = nodo.querySelector('img');

    nodoAvatar.src = '../img/' + persona.avatar;
    nodoAvatar.alt = 'Avatar de ' + persona.usuario;
    nodo.querySelector('h2').textContent = persona.usuario;
    nodo.querySelector('small').textContent = '⚡' + persona.xp + ' XP';

    return nodo;
}

function crearActividad(plantilla, persona) {
    const nodo = plantilla.content.cloneNode(true);
    const nodoAvatar = nodo.querySelector('img');

    nodoAvatar.src = '../img/' + persona.avatar;
    nodoAvatar.alt = 'Avatar de ' + persona.usuario;
    nodo.querySelector('h2').textContent = persona.usuario;
    nodo.querySelector('small').textContent = persona.cuando;
    nodo.querySelector('p').textContent = persona.actividad;
    nodo.querySelector('.actividad-feed-premio').textContent = persona.premio;

    return nodo;
}
