// 4. Elaborar um algoritmo para efetuar o cálculo de uma prestação em atraso, utilizando a fórmula: PRESTAÇÃO = VALOR + (VALOR * (TAXA/100) * TEMPO)
// P.S.: O valor, taxa e tempo (dias) são vocês quem definem. Ex.: 700 + (700 + (3 / 100) * 15

var principal = 350.00;
  var taxa = 0.08;
  var meses = 5;
   
  var Prestacao = principal + principal + (taxa/100) * meses;
   
  console.log("O total de Prestacao a ser pago é: " 
    + Prestacao);