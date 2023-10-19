**Docker comands**

```bash

## Inicie o Daemon do Docker

O Daemon é um serviço que fica em segundo plano, sempre em execução e aguardando comandos feitos por meio do CLI. Para garantir que o serviço esteja disponível sempre, mesmo após reinicializações, siga estes passos:

1. Consultar o status atual do daemon do Docker:
sudo systemctl status docker

Caso o parâmetro Active esteja como stop/waiting ou, no nosso caso, como inactive, execute o comando start para iniciá-lo:
sudo systemctl start docker

Ao consultar o status novamente, o processo deverá estar como start/running/active.

Agora, vamos habilitar o daemon do Docker para iniciar durante o boot:
sudo systemctl enable docker

## Valide a instalação

Para verificar se a instalação foi concluída com sucesso, execute o tão esperado hello world do Docker:
sudo docker run hello-world

*Registry*

Registry é um local onde podemos enviar e baixar imagens Docker.

Docker Hub: a própria Docker Inc. oferece um serviço de registry público. Você pode acessá-lo em [https://hub.docker.com/](https://hub.docker.com/)

Quay Container Registry: a empresa Red Hat também oferece um serviço semelhante. Você pode acessá-lo em [https://quay.io/](https://quay.io/)

## Comandos básicos do Docker

- Visualizar todas as imagens Docker presentes em sua máquina:
sudo docker images

Ao tentar executar um container com uma imagem específica e essa imagem não estiver presente em sua máquina, o Docker, por padrão, tentará obter a imagem através do Docker Hub. Veja um exemplo de saída do comando em uma máquina sem nenhuma imagem:

- Listar todos os containers em execução neste momento em sua máquina:
sudo docker ps

- Visualizar todos os containers atuais, incluindo os que estão em execução e os que estão parados:
sudo docker ps -a

- Parar a execução de todos os serviços do Compose:
docker-compose down

- Subir apenas parte dos serviços:
docker-compose up <serviço>

## Executando um novo container

Utilize o comando docker container run <flags>? <imagem>:<tag> <argumentos>? para executar um container utilizando a imagem identificada por <imagem>:<tag>.

Os parâmetros <flags>? e <argumentos>? são opcionais (o que é sinalizado pelo uso de ?).

- Remover os containers:
sudo docker rm <nome-do-container>

Um container só pode ser removido com o comando docker rm <nome-do-container> se ele estiver parado ou tiver sua execução terminada.

- Remover todos os containers inativos do seu computador:
sudo docker container prune

## Modo "segundo plano"

A flag -d ou --detach faz com que a execução do container ocorra em segundo plano, ou seja, embora não esteja visível, o container executará de forma assíncrona. Essa opção é interessante quando o programa a ser executado é um servidor ou algum processo que você sabe previamente que terá uma execução demorada.

Veja abaixo a saída ao executar um container no modo detached. Neste exemplo, trocamos o argumento echo pela execução do programa sleep, que fará com que o container continue sua execução por 300 segundos (5 minutos):

docker container run --rm -d alpine:3.14 sleep 300

- Para forçar a parada de execução do container:
sudo docker stop <nome-do-container>

- Apagar todas as imagens do Docker:
docker system prune -af

- Para ver os logs:
docker-compose logs <nome-do-serviço>
