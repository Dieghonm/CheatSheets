function seilah(maxDigit) {
  const max = 21
  let answer = 0
  const number = parseInt(maxDigit)

  for (let indexM = 0; indexM <= number; indexM++) {
    for (let indexC = 0; indexC <= number; indexC++) {
      for (let indexD = 0; indexD <= number; indexD++) {
        for (let index = 0; index <= number; index++) {
          let sum = indexM+indexC+indexD+index
          if(sum === max) {
            let numero = (indexM*1000)+(indexC*100)+(indexD*10)+index
            console.log(numero)
            answer += 1
          }
        }
      }
    }
  }
  if (answer === 0) console.log(null)
}

console.log(seilah(6));
