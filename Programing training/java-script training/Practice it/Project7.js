//################//#endregion  Anonymous Function

// CALL  in an a fuction anonymmous

var siete = function(){
var greeting = "Hi,Everyone, How's your day?"
return greeting;
};

document.write(siete()); 

//##############################################

//Function inside another function

var a = function(name, func){
var tname = name;
func(tname);

};
var b = function(i){
document.write( i , "<br>");

};
a("Noel Gil", b);




//###################3################using Arrow##//#endregion


var uno = nombre => nombre;

var dos = (nombre, apellidos) => nombre + apellidos;

document.write(dos( " "+ "Noel"+ " ","Gil Martinez") + "<br>");

document.write("prueba de br tag/");

var nadie = "Alertas de prueba"
alert(nadie);