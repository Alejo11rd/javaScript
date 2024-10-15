/*las clase fueron introdicidas con el ECMAScript 2015(v6)siendo funciones especiales. en terminos generales las clases permiten 
agrupar un conjunto de atributos y metodos que pueden ser definidos para varias instancias*/
class Persona{
    constructor(nombre,apellido){
        this._nombre=nombre;
        this._apellido=apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
}
//una vez declarada la clase con su metodo constructor getters y setter se pueden declarar objetos instancias de la clase para el uso de metodos//
let persona1 = new Persona("camilo","roacha");
console.log(persona1);
let persona2 = new Persona ('laura','contreras');
console.log(persona2.nombre);
persona1.nombre="camilo enrique";//set nombre ("camilo enrique")
console.log(persona1.nombre);//get nombre()

/*static*/

class Persona3{
    static contadorPersona =0;
    static get MAX_OBJ(){
        return 5;

    }
    static saludar(){
        console.log('saludes desde el metodo estatico');
    }
    static saludar2(persona){
        console.log(persona.nombre);
    }

} 
let persona5 = new Persona3 ()
let persona = new Persona3()
/*Persona3.saludar();*/
console.log(Persona3.saludar())





