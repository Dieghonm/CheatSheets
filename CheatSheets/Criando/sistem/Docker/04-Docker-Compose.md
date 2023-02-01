# Docker compose

O compose vai permitir que criemos varias aplicaçoes/ containers dentro de uma mesma rede virtual para que eles possam interagir entre si.

`sudo curl -L "https://github.com/docker/compose/releases/download/v2.5.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`
Por padrão, binários baixados da Internet não possuem permissão de execução. Logo, basta usar o programa chmod para aplicar a permissão de execução (+x) ao binário que acabamos de baixar. Execute o seguinte comando no seu terminal:
`sudo chmod +x /usr/local/bin/docker-compose`

crie o arquivo `docker-compose.yaml`
ex:
``` 
aula-docker-compose/
├── backend
│   └── Dockerfile
├── frontend
│   └── Dockerfile
└── docker-compose.yaml
```

*configurando o .yaml*

a primeira coisa e definir a versão, podemos ver neste site 

https://docs.docker.com/compose/compose-file/compose-versioning/#versioning

No Compose existe o conceito de services. Logo, vamos configurar nosso arquivo Compose com os três serviços que citamos acima.

```
version: '3'
services:
  frontend:
    [...]
  backend:
    [...]
  database:
    [...]
```

Lembre-se que todo container é criado a partir de uma imagem. Sendo assim, precisamos especificá-las aos nossos serviços. Temos duas opções para isso:

uma imagem Docker pronta, seja local ou a ser baixada no Docker Hub;

um arquivo Dockerfile a partir do qual o Compose vai executar o comando docker build automaticamente.


```
version: '3'
services:
  frontend:
    build: frontend/    # Especificamos o contexto, ou seja, a pasta onde está o Dockerfile.
  backend:
    build: backend/     # Mesmo caso aqui.
  database:
    image: betrybe/docker-compose-example-database:v1    # Especificamos a Imagem Docker diretamente.
```

agora temos que mapear as portas

```
version: '3'
services:
  frontend:
    build: frontend/
    ports:
      - 3000:3000
  backend:
    build: backend/
    ports:
      - 3001:3001
  database:
    image: betrybe/docker-compose-example-database:v1
```
política de reinicialização

no : define que o container não reiniciará automaticamente (Padrão);
on-failure: define que o container será reiniciado caso ocorra alguma falha apontada pelo exit code, diferente de zero;
always: especifica que sempre que o serviço parar, seja por um falha ou porque ele simplesmente finalizou sua execução, ele deverá ser reiniciado;
unless-stopped: define que o container sempre será reiniciado, a menos que utilizemos o comando docker stop <container> manualmente.
```
version: '3'
services:
  frontend:
    build: frontend/
    restart: on-failure
    ports:
      - 3000:3000
  backend:
    build: backend/
    restart: on-failure
    ports:
      - 3001:3001
  database:
    image: betrybe/docker-compose-example-database:v1
    restart: on-failure
```
variáveis de ambiente

O nome da chave que utilizamos é environment. Com esta chave, configuramos as variáveis de ambiente em nossos serviços do docker-compose. Podemos especificar no arquivo docker-compose para que ele utilize o conteúdo de variáveis de ambiente do nosso próprio computador!

```
version: '3'
services:
  frontend:
    build: frontend/
    restart: on-failure
    ports:
      - 3000:3000
  backend:
    build: backend/
    restart: on-failure
    ports:
      - 3001:3001
    environment:
      - DB_HOST=database
  database:
    image: betrybe/docker-compose-example-database:v1
    restart: on-failure
```

Dependência entre Serviços

```
version: "3.8"
services:
  frontend:
    build: frontend/
    restart: on-failure
    ports:
      - 3000:3000
    depends_on:
      - backend
  backend:
    build: backend/
    restart: on-failure
    ports:
      - 3001:3001
    environment:
      - DB_HOST=database
    depends_on:
      - database
  database:
    image: betrybe/docker-compose-example-database:v1
    restart: on-failure
```
Cada serviço do nosso arquivo docker-compose.yaml recebeu a chave depends_on, que é uma lista de quais serviços o Compose deve executar primeiro, antes de executar o serviço atual. Nesse exemplo, os serviços serão iniciados respeitando a ordem que especificamos: primeiro o serviço database será iniciado, depois o serviço backend e finalmente o serviço frontend!

Chamamos o ato de executar todos os serviços do Compose de subir. Para subir todos os serviços, utilizamos o comando `docker-compose up` no terminal.

`docker-compose up -d` -d para subir em segundo plano
