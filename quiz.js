
const cons = {
    nombre: "andres",
    edad: 28,
    ciudad: "bogota",
    ocupacion: "ingeniero",
    descripcion: function() {
      return `${this.nombre} es una persona con ${this.edad} años, viviendo en ${this.ciudad}, que trabaja como ${this.ocupacion}.`;
    }
  };
   console.log(cons.descripcion())



  
  