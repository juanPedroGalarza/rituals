import { CapMultiple, OptionCap } from "../caps";

let optionsAB: Array<OptionCap> = [
  {
    text: "Asentir con la cabeza",
    selection: "a",
    cap: 5,
    condition: "MUTED",
  },
  {
    text: "Negar con la cabeza",
    selection: "a",
    cap: 5,
    condition: "MUTED",
  },
  {
    text: "Salir del baño",
    selection: "x",
    cap: 7,
    condition: "MUTED",
  },
  {
    text: '"Ya salgo"',
    selection: "x",
    cap: 7,
    condition: "EXCLUSIVE_NO_MUTED",
  },
  {
    text: '"Aún no termino"',
    selection: "b",
    cap: 5,
    condition: "EXCLUSIVE_NO_MUTED",
  },
];

const optionsDE: Array<OptionCap> = [
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
];

const cap: CapMultiple = {
  a: {
    text: "Luego de terminar la comida, sientes un dolor de estómago inmenso, te diriges a uno de los baños a largar todo. Al finalizar, el dolor sigue igual, alguien golpea la puerta: -Er du ok?",
    options: optionsAB,
  },
  b: {
    text: "Luego de terminar la comida, sientes un dolor de estómago inmenso y te diriges a uno de los baños. Al finalizar, el dolor sigue pero no hay más para expulsar, alguien golpea la puerta: -¿Te falta mucho?",
    options: optionsAB,
  },
  c: {
    text: "Mientras caminas por el pueblo en busca de algún medio para ir a tu casa ves a lo lejos un taxi conocido. Es Pepe, tu amigo de la infancia que al parecer llegó a este pueblo pero no sabes por qué.",
    options: [
      {
        text: "Ir a saludarlo",
        selection: "c",
        cap: 5,
      },
      {
        text: "Ignorarlo",
        selection: "c",
        cap: 5,
      },
    ],
  },
  d: {
    text: "El taxi frenó y la cara del conductor se te hizo parecida. Tienes su nombre en la punta de la lengua y cuando estas a punto de preguntárselo este saca un objeto extraño y te apunta con el. No es nada parecido a un arma pero aun así da miedo. De repente te duele la cabeza tan fuerte que no aguantas y te desmayas.",
    options: optionsDE,
  },
  e: {
    text: "El taxista frenó igualmente bajó corriendo a abrazarte, es Pepe tu amigo de la infancia que no ves hace mucho tiempo. Te abraza extrañamente durante un largo rato y cuando te suelta te empieza a hablar pero no escuchas nada. De repente te duele la cabeza tan fuerte que no aguantas y te desmayas.",
    options: optionsDE,
  },
  f: {
    text: "Todos se están preparando para el plato principal, y los que no quieran más, postre serán...",
    options: [
      {
        text: "Faltan",
        selection: "e",
        cap: 5,
      },
    ],
  },
};
export default cap;
