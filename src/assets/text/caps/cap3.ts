import { CapMultiple, OptionCap } from "../caps";

const textBC: string =
  "Te subes al auto y luego de arrancar prenden la música nuevamente. Luego de un largo camino llegan a una enorme casa a las afueras de un pueblo, cuando están por estacionar el 'Traductor' te dice: -¿Quieres acompañarnos a comer?";

const optionsAB: Array<OptionCap> = [
  {
    text: "Asentir con la cabeza",
    selection: "a",
    cap: 4,
    condition: "MUTED",
  },
  {
    text: "Asentir con la cabeza",
    selection: "b",
    cap: 4,
    condition: "EXCLUSIVE_NO_MUTED",
  },
  {
    text: "Negar con la cabeza",
    selection: "c",
    cap: 4,
  },
];

const cap: CapMultiple = {
  a: {
    text: "Te subes al auto y luego de arrancar prenden la música nuevamente. Luego de un largo camino llegan a una enorme casa a las afueras de un pueblo, cuando están por estacionar el conductor dice: -Bli med oss i huset vårt, du er invitert til å spise.",
    options: optionsAB,
  },
  b: {
    text: textBC,
    options: optionsAB,
  },
  c: {
    text: textBC,
    options: [
      {
        text: '"Con mucho gusto"',
        selection: "b",
        cap: 4,
      },
      {
        text: '"No gracias"',
        selection: "c",
        cap: 4,
      },
    ],
  },
  d: {
    text: "Al parecer no tienes muchas intenciones de subirte, así que los dejas ir. Sigues caminando por la carretera cuando ves a lo lejos un taxi... En la carretera.",
    options: [
      {
        text: "Hacerle seña",
        selection: "d",
        cap: 4,
      },
      {
        text: "Dejarlo pasar",
        selection: "e",
        cap: 4,
      },
    ],
  },
  e: {
    text: "Ya están todos invitados a comer y los que se queden comerán postre...",
    options: [
      {
        text: "Comer",
        selection: "f",
        cap: 4,
      },
    ],
  },
};
export default cap;
