function digits_sum(number_s) {
  let cont = 0
  
  for (let i = 1; i < 1000; i++) {
    if (i>10){
      const centena = Math.floor(i / 100)
      const dezena = Math.floor((i % 100)/10)
      const num = i % 10
      const sum = centena + dezena + num
      if ((sum) === number_s) {
        cont++
      }
    }
  }
  return cont
}

console.log(digits_sum(20));