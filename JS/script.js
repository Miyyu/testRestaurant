var blocos = window.document.querySelectorAll(".imagensMenu");
for(var i = 0; i < blocos.length; i++){ //uso um for para iterar entre as imagens para saber em qual estou com o mouse em cima
    blocos[i].addEventListener("mouseenter", function(){ //criando function para caso alguma imagem tenho o mouse em cima
        console.log("Em cima"); //Verifico se o mouse está em cima da img
        
        var saberConteudo = this.alt; //Pegando o valor do alt das img do HTML

        if(saberConteudo === "Prato de Entrada"){
            let nome = window.document.querySelector("#comida");
            nome.innerHTML = "COMIDAS";
        }
        
        else if(saberConteudo === "Bebidas"){
            let nome = window.document.querySelector("#bebida");
            nome.innerHTML = "DRINKS";
        }
        else if (saberConteudo === "Sobremesas"){
            let nome = window.document.querySelector("#sobremesa");
            nome.innerHTML = "SOBREMESAS";
        }
    })
}