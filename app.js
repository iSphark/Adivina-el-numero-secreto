let numeroSecreto = 0;
let intentos = 0;
let numeroSorteados =[];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`¡Tardaste ${intentos}${(intentos ==1) ? ' intento en adivinarlo!' : ' intentos en adivinarlo!'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero es menor');
        } else{
            asignarTextoElemento('p','El numero es mayor');
        }
        intentos++;
        limpiar();
    }
    return;
}

function limpiar(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado= Math.floor(Math.random()*10)+1;

    if (numeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p','¡Has adivinado toda la lista   de numeros secretos!');
    }else{
        if (numeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            numeroSorteados.push(numeroGenerado);
            return numeroGenerado
        }
    }
}

function condicinesIniciales(){
    asignarTextoElemento('h1','Adivina el número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja: tipo f5
    limpiar();
    //indicar la pantalla de inicio
    //reinicio intentos
    //reinicio numero ramdon
    condicinesIniciales();
    //reiniciar cont intentos
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicinesIniciales();