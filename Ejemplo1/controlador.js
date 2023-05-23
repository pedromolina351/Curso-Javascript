function sumar() {
    // Obtener los valores de los input
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    // Realizar la suma
    var resultado = num1 + num2;
    console.log(resultado);

    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").innerHTML =
        "El resultado es: " + resultado;
}