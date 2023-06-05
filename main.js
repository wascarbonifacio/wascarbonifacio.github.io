const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function encriptar(mensaje){
    let contenedor = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    for(let i = 0; i < contenedor.length; i++){
        if(mensaje.includes(contenedor[i][0])){
            mensaje = mensaje.replaceAll(contenedor[i][0], contenedor[i][1]) 
        }
    }
    return mensaje
}

function encriptarTxt(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(mensaje){
    let contenedor = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    for(let i = 0; i < contenedor.length; i++){
        if(mensaje.includes(contenedor[i][1])){
            mensaje = mensaje.replaceAll(contenedor[i][1], contenedor[i][0]) 
        }
    }
    return mensaje
}

function desencriptarTxt(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}