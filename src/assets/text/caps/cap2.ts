import { CapMultiple } from "../caps";

const cap: CapMultiple = {
    a: {
        text: 'El conductor mira hacia atrás y un pasajero te dice: "Lo que quiere decir es que si quieres que te llevemos al pueblo más cercano"',
        options: [
            {
                text: '"Si, por favor"',
                selection: "c", cap: 3
            },
            {
                text: '"No gracias, prefiero quedarme"',
                selection: "d", cap: 3
            }
        ],
    },
    b: {
        text: 'Al parecer no los entiendes y tampoco puedes hablar así que alguien de atrás te dice: "Lo que quiere decir es que si quieres que te llevemos al pueblo más cercano"',
        options: [
            {
                text: "Asentir con la cabeza",
                selection: "b", cap: 3
            },
            {
                text: "Negar con la cabeza",
                selection: "d", cap: 3
            }
        ],
    },
    c: {
        text: "Pones la música y te pones en marcha en tu misión, frenas y ves dos objetos misteriosos a los ojos de cualquier persona, menos a dos incluyéndote.",
        options: [
            {
                text: "Objeto 1",
                selection: "d", cap: 5
            },
            {
                text: "Objeto 2",
                selection: "d", cap: 5
            },
        ],
    },
    d: {
        text: "Llamas a Pepe y le dices que ya están en camino, que puede comenzar. El conductor está hambriento le intentas calmarlo diciéndole que si hace todo bien no tendrá más hambre en su vida.",
        options: [
            {
                text: "Invitar",
                selection: "e", cap: 3
            }
        ],
    },
    e: {
        text: "Se acerca un taxi, frena, baja y te observa con deseo. Te elige.",
        options: [
            {
                text: ":)",
                selection: "f", cap: 5,
                action: "HAPPY"
            },
            {
                text: ":(",
                selection: "f", cap: 5,
                action: "SAD"
            },
        ],
    },
};
export default cap;