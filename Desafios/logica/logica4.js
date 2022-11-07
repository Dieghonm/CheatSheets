function multiples_of_3_or_5(roof) {
  let answer = 0
  for (let index = 0; index < roof; index++) {
    if (index % 3 === 0 || index % 5 === 0 ) {
      answer += index
    }
  }
  return answer
}

console.log(multiples_of_3_or_5(20));