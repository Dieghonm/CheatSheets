function smallest_multiple(roof) {
  let num = 0
  let cont = 1
  while (num === 0) {
      let itera = 0
    for (let index = 0; index < (roof+1); index++) {
      if (cont % index === 0) {
        itera ++
      }
    }
    if (itera === roof) {
      num = cont
    }
    cont ++
  }
  return num
}

console.log(smallest_multiple(2));
//2520