# Programação Orientada a Objetos (POO) em Python

A Programação Orientada a Objetos (POO) é um paradigma de programação que se baseia no conceito de "objetos". Em Python, quase tudo é um objeto, incluindo números, strings, listas e até mesmo funções. A POO em Python envolve a criação de classes e objetos para modelar e resolver problemas.

## Classes e Objetos

- **Classe**: Uma classe é um modelo que define as propriedades (atributos) e comportamentos (métodos) que seus objetos terão. Por exemplo, uma classe `Carro` pode ter atributos como cor, modelo e ano, e métodos como ligar e desligar o motor.

- **Objeto**: Um objeto é uma instância de uma classe. Ele é uma entidade real que possui atributos e pode realizar ações. Por exemplo, um objeto da classe `Carro` pode ser um carro vermelho de 2022.

## Definindo uma Classe

Em Python, você define uma classe usando a palavra-chave `class`. Aqui está um exemplo simples:

```python
class Carro:
    def __init__(self, cor, modelo, ano):
        self.cor = cor
        self.modelo = modelo
        self.ano = ano

    def ligar(self):
        print(f"O {self.modelo} está ligado.")

    def desligar(self):
        print(f"O {self.modelo} está desligado.")
```

- O método `__init__` é chamado de construtor e é usado para inicializar os atributos do objeto quando ele é criado.

- Os métodos `ligar` e `desligar` são ações que um objeto da classe `Carro` pode realizar.

## Criando Objetos

Para criar um objeto da classe `Carro`, você faz o seguinte:

```python
meu_carro = Carro("vermelho", "Sedan", 2022)
```

Aqui, `meu_carro` se torna um objeto da classe `Carro` com a cor "vermelho", modelo "Sedan" e ano 2022.

## Acessando Atributos e Chamando Métodos

Você pode acessar os atributos de um objeto usando a notação de ponto:

```python
print(meu_carro.cor)  # Saída: "vermelho"
```

E você pode chamar os métodos do objeto da mesma maneira:

```python
meu_carro.ligar()  # Saída: "O Sedan está ligado."
```

## Encapsulamento, Herança e Polimorfismo

Além disso, a POO oferece conceitos avançados como encapsulamento (proteção de atributos e métodos), herança (criação de novas classes com base em classes existentes) e polimorfismo (capacidade de objetos de diferentes classes responderem a métodos com o mesmo nome).

Esses conceitos são fundamentais para criar programas bem estruturados e reutilizáveis.


Ex:

```python
class Pessoa:
    def __init__(self, nome, ender):
        self.ender = None
        self.nome = None
        self.set_nome(nome)
        self.set_ender(ender)

    def set_nome(self, nome):
        self.nome = nome

    def set_ender(self, ender):
        self.ender = ender

    def get_nome(self):
        return self.nome

    def get_ender(self):
        return self.ender


pessoa1 = Pessoa('Diegho', 'rua 18 de outubro')
pessoa2 = Pessoa('Paula', 'rua conde')

print(pessoa2.get_ender
print(pessoa2.get_nome())
print(pessoa1.get_ender())
())
```


# Herança
Herança em Programação Orientada a Objetos (POO) envolve criar uma nova classe que é uma "versão especializada" de uma classe existente, geralmente adicionando ou substituindo funcionalidades.

ou seja se cria uma classe pai com atrubutos em comum de diversos filhos e a chamamos na criação destes filhos

Em Python, a herança é implementada simplesmente listando a superclasse entre parênteses na definição de classe da subclasse. Aqui está um exemplo:


```python
class Animal:
    def __init__(self, nome):
        self.nome = nome

    def fazer_barulho(self):
        pass

class Cachorro(Animal):
    def fazer_barulho(self):
        return "Au Au!"

class Gato(Animal):
    def fazer_barulho(self):
        return "Miau!"
```


# Polimorfismo

O Polimorfismo e à capacidade de objetos de diferentes classes serem tratados de maneira uniforme quando compartilham métodos ou atributos comuns. Em outras palavras, o polimorfismo permite que diferentes objetos possam responder ao mesmo método de maneira apropriada para o seu tipo, tornando o código mais flexível e extensível.


```python
class Cachorro:
    def falar(self):
        return "O cachorro late: Woof!"

class Gato:
    def falar(self):
        return "O gato mia: Meow!"

# Função que demonstra o polimorfismo
def fazer_animal_falar(animal):
    print(animal.falar())

# Criar objetos das classes Cachorro e Gato
rex = Cachorro()
whiskers = Gato()

# Chamar a função de polimorfismo com diferentes objetos
fazer_animal_falar(rex)
fazer_animal_falar(whiskers)
```

# Classes abstratas

Classes abstratas são classes em programação orientada a objetos (POO) que não podem ser instanciadas diretamente, ou seja, você não pode criar objetos a partir delas. Em vez disso, as classes abstratas são projetadas para serem usadas como superclasses (ou classes pai) de outras classes. Elas definem a estrutura e o comportamento que as classes filhas devem ter, mas não fornecem uma implementação completa para todos os métodos.

As classes abstratas são frequentemente usadas para estabelecer um contrato ou interface que outras classes devem seguir. Elas costumam conter um ou mais métodos abstratos, que são métodos que não têm uma implementação real na classe abstrata. Em vez disso, as classes filhas devem fornecer uma implementação para esses métodos abstratos.

Em muitas linguagens de programação orientada a objetos, como Python, Java e C#, as classes abstratas são definidas usando a palavra-chave `abstract`. No entanto, a sintaxe exata pode variar de uma linguagem para outra.

A principal finalidade das classes abstratas é fornecer um meio de definir um conjunto comum de métodos e atributos que outras classes podem herdar. Isso promove a reutilização de código e garante que as classes filhas sigam um padrão predefinido.

Aqui está um exemplo simples em Python de uma classe abstrata e sua classe filha:

```python
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def fazer_som(self):
        pass

class Cachorro(Animal):
    def fazer_som(self):
        return "Woof!"

class Gato(Animal):
    def fazer_som(self):
        return "Meow!"
```

Neste exemplo, a classe `Animal` é uma classe abstrata que define um método abstrato `fazer_som`. As classes `Cachorro` e `Gato` herdam de `Animal` e fornecem implementações concretas para o método `fazer_som`. Isso garante que todas as classes derivadas de `Animal` devem implementar o método `fazer_som`, seguindo o contrato estabelecido pela classe abstrata.


# Tratamento de exceções

O tratamento de exceções é um conceito fundamental na programação que permite que os desenvolvedores lidem com situações imprevisíveis ou excepcionais que podem ocorrer durante a execução de um programa. Exceções são eventos que ocorrem quando algo inesperado acontece, como um erro de divisão por zero, uma tentativa de acesso a um arquivo inexistente, uma conexão de rede perdida, entre outros.

O tratamento de exceções é importante por vários motivos:

1. **Resiliência do programa:** O tratamento de exceções ajuda a manter a estabilidade de um programa, permitindo que ele lide com erros de forma adequada, em vez de travar ou encerrar abruptamente quando algo inesperado acontece.

2. **Depuração:** O tratamento de exceções facilita a depuração, pois fornece informações úteis sobre o que deu errado. Isso ajuda os desenvolvedores a identificar e corrigir problemas com mais eficiência.

3. **Melhor experiência do usuário:** Em aplicativos interativos, o tratamento de exceções pode fornecer mensagens de erro amigáveis aos usuários, em vez de mensagens de erro técnicas que podem ser confusas.

Em muitas linguagens de programação, incluindo Python, o tratamento de exceções é feito com blocos `try`, `except`, `else` e `finally`. Aqui está uma visão geral de como funciona:

- `try`: Este bloco contém o código que pode gerar uma exceção. O código dentro do bloco `try` é monitorado quanto a exceções.

- `except`: Se uma exceção é lançada dentro do bloco `try`, o programa procura por um bloco `except` correspondente que pode lidar com essa exceção. Se uma correspondência é encontrada, o código dentro do bloco `except` é executado.

- `else` (opcional): Este bloco é executado se nenhum erro ocorrer dentro do bloco `try`. É usado para realizar ações adicionais quando não há exceções.

- `finally` (opcional): Este bloco é executado sempre, independentemente de ter ocorrido uma exceção ou não. É usado para ações de limpeza, como fechar arquivos ou liberar recursos.

Aqui está um exemplo simples em Python:

```python
try:
    num = int(input("Digite um número: "))
    resultado = 10 / num
except ZeroDivisionError:
    print("Você não pode dividir por zero.")
except ValueError:
    print("Você deve digitar um número válido.")
else:
    print(f"O resultado da divisão é: {resultado}")
finally:
    print("Fim do programa.")
```

Neste exemplo, o programa tenta dividir 10 por um número fornecido pelo usuário. Se o usuário digitar zero ou um valor não numérico, o programa lida com as exceções apropriadas. Se um número válido for fornecido, ele imprime o resultado da divisão. O bloco `finally` sempre será executado, independentemente das exceções.