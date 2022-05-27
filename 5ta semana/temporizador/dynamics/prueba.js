var minutos = 25;
var segundos = "00";

var bell = new Audio("mp3")//musica

function iniciar(){
    minutos = 24;
    segundos = 59;

    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

    var minutos_interval= setInterval(minutosTimer, 60000);
    var seconds_interval = setInterval(secondsTimer, 1000);

    function minutosTimer(){
        minutos = minutos -1;
        document.getElementById("minutos").innerHTML =minutos;
    }
    function secondsTimer(){
        segundos = segundos -1;
        document.getElementById("segundos").innerHTML =segundos;

        if(segundos <=0){
            if(minutos <= 0){
                clearInterval(minutos_interval);
                clearInterval(seconds_interval);

                bell.play();
            }
            segundos = 60;
        }
    }
}
