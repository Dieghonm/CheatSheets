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
