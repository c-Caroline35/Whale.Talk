let input = 'Hello World';

let vowel = ['a', 'e', 'i', 'o', 'u'];

let resultArray =[];

for (i=0; x< input.length; i++){

  for (j=0; j<vowel.length; j++){

    if (input[i] === vowel [j]){

      if (input[i]) === "e" {

        resultArray.push ('ee')

      }else if (input[i] === "u"){

        resultArray.push ('uu')

      }else { resultArray.push (input[i])

      }

    }

  }

}

console.log (resultArray.join('').toUppperCase())
