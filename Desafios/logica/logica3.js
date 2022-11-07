function count_down(x) {
  let answer = ''
  for (let index = 0; index < x; index++) {
    const num = x - index
    answer += num + "..."
  }
  answer += "0!!!"
  return answer
}

console.log(count_down(10));