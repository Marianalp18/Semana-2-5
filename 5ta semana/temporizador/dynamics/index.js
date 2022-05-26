const iniciar = 59;
let tiempo = iniciar * 60;

sonido = new Audio("./statics/audio/Sour Tennessee Red (Sting) - John Deley and the 41 Players.mp3");
const contador = document.getElementById('contador');
const terminar = document.getElementById('terminar');
const empezar = document.getElementById('empezar');

function iniciar_contador(){
    const minutos = Math.floor(tiempo / 60);
    let segundos = tiempo % 60;

    segundos = segundos<10? '0'+segundos : segundos;

    contador.innerHTML = `${minutos}:${segundos}`;
    tiempo--;

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
empezar.addEventListener("click", ()=>{
    setInterval(iniciar_contador, 1000);
});
terminar.addEventListener("click",()=>{
    clearInterval(iniciar_contador);
});

