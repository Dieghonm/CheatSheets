# find

utilizada para achar o primeiro elemento que satisfaça a condição passada

```js
Arr.find((element) => { element === "" } )
```

Exemplos

```js
const numbers = [29, 25, 37, 45, 5, 21, 57];
const teste = numbers.find((num) => { num > 40})
log(teste) // 45

```