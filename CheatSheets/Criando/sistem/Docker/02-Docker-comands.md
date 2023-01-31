**Docker comands**


Inicie o Daemon do Docker
O Daemon é um serviço que fica no background, ou seja, é um serviço que sempre está em execução e aguarda por comandos feitos por meio do CLI. Entretanto, para que este serviço fique sempre disponível, precisamos ativá-lo, até mesmo após reiniciarmos nosso computador.

Para consultar o status atual do daemon do Docker, execute o seguinte comando:
```
sudo systemctl status docker
```
Caso o parâmetro Active esteja como stop/waiting ou no nosso caso, como inactive, rode o comando start para iniciá-lo:
Copiar
sudo systemctl start docker
Ao consultar o status novamente, o processo deverá estar como start/running/active.

Agora, vamos habilitar o daemon do Docker para iniciar durante o boot:
Copiar
sudo systemctl enable docker


Valide a instalação
Para validar se tudo ocorreu como deveria na instalação, vamos executar o tão esperado hello world do Docker:

Copiar
sudo docker run hello-world




*Registry*
Registry é um local onde podemos enviar e baixar imagens Docker.
Docker Hub: a própria Docker Inc. oferece um serviço de registry público;
https://hub.docker.com/
Quay Container Registry: a empresa Red Hat também oferece um serviço semelhante. 
https://quay.io/


Comandos básicos do Docker

`sudo docker images` para visualizar todas as imagens Docker que já estão presentes em sua máquina.

Ao tentar executar um container com uma imagem específica e esta imagem não estiver presente em nossa máquina, o Docker por padrão tentará obter a imagem Docker através do seu Registry, o Docker Hub. Veja um exemplo de saída do comando em uma máquina sem nenhuma imagem:



`sudo docker ps` ou `sudo docker container ls` para listar todos os containers em execução neste momento em sua máquina.

`sudo docker ps -a`Para visualizar todos os containers atuais, incluindo os que estão em execução e também parados





Executando um novo container
➡️ Utilize o comando docker container run <flags>? <imagem>:<tag> <argumentos>? para executar um container utilizando a imagem identificada pelo <imagem>:<tag>.

⚠️ Os parâmetros <flags>? e <argumentos>? são opcionais (o que é sinalizado pelo uso de ?)


`sudo docker rm <nome-do-container>` remover os containers
m container só pode ser removido com o comando docker rm <nome-do-container> se ele estiver parado ou tiver sua execução terminada**.

`sudo docker container prune` remove todos os containers inativos do seu computador.




Modo “segundo plano”
A flag -d ou --detach faz com que a execução do container ocorra em segundo plano, ou seja, embora não esteja visível, o container executará de forma assíncrona. Esta opção é interessante quando o programa a ser executado é um servidor ou algum processo que você sabe previamente que terá uma execução demorada.

Veja abaixo a saída ao executar um container no modo detached. Neste exemplo, trocamos o argumento echo pela execução do programa sleep, que fará com que o container continue sua execução por 300 segundos (5 minutos):

docker container run --rm -d alpine:3.14 sleep 300


`sudo docker stop <nome-do-container>`  Para forçar a parada de execução do container 

`docker system prune -af` apaga todas as imagens do docker



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