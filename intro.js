console.log(eval(new String("hola")));
console.log(eval("2+2"));
var nombre = "alejandro"
console.log(nombre)

var variable ="nombre" ;
 
let nombre2;
nombre = "camilo"

const apellido = "Rocha"

let nombreCompleto2 = "Sebastian Vanegas";
let nombreCompleto3 = "Camilo Rocha";
 console.log(eval("nombreCompleto2"));

 /*En JavaScript las variables pueden empezar por:*/
/*● _*/
let _1654;
/*● $*/
let $gsdgsdg;
/*● Letras*/
let a1654;
/*De igual manera las variables se pueden declarar inicialmente sin un valor definido:*/
let x, y;
x = 5;
y = 3;


/*Primitivos: Aquellos que son inmutables,
básicos, no se alteran sus propiedades (string,
number, bigint, boolean, undefined y symbol)*/

//Tipo de dato: String
var nombre = "Camilo";

//Tipo de dato: Numérico
var numero = 25;

//Tipo de dato: Booleano
var bandera = true;

/*Tipo de dato: Symbol (Valor único para una
variable) - ECMA 6*/
var simbolo = Symbol("Mi símbolo");
Symbol("foo") === Symbol("foo"); 


//Tipo de dato: Undefined (default)
var x1;
var c = undefined;


/*Objetos: Aquellos tipos de datos que tienen Funciones:
 PROPIEDADES O ADTRIBUTOS MODIFICABLES*/ 

 //Tipo de dato: Objeto - object (es un objeto literal)
var objeto = {
    nombre : "Norbey",
    apellido : "Muñoz",
    telefono : 3153160759};

// Array
var autos = ['BMW', 'Audi', 'Volvo'];


// Nulo
var y1 = null;
function myfuncion(){
}
class Persona{
constructor(nombre, apellido){
this.nombre = nombre;
this.apellido = apellido;
}
}


/*Aritméticos: Operadores que permiten operar
variables de tipo numérico (Suma, resta,
multiplicación, división, módulo, exponente)*/

//SUMA
let a = 3;
let b = 2;
let z = a + b;

//RESTA
z = a - b;

//MULTIPLICACIÓN
z = a * b;

//MULTIPLICACIÓN
z = a * b;


/*Incremento y decremento: Aumento y
disminución de valor de una variable numérica.*/

//Variables
let x3 = 3, y3 = 4;
let sum = x3 + y3

//INCREMENTO

/*Preincremento (++ antes de la variable)incrementa el valor de la variable 
en una unidad antes de que se realice una operacion */
sum = ++x;
let i = 0;
console.log(++i)
console.log(++i)

/*Posincremento (++ después de la variable) incrementa el
 valor de la variable en una unidad despues de que se haya utilizado su valor actual */
sum = y++;

let i2= 0;
console.log(i2++)
console.log(i2)
console.log(i2++)
console.log(i2)

//DECREMENTO

/*Predecremento (-- antes de la variable)*/
sum = --x;

let p = 3;
console.log(--p)
//Posdecremento (-- después de la variable)
sum = y--;



let x4, y4; 
console.log(x4)
console.log(y4)

let x5 = undefined;
console.log(x5)

/*operadores de ralacion*/

let resultado = (1 > 2) ? "verdadero" : "falso";
console.log(resultado)

let resultado2 = (1 > 2) ? "verdadero" : 0;
console.log(resultado2)

let numero2 =10;
resultado = ( numero2 % 2 == 0)? "par" : "impar";
console.log(resultado)


/* operadores de conjuncion (AND) y disyuncion (OR)*/
let a2 = 11;
let minimo = 0;
let maximo = 10;


/*AND: Se cumple cuando dos condiciones son
verdaderas*/
if( a >= minimo && a <= maximo ){
console.log("El número está en el rango")
}
else{
console.log("El número está fuera del rango")
}

/*OR: Se cumple cuando una o dos condiciones de
dos es verdadera*/
let vacaciones = false;
let diaDescanso = true;
if ( vacaciones || diaDescanso ){
console.log("El padre puede asistir al juegodel hijo");
}
else{
console.log("El padre está ocupado");
}





