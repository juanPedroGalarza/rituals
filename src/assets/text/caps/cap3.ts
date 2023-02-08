import { CapMultiple, OptionCap } from "../caps";

const textBC: string = "Te subes al auto y luego de arrancar prenden la musica nuevamente. Luego de un largo camino llegan a una enorme casa a las afueras de un pueblo, cuando estan por estacionar el 'Traductor' te dice: -¿Quieres acompañarnos a comer?";

const optionsAB: Array<OptionCap> = [
    {
        text: "asentir con la cabeza",
        selection: "a", cap: 4,
        condition: "MUTED"
    },
    {
        text: "asentir con la cabeza",
        selection: "b", cap: 4,
        condition: "EXCLUSIVE_NO_MUTED"
    },
    {
        text: "negar con la cabeza",
        selection: "c", cap: 4
    }
];

const cap: CapMultiple = {
    a: {
        text: "Te subes al auto y luego de arrancar prenden la musica nuevamente. Luego de un largo camino llegan a una enorme casa a las afueras de un pueblo, cuando estan por estacionar el conductor dice: -Bli med oss i huset vårt, du er invitert til å spise.",
        options: optionsAB,
    },
    b: {
        text: textBC,
        options: optionsAB,
    },
    c: {
        text: textBC,
        options: [
            {
                text: '"con mucho gusto"',
                selection: "b", cap: 4
            },
            {
                text: '"no gracias"',
                selection: "c", cap: 4
            },
        ],
    },
    d: {
        text: "Al parecer no tienes muchas intenciones de subirte con ellos asi que los dejas ir. Sigues caminando por la carretera cuando ves a lo lejos un taxi... En la carretera.",
        options: [
            {
                text: "hacerle seña",
                selection: "d", cap: 4
            },
            {
                text: "dejarlo pasar",
                selection: "e", cap: 4
            },
        ],
    },
    e: {
        text: "Ya estan todos invitados a comer y los que se queden comeran postre...",
        options: [
            {
                text: "comer",
                selection: "f", cap: 4
            }
        ],
    },
};
export default cap;