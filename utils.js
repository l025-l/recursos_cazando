function generarAleatorio(min,max){
    let random=Math.random();  //0-1
    //ejemplo : max es 600, min es 5
    let numero=random*(max-min);  //0-max
    let numeroEntero=parseInt(numero);
    //ejemplo: 0
    numeroEntero=numeroEntero+min;  //5-600
    return numero;
}

function mostrarEnSpan(idSpan,valor){

let componente=document.getElementById(idSpan);
        componente.textContent=valor;
}