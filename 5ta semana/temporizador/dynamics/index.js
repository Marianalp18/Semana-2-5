const iniciar = 60;
let tiempo = iniciar * 60;

const contador = document.getElementById('contador');

setInterval(iniciar_contador, 1000);

function iniciar_contador(){
    const minutos = Math.floor(tiempo / 60);
    let segundos = tiempo % 60;

    segundos = segundos<10? '0'+segundos : segundos;

    contador.innerHTML = `${minutos}:${segundos}`;
    tiempo--;
}