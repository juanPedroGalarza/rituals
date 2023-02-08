import { CapMultiple } from "../caps";

const cap: CapMultiple = {
    a: {
        text: "El auto se acerca y ve tu seña, cuando frena ves que es un grupo de turistas con musica un poco extraña con el volumen satudaro por lo que no vas a entender bien lo que dice. Apagan la muscia y te dicen -Vil du at vi skal ta deg til nærmeste by?",
        options: [
            {
                text: "asentir con la cabeza",
                selection: "a", cap: 3
            },
            {
                text: '"no entiendo"',
                selection: "a", cap: 2,
                action: "NO_MUTED"
            },
            {
                text: "quedarse callado",
                selection: "b", cap: 2,
                action: "IS_MUTED"
            }
        ],
    },
    b: {
        text: "Saludas al auto y este frena, te subes y le aumentas el volumen a la musica. Ya saben lo que deben hacer...",
        options: [
            {
                text: "llamar",
                selection: "d", cap: 2
            }
        ],
    },
    c: {
        text: "¿Que necesidad de hacer eso? Por tu mala actitud se bajan dos personas del auto y te mandan a dormir.",
        options: [
            {
                text: "despertar",
                selection: "e", cap: 8
            },
            {
                text: "DEPERTAR",
                selection: "e", cap: 8
            },
        ],
    },
    d: {
        text: "Dejas pasar el auto y notas algo extraño, mas adelante este empieza a retroceder y frena cerca tuyo. Cuando te acercas mas notas que este no tiene conductor, pero esta encendio y con la llave puesta, hay dos discos.",
        options: [
            {
                text: "disco 1",
                selection: "c", cap: 2
            },
            {
                text: "disco 2",
                selection: "c", cap: 2
            },
        ],
    },
    e: {
        text: "El auto frena y se baja una persona que se pone a elegir entre dos. Finalmente se decide, pero no te elige.",
        options: [
            {
                text: ":)",
                selection: "e", cap: 2,
                action: "HAPPY"
            },
            {
                text: ":(",
                selection: "e", cap: 2,
                action: "SAD"
            },
        ],
    },
};
export default cap;