# forEach

O forEach percorre o array e executa a função passada para cada um dos seus valores. O forEach não retorna nenhum valor.

```js
Arr.forEach((element) => { /* ... */ } )
```

Exemplos

```js
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]
```
