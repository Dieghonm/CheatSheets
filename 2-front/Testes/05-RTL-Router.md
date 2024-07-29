# Testes em Rotas do React


*history*

A biblioteca history nos permite acessar a sessão de histórico do navegador e também a localização atual (URL). Nesse link você pode encontrar a documentação.

Nessa documentação você pode encontrar mais detalhes sobre todos os métodos e propriedades da biblioteca. Para os nossos testes, os métodos mais utilizados serão o push, que permite mudar de rota dentro do ambiente de testes, e o location.pathname, que retorna a URL exata em que você está.

Dentro da biblioteca, você também importará a createMemoryHistory, que é feita para ser utilizada em ambientes que não possuem DOM, como em testes automatizados. O intuito dessa função é criar um novo histórico de navegação para ser utilizado durante o teste. Essa biblioteca é bastante utilizada nesses casos, como veremos no próximo tópico.

*renderWithRouter*

A função renderWithRouter é uma função customizada para fazer testes com rotas, uma vez que a função render normal da RTL não dá suporte ao router. Ela usa o createMemoryHistory para embutir a lógica de histórico de navegação no seu componente renderizado, para uso nos testes. Veja um código de exemplo para se familiarizar.

criando o renderWithRouter
```js
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{component}</Router>), history,
  });
};
export default renderWithRouter;
```
utilizanod para renderizar as rotas da aplicação

```js
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from './App';

it('deve renderizar o componente App', () => {
  renderWithRouter(<App />);

  const homeTitle = screen.getByRole('heading', {
    name: 'Você está na página Início',
  });
  expect(homeTitle).toBeInTheDocument();

});
```
Podemos utilizar cliques na tela para mudar de rota ou forçar a troca com o history.push

```js
  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { history } = renderWithRouter(<App />);

  act(() => {
    history.push('/pagina');
  })

  const { pathname } = history.location;
  expect(pathname).toBe('/pagina');
```
