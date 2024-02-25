# Tutorial Básico de Kivy

O Kivy é uma biblioteca de código aberto em Python para o desenvolvimento de aplicativos multiplataforma com interfaces de usuário (UI) bonitas e dinâmicas. Ele permite criar aplicativos para desktop, mobile e outras plataformas, com uma única base de código.

Neste tutorial, vamos cobrir os conceitos básicos de como começar a usar o Kivy para criar aplicativos simples.

## Instalação

Antes de começar, você precisa instalar o Kivy em seu sistema. Você pode fazer isso usando o pip, o gerenciador de pacotes do Python. Abra o terminal e execute o seguinte comando:

```bash
pip install kivy
```

Certifique-se de que o pip está instalado e configurado corretamente em seu sistema.

## Criando um Aplicativo Simples

Vamos começar criando um aplicativo simples "Hello, World!" usando o Kivy. Crie um arquivo chamado `main.py` e adicione o seguinte código:

```python
import kivy
from kivy.app import App
from kivy.uix.label import Label

class HelloWorldApp(App):
    def build(self):
        return Label(text='Hello, World!')

if __name__ == '__main__':
    HelloWorldApp().run()
```

Este código cria uma classe `HelloWorldApp` que herda de `App` e substitui o método `build()` para retornar um rótulo com o texto "Hello, World!". O método `run()` inicia a aplicação.

## Executando o Aplicativo

Para executar o aplicativo, basta executar o script `main.py`:

```bash
python main.py
```

Você deve ver uma janela com a mensagem "Hello, World!" exibida.

## Conclusão

Este foi um tutorial básico de introdução ao Kivy. Com o Kivy, você pode criar facilmente aplicativos multiplataforma com interfaces de usuário bonitas e dinâmicas usando Python. Este tutorial apenas arranha a superfície do que é possível com o Kivy, então sinta-se à vontade para explorar mais recursos e funcionalidades conforme você avança em seus projetos.

