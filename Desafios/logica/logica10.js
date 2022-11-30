function sum_square_difference(n) {
  let somaQ = 0
  let quadradoS = 0
  for (let i = 0; i < (n+1); i++) {
    somaQ += i
    quadradoS += i*i
  }
  console.log(somaQ,quadradoS);
  return (somaQ * somaQ) - quadradoS
}

console.log(sum_square_difference(10));