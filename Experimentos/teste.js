document.addEventListener("DOMContentLoaded", function(){
    var txtarea = document.querySelector(".textareaTeste");
    txtarea.style.height = txtarea.scrollHeight+"px";
 });

function recuperarTexto(){
    var texto = document.getElementById("meutexto").value;
    var paragrafo = document.getElementById("olamundo");
    paragrafo.innerHTML = texto;
    alert("Recuperar");
}

// function copiar() {
//     alert(textoCopiado.value);

//     let textoCopiado = document.getElementById("olamundo")
//     textoCopiado.select();
//     textoCopiado.setSelectionRange(0, 99999999)
//     document.execCommand("copy")
// }

function copiar(){
    var textoCopiado = document.getElementById("olamundo");
    navigator.clipboard.writeText(textoCopiado.innerText);
    alert(textoCopiado);
}

