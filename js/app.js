const btn = document.getElementById("btnEjercicio");

btn.addEventListener("click", () => {
    let nombre = prompt("Ingrese su nombre:");
    alert(`Hola ${nombre}`);
})