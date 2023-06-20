//Ciclo for
/**Repite un bloque de código mientras se cumpla una condición
 * 
 * Expresión 1: inicialización, se ejecuta una sola vez antes de comenzar a repetir el bloque
 * Expresión 2: Una condición, mientras se cumpla se ejecutará el bloque de código
 * Expresión 3: Esta expresión se ejecuta siempre y después de que se ejecute el bloque
 */
// for (inicialización; condición; actualización) {
//     //código a ejecutar en cada iteración
// }

//Si queremos mostrar los números del 1 al 10 queremos que empiece desde el 1
for (let numero = 1; numero < 10; numero++) {
    console.log(numero);
}

const nombres = ['Carlos', 'Luis', 'Juan', 'Martha', 'Sofía', 'Martín', 'Pedro'];
for (let numero = 0; numero <= 3 /*nombres.length*/; numero++) {
    console.log(nombres[numero]);
}

/**Sentencia Break
 * Nos permite finalizar la ejecución de un ciclo
 * imaginamos que estamos imprimiendo los números del 1 al 10*/
// for (let numero = 1; numero <= 10; numero++) {
//     console.log(numero);
// }
/**Pero por alguna razón deseamos cortar ese ciclo cuando imprime el 5
 * agregamos un condicional y la sentencia break
 */
for (let numero = 1; numero <= 10; numero++) {
    console.log(numero);
    if (numero === 5) {
        console.log('Terminar la función');
        break;
    }
}

/**Un ejemplo mas:
 * Imaginamos que estamos imprimiendo un listado de nombres, pero queremos
 * que se detenga cuando encuentre un nombre en específico.
 */
for (let numero = 0; numero <= 3 /*nombres.length*/; numero++) {
    console.log(nombres[numero]);
    if (nombres[numero] === 'Juan') {
        console.log('Terminar la función');
        break;
    }
}

/**Sentencia Continue
 * Nos permite saltarnos una iteración o sea, continuar a la siguiente
 * Ejemplo: Estamos imprimiendo una lista de invitados, pero de esa lista
 * queremos omitir a alguien en específico porque nos cae mal
 */
console.log('Lista de personas aceptadas')
for (let i = 0; i <= nombres.length; i++) {
    if (nombres[i] === 'Martha') {
        continue;
    }
    console.log(nombres[i]);
}

/**Ciclo while
 * Funciona de forma similar al ciclo for, pero en vez de tener
 * 3 condiciones, solamente tendremos 1.
 */
let contador = 0;
while (contador < 5) {
    console.log('Hola');
    contador++;
}

/**Ciclo do while
 * Es similar al ciclo while, con la diferencia que ejecuta el bloque
 * al menos una vez.
 */
contador = 0;
do {
    console.log("Contador: " + contador);
    contador++;
} while (contador < 5);


