# Atributos Públicos e Privados em Python

Python não possui modificadores de acesso como algumas outras linguagens de programação (por exemplo, Java ou C++), mas oferece uma convenção para indicar a visibilidade de um atributo: o uso de um sublinhado como prefixo no nome do atributo.

## Atributos Públicos

Os atributos públicos são aqueles que podem ser acessados de qualquer lugar do código, mesmo fora da classe em que foram definidos. Eles não possuem o sublinhado como prefixo no nome. Aqui está um exemplo:

```python
class Carro:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo

meu_carro = Carro("Ford", "Focus")
print(meu_carro.marca)  # Isso é um atributo público
```

No exemplo acima, `marca` e `modelo` são atributos públicos da classe `Carro`.

## Atributos Privados

Os atributos privados são aqueles que deveriam ser acessados apenas de dentro da classe em que foram definidos. Embora Python não impeça o acesso a esses atributos, eles são convencionalmente marcados com um sublinhado duplo como prefixo no nome. Aqui está um exemplo:

```python
class ContaBancaria:
    def __init__(self, saldo):
        self.__saldo = saldo

    def consulta_saldo(self):
        return self.__saldo

minha_conta = ContaBancaria(1000)
print(minha_conta.consulta_saldo())  # Isso é uma maneira de acessar um atributo privado
```

Neste exemplo, `__saldo` é um atributo privado da classe `ContaBancaria`. É possível acessá-lo de fora da classe, mas a convenção de uso de sublinhado duplo indica que ele deve ser tratado como privado.

## Encapsulamento

O encapsulamento é um princípio da POO que se refere à restrição do acesso direto a alguns detalhes de um objeto. Em Python, o encapsulamento é alcançado principalmente pela convenção de atributos públicos e privados. 

No entanto, lembre-se de que, em Python, a ênfase está na responsabilidade do programador, e não na imposição rigorosa de regras de acesso. Os programadores podem acessar e modificar atributos privados se necessário, mas devem seguir as convenções para garantir a legibilidade e a manutenção do código.
