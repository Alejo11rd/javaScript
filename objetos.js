/* los objetos son como grandes variables capaces de contener otras variables*/
let persona = {
    nombre: "camilo",
    apellido:"Rocha",
    telefono: 3057359505,
    email: "cerochac@udistrital.edu.co",
    edad: 25

}

2.
let persona3 = new Object ();
persona3.nombre = 'Jorge';
persona3.apellido = "Rocha";


/*Se pueden tener métodos en funciones*/
let persona2 = {
nombre: "Camilo",
apellido: "Rocha",
telefono: 3057359505,
email: "cerochac@udistrital.edu.co",
edad: 25,
nombreCompleto: function (){return this.nombre + ' ' + this.apellido}
}
persona["nombre"]
console.log (persona2.nombreCompleto())

/*concatenar cada valor de cada propiedad*/

console.log(persona.nombre+' '+persona.apellido+''+ persona.edad);

/*iterado*/
for (propiedad in persona){
    console.log(persona[propiedad]);
}

/*object.Values() */

let personaArray = Object.keys(persona);
console.log(personaArray);

/*cadena*/ 
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log(persona);

/*constructor: define un objeto constructor con el que despues se puede crear
 un objetos del tipo construido (instancias).Este es un metodo mas comun*/
 function Persona (nombre= 'juan', apellido, email){
    this.nombre=nombre;
    this.apellido=apellido;
    this.email=email;
    this.nomnreCompleto=function(){
        return this.nombre +' ' +this.apellido;
    }
 }
 let persona8 =new Persona ()
 console.log(persona8)

 let padre =new Persona("camilo","Rocha", "camiloerec98@gmail.com");
 console.log(padre);

 let madre = new Persona("laaura","contreras","lxcontreras@unal.edu.co");


 /*para adiccionar una nueva rpopiedad todas las instancias 
 de un objeto se puede utilizar prototype*/
 Persona.prototype.tel = 4433221;
 console.log(padre)
 console.log(madre)

 padre.tel=2345
 console.log(padre)


 function fSaludar (nombre ){
    return("hola " + nombre);

 }
 var cliente1={
    saludar: fSaludar
 };
 cliente1.saludar("Santi");
 console.log( cliente1.saludar("Santi"))

 /*CLOSURE*/

 let constructor = function(precio){
    let miObjeto={
        precioBase:precio,
        Iva:1.21,
        calcularIva : function (){
            return(this.precioBase*this.Iva);
            
        }
    }
    return miObjeto;
 };
 precio1=constructor(100);
 precio1.calcularIva();
 console.log(  precio1.calcularIva())

 function miFuncion(){
    let count =1
    function contador(){
        return  count;
    }
    return contador()
 }
 console.log(miFuncion())
 

 
 var x =10
  function foo (){
    let y = 20;

    function bar(){
        var z =15;
        var output=x+y+z;
        return output
        

    }
    return bar ();
}console.log (foo())



