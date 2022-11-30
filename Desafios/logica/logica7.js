function largest_prime_factor(number) {
  let num = 0
  for (let index = 0; index < number; index++) {
    if (number % index === 0) {
      if (isPrime(index)) {num = index}
    }
  }
  return num
}

const isPrime = (num) => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
}

console.log(largest_prime_factor(1000));