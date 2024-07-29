CodeRunner
O que é?

Extensão do VSCode que permite rodar códigos ou trechos de códigos em mais de 30 linguagens de programação e adicionar também comandos customizados.

Para que serve?

Rodar trechos de códigos ou o código inteiro sem sair do VSCode.

Como instalar
Abra o VS Code Quick Open (Ctrl+P), cole o comando a seguir e pressione enter.

Copiar
ext install formulahendry.code-runner
Após instalar a extensão, digite ctrl + shift + p, ou cmd + shift + p no MacOS, vá em Preferences: Open Settings (JSON) e acrescente as seguintes configurações.

Copiar
// ...

    "code-runner.executorMap": {
        "python": "python3 -u"
    },
    "code-runner.runInTerminal": true,

// ...
Esta configuração garante que nosso script será executado utilizando a versão 3 do Python.

Vamos verificar se deu tudo certo?

Escreva um pequeno código como print("Olá Mundo") e apertando ctrl + alt + N, ou ctrl+ opt +N no MacOS, o código será executado.

