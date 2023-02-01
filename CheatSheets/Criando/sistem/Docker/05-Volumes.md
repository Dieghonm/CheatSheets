**Volumes**

Os volumes nos permitem persistir arquivos entre execuções dos nossos serviços. Essa funcionalidade é super importante quando subimos serviços como banco de dados, onde precisamos manter os dados caso o serviço seja reiniciado.

Para criar volumes, utilizamos o arquivo docker-compose.yaml
vamos criar a chave volumes, onde vamos especificar a criação de um volume virtual com o nome dados-do-banco.

```
version: "3"
services:...
volumes:
  dados-do-banco:
```

precisamos mapear este volume para dentro de algum serviço, fazemos isso criando uma chave volume dentro do services que acessa tal volume

Isso é feito pela nova chave volumes que está dentro do serviço database! Você pode perceber que esta chave é uma lista com um item e recebeu os dados no seguinte formato: <nome-do-volume>:<caminho-no-container-para-montar>. Ou seja: no serviço database, o caminho /data/db será persistido, mesmo se a gente descer e subir este serviço novamente!

```
version: "3"
services:
  frontend:
    build: frontend/
    restart: always
    ports:
      - 3000:3000
    depends_on:
      - backend
    volumes:
      - ./logs:/var/log/frontend   # caminho no computador : caminho no container
  backend:
    build: backend/
    restart: always
    ports:
      - 3001:3001
    environment:
      - DB_HOST=database
    depends_on:
      - database
  database:
    image: betrybe/docker-compose-example-database:v1
    restart: always
    volumes:
      - dados-do-banco:/data/db    # nome do disco virtual : caminho no container(no caso um mongodb)

volumes:
  dados-do-banco:
```
Por que mapeamos o caminho “/data/db”? 🤔 como este banco de dados é um MongoDB, seus dados são armazenados nesta pasta específica, segundo sua documentação.
`https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/5987fa2d-0d04-45b2-9d91-1c2ffce09862/day/2f1a5c4d-74b1-488a-8d9b-408682c93724/lesson/5e65eb9b-6ffa-452d-ab14-1e4e2d47887f#:~:text=Por%20que%20mapeamos%20o%20caminho%20%E2%80%9C/data/db%E2%80%9D%3F%20%F0%9F%A4%94%20como%20este%20banco%20de%20dados%20%C3%A9%20um%20MongoDB%2C%20seus%20dados%20s%C3%A3o%20armazenados%20nesta%20pasta%20espec%C3%ADfica%2C%20segundo%20sua%20documenta%C3%A7%C3%A3o.`

tivemos um mapeamento de volume no serviço de front-end! Em sua nova chave volumes, temos um mapeamento diferente: neste caso, estamos mapeando uma pasta do nosso computador local (./logs) para uma pasta dentro do serviço de front-end (/var/log/frontend). Desta maneira, não precisamos criar volumes virtuais, pois estamos usando uma pasta do nosso próprio computador!


