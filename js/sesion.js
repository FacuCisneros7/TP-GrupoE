
export const CLAVE_USUARIOS = 'usuarios';
export const CLAVE_SESION = 'usuario_actual';

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
export function guardarUsuario(usuario, usuarioAnterior) {
    const usuarios = obtenerUsuarios();

    const usuarioBuscado = usuarioAnterior || usuario.usuario;
    const indice = usuarios.findIndex(function (u) {
        return u.usuario === usuarioBuscado;
    });
    if (indice === -1) {
        return false;
    }

    usuarios[indice] = usuario;
    return guardarUsuarios(usuarios);
}

// Quita la sesión pero conserva las cuentas y su progreso
export function cerrarSesion() {
    localStorage.removeItem(CLAVE_SESION);
}

//Elimina solamente la cuenta que tiene la sesión activa
export function eliminarUsuarioActual() {
    const usuarioActual = localStorage.getItem(CLAVE_SESION);

    if (!usuarioActual) {
        return false;
    }

    const usuarios = obtenerUsuarios();

    const usuariosRestantes = usuarios.filter(function (usuario) {
        return usuario.usuario !== usuarioActual;
    });

    if (usuariosRestantes.length === usuarios.length) {
        return false;
    }

    const guardado = guardarUsuarios(usuariosRestantes);

    if (!guardado) {
        return false;
    }

    cerrarSesion();

    return true;
}