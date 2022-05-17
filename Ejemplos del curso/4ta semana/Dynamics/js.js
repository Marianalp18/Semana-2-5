// const padre= document.getElementById("padre");
// const hijo= document.getElementById("hijo");

// padre.addEventListener("click", () => {
//     console.log("Le hiciste click al padre");
// }, true);

// hijo.addEventListener("click", () => {
//     console.log("Le hiciste click al hijo");
// });
// const div01 = document.getElementById("01");
// const div02 = document.getElementById("02");
// const div03 = document.getElementById("03");
// const div04 = document.getElementById("04");
// const div05 = document.getElementById("05");

// div01.addEventListener("click", () => {
//     div01.style.color = "red";
// });

// const contenedor = document.getElementById("contenedor");

// contenedor.addEventListener("click", (evento) => {
//     evento.target.style.color = "red";
// });

// const tarjeta = document.getElementById("tarjeta");
// const sub = document.getElementById("sub");

// tarjeta.addEventListener("click", () => {
//     window.location = "https://youtube.com"
// });
// sub.addEventListener("click", (evento) => {
//     alert("Operación exitosa");
//     evento.stopPropagation();
// });

// const agregar = document.getElementById("agregar");
// const input = document.getElementById("input");
// const lista = document.getElementById("lista");
// const botones = document.getElementsByClassName("boton");

// agregar.addEventListener("click", (evento) => {
//     lista.innerHTML += '<li>' + input.value + '<button class="boton">Borrar</button></li>' ;

// });
// lista.addEventListener("click", (evento) => {
//     console.log(evento.target);
//     if (evento.target.className === 'boton'){
//         evento.target.parentElement.outerHTML = '';
//     }
// })
const añadir = document.getElementById("añadir");
const tarea = document.getElementById("tarea");
const lista = document.getElementById("lista");
const botones = document.getElementsByClassName("boton");
const materia = document.getElementById("materia"); 

const otro = document.getElementById("otro");
const cuadro = document.getElementsByClassName("cuadro");

añadir.addEventListener("click", () => {
    lista.innerHTML += '<li id=listar> <button id="marcar">Marcar como completada</button>'+' '+'<button class="boton">Eliminar</button>' + '<p>' + materia.value + ': ' + tarea.value + '</p>' + '</li>' + '</br>';
});

lista.addEventListener("click", (evento) => {
    if (evento.target.className == 'boton'){
        evento.target.parentElement.outerHTML = '';
    }
});

(function() {
    let agregar = document.getElementById("agregar");
    agregar.addEventListener("click", myf1);

    let contador = 0;

    function myf1() {
      if (contador % 2 ==0) {
        agregar.style.backgroundColor= "red";
      } else {
        agregar.style.backgroundColor = "blue";
      }
      contador += 1;
    }
})();


