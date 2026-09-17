let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const recAncho= 200;
const recAlto= 100;

const x= (canvas.width/2)-(recAncho/2);
const y= (canvas.height/2)-(recAlto/2);

function graficarGato(){
    ctx.fillStyle="blue";
    ctx.fillRect(x,y,recAncho,recAlto);
}