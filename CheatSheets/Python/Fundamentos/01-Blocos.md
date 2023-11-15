Blocos
Em Python, os blocos são definidos pela indentação. Diferente de C e Java, que usam as chaves { e } para delimitar os blocos, em Python todos os blocos são iniciados com o símbolo : (dois pontos) na linha superior e representados pelo acréscimo de 4 (quatro) espaços à esquerda. Sem se preocupar por enquanto com o significado das expressões for, if, else ou range, observe os códigos abaixo:


```py
a = 0
for i in range(30):
    if a % 2 == 0:
        a += 1
        continue
    else:
        if a % 5 == 0:
            break
        else:
            a += 3
print (a)
```

Identificadores de variáveis
Os identificadores das variáveis podem ser compostos por letras, o underline (_) e, com exceção do primeiro caractere, números de 0 a 9. 

MinhaVariavel, _variavel, salario1 e salario1_2

Variáveis globais
Todos os nomes atribuídos no prompt interativo do Python (prompt do emulador, Python Console do PyCharm etc.) ou em um módulo fora de qualquer função são considerados como de escopo global. Por exemplo, ao executar a instrução da caixa de código a seguir, a variável x é uma variável global

Variáveis locais
Para exemplificar o uso de variáveis com escopo local, vamos utilizar uma função definida pelo desenvolvedor. Não se preocupe com esse tipo de função por enquanto, você aprenderá mais detalhes posteriormente.

```py
def multiplicador(numero):
        a = 2 # esta variável tem escopo local
        print(f"Dentro da função, a variável vale: {a}")
        return a * numero

a = 3 # esta variável tem escopo global
b = multiplicador(5)
print(f"Fora da função, a variável a vale: {a}"
```
resultado
Dentro da função, a variável vale: 2
Fora da função, a variável a vale: 3

para resolver este problema utilizamos a palavra reservada [global].

```py
def multiplicador(numero):
        global a # todas as referências à variável a são para a global
        a = 2      # a global será alterado
        print(f"Dentro da função,  variável  vale: {a}")
        return a * numero


a = 3  # esta variável tem escopo global
b = multiplicador(5)
print(f"A variável b vale: {b}")
print(f"Fora da função, a variável a vale: {a}")
```
resultado
Dentro da função, a variável vale: 2
Fora da função, a variável a vale: 2

