import { CURSOS, obtenerLeccionesDeCurso, obtenerEjercicios } from './datos.js';
import { guardarUsuario } from './sesion.js';

const XP_POR_EJERCICIO = 10;
const XP_BONUS_SIN_ERRORES = 5;
const GEMAS_POR_LECCION = 5;
const GEMAS_BONUS_SIN_ERRORES = 5;

// Ids de las lecciones completadas del curso. Si la cuenta no tiene progreso, es una lista vacía.
export function obtenerCompletadas(usuario, cursoId) {
    const progreso = usuario.progreso && usuario.progreso[cursoId];
    return progreso && Array.isArray(progreso.completadas) ? progreso.completadas : [];
}

// Id de la lección "en curso": la primera del curso que todavía no se completó.
// Devuelve null si ya están todas completadas.
export function obtenerIdEnCurso(cursoId, completadas) {
    const pendiente = obtenerLeccionesDeCurso(cursoId).find(function (leccion) {
        return !completadas.includes(leccion.id);
    });
    return pendiente ? pendiente.id : null;
}

// 'completada' | 'en-curso' | 'bloqueada'
export function calcularEstado(leccionId, completadas, idEnCurso) {
    if (completadas.includes(leccionId)) return 'completada';
    if (leccionId === idEnCurso) return 'en-curso';
    return 'bloqueada';
}

// Porcentaje (0 a 100) de lecciones completadas del curso
export function porcentajeCurso(usuario, cursoId) {
    const total = obtenerLeccionesDeCurso(cursoId).length;
    if (total === 0) return 0;
    return Math.round((obtenerCompletadas(usuario, cursoId).length / total) * 100);
}

// Fecha local de hoy como texto: '2026-11-02'
function fechaHoy() {
    const hoy = new Date();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');
    return hoy.getFullYear() + '-' + mes + '-' + dia;
}

// Días de diferencia entre dos fechas 'AAAA-MM-DD'
function diasEntre(desde, hasta) {
    const a = desde.slice(0, 10).split('-').map(Number);
    const b = hasta.slice(0, 10).split('-').map(Number);
    const msPorDia = 24 * 60 * 60 * 1000;
    return Math.round((Date.UTC(b[0], b[1] - 1, b[2]) - Date.UTC(a[0], a[1] - 1, a[2])) / msPorDia);
}

// XP doble: el canje guarda hasta qué hora dura
export function xpDobleActivo(usuario) {
    return Date.now() < (usuario.xpDobleHasta || 0);
}

// Experiencia ganada hoy. Si la última actividad fue otro día, todavía no ganó nada hoy.
export function obtenerXpHoy(usuario) {
    const ultima = usuario.ultimaActividad ? String(usuario.ultimaActividad).slice(0, 10) : null;
    return ultima === fechaHoy() ? (usuario.xpHoy || 0) : 0;
}

// Racha vigente: si pasó más de un día sin actividad, ya se cortó
export function obtenerRacha(usuario) {
    if (!usuario.ultimaActividad) return 0;
    return diasEntre(String(usuario.ultimaActividad), fechaHoy()) <= 1 ? (usuario.racha || 0) : 0;
}

// Cantidad de lecciones completadas sumando todos los cursos
export function contarCompletadas(usuario) {
    let total = 0;
    CURSOS.forEach(function (curso) {
        total += obtenerCompletadas(usuario, curso.id).length;
    });
    return total;
}

// Cantidad de lecciones disponibles sumando todos los cursos
export function contarLecciones() {
    let total = 0;
    CURSOS.forEach(function (curso) {
        total += obtenerLeccionesDeCurso(curso.id).length;
    });
    return total;
}

// Logros que ya consiguió la cuenta, calculados a partir de su progreso
export function calcularLogros(usuario) {
    const lecciones = contarCompletadas(usuario);
    const cursoCompleto = CURSOS.some(function (curso) {
        return porcentajeCurso(usuario, curso.id) === 100;
    });

    const logros = [
        { icono: '📚', titulo: 'Primera lección', descripcion: 'Completaste tu primera lección.', logrado: lecciones >= 1 },
        { icono: '🏆', titulo: 'Cinco lecciones', descripcion: 'Completaste cinco lecciones.', logrado: lecciones >= 5 },
        { icono: '⚡', titulo: 'Experiencia acumulada', descripcion: 'Superaste los 100 XP en la plataforma.', logrado: (usuario.xp || 0) >= 100 },
        { icono: '🎓', titulo: 'Curso completo', descripcion: 'Completaste todas las lecciones de un curso.', logrado: cursoCompleto }
    ];

    return logros.filter(function (logro) {
        return logro.logrado;
    });
}

// Suma experiencia y actualiza la racha del usuario (no lo guarda: lo hace quien la llama)
function registrarActividad(usuario, xp) {
    const hoy = fechaHoy();
    const ultima = usuario.ultimaActividad ? String(usuario.ultimaActividad).slice(0, 10) : null;

    if (ultima !== hoy) {
        // Primer día de actividad, o un día nuevo: la racha sigue si el último día fue ayer
        usuario.racha = ultima && diasEntre(ultima, hoy) === 1 ? (usuario.racha || 0) + 1 : 1;
        usuario.xpHoy = 0;
        usuario.ultimaActividad = hoy;
    }

    usuario.xp = (usuario.xp || 0) + xp;
    usuario.xpHoy = (usuario.xpHoy || 0) + xp;
    usuario.xpSemanal = (usuario.xpSemanal || 0) + xp;
}

// Registra que el usuario terminó una lección y guarda todo.
// Devuelve { xp, yaCompletada, guardado }.
// Si la lección ya estaba completada, se puede repetir pero no suma experiencia nueva.
export function completarLeccion(usuario, cursoId, leccionId, errores) {
    if (!usuario.progreso) usuario.progreso = {};
    if (!usuario.progreso[cursoId]) usuario.progreso[cursoId] = { completadas: [], resultados: {} };

    const progreso = usuario.progreso[cursoId];
    if (!Array.isArray(progreso.completadas)) progreso.completadas = [];
    if (!progreso.resultados) progreso.resultados = {};

    const yaCompletada = progreso.completadas.includes(leccionId);

    let xp = 0;
    let gemas = 0;

    if (!yaCompletada) {
        const cantidad = obtenerEjercicios(leccionId).length;
        xp = cantidad * XP_POR_EJERCICIO + (errores === 0 ? XP_BONUS_SIN_ERRORES : 0);
        if (xpDobleActivo(usuario)) xp *= 2;
        gemas = GEMAS_POR_LECCION + (errores === 0 ? GEMAS_BONUS_SIN_ERRORES : 0);
        progreso.completadas.push(leccionId);
        progreso.resultados[leccionId] = { xp: xp, gemas: gemas, errores: errores };
        usuario.gemas = (usuario.gemas || 0) + gemas;
    }

    registrarActividad(usuario, xp);
    const guardado = guardarUsuario(usuario);

    return { xp: xp, gemas: gemas, yaCompletada: yaCompletada, guardado: guardado };
}