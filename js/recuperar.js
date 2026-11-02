import { mostrarPopup } from './ui.js';
import { obtenerUsuarios } from './sesion.js';

const formulario = document.querySelector('#formulario_recuperar');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const nodoEmail = document.querySelector('#email');
    const valorEmail = nodoEmail.value.trim();

    const errorEmail = verificarEmail(valorEmail);
    if (errorEmail) {
        mostrarError(errorEmail, nodoEmail);
        return;
    }

    // No hay servidor: el "envío" es simulado. Se avisa y, al cerrar el popup, se vuelve al login.
    mostrarPopup('Te enviamos las instrucciones para restablecer tu contraseña a ' + valorEmail + '.', 'exito', function () {
        window.location.href = '../index.html';
    });
});

function verificarEmail(email) {
    if (!email) {
        return 'Ingresá el correo asociado a tu cuenta.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return 'Ingresá un correo electrónico válido.';
    }
    if (!existeEmail(email)) {
        return 'No encontramos una cuenta con ese correo. Revisá que esté bien escrito.';
    }
    return null;
}

function existeEmail(email) {
    const buscado = email.toLowerCase();
    return obtenerUsuarios().some(function (u) {
        return String(u.email).toLowerCase() === buscado;
    });
}

function mostrarError(mensaje, nodoCampo) {
    mostrarPopup(mensaje, 'error', function () {
        if (nodoCampo) nodoCampo.focus();
    });
}