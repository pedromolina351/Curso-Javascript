//------------------------ 32 ---------------------------------
/**Si tenemos un programa que registra las personas que
 * quieren entrar a una sala de cine, pero solamente 
 * pueden pasar aquellos que tengan más de 16 años
 * Primero podríamos crear una variable para almacenar
 * el nombre de la persona.
 */

const nombre = 'Arturo';
const edad = 15;

//Con estos valores nos basta para saber si la persona puede entrar

/**Creo una variable que será booleana y tendrá el valor de true
 * si la persona tiene permitido el acceso a la sala
 * sino, será false.
 */
let permitirAcceso = edad >= 18;
console.log('Acceso permitido? ' + permitirAcceso);

/*Podríamos hacer más interesante el ejemplo preguntando si
la persona a parte de tener edad suficiente, compró un boleto*/

const tieneBoleto = true;

//Para verificar que cumpla ambas condiciones lo haremos con &&

permitirAcceso = edad >= 18 && tieneBoleto;
console.log('Acceso permitido? ' + permitirAcceso);
/**Para que esta sentencia sea verdadera se tienen que cumplir
 * ambas condiciones*/

/**Imaginemos ahora, que se le permita entrar a menores de edad
 * solamente si van acompañados de un adulto, entonces haremos
 * otra variable que pregunte si está solo.
 */
const tienePermiso = false;

/*Para verificar que cumpla al menos una condición usamos ||
Vamos a crear 2 condiciones, una en la que tiene entrada y edad
y otra en la cual tenga entrada y permiso*/
permitirAcceso = (edad >= 18 && tieneBoleto) || (tienePermiso && tieneBoleto);
console.log('Acceso permitido? ' + permitirAcceso);
