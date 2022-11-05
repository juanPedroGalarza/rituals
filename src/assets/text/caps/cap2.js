const cap = {
    a: {
        text: 'El conductor mira hacia atras y un pasajero te dice: "Lo que quiere decir es que si quieres que te llevemos al pueblo mas cercano"',
        options: [
            {
                text: '"si, por favor"',
                selection: "c", cap: 3
            },
            {
                text: '"no gracias, prefiero quedarme"',
                selection: "d",cap:3}
        ],
    },
    b: {
        text: 'Al parecer no los entiendes y tampoco puedes hablar asi que alguien de atras te dice: "Lo que quiere decir es que si quieres que te llevemos al pueblo mas cercano"',
        options: [
            {
                text: "asentir con la cabeza",
                selection: "b", cap: 3
            },
            {
                text: "negar con la cabeza",
                selection: "d", cap: 3
            }
        ],
    },
    c: {
        text: "Pones la musica y te pones en marcha en tu mision, frenas y ves dos objetos misteriosos a los ojos de cualquier persona, menos a dos incluyendote.",
        options: [
            {
                text: "objeto 1",
                selection: "d", cap: 5
            },
            {
                text: "objeto 2",
                selection: "d", cap: 5
            },
        ],
    },
    d: {
        text: "LLamas a Pepe y de dices que ya estan en camino, que puede comenzar. El conductor esta hambriento e intentas calmarlo diciendole que si hace todo bien no tendra mas hambre en su vida.",
        options: [
            {
                text: "invitar",
                selection: "e", cap: 3
            }
        ],
    },
    e: {
        text: "Se acerca un taxi, frena, baja y te observa con deseo. Te elige",
        options: [
            {
                text: ":)",
                selection: "f", cap: 5
            },
            {
                text: ":(",
                selection: "f", cap: 5
            },
        ],
    },
}
export default cap