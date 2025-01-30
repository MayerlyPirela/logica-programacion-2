

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function intentoDeUsuario(){
}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p', 'Indica un número del 1 al 100');