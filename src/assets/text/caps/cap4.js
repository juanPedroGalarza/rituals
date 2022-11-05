let optionsAB = [
    {
        text: 'asentir con la cabeza',
        selection: "a", cap: 5
    },
    {
        text: 'negar con la cabeza',
        selection: "a", cap: 5
    },
    {
        text: '"no gracias, prefiero quedarme"',
        selection: "x", cap: 7
    },
]
/* 
si es mudo optionsAB = [
    {
        text: '"ya salgo"',
        selection: "x", cap: 7
    },
    {
        text: '"aun no termino"',
        selection: "a",cap:5
    }
]
*/

const optionsDE = [
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
]

const cap = {
    a: {
        text: 'Luego de terminar la comida, sientes un dolor de estomago inmenso, te diriges a uno de los baño a largar todo. Al finalizar, el dolor sigue igual, alguien golpea la puerta: -Er du ok?',
        options: optionsAB,
    },
    b: {
        text: 'Luego de terminar la comida, sientes un dolor de estomago inmenso y te diriges a uno de los baño a largar todo. Al finalizar, el dolor sigue pero no hay mas, alguien golpea la puerta: -¿Te falta mucho?',
        options: optionsAB,
    },
    c: {
        text: "Mientras caminas por el pueblo en busca de algun medio par ir a tu casa ves a lo lejos un taxi conocido. Es Pepe, tu amigo de la infancia que al parecer llego a este pueblo pero no sabes por que.",
        options: [
            {
                text: "ir a saludarlo",
                selection: "c", cap: 5
            },
            {
                text: "ignorarlo",
                selection: "c", cap: 5
            },
        ],
    },
    d: {
        text: "El taxi freno y la cara del conductor se te hace parecida. Tienes su nombre en la punta de la lengua y cuando estas a punto de preguntarselo este saca un objeto extraño y te apunta con el. No es nada parecido a un arma pero aun asi da miedo. De repente te duele la cabeza tan fuerte que no aguantas y te desmayas.",
        options: optionsDE,
    },
    e: {
        text: "El taxista freno igualmente y bajo corrio a abrazarte, es Pepe tu amigo de la infancia que no ves hace mucho tiempo. Te abraza extrañamente durante un largo rato y cuando te suelta te empieza a hablar pero no escuchas nada. De repente te duele la cabeza tan fuerte que no aguantas y te desmayas.",
        options: optionsDE,
    },
    f: {
        text: "Todos se estan preparando para el plato principal, y los que no quieran mas, postre seran...",
        options: [
            {
                text: "faltan",
                selection: "e", cap: 5
            }
        ],
    },
}
export default cap