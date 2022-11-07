# some

retorna true se ao menos um elemento de um array satisfaz a uma condição.

```js
Arr.some((element) => { /* ... */ })
```

Exemplos

```js
const numbers = [29, 25, 37, 45, 5, 21, 57];
const teste = numbers.some((num) => { num > 40})
log(teste) // true

```