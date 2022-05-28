//reloj
const temporizador = document.getElementById('temporizador');
//indicador de minutos y segundos
var min = document.getElementById('min');
var seg = document.getElementById('seg');
let minutosP = document.getElementById('minutosP');
let segundosP = document.getElementById('segundosP');
//botones
const terminar = document.getElementById('terminar');
const empezar = document.getElementById('empezar');
//ventanilla emergente
function mostrar(){
    document.getElementById('staticBackdrop').style.display = 'block';
}
function ocultar(){
    document.getElementById('staticBackdrop').style.display = 'none';
}
//empezar
var Intervalo = -1;
empezar.addEventListener("click", (evento)=>{
    if (Intervalo == -1){
        empezar.innerHTML = "Pausar";
        Intervalo = setInterval(iniciar_contador, 1000);
        // console.log(Intervalo);
    }else{
        empezar.innerHTML = "Empezar";
        clearInterval(Intervalo);
        Intervalo = -1;
        evento.preventDefault();
    }
});
const boton = document.getElementById('boton');
boton.addEventListener("click", ()=>{
    minutosGlobal = min.value;
    segundosGlobal = seg.value;
    if(min.value == '' || min.value <0){
        minutosP.innerHTML ='00';
    }else{
        minutosP.innerHTML = min.value;
    }
    if(seg.value == '' || seg.value <0){
        segundosP.innerHTML ='00';
    }
    else if(seg.value<10){
        segundosP.innerHTML = '0'+seg.value;
    }else{
        segundosP.innerHTML = seg.value;
    }
    console.log(min.value+"minutos");
    console.log(seg.value+"segundos");
});
//contador
var minutosGlobal;
var segundosGlobal;
var sonido = new Audio("./statics/audio/Sour Tennessee Red (Sting) - John Deley and the 41 Players.mp3");
function iniciar_contador(){
    console.log("prueba");
    //console.log(tiempo);
    if(segundosGlobal>0){
        segundosGlobal--;
        console.log(segundosGlobal);
    }else{
        if(minutosGlobal>0){
            minutosGlobal--;
            segundosGlobal=59;
        }else{
            if(detener == 1){
                sonido.play();
            }else{
                sonido.pause();
            }
        }
    }

    minutosP.innerHTML = minutosGlobal;
    if(segundosGlobal<10){
        segundosP.innerHTML = '0'+segundosGlobal;
    }else{
        segundosP.innerHTML = segundosGlobal;
    }
};

var detener = 1;
terminar.addEventListener("click", () => { 
    if(detener == 1){
        detener = 2;
    }else if(detener == 2){
        detener = 1;
    } 
});