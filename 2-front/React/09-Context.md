# Context

O context e uma forma ntiva do react para resolver propDrilling, assim como o Redux, nos criamos estados globais para ser consimido por todos os componentes que precisarem.

*Criando o contexto*
O primeiro passo para utilizarmos o Context API é criar o context. Para isso, utilizamos a função createContext do React.

Podemos criar o Context em qualquer lugar da aplicação. Mas, para seguir uma convenção, vamos criar um diretório context e adicionar o arquivo ThemeContext.js.

```js
// /src/context/ThemeContext.js
import React, { createContext } from 'react';

const ThemeContext = createContext();

export default ThemeContext;
```

O createContext retorna um objeto que possui dois componentes como propriedades: Provider e Consumer.

Provider é responsável por “prover” os dados para os componentes que estão nos níveis abaixo dele na árvore de componentes. Ele aceita uma prop obrigatória value com os dados que serão compartilhados para todos os componentes abaixo dele. Esse valor pode ser qualquer valor JavaScript, como um número, string, array ou objeto.

Consumer é responsável por “consumir” os valores armazenados no Context. Também é possível consumir os dados de um Context usando o Hook useContext, dessa forma não é obrigatório o uso do Consumer.

```js
// /src/App.js

iimport React, { useState } from 'react';
import ThemeContext from './context/ThemeContext';

export default function App() {
  const [themeColor, setThemeColor] = useState('dark');

   function toggleTheme() {
    setThemeColor(themeColor === 'dark' ? 'light' : 'dark');
  }

    return (
    <ThemeContext.Provider value={{ color: themeColor, toggleTheme }}>
      <div>
        <Header />
        <Image />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
```
No exemplo que utilizamos anteriormente, todos os dados e lógicas estão declarados no componente App. Eventualmente, se sua aplicação crescer, talvez seja difícil gerenciar tudo nesse componente.

Para resolver esse problema, podemos utilizar um design pattern chamado Provider Pattern. Esse padrão nada mais é que extrair o Provider, bem como os dados e a lógica, para um componente próprio. Vamos fazer isso para a nossa aplicação e você verá que o código ficará mais limpo.

O primeiro passo é criarmos nosso componente ThemeProvider. Ele será o responsável por conter todos os dados e lógica referente ao tema da nossa aplicação. Criaremos ele dentro do diretório context que criamos anteriormente.

Vamos trazer toda a lógica que estava no componente App para esse novo componente:

```js
// /src/context/ThemeProvider.js

import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon'

export default function ThemeProvider({ children }) {
  const [pokemons, setPokemons] = useState();

  const fetchPokemon = () => {
    fetch(ENDPOINT)
      .then(response => response.json())
      .then(response => setPokemons(response))
    ;
  }

  return (
    <ThemeContext.Provider value={{ pokemons: pokemons, fetchPokemon }}>
      <div>
        { children }
      </div>
    </ThemeContext.Provider>
  );
}


```

No código acima, estamos utilizando a prop children de forma que o componente ThemeProvider encapsule todos os componentes-filho. Isso significa que os componentes aninhados serão embrulhados pelo ThemeContext.Provider e poderão acessar os dados do Context.

Saiba mais 💡: você pode ver a documentação sobre prop children para entender melhor seu funcionamento.  https://beta.reactjs.org/learn/passing-props-to-a-component#passing-jsx-as-children

Veja como agora o componente App fica muito mais limpo e legível. Agora ele não tem mais a responsabilidade de gerenciar as informações do Context:

```js
import React from 'react';
import ThemeProvider from './context/ThemeProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import Image from './components/Image';
import './style.css';

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Image />
      <Footer />
    </ThemeProvider>
  );
}

```

no componente

```js
import { useContext, useEffect } from 'react';
import ThemeContext from '../context/ThemeContext';
function Main() {
  const {pokemons, fetchPokemon} = useContext(ThemeContext);

  useEffect(() => console.log(pokemons), [pokemons])

  return (
    <div>
      PokeDex
      <button onClick={() => fetchPokemon()}>teste</button>
    </div>
  );
}

export default Main;
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