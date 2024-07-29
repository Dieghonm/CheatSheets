# Tutorial: Funções `lambda` em Python

## Introdução

Funções `lambda`, também conhecidas como funções anônimas, são funções pequenas e simples que podem ter qualquer número de argumentos, mas só podem ter uma expressão. Elas são úteis para tarefas simples e de curta duração, onde a definição de uma função completa seria excessiva.

### **Sintaxe Básica**

```python
lambda argumentos: expressão
```

- **`lambda`**: Palavra-chave que define uma função `lambda`.
- **`argumentos`**: Entrada(s) para a função `lambda`, separadas por vírgulas.
- **`expressão`**: Operação ou cálculo que será executado e retornado.

### **Exemplo Simples**

Vamos criar uma função `lambda` que adiciona 10 a um número.

```python
# Definindo a função lambda
adicionar_10 = lambda x: x + 10

# Usando a função lambda
print(adicionar_10(5))  # Saída: 15
```

## Aplicações Comuns

### **1. Com Funções de Alta Ordem**

Funções `lambda` são frequentemente usadas com funções de alta ordem, como `map()`, `filter()`, e `sorted()`.

#### **Exemplo com `map()`**

Aplica uma função a cada item em uma lista.

```python
numeros = [1, 2, 3, 4]
quadrados = map(lambda x: x**2, numeros)
print(list(quadrados))  # Saída: [1, 4, 9, 16]
```

#### **Exemplo com `filter()`**

Filtra itens em uma lista com base em uma função.

```python
numeros = [1, 2, 3, 4, 5]
pares = filter(lambda x: x % 2 == 0, numeros)
print(list(pares))  # Saída: [2, 4]
```

#### **Exemplo com `sorted()`**

Ordena uma lista de dicionários por um campo específico.

```python
pessoas = [{'nome': 'Ana', 'idade': 25}, {'nome': 'João', 'idade': 30}]
pessoas_ordenadas = sorted(pessoas, key=lambda x: x['idade'])
print(pessoas_ordenadas)
# Saída: [{'nome': 'Ana', 'idade': 25}, {'nome': 'João', 'idade': 30}]
```

### **2. Combinando com `reduce()`**

Comprime uma lista de valores em um único valor.

```python
from functools import reduce

numeros = [1, 2, 3, 4]
soma = reduce(lambda x, y: x + y, numeros)
print(soma)  # Saída: 10
```

### **3. Ordenação Customizada**

Ordenar listas com critérios personalizados.

```python
palavras = ["banana", "maçã", "laranja"]
ordenadas = sorted(palavras, key=lambda x: len(x))
print(ordenadas)  # Saída: ['maçã', 'banana', 'laranja']
```

## Vantagens e Limitações

### **Vantagens**

- **Sintaxe Concisa**: Compacta e direta para funções simples.
- **Uso Temporário**: Ideal para funções que são usadas uma vez.
- **Melhora a Leitura**: Quando usada adequadamente, pode tornar o código mais legível.

### **Limitações**

- **Expressividade**: Só podem ter uma expressão, o que limita a complexidade.
- **Depuração**: Mais difícil de depurar e nomear comparado às funções nomeadas.

## Comparação com Funções Normais

### **Função `lambda`**

```python
dobro = lambda x: x * 2
print(dobro(5))  # Saída: 10
```

### **Função Normal**

```python
def dobro(x):
    return x * 2

print(dobro(5))  # Saída: 10
```

Ambas as abordagens produzem o mesmo resultado, mas a função `lambda` é mais compacta.

## Boas Práticas

- **Legibilidade**: Use `lambda` para funções simples e curtas.
- **Clareza**: Para lógica mais complexa, prefira funções nomeadas para melhorar a clareza do código.

---

### **Conclusão**

Funções `lambda` são uma ferramenta poderosa e concisa para situações onde uma função rápida e anônima é apropriada. Elas são especialmente úteis com funções de alta ordem e para transformar ou filtrar dados de forma simples e direta.