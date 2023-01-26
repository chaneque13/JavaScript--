/* 
Si los numeros no son un numero o menores, o iguales a 0, nos lo vuelva a pedir
*/

var a = prompt("Introduce un valor: ");
var b = prompt("Introduce otro valor: ");
if(isNaN(a) || isNaN(b)){

    alert("No es un numero, empieza de nuevo");
    a = prompt("Introduce un valor: ");
    b = prompt("Introduce otro valor: ");
}


if(a===b){

    alert("Son iguales");
}else if(a>b){
    
                alert("El mayor es: "+a);
                alert("Y el menor es: "+b);
    }
if(a<b){

        alert("El mayor es: "+b);
        alert("El menor es: "+a);
}

    