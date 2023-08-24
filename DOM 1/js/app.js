const inputColor = document.getElementById("inputColor");
const btnVisualizar = document.getElementById("btnVisualizar");
const contenedorColor = document.getElementById("contenedorColor");
const numColor = document.getElementById("numColor");

btnVisualizar.addEventListener("click", ()=>{
    numColor.textContent = inputColor.value;
    contenedorColor.style.backgroundColor = inputColor.value;
})