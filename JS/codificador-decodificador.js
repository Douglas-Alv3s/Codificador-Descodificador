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
    var texto = document.querySelector(".textarea-texto");
    var textoConvert = texto.value.toLowerCase();
    if (textoConvert != ""){
        ativarResultado();
        var resultado = document.querySelector(".texto-resultado");
        textoConvert = textoConvert.replaceAll("e","enter");
        textoConvert = textoConvert.replaceAll("i","imes");
        textoConvert = textoConvert.replaceAll("a","ai");
        textoConvert = textoConvert.replaceAll("o","ober");
        textoConvert = textoConvert.replaceAll("u","ufat");
        
        resultado.value = textoConvert;
        textareaResult();
        texto.addEventListener("focus", ()=>{
            texto.value ="";
        }); 
    } else {
        texto.focus();
    }
}

function decodifica() {
    var texto = document.querySelector(".textarea-texto");
    var textoConvert = texto.value.toLowerCase();
    if (textoConvert != ""){
        ativarResultado();
        var resultado = document.querySelector(".texto-resultado");

        textoConvert = textoConvert.replaceAll("ufat","u");
        textoConvert = textoConvert.replaceAll("ober","o");
        textoConvert = textoConvert.replaceAll("ai","a");
        textoConvert = textoConvert.replaceAll("imes","i");
        textoConvert = textoConvert.replaceAll("enter","e");
    
        resultado.value = textoConvert;
        textareaResult();
        texto.addEventListener("focus", ()=>{
            texto.value ="";
        }); 
    } else {
        texto.focus();
    }
}

function copiar() {
    var textoCopiado = document.querySelector(".texto-resultado");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999999)
    navigator.clipboard.writeText(textoCopiado.value);

}

