import { CapMultiple, OptionCap } from "../caps";

let optionsAB: Array<OptionCap> = [
  {
    text: "Mirar por la cerradura",
    selection: "a",
    cap: 6,
  },
  {
    text: "Salir a ver que sucede",
    selection: "x",
    cap: 7,
  },
];

const cap: CapMultiple = {
  a: {
    text: "Al no escuchar nada se va y te deja que sigas en el baño. Pasa el tiempo mientras vas recuperando la compostura. Escuchas un ruido raro en el comedor, como si estuvieran moviendo muebles.",
    options: optionsAB,
  },
  b: {
    text: "Al escuchar esto se va y te deja que sigas en el baño. Pasa el tiempo mientras vas recuperando la compostura. Escuchas un ruido raro en el comedor, como si estuvieran moviendo muebles.",
    options: optionsAB,
  },
  c: {
    text: "Al caminar sientes un golpe en la cabeza que te deja inconsciente... Al parecer no puedes hacer nada.",
    options: [
      {
        text: "...",
        selection: "x",
        cap: 8,
      },
      {
        text: "...",
        selection: "x",
        cap: 8,
      },
      {
        text: "...",
        selection: "x",
        cap: 8,
      },
    ],
  },
  d: {
    text: "Llegas a tu casa y preparas junto con el Traductor la cena. Al terminar esperas a que entren a los baños para abrirle la puerta a Pepe con los paquetes, juntos preparan el plato principal...",
    options: [
      {
        text: "Sal",
        selection: "b",
        cap: 6,
      },
      {
        text: "Sillas",
        selection: "b",
        cap: 6,
      },
      {
        text: "Sogas",
        selection: "b",
        cap: 6,
      },
    ],
  },
  e: {
    text: "Nuevos invitados llegaron, se perdieron la entrada. Aún faltan mas asi que los mandas a buscar los suficientes para poder disfrutar compartiendo con mas gente.",
    options: [
      {
        text: "Plato principal",
        selection: "d",
        cap: 8,
      },
    ],
  },
  f: {
    text: "Te usó varias veces antes de llegar a una casa enorme, que casa más hermosa.",
    options: [
      {
        text: ":)",
        selection: "d",
        cap: 9,
        action: "HAPPY",
      },
      {
        text: ":(",
        selection: "d",
        cap: 9,
        action: "SAD",
      },
    ],
  },
};
export default cap;
