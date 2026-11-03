import { obtenerLeccion, obtenerEjercicios, obtenerCurso, armarBanco } from './datos.js';
import { requerirSesion } from './sesion.js';
import { obtenerCompletadas, obtenerIdEnCurso, calcularEstado, completarLeccion } from './progreso.js';

const VIDAS_INICIALES = 3;

const nodos = {
    abandonar: document.querySelector('#btn_abandonar'),
    infoCurso: document.querySelector('#info_curso'),
    infoEjercicio: document.querySelector('#info_ejercicio'),
    barra: document.querySelector('#barra_progreso'),
    barraRelleno: document.querySelector('#barra_relleno'),
    vidas: document.querySelector('#vidas'),

    seccionEjercicio: document.querySelector('#seccion_ejercicio'),
    tituloEjercicio: document.querySelector('#titulo_ejercicio'),
    frase: document.querySelector('#frase'),
    elegidas: document.querySelector('#palabras_elegidas'),
    banco: document.querySelector('#palabras_banco'),
    comprobar: document.querySelector('#btn_comprobar'),

    resultadoCorrecto: document.querySelector('#resultado_correcto'),
    continuarCorrecto: document.querySelector('#btn_continuar_correcto'),
    resultadoIncorrecto: document.querySelector('#resultado_incorrecto'),
    detalleIncorrecto: document.querySelector('#detalle_incorrecto'),
    continuarIncorrecto: document.querySelector('#btn_continuar_incorrecto'),

    final: document.querySelector('#seccion_final'),
    finalTitulo: document.querySelector('#final_titulo'),
    finalMensaje: document.querySelector('#final_mensaje'),
    finalErrores: document.querySelector('#final_errores'),
    finalVidas: document.querySelector('#final_vidas'),
    finalXp: document.querySelector('#final_xp'),
    finalGemas: document.querySelector('#final_gemas'),
    finalMapa: document.querySelector('#final_mapa'),
    finalRepetir: document.querySelector('#final_repetir'),

    noDisponible: document.querySelector('#leccion_no_disponible'),
    noDisponibleTitulo: document.querySelector('#no_disponible_titulo'),
    noDisponibleTexto: document.querySelector('#no_disponible_texto'),
    noDisponibleEnlace: document.querySelector('#no_disponible_enlace'),

    dialogo: document.querySelector('#dialogo_abandonar'),
    abandonarSeguir: document.querySelector('#abandonar_seguir'),
    abandonarSalir: document.querySelector('#abandonar_salir')
};

// Secciones del <main> que se muestran y ocultan según el estado
const SECCIONES = [
    nodos.seccionEjercicio,
    nodos.resultadoCorrecto,
    nodos.resultadoIncorrecto,
    nodos.final,
    nodos.noDisponible
];

/* ---------- Estado de la partida ---------- */

let usuario = null;
let cursoId = '';
let leccionId = '';
let leccionDatos = null;
let ejercicios = [];

let indice = 0;            // ejercicio actual
let vidas = VIDAS_INICIALES;
let errores = 0;
let banco = [];            // palabras mezcladas del ejercicio actual
let elegidas = [];         // posiciones del banco, en el orden en que se eligieron
let comprobado = false;    // ya se comprobó la respuesta de este intento
let terminada = false;     // la lección ya finalizó (con éxito o sin vidas)

/* ---------- Arranque ---------- */

const usuarioActivo = requerirSesion('../index.html');
if (usuarioActivo) {
    iniciarLeccion(usuarioActivo);
}

function iniciarLeccion(usuarioInicial) {
    usuario = usuarioInicial;

    // 1. Qué lección se pidió (viaja en la URL: ?leccion=ingles-u2-l2)
    leccionId = new URLSearchParams(window.location.search).get('leccion');
    const encontrada = obtenerLeccion(leccionId);

    if (!encontrada) {
        mostrarNoDisponible('Lección no encontrada', 'La lección que buscás no existe o la dirección es incorrecta.',
            '../dashboard/index.html', 'Volver a Cursos');
        return;
    }

    const unidad = encontrada.unidad;
    leccionDatos = encontrada.leccion;
    cursoId = unidad.cursoId;
    const rutaMapa = '../unidades/unidades.html?id=' + cursoId;

    // 2. Una lección bloqueada no se puede abrir escribiendo su dirección
    const completadas = obtenerCompletadas(usuario, cursoId);
    const idEnCurso = obtenerIdEnCurso(cursoId, completadas);

    if (calcularEstado(leccionId, completadas, idEnCurso) === 'bloqueada') {
        mostrarNoDisponible('Lección bloqueada', 'Completá las lecciones anteriores para desbloquear esta.',
            rutaMapa, 'Volver al mapa');
        return;
    }

    // 3. Ejercicios
    ejercicios = obtenerEjercicios(leccionId);
    if (ejercicios.length === 0) {
        mostrarNoDisponible('Sin ejercicios', 'Esta lección todavía no tiene ejercicios.', rutaMapa, 'Volver al mapa');
        return;
    }

    // 4. Encabezado y enlaces que dependen del curso
    const curso = obtenerCurso(cursoId);
    const nombreCurso = curso ? curso.nombre : cursoId;
    nodos.infoCurso.textContent = nombreCurso + ' · Unidad ' + unidad.numero + ' · Lección ' + leccionDatos.numero;
    document.title = 'Lección ' + leccionDatos.numero + ': ' + leccionDatos.titulo;

    nodos.abandonar.href = rutaMapa;
    nodos.abandonarSalir.href = rutaMapa;
    nodos.finalMapa.href = rutaMapa;

    // 5. Eventos
    nodos.comprobar.addEventListener('click', comprobar);
    nodos.continuarCorrecto.addEventListener('click', siguienteEjercicio);
    nodos.continuarIncorrecto.addEventListener('click', continuarTrasError);
    nodos.finalRepetir.addEventListener('click', function () {
        window.location.reload();
    });

    // Abandonar: si la lección no terminó, se avisa que el avance no queda guardado
    nodos.abandonar.addEventListener('click', function (e) {
        if (terminada) return;
        e.preventDefault();
        nodos.dialogo.showModal();
    });
    nodos.abandonarSeguir.addEventListener('click', function () {
        nodos.dialogo.close();
    });

    // 6. Primer ejercicio
    actualizarVidas();
    mostrarEjercicio();
}

/* ---------- Ejercicio ---------- */

// Prepara un ejercicio nuevo: mezcla el banco y empieza un intento limpio
function mostrarEjercicio() {
    const ejercicio = ejercicios[indice];

    banco = armarBanco(ejercicio);
    nodos.frase.textContent = '"' + ejercicio.frase + '"';
    nodos.infoEjercicio.textContent = 'Ejercicio ' + (indice + 1) + ' de ' + ejercicios.length;
    actualizarProgreso(indice);

    prepararIntento();
}

// Intento limpio del mismo ejercicio (sin volver a mezclar el banco)
function prepararIntento() {
    elegidas = [];
    comprobado = false;
    nodos.tituloEjercicio.textContent = 'Traduce esta frase';
    mostrarSecciones([nodos.seccionEjercicio]);
    dibujarPalabras(null);
}

// Dibuja la respuesta armada y el banco. "foco" indica a qué palabra devolverle el foco
// (al reconstruir los botones se pierde, y con teclado eso desorienta).
function dibujarPalabras(foco) {
    let nodoFoco = null;

    nodos.elegidas.replaceChildren();
    nodos.banco.replaceChildren();

    // Palabras ya elegidas: tocar una la devuelve al banco
    elegidas.forEach(function (posicion, orden) {
        const nodo = crearPalabra(banco[posicion], 'hueco');
        nodo.addEventListener('click', function () {
            quitarPalabra(orden);
        });
        nodos.elegidas.appendChild(nodo);

        if (foco && foco.zona === 'elegidas' && foco.orden === orden) nodoFoco = nodo;
    });

    // Banco: las palabras ya usadas quedan deshabilitadas
    banco.forEach(function (palabra, posicion) {
        const usada = elegidas.includes(posicion);
        const nodo = crearPalabra(palabra, usada ? 'elegida' : 'disponible');

        if (usada) {
            nodo.disabled = true;
        } else {
            nodo.addEventListener('click', function () {
                elegirPalabra(posicion);
            });
        }
        nodos.banco.appendChild(nodo);

        if (foco && foco.zona === 'banco' && foco.posicion === posicion) nodoFoco = nodo;
    });

    nodos.comprobar.disabled = elegidas.length === 0;
    if (nodoFoco) nodoFoco.focus();
}

function crearPalabra(texto, clase) {
    const nodo = document.createElement('button');
    nodo.type = 'button';
    nodo.className = clase;
    nodo.textContent = texto;
    return nodo;
}

// Las palabras se identifican por su POSICIÓN en el banco, no por su texto,
// así funciona aunque una frase repita una palabra.
function elegirPalabra(posicion) {
    if (comprobado) return;
    elegidas.push(posicion);
    dibujarPalabras({ zona: 'elegidas', orden: elegidas.length - 1 });
}

function quitarPalabra(orden) {
    if (comprobado) return;
    const posicion = elegidas[orden];
    elegidas.splice(orden, 1);
    dibujarPalabras({ zona: 'banco', posicion: posicion });
}

/* ---------- Comprobación ---------- */

function comprobar() {
    if (comprobado || elegidas.length === 0) return;
    comprobado = true;

    const respuesta = ejercicios[indice].respuesta;
    const seleccion = elegidas.map(function (posicion) { return banco[posicion]; });
    const bienUbicadas = seleccion.filter(function (palabra, i) { return palabra === respuesta[i]; }).length;
    const correcta = seleccion.length === respuesta.length && bienUbicadas === respuesta.length;

    nodos.tituloEjercicio.textContent = 'Resultado';
    nodos.comprobar.disabled = true;
    marcarPalabras(respuesta);

    if (correcta) {
        actualizarProgreso(indice + 1);
        mostrarSecciones([nodos.seccionEjercicio, nodos.resultadoCorrecto]);
        nodos.continuarCorrecto.focus();
        return;
    }

    vidas--;
    errores++;
    actualizarVidas();

    if (vidas === 0) {
        nodos.detalleIncorrecto.textContent = 'Te quedaste sin vidas. La respuesta era: ' + respuesta.join(' ') + '.';
        nodos.continuarIncorrecto.textContent = 'Ver resultado';
    } else {
        nodos.detalleIncorrecto.textContent = 'Tenías ' + bienUbicadas + ' de ' + respuesta.length +
            ' palabras bien ubicadas. Te quedan ' + vidas + (vidas === 1 ? ' vida' : ' vidas') +
            '. Revisá las palabras marcadas e intentá de nuevo.';
        nodos.continuarIncorrecto.textContent = 'Intentar de nuevo';
    }

    mostrarSecciones([nodos.seccionEjercicio, nodos.resultadoIncorrecto]);
    nodos.continuarIncorrecto.focus();
}

// Marca cada palabra de la respuesta como correcta o incorrecta (con texto para lectores de pantalla)
function marcarPalabras(respuesta) {
    Array.from(nodos.elegidas.children).forEach(function (nodo, i) {
        const acierto = nodo.textContent === respuesta[i];
        nodo.className = acierto ? 'palabra_correcta' : 'palabra_incorrecta';
        nodo.setAttribute('aria-label', nodo.textContent + (acierto ? ': correcta' : ': incorrecta'));
        nodo.disabled = true;
    });

    Array.from(nodos.banco.children).forEach(function (nodo) {
        nodo.disabled = true;
    });
}

function siguienteEjercicio() {
    indice++;
    if (indice >= ejercicios.length) {
        finalizar(true);
    } else {
        mostrarEjercicio();
    }
}

function continuarTrasError() {
    if (vidas === 0) {
        finalizar(false);
    } else {
        prepararIntento();
    }
}

/* ---------- Final ---------- */

function finalizar(exito) {
    terminada = true;
    mostrarSecciones([nodos.final]);

    nodos.finalErrores.textContent = errores;
    nodos.finalVidas.textContent = vidas;

    if (exito) {
        actualizarProgreso(ejercicios.length);
        const resultado = completarLeccion(usuario, cursoId, leccionId, errores);

        let mensaje = 'Terminaste "' + leccionDatos.titulo + '".';
        if (resultado.yaCompletada) {
            mensaje += ' Ya la habías completado antes, por eso no suma experiencia nueva.';
        }
        if (!resultado.guardado) {
            mensaje += ' No se pudo guardar el avance en tu navegador.';
        }

        nodos.finalTitulo.textContent = '¡Lección completada!';
        nodos.finalMensaje.textContent = mensaje;
        nodos.finalXp.textContent = '+' + resultado.xp + ' XP';
        nodos.finalGemas.textContent = '+' + resultado.gemas + ' gemas';
        nodos.finalRepetir.hidden = true;
    } else {
        nodos.finalTitulo.textContent = 'Te quedaste sin vidas';
        nodos.finalMensaje.textContent = 'Esta vez el avance no se guardó. Podés intentarlo de nuevo cuando quieras.';
        nodos.finalXp.textContent = '+0 XP';
        nodos.finalGemas.textContent = '+0 gemas';
        nodos.finalRepetir.hidden = false;
    }

    nodos.finalTitulo.focus();
}

function mostrarSecciones(visibles) {
    SECCIONES.forEach(function (seccion) {
        seccion.hidden = !visibles.includes(seccion);
    });
}

function mostrarNoDisponible(titulo, texto, rutaEnlace, textoEnlace) {
    nodos.noDisponibleTitulo.textContent = titulo;
    nodos.noDisponibleTexto.textContent = texto;
    nodos.noDisponibleEnlace.href = rutaEnlace;
    nodos.noDisponibleEnlace.textContent = textoEnlace;
    document.title = titulo;
    mostrarSecciones([nodos.noDisponible]);
}

// Barra de progreso: "hechos" = ejercicios resueltos hasta ahora
function actualizarProgreso(hechos) {
    const porcentaje = Math.round((hechos / ejercicios.length) * 100);
    nodos.barraRelleno.style.width = porcentaje + '%';
    nodos.barra.setAttribute('aria-valuenow', porcentaje);
}

function actualizarVidas() {
    const perdidas = VIDAS_INICIALES - vidas;
    nodos.vidas.textContent = 'Vidas: ' + '❤️'.repeat(vidas) + '🖤'.repeat(perdidas);
    nodos.vidas.setAttribute('aria-label', 'Te quedan ' + vidas + ' de ' + VIDAS_INICIALES + ' vidas');
}