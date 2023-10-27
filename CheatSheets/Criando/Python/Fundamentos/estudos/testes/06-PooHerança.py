# para ter herança tem que ter uma classe que englobe as subclasses
class Veiculo:
    def __init__(self, velocidade):
        self.velocidade = velocidade

    def acelerar(self):
        print(f"O veículo acelerou para {self.velocidade} km/h.")


class Carro(Veiculo):
    def __init__(self, velocidade, marca):
        super().__init__(velocidade)
        self.marca = marca

    def buzinar(self):
        print(f"{self.marca}: Beep Beep!")


class Fusca(Carro):
    def __init__(self, velocidade, marca, ano):
        super().__init__(velocidade, marca)
        self.ano = ano

    def info(self):
        print(f"Modelo: Fusca {self.ano}, Marca: {self.marca}, Velocidade: {self.velocidade} km/h")


# Criando uma instância de Fusca
meu_fusca = Fusca(60, "Volkswagen", 1975)

# Usando métodos das classes base e da subclasse
meu_fusca.acelerar()
meu_fusca.buzinar()
meu_fusca.info()
