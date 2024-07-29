### Introdução ao NumPy

NumPy (Numerical Python) é uma biblioteca fundamental para a computação científica em Python. Ela fornece suporte para arrays multidimensionais e matrizes, além de uma ampla coleção de funções matemáticas para operar com esses arrays.

### Instalando o NumPy

Se ainda não tiver o NumPy instalado, você pode instalá-lo usando o pip:

```bash
pip install numpy
```

### Importando o NumPy

Para começar a usar o NumPy, você precisa importá-lo. É comum importar o NumPy com o alias `np`:

```python
import numpy as np
```

### Criando Arrays

#### De uma lista

Você pode criar um array a partir de uma lista usando a função `np.array`:

```python
lista = [1, 2, 3, 4, 5]
array = np.array(lista)
print(array)
```

#### Arrays multidimensionais

Você também pode criar arrays multidimensionais:

```python
matriz = np.array([[1, 2, 3], [4, 5, 6]])
print(matriz)
```

#### Funções de criação de arrays

O NumPy fornece várias funções para criar arrays de forma rápida:

- `np.zeros`: Cria um array de zeros.
- `np.ones`: Cria um array de uns.
- `np.arange`: Cria um array com valores dentro de um intervalo especificado.
- `np.linspace`: Cria um array com um número especificado de valores espaçados uniformemente dentro de um intervalo.

Exemplos:

```python
zeros = np.zeros((2, 3))
print(zeros)

ones = np.ones((2, 3))
print(ones)

arange = np.arange(0, 10, 2)
print(arange)

linspace = np.linspace(0, 1, 5)
print(linspace)
```

### Operações com Arrays

#### Aritmética elementar

Você pode realizar operações aritméticas em arrays, e estas operações serão aplicadas elemento a elemento:

```python
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

print(a + b)
print(a - b)
print(a * b)
print(a / b)
```

#### Funções matemáticas

O NumPy possui muitas funções matemáticas:

```python
a = np.array([1, 2, 3])

print(np.sqrt(a))
print(np.exp(a))
print(np.sin(a))
```

### Indexação e Fatiamento

#### Indexação

Você pode acessar elementos de um array usando índices:

```python
a = np.array([1, 2, 3, 4, 5])
print(a[0])
print(a[4])
```

#### Fatiamento

Você pode acessar partes de um array usando fatiamento:

```python
a = np.array([1, 2, 3, 4, 5])
print(a[1:4])
print(a[:3])
print(a[2:])
```

### Manipulação de Formas

Você pode mudar a forma de um array usando a função `reshape`:

```python
a = np.arange(6)
print(a)

b = a.reshape((2, 3))
print(b)
```

### Funções Estatísticas

O NumPy fornece funções para calcular estatísticas simples em arrays:

```python
a = np.array([1, 2, 3, 4, 5])

print(np.mean(a))  # Média
print(np.std(a))   # Desvio padrão
print(np.sum(a))   # Soma
print(np.min(a))   # Valor mínimo
print(np.max(a))   # Valor máximo
```

### Broadcasting

O NumPy permite realizar operações em arrays de diferentes formas de maneira eficiente. Isso é chamado de broadcasting:

```python
a = np.array([1, 2, 3])
b = np.array([1])

print(a + b)
```

Neste exemplo, o array `b` é "ampliado" para a mesma forma que `a` para que a operação de adição possa ser realizada.
