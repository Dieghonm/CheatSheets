# Criando Interfaces Gráficas com `tkinter` em Python

`tkinter` é uma biblioteca padrão do Python para criação de interfaces gráficas. Ela fornece as ferramentas necessárias para criar janelas, botões, campos de entrada e outros elementos gráficos para interagir com os usuários.

para verificar se o Tkinter esta funcionando utilize o codigo

```python
import tkinter
tkinter._test()
```

Se tudo estiver configurado corretamente, você verá uma janela com dois botões. Se não, pode ser necessário instalar o pacote Tkinter ou atualizar o Python. Para instalar o Tkinter, você pode usar um gerenciador de pacotes Python como o pip:

```
pip install tk
```

Se estiver usando uma distribuição Linux, como o Ubuntu, pode ser necessário instalar o pacote Tkinter separadamente. Por exemplo, no Ubuntu, você pode instalar o pacote com o seguinte comando:

```
sudo apt-get install python3-tk
```


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

## Janela NÃO Dimensionável

```python
import tkinter as tk
janela = tk.Tk()
janela.title(" Aplicação GUI")
janela.mainloop()
```
```python
import tkinter as tk
janela = tk.Tk()
janela.title(" Aplicação GUI NÃO Dimensionável") 
janela.resizable(False, False)
janela.mainloop()
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

#### Componentes

### 1. Window (Janela)

A janela é a área principal onde você coloca todos os outros componentes da GUI. Para criar uma janela usando o tkinter, você pode usar a classe `Tk` da seguinte forma:

```python
import tkinter as tk

# Criar uma instância da janela
window = tk.Tk()

# Adicionar outros componentes aqui

# Exibir a janela
window.mainloop()
```

### 2. Label (Rótulo)

O rótulo é usado para exibir texto ou imagens na janela. Você pode criar um rótulo usando a classe `Label` da seguinte forma:

```python
label = tk.Label(window, text="Olá, mundo!")
label.pack()
```

### 3. Button (Botão)

O botão é usado para executar uma ação quando clicado. Você pode criar um botão usando a classe `Button` da seguinte forma:

```python
button = tk.Button(window, text="Clique Aqui", command=funcao)
button.pack()
```

### 4. Entry (Entrada)

A entrada é uma caixa de texto onde o usuário pode digitar texto. Você pode criar uma entrada usando a classe `Entry` da seguinte forma:

```python
entry = tk.Entry(window)
entry.pack()
```

### 5. Radiobutton (Botão de Rádio)

O botão de rádio permite ao usuário selecionar uma opção em um conjunto de opções. Você pode criar botões de rádio usando a classe `Radiobutton` da seguinte forma:

```python
radio = tk.Radiobutton(window, text="Opção 1", value=1, variable=var)
radio.pack()
```

### 6. Checkbox (Caixa de Seleção)

A caixa de seleção permite ao usuário selecionar uma ou mais opções em um conjunto de opções. Você pode criar caixas de seleção usando a classe `Checkbutton` da seguinte forma:

```python
checkbox = tk.Checkbutton(window, text="Opção 1", variable=var)
checkbox.pack()
```

### 7. Text (Texto)

O componente de texto é usado para exibir texto longo ou permitir que o usuário digite texto longo. Você pode criar um componente de texto usando a classe `Text` da seguinte forma:

```python
text = tk.Text(window)
text.pack()
```

### 8. Message (Mensagem)

A mensagem é semelhante ao rótulo, mas pode exibir texto em várias linhas. Você pode criar uma mensagem usando a classe `Message` da seguinte forma:

```python
message = tk.Message(window, text="Esta é uma mensagem.")
message.pack()
```

### 9. Sliders (Controles Deslizantes)

Os controles deslizantes permitem que o usuário selecione um valor de um intervalo. Você pode criar um controle deslizante usando a classe `Scale` da seguinte forma:

```python
slider = tk.Scale(window, from_=0, to=100, orient=tk.HORIZONTAL)
slider.pack()
```

### 10. Combobox (Caixa de Combinação)

A caixa de combinação permite que o usuário selecione uma opção em um menu suspenso. Você pode criar uma caixa de combinação usando a classe `Combobox` da seguinte forma:

```python
from tkinter.ttk import Combobox

combo = Combobox(window)
combo['values'] = ("Opção 1", "Opção 2", "Opção 3")
combo.pack()
```
