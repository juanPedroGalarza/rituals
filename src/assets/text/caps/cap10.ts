import { CapMultiple, OptionCap } from "../caps";

const optionsAB: Array<OptionCap> = [
    {
        text: '"Gracias Pepe"',
        selection: "b", cap: 11,
        condition: "NO_MUTED"
    },
    {
        text: '"Te pagaré igual"',
        selection: "c", cap: 11,
        condition: "NO_MUTED"
    },
    {
        text: '...',
        selection: "a", cap: 11,
        condition: "MUTED"
    }
];

const cap: CapMultiple = {
    a: {
        text: '"Se ve que fue demasiado, ni siquiera puedes decirme nada" Luego de un largo viaje llegan a tu casa, estás por bajar para ir a buscar el dinero cuando te dice: "No tienes porque pagar es suficiente con haberte ayudado :)"',
        options: optionsAB
    },
    b: {
        text: 'Luego de escuchar tu historia lo único que pudo decir es: ¿Qué?. Al completar el largo viaje llegan a tu casa, estás por bajar para ir a buscar el dinero cuando te dice: "No tienes porque pagar es suficiente con haberte ayudado :)"',
        options: optionsAB
    },
    c: {
        text: "Ya llegaste y tienes el postre delante tuyo, era tan rico que te comiste dos ¿Quieres ir a por el tercero?",
        options: [
            {
                text: "Si",
                selection: "d", cap: 11
            },
            {
                text: "Claro que si",
                selection: "d", cap: 11
            },
            {
                text: "POR SUPUESTO QUE SI",
                selection: "d", cap: 11
            }
        ]
    },
    d: {
        text: "Parece que no te va a usar más ¿Acaso no te quiere?",
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
        text: "Abres los ojos y te encuentras en el cielo, ¿Cayendo? ¿Volando? Al final eso da igual porque ya estás llegando a tu destino. El postre está tan cerca que se te cae la baba de solo pensar en probarlo.",
        options: [
            {
                text: "Hambre",
                selection: "g", cap: 11
            }
        ]
    }
};
export default cap;