import { CapMultiple } from "../caps";

const cap: CapMultiple = {
    a: {
        text: 'Mientras corres como nunca antes miras una vez atras y observas que en todas las ventanas sale algo rojo que se van haciendo cada vez mas grande. Al llegar donde hay mas gente te tranquilizas y tomas mas aire. Ves un taxi.',
        options: [
            {
                text: "hacerle seña",
                selection: "a", cap: 9
            },
            {
                text: "dejarlo pasar",
                selection: "b", cap: 9
            }
        ]
    },
    b: {
        text: 'Te alejas en silencio hasta el pueblo, por suerte no te persiguio nadie, el pueblo parece estar vacio... Cansado te tiras al piso mirando al cielo, este se pone rojo... Pero parace que no puedes dejar de mirar el cielo rojo...',
        options: [
            {
                text: "rojo",
                selection: "e", cap: 10
            },
            {
                text: "rojo",
                selection: "e", cap: 10
            },
            {
                text: "rojo",
                selection: "e", cap: 10
            }
        ]
    },
    c: {
        text: "¿Por que? Literalmente sigues al lado de la casa, aun te pueden escuchar. Mejor voy a cambiar tu opcion a quedarte durmiendo en el piso.",
        options: [
            {
                text: "abrir los ojos",
                selection: "e", cap: 10
            },
            {
                text: "despertar",
                selection: "e", cap: 10
            },
            {
                text: "desdormir",
                selection: "e", cap: 10
            }
        ]
    },
    d: {
        text: "El postre esta en camino mientras el plato principal esta siendo todo un exito, a todos les gusto tanto que estan sin palabras.",
        options: [
            {
                text: "postre",
                selection: "c", cap: 9
            }
        ]
    },
    e: {
        text: "Te despiertas y estas atado en una silla enfrete de alguien en tu mismas condiciones, a tu alrededor ves gente dormida tambien atada pero con la boca tapada, un humo rojo sale de la nada cuando te das cuenta de que en el piso hay una extraña marca hecha con sal. Un hombre con cabeza de pajaro y el torso pintado de rojo se acerca a ustedes dos con una bebida extraña de color verde, mientras piensa a quien darsela, les da a elegir a ambos.",
        options: [
            {
                text: "tomar",
                selection: "g", cap: 9
            },
            {
                text: "no tomar",
                selection: "h", cap: 9
            }
        ]
    },
    x: {
        text: "Cuando despiertas te encuentras atado y con la boca tapada en una especie de asiento muy incomodo. No se ve nada mas que un humo rojo y unas siluetas, estas parecen personas atadas formando un circulo. En el centro hay dos mas y una parada con algo extraño en la cabeza que se parece a el craneo de un ave. Pero es tan grande que debe ser otra cosa.",
        options: [
            {
                text: "no hacer nada",
                selection: "e", cap: 9
            },
            {
                text: "forcejear",
                selection: "f", cap: 9
            }
        ]
    }
};
export default cap;