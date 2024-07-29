# Componentes Funcionais em React


*HOOKS*
De forma objetiva, Hooks são funções. Todo e qualquer Hook sempre deverá ser uma função. Entretanto, os Hooks são funções especiais, uma vez que eles permitem enganchar funcionalidades aos componentes de função. Daí o nome Hook (gancho, em inglês).

Por exemplo, podemos “enganchar” gerenciamento de estado com o Hook useState e gerenciar o ciclo de vida do componente com o Hook useEffect

Regras dos Hooks
Existem algumas regras que você deverá seguir ao utilizar Hooks.

Nomenclatura
Como você deve ter notado, todos os Hooks começam com a palavra use. Isso é importante para diferenciar Hooks de funções comuns.

Da mesma forma que, quando encontramos um componente React com a primeira letra maiúscula (MyComponent) já sabemos que ele irá nos retornar jsx, quando encontramos uma função que começa com use, sabemos que se trata de um Hook. Também é importante para que outras ferramentas auxiliares (por exemplo ESLint) saibam identificar Hooks.

Como deverão ser invocados
Você nunca poderá chamar um Hook dentro de um if. Também não poderá chamá-lo dentro de um loop ou uma função aninhada. Os Hooks precisam ser chamados no top level (raiz) do componente funcional.

Onde deverão ser invocados
Você apenas poderá chamar um Hook dentro de um componente funcional ou dentro de outros Hooks. Você não pode utilizar Hooks em componentes de classe.

*useState*

O useState é o hook mais comum do React, ele permite que você utilize o estado do React em componentes funcionais.

```
import React, { useState } from 'react';

const [counter, setCounter] = useState(0);
```
setConter funciona de forma assincrona


**lifecycle methods**

componentDidMount
useEffect(() => {}, []);


componentDidUpdate
useEffect(() => {});


componentWillUpdate
useEffect(() => {}, [foo, bar, ...baz]);


componentWillUnmount
useEffect(() => {
  return () => {};
}, []);




**Custom Hook**
usamos custom hooks para criar funçoes a serem compartilhadas por mais de um componente, comummente criada na pasta heplers

Nomenclatura
Por convenção, devemos criar nossos Custom Hooks sempre iniciando com a palavra use (useMyCustomHook). Da mesma forma que, quando encontramos um componente React com a primeira letra maiúscula (MyComponent) já sabemos que ele irá nos retornar jsx, quando encontramos uma função que começa com use, sabemos que ela está manipulando Hooks. Também é importante para que outras ferramentas auxiliares (por exemplo ESLint) saibam identificar hooks.

Custom Hooks só podem ser usados dentro de funções React
Assim como os hooks padrão, um Custom Hook só pode ser usado dentro de funções React, como componentes ou outros hooks. Não é possível usar um Custom Hooks dentro de uma função Javascript pura.

Um Custom Hook deve utilizar outros hooks em sua lógica. Por exemplo, é bastante comum usarmos o useEffect ou o useState para gerenciar algum estado ou efeito dentro de um Custom Hook.

Se você criar uma função que não usa nenhum hook em sua lógica, então ela não pode ser considerada um hook e, consequentemente, não precisa seguir as convenções de um Custom Hook.

```

import { useState } from 'react';

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value: value,
    onChange: handleChange,
  };
}

export default useFormInput;
```

```
// App.js

// ...

import useFormInput from './hooks/useFormInput';

// function App() {
  const firstName = useFormInput('');
  const lastName = useFormInput('');
  const email = useFormInput('');

//   function handleSubmit(e) {
//     e.preventDefault();

//     Swal.fire(
//       'Formulário enviado',
//       JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
//       }),
//       'success'
//     );
//   }

  // return (
  //   <div className="container">
  //     <form onSubmit={handleSubmit}>
  //       <label>
  //         First name:
          <input value={firstName.value} onChange={firstName.onChange} />
        // </label>
        // <label>
        //   Last name:
          <input value={lastName.value} onChange={lastName.onChange} />
        // </label>
        // <label>
        //   E-mail:
          <input value={email.value} onChange={email.onChange} />
//         </label>
//         <button type="submit">Submeter formulário</button>
//       </form>
//     </div>
//   );
// }

// export default App;

```



Context



```js
function App() {
  return (
    <p>funcional</p>
  );
}
```

*modelo*
**modelo**
- [ ] modelo
- [ ] `modelo`



```js
const model = "";
const func = () => {
    return model;
}
export default func;

```
