const num: number = 1
const str: string = 'sss'
const isActive: boolean = true

/* Tipos complejos  */

/* Arrays */
const numeros: number[] = [1, 2, 4]
const palabras: string[] = ['sd', 'sdf']

/* Tuplas */
const tupla: [string, number] = ['juan', 24]  // por ejemplo se usa en useSTate


/* Funciones */

function suma(x: number, y: number): number {
    return x + y;
}

/* Identity, Tipos Genericos*/

function myFuncion<T>(value: T) {
    return value;
}


const resultado = myFuncion({ a: 1 }) // Typescript infiere el tipo de dato

/* Especificando el tipo generico --- Muy usado!!! */


const resultado2 = myFuncion<string>('hello')


/* Herencia */

interface Persona {
    name: string;
    age?: number
}

interface Usuario extends Persona {
    password: string;
}

const usuario: Usuario = {
    password: 'number'
}