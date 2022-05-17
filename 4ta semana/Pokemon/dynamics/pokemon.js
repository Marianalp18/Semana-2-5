const pokemon = document.getElementById("pokemon");
const añadir =document.getElementById("añadir");
const form = document.getElementById("form");
const boton = document.getElementById("boton");

añadir.addEventListener("click", (evento) => {
    form.innerHTML += '<h1>Agrega un pokemon</h1></br></br>'+
    '<label for="nombre">Nombre</label>  <input type="text" name="nombre"></br></br>'+
    '<label for="altura">Altura</label>  <input type="text" name=altura"></br></br>'+
    '<label for="peso">Peso</label>  <input type="text" name="peso"></br></br>'+
    '<label for="experiencia">Experiencia base</label>  <input type="text" name="experiencia"></br></br>'+
    '<button id=boton>Enviar</button>';
});
form.addEventListener("click", (evento) => {
    if(evento.target.id=="boton"){
        form.innerHTML='';
    }
});

