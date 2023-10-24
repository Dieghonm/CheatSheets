# Biblioteca `math` em Python

A biblioteca `math` é uma biblioteca padrão em Python que fornece uma ampla gama de funções matemáticas.

## Passo 1: Importando a Biblioteca `math`

Antes de usar as funções da biblioteca `math`, você precisa importá-la no seu código Python. A importação é feita da seguinte forma:

```python
import math
```

Após importar a biblioteca, você pode usar suas funções em todo o seu programa.

## Passo 2: Funções Matemáticas Básicas

A biblioteca `math` fornece uma variedade de funções matemáticas básicas. Aqui estão algumas das funções mais comuns:

### Calculando a Raiz Quadrada:

```python
import math
numero = 16
raiz_quadrada = math.sqrt(numero)
print(raiz_quadrada)  # Saída: 4.0
```

### Potenciação:

```python
import math
base = 2
expoente = 3
potencia = math.pow(base, expoente)
print(potencia)  # Saída: 8.0
```

### Valor Absoluto:

```python
import math
numero = -5
absoluto = math.fabs(numero)
print(absoluto)  # Saída: 5.0
```

## Passo 3: Funções Trigonométricas

A biblioteca `math` também fornece funções trigonométricas. Aqui estão alguns exemplos:

### Seno:

```python
import math
angulo = math.pi / 4  # 45 graus
seno = math.sin(angulo)
print(seno)  # Saída: 0.7071067811865475
```

### Cosseno:

```python
import math
angulo = math.pi / 3  # 60 graus
cosseno = math.cos(angulo)
print(cosseno)  # Saída: 0.5000000000000001
```

### Tangente:

```python
import math
angulo = math.pi / 6  # 30 graus
tangente = math.tan(angulo)
print(tangente)  # Saída: 0.5773502691896257
```

## Passo 4: Constantes Matemáticas

A biblioteca `math` também fornece constantes matemáticas, como π (pi) e 𝑒 (euler's number). Você pode acessá-las diretamente:

```python
import math
pi = math.pi
e = math.e
print(pi)  # Saída: 3.141592653589793
print(e)  # Saída: 2.718281828459045
```

- `sqrt(x)`: Calcula a raiz quadrada de x.
- `ceil(x)`: Retorna o menor inteiro maior ou igual a x.
- `floor(x)`: Retorna o maior inteiro menor ou igual a x.
- `cos(x)`: Calcula o cosseno de x.
- `sin(x)`: Calcula o seno de x.
- `log(x, b)`: Calcula o logaritmo de x na base b.
- `pi`: Valor de Pi (aproximadamente 3.141592...).
- `e`: Valor de e (aproximadamente 2.718281...).
