
export const CLAVE_USUARIOS = 'usuarios';
export const CLAVE_SESION = 'usuario_actual';
export const CLAVE_OPINIONES = 'opiniones';

// Devuelve siempre un array, aunque la clave no exista o esté dañada
export function obtenerUsuarios() {
    try {
        const guardados = JSON.parse(localStorage.getItem(CLAVE_USUARIOS));
        return Array.isArray(guardados) ? guardados : [];
    } catch (error) {
        return [];
    }
}

// Devuelve el usuario con sesión abierta.
export function requerirSesion(rutaLogin) {
    const id = localStorage.getItem(CLAVE_SESION);

    const usuario = obtenerUsuarios().find(function (u) {
        return u.usuario === id;
    }) || null;

    if (!usuario) {
        window.location.replace(rutaLogin);
        return null;
    }
    return usuario;
}

// Guarda la lista completa de usuarios. Devuelve true si se guardó.
export function guardarUsuarios(usuarios) {
    try {
        localStorage.setItem(CLAVE_USUARIOS, JSON.stringify(usuarios));
        return true;
    } catch (error) {
        return false;
    }
}

// Reemplaza a UN usuario existente en la lista y la persiste. Devuelve true si se guardó.
export function guardarUsuario(usuario) {
    const usuarios = obtenerUsuarios();
    const indice = usuarios.findIndex(function (u) {
        return u.usuario === usuario.usuario;
    });
    if (indice === -1) return false;

    usuarios[indice] = usuario;
    return guardarUsuarios(usuarios);
}

// Quita la sesión pero conserva las cuentas y su progreso
export function cerrarSesion() {
    localStorage.removeItem(CLAVE_SESION);
}

// Opiniones de todos los cursos. Cada una guarda su curso y quién la publicó.
export function obtenerOpiniones() {
    try {
        const guardadas = JSON.parse(localStorage.getItem(CLAVE_OPINIONES));
        return Array.isArray(guardadas) ? guardadas : [];
    } catch (error) {
        return [];
    }
}

// Guarda la lista completa de opiniones. Devuelve true si se guardó.
export function guardarOpiniones(opiniones) {
    try {
        localStorage.setItem(CLAVE_OPINIONES, JSON.stringify(opiniones));
        return true;
    } catch (error) {
        return false;
    }
}
