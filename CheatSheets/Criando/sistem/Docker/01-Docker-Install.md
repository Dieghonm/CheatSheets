# Docker

*INSTALAÇÂO*

desinstalar verções anteriores
``` sudo apt-get remove docker* containerd runc ```


Para habilitar a obtenção dos repositórios via HTTPS pelo apt-get, instale os pacotes listados abaixo. Nós precisamos disso para prosseguir a instalação:
```
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

Para adicionar a chave GPG* oficial do repositório do Docker, execute o comando a seguir:
``` curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg```

Para finalmente adicionar o repositório oficial do Docker no apt, execute o seguinte comando:
```
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
  | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```
```sudo apt-get update```

E finalmente instalar o Docker
```sudo apt-get install docker-ce docker-ce-cli containerd.io```

