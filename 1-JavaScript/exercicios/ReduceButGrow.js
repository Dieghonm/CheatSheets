function grow(x){
   return x.reduce((acc, num)=> {
    return acc * num
  },1)
}

console.log(grow([1, 2, 3], 'end'));