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



