import { CapMultiple } from "../caps";

const cap: CapMultiple = {
    a: {
        text: 'Observas a alguien tirando sal en el piso de lo que antes era el comedor, pero ahora esta vacio. En tu vista se te cruza el conductor, le da un cuchillo al que estaba poniendo la sal y este empieza a hacer marcas en el piso. Al ver todo esto quedas impactado y sigues mirando un poco mas cuando alguien mas trae una especie de asiento que definitivamente no era uno de los que estaban usando antes. Te das la vuelta y observas una ventana como tu unica alternativa, en el baño se encuentran unos objetos que talvez podrias usar:',
        options: [
            {
                text: 'cepillo',
                selection: "b", cap: 7
            },
            {
                text: 'ropa sucia',
                selection: "a", cap: 7
            },
            {
                text: 'peine',
                selection: "c", cap: 7
            },
            {
                text: 'jabon',
                selection: "d", cap: 7
            },
        ]
    },
    b: {
        text: 'Cuando esta casi todo servido dejas al Traductor con los comensales y sales afuera con Pepe y lo acompañas a cazar los ingredientes faltantes.',
        options: [
            {
                text: 'pimienta',
                selection: "c", cap: 9
            },
            {
                text: 'cebollas',
                selection: "c", cap: 9
            },
            {
                text: 'papas',
                selection: "c", cap: 9
            }
        ]
    }
};
export default cap;