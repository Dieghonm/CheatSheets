# Flake8
O que é?

Flake8 é um programa de linha de comando que verifica seu código e busca por erros ou formatações que não seguem o guia de estilo padrão do python, conhecido como PEP-8. Além disso também verifica a complexidade ciclamática do seu código.

Para que serve?

É muito comum cometermos alguns erros de sintaxe, principalmente quando ainda estamos nos familiarizando com uma linguagem nova. Assim como durante o nosso dia a dia podemos esquecer algum código não utilizado. Esta ferramenta vai analisar o seu código e procurar possíveis erros, evitando assim que só ocorram no momento em que o código for executado.

Esta ferramenta também aponta possíveis linhas que não estão seguindo o estilo de código definido para a linguagem python.

Outra coisa bem comum quando estamos escrevendo código é que uma parte dele começa a se tornar tão complexa que há n caminhos por onde seu algoritmo pode seguir. Normalmente isto indica que devemos modificar o código para torná-lo mais simples e legível. O Flake8 irá apontar qual parte do seu código está complexa e que deve ser modificada.

Esta ferramenta será integrada ao editor, dessa maneira, ao salvar o arquivo, teremos os erros encontrados apontados diretamente no mesmo.

Como instalar
O pacote flake8 pode ser instalado utilizando a ferramenta pip vista anteriormente. Vamos utilizar sudo neste caso para garantir que ela esteja disponível para todos os usuários do sistema operacional. Digite o comando abaixo:

Linux e MacOS

sudo python3 -m pip install flake8
No MacOS temos a opção de instalar o flake8 usando o Homebrew:

Caso não possua o Homebrew instalado em seu Mac, você pode instalá-lo com o comando abaixo:


/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
Agora é só instalar o flake8:


brew install flake8
Vamos verificar se deu tudo certo?

Digite o comando python3 -m flake8 --version.


python3 -m flake8 --version
A saída deverá ser similar a apresentada abaixo:

3.8.4 (mccabe: 0.6.1, pycodestyle: 2.6.0, pyflakes: 2.2.0)