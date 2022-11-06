const option = 
    {
        text: 'FIN',
        selection: "a", cap: null
}//implementar una funcion para reiniciar

const cap = {
    a: {
        text: '"Cierto...Como no te veo hace tanto se me habia olvidado que eras mudo" Luego de saludarlo y entrar a tu casa el auto se va. Vas a tu baño a lavarte la cara, te sorprende que todo este como lo dejaste y te vas a acostar a dormir... ... ... ... Justo antes de dormirte piensas. "¿Por que la puerta estaba sin llave?"',
        options: [{
            ...option
        }]
    },
    b: {
        text: '"Nos vemos" Al abrir la puerta te encuentras que esta cerrada con llave, al pasar esta situacion se te olvido usarla antes, asi que la sacas debajo de una piedra y abres la puerta. al entrar ves todo desordenado por el tiempo que la dejaste. Al estar tan exsausto por limpiar, te duermes sin querer encima de la ropa sucia en el lavadero del sotano por unos minutos. Te despiertas con una gota de agua que te cae del techo. Empiezas a subir las escaleras cuando escuchas unos pasos en tu casa. Por las dudas que te hallan perseguido tomas un cuchillo de la cocina y te diriges a tu habitacion hacia donde van los pasos...',
        options: [{
            ...option
        }]
    },
    c: {
        text: "Te dirijes a buscar el dinero para pagarle cuando te acuerdas que dejaste las llaves debajo de una roca. Esta no esta... La llave no esta... Tampoco la tienes en ningun bolsillo... La puerta esta abierta... La abres y notas un charco de sangre que viene de tu habitacion. Te acercas y ves dos cuerpos, uno en tu cama y el otro en el suelo. No hay nada mas en el piso que sangre. Y todo se apaga.",
        options: [{
            ...option
        }]
    },
    d: {
        text: "Esperas a que el tercer postre llegue y lo comes desde atras para mas disfrute. Tu mision a terminado, y ahora puedes volar tranquilamente...",
        options: [{
            ...option
        }]
    },
    e: {
        text: "Al final volviste al mismo lugar... ",
        //dependiendo si es mas :) o :( agregar al final del text la respectiva carita
        options: [{
            ...option
        }]
    },
    f: {
        text: "¿En serio creias que sin hacer nada la historia avanzaria?... Tienes razon ¡GANASTE, FELICIDADES! Por desbloquear este final te recompensare con este secreto Completa todos los finales. Si ya lo hiciste trata de unir todas las historias. Mejor dicho, 'La Historia'.",
        options: [{
            ...option
        }]
    },
    g: {
        text: "Terminaste todo, acabaste con tu hambre innsasciable, definitivamente no tendras que buscar nada mas, solo descansar... o mejor dicho",
        options: [{
            ...option,
            text: "VOLAR"
        }]
    }
}
export default cap