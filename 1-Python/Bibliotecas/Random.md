# Biblioteca `random` em Python

A biblioteca `random` é amplamente usada para gerar números aleatórios em Python. Ela oferece várias funções para trabalhar com aleatoriedade. 

## Gerando Números Aleatórios

1. **Números Inteiros Aleatórios:** Você pode gerar números inteiros aleatórios em um intervalo específico usando `randint()`.

```python
import random

# Gerando um número inteiro aleatório entre 1 e 10
numero_aleatorio = random.randint(1, 10)
print(numero_aleatorio)
```

2. **Números de Ponto Flutuante Aleatórios:** Para gerar números de ponto flutuante aleatórios entre 0 e 1, você pode usar `random()`.

```python
import random

# Gerando um número de ponto flutuante aleatório entre 0 e 1
numero_aleatorio = random.random()
print(numero_aleatorio)
```

3. **Números de Ponto Flutuante Aleatórios em um Intervalo Personalizado:** Use `uniform()` para gerar números de ponto flutuante em um intervalo específico.

```python
import random

# Gerando um número de ponto flutuante aleatório entre 2.5 e 5.5
numero_aleatorio = random.uniform(2.5, 5.5)
print(numero_aleatorio)
```

## Escolhendo Elementos Aleatórios

4. **Escolhendo um Elemento Aleatório de uma Sequência:** Você pode usar `choice()` para escolher um elemento aleatório de uma sequência (por exemplo, uma lista).

```python
import random

minha_lista = [1, 2, 3, 4, 5]
elemento_aleatorio = random.choice(minha_lista)
print(elemento_aleatorio)
```

5. **Embaralhando uma Sequência:** Use `shuffle()` para embaralhar os elementos de uma sequência.

```python
import random

minha_lista = [1, 2, 3, 4, 5]
random.shuffle(minha_lista)
print(minha_lista)
```

## Gerando Sequências Aleatórias

6. **Gerando uma Sequência Aleatória de Inteiros Únicos:** Para gerar uma sequência de inteiros únicos aleatórios em um intervalo específico, você pode usar `sample()`.

```python
import random

# Gerando uma sequência de 3 inteiros únicos aleatórios entre 1 e 10
sequencia_aleatoria = random.sample(range(1, 11), 3)
print(sequencia_aleatoria)
```
- `random()`: Gera um número de ponto flutuante no intervalo [0.0, 1.0).
- `uniform(a, b)`: Gera um número de ponto flutuante N no intervalo [a, b], onde a ≤ N < b.
- `gauss(mu, sigma)`: Gera um número com uma distribuição gaussiana. `mu` é a média e `sigma` é o desvio padrão.
- `normalvariate(mu, sigma)`: Gera um número com uma distribuição gaussiana. `mu` é a média e `sigma` é o desvio padrão.
- `randrange(stop)`: Gera um elemento aleatório em um intervalo de `range(start, stop, step)`, mas sem criar um objeto `range`.
- `randrange(start, stop, [step])`: Permite especificar um `start` e um `stop`, bem como um `step` opcional para a faixa de valores possíveis.
- `randint(a, b)`: Gera um número inteiro N no intervalo [a, b], onde a ≤ N ≤ b.
- `choice(seq)`: Escolhe aleatoriamente um elemento de uma sequência não vazia `seq`.
- `shuffle(x[, random])`: Embaralha os elementos da sequência `x` no lugar.
- `sample(pop, k)`: Cria uma sequência de tamanho `k` de elementos selecionados da população `pop`, sem repetição. É útil para amostragem sem substituição.
