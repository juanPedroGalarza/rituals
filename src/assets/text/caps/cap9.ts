import { CapMultiple, OptionCap } from "../caps";

const optionFly: OptionCap = {
    text: "Volar",
    selection: "e", cap: 10,
    action: "RED"
};

const cap: CapMultiple = {
    a: {
        text: 'Al subirte reconoces al taxista y resulta ser un amigo de la infancia. Él también te reconoce y cuando estaba apunto de decirte algo, mira tu rostro y entiende que estás en aprietos. Arranca rápidamente y te lleva a tu casa. Cuando salen del pueblo te dice "No se en que te metiste esta vez ni como llegaste hasta este lugar pero puedo notar que esto es serio ¿Puedes decirme que sucede?',
        options: [
            {
                text: "...",
                selection: "a", cap: 10
            },
            {
                text: "Contar la historia a detalle",
                selection: "b", cap: 10,
                action: "NO_MUTED", condition: "NO_MUTED"
            }
        ]
    },
    b: {
        text: 'El taxi estaba ocupado, igualmente no lo hubieras podido usar... Sigues caminando cuando de repente todo se pone rojo, todo es tan rojo que no puedes ver figuras, solo rojo.',
        options: [
            {
                text: "Rojo",
                selection: "e", cap: 10,
                action: "RED"
            },
            {
                text: "Rojo",
                selection: "e", cap: 10,
                action: "RED"
            },
            {
                text: "Rojo",
                selection: "e", cap: 10,
                action: "RED"
            }
        ]
    },
    c: {
        text: "Una vez terminado el plato principal te diriges al postre, un postre tan pero tan rico que te deja la boca babeando con solo pensarlo, así que te vas volando a probarlo.",
        options: [
            {
                text: "Comer",
                selection: "c", cap: 10
            },
            {
                text: "C o M e R",
                selection: "c", cap: 10
            },
            {
                text: "COMER",
                selection: "c", cap: 10
            }
        ]
    },
    d: {
        text: "Nuevamente te volvió a usar pero con más gente, pobre gente...",
        options: [
            {
                text: ":)",
                selection: "d", cap: 10,
                action: "HAPPY"
            },
            {
                text: ":(",
                selection: "d", cap: 10,
                action: "SAD"
            }
        ]
    },
    e: {
        text: "Luego de unos movimientos extraños, el hombre pájaro empieza a ingerir una extraña bebida en uno de los del centro. Éste empieza a contorsionarse, cuando se detiene rompe la soga en la que está atado y salta contra el de adelante suyo, pero antes de que termine te desmayas nuevamente.",
        options: [
            {
                ...optionFly
            }
        ]
    },
    f: {
        text: "Intentas hacer fuerza para desatarte, pero del esfuerzo la vista se te empieza a nublar y no eres consciente de tu alrededor, más que de unos ruidos graves. Cuando recuperas la compostura ves en el centro un charco de sangre y una figura extraña que se camufla apenas en el rojo. Cuando termina, regresa a hacer otra vez ese ruido grave, pero esta vez aturde y el color rojo empieza a esparcirse por todos lados.",
        options: [
            {
                ...optionFly
            }
        ]
    },
    g: {
        text: "Decides tomar y el otro rechazó, así que el hombre pájaro te lo da de beber, te sorprende que el sabor sea tan rico pese a su pésima presentación y te abre el apetito.",
        options: [
            {
                ...optionFly,
                text: "Mas"
            }
        ]
    },
    h: {
        text: "Rechazas la bebida pero el otro la acepta, luego de tomarla empieza a contorsionarse mientras te mira fijo. No sabes por qué, pero eso te da mucho más miedo que el hombre pájaro.",
        options: [
            {
                ...optionFly,
                text: "Ayuda"
            }
        ]
    }
};
export default cap;