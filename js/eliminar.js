import { requerirSesion, obtenerUsuarios, guardarUsuarios, obtenerOpiniones, guardarOpiniones, cerrarSesion } from './sesion.js';
import { cargarHeader, mostrarPopup } from './ui.js';

const usuarioActivo = requerirSesion('../index.html');

if (usuarioActivo) {
    cargarHeader(usuarioActivo);

    // El enlace lleva a eliminado.html; antes se borra la cuenta
    document.querySelector('#confirmar_eliminar').addEventListener('click', function (e) {
        const restantes = obtenerUsuarios().filter(function (u) {
            return u.usuario !== usuarioActivo.usuario;
        });

        if (!guardarUsuarios(restantes)) {
            e.preventDefault();
            mostrarPopup('No se pudo eliminar la cuenta. Intentá de nuevo.', 'error');
            return;
        }

        const opiniones = obtenerOpiniones().filter(function (opinion) {
            return opinion.usuario !== usuarioActivo.usuario;
        });
        guardarOpiniones(opiniones);
        cerrarSesion();
    });
}
