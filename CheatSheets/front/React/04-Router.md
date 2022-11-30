# Trabalhando com rotas em React

*Instalação React Router Dom*
npm install react-router-dom@v5

*BrowserRouter*
O BrowserRouter permite que a aplicação trabalhe com as rotas, 
normalmente e posto encapsulando os componentes em APP ou index.js
mas se a aplicação tiver testes, utilizaremos no index.js para que sua aplicação possa ser testada de forma mais eficiente

ex:

```js
import { BrowserRouter } from 'react-router-dom';
<BrowserRouter>
  <App />
</BrowserRouter>

```

*O Switch e O Router*

O Switch é usado para encapsular um conjunto de rotas que serão renderizadas apenas quando a sua rota estiver ativa na url
O Router vai determinar qual componente sera renderizado com cada url

Colocamos exact para determinar uma rota de nome especifico.
Também podemos passar parâmetros para uma rota
Ou fazer uma rota dinâmica, que vai verificar o valor que estiver no lugar de id
```js
<Switch>
  <Route exact path="/article" component={Article1} />
  <Route path="/article2" component={Article2} />
  <Route path="/article3" render={(props) => <Article3 {...props} param={"param"} />} />
  <Route path="/article/id" render={(props) => <Article4 {...props} />} />
  <Route path="/" component={Home} />
</Switch>
```

**Existem 3 formas de se trocar de rotas no react**
-links
-Redirect
-history.push()

*Links*
São componentes de tela que mudam diretamente o http, sendo normal ou dinâmico.
```js
<Link to="/article">article</Link>
<Link to="/article/7">article</Link>
```

*Redirect*
Componente que quando e posto em tela troca a rota, 
Por isso normalmente será posto em uma condicional.

```js
 {param ? <Redirect to="/article" /> : <Redirect to="/" />}
```

*history.push()*

O history.push() e utilizado como função, deve ser desestruturado das props, e só pode ser acessado por filhos diretos do switch
Para ser acessado em netos, devemos passar o history como prop.
Tambem podemos passar parâmetros com ele, basta adicionar outro parâmetro na função
Para acessar esse valor no componente, podemos buscar a chave location.state, do history.

```js
const { history } = this.props;
() => history.push('/article')
() => history.push('/welcome', this.state)
```
