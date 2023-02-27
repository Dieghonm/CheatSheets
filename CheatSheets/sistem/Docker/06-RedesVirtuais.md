**Redes virtuais**

Da mesma forma que podemos criar volumes virtuais, o Compose nos permite criar múltiplas redes virtuais entre os serviços. Isso é muito importante, pois nos permite criar arquiteturas mais seguras, por exemplo:

O serviço front-end só precisa se comunicar diretamente com o back-end;
O serviço back-end precisa se comunicar tanto com o front-end quanto com o database;
O serviço database só precisa se comunicar diretamente com o back-end.
Ao limitar as comunicações entre os serviços que não necessitam se comunicar de fato, acabamos criando uma arquitetura segura e robusta para os nossos serviços

vamos utilizar o arquivo docker-compose.yaml
nele vamos criar a chave de network, e nomear as redes

```
version: "3"
services:...
volumes:...
networks:
  rede-virtual-1:
  rede-virtual-2:
```

ea agor vincaular cada network com quem pode acessar.

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
      - ./logs:/var/log/frontend
    networks:
      - rede-virtual-1
  backend:
    build: backend/
    restart: always
    ports:
      - 3001:3001
    environment:
      - DB_HOST=database
    depends_on:
      - database
    networks:
      - rede-virtual-1
      - rede-virtual-2
  database:
    image: betrybe/docker-compose-example-database:v1
    restart: always
    volumes:
      - dados-do-banco:/data/db
    networks:
      - rede-virtual-2

volumes:
  dados-do-banco:

networks:
  rede-virtual-1:
  rede-virtual-2:
```



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