# Checklist do linter

*Antes de começar*
- [ ] inicie um projeto com npm init para criair um packege.json
ou
- [ ] inicie um projeto react com npx create-react-app my-app

*Instalação*
- [ ] npm i eslint --save-dev

*Para iniciar a configuração digite no terminal*
- [ ] ./node_modules/.bin/eslint --init

Para a primeira pergunta sobre como queremos usar o ESLint, escolha a opção To check syntax and find problems. 
Isso possibilita a nosso arquivo de configuração encontrar problemas e corrigir a sintaxe de nossos arquivos JavaScript:

? How would you like to use ESLint? … 
  To check syntax only
▸ To check syntax and find problems
  To check syntax, find problems, and enforce code style


Em seguida, escolha Javascript modules (import/export) para definir o tipo de módulo adotado para o projeto:

  ? What type of modules does your project use? … 
▸ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these


Para o tipo de framework que vamos utilizar, selecione None of these (você também pode escolher outro de sua preferência):

  ? Which framework does your project use? … 
▸ React
  Vue.js
  None of these


Sinalize que não vamos usar TypeScript:

? Does your project use TypeScript? ‣ No / Yes


Desmarque a opção Browser e selecione Node (use a barra de espaço do teclado para marcar/desmarcar),
uma vez que queremos que o nosso projeto rode com o Node. Se estiver trabalhando em um projeto que utilize
o Browser como referência, você pode já deixar essa opção selecionada.

? Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
✔ Browser
✔ Node


Escolha o formato JSON, que será o formato do nosso arquivo de configuração:

? What format do you want your config file to be in? … 
  JavaScript
  YAML
▸ JSON


E para terminar aceite a instalação

✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · node
✔ What format do you want your config file to be in? · JSON
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest
✖ Would you like to install them now with npm? · No / Yes

