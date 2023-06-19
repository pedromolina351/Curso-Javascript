/**Ya vimos los operadores lógicos que nos permiten
 * evaluar condiciones que devuelven un valor booleano
 * Ahora veremos funciones que contienen código que
 * se va a ejecutar dependiendo qué valore se tome
 */

//Si se cumple algo, ejecutamos un código dentro de las llaves
/**Ejemplo1
 * Si tenemos un usuario que va a ingresar a un concierto
 * queremos comprobar si tiene tickets y su edad
 */
const usuario = {
    edad: 26,
    ticket: false
}
//Imaginamos que queremos que entren solo los usuarios
//que son mayores de edad y tienen un tiket

if (usuario.edad > 17) {
    console.log('El usuario es mayor de edad, puede entrar al concierto');
    //Este código solo se ejecuta si la condición se cumple
} else {
    console.log('El usuario es menor de edad, no puede entrar al concierto')
    //Este código solo se ejecuta si la condición no se cumple
}
//En este ejemplo no importa si el ticket es false, ¿cómo hacemos eso?

/**Ejemplo2 combinando operadores
 * Queremos que verifique si es mayor de edad y si tiene tickets
 */
if (usuario.edad > 17 && usuario.ticket) {//no es necesario hacer usuario.true == true
    console.log('El usuario tiene ticket y edad suficiente');
    //Para que se ejecute este código tienen que cumplirse 2 condiciones
} else {
    console.log('Es menor de edad o no tiene ticket');
}

/**Ejemplo 3 else if */
if (usuario.edad > 17 && usuario.ticket) {
    console.log('El usuario tiene ticket y edad suficiente');
    //Para que se ejecute este código tienen que cumplirse 2 condiciones
} else if (usuario.edad < 17) {
    console.log('El usuario es menor de edad');
} else if (!usuario.ticket) {
    console.log('El usuario no tiene un ticket');
};