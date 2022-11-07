function fahrenheit_to_celsius(temp_fahrenheit) {
  const celsius = (temp_fahrenheit - 32) / 1.8
  const answer = celsius.toFixed(1)
  return answer
}

console.log(fahrenheit_to_celsius(95));