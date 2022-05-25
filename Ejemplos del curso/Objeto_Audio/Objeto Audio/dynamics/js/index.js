const audiJi = new Audio("./statics/media/audio/jijijija.mp3");
const audiCrie = new Audio("./statics/media/audio/ardilla_1.mp3")
const audiDes = new Audio("./statics/media/audio/vanish_1.mp3")
const imagenes = document.getElementById("contImagenes");

imagenes.addEventListener("click", (event)=>{

    const imagenClickeada = event.target;

    //imagenclickeada.id === event.target.id

    console.log(imagenClickeada);

    const jijijija = document.getElementById("jijijija");
    const crie = document.getElementById("se_rie");
    const vanish = document.getElementById("desaparece");
    let ingreso;

    if(imagenClickeada.id == 'jijijija'){
        const contraseña = 'jijijija';
        
        do{
            ingreso = prompt("Ingresa el codigo", "*jijijija*");
            console.log(ingreso);
        } while(contraseña != ingreso && ingreso != null)
        
        if(ingreso == contraseña){
            audiJi.volume = .1;
            audiJi.play();
        }
        
    }

    if(imagenClickeada.id == "se_rie"){
        audiCrie.play();

        audiCrie.addEventListener("ended", () =>{
            let repetir = confirm ("Me vuelvo a reir?");

            if(repetir){
                audiCrie.play();
            }
        });
    }

    if(imagenClickeada.id == 'desaparece'){
        alert("adios papu");
        audiDes.play();
        imagenClickeada.style.display = "none";
    }
});