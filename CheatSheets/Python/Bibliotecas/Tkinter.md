# Criando Interfaces Gráficas com `tkinter` em Python

`tkinter` é uma biblioteca padrão do Python para criação de interfaces gráficas. Ela fornece as ferramentas necessárias para criar janelas, botões, campos de entrada e outros elementos gráficos para interagir com os usuários.

## Instalação do `tkinter`

O `tkinter` é parte da biblioteca padrão do Python, o que significa que você não precisa instalá-lo separadamente. No entanto, você precisa importá-lo em seu código:

```python
import tkinter as tk
```

## Criando uma Janela

Para criar uma janela, você precisa instanciar a classe `Tk`:

```python
janela = tk.Tk()
```

## Adicionando Widgets (Elementos Gráficos)

Agora, você pode adicionar widgets à sua janela. Por exemplo, para adicionar um botão:

```python
botao = tk.Button(janela, text="Clique em mim")
```

## Exibindo Widgets

Depois de criar um widget, você precisa exibi-lo na janela. Use o método `pack()` ou `grid()` para isso. Aqui, usaremos `pack()`:

```python
botao.pack()
```

## Definindo Funções para Eventos

Agora, você pode definir funções para serem executadas quando os eventos ocorrerem. No exemplo a seguir, a função `acao_botao()` será chamada quando o botão for clicado:

```python
def acao_botao():
    print("Botão clicado!")

botao = tk.Button(janela, text="Clique em mim", command=acao_botao)
```

## Iniciar o Loop Principal

Para que sua janela seja exibida e interativa, você precisa iniciar o loop principal:

```python
janela.mainloop()
```

## Janela Completa

Aqui está o código completo para uma janela simples com um botão:

```python
import tkinter as tk

def acao_botao():
    print("Botão clicado!")

janela = tk.Tk()
botao = tk.Button(janela, text="Clique em mim", command=acao_botao)
botao.pack()
janela.mainloop()
```