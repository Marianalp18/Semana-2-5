const añadir = document.getElementById("añadir");
const tarea = document.getElementById("tarea");//input
const lista = document.getElementById("lista");
const botones = document.getElementsByClassName("boton");
const materia = document.getElementById("materia"); 
const otro = document.getElementById("otro");
const agregar = document.getElementById("agregar");
const materiaNueva = document.getElementById("materiaNueva");

añadir.addEventListener("click", () => {
    lista.innerHTML += '<li class="linea"> <button class="marcar">Marcar como completada</button>'+' '+'<button class="boton">Eliminar</button>' + '<h3>' + materia.value + ': ' + tarea.value + '</h3>' + '</li>';
    materia.innerHTML += '<option>' + agregar.value + '</option>';
    console.log('hola, buenas tardes');
});

lista.addEventListener("click", (evento) => {
    if (evento.target.className == 'boton'){
        evento.target.parentElement.outerHTML = '';
    }
    else if(evento.target.className == 'marcar'){
      evento.target.parentElement.classList.toggle("acabado");
    }
}); 

agregar.style.display = 'none';
materia.addEventListener("change", (evento) => {
    if(evento.target.value === 'Otro'){
      agregar.style.display = 'inline';
    }
    else if(evento.target.value !== 'Otro'){
        agregar.style.display = 'none';
    }
});

