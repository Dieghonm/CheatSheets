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

print(pessoa1.get_nome())
print(pessoa2.get_nome())
print(pessoa1.get_ender())
print(pessoa2.get_ender())
```

