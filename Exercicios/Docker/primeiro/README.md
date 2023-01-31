`sudo docker images` - verifica se tem alguma imagem docker no pc
`sudo docker build -t meu-servidor-web .` - roda o Dockerfile baixando a imagem e bildando o app
`sudo docker run --rm -d -p 1234:80 --name meu-container meu-servidor-web` faz o mapeamento da porta 1234 do nosso computador para a porta 80
`sudo docker rm -f meu-container` - remover o container
`sudo docker system prune -af` limpa o Docker
``