const carac = (letras) => {
  const array = letras.split('')
  let cont = {}
  array.forEach((element) => cont[element]=0);
  array.forEach((element) => cont[element]+= 1);
  const quantLetras = Object.entries(cont)

  let contador = ""
  for (let index = 0; index < quantLetras.length; index++) {
    if (quantLetras[index][1] > 9) {
       const decimal = Math.floor(quantLetras[index][1]/10)
        for (let index = 0; index < decimal; index++) {
          contador += 9 + quantLetras[index][0];
        }
       const resto = quantLetras[index][1]%10
       contador += Math.floor(resto + decimal) + quantLetras[index][0];
    }else {
      contador +=  quantLetras[index][1] + quantLetras[index][0]
    }
  }
  return contador
}

console.log(carac("BBBBBBBBBBBBBAACCCDDE"));