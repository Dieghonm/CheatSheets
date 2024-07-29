# Condicionais
Python oferece uma série de estruturas de decisão que permitem ao programador controlar o fluxo de um programa com base em condições específicas. As estruturas mais básicas são if, if-else e elif.

*Estrutura if*
 
A estrutura if é a mais fundamental das condicionais em Python. Ela permite que um bloco de código seja executado somente se uma condição for verdadeira. Veja um exemplo:

```python
idade = 18
if idade >= 18:
    print("Você é maior de idade.")
```
Neste exemplo, o código dentro do bloco if será executado apenas se a variável idade for maior ou igual a 18.

*Estrutura if-else*
A estrutura if-else permite que você execute um bloco de código se a condição for verdadeira e outro bloco se a condição for falsa. Aqui está um exemplo:

```python
idade = 16
if idade >= 18:
    print("Você é maior de idade.")
else:
    print("Você é menor de idade.")
```

Neste caso, se a idade for maior ou igual a 18, a primeira mensagem será impressa; caso contrário, a segunda mensagem será exibida.

*Estrutura elif*
A estrutura elif (abreviação de "else if") é usada para verificar várias condições em sequência. É útil quando você tem mais de duas opções para considerar. Veja um exemplo:

```py
dia_da_semana = "quarta-feira"
if dia_da_semana == "segunda-feira":
    print("Hoje é segunda-feira.")
elif dia_da_semana == "quarta-feira":
    print("Hoje é quarta-feira.")
else:
    print("Hoje não é segunda-feira nem quarta-feira.")
```
Neste caso, o código verificará a condição em ordem e imprimirá a mensagem correspondente à primeira condição verdadeira.

*Estrutura try/except/finally*

try/except: Usa-se para capturar e tratar exceções. O código dentro de except será executado se uma exceção ocorrer no bloco try.

try/except/finally: Além de capturar exceções, garante que o bloco finally seja sempre executado, independentemente de uma exceção ter sido lançada ou não.

```python
try:
    resultado = 10 / 0  # Isso gerará um ZeroDivisionError
except ZeroDivisionError:
    print('Não é possível dividir por zero.')
```

```python
anos = [2019, 2020, 2021]
try:
    ano_atual = anos[3]  # Isso gerará um IndexError
except IndexError:
    print('O índice está fora do intervalo da lista.')
except Exception as exc:
    print(f'Erro inesperado: {exc}')
finally:
    print('Operação finalizada.')
```

para ver o exept podemos usar o str(exc) e str(type(exc))

```python
anos = [2019, 2020, 2021] 

try: ano_atual= anos[3] 
    print(ano_atual) 
except Exception as exc: 
    print('Descrição da exceção: ' + str(exc)) 
    print('Tipo da exceção: ' + str(type(exc))) 
    print('Lista de anos é menor que o valor escolhido. ' +  'Espera-se um valor entre 0 e ' +  str(len(anos) -1) )

```