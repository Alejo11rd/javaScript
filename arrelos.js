/*estrucuta de datos que permite 
almacenar varios valores en una sola variable*/

/*un objeto tipo Array*/
let autos =  new Array ('BMW', 'Mercedes Benz', 'volvo');

/*empleado una constante para declarar un arreglo como variable, 
permitido de ighyal de manera modificar su contenido*/
const coches =['BMW','Mercedes Benz', 'volvo'];

coches[1];
console.log( coches[1])



for (let contador =0; contador< coches.length; contador++){
    console.log(contador+':' +coches [contador]);
}
coches[1] = 'mercho';

/*para modificar el valor de una posicion
 del arreglo se acccede a esta y se asigna = el nuevo valor*/
console.log( coches[1])

/* para adicionar elementos se puede realizar meduiante*/
coches.push ('nissan')

/*acceder a la posicioen de arreglo*/
 coches[coches.length]= 'audi';

 /*para saber si una varible es de tipo arreglo*/
 Array.isArray(coches);
coches  instanceof Array
console.log( Array.isArray(coches))
console.log( coches  instanceof Array)

