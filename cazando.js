let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTO_GATO=100
const ANCHO_GATO=200
const ALTO_COMIDA=40
const ANCHO_COMIDA=60

let gatoX=(canvas.width/2)-(ANCHO_GATO/2)
let gatoY=(canvas.height/2)-(ALTO_GATO/2)
let comidaX=0
let comidaY=0

function iniciarJuego(){
    graficarGato();
    graficarComida();
}

function graficarGato(){
    ctx.fillStyle="blue";
    ctx.fillRect(gatoX,gatoY,ANCHO_GATO,ALTO_GATO);
}

function graficarComida(){
    ctx.fillStyle="red";
    ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);
}