# para rodar digite no terminal python3 CheatSheets/Exemplos/01-IniciandoNoVSCodeTestes.py
# *lista/array*

fruits = ["laranja", "maçã", "uva", "abacaxi"]
print(fruits)
print(fruits[0])
print(fruits[-1])
fruits.append("banana")
print(fruits)
fruits.remove("abacaxi")
print(fruits)
fruits.extend(["pera", "melão", "kiwi"])
print(fruits)
fruits.index("maçã")
print(fruits)
fruits.sort()
print(fruits)

# # *Tupla*

user = ("Will", "Marcondes", 42)
print(user)
print(user[0])


# # *Conjuntos (set)*

permissions = {"member", "group"}
print(permissions)
permissions.add("root")
print(permissions)
permissions.add("member")
print(permissions)

print(permissions.union({"user"}))

print(permissions.intersection({"user", "member"}))

print(permissions.difference({"user"}))

# # frozenset

permission = frozenset(["member", "group"])
print(permission.union({"user"}) )
print(permission.intersection({"user", "member"}))
print(permission.difference({"user"}))


# # *Dicionários (dict)/ objeto*

people_by_id = {1: "Maria", 2: "Fernanda", 3: "Felipe"}

people_by_name = {"Maria": 1, "Fernanda": 2, "Felipe": 3}

print(people_by_id[1])

del people_by_id[1]
print(people_by_id)
print(people_by_id.items()) # dict_items([(1, "Maria"), (2, "Fernanda"), (3, "Felipe")])


# *Range (range)*

print(list(range(5)))
print(list(range(1, 6)))
print(list(range(1, 11, 2)))
print(list(range(10, 0, -1)))


# *if/elif/else*

salary = 3456
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

print(position)


# for in


restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)  

for index in range(5):
    print(index)



# while
print("---------")

n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next

# enumerate

languages = ['Python', 'Java', 'JavaScript']

enumerate_prime = enumerate(languages)

print(list(enumerate_prime))


# Funções

def soma(x, y):
    return x + y

print(soma(2, 2))

print(dict(nome="Ana", sobrenome="Souza", idade=21, turma=1))
