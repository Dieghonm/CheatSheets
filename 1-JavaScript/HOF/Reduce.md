# Reduce

O reduce recebe dois parâmetros sendo o primeiro uma callback e o segundo um valor inicial, que é opcional.

```js
Arr.reduce((accumulator, currentValue, currentIndex, array) => { /* ... */ }, initialValue )
```

Exemplos

```js
const numbers = [1, 32, 44, 2, 3];
const sumNumbers =  (acc, curr) => acc + curr;
const totalSum = numbers.reduce(sumNumbers, 30);
console.log(totalSum); //112
```

```js
Arr.reduce((acc, num)=> {
  return acc * num
},1)
```
