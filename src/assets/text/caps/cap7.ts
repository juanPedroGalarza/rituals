import { CapMultiple } from "../caps";

const cap: CapMultiple = {
    a: {
        text: 'En silencio te pones a atar la ropa entre si para formar una soga larga, atas un extremo en la canilla y el otro lo tiras por la ventanilla. Mientras bajas escuchas que se abre la puerta del baño e inmediatamente se desata la soga hecha de ropa y caes contra el suelo, por suerte estabas lo suficientemente bajo y la caida solo te saco todo el aire.',
        options: [
            {
                text: "levantate y corre",
                selection: "a", cap: 8
            },
            {
                text: "alejate en silencio",
                selection: "b", cap: 8
            },
            {
                text: "llama un taxi",
                selection: "c", cap: 8,
                condition: "NO_MUTED"
            }
        ]
    },
    b: {
        text: 'Te pones a pensar que puedes hacer con el cepillo: Tirarlo por la ventana; Cepillarse los dientes; Usarlo como navaja; Tantas cosas... Pero de tanto pensar se te paso el tiempo. Alguien abre la puerta repentinamente y sientes un fuerte golpe en la cabeza que te duerme instantaneamente.',
        options: [
            {
                text: "...",
                selection: "x", cap: 8
            },
            {
                text: "...",
                selection: "x", cap: 8
            },
            {
                text: "...",
                selection: "x", cap: 8
            }
        ],
    },
    c: {
        text: "En serio... ¿Que pretendias conseguir? ¿Salir afuera con un peinado que los deje perplejos por tu bulleza y te dejen ir sin mas? O acaso ¿querias usarlo como cuchillo?... ¿Sabes que? Ni siquiera te voy a explicar por que, pero de la nada te desmallas ):<",
        options: [
            {
                text: "no",
                selection: "x", cap: 8
            },
            {
                text: "puedes",
                selection: "x", cap: 8
            },
            {
                text: "hacer",
                selection: "x", cap: 8
            },
            {
                text: "nada",
                selection: "x", cap: 8
            }
        ],
    },
    d: {
        text: "Voy a suponer que tenias una gran idea de lo que hacer con un jabon... UN JABON... Por dios... Intentas tragartelo por que seguro eso querias, pero terminas intoxicado y te desmallas...",
        options: [
            {
                text: "jabon",
                selection: "x", cap: 8
            },
            {
                text: "JABON",
                selection: "x", cap: 8
            }
        ]
    },
    x: {
        text: "Al salir del baño sientes un golpe fuerte en la cabeza te desmaya innmediatamente...",
        options: [
            {
                text: "seguir",
                selection: "x", cap: 8
            }
        ]
    }
};
export default cap;