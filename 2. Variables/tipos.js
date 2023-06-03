//------------- Cadenas de texto --------------------
/**Podemos usar comillas sencillas '', dobles "",
 * y el acento inverso ``
 * Lo ideal al trabajar con js, es usar comillas
 * simples, como una buena práctica de programación.
 */
const nombre = 'Carlos';
//No podemos hacer: presentacion = "Mi nombre es "Carlos"";
//Si fuera usamos comillas dobles, dentro podemos usar simples y viceversa.
const parrafo = 'Mi nombre es "Carlos"';
const parrafo2 = "Mi nombre es 'Carlos'";
const parrafo3 = 'Mi nombre es \'Carlos\'';
//La contrapleca lo que hace es "escapar" la comilla.

//----------------- Numeros ------------------------
/**
 * Podemos incluir valores numericos enteros y decimales.
 */
const numero = 4;
const numero2 = -4.123

//---------------- Booleanos --------------------
/**
 * Los valores booleanos se usan para indicar al sitio 
 * web que se evalúe una condición y devuelva true o false
 * Podríamos usarlos para rastrear las interacciones del usuario,
 * como si un botón está activado o desactivado, si se hace
 * click en un elemento, si un cuadro está marcado o desmarcado.
 * Estos se llaman estados booleanos y se usan para realizar 
 * acciones específicas o actualizar la página en consecuencia.
 */
const usuarioConectado = false;
const mayorQue = 1 > 2;
console.log(mayorQue);

//---------------- Arreglos - Arrays --------------------
const arreglo = [1, 10, 5];
console.log(arreglo); 
/**
 * Podríamos decir que un arreglo es una variable que
 * almacena varios valores. Lo interesante de los arreglos
 * es que permite almacenar varios tipos de valores distintos
 * en el mismo arreglo.
 */
const arreglo2 = ['cadena', true, 23, [1 ,2, 3]]; 
console.log(arreglo2);
// Para acceder a los atributos internos se hace mediante la posicion del arreglo.
console.log(arreglo2[0]); 

//---------------- Objetos - object --------------------
//---------------- Diapositiva 27 ----------------------
/**
 * Son muy similares a los arreglos, nos permiten guardar informacion
 * pero en un formato de "parejas", donde dentro de una pareja 
 * vamos a tener una estructura llamada clave-valor.
 */
const persona = {
    nombre: 'Julio', // cada dato va separado por una coma.
    apellido: 'Ramos',
    edad: 23,
    carro: { // Los objetos también pueden tener como dato otro objeto.
        marca: 'Ford',
        color: 'Rojo'
    },
    trabajos: ['Profesor', 'Arquitecto']
}
console.log(persona);
//Para acceder a los atributos internos de un objeto se hace con un .atributo
//Acceder a los datos es más fácil con objetos que con arreglos.
console.log(persona.nombre);
console.log(persona.carro.marca);
console.log(persona.trabajos[0]);