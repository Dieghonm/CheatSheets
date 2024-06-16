# Iniciando com PYTHON

Abra um terminal no Ubuntu (você pode pressionar Ctrl + Alt + T para abrir o Terminal).

no terminal digite "python3" para verificar a instalação do python e sua verção
Este comanto ira abrir o terminalinterativo. nele podemos usar codigo python diretamente como 

```py
print("Olá Mundo")
import antigravity
2+2
3-2
2/2
3//2
2*2
2**10

```

agora crie um arquivo para o projeto com a extenção .py
Antes de escrever nosso primeiro arquivo, precisamos saber que todo arquivo com extensão .py é considerado um módulo.

Módulos são declarados utilizando snake case, ou seja, com nomes minúsculos e quando possuírem mais de uma palavra, devem ser separadas por underscore (_).

para rodar abra o terminal e digite 'python3 [nome].py' onde [nome] deve ser trocado pelo nome do arquivo a ser executado

antes de iniciar o python e necessario ativar o venv(python3 -m venv .venv && source .venv/bin/activate)


**Dados**

assim como nas outras linguagens o Python tambem tem suas estruturas de dados.

*lista/array*
```py
fruits = ["laranja", "maçã", "uva", "abacaxi"]  # elementos são definidos separados por vírgula, envolvidos por colchetes

fruits[0]  # o acesso é feito por índices iniciados em 0

fruits[-1]  # o acesso também pode ser negativo

fruits.append("banana")  # adicionando uma nova fruta

fruits.remove("abacaxi")  # removendo uma fruta

fruits.extend(["pera", "melão", "kiwi"])  # acrescenta uma lista de frutas a lista original

fruits.index("maçã")  # retorna o índice onde a fruta está localizada, neste caso, 1

fruits.sort()  # ordena a lista de frutas
```

*Tupla*
São similares a listas, porém não podem ser modificados durante a execução do programa.

```py
user = ("Will", "Marcondes", 42)  # elementos são definidos separados por vírgula, envolvidos por parênteses

user[0]  # acesso também por índices
```

*Conjuntos (set)*
Um conjunto é uma coleção de elementos únicos e não ordenados. Conjuntos implementam operações de união, intersecção e outras.



```py
permissions = {"member", "group"}  # elementos separados por vírgula, envolvidos por chaves

permissions.add("root")  # adiciona um novo elemento ao conjunto

permissions.add("member")  # como o elemento já existe, nenhum novo item é adicionado ao conjunto

permissions.union({"user"})  # retorna um conjunto resultado da união

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos
```

Os conjuntos tambem podem ser imutaver, fazemod isso adcionando frozenset antes de sua declaração 

```py
permissions = frozenset(["member", "group"])  # assim como o set, qualquer estrutura iterável pode ser utilizada para criar um frozenset

permissions.union({"user"})  # novos conjuntos imutáveis podem ser criados à partir do original, mas o mesmo não pode ser modificado

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos

```

*Dicionários (dict)/ objeto*

Estrutura que associa uma chave a um determinado valor. É a representação do tão famoso objeto que utilizamos em JavaScript.

```py
people_by_id = {1: "Maria", 2: "Fernanda", 3: "Felipe"}  # elementos no formato "chave: valor" separados por vírgula, envolvidos por chaves

people_by_name = {"Maria": 1, "Fernanda": 2, "Felipe": 3}  # outro exemplo, dessa vez usando strings como chaves. As aspas são necessárias para que o Python não ache que `Maria`, `Fernanda` e `Felipe` sejam variáveis.

# elementos são acessados por suas chaves
people_by_id[1]  # saída: Maria

# elementos podem ser removidos com a palavra chave del
del people_by_id[1]
people_by_id.items()  # dict_items([(1, "Maria"), (2, "Fernanda"), (3, "Felipe")])
# um conjunto é retornado com tuplas contendo chaves e valores
```

*Range (range)*

Estrutura capaz de gerar uma sequência numérica de um valor inicial até um valor final, modificando seu valor de acordo com o passo (step) definido. Pode ser declarado como range( [start], [stop], [step] ), em que start e step podem ser omitidos, possuindo valores iniciais iguais a 0 e 1 respectivamente.

Anota aí ✏️: O stop não é incluído na sequência, portanto, caso queira uma sequência de 1 até 10 a chamada deverá ser range(1, 11)

Seus valores são criados à medida que esta sequência é percorrida.

```py
# vamos converter o range em uma lista para ajudar na visualização

# definimos somente o valor de parada
list(range(5))  # saída: [0, 1, 2, 3, 4]

# definimos o valor inicial e o de parada
list(range(1, 6))  # saída: [1, 2, 3, 4, 5]

# definimos valor inicial, de parada e modificamos o passo para 2
list(range(1, 11, 2))  # saída: [1, 3, 5, 7, 9]

# podemos utilizar valores negativos para as entradas também
list(range(10, 0, -1))  # saída: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```
**Estruturas de repetição**

*if/elif/else*

```py
position = ""
if salary <= 2000:
    position = "estagiário"
elif 2000 < salary <= 5800:
    position = "júnior"
elif 5800 < salary <= 7500:
    position = "pleno"
elif 7500 < salary <= 10500:
    position = "senior"
else:
    position = "líder"
```


*for*

```py
for restaurant in restaurants:
    ...
```

*while*

```py
n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next
```

*enumerate*

gera uma tupla com os dados de um array

```py
languages = ['Python', 'Java', 'JavaScript']

enumerate_prime = enumerate(languages)

# converte um objeto enumerate em uma lista
print(list(enumerate_prime))

# Saída: [(0, 'Python'), (1, 'Java'), (2, 'JavaScript')]
```

**funçoes**

```py
def soma(x, y):
    return x + y

print(soma(2, 2))
```

**Metodos**

*all*
a função all verifica se todos os elementos de um array satisfazem alguma função

```py
num = [0,1,2,3,4,5]
all(num > 3)
```

*any*
a função any verifica se algum dos elementos de um array satisfaz alguma função

```py
num = [0,1,2,3,4,5]
any(num = 3)
```
*enumerate*

A função enumerate vai trazer cada elemento do array com o seu indice.
```py
num = [0,1,2,3,4,5]
enumerate(num)
```
*max* traz o maior elemento de uma lista ou array
*min* traz o menor elemento de uma lista ou array
*len* traz o tamanho da lista ou array


*Counter* agrupa os elementos iguais de um array dando a quantidade de repetiçoes em um dicionario

*input* utilizado para dar entrada com algum dado no programa, por parte do usuario.

```py
import random

random_number = random.randint(1, 10)  # escolhe um número aleatório entre 1 e 10
guess = ""

while guess != random_number:  # enquanto não adivinhar o número
    guess = int(input("Qual o seu palpite? "))  # pergunte a pessoa usuária um número

print("O número sorteado era: ", guess)
```

*print* utilizado para enviar mensagens/saidas para o terminal
```py
print("Maria", "João", "Miguel", "Ana")
```
**Desempacotamento de Valores**

O desempacotamento de valores é um recurso muito útil de Python quando queremos separar os valores recebidos em variáveis diferentes. Quando há uma atribuição múltipla e o valor da direita pode ser percorrido, o Python entende que deve atribuir cada um dos valores a uma variável da esquerda, seguindo a ordem. Vejamos no exemplo abaixo:

```py
a, b = "cd"
print(a)  # saída: c
print(b)  # saída: d

head, *tail = (1, 2, 3) # Quando um * está presente no desempacotamento, os valores são desempacotados em formato de lista.
print(head)  # saída: 1
print(tail)  # saída: [2, 3]
```


