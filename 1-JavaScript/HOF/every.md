# every

retorna true se ao todos os elemento de um array satisfizer a uma condição.

```js
Arr.every((element) => { /* ... */ })
```

Exemplos

```js
const numbers = [29, 25, 37, 45, 5, 21, 57];
const teste = numbers.every((num) => { num > 40})
log(teste) // false

```