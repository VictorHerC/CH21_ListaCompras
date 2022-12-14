// Campo producto - Name
// Campo cantidad -Number
// Boton agregar btnAgregar
//alertaValidaciones
// ContadorProductos
//productosTotal
//precioTotal
// tabla tablaListaCompras

let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");
let total = document.getElementById("precioTotal");
let tabla = document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");
let btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener ("click", function(event) {
    event.preventDefault();
});