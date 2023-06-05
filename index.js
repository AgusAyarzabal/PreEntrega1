let nombre = prompt("Ingrese su nombre para continuar.")
if (nombre == "") {
    alert = ("Ingrese su nombre.")
} else {
    alert("Bienvenido " + nombre + ".")
}
alert("Presione Aceptar para comenzar a utilizar la Calculadora.")

// YA PUEDE UTILIZAR CALCULADORA

// Función para sumar dos números
function sumar(num1, num2) {
    return num1 + num2;
}

// Función para restar dos números
function restar(num1, num2) {
    return num1 - num2;
}

// Función para multiplicar dos números
function multiplicar(num1, num2) {
    return num1 * num2;
}

// Función para dividir dos números
function dividir(num1, num2) {
    return num1 / num2;
}

// Función principal de la calculadora
function calculadora() {
    let opcion = "";
    let num1, num2;

    while (opcion !== "0") {
        opcion = prompt("Ingrese una opción: (1. para Sumar- 2. para Restar- 3. para Multiplicar- 4. para Dividir- 0 para Salir)");

        switch (opcion) {
            case "1":
                alert("Usted presionò la opcion 1 para Sumar")
                num1 = parseInt(prompt("Ingrese el primer número: "));
                num2 = parseInt(prompt("Ingrese el segundo número: "));
                alert("Resultado: " + sumar(num1, num2));
                break;
            case "2":
                alert("Usted presionò la opcion 2 para Restar")
                num1 = parseInt(prompt("Ingrese el primer número: "));
                num2 = parseInt(prompt("Ingrese el segundo número: "));
                alert("Resultado: " + restar(num1, num2));
                break;
            case "3":
                alert("Usted presionò la opcion 3 para Multiplicar")
                num1 = parseInt(prompt("Ingrese el primer número: "));
                num2 = parseInt(prompt("Ingrese el segundo número: "));
                alert("Resultado: " + multiplicar(num1, num2));
                break;
            case "4":
                alert("Usted presionò la opcion 4 para Dividir")
                num1 = parseInt(prompt("Ingrese el primer número: "));
                num2 = parseInt(prompt("Ingrese el segundo número: "));
                alert("Resultado: " + dividir(num1, num2));
                break;
            case "0":
                alert("Saliendo de la calculadora...");
                break;
            default:
                alert("Opciòn no valida.");
        }
    }

}

// Llamar a la función calculadora para iniciar la calculadora
calculadora();
