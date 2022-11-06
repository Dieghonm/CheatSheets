# React Testing Library

https://pt-br.reactjs.org/docs/testing-recipes.html

O RTL e uma biblioteca nativa do React que nos permite escrever testes automatizados, podendo testar componentes de tela.
Quando criamos nosso APP em react o RTL ja vem na instalacao, e vem com um arquivo de testes de exemplo, arquivo App.test.js

E para executar todos os testes automaticos basta escrever no terminal o codigo
npm test

```js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

**render**
Com o RTL podemos testar um unico componente sem a necessidade de renderizar o seu pai ou fazer toda a rota ate chegar ao componente desejado
para isso utilizamos a funcao `render()`

```js
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
});
```
podemos tambem renderizar componentes passando props para eles.

```js
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App param={'param'} />);
});
```


*act*
Quando estiver escrevendo testes de UI, tarefas como renderização, eventos de usuário ou busca de testes podem ser considerados como “unidades” de interação com a interface do usuário. react-dom/test-utils provê um auxiliar chamado act() que garante que todas as atualizações relacionadas a esses “usuários” estejam sendo processadas e aplicadas ao DOM antes que você faça alguma declaração de testes.

```js
act(() => {
  // renderizar componentes
});
// fazer declarações de testes
```


**Screen Queries e Seletores**

*Screen* - 
O screen objet do RTL fornece métodos para consultar os elementos renderizados do DOM para fazer declarações sobre seu conteúdo de texto, atributos e muito mais. Ele que nos fornce as quiries e seletores.

*Queries* - 
Queries sao metodos extraidos de entro do screen, e que vao efetivamente buscar algo no componente para verifivar o teste.
No caso simulamos um componente renderizado com o `render()` e buscamos na tela o elemento a ser testado.

Existem 3 tipos de queries e suas vercoes para muitos elementos como podemos ver na tabela a baixo

`https://testing-library.com/docs/react-testing-library/cheatsheet/`

Type of Query   --	0 Matches    -- 	1 Match   --      	>1 Matches	 --   Retry (Async/Await)

Single Element				

getBy...        --	Throw error  --   Return element  --	Throw error	   --    No

queryBy...	     -- Return null	  --  Return element	--  Throw error	   --    No

findBy...	      --  Throw error	  --  Return element	--  Throw error	    --   Yes

Multiple Elements				

getAllBy...	    --  Throw error	  --  Return array	 --   Return array	  --   No

queryAllBy...	  --  Return []	   --   Return array	  --  Return array	  --   No

findAllBy...	  --  Throw error	 --   Return array	  --  Return array	  --   Yes


ATENCAO - apenas o findBy e o findAllBy lidam com assincronicidades.

As queries devem ser complementadas com o que buscaremos na tela, para isso temos

(ByLabelText, ByPlaceholderText, ByText, ByDisplayValue, ByAltText, ByTitle, ByRole, ByTestId)


`ByLabelText` find by label or aria-label text content


getByLabelText

queryByLabelText

getAllByLabelText

queryAllByLabelText

findByLabelText

findAllByLabelText



`ByPlaceholderText` find by input placeholder value


getByPlaceholderText

queryByPlaceholderText

getAllByPlaceholderText

queryAllByPlaceholderText

findByPlaceholderText

findAllByPlaceholderText



`ByText` find by element text content

getByText

queryByText

getAllByText

queryAllByText

findByText

findAllByText



`ByDisplayValue` find by form element current value


getByDisplayValue

queryByDisplayValue

getAllByDisplayValue

queryAllByDisplayValue

findByDisplayValue

findAllByDisplayValue



`ByAltText` find by img alt attribute

getByAltText

queryByAltText

getAllByAltText

queryAllByAltText

findByAltText

findAllByAltText



`ByTitle` find by title attribute or svg title tag

getByTitle

queryByTitle

getAllByTitle

queryAllByTitle

findByTitle

findAllByTitle



`ByRole` find by aria role

getByRole

queryByRole

getAllByRole

queryAllByRole

findByRole

findAllByRole



`ByTestId` find by data-testid attribute

getByTestId

queryByTestId

getAllByTestId

queryAllByTestId

findByTestId

findAllByTestId



```js

const linkElement = screen.getByText(/learn react/i);

```


*Componentes assuncronos* - 
Levanso em conta que podemos ter componentes assincronos tanto por esperarem respostas de API ou por outros motivos, temos que lidar com este tempo de resposta, esperando a renderizacao de algum componente de tela, podemos fazer isso de 3 formas.

utilizando o findBy e o findAllBy

```js
const button = await screen.findByText('Clicked once')
```

utilizando o waitFor - 
o metodo waitFor vai esperar ate que o expect dentro dela retorne true ou de o seu timeOut

```js
await waitFor(() => expect(mockAPI).toHaveBeenCalledTimes(1))

await waitFor(() => {
  const button = screen.getByText(`loguin`)
  expect(button).toBeInTheDocument()
})
```

utilizando o waitForElementToBeRemoved - 
waitForElementToBeRemoved (Promise) retry the function until it no longer returns a DOM node

```js
waitForElementToBeRemoved(document.querySelector('div.getOuttaHere')).then(() =>
  console.log('Element no longer in DOM'),
)

waitForElementToBeRemoved(() => getByText(/not here/i)).catch(err =>
  console.log(err),
)
```

**Events** - 

Algumas vezes temos que simular intereacoes do usuario com a tela para testar funcionalidades, fazemod isso utilizando o firEvent ou o userEvent e seus parametros.

fireEvent dispatches DOM events, whereas user-event simulates full interactions, which may fire multiple events and do additional checks along the way.


*fireEvent* - 
https://testing-library.com/docs/guide-events/

https://github.com/testing-library/dom-testing-library/blob/main/src/event-map.js



fireEvent.mouseOver(element)

fireEvent.mouseMove(element)

fireEvent.mouseDown(element)

element.focus() (if that element is focusable)

fireEvent.mouseUp(element)

fireEvent.click(element)


diferenciados ver documentoacao

fireEvent.keyDown(document.activeElement || document.body);

fireEvent.focus(getByText('focus me'));




*userEvent* - 
o userEvent deve ser importado com

import userEvent from '@testing-library/user-event';

```js
userEvent.type(element, 'EMAIL_USER'); // simula o preenchimento de um imput pelo usuario
userEvent.click(element);
```

```js
const user = userEvent.setup()

await user.keyboard('[ShiftLeft>]') // Press Shift (without releasing it)
await user.click(element) 
```


*Expect e Match* - 
o Expect e os matchs são as partes masi importantes dos testes, são eles quem efetivamente vai testar a aplicacão.

```js
  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toBeDisabled()
```

`https://github.com/testing-library/jest-dom`

toBeDisabled

toBeEnabled

toBeEmptyDOMElement

toBeInTheDocument

toBeInvalid

toBeRequired

toBeValid

toBeVisible

toContainElement

toContainHTML

toHaveAccessibleDescription

toHaveAccessibleName

toHaveAttribute

toHaveClass

toHaveFocus

toHaveFormValues

toHaveStyle

toHaveTextContent

toHaveValue

toHaveDisplayValue

toBeChecked

toBePartiallyChecked

toHaveErrorMessage



```js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});
```
