var blocos = window.document.querySelectorAll(".imagensMenu");
for(var i = 0; i < blocos.length; i++){
    blocos[i].addEventListener("mouseenter", function(){
        console.log("Em cima");
        
        var saberConteudo = this.alt;

        if(saberConteudo === "Prato de Entrada"){
            let nome = window.document.querySelector("#comida");
            nome.innerHTML = "COMIDAS";
        }
        
        if(saberConteudo === "Bebidas"){
            let nome = window.document.querySelector("#bebida");
            nome.innerHTML = "DRINKS";
        }
        else if (saberConteudo === "Sobremesas"){
            let nome = window.document.querySelector("#sobremesa");
            nome.innerHTML = "SOBREMESAS";
        }
    })
}