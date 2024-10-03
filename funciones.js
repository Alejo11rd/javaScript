function miFunction(a,b){
    console.log("suma:" + (a+b));

}
/*expresadas*/
function suma(num1, num2){
    let resultado;
    resultado = num1 + num2;
    return resultado;
    
}
miFunction(3,2)
console.log (suma(4,6))

/* funciones tipo expresion*/
/*funciones anonimas que no  tienen nombre*/
let x = function(a,b){return a + b};
let resultado = x(1,2);
console.log(resultado)

/*funcion recursiva*/
const factorial =function fac (n){
    return n < 2 ? 1 :n * fac (n-1);
};
console.log(factorial(3))

/*funciones tipo flecha*/
const sumaFunctionFlecha = (num1, num2)=> num1+num2;
resultado= sumaFunctionFlecha(3,5);
console.log(resultado)
