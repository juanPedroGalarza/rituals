import { CapMultiple } from "../caps";

const cap: CapMultiple = {
    a: {
        text: 'En silencio te pones a atar la ropa entre sí para formar una soga larga, atas un extremo en la canilla y el otro lo tiras por la ventanilla. Mientras bajas escuchas que se abre la puerta del baño e inmediatamente se desata la soga hecha de ropa y caes contra el suelo, por suerte estabas lo suficientemente bajo y la caída solo te saco el aire.',
        options: [
            {
                text: "Levantate y corre",
                selection: "a", cap: 8
            },
            {
                text: "Alejate en silencio",
                selection: "b", cap: 8
            },
            {
                text: "Llama un taxi",
                selection: "c", cap: 8,
                condition: "NO_MUTED"
            }
        ]
    },
    b: {
        text: 'Te pones a pensar que puedes hacer con el cepillo: Tirarlo por la ventana; cepillarse los dientes; usarlo como navaja; tantas cosas... Pero de tanto pensar se te pasó el tiempo. Alguien abre la puerta repentinamente y sientes un fuerte golpe en la cabeza que te duerme instantáneamente.',
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
        text: "En serio... ¿Qué pretendías conseguir? ¿Salir afuera con un peinado que los deje perplejos por tu belleza y te dejen ir sin más? O acaso ¿querías usarlo como cuchillo?... ¿Sabes que? Ni siquiera te voy a explicar por qué, pero de la nada te desmayas >:(",
        options: [
            {
                text: "No",
                selection: "x", cap: 8
            },
            {
                text: "Puedes",
                selection: "x", cap: 8
            },
            {
                text: "Hacer",
                selection: "x", cap: 8
            },
            {
                text: "Nada",
                selection: "x", cap: 8
            }
        ],
    },
    d: {
        text: "Voy a suponer que tenias una gran idea de lo que hacer con un jabón... UN JABÓN... Por dios... Intentas tragartelo porque seguro eso querías, pero terminas intoxicado y te desmayas...",
        options: [
            {
                text: "Jabón",
                selection: "x", cap: 8
            },
            {
                text: "JABÓN",
                selection: "x", cap: 8
            }
        ]
    },
    x: {
        text: "Al salir del baño sientes un golpe fuerte en la cabeza que te desmaya inmediatamente...",
        options: [
            {
                text: "Seguir",
                selection: "x", cap: 8
            }
        ]
    }
};
export default cap;