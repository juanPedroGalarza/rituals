const optionFly = {
    text: "volar",
    selection: "e", cap: 10
}
const cap = {
    a: {
        text: 'Al subirte reconoces al taxista y resulta ser un amigo de la infancia. El tambien te reconoce y cuando estaba apunto de decirte algo, mira tu rostro y entiende que estas en aprietos. Arranca rapidamente y te lleva a tu casa. Cuando salen del pueblo te dice "No se en que te metiste esta vez ni como llegaste hasta este lugar pero puedo notar que esto es serio ¿Puedes decirme que sucede?',
        options: [
            {
                text: "...",
                selection: "a", cap: 10
            },
            {
                text: "contar la historia a detalle",
                selection: "b", cap: 10,
                action: "NO_MUTED", condition: "NO_MUTED"
            }
        ]
    },
    b: {
        text: 'El taxi estaba ocupado igualmente asi no lo hubieras podido usar... Sigues caminando cuando de repente todo se pone rojo, todo es tan rojo que no puedes ver figuras, solo rojo.',
        options: [
            {
                text: "rojo",
                selection: "e", cap: 10
            },
            {
                text: "rojo",
                selection: "e", cap: 10
            },
            {
                text: "rojo",
                selection: "e", cap: 10
            }
        ]
    },
    c: {
        text: "Una vez terminado el plato principal te dirijes al postre, un postre tan pero tan rico que te deja la boca babeando con solo pensarlo, asi que te dirijes volando a probarlo.",
        options: [
            {
                text: "comer",
                selection: "c", cap: 10
            },
            {
                text: "c o m e r",
                selection: "c", cap: 10
            },
            {
                text: "COMER",
                selection: "c", cap: 10
            }
        ]
    },
    d: {
        text: "Nuevamente te volvio a usar pero con mas gente, pobre gente...",
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
        text: "Luego de unos movimientos extraños el hombre pajaro empieza a ingerirle una extraña bebida a uno de los del centro y este empieza a contorcionarse, cuando se detiene rompe la soga en la que esta atado y salta contra el de adelante suyo, pero antes de que termine te desmayas nuevamente",
        options: [
            {
                ...optionFly
            }
        ]
    },
    f: {
        text: "Intentas hacer fuerza para desatarte, pero del esfuerzo la vista se te empieza a nublar y no eres conciente de tu alrededor, mas que de unos ruidos graves. Cuando recuperas la compostura ves en el centro un charco de sangre y una figura extraña que se camufla apenas en el rojo. Cuando termina, regresa a hacer otra vez ese ruido grave, pero esta vez aturde y el color rojo empieza a esparcirce por todos lados.",
        options: [
            {
                ...optionFly
            }
        ]
    },
    g: {
        text: "Decides tomar y el otro rechazó, asi que el hombre pajaro te lo da de beber, te sorprende que el sabor sea tan rico pese a su pesima presentacion y te abre el apetito.",
        options: [
            {
                ...optionFly,
                text: "mas"
            }
        ]
    },
    h: {
        text: "Rechazas la bebida pero el otro la acepta, luego de tomarla empieza a contorcionarse mientras te mira fijo. No sabes por que pero eso te da mucho mas miedo que del hombre pajaro.",
        options: [
            {
                ...optionFly,
                text: "ayuda"
            }
        ]
    }
}
export default cap