//4 - Escreva um array que contenha 4 objetos pessoas. Ex.:
//Use o forEach para percorrer esse array e exiba no console apenas as pessoas maiores de 18 anos



var pessoa1 = {
   nome: "Rony",
   idade: 20,
}


var pessoa2 = {
   nome: "Maria",
   idade: 16,
}

var pessoa3 = {
    nome: "Amanda",
    idade: 25,
}

var pessoa4 = {
    nome: "Mario",
    idade: 23,
}

var pessoas = [pessoa1, pessoa2, pessoa3, pessoa4]

pessoas.forEach(pessoa =>{
    console.log(pessoa.idade)

    if(pessoa.idade >= 18) {
        console.log(pessoa.nome + "  moiores de 18 anos que podem beber")
    }
});