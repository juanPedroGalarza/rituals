import { CapInterface } from "../caps";

const cap: CapInterface = {
    text: "Estas en medio de la carretera y se acerca un auto, hay varias opciones para hacer:",
    options: [
        {
            text: "hacer seña para que el auto te lleve a casa",
            selection: "a", cap: 1
        },
        {
            text: "saludar",
            selection: "b", cap: 1
        },
        {
            text: "tirarle una piedra",
            selection: "c", cap: 1
        },
        {
            text: "dejarlo pasar",
            selection: "d", cap: 1
        },
        {
            text: "quedarse quieto",
            selection: "e", cap: 1
        },
        {
            text: "nada",
            selection: "f", cap: 11
        },
    ],
};
export default cap;