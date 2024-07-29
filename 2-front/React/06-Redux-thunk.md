# Redux assincrono com thunk

https://github.com/reduxjs/redux-thunk

O redux-thunk é um middleware que, no contexto de uma aplicação Redux, nada mais é que um interceptador que captura todas as actions enviadas pela store antes delas chegarem a um reducer.

Para fazer uso do redux-thunk, é preciso instalá-lo via npm

`npm install redux-thunk`

Para habilitar o uso do redux-thunk na sua aplicação, é preciso fazer uso da função applyMiddleware() do Redux:

```js
// arquivo em que a redux store é criada
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '/path/to/your/root/reducer';

// ...

const store = createStore(reducer, applyMiddleware(thunk));
// ...
```

Para usar o redux-thunk junto com o Redux Devtools, é preciso passar o applyMiddleware(thunk) como parâmetro para a função composeWithDevTools, como no exemplo a seguir:

```js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '/path/to/your/root/reducer';
import { composeWithDevTools } from '@redux-devtools/extension';

// ...

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
// ...
```
