let optionsAB = [
    {
        text: 'mirar por la cerradura',
        selection: "a", cap: 6
    },
    {
        text: 'salir a ver que sucede',
        selection: "x", cap: 7
    }
]


const cap = {
    a: {
        text: 'Al no escuchar nada se va y te deja que sigas en el baño. Pasa el tiempo mientras vas recuperando la compostura. Escuchas un ruido raro en el comedor, como si estubieran moviendo muebles.',
        options: optionsAB,
    },
    b: {
        text: 'Al escuchar esto se va y te deja que sigas en el baño. Pasa el tiempo mientras vas recuperando la compostura. Escuchas un ruido raro en el comedor, como si estubieran moviendo muebles.',
        options: optionsAB,
    },
    c: {
        text: "Al caminar sientes un golpe en la cabeza que te deja inconciente... Al parecer no puedes hacer nada.",
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
    d: {
        text: "LLegas a tu casa y preparas junto con el Traductor la cena. Al terminar esperas a que entren a los baños para abrir la puerta a Pepe con los paquetes, juntos preparan el plato principal...",
        options: [
            {
                text: "sal",
                selection: "b", cap: 6
            },
            {
                text: "sillas",
                selection: "b", cap: 6
            },
            {
                text: "sogas",
                selection: "b", cap: 6
            }
        ],
    },
    e: {
        text: "Nuevos invitados llegan y la entrada se perdieron. Aun faltan mas asi que los mandas a buscar los suficientes para poder disfrutar compartiendo con mas gente.",
        options: [
            {
                text: "plato principal",
                selection: "d", cap: 8
            }
        ],
    },
    f: {
        text: "Te uso varias veces antes de llegar a una casa enorme, que casa mas hermosa.",
        options: [
            {
                text: ":)",
                selection: "d", cap: 9,
                action: "HAPPY"
            },
            {
                text: ":(",
                selection: "d", cap: 9,
                action: "SAD"
            },
        ],
    },
}
export default cap