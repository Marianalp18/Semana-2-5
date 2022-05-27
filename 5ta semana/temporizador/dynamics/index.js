//reloj
const temporizador = document.getElementById('temporizador');
//indicador de minutos y segundos
const min = document.getElementById('min');
const seg = document.getElementById('seg');
//botones
const terminar = document.getElementById('terminar');
const empezar = document.getElementById('empezar');
const boton = document.getElementById('boton'); //nos va a permitir agregar la informacion
//ventanilla emergente
function mostrar(){
    document.getElementById('staticBackdrop').style.display = 'block';
}
function ocultar(){
    document.getElementById('staticBackdrop').style.display = 'none';
}
//valores
boton.addEventListener("click", ()=>{
    minutos.innerHTML += min.value;
    puntitos.innerHTML = ':';
    segundos.innerHTML += seg.value;
});

var iniciar = minutos;
console.log(iniciar);
var tiempo = iniciar * 60;//segundos
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

    temporizador.innerHTML = `${minutos}:${segundos}`;
    tiempo--;

    //determinar cuando empieza la musica
    var sonido = new Audio("./statics/audio/Sour Tennessee Red (Sting) - John Deley and the 41 Players.mp3");
    if (segundos>0){
        segundos--;
    }else{
        if(minutos>0){
            segundos=-00;
            minutos--;
        }else{
            sonido.play();
        }
    }
}