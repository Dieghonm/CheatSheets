# React 101

*Instalação*
Abra um terminal no Ubuntu (você pode pressionar Ctrl + Alt + T para abrir o Terminal).

`npx create-react-app nome-do-app`

*Comandos basicos*

`npm start` - inicializa a aplicação no navegador
`npm test` - roda os testes automatizados que existirem na aplicação
`npm run build` -criar uma “compilação” do aplicativo, mesclando os  arquivos CSS e JavaScript em um arquivo. Minimizando o número e o tamanho dos arquivos que o usuário obtém.

O React serve para componentizar nossa aplicação, possibilitando renderizar partes diferentes dele em momentos diferentes.
Os componentes podem ser funcionais ou de classe e serão explicados em suas sessões especificas deste material

**Lista de componentes html/React uteis**
`https://www.w3schools.com/tags/`

*Semanticos*

<header> - utilizado para representar o cabeçalho de um documento

<section> - representa uma seção dentro de um documento

<article> - Utilizado quando precisamos declarar um conteúdo que não precisa de outro para fazer sentido em um documento

<nav> - utilizado quando precisamos representar um agrupamento de links de navegação

<aside> - utilizado quando precisamos criar um conteúdo de apoio/adicional ao conteúdo principal

<main> - especifica o conteúdo principal

<figure> - marcação de uso específico para a inserção de uma figura

<footer> - representa um rodapé de um documento
*****************************************

<div> - serve como um involucro para dividir seções de tags html.
Note: By default, browsers always place a line break before and after the <div> element.

<span> - igual a div porem `is an inline element`

*titulos* - <h1>, <h2>,..., <h6>

*paragrafos* - <p>texto</p>


<ul> - Unorder list

<ol> - Order list

<li> - list item

<button> - cria um botão clicavel, em react tem que ter a propriedade onClick

`event.preventDefault()` - Alternar é a ação padrão de clicar em uma caixa de seleção ou botão.
bastante utilizado em botoes dentro de formularios para alterar o seu funcionamento padão.

<canvas> noramlmente e transparente, serve como um espaço em 2d normalmente para conter graficos. (usado em jogos)

<img> - 

*formularios*
<form>- Serve como uma div para conter formularios, e estende propriedades proprias a ele.

<input> - cria campo para receber dado escritos pelo usuario, seu tipo vai ser definido pelo valor de seu type, que pode ser
type="button", type="checkbox"type="color", type="date", type="datetime-local", type="email", type="file", type="hidden", type="image", type="month", type="number", type="password", type="radio", type="range", type="reset", type="search", type="submit", type="tel", type="text", type="time", type="url", type="week"

<textarea> - Igual ao input, porem recebe varias linhas.

<label> - define um rotulo para o imput, extendendo as propriedades do imput para o texto dentro dele

<select> - usado para criar uma lista de seleção
<option> - para as opções do select
<optgroup> - serve para criar grupos de opções
```js
  <select name="cars" id="cars">
    <optgroup label="Swedish Cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
    </optgroup>
    <optgroup label="German Cars">
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </optgroup>
  </select>
```

<fieldset> - tag semantica para agrupar elementos relacionados em um formulario

<output> - define um campo de saida para renderizar dados na tela

<iframe> - Tag para renderizar videos


<table> - usado para iniciar uma tabela

<tr> - inicia uma linha

<th> - serve para as celulas de tituloa

<td> - celula comum

An HTML table may also include <caption>, <colgroup>, <thead>, <tfoot>, and <tbody>
alert


*estilização*

<a> - Serve para declarar links

<em>, <cite> e <q> - Serve para por parte do texto em italico
Com diferenças semanticas pois cite e q servem para citaçẽos,  

```js
<p>Você <em>tem certeza</em> que essa definição está correta?</p>
```

<strong> - Serve para por parte do texto em negrito

```js
<p>Compreender esses elementos HTML é importante porque
<strong>possibilita o desenvolvimento de soluções web modernas</strong>.</p>
```
<time> - utilizado para representar datas



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
