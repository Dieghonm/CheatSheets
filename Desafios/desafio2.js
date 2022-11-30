const foto =(black, orange) => {
  const orgBlack = black.sort()
  const orgOrange = orange.sort()
  let contador = 0
  if(orgBlack.length === orgOrange.length) {
    for (let index = 0; index < orgBlack.length; index++) {
      if (orgBlack[index] < orgOrange[index]) {
        contador++
      }
    }
    if(contador === orgBlack.length || contador === 0 ) {
      return true
    }
  }
  return false
}

console.log(foto([150,179,149,152,154], [162,181,151,160,170]));