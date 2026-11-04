import { PRODUCTOS } from './datos.js';
import { requerirSesion, guardarUsuario } from './sesion.js';
import { cargarHeader, actualizarHeader, mostrarPopup } from './ui.js';
import { obtenerRacha, obtenerXpHoy, xpDobleActivo } from './progreso.js';

const DURACION_XP_DOBLE = 15 * 60 * 1000;   // 15 minutos, en milisegundos

const nodoFiltro = document.querySelector('#filtro_productos');
const nodoLista = document.querySelector('#lista_productos');
const plantilla = document.querySelector('#plantilla-producto');

let usuario = requerirSesion('../index.html');
if (usuario) {
    cargarHeader(usuario);
    mostrarRacha();
    mostrarTienda();
    nodoFiltro.addEventListener('change', mostrarTienda);
}

function mostrarRacha() {
    const racha = obtenerRacha(usuario);

    document.querySelector('#tienda_racha').textContent = 'Tu racha: ' + racha + (racha === 1 ? ' día' : ' días');
    document.querySelector('#tienda_meta').textContent = 'Meta de hoy: ' + obtenerXpHoy(usuario) + ' de ' + (usuario.metaDiaria || 50) + ' XP';
}

function mostrarTienda() {
    document.querySelector('#saldo').textContent = 'Tu saldo: 💎 ' + (usuario.gemas || 0);

    const visibles = PRODUCTOS.filter(function (producto) {
        return nodoFiltro.value === 'todos' || producto.categoria === nodoFiltro.value;
    });

    nodoLista.replaceChildren();
    visibles.forEach(function (producto) {
        nodoLista.appendChild(crearProducto(producto));
    });
}

function crearProducto(producto) {
    const nodo = plantilla.content.cloneNode(true);

    const cantidad = (usuario.inventario || []).filter(function (id) {
        return id === producto.id;
    }).length;

    nodo.querySelector('.tienda-icono').textContent = producto.icono;
    nodo.querySelector('.tienda-nombre').textContent = producto.nombre;
    nodo.querySelector('p').textContent = producto.descripcion;

    const nodoEstado = nodo.querySelector('.tienda-estado');
    const activo = producto.id === 'xp-doble' && xpDobleActivo(usuario);
    nodoEstado.textContent = activo ? 'Activo' : 'Tenés ' + cantidad;
    nodoEstado.hidden = !activo && cantidad === 0;

    const nodoBoton = nodo.querySelector('.tienda-boton');
    nodoBoton.textContent = '💎 ' + producto.precio;
    nodoBoton.setAttribute('aria-label', 'Canjear ' + producto.nombre + ' por ' + producto.precio + ' gemas');
    nodoBoton.addEventListener('click', function () {
        canjear(producto);
    });

    return nodo;
}

function canjear(producto) {
    const gemas = usuario.gemas || 0;

    if (gemas < producto.precio) {
        mostrarPopup('No te alcanzan las gemas: te faltan ' + (producto.precio - gemas) + '. Completá lecciones para ganar más.', 'error');
        return;
    }

    // Se trabaja sobre una copia: si no se puede guardar, el saldo queda como estaba
    const actualizado = Object.assign({}, usuario, { gemas: gemas - producto.precio });

    // XP doble empieza al canjearlo; si ya estaba activo, se suman otros 15 minutos
    if (producto.id === 'xp-doble') {
        actualizado.xpDobleHasta = Math.max(Date.now(), usuario.xpDobleHasta || 0) + DURACION_XP_DOBLE;
    } else {
        actualizado.inventario = (usuario.inventario || []).concat(producto.id);
    }

    if (!guardarUsuario(actualizado)) {
        mostrarPopup('No se pudo completar el canje. Revisá si tu navegador permite almacenamiento.', 'error');
        return;
    }

    usuario = actualizado;
    actualizarHeader(usuario);
    mostrarTienda();
    mostrarPopup('Canjeaste ' + producto.nombre + '. Te quedan ' + usuario.gemas + ' gemas.', 'exito');
}
