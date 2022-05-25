const numero = document.getElementById("numero");//define el numero de picos
const volumen = document.getElementById("volumen");//el radio del centro
const rellenar = document.getElementById("rellenar");//con color
var color = document.getElementById("color");//color
const canvas = document.getElementById("picos");
const ctx = canvas.getContext("2d");

let cx;
let cy;

let PriRadio = 95;
let SegRadio = 125;
let numPunt = 60;//numero de picos
// numero.oninput = function(){
//     numPunt.innerHTML = numero.value;
// };
let f;

function estrella(){
    let emparejar = false;
    let r;
    let padre;
    let x;
    let y;

    ctx.lineWidth = 1;//grosor

    ctx.strokeStyle +=color.value;//color

    ctx.beginPath();

    for (let i = 0; i<numPunt; i++){
        if(emparejar === true){
            r = PriRadio;
            emparejar = false;
        }else{
            r = SegRadio;
            emparejar = true;
        }
        padre = i * f;
        x = r * Math.cos(padre) + cx;
        y = r * Math.sin(padre) + cy;

        ctx.lineTo(x, y);
    }
    ctx.closePath();

    ctx.fill();//rellenar area
}
    window.onload = function(){
        f = (Math.PI *2) / numPunt;
        cx = canvas.offsetWidth /2;
        cy = canvas.offsetHeight /2;

        estrella();
    }
