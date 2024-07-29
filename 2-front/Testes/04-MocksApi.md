# Mockar retornos de API

Para elaborar bons testes automatizados, e imprencidivel que possamos mockar respostas de API, pois essas podem mudar constantemente e ate ficar fora do ar. e nao podemos ficar dependendo de externos para verificar se nossa aplicacão esta funcionando corretamente.

Para mockar um retorno de API nos vamo fazer a mockagem da função e substituir a resposta por algo ja pre definido no nosso teste

```js
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

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  // Outra forma de mock do fetch:
  // global.fetch = jest.fn(() => Promise.resolve({
  //   json: () => Promise.resolve(joke),
  // }));
  //Terceira forma
  // global.fetch = jest.fn(async () => ({
  // son: async () => joke
  // }));

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});
```

A constante joke cria um objeto similar ao que é retornado da API;

O jest.spyOn espiona as chamadas à função fetch do objeto global. É por meio deste objeto global que conseguimos usar qualquer função do sistema, por exemplo, a função parseInt;

Quando a função fetch for chamada, em vez de fazer uma requisição a uma API externa, será chamado nosso mock. Repare que para cada .then utilizamos .mockResolvedValue e simulamos o retorno que o fetch teria. Primeiro retornamos um objeto que contém a função .json e dentro dela criamos um mock que retorna a nossa piada, satisfazendo o que é esperado no nosso componente;

É importante termos o async em it('fetch joke', async () => {, para que se possa utilizar await findByText onde estamos dizendo ao nosso teste: espere até que consiga encontrar esse texto no dom ou uma mensagem de erro por limite de tempo;

As funções toBeCalledTimes e toBeCalledWith servem para garantir respectivamente, o número de chamadas ao nosso fetch e que ele foi chamado com os argumentos corretos.

A linha afterEach(() => jest.clearAllMocks()); faz com que, após cada teste, nosso mock seja limpo, ou seja, no caso acima, garante que após o teste o fetch não seja mais um mock. Isso é bem útil para que não haja interferência entre um teste e outro.

https://willianjusten.com.br/erros-comuns-com-o-react-testing-library
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