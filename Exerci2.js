function imparPar(){

    var nun = 500;
    var impar =[];
    var result = [];

for(let i = 0 ; nun > i ; i++){

  impar.push(i);

}

  for(let i = 0 ; impar.length > i ; i++ ){

        if(impar[i] % 2 == 0){

            result.push(impar[i])

            }    

        }
      

    console.log(result)
}

imparPar()