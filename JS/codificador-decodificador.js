function ativarResultado() {  
    var parteDireita = document.querySelector(".parte-direita");
    parteDireita.style.display = 'block';

    var conteudoResultado = document.querySelector('.conteudo-direito');
    conteudoResultado.style.display = 'none';

    var botaoDireito = document.querySelector(".botao-copiar");
    botaoDireito.style.display = 'block';

    var resultadoTextarea = document.querySelector(".textarea-resultado");
    resultadoTextarea.style.display = 'block';

    var xesqueNeles = document.querySelector(".xesque-direito");
    xesqueNeles.style.height = "85%";

}

function textareaResult(){
    if (window.innerWidth <= 1280){
        var myText = document.getElementById("my-text");
        myText.style.height = myText.scrollHeight+"px";
    } 
}


function codifica() {
    ativarResultado();
    var texto = document.querySelector(".textarea-texto").value;
    var resultado = document.querySelector(".texto-resultado");

    texto = texto.replaceAll("e","enter");
    texto = texto.replaceAll("i","imes");
    texto = texto.replaceAll("a","ai");
    texto = texto.replaceAll("o","ober");
    texto = texto.replaceAll("u","ufat");
    
    resultado.value = texto;
    textareaResult();
}

function decodifica() {
    ativarResultado();
    var texto = document.querySelector(".textarea-texto").value;
    var resultado = document.querySelector(".texto-resultado");

    texto = texto.replaceAll("ufat","u");
    texto = texto.replaceAll("ober","o");
    texto = texto.replaceAll("ai","a");
    texto = texto.replaceAll("imes","i");
    texto = texto.replaceAll("enter","e");
 
    resultado.value = texto;
    textareaResult();

}

function copiar() {
    var textoCopiado = document.querySelector(".texto-resultado");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999999)
    navigator.clipboard.writeText(textoCopiado.value);
    alert(textoCopiado.value);

}

