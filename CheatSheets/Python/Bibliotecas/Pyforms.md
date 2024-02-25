# Tutorial Básico de Pyforms

O Pyforms é uma estrutura Python para criar interfaces de usuário (UI) desktop de forma rápida e eficiente. Ele oferece uma abordagem simples e elegante para criar aplicativos desktop com interfaces gráficas de usuário.

Neste tutorial, vamos cobrir os conceitos básicos de como começar a usar o Pyforms para criar aplicativos desktop simples.

## Instalação

Antes de começar, você precisa instalar o Pyforms em seu sistema. Você pode fazer isso usando o pip, o gerenciador de pacotes do Python. Abra o terminal e execute o seguinte comando:

```bash
pip install pyforms
```

Certifique-se de que o pip está instalado e configurado corretamente em seu sistema.

## Criando um Aplicativo Simples

Vamos começar criando um aplicativo simples "Hello, World!" usando o Pyforms. Crie um arquivo chamado `main.py` e adicione o seguinte código:

```python
from pyforms import BaseWidget
from pyforms.controls import ControlText

class HelloWorldApp(BaseWidget):

    def __init__(self):
        super().__init__('Hello, World')

        # Adicione um controle de texto
        self._text = ControlText('Message')

# Execute o aplicativo
if __name__ == "__main__":
    app = HelloWorldApp()
    app.show()
```

Este código cria uma classe `HelloWorldApp` que herda de `BaseWidget`. Dentro do construtor `__init__()`, criamos um controle de texto usando `ControlText`. O método `show()` exibe a janela do aplicativo.

## Executando o Aplicativo

Para executar o aplicativo, basta executar o script `main.py`:

```bash
python main.py
```

Você deve ver uma janela com um campo de texto onde você pode digitar uma mensagem.

## Conclusão

Este foi um tutorial básico de introdução ao Pyforms. Com o Pyforms, você pode criar facilmente aplicativos desktop com interfaces gráficas de usuário usando Python. Este tutorial apenas arranha a superfície do que é possível com o Pyforms, então sinta-se à vontade para explorar mais recursos e funcionalidades conforme você avança em seus projetos.
