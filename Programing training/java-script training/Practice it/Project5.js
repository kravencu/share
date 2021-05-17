// Validation form against null and number character

function val_form (nombre, apellido){
if(nombre !=null && isNaN(nombre) && apellido !=null && isNaN(apellido)){
	respuesta = document.write (nombre + " ", apellido);
} 
else{
    respuesta = document.write("No has instroducidos tus datos o has usados valores numericos no permitidos");
};

return respuesta;
};
val_form("Noel", "Gil" +"<br>");

//########################################################
function cinco(...months){ // defined uknow number of arguments
for(let one of months){ // using for let to get only value...
	document.write(one + "<br>");// without tag return to avoid return only one value
//return document.write (months); // thi way we got an array of value

}};
cinco("Enero", "Febrero","Marzo","Abril","Mayo"); // We got an array


//################################################################

function seis (nombre,precio,peso){ // define know number of argumets
return "<strong>Nombre:</strong>" + nombre +"<br> Precio:" + 
precio + "<br> Peso:" + peso + "<br>";
}
var juguete = ['Soldadito',25,5,];
document.write(seis("LEon" , 45 , 2))
document.write(seis(...juguete));//we got a know xxxx values any amount
//###############################################################//#endregion
