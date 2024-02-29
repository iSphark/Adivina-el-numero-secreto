var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var resultado = document.querySelector(".texto-resultado");
var textoNinguno = document.querySelector(".parrafo");
var robot = document.querySelector(".personaje");

botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);

function encriptar(){
    var cajaTexto = recuperarTexto ();
    if(cajaTexto === "") {
        Swal.fire({
            icon: 'warning',
            title: 'No hay texto',
            text: 'Ingrese texto a desencriptar',
            showConfirmButton: false,
            timer: 1800
        });
        return;
    }
    ocultarAdelante();
    resultado.textContent = encriptarTexto(cajaTexto);
    document.querySelector(".copiar").style.display = "block";
    limpiarAreaTexto();
}

function desencriptar(){
    var cajaTexto = recuperarTexto ();
    if(cajaTexto === "") {
        Swal.fire({
            icon: 'warning',
            title: 'No hay texto',
            text: 'Ingrese texto a desencriptar',
            showConfirmButton: false,
            timer: 1800
        });
        return;
    }
    ocultarAdelante();
    resultado.textContent = desencriptarTexto(cajaTexto);
    document.querySelector(".copiar").style.display = "block";
    limpiarAreaTexto();
}

function recuperarTexto(){
    var cajaTexto = document.querySelector(".texto-encriptar");
    return cajaTexto.value;
}

function ocultarAdelante(){
    robot.classList.add("ocultar");
    textoNinguno.classList.add("ocultar");
}

function encriptarTexto(textoEntrada) {
    var texto = textoEntrada;
    var textoFinal = "";
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai";
        } else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter";
        } else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes";
        } else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober";
        } else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat";
        } else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(textoEntrada) {
    var texto = textoEntrada;
    var textoFinal = "";
    var i = 0;
    while (i < texto.length) { 
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a";
            i = i + 2;
        } else if (texto[i] == "e") {
            textoFinal = textoFinal + "e";
            i = i + 5;
        } else if (texto[i] == "i") {
            textoFinal = textoFinal + "i";
            i = i + 4;
        } else if (texto[i] == "o") {
            textoFinal = textoFinal + "o";
            i = i + 4;
        } else if (texto[i] == "u") {
            textoFinal = textoFinal + "u";
            i = i + 4;
        } else {
            textoFinal = textoFinal + texto[i];
            i++;
        }
    }
    return textoFinal;
}

function limpiarAreaTexto() {
    document.querySelector(".texto-encriptar").value = "";
}

const btnCopiar = document.querySelector(".btn-copiar");
const mensajeCopiado = document.getElementById("mensajeCopiado");

btnCopiar.addEventListener("click", copia = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    document.querySelector(".texto-encriptar").value = "";
    resultado.textContent = "";
    robot.classList.remove("ocultar");
    textoNinguno.classList.remove("ocultar");
    document.querySelector(".copiar").style.display = "none";
    Swal.fire({
        icon: 'success',
        title: 'Texto copiado',
        text: 'El texto ha sido copiado al portapapeles',
        showConfirmButton: false,
        timer: 1800
    });
});