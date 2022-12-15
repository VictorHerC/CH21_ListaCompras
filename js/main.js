// botón se llama btnAgregar
//   otro id contadorProductos
//id totalProductos  y id totalNumero
//campo pprducto=  Name
// Campo cantidad = Number
// alertValidacionesTexto
// alertValidaciones
// precioTotal y PrecioNumero
// id tabla = tablaListaCompras

let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");
let total = document.getElementById("precioTotal");
let tabla = document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");
let btnAgregar = document.getElementById("btnAgregar");
let idTimeout;
let contador = 0;
let totalEnProductos = 0;
let productosTotal= document.getElementById("productosTotal");
let contadorProductos = document.getElementById("contadorProductor");
let alertValidaciones = document.getElementById("alertValidaciones");
let precio =0;
let cantidad =0;
let costoTotal = 0;
let precioTotal = document.getElementById("precioTotal")
//genera un precio aleatorio
    function getPrecio(){
        return Math.floor(Math.random() *50 *100) / 100;
    }

    //validar nombre con función ternaria
    function validarNombre(){
        return(txtNombre.value.length>=2)?true:false;
    }

    function validarCantidad(){
        if(txtNumber.value.length ==0){
            return false;
        }
        if(isNaN(txtNumber.value)){
            return false;
        }
        if(parseFloat(txtNumber.value)<=0){
            return false;
        }
        return true;
    }

btnAgregar.addEventListener ("click", function(e){
    e.preventDefault();
    clearTimeout(idTimeout);
    alertValidacionesTexto.innerHTML="";
    if  ((! validarNombre()) || (! validarCantidad ())){
        let lista ="<ul>";
       
        if  (! validarNombre()){
            txtNombre.style.border = "red thin solid";
            lista += "<li>Se debe escribir un nombre valido</li>";
           
        }
        if  (! validarCantidad ()){
            txtNumber.style.border = "red thin solid";
            lista += "<li>Se debe escribir una cantidad valida</li>";
        
        }
        lista += "</ul>";

        
        alertValidacionesTexto.insertAdjacentHTML("beforeend",lista);
        alertValidaciones.style.display="block";
        idTimeout = setTimeout (function (){
        alertValidaciones.style.display="none";
        }, 5000);

return false;

}// if ! validaciones
txtNombre.style.border ="";
txtNumber.style.border ="";
alertValidaciones.style.display="none";
contador ++;
contadorProductos.innerHTML= contador;
let cantidad = parseFloat(txtNumber.value);
totalEnProductos += cantidad;
productosTotal.innerHTML= totalEnProductos;
precio = getPrecio();
costoTotal += precio * cantidad;
precioTotal.innerHTML= "$" + costoTotal.toFixed(2);

let row = `<tr>
<td>${contador}</td>
<td>${txtNombre.value}</td>
<td>${txtNumber.value}</td>
<td>${precio}</td>
</tr>`;
cuerpoTabla[0].insertAdjacentHTML("beforeend", row);

txtNombre.value="";
txtNumber.value="";
txtNombre.focus(); 


});
txtNombre.addEventListener("blur", function(e){
    e.preventDefault();
    txtNombre.value = txtNombre.value.trim();
    //e.target.value = e.target.value.trim(); tambien funciona aca
});
txtNumber.addEventListener("blur", function(e){
    e.preventDefault();
    e.target.value = e.target.value.trim();
   
});