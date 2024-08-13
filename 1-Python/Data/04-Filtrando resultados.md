### **Estrutura de Filtros e Comparação em DataFrames**

Quando trabalhamos com DataFrames em Pandas, frequentemente precisamos filtrar e comparar dados para obter insights específicos. Vamos explorar como isso é feito com exemplos detalhados.

---

### **1. Exemplo de DataFrame**

Vamos criar um DataFrame de exemplo para trabalhar:

```python
import pandas as pd

# Criando um DataFrame de exemplo
dados = {
    'Categoria': ['Alimentos', 'Roupas', 'Alimentos', 'Eletrônicos', 'Roupas'],
    'Valor': [100, 200, 150, 300, 250],
    'Status': ['Vendido', 'Disponível', 'Vendido', 'Vendido', 'Disponível']
}
df = pd.DataFrame(dados)
```

Neste exemplo, temos um DataFrame chamado `df` com três colunas: `Categoria`, `Valor`, e `Status`.

---

### **2. Seleção de Coluna**

Para selecionar uma coluna do DataFrame, usamos a sintaxe de colchetes.

```python
# Selecionar a coluna 'Status'
coluna_status = df['Status']
print(coluna_status)
```

*Explicação*: `df['Status']` retorna uma `Series` contendo todos os valores da coluna `Status`.

---

### **3. Filtros com Comparação**

#### **3.1 Filtro Simples**

Vamos filtrar os registros onde a coluna `Status` é igual a `'Vendido'`.

```python
# Criar uma série booleana para a condição
filtro_vendido = df['Status'] == 'Vendido'

# Aplicar o filtro à coluna 'Status'
status_vendido = df['Status'][filtro_vendido]
print(status_vendido)
```

*Explicação*: `df['Status'] == 'Vendido'` cria uma série booleana onde cada valor é `True` se o status for `'Vendido'`. Aplicamos este filtro para obter uma `Series` com apenas os valores `'Vendido'`.

#### **3.2 Contagem de Valores Filtrados**

Agora, vamos contar quantos registros têm o status `'Vendido'`.

```python
# Contar o número de registros com status 'Vendido'
quantidade_vendido = df['Status'][filtro_vendido].count()
print("Número de registros com o status 'Vendido':", quantidade_vendido)
```

*Explicação*: `count()` conta o número de valores não nulos na `Series` filtrada.

---

### **4. Filtragem com Condições Múltiplas**

Você pode combinar múltiplas condições usando operadores lógicos.

```python
# Filtrar registros onde o status é 'Vendido' e o valor é maior que 150
filtro_combinado = (df['Status'] == 'Vendido') & (df['Valor'] > 150)
resultados_combinados = df[filtro_combinado]
print(resultados_combinados)
```

*Explicação*: `(df['Status'] == 'Vendido') & (df['Valor'] > 150)` combina duas condições usando o operador `&` (E). `df[filtro_combinado]` retorna as linhas que atendem ambas as condições.

---

### **5. Usando `.query()` para Filtragem**

A função `.query()` permite realizar filtros de forma mais legível usando uma string.

```python
# Usando .query() para filtrar registros com status 'Vendido'
resultados_query = df.query("Status == 'Vendido'")
print(resultados_query)
```

*Explicação*: A string `"Status == 'Vendido'"` é usada para filtrar as linhas onde o `Status` é `'Vendido'`. Isso pode ser mais legível e conveniente para filtros complexos.

---

### **6. Filtragem com `.loc[]`**

A função `.loc[]` é útil para filtrar linhas e selecionar colunas ao mesmo tempo.

```python
# Filtrar registros com status 'Vendido' e selecionar apenas as colunas 'Categoria' e 'Valor'
resultados_loc = df.loc[df['Status'] == 'Vendido', ['Categoria', 'Valor']]
print(resultados_loc)
```

*Explicação*: `df.loc[df['Status'] == 'Vendido', ['Categoria', 'Valor']]` filtra as linhas onde o status é `'Vendido'` e seleciona apenas as colunas `Categoria` e `Valor`.

---

### **7. Exemplos Adicionais**

#### **7.1 Filtro de Valores Únicos**

Vamos contar quantos valores únicos existem na coluna `Categoria`.

```python
# Contar o número de valores únicos na coluna 'Categoria'
num_categorias_unicas = df['Categoria'].nunique()
print("Número de Categorias Únicas:", num_categorias_unicas)
```

*Explicação*: `nunique()` retorna o número de valores únicos na coluna `Categoria`.

#### **7.2 Contagem de Valores Únicos**

Contar a frequência de cada valor na coluna `Status`.

```python
# Contagem de cada valor único na coluna 'Status'
contagem_status = df['Status'].value_counts()
print(contagem_status)
```

*Explicação*: `value_counts()` mostra quantas vezes cada valor aparece na coluna `Status`.

---

### **Resumo**

A filtragem e comparação de dados em um DataFrame com Pandas é fundamental para a análise eficiente de dados. Usar operadores de comparação, funções como `.count()`, `.query()`, e `.loc[]`, e combinar condições permite extrair informações relevantes e realizar análises detalhadas.