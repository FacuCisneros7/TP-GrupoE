import { CURSOS, COMUNIDAD, obtenerLeccionesDeCurso } from './datos.js';
import { requerirSesion, guardarUsuario, obtenerUsuarios } from './sesion.js';
import { cargarHeader, actualizarHeader, mostrarPopup } from './ui.js';
import { obtenerRacha, obtenerCompletadas, porcentajeCurso, contarCompletadas, contarLecciones, calcularLogros } from './progreso.js';

const AVATAR_POR_DEFECTO = 'Avatar_conejo.jpg';
const ACTIVIDADES_VISIBLES = 3;

const formulario = document.querySelector('#formulario_perfil');
const nodoNombre = document.querySelector('#nombre');
const nodoEmail = document.querySelector('#email');
const nodoActual = document.querySelector('#contrasena-actual');
const nodoNueva = document.querySelector('#nueva-contrasena');
const nodoConfirmar = document.querySelector('#confirmar-contrasena');
const nodoIdioma = document.querySelector('#idioma');

let usuario = requerirSesion('../index.html');
if (usuario) {
    cargarHeader(usuario);
    mostrarPerfil();
    mostrarComunidad();
    formulario.addEventListener('submit', guardarCambios);
}

function mostrarPerfil() {
    const avatar = '../img/' + (usuario.avatar || AVATAR_POR_DEFECTO);
    const nombre = usuario.nombre || usuario.usuario;

    document.querySelector('#perfil_avatar').src = avatar;
    document.querySelector('#perfil_avatar').alt = 'Avatar de ' + nombre;
    document.querySelector('#ajustes_avatar').src = avatar;
    document.querySelector('#ajustes_avatar').alt = 'Avatar de ' + nombre;

    document.querySelector('#perfil_nombre').textContent = nombre;
    document.querySelector('#perfil_usuario').textContent = '@' + usuario.usuario;
    document.querySelector('#perfil_xp').textContent = '⚡ ' + (usuario.xp || 0) + ' XP';
    document.querySelector('#perfil_fecha').textContent = formatearFecha(usuario.fechaAlta);
    document.querySelector('#perfil_email').textContent = usuario.email;

    mostrarIdiomas();
    mostrarProgreso();
    mostrarEstadisticas();
    mostrarLogros();

    nodoNombre.value = nombre;
    document.querySelector('#usuario').value = usuario.usuario;
    nodoEmail.value = usuario.email;
    nodoIdioma.value = usuario.idiomaInterfaz || 'es';
}

function formatearFecha(fecha) {
    if (!fecha) return '-';
    return new Date(fecha).toLocaleDateString('es-AR', { month: 'long', year: 'numeric' });
}

// "Inglés desde Español" -> "Inglés"
function nombreIdioma(curso) {
    return curso.nombre.split(' desde ')[0];
}

function crearBandera(curso) {
    const nodo = document.createElement('span');
    const imagen = document.createElement('img');
    imagen.src = '../img/' + curso.bandera;
    imagen.alt = curso.banderaAlt;
    nodo.append(imagen, nombreIdioma(curso));
    return nodo;
}

function mostrarIdiomas() {
    const nodoIdiomas = document.querySelector('#perfil_idiomas');
    nodoIdiomas.replaceChildren();
    CURSOS.forEach(function (curso) {
        nodoIdiomas.appendChild(crearBandera(curso));
    });
}

function mostrarProgreso() {
    const nodoLista = document.querySelector('#perfil_progreso');
    const plantilla = document.querySelector('#plantilla-progreso');
    nodoLista.replaceChildren();

    CURSOS.forEach(function (curso) {
        const nodo = plantilla.content.cloneNode(true);
        const porcentaje = porcentajeCurso(usuario, curso.id);
        const hechas = obtenerCompletadas(usuario, curso.id).length;
        const total = obtenerLeccionesDeCurso(curso.id).length;

        nodo.querySelector('.idioma-nombre').appendChild(crearBandera(curso));
        nodo.querySelector('.progreso-info strong').textContent = porcentaje + '%';
        nodo.querySelector('.barra-completada').style.width = porcentaje + '%';
        nodo.querySelector('.progreso-detalle span').textContent = hechas + ' de ' + total + ' lecciones completadas';

        const nodoEnlace = nodo.querySelector('.progreso-detalle a');
        nodoEnlace.href = '../unidades/unidades.html?id=' + curso.id;
        nodoEnlace.setAttribute('aria-label', 'Ver curso de ' + nombreIdioma(curso));

        nodoLista.appendChild(nodo);
    });
}

function mostrarEstadisticas() {
    const completadas = contarCompletadas(usuario);

    document.querySelector('#estadistica_racha').textContent = obtenerRacha(usuario);
    document.querySelector('#estadistica_xp').textContent = usuario.xp || 0;
    document.querySelector('#estadistica_lecciones').textContent = completadas;
    document.querySelector('#estadistica_total').textContent = completadas + ' de ' + contarLecciones() + ' disponibles';
    document.querySelector('#estadistica_logros').textContent = calcularLogros(usuario).length;
}

// Solo se dibuja una vez: guardar cambios no modifica estos datos
function mostrarComunidad() {
    const nodoVerTodos = document.querySelector('.actividad-ver-todos');
    const plantilla = document.querySelector('#plantilla-actividad');

    document.querySelector('#cantidad_seguidos').textContent = COMUNIDAD.length;
    document.querySelector('#cantidad_seguidores').textContent = COMUNIDAD.length;

    COMUNIDAD.slice(0, ACTIVIDADES_VISIBLES).forEach(function (persona) {
        const nodo = plantilla.content.cloneNode(true);
        const nodoAvatar = nodo.querySelector('img');

        nodoAvatar.src = '../img/' + persona.avatar;
        nodoAvatar.alt = 'Avatar de ' + persona.usuario;
        nodo.querySelector('h3').textContent = persona.usuario;
        nodo.querySelector('small').textContent = persona.cuando;
        nodo.querySelector('p').textContent = persona.actividad;
        nodo.querySelector('.actividad-feed-premio').textContent = persona.premio;
        nodoVerTodos.before(nodo);
    });
}

function mostrarLogros() {
    const nodoLista = document.querySelector('#lista_logros');
    const plantilla = document.querySelector('#plantilla-logro');
    const logros = calcularLogros(usuario);

    nodoLista.replaceChildren();
    logros.forEach(function (logro) {
        const nodo = plantilla.content.cloneNode(true);
        nodo.querySelector('span').textContent = logro.icono;
        nodo.querySelector('h3').textContent = logro.titulo;
        nodo.querySelector('p').textContent = logro.descripcion;
        nodoLista.appendChild(nodo);
    });

    document.querySelector('#sin_logros').hidden = logros.length > 0;
}

function guardarCambios(e) {
    e.preventDefault();

    const nombre = nodoNombre.value.trim();
    const email = nodoEmail.value.trim();
    const actual = nodoActual.value;
    const nueva = nodoNueva.value;
    const confirmar = nodoConfirmar.value;

    if (!nombre) {
        mostrarError('Ingresá tu nombre.', nodoNombre);
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        mostrarError('Ingresá un correo electrónico válido.', nodoEmail);
        return;
    }
    if (emailOcupado(email)) {
        mostrarError('Ese correo ya está registrado en otra cuenta.', nodoEmail);
        return;
    }

    // La contraseña solo se valida si la persona quiere cambiarla
    const cambiaContraseña = actual || nueva || confirmar;
    if (cambiaContraseña) {
        if (actual !== usuario.contraseña) {
            mostrarError('La contraseña actual no es correcta.', nodoActual);
            return;
        }
        if (nueva.length < 6) {
            mostrarError('La nueva contraseña debe tener al menos 6 caracteres.', nodoNueva);
            return;
        }
        if (nueva !== confirmar) {
            mostrarError('Las contraseñas nuevas no coinciden.', nodoConfirmar);
            return;
        }
    }

    // Se trabaja sobre una copia: si no se puede guardar, la cuenta queda como estaba
    const actualizado = Object.assign({}, usuario, {
        nombre: nombre,
        email: email,
        contraseña: cambiaContraseña ? nueva : usuario.contraseña,
        idiomaInterfaz: nodoIdioma.value
    });

    if (!guardarUsuario(actualizado)) {
        mostrarError('No se pudieron guardar los cambios. Revisá si tu navegador permite almacenamiento.', null);
        return;
    }

    usuario = actualizado;
    nodoActual.value = '';
    nodoNueva.value = '';
    nodoConfirmar.value = '';
    mostrarPerfil();
    actualizarHeader(usuario);
    mostrarPopup('Tus cambios fueron guardados.', 'exito');
}

function emailOcupado(email) {
    const buscado = email.toLowerCase();
    return obtenerUsuarios().some(function (u) {
        return u.usuario !== usuario.usuario && String(u.email).toLowerCase() === buscado;
    });
}

function mostrarError(mensaje, nodoCampo) {
    mostrarPopup(mensaje, 'error', function () {
        if (nodoCampo) nodoCampo.focus();
    });
}
