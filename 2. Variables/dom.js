/**Cualquier elemento HTML puede contener un atributo id, el cual sirve como
 * identificador único y por medio de ese atributo vamos a poder acceder a ese
 * elemento desde nuestro archivo javascript. por medio de una función llamada
 * getElementById que significa obtener elemento por id. (el id debe estar 
 * escrito exactamente igual)
 */
let contenedor = document.getElementById('contenedor');
console.log(contenedor);

/**Varios elementos pueden contener la misma clase, por medio del metodo
 * getElementsByClassName podemos obtener todos los elementos que tengan
 * una clase en específico. --> Ver la consola
 * Esta función devuelve una colección HTML (HTML Collection) es una
 * colección similar a los arreglos en Javascript.
 */
// let elementos = document.getElementsByClassName('miClase');
// console.log(elementos);
//Al ser similar a los arreglos, podemos acceder a sus índices con [].
//console.log(elementos[0]);

/**Seleccionar todos los elementos que tengan una etiqueta específica de html
 * al igual que el anterior, devuelve una colección html.
 */
// let etiqueta = document.getElementsByTagName('p');
// console.log(etiqueta);

/**Seleccionar el primer elemento que cumple el criterio de un selector css
 * por medio del selector del elemento podemos acceder a sus propiedades
 * y métodos. Esto, a diferencia de getElementById podemos acceder al elemento por
 * su ID o por medio de una clase, así como en css, si usamos una id lo hacemos con #
 * y si usamos una clase lo hacemos con . el método selecciona el primer elemento en el
 * dom que contenga dicha clase.
*/
// let selector = document.querySelector('.miClase');
// console.log(selector);
/**Podemos hacer combinaciones de varias clases .miClase.miClase2
 * También podemos combinar etiquetas y clases p .miClase
 * por medio del método :not() podemos especificar algún elemento que no 
 * tenga una clase p:not(miClase) o bien p.miClase:not(.miClase2)
*/

/**En el querySelector estamos obteniendo solamente el primer elemento que cumpla un 
 * criterio específico, ahora, con querySelectorAll, podemos acceder a todos los elementos
 * que cumplan dicho criterio (clase o id). Va a devolver una lista de nodos.
 */
// let selectores = document.querySelectorAll(".miClase");
// console.log('querySelectorAll', selectores);

//A diferencia de las listasHTML, con las listas de nodos podemos usar forEach
// selectores.forEach(selector => {
//     console.log(selector);
// });


//MODIFIAR LOS ELEMENTOS DEL DOM
/**Elemento innerHTML */
contenedor.innerHTML = '<div>Hola mundo</div>';
//modificar el atributo id (verificar en el inspector de elementos)
//contenedor.id = 'nuevoId';
//agregar o establecer el valor de un atributo
/**SetAttribute recibe 2 parámetros, el primero es el atributo que
 * queremos modificar o agregar y el segundo va a ser el valor.
  */
contenedor.setAttribute()



