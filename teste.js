function recuperarTexto(){
    var texto = document.getElementById("meutexto").value;
    var paragrafo = document.getElementById("olamundo");
    paragrafo.innerHTML = texto;
    alert("Recuperar");
}
