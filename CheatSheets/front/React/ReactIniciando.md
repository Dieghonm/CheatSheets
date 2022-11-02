# React 101

*Instalação*

`npx create-react-app nome-do-app`

*Comandos basicos*

`npm start` - inicializa a aplicação no navegador
`npm test` - roda os testes automatizados que existirem na aplicação
`npm run build` -criar uma “compilação” do aplicativo, mesclando os  arquivos CSS e JavaScript em um arquivo. Minimizando o número e o tamanho dos arquivos que o usuário obtém.

O React serve para componentizar nossa aplicação, possibilitando renderizar partes diferentes dele em momentos diferentes.
Os componentes podem ser funcionais ou de classe e serão explicados em suas sessões especificas deste material

**Lista de componentes html/React uteis**


*titulos*
<h1></h1>, <h2></h2>, <h3></h3>, <h4></h4>, <h5></h5>

*paragrafos*
<p>texto</p>




form
input
button
img
<select>
  <option value="Ford">Ford</option>
  <option value="Volvo" selected>Volvo</option>
  <option value="Fiat">Fiat</option>
</select>
div
span
<nav>
<ul><ol>
<li>

alert

**Props**
As props são partes importantes de um componente. É por elas que passamos os valores para o componente, e é como o torna reutilizável em diferentes contextos. Elas são como os parâmetros de uma função.


**Eventos**
Eventos no React são como os eventListeners do JavaScript: você os associa aos elementos que exibirá na tela, e eles nortearão como cada componente reage a uma ação de quem usa.

*eventos comuns*
onClick={handleClick}
onClick={()=>handleClick()}

**Estados**

O Estado de um componente é onde todo componente tem para armazenar informações que devem persistir enquanto a tela não for fechada ou atualizada.
Pode ser abordado de formas diferentes com componentes funcionais e de classe, por isso serão explicados em suas sessões especificas deste material



*modelo*
**modelo**
- [ ] `modelo`
```js
const model = "";
const func = () => {
    return model;
}
export default func;

```
