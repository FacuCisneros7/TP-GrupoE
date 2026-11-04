import { requerirSesion } from './sesion.js';
import { cargarHeader } from './ui.js';

// Para las páginas que solo necesitan pedir la sesión y mostrar el resumen del header
const usuarioActivo = requerirSesion('../index.html');
if (usuarioActivo) {
    cargarHeader(usuarioActivo);
}
