# Mocar retornos de API

Para elacorar bons testes automatizados, e imprencidivel que possamos mocar respostas de API, pois essas podem mudar constantemente e ate ficar fora do ar. e nao podemos ficar dependendo de extetnos para verificar se nossa aplicacao esta funcionando corretamente.



import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  // Outra forma de mock do fetch:
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(joke),
  }));

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
});




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