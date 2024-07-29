# Componente de classe em React

Utilizando o React podemos componentizar nossa aplicação utilizando o paradigma de classes ou funcional
Aqui veremos como construir os componentes pelo paradigma de casses e suas peculiaridades.

*Criando um componente de classe*

```js
import React from 'react';

class Header extends React.Component {
  render() {
    return <h1>Header</h1>
  }
}

export default Header;
```
**Metodos Construtor e Super** - 
Um construtor é um método que é chamado automaticamente quando criamos um objeto dessa classe. Ele pode gerenciar tarefas de inicialização como padronizar certas propriedades do objeto. Simplesmente colocado, o construtor é um método que ajuda na criação de objetos. 

O construtor não é diferente no React. Isso pode conectar manipuladores de eventos ao componente e / ou inicializar o estado local do componente. Antes que o componente seja montado, a função constructor() é disparada e, como a maioria das coisas no React, tem algumas regras que você pode seguir ao usá-las.

No JavaScript, o super() refere-se ao construtor da classe pai. (No nosso caso, refere-se à implementação de React.Component.) É importante lembrar que você não pode usar o this em um construtor até que você tenha chamado o construtor da classe pai, utilizando o super() 


```js
import React from 'react';

class Header extends React.Component {
    constructor(props) {
    super()

    // logicas no construtor
  }
  render() {
    return <h1>Header</h1>
  }
}

export default Header;
```

**Funções** - 
Existem duas formas de declaração de função, funções regulares e arrow functions

function teste() {...} 

const teste = () => {...}

*This* - 
Para chamar funções dentro dos componentes temos que utilizar o this. Para que o aplicativo entenda onde a função foi declarada

*Bind* - 
Quando utilizamos funções regulares em react, devemos fazer o bind da função dentro do método construtor.
pois sem o bind a função não sera acessível em outras funções do mesmo escopo.
Já as arrow não precisam do bind, pois o valor de this dentro de um arrow está sempre ligado ao valor de this na função pai regular 

```js
import React from 'react';

class Header extends React.Component {
    constructor(props) {
    super()
    this.teste = this.teste.bind(this)
  }
  function teste() {...}
  this.teste()
  render() {
    return <h1>Header</h1>
  }
}

export default Header;
```

**Estado** - 
Em componentes de classe temos o estado do componente para armazenar informações ou parâmetros
ele pode ser criado de duas formas, utilizando o método construtor ou fazendo a declaração direta


*Utilizando o método construtor*

```js
import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nome 'kapil',
      idade: 22,
    };
    // logicas no construtor
  }
  render() {
    return <h1>Header</h1>
  }
}

export default Header;
```

*Declaração direta*

```js
import React from 'react';

class Header extends React.Component {
  state = {
    nome 'Diegho',
    idade: 36,
  };
  render() {
    return <h1>Header</h1>
  }
}

export default Header;
```
*Alterar estados* - 
Quando utilizamos estados não e uma boa prática alterá-los diretamente, então fazemos isso por meio da função setState.
A função setSatate pode receber como parâmetro dados do estado anterior
e por ser uma função assíncrona temos que lidar com esta assincronicidade utilizando uma callback apos a declaração do estado a ser alterado

```js
this.setState({idade: this.state.idade + 1 });
this.setState((estadoAnterior, _props) => ({
    idade: estadoAnterior + 1,
  }));
}
this.setState((estadoAnterior, _props) => ({
    idade: estadoAnterior + 1,
  }), () = > console.log(this.state));
}
```

*replaceState()*
O replaceState() serve para alterar completamente o estado, removendo tudo o que havia anteriormente e setando um novo estado.

```js
// let's say that this.state is {foo: 42}

this.setState({bar: 117})

// this.state is now {foo: 42, bar: 117}

this.setState({foo: 43})

// this.state is now {foo: 43, bar: 117}

this.replaceState({baz: "hello"})

// this.state. is now {baz: "hello"}
````


**Props** - 
Em react os componentes podem receber parâmetros e dados passados pelos componentes que os estão sumonando

enviando
```js
import React, { Component } from 'react'
import Header from "./././././"

class App extends Component {
  render() {
    return <Header params={"params"} />
  }
}
```
recebendo
```js
import React, { Component } from 'react'

class Header extends Component {

  render() {
    const { params } = this.props
    return <h3>{ params }</h3>
  }
}
```

Porem para um componente pai receber uma prop de seu filho devemos utilizar uma callback

```js
import React, { Component } from 'react'
import Header from "./././././"

class App extends Component {
  render() {
    const params = (e) => {
      const { name, value } = e.target
      console.log()
    }
    return <Header params={ params} />
  }
}
```

```js
import React, { Component } from 'react'

class Header extends Component {
  render() {
    const { params } = this.props
    return <imput onChange={ params } value name={ email } />
  }
}
```

**proprDrillind x Redux** - 
chamamos de proprDrillind quando passamos um dado por muitos componentes, tornando nosso código mais complexo de dar manutenção
para evitar este problema utilizamos o redux, que vai ter sua própria sessão neste material


**Lifecycle**

diagrama com o lifecycle -  https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

constructor => render  => componentDidMount 
Atualização:
shouldComponentUpdate  => componentDidUpdate 
Desmontagem:
componentWillUnmount

Utilizar o componentDidMount para executar uma ação após o componente ser inserido no DOM;

Utilizar o shouldComponentUpdate para avaliar se uma atualização do componente deve ou não acontecer naquele momento;

Utilizar o componentDidUpdate para executar uma ação após o componente ser atualizado;

Utilizar o componentWillUnmount para realizar uma ação antes de o componente ser desmontado.

```js
  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }
```


