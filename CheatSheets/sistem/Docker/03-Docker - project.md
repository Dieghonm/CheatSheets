*Utilizando o Docker em um projeto*

Para utilizar o docker em um projeto precisamos crir um arquivo chamado `Dockerfile` na raiz do projeto
Este arquivo serve para criar uma imagem
neste arquivo vamos por a sequencia de comandos a ser executada pelo docker

ex:
```
# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:16-alpine 
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 
# Build the app
RUN npm run build
# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
# Start the app
CMD [ "npx", "serve", "build" ]

```

*comandos*

`FROM nginx` - o comando from baixa a imagem base a ser utilizada. no caso estamos utilizando o nginx que e um servidor de html.

`FROM nginx:1.21-alpine AS primeiro-estagio` - nomeia o build

`WORKDIR /site` WORKDIR indica para o Docker qual é a pasta atual de trabalho dentro da imagem

`COPY index.html /usr/share/nginx/html` - serve para copiar um determinado arquivo, onde o primeiro parametro e o caminha na minha maquina e o segundo dentro do container

`EXPOSE 80` - indica que a imagem poderá receber conexões pelo número da porta que for informado

`RUN apk add hugo` - RUN indica que o comando à frente deve ser executado imediatamente

`ENTRYPOINT ["nginx", "-g", "daemon off;"]` - ENTRYPOINT indica para o Docker qual comando deve ser executado ao iniciar o container

`COPY --from=primeiro-estagio /site/public/ /usr/share/nginx/html` o comando --from= serve para pegar algo ja feito em outro estagio da aplicação e trazer para o estagio presente, criando assim uma aplicação sem os passos e instalaçoes anteriores, so com os resultados.
no ex [arquivo Docker segundo], foi utilizado o Hugo para criar um html no primeiro estagio, ja no segundo ele nao sera mais instalado.

*no terminal*
`docker build -t <nomear> <endereço>`
o nomear normalmente seria o nome da pessoa ou empresa / nome do projeto
ex: Diegho/portfolio

o endereço normalmente e `.`, pois ja estaremos com o terminal aberto na raiz do projeto, e o docker tambem estara ali, porem podemos por o docker em pastas e teremos que endereçar.
ex: projetos com front e back no mesmo arquivo(delivery de bebeidas).
o conteudo e nem rodar.

`docker run -d -p < nome >` rodar a imagem criada
-d faz rodar em segundo plano
-p configura uma porta aleatoria para acesso a imagem, se nao configurar uma porta nao tem como acessar 
`docker run -d -p 3000:80 < nome >`
3000 porta que sera acessada.
80 porta onde a aplicação esta aberta no docke
3000:80 liga uma porta a outra.




# Utilizando o Docker em um projeto

# Use a Node 16 base image
FROM node:16-alpine 

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto para o container
COPY . .

# Instala as dependências (npm ci garante que as versões exatas do arquivo lock sejam instaladas)
RUN npm ci 

# Realiza o build do projeto
RUN npm run build

# Define a variável de ambiente NODE_ENV como "production"
ENV NODE_ENV production

# Expõe a porta em que a aplicação estará em execução (3000 é a porta padrão do "serve")
EXPOSE 3000

# Inicia a aplicação
CMD [ "npx", "serve", "build" ]

# Comandos importantes no Dockerfile:
# - `FROM nginx`: define a imagem base a ser utilizada. Neste exemplo, estamos utilizando o Nginx, um servidor HTTP.
# - `WORKDIR /site`: define o diretório de trabalho dentro da imagem.
# - `COPY index.html /usr/share/nginx/html`: copia um arquivo específico para dentro do container.
# - `EXPOSE 80`: indica que a imagem estará disponível na porta 80.
# - `RUN apk add hugo`: executa um comando durante a construção da imagem.
# - `ENTRYPOINT ["nginx", "-g", "daemon off;"]`: define o comando a ser executado ao iniciar o container.
# - `COPY --from=primeiro-estagio /site/public/ /usr/share/nginx/html`: copia arquivos de um estágio anterior para o estágio atual, criando uma aplicação sem os passos e instalações anteriores.
