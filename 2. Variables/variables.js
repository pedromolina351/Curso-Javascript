/////////////////////   20   //////////////////////////
/* Reglas acerca de las variables:
 * Deben empezar con una letra (de preferencia minúscula)
 * No deben empezar con número ni caractér (solo '$' o '_')
 * Deben tener nombres únicos, para evitar conflictos.
 * Su nombre no debe ser una palabra reservada
 */
var edad = 27;
console.log(edad);


/////////////////////   21   //////////////////////////
/*
 * string: Cadena de texto.
 * number: Valores numéricos (enteros o decimales).
 * boolean: Booleano (verdadero o falso).
 * object: Objeto.
 * function: funciones.
 * null: No tiene valor.
 * undefined: Su valor no está definido.
 */
var edad = 27;
var name = 'cadena';
var booleano = true;
var nula = null;
var indefinida; //Es undefined por defecto

/////////////////////   22-23   //////////////////////////
let usuario = 'Pedro';
usuario = 'Juan'; //Al ser una variable let, su valor puede cambiar
/*Las cadenas de texto pueden tener comillas simples o dobles, 
no existe ninguna restricción, pero se usan mucho las simples */
const correo = 'pedro@correo.com';
//correo = 'correo2@correo.com' esto es inválido.
console.log(usuario);

//Ejemplo de como declarar múltiples variables
/**Podríamos usar
 * let nombre;
 * let apellido;
 * let telefono;
 * Pero en lugar de esto, podemos hacer una
 * sola definición para todas las variables con*/
let nombre, apellido, telefono;
telefono = 123456;
console.log(telefono);

// Operaciones matemáticas en javascript
const resultado = 4 + 4;
console.log(resultado);
// Concatenar cadenas de texto con '+'
const nombre1 = 'Carlos ';
const nombre2 = 'Arturo';
const nombreCompleto = nombre1 + nombre2;
console.log(nombreCompleto);

/////////////////////   24-25   //////////////////////////
/**
 * En Javascript, las variables no tienen un tipo único
 */

let miVariable = 'Cadena de texto';
miVariable = 8; // o miVariable = true; 

/////////////////////   26   //////////////////////////
//Ejemplos de todos los tipos de datos
/*CREAR NUEVO ARCHIVO 'tipos.js' y cambiar la ruta */




