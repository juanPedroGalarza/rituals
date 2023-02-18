import { CapMultiple } from "../caps";

const cap: CapMultiple = {
  a: {
    text: "El auto se acerca y ve tu señal. Cuando frena ves que es un grupo de turistas con música un poco extraña con el volumen saturado. Por lo que no vas a entender bien lo que dice. Apagan la música y te dicen -Vil du at vi skal ta deg til nærmeste by?",
    options: [
      {
        text: "Asentir con la cabeza",
        selection: "a",
        cap: 3,
      },
      {
        text: '"No entiendo"',
        selection: "a",
        cap: 2,
        action: "NO_MUTED",
      },
      {
        text: "Quedarse callado",
        selection: "b",
        cap: 2,
        action: "IS_MUTED",
      },
    ],
  },
  b: {
    text: "Saludas al auto y este frena, te subes y le aumentas el volumen a la música. Ya saben lo que deben hacer...",
    options: [
      {
        text: "Llamar",
        selection: "d",
        cap: 2,
      },
    ],
  },
  c: {
    text: "¿Qué necesidad de hacer eso? Por tu mala actitud se bajan dos personas del auto y te mandan a dormir.",
    options: [
      {
        text: "Despertar",
        selection: "e",
        cap: 8,
      },
      {
        text: "DEPERTAR",
        selection: "e",
        cap: 8,
      },
    ],
  },
  d: {
    text: "Dejas pasar el auto y notas algo extraño, más adelante este empieza a retroceder y frena cerca tuyo. Cuando te acercas más notas que este no tiene conductor, pero está encendido y con la llave puesta, hay dos discos.",
    options: [
      {
        text: "Disco 1",
        selection: "c",
        cap: 2,
      },
      {
        text: "Disco 2",
        selection: "c",
        cap: 2,
      },
    ],
  },
  e: {
    text: "El auto frena y se baja una persona que se pone a elegir entre dos. Finalmente se decide, pero no te elige.",
    options: [
      {
        text: ":)",
        selection: "e",
        cap: 2,
        action: "HAPPY",
      },
      {
        text: ":(",
        selection: "e",
        cap: 2,
        action: "SAD",
      },
    ],
  },
};
export default cap;
