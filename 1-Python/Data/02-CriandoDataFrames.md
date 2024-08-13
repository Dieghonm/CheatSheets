###  **Criação de DataFrames**

Um DataFrame é uma estrutura de dados bidimensional, similar a uma tabela em uma planilha ou a uma tabela em um banco de dados relacional, que é amplamente usada na análise de dados com a biblioteca Pandas em Python. Ele é composto de linhas e colunas, onde cada coluna pode conter um tipo de dado diferente, como números, strings, datas, etc.

Podemos utilizar o pandas para criar, ler e manipular DataFrames

#### 1 **A partir de Listas e Dicionários**

**Criação de DataFrame a partir de uma lista de listas:**
```python
import pandas as pd

# Lista de listas
data = [
    ['Alice', 25, 'Engenheira'],
    ['Bob', 30, 'Médico'],
    ['Charlie', 35, 'Professor']
]

# Criação do DataFrame
df = pd.DataFrame(data, columns=['Nome', 'Idade', 'Profissão'])

print(df)
```
*Explicação:*  
Aqui, criamos um DataFrame a partir de uma lista de listas. Cada sublista representa uma linha, e as colunas são nomeadas através do argumento `columns`.

**Criação de DataFrame a partir de um dicionário de listas:**
```python
import pandas as pd

# Dicionário de listas
data = {
    'Nome': ['Alice', 'Bob', 'Charlie'],
    'Idade': [25, 30, 35],
    'Profissão': ['Engenheira', 'Médico', 'Professor']
}

# Criação do DataFrame
df = pd.DataFrame(data)

print(df)
```
*Explicação:*  
Neste exemplo, usamos um dicionário onde as chaves representam os nomes das colunas e os valores são listas que representam os dados para cada coluna.

#### 2 **A partir de Arquivos CSV/Excel**

**Leitura de um arquivo CSV:**
```python
import pandas as pd

# Leitura de um arquivo CSV
df = pd.read_csv('dados.csv')

print(df.head())
```
*Explicação:*  
Aqui, utilizamos o método `read_csv()` para ler um arquivo CSV e criar um DataFrame a partir dos dados. O método `head()` exibe as primeiras 5 linhas do DataFrame.

**Leitura de um arquivo Excel:**
```python
import pandas as pd

# Leitura de um arquivo Excel
df = pd.read_excel('dados.xlsx', sheet_name='Planilha1')

print(df.head())
```
*Explicação:*  
Com `read_excel()`, podemos ler dados de uma planilha Excel. O argumento `sheet_name` especifica qual planilha deve ser lida, caso o arquivo tenha múltiplas planilhas.

#### 3 **A partir de Arrays NumPy**

**Criação de DataFrame a partir de um array NumPy:**
```python
import pandas as pd
import numpy as np

# Criação de um array NumPy
data = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

# Criação do DataFrame
df = pd.DataFrame(data, columns=['A', 'B', 'C'])

print(df)
```
*Explicação:*  
Neste exemplo, criamos um DataFrame a partir de um array NumPy. Assim como em listas, podemos definir os nomes das colunas com o argumento `columns`.

#### 4 **A partir de DataFrames Existentes**

**Subconjunto de um DataFrame:**
```python
import pandas as pd

# DataFrame inicial
data = {
    'Nome': ['Alice', 'Bob', 'Charlie', 'David'],
    'Idade': [25, 30, 35, 40],
    'Profissão': ['Engenheira', 'Médico', 'Professor', 'Advogado']
}
df = pd.DataFrame(data)

# Criação de um novo DataFrame com subconjunto de colunas
df_subset = df[['Nome', 'Profissão']]

print(df_subset)
```
*Explicação:*  
Podemos criar um novo DataFrame a partir de um subconjunto de colunas ou linhas de um DataFrame existente, facilitando a análise de partes específicas dos dados.

**Cópia de um DataFrame:**
```python
import pandas as pd

# DataFrame inicial
data = {
    'Nome': ['Alice', 'Bob', 'Charlie', 'David'],
    'Idade': [25, 30, 35, 40],
    'Profissão': ['Engenheira', 'Médico', 'Professor', 'Advogado']
}
df = pd.DataFrame(data)

# Cópia do DataFrame
df_copy = df.copy()

print(df_copy)
```
*Explicação:*  
Ao copiar um DataFrame com o método `.copy()`, criamos uma nova instância que é independente do DataFrame original. Isso é útil quando queremos fazer alterações sem afetar os dados originais.
