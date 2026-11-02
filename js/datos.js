
export const CURSOS = [
    { id: 'ingles', nombre: 'Inglés desde Español', nivel: 'Principiante (A1)', bandera: 'Flag_of_the_United_Kingdom_(1-2).svg.webp', banderaAlt: 'Bandera de Reino Unido' },
    { id: 'aleman', nombre: 'Alemán desde Español', nivel: 'Principiante (A1)', bandera: 'Flag_of_Germany_(3-2).svg.webp', banderaAlt: 'Bandera de Alemania' },
    { id: 'chino',  nombre: 'Chino Mandarín desde Español', nivel: 'Inicial (HSK 1)', bandera: "Flag_of_the_People's_Republic_of_China.svg", banderaAlt: 'Bandera de China' }
];

export function obtenerCurso(cursoId) {
    return CURSOS.find(function (curso) {
        return curso.id === cursoId;
    }) || null;
}

export const UNIDADES = [

    {
        id: 'ingles-u1',
        cursoId: 'ingles',
        numero: 1,
        icono: '👋',
        titulo: 'Introducción',
        descripcion: 'Aprendé a saludar, presentarte y hablar de tu familia en inglés.',
        lecciones: [
            {
                id: 'ingles-u1-l1', numero: 1, titulo: 'Frases básicas',
                temas: ['Saludos y despedidas', 'Please, thank you y sorry', 'Preguntar "How are you?"']
            },
            {
                id: 'ingles-u1-l2', numero: 2, titulo: 'Presentaciones',
                temas: ['Decir tu nombre y edad', 'El verbo to be', 'País y nacionalidad']
            },
            {
                id: 'ingles-u1-l3', numero: 3, titulo: 'Vocabulario de familia',
                temas: ['Mother, father, sister, brother', 'Posesivos: my, your, his, her', 'Describir a tu familia']
            }
        ]
    },
    {
        id: 'ingles-u2',
        cursoId: 'ingles',
        numero: 2,
        icono: '🍽️',
        titulo: 'Comida',
        descripcion: 'Pedí en un restaurante, hablá de tus gustos y conocé el vocabulario de la mesa.',
        lecciones: [
            {
                id: 'ingles-u2-l1', numero: 1, titulo: 'Comidas del día',
                temas: ['Breakfast, lunch y dinner', 'Alimentos de uso diario', 'Decir a qué hora comés']
            },
            {
                id: 'ingles-u2-l2', numero: 2, titulo: 'Comidas',
                temas: ['Platos típicos', 'I like / I don\'t like', 'Some y any']
            },
            {
                id: 'ingles-u2-l3', numero: 3, titulo: 'Bebidas',
                temas: ['Water, juice, coffee, tea', 'Would you like...?', 'Pedir en un café']
            }
        ]
    },
    {
        id: 'ingles-u3',
        cursoId: 'ingles',
        numero: 3,
        icono: '✈️',
        titulo: 'Viajes',
        descripcion: 'Desenvolvete en el aeropuerto, el hotel y en situaciones de emergencia.',
        lecciones: [
            {
                id: 'ingles-u3-l1', numero: 1, titulo: 'Aeropuerto',
                temas: ['Check-in y equipaje', 'Preguntas de migraciones', 'Puertas, vuelos y demoras']
            },
            {
                id: 'ingles-u3-l2', numero: 2, titulo: 'Alojamiento y turismo',
                temas: ['Reservar una habitación', 'Pedir y dar direcciones', 'Lugares turísticos']
            },
            {
                id: 'ingles-u3-l3', numero: 3, titulo: 'Emergencias y ayuda',
                temas: ['Pedir ayuda: "Help!"', 'Médico y farmacia', 'Teléfonos de emergencia']
            }
        ]
    },

    {
        id: 'aleman-u1',
        cursoId: 'aleman',
        numero: 1,
        icono: '👋',
        titulo: 'Introducción',
        descripcion: 'Aprendé a saludar, presentarte y hablar de tu familia en alemán.',
        lecciones: [
            {
                id: 'aleman-u1-l1', numero: 1, titulo: 'Frases básicas',
                temas: ['Hallo, Guten Tag y Tschüss', 'Bitte y Danke', 'Preguntar "Wie geht\'s?"']
            },
            {
                id: 'aleman-u1-l2', numero: 2, titulo: 'Presentaciones',
                temas: ['Decir tu nombre: "Ich heiße..."', 'El verbo sein', 'País y nacionalidad']
            },
            {
                id: 'aleman-u1-l3', numero: 3, titulo: 'Vocabulario de familia',
                temas: ['Mutter, Vater, Schwester, Bruder', 'Posesivos: mein, dein', 'Describir a tu familia']
            }
        ]
    },
    {
        id: 'aleman-u2',
        cursoId: 'aleman',
        numero: 2,
        icono: '🍽️',
        titulo: 'Comida',
        descripcion: 'Pedí en un restaurante, hablá de tus gustos y conocé el vocabulario de la mesa.',
        lecciones: [
            {
                id: 'aleman-u2-l1', numero: 1, titulo: 'Comidas del día',
                temas: ['Frühstück, Mittagessen y Abendessen', 'Alimentos de uso diario', 'Decir a qué hora comés']
            },
            {
                id: 'aleman-u2-l2', numero: 2, titulo: 'Comidas',
                temas: ['Platos típicos: Schnitzel, Brezel', 'Ich mag / Ich mag nicht', 'Artículos: der, die, das']
            },
            {
                id: 'aleman-u2-l3', numero: 3, titulo: 'Bebidas',
                temas: ['Wasser, Saft, Kaffee, Tee', '"Ich möchte..."', 'Pedir en un café']
            }
        ]
    },
    {
        id: 'aleman-u3',
        cursoId: 'aleman',
        numero: 3,
        icono: '✈️',
        titulo: 'Viajes',
        descripcion: 'Desenvolvete en el aeropuerto, el hotel y en situaciones de emergencia.',
        lecciones: [
            {
                id: 'aleman-u3-l1', numero: 1, titulo: 'Aeropuerto',
                temas: ['Check-in y Gepäck (equipaje)', 'Preguntas de migraciones', 'Puertas, vuelos y demoras']
            },
            {
                id: 'aleman-u3-l2', numero: 2, titulo: 'Alojamiento y turismo',
                temas: ['Reservar una habitación', 'Preguntar "Wo ist...?"', 'Lugares turísticos']
            },
            {
                id: 'aleman-u3-l3', numero: 3, titulo: 'Emergencias y ayuda',
                temas: ['Pedir ayuda: "Hilfe!"', 'Arzt y Apotheke', 'Teléfonos de emergencia']
            }
        ]
    },

    {
        id: 'chino-u1',
        cursoId: 'chino',
        numero: 1,
        icono: '👋',
        titulo: 'Introducción',
        descripcion: 'Aprendé a saludar, presentarte y hablar de tu familia en chino.',
        lecciones: [
            {
                id: 'chino-u1-l1', numero: 1, titulo: 'Frases básicas',
                temas: ['Nǐ hǎo (你好) y zàijiàn (再见)', 'Xièxie (谢谢) y bú kèqi (不客气)', 'Introducción a los tonos']
            },
            {
                id: 'chino-u1-l2', numero: 2, titulo: 'Presentaciones',
                temas: ['Decir tu nombre: "Wǒ jiào..."', 'País y nacionalidad', 'Los pronombres wǒ, nǐ, tā']
            },
            {
                id: 'chino-u1-l3', numero: 3, titulo: 'Vocabulario de familia',
                temas: ['Māma (妈妈), bàba (爸爸), gēge (哥哥)', 'La partícula de posesión de', 'Describir a tu familia']
            }
        ]
    },
    {
        id: 'chino-u2',
        cursoId: 'chino',
        numero: 2,
        icono: '🍽️',
        titulo: 'Comida',
        descripcion: 'Pedí en un restaurante, hablá de tus gustos y conocé el vocabulario de la mesa.',
        lecciones: [
            {
                id: 'chino-u2-l1', numero: 1, titulo: 'Comidas del día',
                temas: ['Desayuno, almuerzo y cena', 'Alimentos de uso diario', 'Decir a qué hora comés']
            },
            {
                id: 'chino-u2-l2', numero: 2, titulo: 'Comidas',
                temas: ['Platos típicos: mǐfàn, miàntiáo', 'Wǒ xǐhuan... (me gusta...)', 'Los palillos y la mesa']
            },
            {
                id: 'chino-u2-l3', numero: 3, titulo: 'Bebidas',
                temas: ['Shuǐ (水), chá (茶), kāfēi (咖啡)', '"Wǒ yào..." (quiero...)', 'Pedir en una casa de té']
            }
        ]
    },
    {
        id: 'chino-u3',
        cursoId: 'chino',
        numero: 3,
        icono: '✈️',
        titulo: 'Viajes',
        descripcion: 'Desenvolvete en el aeropuerto, el hotel y en situaciones de emergencia.',
        lecciones: [
            {
                id: 'chino-u3-l1', numero: 1, titulo: 'Aeropuerto',
                temas: ['Check-in y equipaje', 'Preguntas de migraciones', 'Puertas, vuelos y demoras']
            },
            {
                id: 'chino-u3-l2', numero: 2, titulo: 'Alojamiento y turismo',
                temas: ['Reservar una habitación', 'Preguntar "... zài nǎr?" (¿dónde está...?)', 'Lugares turísticos']
            },
            {
                id: 'chino-u3-l3', numero: 3, titulo: 'Emergencias y ayuda',
                temas: ['Pedir ayuda: "Jiùmìng!"', 'Médico y farmacia', 'Teléfonos de emergencia']
            }
        ]
    }
];

/* ---------- Búsquedas por id ---------- */

// Todas las unidades de un curso, en orden: obtenerUnidadesDeCurso('ingles')
export function obtenerUnidadesDeCurso(cursoId) {
    return UNIDADES.filter(function (unidad) {
        return unidad.cursoId === cursoId;
    });
}

// Una unidad por su id: obtenerUnidad('ingles-u2')
export function obtenerUnidad(unidadId) {
    return UNIDADES.find(function (unidad) {
        return unidad.id === unidadId;
    }) || null;
}

// Una lección por su id. Devuelve { unidad, leccion } o null: obtenerLeccion('ingles-u2-l2')
export function obtenerLeccion(leccionId) {
    for (const unidad of UNIDADES) {
        const leccion = unidad.lecciones.find(function (l) {
            return l.id === leccionId;
        });
        if (leccion) {
            return { unidad: unidad, leccion: leccion };
        }
    }
    return null;
}

// Todas las lecciones de un curso en orden (aplanadas, sin agrupar por unidad).
// Sirve para saber cuál es la siguiente lección pendiente y calcular el porcentaje.
export function obtenerLeccionesDeCurso(cursoId) {
    const lista = [];
    obtenerUnidadesDeCurso(cursoId).forEach(function (unidad) {
        unidad.lecciones.forEach(function (leccion) {
            lista.push(leccion);
        });
    });
    return lista;
}

export const EJERCICIOS = {

    // Unidad 1: Introducción
    'ingles-u1-l1': [
        { frase: 'Good morning, how are you?', respuesta: ['Buenos', 'días', '¿cómo', 'estás?'], distractores: ['noches', 'gracias'] },
        { frase: 'Sorry, thank you very much', respuesta: ['Perdón', 'muchas', 'gracias'], distractores: ['por', 'favor', 'adiós'] }
    ],
    'ingles-u1-l2': [
        { frase: 'My name is Ana', respuesta: ['Me', 'llamo', 'Ana'], distractores: ['Tengo', 'eres'] },
        { frase: 'She is from Brazil', respuesta: ['Ella', 'es', 'de', 'Brasil'], distractores: ['Él', 'voy', 'Chile'] }
    ],
    'ingles-u1-l3': [
        { frase: 'My sister is tall', respuesta: ['Mi', 'hermana', 'es', 'alta'], distractores: ['hermano', 'tu', 'baja'] },
        { frase: 'Her brother is young', respuesta: ['Su', 'hermano', 'es', 'joven'], distractores: ['hermana', 'mi', 'viejo'] }
    ],

    // Unidad 2: Comida
    'ingles-u2-l1': [
        { frase: 'I have breakfast at eight', respuesta: ['Desayuno', 'a', 'las', 'ocho'], distractores: ['almuerzo', 'nueve'] },
        { frase: 'We eat dinner at nine', respuesta: ['Cenamos', 'a', 'las', 'nueve'], distractores: ['almorzamos', 'ocho', 'tres'] }
    ],
    'ingles-u2-l2': [
        { frase: 'I like pizza', respuesta: ['Me', 'gusta', 'la', 'pizza'], distractores: ['no', 'el', 'pasta'] },
        { frase: "I don't like fish", respuesta: ['No', 'me', 'gusta', 'el', 'pescado'], distractores: ['pollo', 'la'] }
    ],
    'ingles-u2-l3': [
        { frase: 'Water and juice, please', respuesta: ['Agua', 'y', 'jugo', 'por', 'favor'], distractores: ['café', 'té'] },
        { frase: 'Would you like coffee?', respuesta: ['¿Quieres', 'café?'], distractores: ['té', 'agua', 'Quiero'] }
    ],

    // Unidad 3: Viajes
    'ingles-u3-l1': [
        { frase: 'Where is my luggage?', respuesta: ['¿Dónde', 'está', 'mi', 'equipaje?'], distractores: ['tu', 'vuelo'] },
        { frase: 'The flight is late', respuesta: ['El', 'vuelo', 'está', 'demorado'], distractores: ['puerta', 'temprano', 'la'] }
    ],
    'ingles-u3-l2': [
        { frase: 'I want to book a room', respuesta: ['Quiero', 'reservar', 'una', 'habitación'], distractores: ['cancelar', 'dos'] },
        { frase: 'Where is the museum?', respuesta: ['¿Dónde', 'está', 'el', 'museo?'], distractores: ['hotel', 'la'] }
    ],
    'ingles-u3-l3': [
        { frase: 'Help, I need a doctor', respuesta: ['Ayuda', 'necesito', 'un', 'médico'], distractores: ['farmacia', 'tengo'] },
        { frase: 'Call an ambulance', respuesta: ['Llamen', 'a', 'una', 'ambulancia'], distractores: ['policía', 'un'] }
    ],

    // Unidad 1: Introducción
    'aleman-u1-l1': [
        { frase: 'Guten Tag, wie geht es dir?', respuesta: ['Buenos', 'días', '¿cómo', 'estás?'], distractores: ['noches', 'gracias'] },
        { frase: 'Bitte, danke schön', respuesta: ['Por', 'favor', 'muchas', 'gracias'], distractores: ['adiós', 'perdón'] }
    ],
    'aleman-u1-l2': [
        { frase: 'Ich heiße Ana', respuesta: ['Me', 'llamo', 'Ana'], distractores: ['Tengo', 'eres'] },
        { frase: 'Ich komme aus Argentinien', respuesta: ['Vengo', 'de', 'Argentina'], distractores: ['Voy', 'a', 'Chile'] }
    ],
    'aleman-u1-l3': [
        { frase: 'Meine Schwester ist groß', respuesta: ['Mi', 'hermana', 'es', 'alta'], distractores: ['hermano', 'tu', 'baja'] },
        { frase: 'Dein Bruder ist jung', respuesta: ['Tu', 'hermano', 'es', 'joven'], distractores: ['hermana', 'mi', 'viejo'] }
    ],

    // Unidad 2: Comida
    'aleman-u2-l1': [
        { frase: 'Das Frühstück ist um acht Uhr', respuesta: ['El', 'desayuno', 'es', 'a', 'las', 'ocho'], distractores: ['almuerzo', 'nueve'] },
        { frase: 'Das Abendessen ist um neun Uhr', respuesta: ['La', 'cena', 'es', 'a', 'las', 'nueve'], distractores: ['el', 'almuerzo', 'ocho'] }
    ],
    'aleman-u2-l2': [
        { frase: 'Ich mag Schnitzel', respuesta: ['Me', 'gusta', 'el', 'Schnitzel'], distractores: ['no', 'la', 'Brezel'] },
        { frase: 'Ich mag Fisch nicht', respuesta: ['No', 'me', 'gusta', 'el', 'pescado'], distractores: ['pollo', 'la'] }
    ],
    'aleman-u2-l3': [
        { frase: 'Ich möchte Wasser und Saft', respuesta: ['Quisiera', 'agua', 'y', 'jugo'], distractores: ['café', 'té'] },
        { frase: 'Ich möchte einen Kaffee, bitte', respuesta: ['Quisiera', 'un', 'café', 'por', 'favor'], distractores: ['té', 'dos'] }
    ],

    // Unidad 3: Viajes
    'aleman-u3-l1': [
        { frase: 'Wo ist mein Gepäck?', respuesta: ['¿Dónde', 'está', 'mi', 'equipaje?'], distractores: ['tu', 'vuelo'] },
        { frase: 'Der Flug hat Verspätung', respuesta: ['El', 'vuelo', 'está', 'demorado'], distractores: ['puerta', 'temprano', 'la'] }
    ],
    'aleman-u3-l2': [
        { frase: 'Ich möchte ein Zimmer reservieren', respuesta: ['Quisiera', 'reservar', 'una', 'habitación'], distractores: ['cancelar', 'dos'] },
        { frase: 'Wo ist das Museum?', respuesta: ['¿Dónde', 'está', 'el', 'museo?'], distractores: ['hotel', 'la'] }
    ],
    'aleman-u3-l3': [
        { frase: 'Hilfe! Ich brauche einen Arzt', respuesta: ['¡Ayuda!', 'Necesito', 'un', 'médico'], distractores: ['farmacia', 'tengo'] },
        { frase: 'Rufen Sie einen Krankenwagen', respuesta: ['Llamen', 'a', 'una', 'ambulancia'], distractores: ['policía', 'un'] }
    ],

    // Unidad 1: Introducción
    'chino-u1-l1': [
        { frase: 'Nǐ hǎo, zàijiàn', respuesta: ['Hola', 'adiós'], distractores: ['gracias', 'mañana'] },
        { frase: 'Xièxie, bú kèqi', respuesta: ['Gracias', 'de', 'nada'], distractores: ['hola', 'por', 'favor'] }
    ],
    'chino-u1-l2': [
        { frase: 'Wǒ jiào Ana', respuesta: ['Me', 'llamo', 'Ana'], distractores: ['Eres', 'Tengo'] },
        { frase: 'Wǒ shì Āgēntíng rén', respuesta: ['Soy', 'argentino'], distractores: ['Eres', 'chino'] }
    ],
    'chino-u1-l3': [
        { frase: 'Zhè shì wǒ māma', respuesta: ['Esta', 'es', 'mi', 'mamá'], distractores: ['papá', 'tu'] },
        { frase: 'Wǒ yǒu yí gè gēge', respuesta: ['Tengo', 'un', 'hermano', 'mayor'], distractores: ['dos', 'hermana'] }
    ],

    // Unidad 2: Comida
    'chino-u2-l1': [
        { frase: 'Wǒ chī zǎofàn', respuesta: ['Como', 'el', 'desayuno'], distractores: ['cena', 'almuerzo'] },
        { frase: 'Wǒmen chī wǔfàn', respuesta: ['Nosotros', 'comemos', 'el', 'almuerzo'], distractores: ['cena', 'desayuno'] }
    ],
    'chino-u2-l2': [
        { frase: 'Wǒ xǐhuan mǐfàn', respuesta: ['Me', 'gusta', 'el', 'arroz'], distractores: ['fideos', 'la'] },
        { frase: 'Wǒ bù xǐhuan miàntiáo', respuesta: ['No', 'me', 'gustan', 'los', 'fideos'], distractores: ['arroz', 'el'] }
    ],
    'chino-u2-l3': [
        { frase: 'Wǒ yào shuǐ', respuesta: ['Quiero', 'agua'], distractores: ['té', 'café', 'Tengo'] },
        { frase: 'Wǒ yào yì bēi chá', respuesta: ['Quiero', 'una', 'taza', 'de', 'té'], distractores: ['café', 'agua'] }
    ],

    // Unidad 3: Viajes
    'chino-u3-l1': [
        { frase: 'Wǒ de xíngli zài nǎr?', respuesta: ['¿Dónde', 'está', 'mi', 'equipaje?'], distractores: ['tu', 'vuelo'] },
        { frase: 'Fēijī wǎndiǎn le', respuesta: ['El', 'avión', 'está', 'retrasado'], distractores: ['puerta', 'temprano'] }
    ],
    'chino-u3-l2': [
        { frase: 'Wǒ yào dìng yí gè fángjiān', respuesta: ['Quiero', 'reservar', 'una', 'habitación'], distractores: ['cancelar', 'dos'] },
        { frase: 'Bówùguǎn zài nǎr?', respuesta: ['¿Dónde', 'está', 'el', 'museo?'], distractores: ['hotel', 'la'] }
    ],
    'chino-u3-l3': [
        { frase: 'Jiùmìng! Wǒ xūyào yīshēng', respuesta: ['¡Socorro!', 'Necesito', 'un', 'médico'], distractores: ['farmacia', 'Tengo'] },
        { frase: 'Qǐng jiào jiùhùchē', respuesta: ['Por', 'favor', 'llamen', 'una', 'ambulancia'], distractores: ['policía', 'médico'] }
    ]
};


// Ejercicios de una lección: obtenerEjercicios('ingles-u2-l2'). Devuelve [] si no hay.
export function obtenerEjercicios(leccionId) {
    return EJERCICIOS[leccionId] || [];
}

// Arma el banco de palabras de un ejercicio (respuesta + distractores) y lo mezcla.
// Devuelve un array NUEVO, sin tocar los datos originales.
export function armarBanco(ejercicio) {
    const banco = ejercicio.respuesta.concat(ejercicio.distractores);

    // Mezcla de Fisher-Yates
    for (let i = banco.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const auxiliar = banco[i];
        banco[i] = banco[j];
        banco[j] = auxiliar;
    }
    return banco;
}
