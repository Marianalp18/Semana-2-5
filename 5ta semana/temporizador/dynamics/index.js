//reloj
const temporizador = document.getElementById('temporizador');
//indicador de minutos y segundos
var min = document.getElementById('min');
var seg = document.getElementById('seg');
// let minutosP = document.getElementById('minutosP');
// let segundosP = document.getElementById('segundosP');
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
//contador
function iniciar_contador(){
    const boton = document.getElementById('boton');
    boton.addEventListener("click", (cambiar)=>{
        minutosP.innerHTML = min.value;
        segundosP.innerHTML = seg.value;
    });
    var tiempo = min.value * 60;
    console.log(tiempo);
    let minutos = Math.floor(tiempo / 60);
    let segundos = seg.value % 60;

    segundos = segundos<10? '0'+segundos : segundos;
    temporizador.innerHTML = `${minutos}:${segundos}`;
    tiempo--;
    //determinar cuando empieza la musica
    var sonido = new Audio("./statics/audio/Sour Tennessee Red (Sting) - John Deley and the 41 Players.mp3");
    if (segundos>0){
        segundos--;
    }else{
        if(minutos>0){
            segundos=-0;
            minutos--;
        }else{
            sonido.play();
        }
    }
}