const nombre = prompt("ingrese por favor su nombre") || "Sujeto";
let operacion;
let sumando1;
let sumando2;
let minuendo;
let sustraendo;
let multiplicando;
let multiplicador;
let dividendo;
let divisor;
let residuo;
let total;

window.onload = programa;

function programa(){

    while (1 == 1){

    alert(nombre + ". señale el tipo de operacion que desea realizar");

    operacion = prompt("suma = 1, resta = 2, multiplicación = 3 y division = 4") || 0;

    if (operacion == 1){
        alert("la operación seleccionada fue: Suma")
        sumando1 =  prompt("ingrese el primer sumando") || 0;
        sumando2 =  prompt("ingrese el segundo sumando") || 0;

        total = (parseFloat (sumando1) + parseFloat (sumando2));
        alert("el resultado es: " + total);

        alert("Gracias por usar la calculadora!!");
    }
    else if (operacion == 2){

        alert("La operacion seleccionada fue: Resta");

        minuendo = prompt("ingrese el minuendo") || 0;
        sustraendo = prompt("ingrese el sustraendo") || 0;

        total = (parseFloat (minuendo) - parseFloat (sustraendo));
        alert("el resultado es: " + total);

        alert("Gracias por usar la calculadora!!");
    }
    else if (operacion == 3){
        
        alert("La operacion seleccionada fue: Multiplicación");

        multiplicando = prompt("ingrese el multiplicando") || 0;
        multiplicador = prompt("ingrese el multiplicador") || 0;

        total = (parseFloat(multiplicando) * parseFloat(multiplicador));
        alert("el resultado es: " + total);

        alert("Gracias por usar la calculadora!!");
    }
    else if (operacion == 4){
        
        alert ("la operacion seleccionada fue: División");

        dividendo = prompt("ingrese el dividendo") || 0;
        divisor = prompt("ingrese el divisor") || 0;

        total = (parseFloat (dividendo) / parseFloat(divisor));

        alert ("el resultado es: " + total);

        alert("Gracias por usar la calculadora!!");
    }
    else{

        alert("ingresa un numero valido");
        operacion = prompt("suma = (1), resta = (2), multiplicación = (3) y division = (4)");
        }
}
}



