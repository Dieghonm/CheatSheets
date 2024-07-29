# Tipos sequenciais e dicionários

*Tipos numéricos*
Existem três tipos numéricos distintos em Python. 
Números inteiros, Números de ponto flutuante, Números complexos

**O tipo int**
É o tipo usado para manipular números inteiros. Fazendo uma analogia com a Matemática, o tipo int é usado para elementos do conjunto dos inteiros (Z).

Diferentemente de outras linguagens, como C ou Java, a linguagem Python não limita o tamanho de uma variável de qualquer tipo, logo, não existe um valor inteiro máximo definido. O limite depende da quantidade de memória disponível no computador. Novamente, fazendo uso do prompt interativo do Python, veja algumas coisas interessantes.

[1_000_000]
Python permite que você utilize o underline (_) como separador de milhar. Isso ajuda a visualizar números com muitos dígitos. Para encerrarmos este primeiro contato com o tipo int, no emulador seguinte, digite print(type(1_000_000)), clique em Executar e verifique que o valor do exemplo anterior é um inteiro.

para converter valores para o tipo inteiro podemos utilizar o int()

int(3.9) = 3

**O tipo float**
É o tipo usado para manipular números com parte inteira e parte decimal, chamados de números de ponto flutuante. Fazendo uma analogia com a Matemática, o tipo float é usado para elementos do conjunto dos reais (R).

Para diferenciar um número real de um inteiro, é possível utilizar a parte decimal zerada. No emulador a seguir, digite print(type(50.0))

No emulador anterior, digite x = 50.0. Em seguida, digite y = 50,0, depois print(x) e por fim, print(y). Após isso, clique em Executar.

Ao usar a vírgula como separador em Python, o que ocorre, na verdade, é a criação de uma tupla de dois elementos, e não o tipo float.

Embora os tipos int e float sejam semelhantes, por tratarem de números, eles têm propriedades um pouco diferentes. Em expressões algébricas, sempre que somamos, subtraímos ou multiplicamos apenas elementos do tipo int, o resultado é int. Porém, basta um operando do tipo float para que o resultado seja float.

para converter valores para o tipo float podemos utilizar o float()

float(10) = 10.0


**O tipo complex**
É o tipo utilizado para manipular números complexos, na forma x + yj, sendo x a parte real e y a parte imaginária do complexo.

A chamada r.conjugate() retorna o conjugado do número complexo r, em que a parte real é mantida e a parte imaginária tem o seu sinal trocado.

para converter valores para o tipo complex podemos utilizar o complex()

complex(1) = (1+0j)


**O tipo bool**
Uma expressão algébrica, como vimos nos exemplos dos tipos int e float, é avaliada como um número, seja desses tipos ou de outro tipo numérico admitido em Python. Porém, utilizar expressões não algébricas também é bastante comum. E uma boa notícia é que Python pode avaliar expressões desse tipo também. Essa é uma diferença entre Python e outras linguagens, como C, por exemplo, em que não existe o tipo bool.

```py
2<3

```
res = True

para converter valores para o tipo bool podemos utilizar o bool()
bool(0) = False
bool(1) = True
bool(1234) = True

Agora, vamos ver o operador [not], que é um operador unário, ou seja, só precisa de um operando. Esse operador inverte o valor booleano, ou seja, se o valor original for True, not(valor) terá o valor False. E vice-versa.

No prompt interativo, digite a expressão not(2 < 3) e pressione [ENTER]. Ou, no emulador anterior, digite print(not(2 < 3)) e clique em Executar. Verifique que o resultado a ser obtido é o contrário do obtido anteriormente.


**Tipo string**

Assim como em C ou Java, a indexação dos itens é iniciada com 0 e cada item tem o seu índice incrementado uma unidade em relação ao item anterior. Porém, Python também permite a indexação com valores negativos. O valor -1 é o índice do último item, e cada item anterior é decrementado de uma unidade em relação ao sucessor, veja:

índice	          0	  1	   2	 3	 4
              	  t	   e	 s	 t	 e
índice negativo	 -5	 -4	  -3	-2	-1


*concatenar string*
existemduas formas de se concatenar strings
```python
nome = 'Diegho' 
sobrenome = 'Moraes' 
apresentacao = 'Olá, meu nome é ' + nome + ' ' + sobrenome + '.' print(apresentacao)
apresentacao = f'Olá, meu nome é {nome} {sobrenome}.' print(apresentacao)
```
print(nome[4]) = h
nome.find('h') = 4

Existem alguns métodos interessantes para tratar strings em Python. Entre eles, ressaltamos:

*Upper*
Transforma todas as letras em maiúsculas.
```python
 curso = 'Ensino a Distância'
 curso.upper()
'ENSINO A DISTÂNCIA'
```

*Lower*
Transforma todas as letras em minúsculas.
```python
 curso.lower()
'ensino a distância'
```

*Split*
Quebra a string em substrings.
```python
 curso.split()
['Ensino', 'a', 'Distância']
```

*replace*

nome.replace(antigo, novo) 
```python
nome = 'Diegho Moraes' 
print(nome.replace('Moraes',  'Neves'))

```



**Listas**
Listas são sequências mutáveis, normalmente usadas para armazenar coleções de itens homogêneos. Uma lista pode ser criada de algumas maneiras, tais como:

[]
Usando um par de colchetes para denotar uma lista vazia.

[a], [a, b, c]
Usando colchetes, separando os itens por vírgulas.

[x for x in iterable]
Usando a compreensão de lista.

list() ou list(iterable)
Usando o construtor do tipo list.

Iterable pode ser uma sequência, um container que suporte iteração ou um objeto iterador. Por exemplo, list('abc') retorna ['a', 'b', 'c'] e list( (1, 2, 3) ) retorna [1, 2, 3]. Se nenhum argumento for passado, o construtor cria uma lista vazia: [ ].


```python
juros = [0.05, 0.07, 0.02, 0.04, 0.08]

juros.insert(0, 0.10)   = [0.10, 0.05, 0.07, 0.02, 0.04, 0.08]

juros.append(0.09)   = [0.10, 0.05, 0.07, 0.02, 0.04, 0.08, 0.09] 

juros.remove(0.1)   = [0.05, 0.07, 0.02, 0.04, 0.08, 0.09] 

terceiro_juros = juros.pop(2)
print(terceiro_juros)   = 0,02
print(juros)      = [0.05, 0.07, 0.04, 0.08, 0.09] 
```

**Tuplas**
()
Usando um par de parênteses para denotar uma tupla vazia.

a, b, c ou (a, b, c)
Separando os itens por vírgulas.

tuple() ou tuple(iterable)
Usando o construtor do tipo tuple.

Novamente, iterable pode ser uma sequência, um container que suporte iteração ou um objeto iterador. Por exemplo, tuple('abc') retorna ('a', 'b', 'c') e tuple( [1, 2, 3] ) retorna (1, 2, 3). Se nenhum argumento for passado, o construtor cria uma tupla vazia: ().

Atenção!
Note que o uso das vírgulas é o que gera a tupla, e não o uso de parênteses. Os parênteses são opcionais, exceto no caso em que queremos gerar uma tupla vazia.


**Range**

O tipo range representa uma sequência imutável de números e frequentemente é usado em loops de um número específico de vezes, como o for.

Ele pode ser chamado de maneira simples, apenas com um argumento. Nesse caso, a sequência começará em 0 e será incrementada de uma unidade até o limite do parâmetro passado (exclusive). Por exemplo, range(3) cria a sequência (0, 1, 2).

Para que a sequência não comece em 0, podemos informar o início e o fim como parâmetros, lembrando que o parâmetro fim não entra na lista (exclusive o fim). O padrão é incrementar cada termo em uma unidade. Ou seja, a chamada range(2, 7) cria a sequência (2, 3, 4, 5, 6).


Saiba mais
Também é possível criar sequências mais complexas, indicando os parâmetros de início, fim e passo, nessa ordem. O passo é o valor que será incrementado de um termo para o próximo. Por exemplo, range(2, 9, 3) cria a sequência (2, 5, 8).


**Operadores sequenciais comuns**

A tabela a seguir traz um pequeno conjunto dos operadores disponíveis em Python para manipulação de sequências. Lembre-se de que você pode utilizar o utilitário help no Python Console para verificar a lista completa. Para isso, basta digitar help(str) e pressionar [ENTER] no teclado.

Uso	- Resultado
x in s	 -  True se x for um subconjunto de s
x not in s	-  False se x for um subconjunto de s
s + t	 -  Concatenação de s e t
n*s	-  Concatenação de n cópias de s
s[i]	-  Caractere de índice i em s
len(s)	-  Comprimento de s
min(s)	-  Menor item de s
max(s)	-  Maior item de s


**Dicionários**
Os dicionários permitem que itens de uma sequência recebam índices definidos pelo usuário. Um dicionário contém pares de (chave, valor). O formato geral de um objeto dicionário é:

{<chave 1>:<valor 1>, <chave 2>:<valor 2>, ..., <chave i>:<valor i>}
ou
dict(chave = valor)

*Atualizando Dicionários*
Usando Colchetes (obj[chave] = valor)
Os colchetes são a forma mais direta de adicionar ou atualizar um único par chave-valor em um dicionário.
Ideal para adicionar ou atualizar um único par chave-valor.

```python
dicionario = {'nome': 'Alice'}
dicionario['idade'] = 25
print(dicionario)  # Output: {'nome': 'Alice', 'idade': 25}
dicionario['idade'] = 26
print(dicionario)  # Output: {'nome': 'Alice', 'idade': 26}
```
Usando o Método .update()
O método .update() é útil para adicionar ou atualizar múltiplos pares chave-valor ao mesmo tempo. Ele pode receber um dicionário, uma lista de tuplas, ou argumentos nomeados.
Mais versátil para adicionar ou atualizar vários pares ao mesmo tempo.
Útil quando você tem múltiplos pares chave-valor em um dicionário ou lista de tuplas.

```python
dicionario = {'nome': 'Alice'}
novos_dados = {'idade': 25, 'cidade': 'São Paulo'}
dicionario.update(novos_dados)
print(dicionario)  # Output: {'nome': 'Alice', 'idade': 25, 'cidade': 'São Paulo'}
dicionario.update(idade=26, estado='São Paulo') 
print(dicionario)  # Output: {'nome': 'Alice', 'idade': 26, 'cidade': 'São Paulo', 'estado': 'São Paulo'}
```

