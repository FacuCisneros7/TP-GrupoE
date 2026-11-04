import { obtenerUsuarios, requerirSesion, guardarUsuario, cerrarSesion, CLAVE_SESION } from "./sesion.js";

import { obtenerCompletadas, porcentajeCurso } from "./progreso.js";

import { obtenerLeccionesDeCurso, COMUNIDAD } from "./datos.js";

const RUTA_AVATARES = "../img/";

const AVATARES = [
    "Avatar_panda.jpg", "Avatar_gato.jpg", "Avatar_perro.jpg", "Avatar_leon.jpg",
    "Avatar_tiburon.jpg", "Avatar_pinguino.png", "Avatar_cerdito.png",
    "Avatar_oveja.jpg", "Avatar_patito.png", "Avatar_conejo.jpg"
];

const traducciones = {
    es: {
        cursos: "Cursos",
        perfil: "Perfil",
        clasificacion: "Clasificación",
        tienda: "Tienda",

        miembroDesde: "Miembro desde:",
        email: "Email:",
        idiomasAprendo: "Idiomas que aprendo",

        ingles: "Inglés",
        aleman: "Alemán",
        chino: "Chino mandarín",

        seguidos: "Seguidos",
        seguidores: "Seguidores",

        dias: "Días",

        progreso: "Progreso por idioma",
        verCurso: "Ver curso",

        actividad: "Actividad de tus seguidos",
        actividadSubtitulo: "Últimos logros de las personas que seguís",
        dias: "Días",

        hoy: "Hoy",
        ayer: "Ayer",
        haceDosDias: "Hace 2 días",

        actividadMaria: "¡Quedó en el puesto #1 de la División Bronce esta semana!",
        actividadCarlos: "¡Quedó entre los 3 primeros de la División Bronce 2 veces!",
        actividadLili: "Completó 3 lecciones seguidas de Inglés",

        verTodos: "Ver todos",

        estadisticas: "Estadísticas",
        diasRacha: "Días de racha",
        xpAcumulados: "XP acumulados",
        leccionesCompletadas: "Lecciones completadas",
        logrosObtenidos: "Logros obtenidos",

        disponibles: "disponibles",

        ajustes: "Ajustes",
        datosPersonales: "Datos personales",

        nombre: "Nombre",
        usuario: "Usuario",

        cambiarContrasena: "Cambiar contraseña",
        contrasenaActual: "Contraseña actual",
        nuevaContrasena: "Nueva contraseña",
        confirmarContrasena: "Confirmar nueva contraseña",

        idiomaInterfaz: "Idioma de interfaz",
        idiomaPreferido: "Idioma preferido",

        guardar: "Guardar cambios",

        verEstadisticas: "Ver mis estadísticas",
        verLogros: "Ver mis logros",
        cerrarSesion: "Cerrar sesión",
        eliminarCuenta: "Eliminar mi cuenta",

        misLogros: "Mis logros",
        obtenido: "Obtenido:",
        sinLogros: "Todavía no obtuviste logros.",
        sinFecha: "Sin fecha",

        guardadoCorrecto: "Cambios guardados correctamente.",

        errorNombre: "El nombre no puede quedar vacío.",
        errorUsuario: "El usuario no puede quedar vacío.",
        errorArroba: "El usuario debe comenzar con @.",
        errorEmail: "Ingresá un email válido.",
        errorUsuarioRepetido: "Ese nombre de usuario ya está utilizado.",
        errorEmailRepetido: "Ese email ya está registrado.",

        errorFormatoUsuario: "El usuario debe tener entre 3 y 20 caracteres (letras, números o guion bajo).",

        errorContrasenas: "Para cambiar la contraseña completá los tres campos.",
        errorContrasenaActual: "La contraseña actual no es correcta.",

        errorContrasenaCorta: "La nueva contraseña debe tener al menos 6 caracteres.",

        errorContrasenaDistinta: "Las nuevas contraseñas no coinciden.",

        errorGuardar: "No se pudieron guardar los cambios.",

        footer: "2026 LingoWeb — Trabajo Práctico N.º 2, Programación Web 1, UNLaM"
    },

    en: {
        cursos: "Courses",
        perfil: "Profile",
        clasificacion: "Ranking",
        tienda: "Store",

        miembroDesde: "Member since:",
        email: "Email:",
        idiomasAprendo: "Languages I learn",

        ingles: "English",
        aleman: "German",
        chino: "Mandarin Chinese",

        seguidos: "Following",
        seguidores: "Followers",

        dias: "Days",

        progreso: "Progress by language",
        verCurso: "View course",

        actividad: "Following activity",
        actividadSubtitulo: "Latest achievements from people you follow",
        verTodos: "View all",

        hoy: "Today",
        ayer: "Yesterday",
        haceDosDias: "2 days ago",

        actividadMaria: "Finished #1 in the Bronze Division this week!",
        actividadCarlos: "Finished in the top 3 of the Bronze Division twice!",
        actividadLili: "Completed 3 English lessons in a row",

        estadisticas: "Statistics",
        diasRacha: "Streak days",
        xpAcumulados: "Total XP",
        leccionesCompletadas: "Completed lessons",
        logrosObtenidos: "Achievements",

        disponibles: "available",

        ajustes: "Settings",
        datosPersonales: "Personal information",

        nombre: "Name",
        usuario: "Username",

        cambiarContrasena: "Change password",
        contrasenaActual: "Current password",
        nuevaContrasena: "New password",
        confirmarContrasena: "Confirm new password",

        idiomaInterfaz: "Interface language",
        idiomaPreferido: "Preferred language",

        guardar: "Save changes",

        verEstadisticas: "View my statistics",
        verLogros: "View my achievements",
        cerrarSesion: "Log out",
        eliminarCuenta: "Delete my account",

        misLogros: "My achievements",
        obtenido: "Obtained:",

        sinLogros: "You have not earned any achievements yet.",

        sinFecha: "No date",

        guardadoCorrecto: "Changes saved successfully.",

        errorNombre: "Name cannot be empty.",
        errorUsuario: "Username cannot be empty.",
        errorEmail: "Enter a valid email.",
        errorUsuarioRepetido: "That username is already in use.",
        errorEmailRepetido: "That email is already registered.",

        errorFormatoUsuario: "Username must be between 3 and 20 characters (letters, numbers or underscores).",

        errorContrasenas: "Complete all three password fields.",
        errorContrasenaActual: "The current password is incorrect.",

        errorContrasenaCorta: "The new password must contain at least 6 characters.",

        errorContrasenaDistinta: "The new passwords do not match.",

        errorGuardar: "Changes could not be saved.",

        footer: "2026 LingoWeb — Practical Assignment No. 2, Web Programming 1, UNLaM",
    },

    pt: {
        cursos: "Cursos",
        perfil: "Perfil",
        clasificacion: "Classificação",
        tienda: "Loja",

        miembroDesde: "Membro desde:",
        email: "Email:",
        idiomasAprendo: "Idiomas que aprendo",

        ingles: "Inglês",
        aleman: "Alemão",
        chino: "Chinês mandarim",

        seguidos: "Seguindo",
        seguidores: "Seguidores",

        dias: "Dias",

        progreso: "Progresso por idioma",
        verCurso: "Ver curso",

        actividad: "Atividade de quem você segue",
        actividadSubtitulo: "Últimas conquistas das pessoas que você segue",
        verTodos: "Ver todos",

        hoy: "Hoje",
        ayer: "Ontem",
        haceDosDias: "Há 2 dias",

        actividadMaria: "Ficou em 1º lugar na Divisão Bronze esta semana!",
        actividadCarlos: "Ficou entre os 3 primeiros da Divisão Bronze 2 vezes!",
        actividadLili: "Concluiu 3 lições de inglês seguidas",

        estadisticas: "Estatísticas",
        diasRacha: "Dias de sequência",
        xpAcumulados: "XP acumulado",
        leccionesCompletadas: "Lições concluídas",
        logrosObtenidos: "Conquistas",

        disponibles: "disponíveis",

        ajustes: "Configurações",
        datosPersonales: "Dados pessoais",

        nombre: "Nome",
        usuario: "Usuário",

        cambiarContrasena: "Alterar senha",
        contrasenaActual: "Senha atual",
        nuevaContrasena: "Nova senha",
        confirmarContrasena: "Confirmar nova senha",

        idiomaInterfaz: "Idioma da interface",
        idiomaPreferido: "Idioma preferido",

        guardar: "Salvar alterações",

        verEstadisticas: "Ver minhas estatísticas",
        verLogros: "Ver minhas conquistas",
        cerrarSesion: "Sair",
        eliminarCuenta: "Excluir minha conta",

        misLogros: "Minhas conquistas",
        obtenido: "Obtido:",
        sinLogros: "Você ainda não conquistou nenhuma conquista.",
        sinFecha: "Sem data",

        guardadoCorrecto: "Alterações salvas com sucesso.",

        errorNombre: "O nome não pode ficar vazio.",
        errorUsuario: "O usuário não pode ficar vazio.",
        errorEmail: "Digite um email válido.",
        errorUsuarioRepetido: "Esse nome de usuário já está sendo utilizado.",
        errorEmailRepetido: "Esse email já está registrado.",

        errorFormatoUsuario: "O usuário deve ter entre 3 e 20 caracteres (letras, números ou sublinhado).",

        errorContrasenas: "Preencha os três campos de senha.",
        errorContrasenaActual: "A senha atual está incorreta.",

        errorContrasenaCorta: "A nova senha deve ter pelo menos 6 caracteres.",

        errorContrasenaDistinta: "As novas senhas não coincidem.",

        errorGuardar: "Não foi possível salvar as alterações.",

        footer: "2026 LingoWeb — Trabalho Prático Nº 2, Programação Web 1, UNLaM"

    }
};

function ponerTexto(id, texto) {
    const elemento = document.getElementById(id);

    if (elemento !== null) {
        elemento.textContent = texto;
    }
}

function ponerValor(id, valor) {
    const elemento = document.getElementById(id);

    if (elemento !== null) {
        elemento.value = valor;
    }
}

function ponerTextoSelector(selector, texto) {
    const elemento = document.querySelector(selector);

    if (elemento !== null) {
        elemento.textContent = texto;
    }
}

function traducir(clave, idioma) {
    if (!traducciones[idioma]) {
        idioma = "es";
    }

    return traducciones[idioma][clave];
}

function aplicarIdioma(idioma) {
    if (!traducciones[idioma]) {
        idioma = "es";
    }

    document.documentElement.lang = idioma;
    document.title = traducir("perfil", idioma) + " - LingoWeb";

    //Menú Principal
    const linksMenu = document.querySelectorAll(".menu_principal a");

    if (linksMenu.length >= 4) {
        linksMenu[0].textContent = traducir("cursos", idioma);
        linksMenu[1].textContent = traducir("perfil", idioma);
        linksMenu[2].textContent = traducir("clasificacion", idioma);
        linksMenu[3].textContent = traducir("tienda", idioma);
    }

    //Datos del perfil
    ponerTextoSelector(".datos-perfil p:nth-child(1) strong", traducir("miembroDesde", idioma));
    ponerTextoSelector(".datos-perfil p:nth-child(2) strong", traducir("email", idioma));
    ponerTextoSelector(".informacion-perfil > h2", traducir("idiomasAprendo", idioma));

    //Nombres de los idiomas
    const idiomasPerfil = document.querySelectorAll(".idiomas span");

    if (idiomasPerfil.length >= 3) {
        idiomasPerfil[0].lastChild.textContent = traducir("ingles", idioma);
        idiomasPerfil[1].lastChild.textContent = traducir("aleman", idioma);
        idiomasPerfil[2].lastChild.textContent = traducir("chino", idioma);
    }

    const idiomasProgreso = document.querySelectorAll(".idioma-nombre span");

    if (idiomasProgreso.length >= 3) {
        idiomasProgreso[0].lastChild.textContent = traducir("ingles", idioma);
        idiomasProgreso[1].lastChild.textContent = traducir("aleman", idioma);
        idiomasProgreso[2].lastChild.textContent = traducir("chino", idioma);
    }

    //Seguidos y Seguidores
    const textosSociales = document.querySelectorAll(".red-social-link span");

    if (textosSociales.length >= 2) {
        textosSociales[0].textContent = traducir("seguidos", idioma);
        textosSociales[1].textContent = traducir("seguidores", idioma);
    }

    //Progreso
    ponerTextoSelector(".progreso-section > h2", traducir("progreso", idioma));

    const linksCurso = document.querySelectorAll(".progreso-detalle a");

    linksCurso.forEach(function (link) {
        link.textContent = traducir("verCurso", idioma);
    });

    //Actividad
    ponerTextoSelector(".actividad-amigos > h2", traducir("actividad", idioma));
    ponerTextoSelector(".actividad-subtitulo", traducir("actividadSubtitulo", idioma));

    const fechasActividad = document.querySelectorAll(".actividad-feed-item small");

    if (fechasActividad.length >= 3) {
        fechasActividad[0].textContent = traducir("hoy", idioma);
        fechasActividad[1].textContent = traducir("ayer", idioma);
        fechasActividad[2].textContent = traducir("haceDosDias", idioma);
    }

    const mensajesActividad = document.querySelectorAll(".actividad-feed-texto");

    if (mensajesActividad.length >= 3) {
        mensajesActividad[0].textContent =
            traducir("actividadMaria", idioma);

        mensajesActividad[1].textContent =
            traducir("actividadCarlos", idioma);

        mensajesActividad[2].textContent =
            traducir("actividadLili", idioma);
    }
    ponerTextoSelector(".actividad-ver-todos", traducir("verTodos", idioma));

    //Estadísticas
    ponerTextoSelector(".estadisticas-section > h2", traducir("estadisticas", idioma));

    const textosEstadisticas = document.querySelectorAll(".estadistica p");

    if (textosEstadisticas.length >= 4) {
        textosEstadisticas[0].textContent = traducir("diasRacha", idioma);
        textosEstadisticas[1].textContent = traducir("xpAcumulados", idioma);
        textosEstadisticas[2].textContent = traducir("leccionesCompletadas", idioma);
        textosEstadisticas[3].textContent = traducir("logrosObtenidos", idioma);
    }

    //Ajustes - Datos Personales
    ponerTexto("titulo-ajustes", traducir("ajustes", idioma));
    ponerTextoSelector(".grupo-ajuste:nth-child(1) h3", traducir("datosPersonales", idioma));
    ponerTextoSelector('label[for="nombre"]', traducir("nombre", idioma));
    ponerTextoSelector('label[for="usuario"]', traducir("usuario", idioma));

    //Ajustes - Contraseña
    ponerTextoSelector(".grupo-ajuste:nth-child(2) h3", traducir("cambiarContrasena", idioma));
    ponerTextoSelector('label[for="contrasena-actual"]', traducir("contrasenaActual", idioma));
    ponerTextoSelector('label[for="nueva-contrasena"]', traducir("nuevaContrasena", idioma));
    ponerTextoSelector('label[for="confirmar-contrasena"]', traducir("confirmarContrasena", idioma));

    //Ajustes - Idioma
    ponerTextoSelector(".grupo-ajuste:nth-child(3) h3", traducir("idiomaInterfaz", idioma));
    ponerTextoSelector('label[for="idioma"]', traducir("idiomaPreferido", idioma));

    ponerTexto("texto-guardar", traducir("guardar", idioma));

    //Acciones de cuenta
    const acciones = document.querySelectorAll(".acciones-cuenta a");

    if (acciones.length >= 4) {
        acciones[0].textContent = traducir("verEstadisticas", idioma);
        acciones[1].textContent = traducir("verLogros", idioma);
        acciones[2].textContent = traducir("cerrarSesion", idioma);
        acciones[3].textContent = traducir("eliminarCuenta", idioma);
    }

    //Logros
    ponerTexto("titulo-logros", traducir("misLogros", idioma));

    //Pie de página
    ponerTextoSelector("footer p", traducir("footer", idioma));
}

function textoLecciones(completadas, total, idioma) {
    if (idioma === "en") {
        return (completadas + " of " + total + " lessons completed");
    }

    if (idioma === "pt") {
        return (completadas + " de " + total + " lições concluídas");
    }

    return (completadas + " de " + total + " lecciones completadas");
}

function mostrarProgreso(usuario) {
    const idioma = usuario.idiomaInterfaz || "es";

    const cursos = [
        {
            id: "ingles",
            porcentajeId: "porcentaje-ingles",
            barraSelector: ".progreso-ingles",
            detalleId: "detalle-ingles"
        },

        {
            id: "aleman",
            porcentajeId: "porcentaje-aleman",
            barraSelector: ".progreso-aleman",
            detalleId: "detalle-aleman"
        },

        {
            id: "chino",
            porcentajeId: "porcentaje-chino",
            barraSelector: ".progreso-chino",
            detalleId: "detalle-chino"
        }
    ];

    cursos.forEach(function (curso) {
        const completadas = obtenerCompletadas(usuario, curso.id).length;
        const total = obtenerLeccionesDeCurso(curso.id).length;
        const porcentaje = porcentajeCurso(usuario, curso.id);

        ponerTexto(curso.porcentajeId, porcentaje + "%");

        const barra = document.querySelector(curso.barraSelector);

        if (barra !== null) {
            barra.style.width = porcentaje + "%";
        }
        ponerTexto(curso.detalleId, textoLecciones(completadas, total, idioma));
    });
}

function mostrarLogros(usuario) {
    const contenedor = document.querySelector(".logros-grid");

    if (contenedor === null) {
        return;
    }

    contenedor.innerHTML = "";

    const idioma = usuario.idiomaInterfaz || "es";

    const logros = usuario.logros || [];

    if (logros.length === 0) {
        const mensaje = document.createElement("p");

        mensaje.classList.add("sin-logros");
        mensaje.textContent = traducir("sinLogros", idioma);

        contenedor.appendChild(mensaje);
        return;
    }

    logros.forEach(function (logro) {
        const articulo = document.createElement("article");

        articulo.classList.add("logro");

        const icono = document.createElement("span");
        icono.classList.add("icono-logro");
        icono.textContent = logro.icono || "🏆";

        const titulo = document.createElement("h3");
        titulo.textContent = logro.titulo || "Logro";

        const descripcion = document.createElement("p");
        descripcion.textContent = logro.descripcion || "";

        articulo.appendChild(icono);
        articulo.appendChild(titulo);
        articulo.appendChild(descripcion);

        if (logro.fecha) {
            const fecha = document.createElement("small");

            fecha.classList.add("fecha-logro");
            fecha.textContent = traducir("obtenido", idioma) + " " + logro.fecha;

            articulo.appendChild(fecha);
        }

        contenedor.appendChild(articulo);
    });

}

function formatearFechaAlta(fechaAlta, idioma) {
    if (!fechaAlta) {
        return traducir("sinFecha", idioma);;
    }

    const fecha = new Date(fechaAlta);

    if (Number.isNaN(fecha.getTime())) {
        return traducir("sinFecha", idioma);
    }

    const locales = {
        es: "es-AR",
        en: "en-US",
        pt: "pt-BR"
    };

    return fecha.toLocaleDateString(locales[idioma] || "es-AR", {
        month: "long",
        year: "numeric"
    });
}

function mostrarUsuario(usuario) {
    if (!usuario) {
        return;
    }

    const idioma = usuario.idiomaInterfaz || "es";

    const avatarUsuario = usuario.avatar || "../img/Avatar_conejo.jpg";

    const avatar = document.getElementById("avatar-perfil");

    if (avatar !== null) {
        avatar.src = avatarUsuario;
        avatar.alt = "Avatar de " + usuario.nombre;
    }

    const avatarAjustes = document.querySelector(".ajustes-avatar");

    if (avatarAjustes !== null) {
        avatarAjustes.src = avatarUsuario;
        avatarAjustes.alt = "Avatar de " + usuario.nombre;
    }


    ponerTexto("nombre-perfil", usuario.nombre);
    ponerTexto("usuario-perfil", "@" + usuario.usuario);
    ponerTexto("email-perfil", usuario.email);
    ponerTexto("miembro-desde", formatearFechaAlta(usuario.fechaAlta, idioma));
    ponerTexto("xp-perfil", "⚡ " + (usuario.xp || 0) + " XP");

    ponerTexto("resumen-racha", "🔥 " + (usuario.racha || 0) + " " + traducir("dias", idioma));
    ponerTexto("resumen-xp", "⚡ " + (usuario.xp || 0) + " XP");
    ponerTexto("resumen-gemas", "💎 " + (usuario.gemas || 0));

    ponerTexto("cantidad-seguidos", usuario.seguidos = COMUNIDAD.length || 0);
    ponerTexto("cantidad-seguidores", usuario.seguidores = COMUNIDAD.length || 0);

    const cursos = ["ingles", "aleman", "chino"];

    let leccionesCompletadas = 0;
    let totalLecciones = 0;

    cursos.forEach(function (cursoId) {
        leccionesCompletadas += obtenerCompletadas(usuario, cursoId).length;
        totalLecciones += obtenerLeccionesDeCurso(cursoId).length;
    });

    ponerTexto("estadistica-racha", usuario.racha || 0);
    ponerTexto("estadistica-xp", usuario.xp || 0);
    ponerTexto("estadistica-lecciones", leccionesCompletadas);

    ponerTexto("estadistica-lecciones-detalle", leccionesCompletadas + " de " + totalLecciones + " " + traducir("disponibles", idioma));

    const logros = usuario.logros || [];
    ponerTexto("estadistica-logros", logros.length);

    ponerValor("nombre", usuario.nombre);
    ponerValor("usuario", usuario.usuario);
    ponerValor("email", usuario.email);
    ponerValor("idioma", idioma);

    aplicarIdioma(idioma);
    mostrarProgreso(usuario);
    mostrarLogros(usuario);
}

function mostrarMensaje(texto, correcto) {
    const mensaje = document.getElementById("mensaje-ajustes");

    if (mensaje === null) {
        return;
    }

    mensaje.textContent = texto;

    if (correcto) {
        mensaje.style.color = "green";
    } else {
        mensaje.style.color = "red";
    }
}

function configurarFormulario(usuarioActivo) {
    const formulario = document.getElementById("form-ajustes");

    if (formulario === null) {
        return;
    }

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const usuarioAnterior = usuarioActivo.usuario;
        const nombre = document.getElementById("nombre").value.trim();
        const nombreUsuario = document.getElementById("usuario").value.trim();
        const email = document.getElementById("email").value.trim();
        const idioma = document.getElementById("idioma").value;

        const contrasenaActual = document.getElementById("contrasena-actual").value;
        const nuevaContrasena = document.getElementById("nueva-contrasena").value;
        const confirmarContrasena = document.getElementById("confirmar-contrasena").value;

        const idiomaMensaje = traducciones[idioma] ? idioma : "es";

        if (nombre === "") {
            mostrarMensaje(traducir("errorNombre", idiomaMensaje), false);
            return;
        }

        if (nombreUsuario === "") {
            mostrarMensaje(traducir("errorUsuario", idiomaMensaje), false);
            return;
        }

        if (!/^[a-zA-Z0-9_]{3,20}$/.test(nombreUsuario)) {
            mostrarMensaje(traducir("errorFormatoUsuario", idiomaMensaje), false);
            return;
        }

        const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formatoEmail.test(email)) {
            mostrarMensaje(traducir("errorEmail", idiomaMensaje), false);
            return;
        }

        const usuarios = obtenerUsuarios();

        const usuarioRepetido = usuarios.some(function (usuario) {
            return usuario.usuario.toLowerCase() !== usuarioAnterior.toLowerCase() && usuario.usuario.toLowerCase() === nombreUsuario.toLowerCase();
        });

        if (usuarioRepetido) {
            mostrarMensaje(traducir("errorUsuarioRepetido", idiomaMensaje), false);
            return;
        }

        const emailRepetido = usuarios.some(function (usuario) {
            return usuario.usuario.toLowerCase() !== usuarioAnterior.toLowerCase() && usuario.email.toLowerCase() === email.toLowerCase();
        });

        if (emailRepetido) {
            mostrarMensaje(traducir("errorEmailRepetido", idiomaMensaje), false);
            return;
        }

        const quiereCambiarContrasena = contrasenaActual !== "" || nuevaContrasena !== "" || confirmarContrasena !== "";

        if (quiereCambiarContrasena) {

            if (contrasenaActual === "" || nuevaContrasena === "" || confirmarContrasena === "") {
                mostrarMensaje(traducir("errorContrasenas", idiomaMensaje), false);
                return;
            }

            if (contrasenaActual !== usuarioActivo.contraseña) {
                mostrarMensaje(traducir("errorContrasenaActual", idiomaMensaje), false);
                return;
            }

            if (nuevaContrasena.length < 6) {
                mostrarMensaje(traducir("errorContrasenaCorta", idiomaMensaje), false);
                return;
            }

            if (nuevaContrasena !== confirmarContrasena) {
                mostrarMensaje(traducir("errorContrasenaDistinta", idiomaMensaje), false);
                return;
            }
        }

        usuarioActivo.nombre = nombre;
        usuarioActivo.usuario = nombreUsuario;
        usuarioActivo.email = email;
        usuarioActivo.idiomaInterfaz = idioma;

        if (quiereCambiarContrasena) {
            usuarioActivo.contraseña = nuevaContrasena;
        }

        const guardado = guardarUsuario(usuarioActivo, usuarioAnterior);
        if (!guardado) {
            mostrarMensaje(traducir("errorGuardar", idiomaMensaje), false);
            return;
        }

        localStorage.setItem(CLAVE_SESION, usuarioActivo.usuario);

        mostrarUsuario(usuarioActivo);

        ponerValor("contrasena-actual", "");
        ponerValor("nueva-contrasena", "");
        ponerValor("confirmar-contrasena", "");

        mostrarMensaje(traducir("guardadoCorrecto", idioma), true);

    });
}

function configurarCerrarSesion() {
    const botonCerrarSesion = document.getElementById("cerrar-sesion");

    if (botonCerrarSesion === null) {
        return;
    }

    botonCerrarSesion.addEventListener("click", function (evento) {
        evento.preventDefault();

        cerrarSesion();

        window.location.replace("../index.html");

    });
}

function iniciarSelectorAvatar(usuario) {
    const contenedor = document.getElementById("selector-avatar");
    const mensaje = document.getElementById("mensaje-avatar");
    if (contenedor === null) {
        return;
    }

    AVATARES.forEach(function (nombreArchivo) {
        const ruta = RUTA_AVATARES + nombreArchivo;

        const boton = document.createElement("button");
        boton.type = "button";
        boton.classList.add("opcion-avatar");

        const img = document.createElement("img");
        img.src = ruta;
        img.alt = "Avatar " + nombreArchivo;
        boton.appendChild(img);

        if (usuario.avatar === ruta) {
            boton.classList.add("seleccionado");
        }

        boton.addEventListener("click", function () {
            usuario.avatar = ruta;
            const guardado = guardarUsuario(usuario, usuario.usuario);

            if (guardado) {
                contenedor.querySelectorAll(".opcion-avatar").forEach(function (b) {
                    b.classList.remove("seleccionado");
                });
                boton.classList.add("seleccionado");

                const avatarPerfil = document.getElementById("avatar-perfil");
                if (avatarPerfil !== null) {
                    avatarPerfil.src = ruta;
                }

                mensaje.textContent = "Avatar actualizado.";
            } else {
                mensaje.textContent = "No se pudo guardar el avatar. Intentá de nuevo.";
            }
        });

        contenedor.appendChild(boton);
    });
}

document.addEventListener("DOMContentLoaded", function () {

    const usuarioActivo = requerirSesion("../index.html");

    if (!usuarioActivo) {
        return;
    }

    mostrarUsuario(usuarioActivo);
    iniciarSelectorAvatar(usuarioActivo);
    configurarFormulario(usuarioActivo);
    configurarCerrarSesion();
});
