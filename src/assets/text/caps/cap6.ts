import { CapMultiple } from "../caps";

const cap: CapMultiple = {
    a: {
        text: 'Observas a alguien tirando sal en el piso de lo que antes era el comedor, pero ahora está vacío. En tu vista se te cruza el conductor, le da un cuchillo al que estaba poniendo la sal y este empieza a hacer marcas en el piso. Al ver todo esto quedas impactado y sigues mirando un poco más, cuando alguien trae una especie de asiento que definitivamente no era uno de los que estaban usando antes. Te das la vuelta y observamos una ventana como tu única alternativa, en el baño se encuentran unos objetos que talvez podrias usar:',
        options: [
            {
                text: 'Cepillo',
                selection: "b", cap: 7
            },
            {
                text: 'Ropa sucia',
                selection: "a", cap: 7
            },
            {
                text: 'Peine',
                selection: "c", cap: 7
            },
            {
                text: 'Jabón',
                selection: "d", cap: 7
            },
        ]
    },
    b: {
        text: 'Cuando está casi todo servido, dejas al Traductor con los comensales y sales afuera con Pepe y lo acompañas a cazar los ingredientes faltantes.',
        options: [
            {
                text: 'Pimienta',
                selection: "c", cap: 9
            },
            {
                text: 'Cebollas',
                selection: "c", cap: 9
            },
            {
                text: 'Papas',
                selection: "c", cap: 9
            }
        ]
    }
};
export default cap;