function numAleatorio(min,max){
    return Math.floor(Math.random()* max);
}
const botonSí = document.getElementById("Sí");
const botonNo = document.getElementById("No");

botonNo.addEventListener("click", () =>{
    alert("Que bueno que no juegas Lol");
})
botonSí.addEventListener("mouseover", () =>{
    const x = numAleatorio(0, 205);
    const y = numAleatorio(0, 205);
    /*console.log(x, y);*/
    botonSí.style.left = x + "px";
    botonSí.style.top = y + "px";
})

console.log(numAleatorio(0,10));