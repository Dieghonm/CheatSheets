# Manipulação de dados

**Removendo Informações Desnecessárias com `strip`**

Ao lidar com dados provenientes de arquivos externos, é comum nos depararmos com informações indesejadas, como espaços em branco extras no início ou no final de uma string. Para solucionar essa questão, recorremos ao método `strip()` em Python.

O método `strip()` é uma ferramenta eficaz para limpar strings, pois elimina espaços em branco, tabulações e quebras de linha tanto no *início quanto no final da string*. Essa funcionalidade é especialmente útil quando buscamos manter a consistência e a integridade dos dados.

Vejamos um exemplo prático:

```python
# String com espaços extras no início e no final
string_com_espacos = "   Esta é uma string com espaços   "

# Aplicando o método strip para remover espaços em branco
string_limpa = string_com_espacos.strip()

# Exibindo os resultados
print("String original:", repr(string_com_espacos))
print("String limpa:", repr(string_limpa))

texto = "   Olá, Mundo!;  "
novo_texto = texto.strip(" ;")
print(novo_texto)

```

Neste exemplo, ao imprimir as strings original e limpa, é possível observar como o método `strip()` remove de maneira eficiente os espaços desnecessários, proporcionando dados mais legíveis e fáceis de manipular. Essa prática se revela valiosa ao lidar com dados provenientes de diversas fontes, preparando-os de forma eficaz para análises subsequentes.

ps: o strip() remove todos os caracteres que encontrar me seu argumento ate encontrar algum que nao esteja

```python
teste = '01 23 456987 435 654 a 123456789 a 231415235123'
print(teste.strip('0123456789 '))
```


**Dividindo Conteúdo: Método `split()`**

O método `split()` é uma ferramenta útil para dividir uma string em substrings, com base em um caractere específico, que pode ser um espaço em branco, uma vírgula, ou qualquer outro delimitador. Esse método retorna uma lista contendo as substrings resultantes da divisão.

Vamos exemplificar com um código simples:

```python
conteudo = "Python é uma linguagem de programação poderosa"
palavras = conteudo.split(" ")  # Dividindo a string nas ocorrências de espaço em branco
print(palavras)
```

Neste exemplo, a string "Python é uma linguagem de programação poderosa" será dividida sempre que houver um espaço em branco. O resultado será uma lista contendo as palavras individuais:

```
['Python', 'é', 'uma', 'linguagem', 'de', 'programação', 'poderosa']
```

Dessa forma, o método `split()` é valioso para processar e organizar dados presentes em strings, principalmente quando se lida com informações separadas por delimitadores específicos.


**Unindo Conteúdo: Método `join()`**

O método `join()` é utilizado para unir elementos de uma sequência, como uma lista de strings, em uma única string. Este método é especialmente útil quando se deseja construir uma string combinando vários elementos com um separador específico.

Vamos exemplificar o uso do método `join()`:

```python
palavras = ['Python', 'é', 'uma', 'linguagem', 'poderosa']
frase = " ".join(palavras)  # Unindo as palavras com um espaço em branco como separador
print(frase)
```

Neste exemplo, o método `join()` é aplicado à string que representa um espaço em branco, e a lista de palavras é unida para formar a frase completa:

```
Python é uma linguagem poderosa
```

O argumento passado para o método `join()` determina o separador que será inserido entre os elementos da sequência. Pode ser um espaço em branco, uma vírgula, ou qualquer outro caractere desejado.

Assim, o método `join()` é uma ferramenta eficaz para criar strings concatenadas a partir de elementos contidos em uma lista ou outra sequência.

