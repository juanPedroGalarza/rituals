import { CapMultiple } from "../caps";

const cap: CapMultiple = {
    a: {
        text: 'Mientras corres como nunca antes miras una vez atrás y observas que en todas las ventanas sale algo rojo que se va haciendo cada vez más grande. Al llegar donde hay mas gente te tranquilizas y tomas más aire. Ves un taxi.',
        options: [
            {
                text: "Hacerle seña",
                selection: "a", cap: 9
            },
            {
                text: "Dejarlo pasar",
                selection: "b", cap: 9
            }
        ]
    },
    b: {
        text: 'Te alejas en silencio hasta el pueblo, por suerte no te persigue nadie, el pueblo parece estar vacío... Cansado te tiras al piso mirando al cielo, este se pone rojo... Pero parece que no puedes dejar de mirar el cielo...',
        options: [
            {
                text: "Rojo",
                selection: "e", cap: 10,
                action: "RED"
            },
            {
                text: "Rojo",
                selection: "e", cap: 10,
                action: "RED"
            },
            {
                text: "Rojo",
                selection: "e", cap: 10,
                action: "RED"
            }
        ]
    },
    c: {
        text: "¿Por qué? Literalmente sigues al lado de la casa, aun te pueden escuchar. Mejor voy a cambiar tu opcion a quedarse durmiendo en el piso.",
        options: [
            {
                text: "Abrir los ojos",
                selection: "e", cap: 10
            },
            {
                text: "Despertar",
                selection: "e", cap: 10
            },
            {
                text: "Desdormir",
                selection: "e", cap: 10
            }
        ]
    },
    d: {
        text: "El postre se encuentra en camino mientras el plato principal está siendo todo un éxito, a todos les gusto tanto que se quedaron sin palabras.",
        options: [
            {
                text: "Postre",
                selection: "c", cap: 9
            }
        ]
    },
    e: {
        text: "Te despiertas y estás atado en una silla enfrente de alguien en tus mismas condiciones. A tu alrededor ves gente dormida que también está atada, pero con la boca tapada. Un humo rojo sale de la nada cuando te das cuenta de que en el piso hay una extraña marca hecha con sal. Un hombre con cabeza de pajaro y el torso pintado de rojo se acerca a ustedes dos con una bebida extraña de color verde, mientras piensa a quien darsela, les da a elegir a ambos.",
        options: [
            {
                text: "Tomar",
                selection: "g", cap: 9
            },
            {
                text: "No tomar",
                selection: "h", cap: 9
            }
        ]
    },
    x: {
        text: "Cuando despiertas te encuentras atado y con la boca tapada en una especie de asiento muy incómodo. No se ve nada más que un humo rojo y unas siluetas, estas parecen personas atadas formando un círculo. En el centro hay dos más y una parada con algo extraño en la cabeza que se parece a el cráneo de un ave. Pero es tan grande que debe ser otra cosa.",
        options: [
            {
                text: "No hacer nada",
                selection: "e", cap: 9
            },
            {
                text: "Forcejear",
                selection: "f", cap: 9
            }
        ]
    }
};
export default cap;