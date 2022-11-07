function nth_prime(n) {
  const array = []
  let numero = 1
  while (array.length < n) {
    if(isPrime(numero)){
      array.push(numero)
    }
    numero ++;
  }
  return array[array.length -1]
};

const isPrime = (num) => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
}

console.log(nth_prime(6));
