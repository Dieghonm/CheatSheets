# map

executa a função recebida por parâmetro para cada elemento de um array e retorna o resultado em um novo array, sem modificar o original.

```js
Arr.reduce((accumulator, currentValue, currentIndex, array) => { /* ... */ }, initialValue )
```

Exemplos

```js
const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]
```

```js
Arr.reduce((acc, num)=> {
  return acc * num
},1)
```