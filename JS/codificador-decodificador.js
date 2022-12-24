function codifica() {
    var texto = document.getElementById("textoEscrito").value;
    var resultado = document.getElementById("textoResultado");

    texto = texto.replaceAll("e","enter");
    texto = texto.replaceAll("i","imes");
    texto = texto.replaceAll("a","ai");
    texto = texto.replaceAll("o","ober");
    texto = texto.replaceAll("u","ufat");
    
    resultado.innerHTML = texto;
}

function decodifica() {
    var texto = document.getElementById("textoEscrito").value;
    var resultado = document.getElementById("textoResultado");

    texto = texto.replaceAll("ufat","u");
    texto = texto.replaceAll("ober","o");
    texto = texto.replaceAll("ai","a");
    texto = texto.replaceAll("imes","i");
    texto = texto.replaceAll("enter","e");
 
    resultado.innerHTML = texto;
}

function copiar() {
    alert("Copiando");
}