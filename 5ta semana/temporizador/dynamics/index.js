//reloj
const contador = document.getElementById('contador');
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
//valores
var iniciar = 01;//minutos
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
//pausar audio
//window.onload = function (){};
//contador
function iniciar_contador(){
    let minutos = Math.floor(tiempo / 60);
    let segundos = tiempo % 60;

    segundos = segundos<10? '0'+segundos : segundos;

    contador.innerHTML = `${minutos}:${segundos}`;
    tiempo--;

    //determinar cuando empieza la musica
    // var sonido = new Audio("./statics/audio/Sour Tennessee Red (Sting) - John Deley and the 41 Players.mp3");
    // if (segundos>0){
    //     segundos--;
    // }else{
    //     if(minutos>0){
    //         segundos=-00;
    //         minutos--;
    //     }else{
    //         sonido.play();
    //     }
    // }
}