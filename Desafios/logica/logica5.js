function even_fibonacci_numbers(roof) {
  let n1 = 1
  let n2 = 2
  let soma = 0
  for (let index = 0; n2 < roof; index++) {
    let n3 = 0
    n3 = n2 + n1
    n1 = n2
    n2 = n3
    if (n1 % 2 === 0) {
      soma += n1
    }
  }
  return soma
}

console.log(even_fibonacci_numbers(100));