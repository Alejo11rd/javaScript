/*4. desarrolar un codigo que permita conocer di un numero es primo*/
function esPrimo(numero) {
    // Si el número es menor o igual a 1, no es primo
    if (numero <= 1) {
        return false;
    }

    // Verificar si el número tiene divisores aparte de 1 y sí mismo
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

// Ejemplo de uso
let numero = 1;
if (esPrimo(numero)) {
    console.log(`${numero} es un número primo.`);
} else {
    console.log(`${numero} no es un número primo.`);
}
