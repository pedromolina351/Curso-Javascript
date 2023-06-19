/**Ya sabemos que los arreglos almacenan todo tipo de dato
 * y que podríamos definirlos o inicializarlos con un valor
 */
const arreglo = ['Texto', 456.2, false, { propiedad: 'valor' }, [1, 2, 3]];
console.log(arreglo);

/**Pero también podemos declarar un arreglo y darle valores luego */
const colores = [];
colores[0] = 'Rojo';
colores[1] = 'Azul';
colores[1] = 'Blanco';

/**Notese que aunque estamos usando el mismo índice 2 veces */
console.log(colores);

//Los arreglos tienen propiedades y métodos (porque son objetos)
/**
 * Para acceder a los métodos de un objeto
 * lo hacemos con '.'
 * Una de las propiedades que podemos usar es
 * .length que sirve para conocer el tamaño
 * de un arreglo
 */
console.log('El tamaño del arreglo colores es: ' + colores.length)

/**Existe un método que nos permite agregar 
 * elementos al arreglo
 */
colores.push('Verde');
//Lo que hace push es agregar un valor al final del arreglo

/**Existe una función que itera o recorre un arreglo automáticamente */
colores.forEach(color => {
    console.log('Color: ' + color);
});
// Podríamos agregar un iterador a la función
colores.forEach((color, i) => {
    console.log('Color ' + i + ': ' + color);
});



