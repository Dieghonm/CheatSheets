# Pip
O que é?

Pip é o gerenciador de pacotes do python. É um cliente de linha de comandos utilizado para controle das dependências do projeto.

Para que serve?

Utilizaremos o pip para controlar a versão das bibliotecas utilizadas para desenvolvimento do sistema. O pip nos permite baixar uma versão específica de uma biblioteca como por exemplo python3 -m pip install fastapi==0.43.0.

Como instalar

Esta ferramenta não vem por padrão no sistema operacional Ubuntu e pode ser instalada utilizando o comando sudo apt install python3-pip.

Vamos verificar se deu tudo certo?

Abra um terminal e digite python3 -m pip --version.

python3 -m pip --version


A saída deverá ser similar a apresentada abaixo:


pip 19.2.3 from /usr/lib/python3.8/site-packages (python 3.8)