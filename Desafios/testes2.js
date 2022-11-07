let num = [1,2,3,4,5,6,7]

let impar = 0

for(num of num){
  console.log(num);
  if(num % 2 > 0){
    impar += 1
  }
}

console.log(impar);