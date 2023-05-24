var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");             // i=0 e i menor que o numero de elementos, acrescentando +1 a i, 
      for (i = 0; i < x.length; i++) {                             // não apresenta nenhuma imagem, e no fim i vai ser = a 1, ou seja,
         x[i].style.display = "none";                             //      
      }
    slideIndex++;
      if (slideIndex > x.length) {slideIndex = 1}                  // se o numero do elemento for maior que o numero dos elementos todo, ou seja, exemplificando,
        x[slideIndex-1].style.display = "block";                  // 4 é maior que 3 (Suposta imagem nª4 e apenas temos 3 imagens),
setTimeout(carousel, 2500); // 2,5 segundos entre cada imagem     // Então o slideIndex apresenta outra vez a imagem 1
}