let q1 = 10;
if (q1 % 2 == 0) {
    console.log("q es un número par.");
} else {
    console.log("q es un número impar.");
}

let lado1 = 2;
let lado2 = 5;
let lado3 = 5;

if (lado1 === lado2 && lado2 === lado3) {
    console.log("El triángulo es equilátero.");
} else {
    console.log("El triángulo es escaleno.");
}



let numero5 = 7;
let esPrimo = true;

if (numero5 <= 1) {
    esPrimo = false;
} else {
    // Comprobamos si es divisible por algún número entre 2 y numero-1
    for (let i = 2; i < numero5; i++) {
        if (numero5 % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

if (esPrimo) {
    console.log(numero5 + " es un número primo.");
} else {
    console.log(numero5 + " no es un número primo.");
}

