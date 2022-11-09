# For

A instrução for cria um loop

```js
for (var i = 0; i < 9; i++) {
   console.log(i);
}
```

# For in
permite iterar sobre as propriedades enumeradas de um objeto de acordo com a ordem em que foram inseridos.

```js
const cores = [ 'Verde', 'Amarelo', 'Azul', 'Branco' ]

for (const index in cores) {
  console.log(index, cores[index])
}
// 0 "Verde"
// 1 "Amarelo"
// ...
```

# For of

O laço de repetição for...of permite percorrer um objeto e executar um bloco de código.

```js
const numeros = [ 10, 11, 22, 23, 34, 45, 66, 17, 28, 93, 101 ]

for (const numero of numeros) {
  console.log(numero)
}
```

# While
O whileloop percorre um bloco de código enquanto uma condição especificada for verdadeira.

```js
while (i < 10) {
  text += "The number is " + i;
  i++;
}
```
