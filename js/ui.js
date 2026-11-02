
// Muestra un mensaje en un nodo. tipo: 'error' | 'exito'
// El prefijo en texto hace que el mensaje no dependa solo del color.
export function mostrarMensaje(nodo, texto, tipo) {
    const prefijo = tipo === 'error' ? 'Error: ' : 'Listo: ';
    nodo.textContent = prefijo + texto;
    nodo.className = 'mensaje mensaje-' + tipo;
    nodo.hidden = false;
}

export function ocultarMensaje(nodo) {
    nodo.textContent = '';
    nodo.hidden = true;
}

// Quita la marca de error de todos los campos del formulario
export function limpiarErrores(formulario) {
    formulario.querySelectorAll('input').forEach(function (input) {
        input.removeAttribute('aria-invalid');
    });
}

// Marca un campo como inválido y le da el foco
export function marcarInvalido(input) {
    if (!input) return;
    input.setAttribute('aria-invalid', 'true');
    input.focus();
}

// Muestra un popup (modal) con un título y un texto. tipo: 'error' | 'exito'
// alCerrar (opcional): función que se ejecuta cuando la persona cierra el popup.
// El <dialog> se crea la primera vez, así no hace falta escribirlo en cada HTML.
export function mostrarPopup(texto, tipo, alCerrar) {
    let dialogo = document.querySelector('#popup');

    if (!dialogo) {
        dialogo = document.createElement('dialog');
        dialogo.id = 'popup';
        dialogo.setAttribute('aria-labelledby', 'popup-titulo');
        dialogo.innerHTML =
            '<h2 id="popup-titulo"></h2>' +
            '<p id="popup-texto"></p>' +
            '<button type="button" class="btn" id="popup-cerrar">Aceptar</button>';
        document.body.appendChild(dialogo);

        dialogo.querySelector('#popup-cerrar').addEventListener('click', function () {
            dialogo.close();
        });
    }

    // El título en texto hace que el mensaje no dependa solo del color
    dialogo.querySelector('#popup-titulo').textContent = tipo === 'error' ? 'Error' : 'Listo';
    dialogo.querySelector('#popup-texto').textContent = texto;
    dialogo.className = 'popup-' + tipo;

    // onclose se pisa en cada llamada, así no se acumulan funciones viejas
    dialogo.onclose = alCerrar || null;

    dialogo.showModal();
}