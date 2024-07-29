VSCode(Python)
O que é?

O VSCode é um editor de texto e possui uma excelente extensão para Python que pode ser instalada através da marketplace.

Para que serve?

O plugin de Python para VSCode fornece auto-complete, integração com os linters vistos anteriormente, também é uma ferramenta para depuração de código.

Como instalar

Abra o VS Code Quick Open (Ctrl+P), cole o comando a seguir e pressione enter.

Copiar
ext install ms-python.python
Após instalar a extensão, digite ctrl + shift + p, vá em Preferences: Open Settings (JSON) e acrescente as seguintes configurações.

Copiar
// ...
    "python.linting.enabled": true,
    "python.linting.flake8Enabled": true,
    "python.formatting.blackArgs": [
        "-l 79"
    ],
    "python.formatting.provider": "black",
// ...
Vamos verificar se deu tudo certo?

Abra um arquivo com extensão .py no VSCode e digite o código lista = [1,2,3]. Salve o arquivo e um aviso de erro deve acontecer.

Passando o mouse sobre a linha veremos que o erro é: missing whitespace after ','flake8(E231).

Para corrigir e testar se o nosso formatador está funcionando corretamente, digite ctrl + shift + i. Após salvar novamente o erro deve ter desaparecido. Caso isto não aconteça certifique que tenha feitos os passos anteriormente para instalação do flake8 e black.

antes de iniciar o python e necessario ativar o venv
python3 -m venv .venv && source .venv/bin/activate