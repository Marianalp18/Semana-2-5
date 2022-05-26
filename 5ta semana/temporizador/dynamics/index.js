//audio
sonido = new Audio("./statics/audio/Sour Tennessee Red (Sting) - John Deley and the 41 Players.mp3");
//reloj
const contador = document.getElementById('contador');
//botones
//const terminar = document.getElementById('terminar');
const empezar = document.getElementById('empezar');
//ventanilla emergente
function mostrar(){
    document.getElementById('staticBackdrop').style.display = 'block';
}
function ocultar(){
    document.getElementById('staticBackdrop').style.display = 'none';
}
//valores
var min = null;
var seg = null;

function enviar(){//checando
    min = document.getElementById("min").value;
    seg = document.getElementById("seg").value;
    alert(min+seg);
};

var iniciar = 1;
let tiempo = iniciar * 60;//segundos

//empezar
empezar.addEventListener("click", ()=>{
    if (iniciar == -1){
        empezar.innerHTML = "Pausar";
        iniciar = setInterval(iniciar_contador, 1000);
    }else{
        empezar.innerHTML = "Empezar";
        clearInterval(iniciar);
        iniciar = -1;
    }
});

//contador
function iniciar_contador(){
    let minutos = Math.floor(tiempo / 60);
    let segundos = tiempo % 60;

    segundos = segundos<10? '0'+segundos : segundos;

    contador.innerHTML = `${minutos}:${segundos}`;
    tiempo--;

    //determinar cuando empieza la musica
    if (segundos>0){
        segundos--;
    }else{
        if(minutos>0){
            segundos=59;
            minutos--;
        }else{
            sonido.play();
        }
    }
}
function pausar(){
    document.getElementById('terminar').innerHTML = sonido.pause();
}