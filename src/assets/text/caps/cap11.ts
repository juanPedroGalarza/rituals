import { CapMultiple, OptionCap } from "../caps";

const option: OptionCap = {
    text: 'FIN',
    selection: "a",
    cap: 0
};

const cap: CapMultiple = {
    a: {
        text: '"Cierto… Como no te veo hace tanto se me había olvidado que eras mudo" Luego de saludarlo y entrar a tu casa, el auto se va. Vas a tu baño a lavarte la cara, te sorprende que todo esté como lo dejaste y te vas a acostar a dormir... ... ... ... Justo antes de dormir piensas. "¿Por qué la puerta estaba sin llave?"',
        options: [{
            ...option
        }]
    },
    b: {
        text: '"Nos vemos" Al abrir la puerta te encuentras que está cerrada con llave, al pasar esta situación se te olvido usarla antes, así que la sacas debajo de una piedra y abres la puerta. Al entrar ves todo desordenado por el tiempo que la dejaste. Al estar tan exhausto por limpiar, terminas durmiendo en el sótano encima de la ropa sucia del lavadero. Te despiertas con una gota de agua que cae del techo. Empiezas a subir las escaleras cuando escuchas unos pasos en tu casa. Por las dudas que te hayan perseguido, tomas un cuchillo de la cocina y te diriges a tu habitación hacia donde van los pasos...',
        options: [{
            ...option
        }]
    },
    c: {
        text: "Te diriges a buscar el dinero para pagarle cuando te acuerdas que dejaste las llaves debajo de una roca. no está... La llave no está... Tampoco la tienes en ningún bolsillo... La puerta está abierta... La abres y notas un charco de sangre que viene de tu habitación. Te acercas y ves dos cuerpos, uno en tu cama y el otro en el suelo. No hay nada más en el piso que sangre. Y todo se apaga.",
        options: [{
            ...option
        }]
    },
    d: {
        text: "Esperas a que el tercer postre llegue y lo comes por atrás para más gozo. Tu misión ha terminado, y ahora puedes volar tranquilamente...",
        options: [{
            ...option
        }]
    },
    e: {
        text: `Al final volviste al mismo lugar...`,
        options: [{
            ...option
        }]
    },
    f: {
        text: "¿En serio creías que sin hacer nada la historia seguiría?... Tienes razón ¡GANASTE, FELICIDADES! Por desbloquear este final te recompensaré con este secreto: Completa todos los finales. si ya lo hiciste trata de unir todas las historias. Mejor dicho, 'La Historia'.",
        options: [{
            ...option
        }]
    },
    g: {
        text: "Terminaste todo, acabaste con tu hambre insaciable, definitivamente no tendrás que buscar nada más, solo descansar... o mejor dicho",
        options: [{
            ...option,
            text: "VOLAR"
        }]
    }
};
export default cap;