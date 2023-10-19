# Operadores
Os operadores matemáticos são muito semelhantes àqueles que vimos ao longo de nossa jornada como estudantes, aprendendo Álgebra e Aritmética na escola. Existem algumas pequenas diferenças, como a divisão (que pode ser a usual ou a divisão inteira). Mas é possível identificar operações que fizemos ao longo de toda nossa vida. A tabela a seguir lista os operadores de expressão aritmética disponíveis em Python, veja:

*Operadores matemáticos*
Soma	          +	    2.5 + 1.3	    3.8
Subtração      	-	    2.5 - 1.3	    1.2
Multiplicação 	*	    2.5 * 1.3	    3.25
Divisão	        /	    2.5/1.3	      1.923076923076923
Divisão inteira	//	  9/2	          4
Resto na divisão inteira	%	9%2	    1
Valor absoluto	abs(parâmetro)	abs(-2.5)	2.5
Exponenciação	 **	    2**4	        16


*Operações de comparação*
Além das operações algébricas, é possível realizar operações de comparação. Os operadores de comparação têm como resultado um valor booleano (True ou False). Observe a tabela abaixo:

<	Menor que
<=	Menor ou igual a
>	Maior que
>=	Maior ou igual a
==	Igual
!=	Não igual


*Operadores booleanos*
As expressões booleanas são aquelas que podem ter como resultado um dos valores booleanos: True ou False. É comum utilizarmos os operadores de comparação em expressões booleanas, mas não só eles.

Assim como é possível escrever expressões algébricas complexas concatenando diversas expressões menores, podemos escrever expressões booleanas grandes, com os operadores and, and e not.

[and]
O and serve para verificar se os dois valores boleanos sao verdadeiros

```py
x, y=false , true
{x and y} == false
x, y=true , false
{x and y} == false
x, y=false , false
{x and y} == false
x, y=true , true
{x and y} == true
```

[or]
O or serve para verificar se pelo menos um dos valores boleanos e verdadeiro

```py
x, y=false , true
{x or y} == true
x, y=true , false
{x or y} == true
x, y=false , false
{x or y} == false
x, y=true , true
{x or y} == true
```

[not]
O not inverte o valor logico do operador

```py

x, y=false , true
not(x) = true
not(y) = false

```


Relação de precedência entre operadores
Ao escrever uma expressão algébrica, o programador pode utilizar a precedência de operadores existente em Python (implícita) ou explicitar a ordem em que ele deseja que a expressão seja avaliada.

Exemplo
A expressão 3 + 2 * 5 tem como resultado 25 ou 13? Aprendemos no ensino fundamental que as operações de produto e divisão têm precedência sobre as operações de soma e subtração. Ou seja, um produto será realizado antes de uma soma, na mesma expressão. Assim, a expressão acima tem como resultado 13. Isso ocorre sempre que não forem explicitadas outras relações de precedência com o uso de parênteses. Caso o programador quisesse forçar que a soma ocorresse primeiro, ele deveria escrever assim: (3 + 2) * 5.

Sempre que o programador quiser forçar a ocorrência de uma operação antes de outras, ele pode utilizar os parênteses para aumentar a prioridade sobre ela. A tabela a seguir traz as relações de precedência entre os operadores, com as linhas mais altas tendo prioridade sobre as linhas mais baixas. Ou seja, elas ocorrem primeiro. Dentro da mesma linha, a precedência é da esquerda para a direita. Observe:

Operador	Descrição
[expressões ...]	Definição de lista
x[ ], x[índice : índice]	Operador de indexação
**	Exponenciação
+x, -x	Sinal de positivo e negativo
*, /, //, %	Produto, divisão, divisão inteira, resto
+, -	Soma, subtração
in, not in, <, <=,>, >=, <>, !=, ==	Comparações, inclusive a ocorrência em listas
not x	Booleano NOT (não)
and	Booleano AND (e)
or	Booleano OR (ou)

É importante ficar atento ao uso correto dos operadores, respeitando a precedência entre eles, para evitar que algum cálculo seja realizado corretamente, mas com resultado diferente do esperado por você ao programar.


*Conversões de tipos de dados*
Quando temos tipos diferentes envolvidos na mesma expressão, o Python converte implicitamente cada operando para o tipo mais abrangente envolvido na expressão. Estamos usando a palavra abrangente, mas poderíamos falar que existem tipos que englobam (ou contêm) outros.

Exemplo
Um número do tipo int pode ser visto como um float com a parte decimal nula. Porém, o inverso não é verdade. Ou seja, o conjunto dos inteiros (int) é um subconjunto do conjunto dos reais (float). Assim, a expressão 5 + 0.68 – que envolve um int e um float – tem como resultado 5.68. O inteiro 5 é convertido pelo Python para o número de ponto flutuante 5.0 antes que a soma (de dois valores float) seja realmente efetuada.

Uma conversão implícita não intuitiva é a dos valores booleanos True e False em inteiros, respectivamente, 1 e 0. 

Além das conversões implícitas, o programador também pode usar as conversões explícitas, quando ele força que o valor seja tratado como de determinado tipo. Para isso, é necessário usar o construtor do tipo desejado, com o valor passado como parâmetro (entre parênteses). Veja o exemplo:

>>> float(2)
2.0
>>> int(5.1)
5

O int 2 pode ser tratado naturalmente como o float 2.0, basta acrescentar a parte decimal nula. Porém, ao tentar tratar um float como int, ocorre a remoção da parte decimal.

*modelo*
**modelo**
- [ ] modelo
- [ ] `modelo`

```py


```