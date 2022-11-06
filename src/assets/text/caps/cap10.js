const optionsAB = [
    {
        text: '"gracias Pepe"',
        selection: "b", cap: 11,
        condition: "NO_MUTED"
    },
    {
        text: '"te pagare igual"',
        selection: "c", cap: 11,
        condition: "NO_MUTED"
    },
    {
        text: '...',
        selection: "a", cap: 11,
        condition: "MUTED"
    }
]
const cap = {
    a: {
        text: '"Se ve que fue demasiado si nisiquiera puedes decirme nada" Luego de un largo viaje llegan a tu casa, estas por vajarte para ir a buscar el dinero cuando te dice: "No tienes porque pagarme es suficiente con haberte ayudado :)"',
        options: optionsAB
    },
    b: {
        text: 'Luego de escuchar tu historia lo unico que pudo decir es: ¿Que?. Al completar el largo viaje llegan a tu casa, estas por vajarte para ir a buscar el dinero cuando te dice: "No tienes porque pagarme es suficiente con haberte ayudado :)"',
        options: optionsAB
    },
    c: {
        text: "Ya llegaste y tienes el postre delante tuyo, era tan rico que te comiste dos ¿Quieres ir a por el tercero?",
        options: [
            {
                text: "si",
                selection: "d", cap: 11
            },
            {
                text: "claro que si",
                selection: "d", cap: 11
            },
            {
                text: "POR SUPUESTO QUE SI",
                selection: "d", cap: 11
            }
        ]
    },
    d: {
        text: "Parece que no te va a usar mas ¿Acaso no te quiere?",
        options: [
            {
                text: ":)",
                selection: "e", cap: 11,
                action: "HAPPY_END"
            },
            {
                text: ":(",
                selection: "e", cap: 11,
                action: "SAD_END"
            }
        ]
    },
    e: {
        text: "Abres los ojos y te encuentras en el cielo, ¿Cayendo? ¿Volando? Al final eso da igual por que ya estas llegando a tu destino. El postre esta tan cerca que se te cae la baba de solo pensar en probarlo.",
        options: [
            {
                text: "hambre",
                selection: "g", cap: 11
            }
        ]
    }
}
export default cap