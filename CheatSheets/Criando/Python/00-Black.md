Black
O que é?

O black é um formatador automático de código, ele irá modificar o seu código seguindo o guia de estilo do Python. Iremos configurá-lo junto ao nosso editor para que a formatação seja feita através de um atalho do teclado como shift + ctrl + i no Linux, ou Shift + Option + F no MacOS.

Para que serve?

O black é um formatador automático de código, ele irá modificar o seu código seguindo o guia de estilo do Python. Iremos configurá-lo junto ao nosso editor para que a formatação seja feita através de um atalho do teclado como shift + ctrl + i.

Como instalar
O pacote black pode ser instalado utilizando a ferramenta pip vista anteriormente. Vamos utilizar sudo neste caso para garantir que ela esteja disponível para todos os usuários do sistema operacional. Digite o comando abaixo:

Copiar
sudo python3 -m pip install black
No MacOS também podemos instalar o black usando o Homebrew:

Copiar
brew install black
Vamos verificar se deu tudo certo?

Digite o comando python3 -m black --version.

Copiar
python3 -m black --version
A saída deverá ser similar a apresentada abaixo:

Copiar
__main__.py, version 20.8b1