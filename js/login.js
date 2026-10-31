const formulario = document.querySelector('#formulario_login');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const nodoUsuario = document.querySelector('#usuario');
    const nodoPassword = document.querySelector('#password');

    const valorUsuarioEmail = nodoUsuario.value.trim().toLowerCase();
    const valorContraseña = nodoPassword.value;

    // 1. Campos vacíos
    if (!valorUsuarioEmail || !valorContraseña) {
        mostrarPopup('Completá usuario o correo y contraseña.', 'error', function () {
            (valorUsuarioEmail ? nodoPassword : nodoUsuario).focus();
        });
        return;
    }

    // 2. Buscar en los usuarios guardados
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioEncontrado = usuarios.find(function (u) {
        const coincide = u.usuario.toLowerCase() === valorUsuarioEmail || u.email.toLowerCase() === valorUsuarioEmail;
        return coincide && u.contraseña === valorContraseña;
    });

    // 3. No existe: popup y NO avanzar
    if (!usuarioEncontrado) {
        mostrarPopup('Usuario o contraseña incorrectos.', 'error', function () {
            nodoPassword.select();
        });
        return;
    }

    // 4. Existe: guardar la sesión e ir al dashboard
    localStorage.setItem('usuario_actual', usuarioEncontrado.usuario);
    window.location.href = '../dashboard/index.html';
});