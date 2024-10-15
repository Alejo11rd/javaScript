
class Persona{
    static contadorPersonas=0;
    email ="valor default email"
    static get MAX_OBJ(){
        return 5;
    }
    constructor (nombre,apellido){
        this._nombre= nombre;
        this._apellido=apellido;
        if ( Persona.contadorPersonas<Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        }
        else {console.log ('se ha creado el maximo numero de personas')
 }
}
get nombre (){
    return this._nombre;
}
set nombre (nombre){
    this._nombre=nombre;
}
get apellido (){
    return this._apellido;
}
set apellido (apellido){
    this._apellido=apellido;
}
nombreCompleto(){
    return `${this.idPersona} ${this._nombre} ${this._apellido}`
}
toString(){
 return this.nombreCompleto();
}
}

person1=new Persona ("esteban","rojas");
console.log(person1.toString())

class Empleado extends Persona{
constructor (nombre,apellido,cargo){
super (nombre,apellido)
this._cargo=cargo
}
set cargo(cargo){
    this._cargo=cargo
}
get cargo(){
    this._cargo
} 
nombreCompleto(){
    return `${super.nombreCompleto()}  ${this._cargo}`
}
toString(){
    return this.nombreCompleto();
   }
}
empleado1=new Empleado("ALEJO","RUIZ", "IT")
Empleado2=new Empleado("DARY","LUNA","DT")
Empleado3 =new Empleado("SANTIAGO","NAVARRO","ING")
Empleado4 =new Empleado("WILLIAM","PATAQUIVA","MUSICO")
Empleado5 =new Empleado("JUAN","DIAZ","ACTRIZ")
Empleado6 =new Empleado("PETRO","SALAZAR","CANTANTE")

console.log(empleado1.toString())