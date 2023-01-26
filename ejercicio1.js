/* 
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
*/
var a = prompt("Introduce un valor: ");
var b = prompt("Introduce otro valor: ");

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