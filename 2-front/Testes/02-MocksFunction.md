# Mocando funcoes

Mockamos uma função, módulo ou requisição para ter controle sobre todo o funcionamento dos testes. como em uma API que podemos ter alteracoa no retorno ou ate nao ter retornos por instabilidades, mocar torna nossos testes menod dependentes .


*jest.fn()*

Utilizamos o metodo`jest.fn()` para capturar a chamada da funcao a ser mocada, e responder no lugar dela.
Algumas funcoes tem a obrigatoriedade de serem mocadas, e em seus testes dara o erro 
˜Matcher error: received value must be a mock or spy function˜

```js
test("#function", () => {
  function = jest.fn();

  function();
  expect(function).toHaveBeenCalled();
});
```
Ao declarar function = jest.fn();, estamos dizendo ao teste que, a partir daquele momento, estamos tomando controle da função divisivelPorDois e que ela será uma simulação da função original.

*mockReturnValue(value) e mockReturnValueOnce(value)*

Como os testes sao uma forma de simular nossa aplicacao, Podemos especificar qual vai ser o retorno da função para ter maior controle dos matchs.

temos 2 metodos para isso, mockReturnValue(value) e mockReturnValueOnce(value). 
O mockReturnValue define um valor padrão de retorno. Já o mockReturnValueOnce retorna o valor definido apenas uma vez

```js
test("#divisivelPorDois", () => {
  divisivelPorDois = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(divisivelPorDois).toHaveBeenCalledTimes(0);

  expect(divisivelPorDois()).toBe("first call");
  expect(divisivelPorDois).toHaveBeenCalledTimes(1);

  expect(divisivelPorDois()).toBe("second call");
  expect(divisivelPorDois).toHaveBeenCalledTimes(2);

  expect(divisivelPorDois()).toBe("default value");
  expect(divisivelPorDois).toHaveBeenCalledTimes(3);
});
```

*Mockando Módulos*


Diferentemente do jest.fn(), que simula apenas uma função por vez, temos o jest.mock(), que tem como principal diferencial mockar todo um pacote de dependências ou módulo de uma vez


```js
const math = require('./math');
jest.mock("./math");

test("#somar", () => {
  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});
```

*jest.spyOn()*
Ele “espia” a chamada da função simulada, enquanto deixa a implementação original ativa.

(ver mais sobre a utilizacao do spyOn)<--------------

```js
const math = require('./math');

test("#somar", () => {
  const mockSomar = jest.spyOn(math, "somar");

  mockSomar(1, 2);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(1, 2);
  expect(mockSomar(1, 2)).resolves.toBe(3);
});
```


Há também como limpar, resetar ou restaurar mocks. Existem três métodos capazes de fazer isso:

mock.mockClear()

Útil quando você deseja limpar os dados de uso de uma simulação entre dois expects.
mock.mockReset()

Faz o que o mockClear() faz;
Remove qualquer retorno estipulado ou implementação;
Útil quando você deseja resetar uma simulação para seu estado inicial.
mock.mockRestore()

Faz tudo que mockReset() faz;
Restaura a implementação original;
Útil para quando você quer simular funções em certos casos de teste e restaurar a implementação original em outros.

```js
const math = require('./math');

test("#somar", () => {
  // testando a implementação original, o mock e a restauração da função original

  // implementação original
  expect(math.somar(1, 2)).resolves.toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  const mockSomar = jest
    .spyOn(math, "somar")
    .mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar(5, 1)).toBe(4);
  expect(mockSomar).toHaveBeenCalledTimes(2);
  expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

  // restaurando a implementação original
  math.somar.mockRestore();
  expect(math.somar(1, 2)).resolves.toBe(3);
});
```


