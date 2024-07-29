function accum(s) {
  let answer = ''
  for (let index = 0; index < s.length; index++) {
    let acc = ''
    let cont = -1
    while (cont !== index) {
      !acc.length ? acc += s[index].toUpperCase() : acc += s[index].toLowerCase()
      cont ++
    }
    answer += answer ? '-' + acc : acc
    }
	return answer
}

console.log(accum('ZpglnRxqenU'));