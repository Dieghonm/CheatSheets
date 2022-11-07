
function noSpace(x){
  let string = x.split(' ')
  let answer = ''
  string.forEach(element => {
    answer += element
  });
return answer
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));
