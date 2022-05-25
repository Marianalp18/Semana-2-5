
const añadir = document.getElementById("añadir");
const tarea = document.getElementById("tarea");
const lista = document.getElementById("lista");
const botones = document.getElementsByClassName("boton");
const materia = document.getElementById("materia"); 


añadir.addEventListener("click", () => {
    lista.innerHTML += '<li class="linea"> <button class="marcar">Marcar como completada</button>'+
    ' '+'<button class="boton">Eliminar</button>' + '<p>' + materia.value + ': ' + tarea.value + '</p>' + '</li>' + '</br>';
});

lista.addEventListener("click", (evento) => {
    if (evento.target.className == 'boton'){
        evento.target.parentElement.outerHTML = '';
    }
    else if(evento.target.className == 'marcar'){
      evento.target.parentElement.classList.toggle("acabado");
    }
});


// let marcar = document.getElementsByClassName("marcar");
//   console.log(marcar);
//     marcar.addEventListener("click", myf1) => {

   
    

//     let contador = 0;

// function lista(evento) 
// {
//   if (contador % 2 ==0) 
//     {
//       marcar.style.backgroundColor= "red";
//     } else 
//     {
//       marcar.style.backgroundColor = "blue";
//     }
//       contador += 1;
// }


