# Redux

O redux e uma biblioteca utilizada para resolver o problema de propDrilling, com ela criamos um estado global que vai recever e compartilhar todas as informaçoes pertinentes na nossa aplicação.

Para criarmos o Redux, precisamos nos familiarizar com os conceitos de: store, reducer e actions bem como a função para ler o estado getState() e a função para escrever o estado dispatch()

**Estado Global ou store**
Podemos considerar a store como sendo o estado global. É onde o estado da sua aplicação fica registrado e protegido.

Ela é um objeto que traz as funções getState(), para ler do estado, e dispatch() , para escrever no estado.

Para criar a store da sua aplicação, você deverá usar a função createStore() do Redux, passando como argumento uma função reducer (que veremos a seguir):

```js
// Criando a nossa store:
const store = createStore(reducer);
```

**Reducer**

O reducer é a função responsável por escrever no estado global. Ela tem uma “assinatura” bem definida: deverá receber um state e uma action como parâmetro e retornar um novo estado ou o estado anterior:

```js
// Criando uma função Reducer
const reducer = (state, action) => state
```

**Actions**
Uma action nada mais é do que um objeto que possui obrigatoriamente a chave type:
Definimos o type da action como sendo a ação que será enviada para o reducer para alterar o estado. No caso acima, a action irá enviar a ação INCREMENT_COUNTER para o reducer. Assim que receber essa action, o reducer será responsável por atualizar o estado global.

```js
// Action para Incrementar nosso contador:
const action = {
  type: 'INCREMENT_COUNTER'
};
```

**dispatch()**
Para enviar uma action para o reducer é necessário passá-la como argumento para a função dispatch().

```js
dispatch({type: 'INCREMENT_COUNTER'});
```

**getState()**

Para ler o estado global, o objeto store disponibiliza a função getState(). Essa função retorna o estado global:

```js
const state = store.getState()
```

**subscribe()**
Geralmente iremos precisar fazer ações quando o estado global é atualizado. Por exemplo, toda a vez que o contador é incrementado, precisaremos renderizar o novo valor do estado na tela.

Para isso, o objeto store também disponibiliza a função subscribe(). Essa função recebe um callback que irá ser chamado toda vez que o estado global sofrer alterações:

```js
store.subscribe(() => {
    console.log(`O novo estado global é ${store.getState()}`)
})
```

**Redux DevTools**

Como o Redux traz um fluxo bem definido para “escrever” e “ler” do estado global, é muito útil conseguirmos visualizar na nossa aplicação o que está acontecendo por trás dos panos.

Para isso, existe uma extensão de navegador chamada Redux Devtools. Com ela, é possível inspecionar o estado global bem como as actions disparadas e subsequentes alterações no estado.

Para usar o Redux Devtools é necessário que você siga dois passos:

Instalar a extensão no seu navegador de preferência;
`https://github.com/reduxjs/redux-devtools/tree/main/extension#installation`

Integrar a extensão no código da sua aplicação.
`https://github.com/reduxjs/redux-devtools/tree/main/extension#usage`


**Redux Toolkit (RTK)**
Você poderá ter notado que, ao criar a store, um “deprecation warning” na função createStore no seu editor de código.

Isso acontece porque os mantenedores do Redux criaram uma forma simplificada de configurar e usar o Redux chamada de Redux Toolkit (RTK).

Por mais que entendemos a necessidade de simplificação e utilidade da ferramenta, não nos aprofundaremos nesse momento nessa outra biblioteca. Isso porque ela faz abstrações que dificultam o entendimento da estrutura do Redux. Mas fique à vontade para explorar o RTK na documentação oficial.

Apesar do deprecation warning, o createStore não está deprecado e não há planos de retirada dessa API da biblioteca. De forma opcional, se você preferir remover esse warning, basta inserir essa linha na importação:

```js
import { legacy_createStore as createStore } from 'redux';
```
