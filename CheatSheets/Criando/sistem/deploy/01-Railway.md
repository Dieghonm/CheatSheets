Existem diversos serviços em nuvem que abstraem as complexidades de se administrar um servidor e suas diversas camadas (rede, disco, recursos etc.)

Exemplos de serviços em nuvem mais populares:

Amazon AWS;
Microsoft Azure;
Google Cloud Platform;
Oracle Cloud;
Railway;
Netlify;
Heroku;
IBM Cloud.

vamos utilizar o Rilway
https://railway.app/

O Railway.app é uma plataforma de infraestrutura como serviço (IaaS) que permite realizar o provisionamento de uma infraestrutura, desenvolver uma aplicação localmente utilizando a infraestrutura criada e, por fim, realizar o deploy da aplicação para cloud. Para mais informações sobre o Railway
https://docs.railway.app/

crie sua conte, de preferencia utilizando o github
clique no link Please agree to new terms to keep on using Railway
agora clique na quantidade de horas no topo da tela e clique em "remove resource limits"
isso vai liberara 5 dolares ou 500h de utilização renovavel por mes.

**Configurando serviços no Railway**

Ao clicar em New Project será exibido um conjunto de opções que podem ser escolhidas a depender do contexto do deploy. Com a intenção de termos um ambiente flexível, iremos escolher a opção Empty project

Em seguida um projeto vazio será criado e exibido na dashboard do Railway. Por padrão todo projeto criado no Railway irá receber um nome aleatório que contem um ambiente chamado production

Podemos alterar o nome do projeto nas configurações (botão Settings no canto superior direito) e criar outros ambientes. Cada ambiente oferece uma instância isolada de todos os serviços e banco de dados de um projeto. Isso é útil quando é necessário configurar um ambiente de staging (ambiente de homologação similar ao de produção) ao lado do ambiente production (ambiente que contém a aplicação final).

Adicionando um banco de dados MySQL
Vamos começar adicionando um banco de dados MySQL em nosso projeto. Para isso clique no botão New que fica no canto superior direito. Será exibido uma janela de pop-up que irá perguntar que tipo de novo serviço será adicionado. Clique em Database e, em seguida, em Add MySQL.

*No momento que o serviço MySQL for adicionado ao projeto será iniciado a utilização dos recursos (dólares e horas) do plano gratuito. Caso o valor em dólares ou de horas chegar a zero, não será cobrado nenhum valor a mais. Para evitar o uso das horas e dos dólares, caso queira, remova todos os serviços do projeto. *

Na dashboard do projeto, ao clicarmos no card do MySQL, será aberto uma janela com algumas opções de gestão, configuração e manipulação da nossa base de dados.

Uma dessas opções é Variables que exibe as variáveis de ambiente que foram criadas com os dados necessários para conectar com o MySQL

*Adicionando um serviço back-end*

Para adicionar o serviço back-end vamos clicar no botão New no canto superior direito e, em seguida escolher a opção Empty Service. Essa opção irá criar um serviço vazio o qual poderemos customizar de acordo com as nossas necessidades.

vamos até a opção Settings

Em Domains vamos clicar no botão Generate Domain. Isso irá gerar um domínio que pode ser utilizado para acessar a aplicação;
Em Service Name vamos alterar o nome do serviço para todolist-backend. Salve a alteração clicando no simbolo de ✔️ ao lado do campo de texto;


*Adicionando um serviço front-end*
O processo para adicionar o serviço de front-end é similar ao de back-end. Primeiro devemos adicionar um novo serviço clicando no botão New no canto superior direito e, em seguida escolher a opção Empty Service.

Na dashboard do projeto, ao clicarmos no card do serviço de front-end recém criado, será aberto uma janela com algumas opções de gestão e configuração do mesmo.

Nesse momento vamos até a opção Settings e vamos configurar nosso serviço com as seguintes opções::

Em Domains vamos clicar no botão Generate Domain. Isso irá gerar um domínio que pode ser utilizado para acessar a aplicação;
Em Service Name vamos alterar o nome do serviço para todolist-frontend. Salve a alteração clicando no simbolo de ✔️ ao lado do campo de texto;

*Vinculando o código com o serviço de back-end*
Agora vamos vincular o código referente a nossa API back-end ao serviço todolist-backend do Railway.

Na dashboard do Railway vamos clicar no card do serviço todolist-backend e, em seguida, clicar em Settings.

Na janela Settings vamos adicionar as seguintes configurações:

Em Service Repo clique no botão Connect Repo e escolha o projeto todolist-in-railway. Isso irá vincular o código do repositório ao serviço todolist-backend;
Em Root Directory adicione na caixa de texto a string /back-end. Salve a alteração clicando no simbolo de ✔️ ao lado do campo de texto. Como o nosso repositório é do tipo monorepo, ou seja, o back-end e o front-end estão no mesmo repositório termos que informar para o serviço qual é a pasta que está o código do back-end;
Em Watch Paths adicione na caixa de texto a string /back-end/src/**. Salve a alteração clicando no simbolo de ✔️ ao lado do campo de texto. Aqui estamos informando que o serviço deve ser reiniciado quando qualquer arquivo dentro da pasta /back-end/src for alterado.
Em Start Command adicione na caixa de texto a string npm run start. Salve a alteração clicando no simbolo de ✔️ ao lado do campo de texto. Aqui estamos definindo qual comando o Railway irá utilizar para iniciar a aplicação.

Para cada alteração realizada o Railway realizou uma tentativa de inicializar a aplicação. Contudo após a realização de todas as etapas descritas acima é que a aplicação irá de fato funcionar.

A aplicação Todo List contem no package.json o script prestart que, durante o momento da inicialização do aplicativo através do comando npm run start, executa os comando do Sequelize para criação do banco de dados e de execução das migrations. Dessa forma o banco MySQL possuirá as tabelas necessárias para a execução da aplicação, mas ainda vazias.

Nesse momento podemos acessar o nosso serviço clicando na URL criada para o mesmo. 

Esta URL é gerada de forma aleatória. Assim quando você criar seus serviços o valor será diferente.

Ao clicar, será aberta uma nova aba no seu browser e irá mostrar um erro dizendo que o endpoint GET / não existe.
Adicione ao final da URL /tasks e pressione enter. Será exibido uma lista vazia, pois nenhum dado foi adicionado no banco de dados ainda.


**Instalando a ferramenta de CLI do Railway**
A ferramenta de CLI (Command Line Interface) conecta o seu código local ao projeto Railway a partir da linha de comando.

A CLI do Railway permite:

Criar novos projetos no Railway a partir do terminal;
Vincular um projeto existente Railway;
Carregar as variáveis de ambiente do Railway para executar o projeto localmente;
Abrir um terminal interativo para o banco de dados do projeto.
Para instalar a CLI do Railway via NPM basta executar o seguinte comando:

`npm i -g -E @railway/cli@2.0.13`

Realizando o seed no banco de dados
Utilizaremos essa ferramenta para realizarmos o seed no banco de dados.

Primeiramente é necessário realizar o login no Railway via CLI digitando o seguinte comando:

`railway login`

Este comando irá solicitar que você pressione a tecla Enter para abrir o seu navegador e realizar o login no Railway através dele. Após o processo de login será exibido uma página indicando que o processo foi realizado com sucesso e que a mesma pode ser fechada.

Em seguida precisamos informar para a ferramenta de CLI qual projeto queremos manipular com ela. Para isso vamos digitar o seguinte comando:

`railway link`

Ao executar o comando acima será exibido no console uma lista com todos os projetos criados no Railway (provavelmente você terá apenas um projeto 😄) use as teclas ⬆️ e ⬇️ para selecionar o projeto desejado e pressione Enter.

Agora estamos prontos para preencher o banco de dados MySQL criado no Railway com os valores do seed do Sequelize. Primeiro acesse o diretório onde você realizou o clone do repositório todolist-in-railway e, dentro do diretório back-end, execute os seguintes comandos:

`npm install`
`railway run npx sequelize-cli db:seed:all`

Ao executar o segundo comando será exibida no console uma lista com todos os serviços criados no Railway. Use as teclas ⬆️ e ⬇️ para selecionar o serviço todolist-backend e pressione Enter.

O primeiro comando (npm install) instala as dependências do projeto e cria o diretório node_modules. O segundo comando (railway run npx sequelize-cli db:seed:all) irá configurar, durante a sua execução, as variáveis de ambiente criadas Railway localmente no seu computador. Isso permitirá que o comando do Sequelize de seed seja executado populando a tabela tasks do MySQL instanciado no Railway.

Nesse ponto se executarmos novamente a URL do serviço todolist-backend adicionando /tasks ao final teremos o seguinte resultado:


Vinculando o código com o serviço de front-end
Agora vamos vincular o código referente a nossa API front-end ao serviço todolist-frontend do Railway.

Na dashboard do Railway vamos clicar no card do serviço todolist-frontend e, em seguida, clicar em Settings.

Na janela Settings vamos adicionar as seguintes configurações:

Em Service Repo clique no botão Connect Repo e escolha o projeto todolist-in-railway. Isso irá vincular o código do repositório ao serviço todolist-frontend;
Em Root Directory adicione na caixa de texto a string /front-end. Salve a alteração clicando no simbolo de ✔️ ao lado do campo de texto. Como o nosso repositório é do tipo monorepo, ou seja, o back-end e o front-end estão no mesmo repositório, teremos que informar para o serviço qual é a pasta que está o código do front-end;
Em Watch Paths adicione na caixa de texto a string /front-end/src/**. Salve a alteração clicando no simbolo de ✔️ ao lado do campo de texto. Aqui estamos informando que o serviço deve ser reiniciado quando qualquer arquivo dentro da pasta /front-end/src for alterado.
Em Start Command adicione na caixa de texto a string npm run start. Salve a alteração clicando no simbolo de ✔️ ao lado do campo de texto. Aqui estamos definindo qual comando o Railway irá utilizar para iniciar a aplicação.
Após realizar as configurações acima, precisamos criar duas variáveis de ambiente responsáveis por configurar a URL e o protocolo que o comando fetch do front-end utilizará para acessar os dados da API back-end.

Na dashboard do Railway vamos clicar no card do serviço todolist-frontend e, em seguida, clicar em Variables.

Na janela Variables vamos adicionar as seguintes variáveis de ambiente:

A variável REACT_APP_API_HOST como valor igual a URL gerada para o serviço todolist-backend sem o prefixo https:// e sem a rota \tasks;
REACT_APP_API_PROTOCOL com o valor igual a https.

Após a criação das variáveis de ambiente podemos acessar a URL do serviço todolist-frontend e veremos uma página web construída em React exibindo os dados armazenados no MySQL.

⚠️ Se a logo da página estiver quebrada ou a lista não for exibida, recarrega a página.

E aqui concluímos o processo de deploy de uma aplicação no Railway. 🚀

**Github Actions**
Aprendemos a fazer o deploy no Railway, mas como podemos automatizar esse deploy? Para isso, um dos recursos disponíveis e muito utilizado no mercado de trabalho é o GitHub Actions.

Entendendo melhor os componentes de um GitHub Actions
Com o GitHub Actions é possível configurar Workflows (fluxos de trabalho) para ser disparado de acordo com algum Event (evento) qualquer dentro do repositório. Em outras palavras, a partir de um Event, como a abertura de um PR (Pull Request) ou simplesmente um push em uma determinada branch, se dispara um Workflow que executa um ou mais Jobs. Cada Job é composto por uma ou mais Action. E, obviamente, tudo isso acontece dentro de um Runner (Executador), que é uma máquina virtual, ou um container que irá executar um dado job.

Por exemplo, podemos criar um workflow para fazer um deploy toda vez que ocorrer um push na branch main. Nesse caso, o evento registrado pelo workflow é um push na main, com isso toda vez que ocorrer esse evento, inicia o processo de deploy. Esse processo de deploy pode ser um job para rodar os testes (como no exemplo da imagem Job A) e outro job para rodar o build e então fazer o upload do código para o servidor em nuvem (como no exemplo da imagem Job B).


Copiar
# .github/workflows/railway.yml
name: Deploy para Railway

# Quando deve acontecer - Event
on:
  push:
    branches:
      - "main"

# Passos para deploy
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout do projeto
        uses: actions/checkout@v3

      - name: Install Railway CLI
        uses: MadeByThePinsHub/setup-railway-cli-action@v0.1.0

      - name: Deploy to Railway - Front-end
        run: railway up --detach -s front-end
        env:
          RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}

      - name: Deploy to Railway - Back-end
        run: railway up --detach -s back-end
        env:
          RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}

Configuração Docker (Back-end):

/back-end/Dockerfile:

Copiar
FROM node:14-alpine

EXPOSE 3001

WORKDIR /opt/trybe-todo-list-backend

COPY package*.json .

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "start" ]
/back-end/.dockerignore:

Configuração Docker (Front-end):

/front-end/Dockerfile:

Copiar
FROM node:14-alpine

EXPOSE 3000

WORKDIR /opt/trybe-todo-list-frontend

COPY package*.json .

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "start" ]


