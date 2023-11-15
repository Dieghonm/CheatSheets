class Ritmo:
    def __init__(self, name, batida):
        self.name = name
        self.batida = batida

    def teste(self):
        print(self.name)


class Aluno:
    def __init__(self, nome, ritmo):
        self.nome = nome
        self.ritmo = ritmo

    def aluno(self):
        print(self.nome)


class Aula:
    def __init__(self, dia, horario, aluno):
        self.dia = dia
        self.horario = horario
        self.aluno = aluno

    def grade(self):
        print(self.dia, self.horario, self.aluno.nome, self.aluno.ritmo.name)


ritmoSamba = Ritmo('samba', 'tum tum pá')
alunoDiegho = Aluno('diegho', ritmoSamba)
aulaSamba = Aula('segunda', 19, alunoDiegho)
aulaSamba.grade()
