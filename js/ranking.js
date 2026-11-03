import { obtenerUsuarios, requerirSesion, cerrarSesion } from './sesion.js';

const usuarioLogueado = requerirSesion('../index.html');

const AVATAR_POR_DEFECTO = "Avatar_conejo.jpg";

const LIGAS = [
    { id: "bronce", nombre: "Bronce", siguiente: "Plata", ascienden: 5, descienden: 5 },
    { id: "plata", nombre: "Plata", siguiente: "Oro", ascienden: 5, descienden: 5 },
    { id: "oro", nombre: "Oro", siguiente: null, ascienden: 0, descienden: 5 }
];

const PARTICIPANTES_DEMO = [
    { usuario: "Maria_23", xp: 120, avatar: "Avatar_panda.jpg", liga: "bronce" },
    { usuario: "Carlos_Dev", xp: 95, avatar: "Avatar_gato.jpg", liga: "bronce" },
    { usuario: "Lili78", xp: 80, avatar: "Avatar_perro.jpg", liga: "bronce" },
    { usuario: "Lucas_93", xp: 65, avatar: "Avatar_leon.jpg", liga: "bronce" },
    { usuario: "MiaSanchez", xp: 50, avatar: "Avatar_tiburon.jpg", liga: "bronce" },
    { usuario: "Alex_17", xp: 40, avatar: "Avatar_pinguino.png", liga: "bronce" },
    { usuario: "StudyCat", xp: 30, avatar: "Avatar_cerdito.png", liga: "bronce" },
    { usuario: "Tomi_007", xp: 20, avatar: "Avatar_oveja.jpg", liga: "bronce" },
    { usuario: "AgusGimenez_06", xp: 10, avatar: "Avatar_patito.png", liga: "bronce" },
    { usuario: "Valentin21", xp: 5, avatar: "Avatar_conejo.jpg", liga: "bronce" },
    { usuario: "Gaby_Mendez", xp: 15, avatar: "Avatar_panda.jpg", liga: "bronce" },
    { usuario: "Mica_22", xp: 8, avatar: "Avatar_gato.jpg", liga: "bronce" },
    { usuario: "Fran_Dev", xp: 3, avatar: "Avatar_oveja.jpg", liga: "bronce" },
    { usuario: "Ceci_Castillo", xp: 2, avatar: "Avatar_perro.jpg", liga: "bronce" },
    { usuario: "Juli_30", xp: 90, avatar: "Avatar_leon.jpg", liga: "plata" },
    { usuario: "Sebas_Aleman", xp: 70, avatar: "Avatar_perro.jpg", liga: "plata" },
    { usuario: "Mari_Hanzi", xp: 50, avatar: "Avatar_tiburon.jpg", liga: "plata" },
    { usuario: "Leo_Study", xp: 30, avatar: "Avatar_patito.png", liga: "plata" },
    { usuario: "AnaPaula99", xp: 400, avatar: "Avatar_panda.jpg", liga: "plata" },
    { usuario: "Tomi_Lingo", xp: 320, avatar: "Avatar_oveja.jpg", liga: "plata" },
    { usuario: "Lucia65", xp: 250, avatar: "Avatar_gato.jpg", liga: "plata" },
    { usuario: "Ana_kim44", xp: 400, avatar: "Avatar_panda.jpg", liga: "plata" },
    { usuario: "Iara16", xp: 320, avatar: "Avatar_oveja.jpg", liga: "plata" },
    { usuario: "LuciaTech", xp: 250, avatar: "Avatar_gato.jpg", liga: "plata" },
    { usuario: "Nico_Code", xp: 210, avatar: "Avatar_perro.jpg", liga: "plata" },
    { usuario: "SofiPlay", xp: 180, avatar: "Avatar_leon.jpg", liga: "plata" },
    { usuario: "Pablo_88", xp: 150, avatar: "Avatar_cerdito.png", liga: "plata" },
    { usuario: "CamiGamer", xp: 120, avatar: "Avatar_patito.png", liga: "plata" },
    { usuario: "MatiRamirez55", xp: 25, avatar: "Avatar_pinguino.png", liga: "plata" }
];

const MEDALLAS = [
    { archivo: "Medalla_oro.png", nombre: "medalla de oro" },
    { archivo: "Medalla_plata.png", nombre: "medalla de plata" },
    { archivo: "Medalla_bronce.png", nombre: "medalla de bronce" }
];

const TEXTO_ZONA = {
    ascenso: "Zona de Ascenso",
    descenso: "Zona de Descenso",
    permanencia: "Zona de permanencia"
};

const selector = document.querySelector("#liga");
const titulo = document.querySelector("#titulo-liga");
const descripcion = document.querySelector("#descripcion-liga");
const tabla = document.querySelector("#tabla-ranking");
const cuerpo = document.querySelector("#cuerpo-ranking");
const mensajeVacio = document.querySelector("#mensaje-vacio");

const conDefecto = (valor, porDefecto) => {
    if (valor === undefined || valor === null || valor === "") {
        return porDefecto;
    }
    return valor;
};

// Ordena de mayor a menor XP. Si empatan, por nombre de usuario.
const ordenarParticipantes = (lista) => {
    for (let i = 0; i < lista.length - 1; i++) {
        for (let j = 0; j < lista.length - 1 - i; j++) {
            const actual = lista[j];
            const siguiente = lista[j + 1];

            const debeIntercambiar =
                siguiente.xp > actual.xp ||
                (siguiente.xp === actual.xp && siguiente.usuario < actual.usuario);

            if (debeIntercambiar) {
                lista[j] = siguiente;
                lista[j + 1] = actual;
            }
        }
    }
    return lista;
};

// Demo y cuentas registradas en localStorage, ordenadas por XP semanal
const obtenerParticipantes = (ligaId) => {
    const demo = PARTICIPANTES_DEMO.filter(p => p.liga === ligaId);
    const registrados = obtenerUsuarios()
        .filter(u => conDefecto(u.liga, "bronce") === ligaId)
        .map(u => ({
            usuario: u.usuario,
            xp: conDefecto(u.xpSemanal, 0),
            avatar: conDefecto(u.avatar, AVATAR_POR_DEFECTO),
            esCuenta: true
        }));

    return ordenarParticipantes([...demo, ...registrados]);
};

const obtenerZona = (puesto, total, liga) => {
    if (puesto <= liga.ascienden) return "ascenso";
    if (puesto > total - liga.descienden) return "descenso";
    return "permanencia";
};

const crearFlecha = (zona) => {
    const flecha = document.createElement("span");
    flecha.classList.add(`flecha-${zona}`);
    flecha.textContent = zona === "ascenso" ? "\u2191" : "\u2193";
    return flecha;
};

// Pantalla mobile y tablet , la columna Estado está oculta (fila divisora)
const crearSeparador = (zona) => {
    const fila = document.createElement("tr");
    fila.classList.add(`separador-${zona}`);
    const celda = document.createElement("td");
    celda.colSpan = 5;
    celda.append(crearFlecha(zona), ` ${TEXTO_ZONA[zona]} `, crearFlecha(zona));
    fila.appendChild(celda);
    return fila;
};

const crearFila = (participante, puesto, zona) => {
    const esActual = participante.esCuenta && participante.usuario === usuarioLogueado.usuario;
    const fila = document.createElement("tr");
    if (esActual) {
        fila.classList.add("usuario-actual");
        fila.setAttribute("aria-current", "true");
    }

    // medalla para top 3, numero para el resto
    const tdPuesto = document.createElement("td");
    if (zona === "ascenso") tdPuesto.classList.add("puesto-ascenso");
    if (zona === "descenso") tdPuesto.classList.add("puesto-descenso");
    const medalla = MEDALLAS[puesto - 1];
    if (medalla) {
        const img = document.createElement("img");
        img.classList.add("medalla");
        img.src = `../img/${medalla.archivo}`;
        img.alt = `Puesto ${puesto}: ${medalla.nombre}`;
        tdPuesto.appendChild(img);
    } else {
        tdPuesto.textContent = puesto;
    }
    // Avatar
    const tdAvatar = document.createElement("td");
    tdAvatar.classList.add("avatar");
    const imgAvatar = document.createElement("img");
    imgAvatar.src = `../img/${participante.avatar}`;
    imgAvatar.alt = `Avatar de ${participante.usuario}`;
    tdAvatar.appendChild(imgAvatar);

    //Usuario
    const tdUsuario = document.createElement("td");
    tdUsuario.classList.add("usuario");
    tdUsuario.textContent = esActual ? `${participante.usuario} (tú)` : participante.usuario;

    //XP
    const tdXp = document.createElement("td");
    tdXp.classList.add("xp");
    tdXp.textContent = `${participante.xp} XP`;

    //Estado
    const tdEstado = document.createElement("td");
    tdEstado.classList.add("estado");
    if (zona === "permanencia") {
        tdEstado.textContent = TEXTO_ZONA[zona];
    } else {
        tdEstado.append(crearFlecha(zona), ` ${TEXTO_ZONA[zona]} `, crearFlecha(zona));
    }

    fila.append(tdPuesto, tdAvatar, tdUsuario, tdXp, tdEstado)
    return fila;
};

const mostrarRanking = (ligaId) => {
    const liga = LIGAS.find(l => l.id === ligaId);
    const participantes = obtenerParticipantes(ligaId);
    const total = participantes.length;

    titulo.textContent = `Tabla de Clasificación - Liga de ${liga.nombre}`;
    descripcion.textContent = liga.siguiente
        ? `Los ${liga.ascienden} primeros ascienden a la Liga de ${liga.siguiente} esta semana`
        : "Estás en la liga más alta: esforzate para mantener tu lugar";

    cuerpo.innerHTML = "";

    if (total === 0) {
        tabla.style.display = "none";
        mensajeVacio.style.display = "block";
        mensajeVacio.textContent = `Todavía no hay participantes en la Liga de ${liga.nombre}. ¡Seguí sumando XP para llegar!`;
        return;
    }

    tabla.style.display = "table";
    mensajeVacio.style.display = "none";

    participantes.forEach((p, i) => {
        const puesto = i + 1;
        const zona = obtenerZona(puesto, total, liga);
        const zonaAnterior = puesto > 1 ? obtenerZona(puesto - 1, total, liga) : null;
        const zonaSiguiente = puesto < total ? obtenerZona(puesto + 1, total, liga) : null;

        if (zona === "descenso" && zonaAnterior !== "descenso") {
            cuerpo.appendChild(crearSeparador("descenso"));
        }
        cuerpo.appendChild(crearFila(p, puesto, zona));
        if (zona === "ascenso" && zonaSiguiente !== "ascenso") {
            cuerpo.appendChild(crearSeparador("ascenso"));
        }
    });
};

// Resumen del header con los datos reales del usuario
const iniciar = () => {
    document.querySelector("#racha").textContent = `🔥 ${conDefecto(usuarioLogueado.racha, 0)} Días`;
    document.querySelector("#xp-total").textContent = `⚡ ${conDefecto(usuarioLogueado.xp, 0)} XP`;
    document.querySelector("#gemas").textContent = `💎 ${conDefecto(usuarioLogueado.gemas, 0)}`;

    // El enlace lleva a ../index.html; antes se cierra la sesión
    document.querySelector("#btn-cerrar-sesion").addEventListener("click", cerrarSesion);

    LIGAS.forEach(liga => {
        const opcion = document.createElement("option");
        opcion.value = liga.id;
        opcion.textContent = liga.nombre;
        selector.appendChild(opcion);
    });

    selector.addEventListener("change", () => mostrarRanking(selector.value));

    const ligaInicial = conDefecto(usuarioLogueado.liga, "bronce");
    selector.value = ligaInicial;
    mostrarRanking(ligaInicial);
};

if (usuarioLogueado) {
    iniciar();
} else {
    document.querySelector("main").innerHTML =
        '<p>Necesitás iniciar sesión para ver la clasificación. <a href="../index.html">Ir al inicio de sesión</a></p>';
}


