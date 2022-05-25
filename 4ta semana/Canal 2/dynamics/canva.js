const numero = document.getElementById("numero");//define el numero de picos
const volumen = document.getElementById("volumen");//el radio del centro

//const rellenar;//con color
const color = document.getElementById("color");//color
const canvas = document.getElementById("picos");
const ctx = canvas.getContext("2d");

var aumentar = numero.value;
let cx;
let cy;

let PriRadio = 95;
let SegRadio = 125;
let numPunt = 'aumentar';
let f;

function estrella(){
    let emparejar = false;
    let r;
    let padre;
    let x;
    let y;

    ctx.lineWidth = 5;//grosor
//intento de hacer color
    var head;
    var defaultColor = "#e66465";
    window.addEventListener("load", startup, false);
    function startup(){
        head = document.querySelector("color");
        head.value = defaultColor;
        head.addEventListener("input", updateFirst, false);
        head.addEventListener("change", updateAll, false);
        head.Select();
    }
    function updateFirst(event){
        var ctx = document.querySelector("ctx");
        if(ctx){
            ctx.strokeStyle = event.target.value;
        }
    }
//
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
    rellenar = document.getElementById("rellenar");
    rellenar.addEventListener('change', (event) => {
        if(event.target.checked){
            ctx.stroke();
        }else{
            ctx.fill();
        }
    })

    ctx.closePath();
}
    window.onload = function(){
        f = (Math.PI *2) / numPunt;
        cx = canvas.offsetWidth /2;
        cy = canvas.offsetHeight /2;

        estrella();
    }
