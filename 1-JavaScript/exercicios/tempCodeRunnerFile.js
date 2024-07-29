function grow(x){
   return x.reduce((acc, num)=> {
    console.log(acc, num, 'reducer');
    return acc * num
  },2)


}

console.log(grow([1, 2, 3], 'end'));