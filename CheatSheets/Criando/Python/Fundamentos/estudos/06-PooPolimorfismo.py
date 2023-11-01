class Animal:
    def __init__(self, nome):
        self.nome = nome

    def fazer_som(self):
        pass

class Cachorro(Animal):
    def fazer_som(self):
        return "Au Au!"

class Gato(Animal):
    def fazer_som(self):
        return "Miau!"

class Passaro(Animal):
    def fazer_som(self):
        return "Piu Piu!"

# Função que interage com diferentes animais
def fazer_barulho(animal):
    print(f"{animal.nome} faz o som: {animal.fazer_som()}")

# Criando instâncias de diferentes animais
rex = Cachorro("Rex")
whiskers = Gato("Whiskers")
tweety = Passaro("Tweety")

# Chamando a função com diferentes animais
fazer_barulho(rex)
fazer_barulho(whiskers)
fazer_barulho(tweety)