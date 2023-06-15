//------------------------ 30 ---------------------------------
//Operadores aritméticos
const modulo = 10 % 3;
/**El operador módulo nos permite obtener el restante
 * de una división.
 * Si dividimos 10/3, ¿cuántas veces cabe el 3 dentro del 10?
 * cabe 3 veces, ya que 3*3 es 9 pero va a sobrar una unidad
 * para obtener esa unidad lo hacemos con el operador de módulo %
 */
console.log(modulo);

//Operadores de aumento y disminución
let numero = 1; //Crear una variable let, para poder cambiar su valor
numero = numero + 1; //Podemos incrementar 1 unidad a nuestra variable

numero++; //Esta es una manera más eficiente de hacerlo
numero--;

console.log(numero);

//------------------------ 31 ---------------------------------
//Operadores de asignación
/**Ya vimos cómo aumentar el valor en un número, ahora veremos
 * cómo podríamos aumentar un número en otro valor
 */
let cantidad = 10;

//tenemos una variable con el valor de 10 y queremos aumentarle 5 unidades

cantidad = cantidad + 5; //Podemos hacerlo de esta forma
cantidad += 5; //Utilizando el operador += se le asignan 5 unidades
cantidad += 5; //A la cantidad se le resta 5

console.log(cantidad);


//------------------------ 32 ---------------------------------
//Operadores de Comparación
//const resultado = 5 > 1; // true
//const resultado = 20 > 20; // false
//const resultado = 20 >= 20; // true
//const resultado = 20 == 20; // true
//const resultado = 10 == '10'; // true, tienen el mismo valor aunque sean distintos tipos
//const resultado = 10 === '10'; //false, mismo valor, pero distinto tipo

//Operador ternario
const resultado = 7 > 1 ? 'El primer valor es mayor que el segundo' : 'El segundo valor es mayor que el primero';
/**Primero se hace una comparación utilizando el operador >
 * evalúa la condición, si es verdadera, se guarda en la variable
 * el valor de la primera cadena, sino, se guarda el valor de la 
 * segunda cadena.
 */
console.log(resultado);


