//3 - Escreva um array que contenha 5 cores diferentes: "Azul", "Amarelo", "Lilás", "Preto" e "Vermelho". 
//Depois crie um laço de repetição usando forEach e exiba na tela apenas quando a cor for "Lilás".

var cores = ["Azul",  "Amarelo", "Lilás", "Preto", "Vermelho"]

cores.forEach(cor => {
    if(cor == "Lilás") {
        console.log(cor)
    }
});
