
export const CURSOS = [
    { id: 'ingles', nombre: 'Inglés desde Español', nivel: 'Principiante (A1)', bandera: 'Flag_of_the_United_Kingdom_(1-2).svg.webp', banderaAlt: 'Bandera de Reino Unido' },
    { id: 'aleman', nombre: 'Alemán desde Español', nivel: 'Principiante (A1)', bandera: 'Flag_of_Germany_(3-2).svg.webp', banderaAlt: 'Bandera de Alemania' },
    { id: 'chino', nombre: 'Chino Mandarín desde Español', nivel: 'Inicial (HSK 1)', bandera: "Flag_of_the_People's_Republic_of_China.svg", banderaAlt: 'Bandera de China' },
    { id: 'italiano', nombre: 'Italiano desde Español', nivel: 'Principiante (A1)', bandera: 'Flag_of_italy.svg', banderaAlt: 'Bandera de Italia' },
    { id: 'frances', nombre: 'Francés desde Español', nivel: 'Principiante (A1)', bandera: 'Flag_of_France.svg', banderaAlt: 'Bandera de Francia' },
    { id: 'japones', nombre: 'Japonés desde Español', nivel: 'Inicial (N5)', bandera: "Flag_of_Japan.svg", banderaAlt: 'Bandera de Japón' },
    { id: 'arabe', nombre: 'Árabe desde Español', nivel: 'Principiante (A1)', bandera: 'Flag_of_Saudi_Arabia.svg', banderaAlt: 'Bandera de Arabia Saudita' },
    { id: 'portugues', nombre: 'Portugués desde Español', nivel: 'Principiante (A1)', bandera: 'Flag_of_Portugal_(official).svg', banderaAlt: 'Bandera de Portugal' },
    { id: 'ruso', nombre: 'Ruso desde Español', nivel: 'Inicial (A1)', bandera: "Flag_of_Russia.svg", banderaAlt: 'Bandera de Rusia' }
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
    },

    {
        id: 'italiano-u1',
        cursoId: 'italiano',
        numero: 1,
        icono: '👋',
        titulo: 'Introducción',
        descripcion: 'Aprendé a saludar, presentarte y hablar de tu familia en italiano.',
        lecciones: [
            {
                id: 'italiano-u1-l1', numero: 1, titulo: 'Frases básicas',
                temas: ['Ciao, buongiorno y buonasera', 'Arrivederci, grazie y per favore', 'Preguntar Come stai?']
            },
            {
                id: 'italiano-u1-l2', numero: 2, titulo: 'Presentaciones',
                temas: ['Decir tu nombre y edad', 'El verbo essere', 'País y nacionalidad']
            },
            {
                id: 'italiano-u1-l3', numero: 3, titulo: 'Mi familia',
                temas: ['Madre, padre, fratello y sorella', 'Posesivos: mio, mia, tuo, tua', 'Describir a tu familia']
            }
        ]
    },
    {
        id: 'italiano-u2',
        cursoId: 'italiano',
        numero: 2,
        icono: '🍝',
        titulo: 'Comida',
        descripcion: 'Conocé la gastronomía italiana, expresá tus gustos y aprendé a pedir comida.',
        lecciones: [
            {
                id: 'italiano-u2-l1', numero: 1, titulo: 'Comidas del día',
                temas: ['Colazione, pranzo y cena', 'Alimentos cotidianos', 'Decir qué comés durante el día']
            },
            {
                id: 'italiano-u2-l2', numero: 2, titulo: 'Platos italianos',
                temas: ['Pizza, pasta y gelato', 'Mi piace / Non mi piace', 'Artículos determinados e indeterminados']
            },
            {
                id: 'italiano-u2-l3', numero: 3, titulo: 'En el restaurante',
                temas: ['Bebidas: acqua, vino y caffè', 'Vorrei... (Quisiera...)', 'Pedir la cuenta y ordenar comida']
            }
        ]
    },
    {
        id: 'italiano-u3',
        cursoId: 'italiano',
        numero: 3,
        icono: '✈️',
        titulo: 'Viajes',
        descripcion: 'Aprendé a comunicarte en aeropuertos, hoteles y lugares turísticos de Italia.',
        lecciones: [
            {
                id: 'italiano-u3-l1', numero: 1, titulo: 'Aeropuerto',
                temas: ['Aeroporto y bagaglio', 'Documentos y pasaporte', 'Preguntar por vuelos y horarios']
            },
            {
                id: 'italiano-u3-l2', numero: 2, titulo: 'Hotel y turismo',
                temas: ['Reservar una habitación', 'Preguntar dónde está un lugar', 'Monumentos y ciudades italianas']
            },
            {
                id: 'italiano-u3-l3', numero: 3, titulo: 'Emergencias',
                temas: ['Chiamate aiuto! (¡Llamen a ayuda!)', 'Médico y farmacia', 'Pedir asistencia y ayuda']
            }
        ]
    },

    {
        id: 'frances-u1',
        cursoId: 'frances',
        numero: 1,
        icono: '👋',
        titulo: 'Introducción',
        descripcion: 'Aprendé a saludar, presentarte y hablar de tu familia en francés.',
        lecciones: [
            {
                id: 'frances-u1-l1', numero: 1, titulo: 'Frases básicas',
                temas: ['Bonjour, salut y bonsoir', 'Au revoir, merci y s’il vous plaît', 'Preguntar Comment ça va?']
            },
            {
                id: 'frances-u1-l2', numero: 2, titulo: 'Presentaciones',
                temas: ['Decir tu nombre y edad', 'Los verbos être y avoir', 'País y nacionalidad']
            },
            {
                id: 'frances-u1-l3', numero: 3, titulo: 'Mi familia',
                temas: ['Mère, père, frère y sœur', 'Posesivos: mon, ma, mes', 'Describir a tu familia']
            }
        ]
    },
    {
        id: 'frances-u2',
        cursoId: 'frances',
        numero: 2,
        icono: '🥐',
        titulo: 'Comida',
        descripcion: 'Descubrí la gastronomía francesa y aprendé a pedir comida en un restaurante.',
        lecciones: [
            {
                id: 'frances-u2-l1', numero: 1, titulo: 'Comidas del día',
                temas: ['Petit-déjeuner, déjeuner y dîner', 'Alimentos cotidianos', 'Decir qué comés durante el día']
            },
            {
                id: 'frances-u2-l2', numero: 2, titulo: 'Comidas francesas',
                temas: ['Pain, fromage, croissant y crêpe', 'J’aime / Je n’aime pas', 'Artículos: le, la, les y un, une']
            },
            {
                id: 'frances-u2-l3', numero: 3, titulo: 'En el restaurante',
                temas: ['Boissons: eau, café y jus', 'Je voudrais... (Quisiera...)', 'Pedir comida y la cuenta']
            }
        ]
    },
    {
        id: 'frances-u3',
        cursoId: 'frances',
        numero: 3,
        icono: '✈️',
        titulo: 'Viajes',
        descripcion: 'Aprendé a desenvolverte en aeropuertos, hoteles y lugares turísticos de Francia.',
        lecciones: [
            {
                id: 'frances-u3-l1', numero: 1, titulo: 'Aeropuerto',
                temas: ['Aéroport y bagages', 'Documentos y pasaporte', 'Preguntar por vuelos y horarios']
            },
            {
                id: 'frances-u3-l2', numero: 2, titulo: 'Hotel y turismo',
                temas: ['Réserver une chambre', 'Preguntar y dar direcciones', 'Lugares turísticos de Francia']
            },
            {
                id: 'frances-u3-l3', numero: 3, titulo: 'Emergencias',
                temas: ['Au secours! (¡Socorro!)', 'Médico y farmacia', 'Pedir ayuda y asistencia']
            }
        ]
    },

    {
        id: 'japones-u1',
        cursoId: 'japones',
        numero: 1,
        icono: '👋',
        titulo: 'Introducción',
        descripcion: 'Aprendé los primeros saludos, a presentarte y a hablar de tu familia en japonés.',
        lecciones: [
            {
                id: 'japones-u1-l1', numero: 1, titulo: 'Saludos básicos',
                temas: ['こんにちは (Konnichiwa): hola', 'ありがとう (Arigatou): gracias', 'さようなら (Sayounara): adiós']
            },
            {
                id: 'japones-u1-l2', numero: 2, titulo: 'Presentaciones',
                temas: ['Decir tu nombre: Watashi wa... desu', 'Preguntar el nombre de otra persona', 'País y nacionalidad']
            },
            {
                id: 'japones-u1-l3', numero: 3, titulo: 'Mi familia',
                temas: ['お母さん (Okaasan): madre y お父さん (Otousan): padre', '兄 (Ani): hermano y 姉 (Ane): hermana', 'Hablar de los integrantes de tu familia']
            }
        ]
    },
    {
        id: 'japones-u2',
        cursoId: 'japones',
        numero: 2,
        icono: '🍣',
        titulo: 'Comida',
        descripcion: 'Descubrí la gastronomía japonesa y aprendé a expresar tus gustos y pedir comida.',
        lecciones: [
            {
                id: 'japones-u2-l1', numero: 1, titulo: 'Comidas del día',
                temas: ['朝ごはん (Asagohan): desayuno', '昼ごはん (Hirugohan): almuerzo', '晩ごはん (Bangohan): cena']
            },
            {
                id: 'japones-u2-l2', numero: 2, titulo: 'Comidas japonesas',
                temas: ['寿司 (Sushi), ラーメン (Ramen) y ご飯 (Gohan)', 'Me gusta: Suki desu', 'No me gusta: Suki ja arimasen']
            },
            {
                id: 'japones-u2-l3', numero: 3, titulo: 'En el restaurante',
                temas: ['水 (Mizu): agua y お茶 (Ocha): té', 'これをください (Kore o kudasai): esto, por favor', 'Pedir comida y pagar la cuenta']
            }
        ]
    },
    {
        id: 'japones-u3',
        cursoId: 'japones',
        numero: 3,
        icono: '✈️',
        titulo: 'Viajes',
        descripcion: 'Aprendé expresiones útiles para viajar por Japón, alojarte y conocer sus ciudades.',
        lecciones: [
            {
                id: 'japones-u3-l1', numero: 1, titulo: 'Aeropuerto',
                temas: ['空港 (Kuukou): aeropuerto', 'パスポート (Pasupooto): pasaporte', 'Preguntar por vuelos y equipaje']
            },
            {
                id: 'japones-u3-l2', numero: 2, titulo: 'Hotel y turismo',
                temas: ['ホテル (Hoteru): hotel', 'Preguntar dónde está un lugar', 'Lugares turísticos de Japón']
            },
            {
                id: 'japones-u3-l3', numero: 3, titulo: 'Emergencias',
                temas: ['助けてください (Tasukete kudasai): ¡Ayúdeme, por favor!', '病院 (Byouin): hospital y 薬 (Kusuri): medicamento', 'Pedir ayuda y asistencia']
            }
        ]
    },

    {
        id: 'arabe-u1',
        cursoId: 'arabe',
        numero: 1,
        icono: '👋',
        titulo: 'Introducción',
        descripcion: 'Aprendé los saludos, a presentarte y a hablar de tu familia en árabe.',
        lecciones: [
            {
                id: 'arabe-u1-l1', numero: 1, titulo: 'Frases básicas',
                temas: ['مرحبا (Marhaban): hola', 'شكرا (Shukran): gracias', 'مع السلامة (Ma’a as-salama): adiós']
            },
            {
                id: 'arabe-u1-l2', numero: 2, titulo: 'Presentaciones',
                temas: ['Decir tu nombre: Ismi...', 'Preguntar cómo está alguien: Kayfa haluk?', 'País y nacionalidad']
            },
            {
                id: 'arabe-u1-l3', numero: 3, titulo: 'Mi familia',
                temas: ['أم (Umm): madre y أب (Ab): padre', 'أخ (Akh): hermano y أخت (Ukht): hermana', 'Hablar de los integrantes de tu familia']
            }
        ]
    },
    {
        id: 'arabe-u2',
        cursoId: 'arabe',
        numero: 2,
        icono: '🥙',
        titulo: 'Comida',
        descripcion: 'Conocé la gastronomía árabe y aprendé a expresar tus gustos y pedir comida.',
        lecciones: [
            {
                id: 'arabe-u2-l1', numero: 1, titulo: 'Comidas del día',
                temas: ['فطور (Futur): desayuno', 'غداء (Ghada): almuerzo', 'عشاء (Asha): cena']
            },
            {
                id: 'arabe-u2-l2', numero: 2, titulo: 'Comidas tradicionales',
                temas: ['حمص (Hummus), فلافل (Falafel) y خبز (Khobz)', 'Expresar gustos y preferencias', 'Vocabulario de frutas y verduras']
            },
            {
                id: 'arabe-u2-l3', numero: 3, titulo: 'En el restaurante',
                temas: ['ماء (Ma): agua y شاي (Shay): té', 'Quisiera: Uridu...', 'Pedir comida y la cuenta']
            }
        ]
    },
    {
        id: 'arabe-u3',
        cursoId: 'arabe',
        numero: 3,
        icono: '✈️',
        titulo: 'Viajes',
        descripcion: 'Aprendé expresiones útiles para viajar, alojarte y recorrer ciudades de habla árabe.',
        lecciones: [
            {
                id: 'arabe-u3-l1', numero: 1, titulo: 'Aeropuerto',
                temas: ['مطار (Matar): aeropuerto', 'جواز السفر (Jawaz as-safar): pasaporte', 'Preguntar por vuelos y equipaje']
            },
            {
                id: 'arabe-u3-l2', numero: 2, titulo: 'Hotel y turismo',
                temas: ['فندق (Funduq): hotel', 'Preguntar y dar direcciones', 'Lugares turísticos y ciudades']
            },
            {
                id: 'arabe-u3-l3', numero: 3, titulo: 'Emergencias',
                temas: ['ساعدني (Saedni): ¡Ayúdame!', 'مستشفى (Mustashfa): hospital y صيدلية (Saydaliyya): farmacia', 'Pedir ayuda y asistencia']
            }
        ]
    },

    {
        id: 'portugues-u1',
        cursoId: 'portugues',
        numero: 1,
        icono: '👋',
        titulo: 'Introducción',
        descripcion: 'Aprendé a saludar, presentarte y hablar de tu familia en portugués.',
        lecciones: [
            {
                id: 'portugues-u1-l1', numero: 1, titulo: 'Frases básicas',
                temas: ['Olá, bom dia y boa tarde', 'Tchau, obrigado y por favor', 'Preguntar Tudo bem?']
            },
            {
                id: 'portugues-u1-l2', numero: 2, titulo: 'Presentaciones',
                temas: ['Decir tu nombre y edad', 'Los verbos ser y estar', 'País y nacionalidad']
            },
            {
                id: 'portugues-u1-l3', numero: 3, titulo: 'Mi familia',
                temas: ['Mãe, pai, irmão y irmã', 'Posesivos: meu, minha, seu y sua', 'Describir a tu familia']
            }
        ]
    },
    {
        id: 'portugues-u2',
        cursoId: 'portugues',
        numero: 2,
        icono: '🍲',
        titulo: 'Comida',
        descripcion: 'Descubrí la gastronomía brasileña y portuguesa y aprendé a pedir comida.',
        lecciones: [
            {
                id: 'portugues-u2-l1', numero: 1, titulo: 'Comidas del día',
                temas: ['Café da manhã, almoço y jantar', 'Alimentos cotidianos', 'Decir qué comés durante el día']
            },
            {
                id: 'portugues-u2-l2', numero: 2, titulo: 'Comidas típicas',
                temas: ['Feijoada, pão de queijo y brigadeiro', 'Eu gosto / Eu não gosto', 'Artículos: o, a, os y as']
            },
            {
                id: 'portugues-u2-l3', numero: 3, titulo: 'En el restaurante',
                temas: ['Água, suco y café', 'Eu gostaria de... (Quisiera...)', 'Pedir comida y la cuenta']
            }
        ]
    },
    {
        id: 'portugues-u3',
        cursoId: 'portugues',
        numero: 3,
        icono: '✈️',
        titulo: 'Viajes',
        descripcion: 'Aprendé a desenvolverte en aeropuertos, hoteles y destinos turísticos de habla portuguesa.',
        lecciones: [
            {
                id: 'portugues-u3-l1', numero: 1, titulo: 'Aeropuerto',
                temas: ['Aeroporto y bagagem', 'Documentos y pasaporte', 'Preguntar por vuelos y horarios']
            },
            {
                id: 'portugues-u3-l2', numero: 2, titulo: 'Hotel y turismo',
                temas: ['Reservar um quarto', 'Preguntar y dar direcciones', 'Lugares turísticos de Brasil y Portugal']
            },
            {
                id: 'portugues-u3-l3', numero: 3, titulo: 'Emergencias',
                temas: ['Socorro! (¡Socorro!)', 'Médico y farmacia', 'Pedir ayuda y asistencia']
            }
        ]
    },

    {
        id: 'ruso-u1',
        cursoId: 'ruso',
        numero: 1,
        icono: '👋',
        titulo: 'Introducción',
        descripcion: 'Aprendé el alfabeto cirílico, los saludos y a presentarte en ruso.',
        lecciones: [
            {
                id: 'ruso-u1-l1', numero: 1, titulo: 'Saludos básicos',
                temas: ['Привет (Privet): hola', 'Здравствуйте (Zdravstvuyte): buenos días / hola formal', 'Спасибо (Spasibo): gracias y До свидания (Do svidaniya): adiós']
            },
            {
                id: 'ruso-u1-l2', numero: 2, titulo: 'Presentaciones',
                temas: ['Decir tu nombre: Menya zovut...', 'El verbo быть (Byt): ser o estar', 'País y nacionalidad']
            },
            {
                id: 'ruso-u1-l3', numero: 3, titulo: 'Mi familia',
                temas: ['Мама (Mama): madre y папа (Papa): padre', 'Брат (Brat): hermano y сестра (Sestra): hermana', 'Describir a tu familia']
            }
        ]
    },
    {
        id: 'ruso-u2',
        cursoId: 'ruso',
        numero: 2,
        icono: '🥟',
        titulo: 'Comida',
        descripcion: 'Descubrí la gastronomía rusa y aprendé a expresar tus gustos y pedir comida.',
        lecciones: [
            {
                id: 'ruso-u2-l1', numero: 1, titulo: 'Comidas del día',
                temas: ['Завтрак (Zavtrak): desayuno', 'Обед (Obed): almuerzo', 'Ужин (Uzhin): cena']
            },
            {
                id: 'ruso-u2-l2', numero: 2, titulo: 'Comidas típicas',
                temas: ['Борщ (Borshch), пельмени (Pelmeni) y блины (Bliny)', 'Me gusta: Мне нравится (Mne nravitsya)', 'Vocabulario de frutas y verduras']
            },
            {
                id: 'ruso-u2-l3', numero: 3, titulo: 'En el restaurante',
                temas: ['Вода (Voda): agua y чай (Chay): té', 'Я хочу... (Ya khochu...): quiero...', 'Pedir comida y la cuenta']
            }
        ]
    },
    {
        id: 'ruso-u3',
        cursoId: 'ruso',
        numero: 3,
        icono: '✈️',
        titulo: 'Viajes',
        descripcion: 'Aprendé expresiones útiles para viajar, alojarte y conocer ciudades de Rusia.',
        lecciones: [
            {
                id: 'ruso-u3-l1', numero: 1, titulo: 'Aeropuerto',
                temas: ['Аэропорт (Aeroport): aeropuerto', 'Паспорт (Pasport): pasaporte', 'Preguntar por vuelos y equipaje']
            },
            {
                id: 'ruso-u3-l2', numero: 2, titulo: 'Hotel y turismo',
                temas: ['Гостиница (Gostinitsa): hotel', 'Preguntar y dar direcciones', 'Lugares turísticos de Rusia']
            },
            {
                id: 'ruso-u3-l3', numero: 3, titulo: 'Emergencias',
                temas: ['Помогите! (Pomogite!): ¡Ayuda!', 'Больница (Bolnitsa): hospital y аптека (Apteka): farmacia', 'Pedir ayuda y asistencia']
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

    //aleman

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

    // chino
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
    ],

    // italiano

    'italiano-u1-l1': [
        { frase: 'Buongiorno, come stai?', respuesta: ['Buenos', 'días,', '¿cómo', 'estás?'], distractores: ['noches', 'gracias'] },
        { frase: 'Scusa, grazie mille', respuesta: ['Perdón,', 'muchas', 'gracias'], distractores: ['por', 'favor', 'adiós'] }
    ],
    'italiano-u1-l2': [
        { frase: 'Mi chiamo Ana', respuesta: ['Me', 'llamo', 'Ana'], distractores: ['Tengo', 'eres'] },
        { frase: 'Lei è del Brasile', respuesta: ['Ella', 'es', 'de', 'Brasil'], distractores: ['Él', 'voy', 'Chile'] }
    ],
    'italiano-u1-l3': [
        { frase: 'Mia sorella è alta', respuesta: ['Mi', 'hermana', 'es', 'alta'], distractores: ['hermano', 'tu', 'baja'] },
        { frase: 'Suo fratello è giovane', respuesta: ['Su', 'hermano', 'es', 'joven'], distractores: ['hermana', 'mi', 'viejo'] }
    ],

    'italiano-u2-l1': [
        { frase: 'Faccio colazione alle otto', respuesta: ['Desayuno', 'a', 'las', 'ocho'], distractores: ['almuerzo', 'nueve'] },
        { frase: 'Ceniamo alle nove', respuesta: ['Cenamos', 'a', 'las', 'nueve'], distractores: ['almorzamos', 'ocho', 'tres'] }
    ],
    'italiano-u2-l2': [
        { frase: 'Mi piace la pizza', respuesta: ['Me', 'gusta', 'la', 'pizza'], distractores: ['no', 'el', 'pasta'] },
        { frase: 'Non mi piace il pesce', respuesta: ['No', 'me', 'gusta', 'el', 'pescado'], distractores: ['pollo', 'la'] }
    ],
    'italiano-u2-l3': [
        { frase: 'Acqua e succo, per favore', respuesta: ['Agua', 'y', 'jugo,', 'por', 'favor'], distractores: ['café', 'té'] },
        { frase: 'Vorresti un caffè?', respuesta: ['¿Quieres', 'un', 'café?'], distractores: ['té', 'agua', 'Quiero'] }
    ],

    'italiano-u3-l1': [
        { frase: 'Dov’è il mio bagaglio?', respuesta: ['¿Dónde', 'está', 'mi', 'equipaje?'], distractores: ['tu', 'vuelo'] },
        { frase: 'Il volo è in ritardo', respuesta: ['El', 'vuelo', 'está', 'demorado'], distractores: ['puerta', 'temprano', 'la'] }
    ],
    'italiano-u3-l2': [
        { frase: 'Voglio prenotare una camera', respuesta: ['Quiero', 'reservar', 'una', 'habitación'], distractores: ['cancelar', 'dos'] },
        { frase: 'Dov’è il museo?', respuesta: ['¿Dónde', 'está', 'el', 'museo?'], distractores: ['hotel', 'la'] }
    ],
    'italiano-u3-l3': [
        { frase: 'Aiuto, ho bisogno di un medico', respuesta: ['Ayuda,', 'necesito', 'un', 'médico'], distractores: ['farmacia', 'tengo'] },
        { frase: 'Chiamate un’ambulanza', respuesta: ['Llamen', 'a', 'una', 'ambulancia'], distractores: ['policía', 'un'] }
    ],

    // frances

    'frances-u1-l1': [
        { frase: 'Bonjour, comment ça va?', respuesta: ['Buenos', 'días,', '¿cómo', 'estás?'], distractores: ['noches', 'gracias'] },
        { frase: 'Désolé, merci beaucoup', respuesta: ['Perdón,', 'muchas', 'gracias'], distractores: ['por', 'favor', 'adiós'] }
    ],
    'frances-u1-l2': [
        { frase: 'Je m’appelle Ana', respuesta: ['Me', 'llamo', 'Ana'], distractores: ['Tengo', 'eres'] },
        { frase: 'Elle vient du Brésil', respuesta: ['Ella', 'es', 'de', 'Brasil'], distractores: ['Él', 'voy', 'Chile'] }
    ],
    'frances-u1-l3': [
        { frase: 'Ma sœur est grande', respuesta: ['Mi', 'hermana', 'es', 'alta'], distractores: ['hermano', 'tu', 'baja'] },
        { frase: 'Son frère est jeune', respuesta: ['Su', 'hermano', 'es', 'joven'], distractores: ['hermana', 'mi', 'viejo'] }
    ],

    'frances-u2-l1': [
        { frase: 'Je prends le petit-déjeuner à huit heures', respuesta: ['Desayuno', 'a', 'las', 'ocho'], distractores: ['almuerzo', 'nueve'] },
        { frase: 'Nous dînons à neuf heures', respuesta: ['Cenamos', 'a', 'las', 'nueve'], distractores: ['almorzamos', 'ocho', 'tres'] }
    ],
    'frances-u2-l2': [
        { frase: 'J’aime la pizza', respuesta: ['Me', 'gusta', 'la', 'pizza'], distractores: ['no', 'el', 'pasta'] },
        { frase: 'Je n’aime pas le poisson', respuesta: ['No', 'me', 'gusta', 'el', 'pescado'], distractores: ['pollo', 'la'] }
    ],
    'frances-u2-l3': [
        { frase: 'De l’eau et du jus, s’il vous plaît', respuesta: ['Agua', 'y', 'jugo,', 'por', 'favor'], distractores: ['café', 'té'] },
        { frase: 'Vous voulez du café?', respuesta: ['¿Quieres', 'café?'], distractores: ['té', 'agua', 'Quiero'] }
    ],

    'frances-u3-l1': [
        { frase: 'Où est mon bagage?', respuesta: ['¿Dónde', 'está', 'mi', 'equipaje?'], distractores: ['tu', 'vuelo'] },
        { frase: 'Le vol est en retard', respuesta: ['El', 'vuelo', 'está', 'demorado'], distractores: ['puerta', 'temprano', 'la'] }
    ],
    'frances-u3-l2': [
        { frase: 'Je veux réserver une chambre', respuesta: ['Quiero', 'reservar', 'una', 'habitación'], distractores: ['cancelar', 'dos'] },
        { frase: 'Où est le musée?', respuesta: ['¿Dónde', 'está', 'el', 'museo?'], distractores: ['hotel', 'la'] }
    ],
    'frances-u3-l3': [
        { frase: 'Au secours, j’ai besoin d’un médecin', respuesta: ['Ayuda,', 'necesito', 'un', 'médico'], distractores: ['farmacia', 'tengo'] },
        { frase: 'Appelez une ambulance', respuesta: ['Llamen', 'a', 'una', 'ambulancia'], distractores: ['policía', 'un'] }
    ],

    // japones

    'japones-u1-l1': [
        { frase: 'こんにちは (Konnichiwa)', respuesta: ['Hola'], distractores: ['Gracias', 'Adiós'] },
        { frase: 'ありがとうございます (Arigatou gozaimasu)', respuesta: ['Muchas', 'gracias'], distractores: ['Buenos', 'días'] }
    ],
    'japones-u1-l2': [
        { frase: '私の名前はアナです (Watashi no namae wa Ana desu)', respuesta: ['Mi', 'nombre', 'es', 'Ana'], distractores: ['Tengo', 'hermana'] },
        { frase: '彼女はブラジル出身です (Kanojo wa Burajiru shusshin desu)', respuesta: ['Ella', 'es', 'de', 'Brasil'], distractores: ['Él', 'Chile', 'voy'] }
    ],
    'japones-u1-l3': [
        { frase: '私の姉は背が高いです (Watashi no ane wa se ga takai desu)', respuesta: ['Mi', 'hermana', 'es', 'alta'], distractores: ['hermano', 'baja', 'tu'] },
        { frase: '彼の兄は若いです (Kare no ani wa wakai desu)', respuesta: ['Su', 'hermano', 'es', 'joven'], distractores: ['hermana', 'viejo', 'mi'] }
    ],

    'japones-u2-l1': [
        { frase: '八時に朝ごはんを食べます (Hachiji ni asagohan o tabemasu)', respuesta: ['Desayuno', 'a', 'las', 'ocho'], distractores: ['almuerzo', 'nueve'] },
        { frase: '九時に晩ごはんを食べます (Kuji ni bangohan o tabemasu)', respuesta: ['Cenamos', 'a', 'las', 'nueve'], distractores: ['almorzamos', 'ocho', 'tres'] }
    ],
    'japones-u2-l2': [
        { frase: 'ピザが好きです (Piza ga suki desu)', respuesta: ['Me', 'gusta', 'la', 'pizza'], distractores: ['no', 'el', 'pasta'] },
        { frase: '魚が好きではありません (Sakana ga suki dewa arimasen)', respuesta: ['No', 'me', 'gusta', 'el', 'pescado'], distractores: ['pollo', 'la'] }
    ],
    'japones-u2-l3': [
        { frase: '水とジュースをください (Mizu to juusu o kudasai)', respuesta: ['Agua', 'y', 'jugo,', 'por', 'favor'], distractores: ['café', 'té'] },
        { frase: 'コーヒーはいかがですか (Koohii wa ikaga desu ka)', respuesta: ['¿Quieres', 'café?'], distractores: ['té', 'agua', 'Quiero'] }
    ],

    'japones-u3-l1': [
        { frase: '私の荷物はどこですか (Watashi no nimotsu wa doko desu ka)', respuesta: ['¿Dónde', 'está', 'mi', 'equipaje?'], distractores: ['tu', 'vuelo'] },
        { frase: '飛行機は遅れています (Hikouki wa okurete imasu)', respuesta: ['El', 'vuelo', 'está', 'demorado'], distractores: ['puerta', 'temprano', 'la'] }
    ],
    'japones-u3-l2': [
        { frase: '部屋を予約したいです (Heya o yoyaku shitai desu)', respuesta: ['Quiero', 'reservar', 'una', 'habitación'], distractores: ['cancelar', 'dos'] },
        { frase: '博物館はどこですか (Hakubutsukan wa doko desu ka)', respuesta: ['¿Dónde', 'está', 'el', 'museo?'], distractores: ['hotel', 'la'] }
    ],
    'japones-u3-l3': [
        { frase: '助けてください、医者が必要です (Tasukete kudasai, isha ga hitsuyou desu)', respuesta: ['Ayuda,', 'necesito', 'un', 'médico'], distractores: ['farmacia', 'tengo'] },
        { frase: '救急車を呼んでください (Kyuukyuusha o yonde kudasai)', respuesta: ['Llamen', 'a', 'una', 'ambulancia'], distractores: ['policía', 'un'] }
    ],
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

// Elementos de la tienda. categoria: 'vidas' | 'potenciadores'
export const PRODUCTOS = [
    { id: 'rellenar-vidas', icono: '❤️', nombre: 'Rellenar vidas', descripcion: 'Recuperá tus vidas al instante para seguir practicando.', precio: 10, categoria: 'vidas' },
    { id: 'vidas-ilimitadas', icono: '♾️', nombre: 'Vidas ilimitadas', descripcion: 'Practicá sin límites, incluso si te equivocás.', precio: 30, categoria: 'vidas' },
    { id: 'congelar-racha', icono: '🧊', nombre: 'Congelar racha', descripcion: 'Mantiene tu racha activa aunque te saltees un día.', precio: 15, categoria: 'potenciadores' },
    { id: 'xp-doble', icono: '⚡', nombre: 'XP doble', descripcion: 'Ganá el doble de experiencia durante 15 minutos.', precio: 20, categoria: 'potenciadores' }
];

// Personas de demostración que aparecen en seguidos, seguidores y actividad
export const COMUNIDAD = [
    { usuario: 'Maria_23', avatar: 'Avatar_panda.jpg', xp: 850, cuando: 'Hoy', actividad: '¡Quedó en el puesto #1 de la División Bronce esta semana!', premio: '🥇' },
    { usuario: 'Carlos_Dev', avatar: 'Avatar_gato.jpg', xp: 610, cuando: 'Ayer', actividad: '¡Quedó entre los 3 primeros de la División Bronce 2 veces!', premio: '🥉' },
    { usuario: 'Lili78', avatar: 'Avatar_perro.jpg', xp: 550, cuando: 'Hace 2 días', actividad: 'Completó 3 lecciones seguidas de Inglés.', premio: '📚' },
    { usuario: 'Lucas_93', avatar: 'Avatar_leon.jpg', xp: 430, cuando: 'Hace 3 días', actividad: 'Alcanzó una racha de 7 días de aprendizaje.', premio: '🔥' },
    { usuario: 'MiaSanchez', avatar: 'Avatar_tiburon.jpg', xp: 360, cuando: 'Hace 4 días', actividad: 'Completó una nueva unidad de Chino mandarín.', premio: '⭐' }
];
