//La forma más básica de declarar funciones
function crearMensaje() {
    console.log('mensaje en consola');
}

//Declarar funciones dentro de una variable
const generarMensaje = function () {
    console.log('mensaje en consola');
}

//Funciones de tipo flecha
const saludo = () => {
    console.log('Hola');
}
saludo();
/**Las funciones tipo flecha nos permiten ahorrar código
 * si hay una función que solo tiene una instrucción, podríamos
 * declararla en una sola línea en las cuales podríamos
 * eliminar el punto y coma y eliminar las llaves
*/
const saludo1 = () => console.log('Hola')

//Ejemplo función tipo flecha con parámetros
const operacion = (tipo, numero1, numero2) => {
    if (tipo === 'suma') {
        console.log(numero1 + numero2);
    } else if (tipo === 'resta') {
        console.log(numero1 - numero2);
    } else if (tipo === 'multiplicacion') {
        console.log(numero1 * numero2);
    } else if (tipo === 'division') {
        console.log(numero1 / numero2);
    }
}

operacion('division', 1, 5);

//Operador return
/**La función anterior tiene un problema, el objetivo es
 * que las funciones realicen una sola operación, pero ella
 * está haciendo 2 cosas, está haciendo una operación (ya
 * sea suma, resta) y está imprimiendo en consola.
 * No queremos que esto suceda, por una buena práctica
 * Gracias a la variable return nosotros podemos indicar que queremos retornar 
 * o devolver un valor
 */
const resultado = (tipo, numero1, numero2) => {
    let resultado;

    if (tipo === 'suma') {
        resultado = numero1 + numero2;
    } else if (tipo === 'resta') {
        resultado = numero1 - numero2;
    } else if (tipo === 'multiplicacion') {
        resultado = numero1 * numero2;
    } else if (tipo === 'division') {
        resultado = numero1 / numero2;
    }

    return resultado;
    //Return detiene la ejecución de una función y devuelve el valor que querramos
}
/**El valor de que retorna la función podríamos almacenarlo en una variable */
const variable = resultado('suma', 20, 10);
console.log(variable);

//Alcance de las variables
/**
 * Variables globales
 * - Son las variables declaradas fuera de una función.
 * - Podemos acceder a ellas desde cualquiér parte del código
 * - Podemos usar const, let y var.
 */

/**Al crear esta variable fuera de una función, esta se convierte en una variable GLOBAL
 * Lo que quiere decir que podemos acceder a ella dentro de cualquier parte
*/
var nombre = 'Carlos';

// Si tenemos una función y declaramos una variable dentro
function miFuncion() {
    //Desde adentro de la función podemos acceder a la variable nombre
    nombre = 'Luis';
    console.log(nombre);

    //Pero si creamos una variable aqui dentro es una variable LOCAL
    var apellido = 'Pérez';
}
miFuncion();
//Intento acceder a la variable apellido y tengo un error
console.log(apellido);

//Ejecutar funciones desde el html



