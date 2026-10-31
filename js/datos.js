/* ==========================================================
   datos.js - Datos de demostración de LingoWeb
   Se carga ANTES que storage.js y que el script de cada vista.
   Acá no hay lógica, solo información.
   ========================================================== */

// ---------- CURSOS ----------
// Cada ejercicio: una frase a traducir, la respuesta (palabras en orden)
// y palabras distractoras. El banco se arma y se mezcla en la lección.
const CURSOS = [
    {
        id: 'ingles',
        nombre: 'Inglés desde Español',
        nivel: 'Principiante (A1)',
        bandera: 'Flag_of_the_United_Kingdom_(1-2).svg.webp',
        banderaAlt: 'Bandera de Reino Unido',
        unidades: [
            {
                id: 'u1',
                titulo: 'Introducción y saludos',
                lecciones: [
                    {
                        id: 'l1', titulo: 'Frases básicas',
                        descripcion: 'Saludos y expresiones de cortesía.',
                        ejercicios: [
                            { frase: 'Good morning', respuesta: ['Buenos', 'días'], distractores: ['Hola', 'Gracias', 'noches'] },
                            { frase: 'Thank you very much', respuesta: ['Muchas', 'gracias'], distractores: ['Adiós', 'por', 'favor'] },
                            { frase: 'See you tomorrow', respuesta: ['Hasta', 'mañana'], distractores: ['Buenas', 'ayer', 'Hola'] }
                        ]
                    },
                    {
                        id: 'l2', titulo: 'Presentaciones',
                        descripcion: 'Cómo decir tu nombre y de dónde sos.',
                        ejercicios: [
                            { frase: 'My name is Ana', respuesta: ['Me', 'llamo', 'Ana'], distractores: ['Tengo', 'eres', 'Hola'] },
                            { frase: 'Nice to meet you', respuesta: ['Mucho', 'gusto'], distractores: ['Adiós', 'Gracias', 'tarde'] },
                            { frase: 'I am from Argentina', respuesta: ['Soy', 'de', 'Argentina'], distractores: ['Voy', 'a', 'Chile'] }
                        ]
                    },
                    {
                        id: 'l3', titulo: 'Vocabulario de familia',
                        descripcion: 'Nombres de los miembros de la familia.',
                        ejercicios: [
                            { frase: 'This is my mother', respuesta: ['Esta', 'es', 'mi', 'madre'], distractores: ['padre', 'tu', 'hermana'] },
                            { frase: 'I have two brothers', respuesta: ['Tengo', 'dos', 'hermanos'], distractores: ['tres', 'primos', 'Soy'] },
                            { frase: 'My father is tall', respuesta: ['Mi', 'padre', 'es', 'alto'], distractores: ['bajo', 'madre', 'tu'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'aleman',
        nombre: 'Alemán desde Español',
        nivel: 'Principiante (A1)',
        bandera: 'Flag_of_Germany_(3-2).svg.webp',
        banderaAlt: 'Bandera de Alemania',
        unidades: [
            {
                id: 'u1',
                titulo: 'Introducción y saludos',
                lecciones: [
                    {
                        id: 'l1', titulo: 'Frases básicas',
                        descripcion: 'Saludos y expresiones de cortesía.',
                        ejercicios: [
                            { frase: 'Guten Tag, wie geht es dir?', respuesta: ['Buenos', 'días', '¿cómo', 'estás?'], distractores: ['Hola', 'Gracias', 'Adiós'] },
                            { frase: 'Danke schön', respuesta: ['Muchas', 'gracias'], distractores: ['Hola', 'favor', 'Adiós'] },
                            { frase: 'Bis morgen', respuesta: ['Hasta', 'mañana'], distractores: ['ayer', 'Buenas', 'noches'] }
                        ]
                    },
                    {
                        id: 'l2', titulo: 'Presentaciones',
                        descripcion: 'Cómo decir tu nombre y de dónde sos.',
                        ejercicios: [
                            { frase: 'Ich heiße Ana', respuesta: ['Me', 'llamo', 'Ana'], distractores: ['Tengo', 'eres', 'Hola'] },
                            { frase: 'Freut mich', respuesta: ['Mucho', 'gusto'], distractores: ['Adiós', 'Gracias', 'tarde'] },
                            { frase: 'Ich komme aus Argentinien', respuesta: ['Vengo', 'de', 'Argentina'], distractores: ['Voy', 'a', 'Chile'] }
                        ]
                    },
                    {
                        id: 'l3', titulo: 'Vocabulario de familia',
                        descripcion: 'Nombres de los miembros de la familia.',
                        ejercicios: [
                            { frase: 'Das ist meine Mutter', respuesta: ['Esta', 'es', 'mi', 'madre'], distractores: ['padre', 'tu', 'hermana'] },
                            { frase: 'Ich habe zwei Brüder', respuesta: ['Tengo', 'dos', 'hermanos'], distractores: ['tres', 'primos', 'Soy'] },
                            { frase: 'Mein Vater ist groß', respuesta: ['Mi', 'padre', 'es', 'alto'], distractores: ['bajo', 'madre', 'tu'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'chino',
        nombre: 'Chino Mandarín desde Español',
        nivel: 'Inicial (HSK 1)',
        bandera: "Flag_of_the_People's_Republic_of_China.svg",
        banderaAlt: 'Bandera de China',
        unidades: [
            {
                id: 'u1',
                titulo: 'Introducción y saludos',
                lecciones: [
                    {
                        id: 'l1', titulo: 'Frases básicas',
                        descripcion: 'Saludos y expresiones de cortesía (en pinyin).',
                        ejercicios: [
                            { frase: 'Zǎoshang hǎo', respuesta: ['Buenos', 'días'], distractores: ['Hola', 'Gracias', 'noches'] },
                            { frase: 'Xièxie, bú kèqi', respuesta: ['Gracias', 'de', 'nada'], distractores: ['Adiós', 'favor', 'Hola'] },
                            { frase: 'Zàijiàn, míngtiān jiàn', respuesta: ['Adiós', 'hasta', 'mañana'], distractores: ['ayer', 'Buenas', 'Hola'] }
                        ]
                    },
                    {
                        id: 'l2', titulo: 'Presentaciones',
                        descripcion: 'Cómo decir tu nombre y de dónde sos.',
                        ejercicios: [
                            { frase: 'Wǒ jiào Ana', respuesta: ['Me', 'llamo', 'Ana'], distractores: ['Tengo', 'eres', 'Hola'] },
                            { frase: 'Rènshi nǐ hěn gāoxìng', respuesta: ['Mucho', 'gusto'], distractores: ['Adiós', 'Gracias', 'tarde'] },
                            { frase: "Wǒ shì Ā'gēntíng rén", respuesta: ['Soy', 'argentino'], distractores: ['Voy', 'chileno', 'a'] }
                        ]
                    },
                    {
                        id: 'l3', titulo: 'Vocabulario de familia',
                        descripcion: 'Nombres de los miembros de la familia.',
                        ejercicios: [
                            { frase: 'Zhè shì wǒ māma', respuesta: ['Esta', 'es', 'mi', 'mamá'], distractores: ['papá', 'tu', 'hermana'] },
                            { frase: 'Wǒ yǒu liǎng gè gēge', respuesta: ['Tengo', 'dos', 'hermanos', 'mayores'], distractores: ['tres', 'primos', 'Soy'] },
                            { frase: 'Wǒ bàba hěn gāo', respuesta: ['Mi', 'papá', 'es', 'alto'], distractores: ['bajo', 'mamá', 'tu'] }
                        ]
                    }
                ]
            }
        ]
    }
];

// ---------- LIGAS ----------
// siguiente: liga a la que se asciende (null = liga máxima)
// ascienden: cantidad de primeros puestos que ascienden
const LIGAS = [
    { id: 'bronce', nombre: 'Liga de Bronce', siguiente: 'Liga de Plata', ascienden: 5 },
    { id: 'plata',  nombre: 'Liga de Plata',  siguiente: 'Liga de Oro',   ascienden: 5 },
    { id: 'oro',    nombre: 'Liga de Oro',    siguiente: null,            ascienden: 0 }
];

// ---------- LOGROS ----------
const LOGROS = [
    { id: 'primera-leccion', titulo: 'Primer paso',    descripcion: 'Completaste tu primera lección.' },
    { id: 'racha-3',         titulo: 'En racha',       descripcion: 'Alcanzaste 3 días seguidos de práctica.' },
    { id: 'xp-100',          titulo: 'Cien de XP',     descripcion: 'Acumulaste 100 XP.' },
    { id: 'opinion',         titulo: 'Voz propia',     descripcion: 'Dejaste tu primera opinión sobre un curso.' }
];

// ---------- TIENDA ----------
const CATEGORIAS_TIENDA = [
    { id: 'todos', nombre: 'Todos' },
    { id: 'vidas', nombre: 'Vidas' },
    { id: 'potenciadores', nombre: 'Potenciadores' },
    { id: 'avatares', nombre: 'Avatares' }
];

const TIENDA = [
    { id: 'vida-extra',   nombre: 'Vida extra',          descripcion: 'Una vida adicional para tu próxima lección.', precio: 30,  categoria: 'vidas' },
    { id: 'pack-vidas',   nombre: 'Pack de 5 vidas',     descripcion: 'Cinco vidas para practicar sin miedo.',       precio: 120, categoria: 'vidas' },
    { id: 'xp-doble',     nombre: 'XP doble (1 lección)', descripcion: 'Duplica la experiencia de tu próxima lección.', precio: 80,  categoria: 'potenciadores' },
    { id: 'congelar-racha', nombre: 'Congelar racha',    descripcion: 'Protege tu racha por un día sin práctica.',   precio: 100, categoria: 'potenciadores' },
    { id: 'avatar-zorro', nombre: 'Avatar Zorro',        descripcion: 'Un avatar distinto para tu perfil.',          precio: 150, categoria: 'avatares' },
    { id: 'avatar-robot', nombre: 'Avatar Robot',        descripcion: 'Un avatar distinto para tu perfil.',          precio: 150, categoria: 'avatares' }
];

// ---------- IDIOMAS DE INTERFAZ ----------
const IDIOMAS_INTERFAZ = [
    { id: 'es', nombre: 'Español' },
    { id: 'en', nombre: 'English' },
    { id: 'de', nombre: 'Deutsch' }
];

// ---------- USUARIOS DE DEMOSTRACIÓN ----------
// Son datos PARCIALES: storage.js completa lo que falta con valores por defecto.
// juanperez_web es la cuenta "completa"; el resto sirve para poblar el ranking.
const USUARIOS_DEMO = [
    {
        usuario: 'juanperez_web', nombre: 'Juan Pérez',
        email: 'juan.perez@alumnos.unlam.edu.ar', password: '123456',
        fechaAlta: '2025-03-10T10:00:00.000Z',
        xp: 350, xpHoy: 20, xpSemanal: 720, racha: 5, metaDiaria: 50, monedas: 120,
        liga: 'bronce',
        logros: ['primera-leccion', 'racha-3', 'xp-100'],
        progreso: {
            ingles: { completadas: ['u1-l1'], resultados: { 'u1-l1': { xp: 30, errores: 1 } } },
            aleman: { completadas: [], resultados: {} },
            chino:  { completadas: [], resultados: {} }
        }
    },
    { usuario: 'maria_g22',  nombre: 'María González', email: 'maria@demo.com',  password: '123456', xp: 900, xpSemanal: 850, racha: 12, liga: 'bronce' },
    { usuario: 'carlos_dev', nombre: 'Carlos Díaz',    email: 'carlos@demo.com', password: '123456', xp: 640, xpSemanal: 610, racha: 4,  liga: 'bronce' },
    { usuario: 'lucia_m',    nombre: 'Lucía Martínez', email: 'lucia@demo.com',  password: '123456', xp: 560, xpSemanal: 540, racha: 7,  liga: 'bronce' },
    { usuario: 'pablo_r',    nombre: 'Pablo Ruiz',     email: 'pablo@demo.com',  password: '123456', xp: 500, xpSemanal: 480, racha: 2,  liga: 'bronce' },
    { usuario: 'sofi_k',     nombre: 'Sofía Kim',      email: 'sofi@demo.com',   password: '123456', xp: 450, xpSemanal: 430, racha: 3,  liga: 'bronce' },
    { usuario: 'nico_t',     nombre: 'Nicolás Torres', email: 'nico@demo.com',   password: '123456', xp: 1300, xpSemanal: 1200, racha: 20, liga: 'plata' },
    { usuario: 'vale_p',     nombre: 'Valentina Paz',  email: 'vale@demo.com',   password: '123456', xp: 1150, xpSemanal: 1100, racha: 15, liga: 'plata' }
    // La Liga de Oro queda sin participantes a propósito: sirve para probar el estado vacío del ranking.
];

// ---------- OPINIONES DE DEMOSTRACIÓN ----------
const OPINIONES_DEMO = [
    { id: 1, cursoId: 'ingles', usuario: 'maria_g22',  calificacion: 5, comentario: 'Muy claro y divertido, ideal para empezar.', fecha: '2026-09-02T12:00:00.000Z' },
    { id: 2, cursoId: 'ingles', usuario: 'carlos_dev', calificacion: 4, comentario: 'Me gustaría que tuviera más ejercicios por lección.', fecha: '2026-09-15T18:30:00.000Z' },
    { id: 3, cursoId: 'aleman', usuario: 'lucia_m',    calificacion: 5, comentario: 'El banco de palabras ayuda un montón.', fecha: '2026-10-01T09:15:00.000Z' }
];