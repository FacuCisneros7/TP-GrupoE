import { COMUNIDAD } from './datos.js';
import { requerirSesion } from './sesion.js';
import { cargarHeader } from './ui.js';

const SEGUIDOS_DEMO = [
    "Maria_23",
    "Carlos_Dev",
    "Lili78",
    "Lucas_93",
    "MiaSanchez"
];

const SEGUIDORES_DEMO = [
    "Maria_23",
    "Carlos_Dev",
    "Lili78",
    "Lucas_93",
    "MiaSanchez"
];

// Lo usan seguidos, seguidores y actividad: cada página tiene su propia plantilla
const usuarioActivo = requerirSesion('../index.html');

if (usuarioActivo) {
    cargarHeader(usuarioActivo);
    mostrarComunidad(usuarioActivo);

    function obtenerSeguidosUsuario(usuario) {
        if (usuario.usuario === "juan_perez") {
            return SEGUIDOS_DEMO;
        }
        return usuario.seguidos || [];
    }

    function obtenerSeguidoresUsuario(usuario) {
        if (usuario.usuario === "juan_perez") {
            return SEGUIDORES_DEMO;
        }
        return usuario.seguidores || [];
    }

    function buscarPersonas(nombresUsuarios) {
        const personas = [];
        COMUNIDAD.forEach(function (persona) {
            if (nombresUsuarios.indexOf(persona.usuario) !== -1) {
                personas.push(persona);
            }

        });
        return personas;
    }

    function mostrarComunidad(usuario) {

        const nodoCantidad = document.querySelector('#cantidad_personas');
        const nodoVolver = document.querySelector('.volver-perfil');
        const plantillaPersona = document.querySelector('#plantilla-persona');
        const plantillaActividad = document.querySelector('#plantilla-actividad');

        let nombresUsuarios = [];
        let mensajeVacio = "";

        if (plantillaActividad !== null) {
            nombresUsuarios = obtenerSeguidosUsuario(usuario);
            mensajeVacio = "Todavía no seguís a nadie. Cuando sigas a otros usuarios, su actividad aparecerá acá.";
        } else if (window.location.pathname.indexOf("seguidores") !== -1) {
            nombresUsuarios = obtenerSeguidoresUsuario(usuario);
            mensajeVacio =
                "Todavía no tenés seguidores.";
        } else {
            nombresUsuarios = obtenerSeguidosUsuario(usuario);
            mensajeVacio = "Todavía no seguís a ningún usuario.";
        }

        const personas = buscarPersonas(nombresUsuarios);
        if (nodoCantidad != null) {
            nodoCantidad.textContent = personas.length;
        }

        if (personas.length === 0) {
            const mensaje = document.createElement("p");
            mensaje.className = "mensaje_vacio";
            mensaje.textContent = mensajeVacio;
        }

        if (nodoVolver !== null) {
            nodoVolver.before(mensaje);
        }
        return;
    }

    personas.forEach(function (persona) {
        if (plantillaPersona != null) {
            nodoVolver.before(crearPersona(plantillaPersona, persona));
        }
        if (plantillaActividad !== null) {
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
