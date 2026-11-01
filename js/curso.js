
const nodoMapa = document.querySelector('.main');
const plantillaUnidad = document.querySelector('#plantilla-unidad');
const plantillaLeccion = document.querySelector('#plantilla-leccion');

// Ícono, texto alternativo y texto visible de cada estado
const ESTADOS = {
    'completada': { src: '../img/completado.webp', alt: 'completado', texto: 'Completado' },
    'en-curso':   { src: '../img/en_curso.webp',   alt: 'en curso',   texto: 'En curso' },
    'bloqueada':  { src: '../img/candado.webp',    alt: 'bloqueado',  texto: 'Bloqueado' }
};

const usuarioActivo = requerirSesion('../index.html');
if (usuarioActivo) {
    mostrarCurso(usuarioActivo);
}

function mostrarCurso(usuario) {
    // 1. Qué curso se pidió (viaja en la URL: ?curso=ingles)
    const url = new URL(window.location.href);
    const cursoId = url.searchParams.get('id');

    const curso = obtenerCurso(cursoId);
    const unidades = obtenerUnidadesDeCurso(cursoId);

    if (!curso || unidades.length === 0) {
        mostrarCursoNoEncontrado();
        return;
    }

    // 2. Encabezado
    document.querySelector('#idioma').textContent = 'Curso: ' + curso.nombre;
    document.title = 'Mapa de unidades - ' + curso.nombre;

    // 3. Qué lecciones completó ESTA persona y cuál es la que sigue
    const completadas = obtenerCompletadas(usuario, cursoId);
    const primeraPendiente = obtenerLeccionesDeCurso(cursoId).find(function (leccion) {
        return !completadas.includes(leccion.id);
    });
    const idEnCurso = primeraPendiente ? primeraPendiente.id : null;

    // 4. Una unidad por cada elemento de los datos
    unidades.forEach(function (unidad) {
        nodoMapa.appendChild(crearUnidad(unidad, completadas, idEnCurso));
    });
}

/* ---------- Estado de las lecciones ---------- */

// Lecciones completadas del curso. Si la cuenta no tiene progreso guardado, es una lista vacía.
function obtenerCompletadas(usuario, cursoId) {
    const progreso = usuario.progreso && usuario.progreso[cursoId];
    return progreso && Array.isArray(progreso.completadas) ? progreso.completadas : [];
}

// 'completada' | 'en-curso' | 'bloqueada'
// La primera lección sin completar queda "en curso"; las siguientes, bloqueadas.
function calcularEstado(leccionId, completadas, idEnCurso) {
    if (completadas.includes(leccionId)) return 'completada';
    if (leccionId === idEnCurso) return 'en-curso';
    return 'bloqueada';
}

/* ---------- Construcción de la vista ---------- */

function crearUnidad(unidad, completadas, idEnCurso) {
    const nodo = plantillaUnidad.content.cloneNode(true);

    // Clase unidad-1, unidad-2... para conservar los estilos de cada una
    nodo.querySelector('.unidad').classList.add('unidad-' + unidad.numero);
    nodo.querySelector('.unidad_icono').textContent = unidad.icono;
    nodo.querySelector('h2').textContent = 'Unidad ' + unidad.numero + ': ' + unidad.titulo;
    nodo.querySelector('.unidad_descripcion').textContent = unidad.descripcion;

    // Progreso de la unidad
    const total = unidad.lecciones.length;
    const hechas = unidad.lecciones.filter(function (leccion) {
        return completadas.includes(leccion.id);
    }).length;

    const nodoProgreso = nodo.querySelector('progress');
    nodoProgreso.max = total;
    nodoProgreso.value = hechas;
    nodoProgreso.textContent = hechas + ' de ' + total;
    nodo.querySelector('.unidad_progreso span').textContent = hechas + ' de ' + total + ' lecciones';

    // Tarjetas de lección
    const nodoLista = nodo.querySelector('.lista_lecciones');
    unidad.lecciones.forEach(function (leccion) {
        const estado = calcularEstado(leccion.id, completadas, idEnCurso);
        nodoLista.appendChild(crearLeccion(leccion, estado));
    });

    return nodo;
}

function crearLeccion(leccion, estado) {
    const nodo = plantillaLeccion.content.cloneNode(true);
    const datosEstado = ESTADOS[estado];

    const nodoImagen = nodo.querySelector('.estado');
    nodoImagen.src = datosEstado.src;
    nodoImagen.alt = datosEstado.alt;

    nodo.querySelector('h3').textContent = 'Lección ' + leccion.numero;
    nodo.querySelector('.titulo_leccion').textContent = leccion.titulo;

    const nodoEstadoTexto = nodo.querySelector('.estado_texto');
    nodoEstadoTexto.textContent = 'Estado: ' + datosEstado.texto;

    // Lista de temas
    const nodoTemas = nodo.querySelector('.temas ul');
    leccion.temas.forEach(function (tema) {
        const nodoTema = document.createElement('li');
        nodoTema.textContent = tema;
        nodoTemas.appendChild(nodoTema);
    });

    // Botón según el estado
    const nodoBoton = nodo.querySelector('.btn');

    if (estado === 'bloqueada') {
        nodo.querySelector('.tarjeta_leccion').classList.add('bloqueada');
        nodoEstadoTexto.textContent += '. Completá las lecciones anteriores para desbloquearla.';
        nodoBoton.remove();
    } else {
        const accion = estado === 'completada' ? 'Repetir' : 'Iniciar';
        nodoBoton.href = '../leccion/index.html?leccion=' + leccion.id;
        nodoBoton.textContent = accion;
        // Hay varios botones iguales en la página: el aria-label dice cuál es cada uno
        nodoBoton.setAttribute('aria-label', accion + ' la lección ' + leccion.numero + ': ' + leccion.titulo);
    }

    return nodo;
}

function mostrarCursoNoEncontrado() {
    document.querySelector('#curso').textContent = 'Curso no encontrado';
    document.title = 'Curso no encontrado';
    document.querySelector('#curso_no_encontrado').hidden = false;
}