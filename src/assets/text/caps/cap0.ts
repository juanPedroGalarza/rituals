import { CapMultiple } from "../caps";

const cap: CapMultiple = {
  a: {
    text: "Estás en medio de la carretera y se acerca un auto, hay varias opciones para hacer:",
    options: [
      {
        text: "Hacer seña para que el auto te lleve a casa",
        selection: "a",
        cap: 1,
      },
      {
        text: "Saludar",
        selection: "b",
        cap: 1,
      },
      {
        text: "Tirarle una piedra",
        selection: "c",
        cap: 1,
      },
      {
        text: "Dejarlo pasar",
        selection: "d",
        cap: 1,
      },
      {
        text: "Quedarse quieto",
        selection: "e",
        cap: 1,
      },
      {
        text: "Nada",
        selection: "f",
        cap: 11,
      },
    ],
  },
};
export default cap;
