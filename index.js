//INGRESO DE DATOS PARA PODER UTILIZAR CALCULADORA

let nombreCompleto = prompt("Ingrese su nombre completo para continuar.")
if (nombreCompleto == "") {
    alert = ("Ingrese su nombre.")
} else {
    alert("Bienvenido " + nombreCompleto + ".")
}

let edad = parseInt(prompt("Debes ser mayor de edad para utilizar nuestros servicios. Ingrese su edad por favor."))
if (edad >= 18) {
    alert("Eres mayor, puedes continuar.")
} else {
    alert("No eres mayor.")
}

if ((nombreCompleto != "") && (edad >= 18)) {
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
            console.log("Calculadora");
            console.log("1. Sumar");
            console.log("2. Restar");
            console.log("3. Multiplicar");
            console.log("4. Dividir");
            console.log("0. Salir");


            opcion = prompt("Ingrese una opción: ");

            switch (opcion) {
                case "1":
                    num1 = parseInt(prompt("Ingrese el primer número: "));
                    num2 = parseInt(prompt("Ingrese el segundo número: "));
                    alert("Resultado: " + sumar(num1, num2));
                    break;
                case "2":
                    num1 = parseInt(prompt("Ingrese el primer número: "));
                    num2 = parseInt(prompt("Ingrese el segundo número: "));
                    alert("Resultado: " + restar(num1, num2));
                    break;
                case "3":
                    num1 = parseInt(prompt("Ingrese el primer número: "));
                    num2 = parseInt(prompt("Ingrese el segundo número: "));
                    alert("Resultado: " + multiplicar(num1, num2));
                    break;
                case "4":
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
} else {
    alert("Los datos ingresados no son vàlidos.")

}

// Llamar a la función calculadora para iniciar la calculadora
calculadora();