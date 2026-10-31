const CLAVE_USUARIOS = 'usuarios';

const formulario = document.querySelector('#formulario_registro');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const nodoUsuario = document.querySelector('#usuario');
    const nodoEmail = document.querySelector('#email');
    const nodoPassword = document.querySelector('#password');
    const nodoConfirmPassword = document.querySelector('#confirm_password');

    const valorUsuario = nodoUsuario.value.trim();
    const valorEmail = nodoEmail.value.trim();
    const valorContraseña = nodoPassword.value;
    const valorConfirmPassword = nodoConfirmPassword.value;

    // Se valida de a un campo; al primer error: popup, foco y corte
    const errorUsuario = verificarUsuario(valorUsuario);
    if (errorUsuario) {
        mostrarError(errorUsuario, nodoUsuario);
        return;
    }

    const errorEmail = verificarEmail(valorEmail);
    if (errorEmail) {
        mostrarError(errorEmail, nodoEmail);
        return;
    }

    const errorPassword = verificarPassword(valorContraseña);
    if (errorPassword) {
        mostrarError(errorPassword, nodoPassword);
        return;
    }

    const errorConfirmacion = verificarAmbasContraseñas(valorContraseña, valorConfirmPassword);
    if (errorConfirmacion) {
        mostrarError(errorConfirmacion, nodoConfirmPassword);
        return;
    }

    // Todo válido: se agrega la cuenta a la lista y se guarda
    const usuarios = obtenerUsuariosGuardados();
    usuarios.push(crearUsuario(valorUsuario, valorEmail, valorContraseña));

    try {
        localStorage.setItem(CLAVE_USUARIOS, JSON.stringify(usuarios));
    } catch (error) {
        mostrarError('No se pudo guardar la cuenta. Revisá si tu navegador permite almacenamiento.', null);
        return;
    }

    mostrarPopup('Tu cuenta fue creada. Ya podés iniciar sesión.', 'exito', function () {
        window.location.href = '../../dashboard/index.html';
    });
});

/* ---------- Validaciones (devuelven un texto de error, o null si está bien) ---------- */

function verificarUsuario(usuario) {
    if (!usuario) {
        return 'Ingresá un nombre de usuario.';
    }
    if (!/^[a-zA-Z0-9_]{3,20}$/.test(usuario)) {
        return 'El usuario debe tener entre 3 y 20 caracteres (letras, números o guion bajo).';
    }
    if (existeUsuarioOEmail(usuario)) {
        return 'Ese nombre de usuario ya está ocupado.';
    }
    return null;
}

function verificarEmail(email) {
    if (!email) {
        return 'Ingresá tu correo electrónico.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return 'Ingresá un correo electrónico válido.';
    }
    if (existeUsuarioOEmail(email)) {
        return 'Ese correo ya está registrado.';
    }
    return null;
}

function verificarPassword(password) {
    if (!password) {
        return 'Ingresá una contraseña.';
    }
    if (password.length < 6) {
        return 'La contraseña debe tener al menos 6 caracteres.';
    }
    return null;
}

function verificarAmbasContraseñas(passwordOne, passwordTwo) {
    if (!passwordTwo) {
        return 'Repetí la contraseña para confirmarla.';
    }
    if (passwordOne !== passwordTwo) {
        return 'Las contraseñas no coinciden.';
    }
    return null;
}

/* ---------- Acceso a localStorage ---------- */

// Devuelve siempre un array, aunque la clave no exista o esté dañada
function obtenerUsuariosGuardados() {
    try {
        const guardados = JSON.parse(localStorage.getItem(CLAVE_USUARIOS));
        return Array.isArray(guardados) ? guardados : [];
    } catch (error) {
        return [];
    }
}

// true si ya hay una cuenta con ese usuario o ese email (sin distinguir mayúsculas)
function existeUsuarioOEmail(valor) {
    const buscado = valor.toLowerCase();
    return obtenerUsuariosGuardados().some(function (u) {
        return String(u.usuario).toLowerCase() === buscado ||
                String(u.email).toLowerCase() === buscado;
    });
}

// Cuenta completa, con todo lo que van a necesitar las otras vistas
function crearUsuario(usuario, email, password) {
    return {
        usuario: usuario,
        nombre: usuario,
        email: email,
        contraseña: password,
        avatar: '',
        fechaAlta: new Date().toISOString(),
        xp: 0,
        xpHoy: 0,
        xpSemanal: 0,
        racha: 0,
        ultimaActividad: null,
        metaDiaria: 50,
        monedas: 0,
        liga: 'bronce',
        idiomaInterfaz: 'es',
        logros: [],
        inventario: [],
        progreso: {
            ingles: { completadas: [], resultados: {} },
            aleman: { completadas: [], resultados: {} },
            chino:  { completadas: [], resultados: {} }
        }
    };
}

/* ---------- Auxiliar ---------- */

// Popup de error y, al cerrarlo, foco en el campo con el problema.
// Si no usás ui.js, reemplazá mostrarPopup(...) por alert(mensaje).
function mostrarError(mensaje, nodoCampo) {
    mostrarPopup(mensaje, 'error', function () {
        if (nodoCampo) nodoCampo.focus();
    });
}