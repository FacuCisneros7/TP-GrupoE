/* ==========================================================
   sesion.js - Sesión y usuarios (compartido por las vistas internas)

   usuarios  -> array con todas las cuentas
   lw_sesion -> nombre de usuario de quien tiene la sesión abierta
   ========================================================== */

const CLAVE_USUARIOS = 'usuarios';
const CLAVE_SESION = 'usuario_actual';

// Devuelve siempre un array, aunque la clave no exista o esté dañada
function obtenerUsuarios() {
    try {
        const guardados = JSON.parse(localStorage.getItem(CLAVE_USUARIOS));
        return Array.isArray(guardados) ? guardados : [];
    } catch (error) {
        return [];
    }
}

// Devuelve el usuario con sesión abierta.
// Si no hay sesión (o la cuenta ya no existe), redirige al login y devuelve null.
// Uso:  const usuario = requerirSesion('../index.html');
//       if (usuario) { ...armar la vista... }
function requerirSesion(rutaLogin) {
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
function guardarUsuarios(usuarios) {
    try {
        localStorage.setItem(CLAVE_USUARIOS, JSON.stringify(usuarios));
        return true;
    } catch (error) {
        return false;
    }
}

// Reemplaza a UN usuario existente en la lista y la persiste. Devuelve true si se guardó.
function guardarUsuario(usuario) {
    const usuarios = obtenerUsuarios();
    const indice = usuarios.findIndex(function (u) {
        return u.usuario === usuario.usuario;
    });
    if (indice === -1) return false;

    usuarios[indice] = usuario;
    return guardarUsuarios(usuarios);
}

// Quita la sesión pero conserva las cuentas y su progreso
function cerrarSesion() {
    localStorage.removeItem(CLAVE_SESION);
}