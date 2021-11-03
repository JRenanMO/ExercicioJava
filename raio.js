// 2. Elaborar um algoritmo para calcular a área de uma circunferência, e apresentar a medida da área calculada. Sabendo-se que: 𝐴 = 𝜋 * R ^ 2 , onde A é a variável que conterá o cálculo da área π é o valor de pi (3,14) e R é o valor do raio.
// P.S.: O valor de raio são vocês quem definem

var raio = 50
var pi = 3.14


var area = pi * Math.pow(raio, 2)

console.log("area da circuferência é: " + area)