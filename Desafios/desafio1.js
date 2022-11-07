
const sum =(array, targetSum)=> {
  const answer = []
    array.forEach((element1) => {
      array.forEach((element2) => { 
        if (element1 !== element2 && element1 + element2 === targetSum){
          answer.push(element2)
        } 
      })
  })
  return answer
}

console.log(sum([3,5,-4,8,11,1,-1,6],10));