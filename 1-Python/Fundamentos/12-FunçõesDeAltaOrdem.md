# Tutorial: Funções de Alta Ordem em Python

## Introdução

Funções de alta ordem são um recurso poderoso em Python que permitem maior flexibilidade na manipulação de funções e dados. Elas são funções que:
1. Recebem outras funções como argumentos.
2. Retornam funções como resultado.

Essas funções são fundamentais para programação funcional e para escrever código mais conciso e reutilizável.

## Funções de Alta Ordem Comuns

### **1. `map()`**

Aplica uma função a cada item de uma lista (ou outra coleção) e retorna um objeto `map`.

#### **Sintaxe**

```python
map(funcao, iteravel)
```

- **`funcao`**: Função a ser aplicada a cada item.
- **`iteravel`**: Coleção de itens sobre os quais a função será aplicada.

#### **Exemplo**

```python
numeros = [1, 2, 3, 4]
quadrados = map(lambda x: x**2, numeros)
print(list(quadrados))  # Saída: [1, 4, 9, 16]
```

### **2. `filter()`**

Filtra itens em uma lista (ou outra coleção) com base em uma função que retorna `True` ou `False`.

#### **Sintaxe**

```python
filter(funcao, iteravel)
```

- **`funcao`**: Função que retorna `True` para itens a serem incluídos e `False` para itens a serem excluídos.
- **`iteravel`**: Coleção de itens a serem filtrados.

#### **Exemplo**

```python
numeros = [1, 2, 3, 4, 5]
pares = filter(lambda x: x % 2 == 0, numeros)
print(list(pares))  # Saída: [2, 4]
```

### **3. `reduce()`**

Aplica uma função cumulativa a itens em uma coleção, reduzindo-a a um único valor.

#### **Sintaxe**

```python
from functools import reduce
reduce(funcao, iteravel)
```

- **`funcao`**: Função que toma dois argumentos e retorna um único valor.
- **`iteravel`**: Coleção de itens a serem reduzidos.

#### **Exemplo**

```python
from functools import reduce

numeros = [1, 2, 3, 4]
soma = reduce(lambda x, y: x + y, numeros)
print(soma)  # Saída: 10
```

### **4. `sorted()`**

Ordena uma lista (ou outra coleção) com base em uma função de chave opcional.

#### **Sintaxe**

```python
sorted(iteravel, key=None, reverse=False)
```

- **`iteravel`**: Coleção de itens a serem ordenados.
- **`key`**: Função que serve como base para a ordenação.
- **`reverse`**: Booleano que indica se a ordenação deve ser em ordem reversa.

#### **Exemplo**

```python
pessoas = [{'nome': 'Ana', 'idade': 25}, {'nome': 'João', 'idade': 30}]
pessoas_ordenadas = sorted(pessoas, key=lambda x: x['idade'])
print(pessoas_ordenadas)
# Saída: [{'nome': 'Ana', 'idade': 25}, {'nome': 'João', 'idade': 30}]
```

## Aplicações Práticas

### **Transformar e Filtrar Dados**

#### **Transformar**

Use `map()` para transformar listas.

```python
precos = [100, 200, 300]
descontos = map(lambda x: x * 0.9, precos)
print(list(descontos))  # Saída: [90.0, 180.0, 270.0]
```

#### **Filtrar**

Use `filter()` para extrair itens que atendem a uma condição.

```python
idades = [15, 22, 18, 30, 10]
maiores_de_idade = filter(lambda x: x >= 18, idades)
print(list(maiores_de_idade))  # Saída: [22, 18, 30]
```

### **Combinar e Reduzir Dados**

Use `reduce()` para combinar valores em uma coleção.

```python
precos = [100, 200, 300]
total = reduce(lambda x, y: x + y, precos)
print(total)  # Saída: 600
```

### **Ordenar Dados**

Use `sorted()` para ordenar com base em critérios personalizados.

```python
palavras = ["banana", "maçã", "laranja"]
ordenadas = sorted(palavras, key=lambda x: len(x))
print(ordenadas)  # Saída: ['maçã', 'banana', 'laranja']
```

## Vantagens das Funções de Alta Ordem

- **Reutilização**: Reutilize funções em diferentes contextos.
- **Concisão**: Menos código para realizar operações complexas.
- **Expressividade**: Código mais próximo da intenção lógica.

## Conclusão

Funções de alta ordem em Python, como `map()`, `filter()`, `reduce()`, e `sorted()`, permitem transformar, filtrar, reduzir e ordenar dados de forma eficiente. Elas são fundamentais para a programação funcional e ajudam a escrever código mais claro e conciso.
