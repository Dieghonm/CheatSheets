# Docker

```bash

*INSTALAÇÂO*

1. Desinstalar versões anteriores:
sudo apt-get remove docker* containerd runc

2. Instalar pacotes necessários:
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release

3. Adicionar chave GPG oficial do repositório do Docker:
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

4. Adicionar repositório oficial do Docker no apt:
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

5. Atualizar pacotes:
sudo apt-get update

6. Instalar Docker:
sudo apt-get install docker-ce docker-ce-cli containerd.io

7. Verificar a instalação:
sudo docker run hello-world

## USANDO DOCKER

- Baixar uma imagem do Docker Hub:
sudo docker pull nome_da_imagem

- Listar todas as imagens disponíveis:
sudo docker images

- Executar um contêiner a partir de uma imagem:
sudo docker run nome_da_imagem

- Listar todos os contêineres em execução:
sudo docker ps

- Listar todos os contêineres (incluindo os que estão parados):
sudo docker ps -a

- Parar um contêiner em execução:
sudo docker stop ID_do_Container

- Iniciar um contêiner parado:
sudo docker start ID_do_Container

- Remover um contêiner:
sudo docker rm ID_do_Container

- Remover uma imagem:
sudo docker rmi nome_da_imagem

## VOLUMES

- Criar um volume:
sudo docker volume create nome_do_volume

- Listar todos os volumes:
sudo docker volume ls

- Remover um volume:
sudo docker volume rm nome_do_volume

## NETWORKS

- Criar uma rede:
sudo docker network create nome_da_rede

- Listar todas as redes:
sudo docker network ls

- Remover uma rede:
sudo docker network rm nome_da_rede

## DOCUMENTAÇÃO DO DOCKER

Você pode encontrar a documentação oficial do Docker em: [https://docs.docker.com](https://docs.docker.com)

