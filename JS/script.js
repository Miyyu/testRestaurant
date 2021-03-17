
    
    var blocos = window.document.querySelectorAll(".imagensMenu");
    for(var i = 0; i < blocos.length; i++){
        blocos[i].addEventListener("mouseenter", function(){
            console.log("Em cima");
            
            var b = this.alt;

            console.log(b);
            let nome = window.document.querySelector("#bebida");
            if(b === "Bebidas"){
                nome.innerHTML = "DRINK";
            }
        })
    }
    /*let nome = window.document.querySelector(".textoEmCima");
    switch(nome.id){
        case "comida":
            nome.innerHTML = "COMIDAS";
            break;
        case "bebida":
            nome.innerHTML = "BEBIDAS";
            break;
        case "sobremesa":
            nome.innerHTML = "SOBREMESAS";
            break;
    }*/

    /*if(nome.id === "comida"){
        nome.innerHTML = "COMIDAS";
    }
    else if(nome.id === "bebidas"){
        nome.innerHTML = "BEBIDAS";
    }*/
    


/*function saiu(imagem){
    console.log("saiu");
    var nome = window.document.querySelector(".textoEmCima").innerHTML = "";
}*/