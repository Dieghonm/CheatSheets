# Style components
documentação - `https://styled-components.com/docs`

Instalação

*with npm*
`npm install --save styled-components`

*with yarn*
`yarn add styled-components`


Apos instalado podemos começar a estilizar os nossos componentes, ou melhor podemos começar a criar eles
pois com o style components nos vamos substituir as tags padrões do react pelas que nos vamos criando
ao longo da estilização

No exemplo criamos um componente Title, que será um h1 estilizado
Importante notar que o style component e um arquivo js, logo precisamos importar o style component
e exportar o componente que nos criamos.

```js
import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;
```
ou
```js
import styled from 'styled-components'

export const Title = styled('h1')({
  fontSize: '1.5em',
  textAlign: 'center',
  color: 'black',
})
```

para utilizar o elemento estilizado, precisamos importar e renomear o elemento.

```js
import * as S from '../style/Components/Header'

  <S.Title>Diegho Moraes</S.Title>
```

  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  border-color: tomato;

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