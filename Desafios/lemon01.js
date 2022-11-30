const arvore1 = [1,[2,null,null],[3,[4,null,null], [5,null,[6,null,null]]]]
const arvore2 = [1,[2,null,null],[3,[4,null,null], [5,null,null]]]

const soma = (a) => {
  somatorio = 0
  a.forEach(element => {
    if(element === null){
      return 0
    } else if (element.length > 0) {
      somatorio += soma(element)
    } else {
      somatorio += element
    }
  })
  return somatorio
}

console.log(soma(arvore1));
console.log(soma(arvore2));