# Guia Básico de Seletores no PostgreSQL

Neste tutorial, exploraremos os conceitos fundamentais de seletores no PostgreSQL. Os seletores são comandos SQL usados para recuperar dados específicos de uma tabela.

## 1. Seleção Básica de Dados:

O comando fundamental para recuperar dados de uma tabela é o `SELECT`. Aqui está uma estrutura básica:

```sql
SELECT coluna1, coluna2, ...
FROM nome_da_tabela
WHERE condição;
```

- **Exemplo:**

  ```sql
  SELECT nome, idade
  FROM alunos
  WHERE curso = 'Engenharia';
  ```

  Este comando retorna os nomes e idades dos alunos que estão no curso de Engenharia.

## 2. Ordenação de Resultados:

Use a cláusula `ORDER BY` para classificar os resultados com base em uma ou mais colunas.

```sql
SELECT coluna1, coluna2, ...
FROM nome_da_tabela
ORDER BY coluna_ordenacao [ASC | DESC];
```

- **Exemplo:**

  ```sql
  SELECT nome, idade
  FROM alunos
  ORDER BY idade DESC;
  ```

  Isso retorna os nomes e idades dos alunos, ordenados pela idade em ordem decrescente.

## 3. Filtragem com Operadores Lógicos:

Você pode usar operadores lógicos como `AND`, `OR` e `NOT` para criar condições mais complexas.

```sql
SELECT coluna1, coluna2, ...
FROM nome_da_tabela
WHERE condicao1 AND condicao2;
```

- **Exemplo:**

  ```sql
  SELECT nome, idade
  FROM alunos
  WHERE curso = 'Engenharia' AND idade > 20;
  ```

  Isso retorna os nomes e idades dos alunos que estão no curso de Engenharia e têm mais de 20 anos.

## 4. Funções Agregadas:

As funções agregadas, como `SUM`, `AVG`, `COUNT`, etc., podem ser usadas para calcular estatísticas sobre os dados.

```sql
SELECT funcao_agregada(coluna)
FROM nome_da_tabela
WHERE condição;
```

- **Exemplo:**

  ```sql
  SELECT AVG(idade)
  FROM alunos
  WHERE curso = 'Medicina';
  ```

  Retorna a idade média dos alunos no curso de Medicina.

## 5. Junção de Tabelas:

Para combinar dados de várias tabelas, você pode usar cláusulas de junção como `INNER JOIN`, `LEFT JOIN`, etc.

```sql
SELECT colunas
FROM tabela1
JOIN tabela2 ON tabela1.coluna = tabela2.coluna;
```

- **Exemplo:**

  ```sql
  SELECT alunos.nome, cursos.nome
  FROM alunos
  JOIN cursos ON alunos.curso_id = cursos.id;
  ```

  Retorna os nomes dos alunos e seus cursos correspondentes usando uma junção.

## Uso de `AS` para Alias em SQL:

A cláusula `AS` no SQL é utilizada para renomear colunas ou tabelas temporariamente durante uma consulta. Ela é útil para tornar os resultados da consulta mais legíveis ou para fornecer nomes mais descritivos. Aqui estão alguns exemplos de como usar `AS` em seletores no PostgreSQL:

### Renomeando Colunas:

Você pode usar `AS` para renomear uma coluna na saída da consulta. Isso é útil quando o nome original da coluna não é intuitivo ou quando você deseja fornecer um nome mais descritivo.

```sql
SELECT nome AS nome_do_aluno, idade AS idade_do_aluno
FROM alunos;
```

Neste exemplo, a consulta renomeia as colunas "nome" e "idade" para "nome_do_aluno" e "idade_do_aluno", respectivamente.

### Alias para Tabelas:

Também é possível usar `AS` para criar alias para tabelas temporárias. Isso pode ser útil em consultas que envolvem várias tabelas para reduzir a verbosidade do código.

```sql
SELECT a.nome, c.nome AS nome_do_curso
FROM alunos AS a
JOIN cursos AS c ON a.curso_id = c.id;
```

Neste exemplo, a tabela "alunos" é renomeada como "a", e a tabela "cursos" é renomeada como "c" durante a consulta.

### Alias para Funções Agregadas:

Ao usar funções agregadas, como `SUM`, `AVG`, `COUNT`, etc., você pode usar `AS` para atribuir um alias ao resultado da função.

```sql
SELECT AVG(idade) AS idade_media
FROM alunos;
```

Aqui, a função `AVG(idade)` é renomeada como "idade_media" na saída da consulta.

O uso de `AS` é opcional, mas pode tornar suas consultas mais compreensíveis. Certifique-se de colocar o alias entre aspas duplas se ele contiver espaços ou caracteres especiais.

```sql
SELECT nome AS "Nome do Aluno", idade AS "Idade do Aluno"
FROM alunos;
```

Isso é especialmente útil ao

 lidar com nomes de colunas que incluem espaços ou caracteres especiais.

## Uso da Cláusula `CASE` no PostgreSQL:

A cláusula `CASE` no SQL é usada para realizar operações condicionais em uma consulta. Ela permite que você realize diferentes ações com base em condições especificadas. Aqui estão alguns exemplos de como usar a cláusula `CASE` no PostgreSQL:

### Exemplo Simples:

```sql
SELECT
  nome,
  idade,
  CASE
    WHEN idade >= 18 THEN 'Maior de Idade'
    ELSE 'Menor de Idade'
  END AS status
FROM alunos;
```

Neste exemplo, a cláusula `CASE` avalia a condição `idade >= 18` para cada linha. Se a condição for verdadeira, a expressão resultará em 'Maior de Idade', caso contrário, resultará em 'Menor de Idade'. O resultado é renomeado como 'status'.

### Múltiplas Condições:

```sql
SELECT
  nome,
  curso,
  CASE
    WHEN curso = 'Ciência da Computação' THEN 'Área de Tecnologia'
    WHEN curso = 'Medicina' THEN 'Área de Saúde'
    ELSE 'Outras Áreas'
  END AS area
FROM alunos;
```

Neste exemplo, a cláusula `CASE` avalia diferentes condições para cada linha com base no curso. Dependendo do curso, a coluna resultante 'area' será atribuída a uma categoria específica.

### Usando `CASE` em Cláusulas `ORDER BY`:

```sql
SELECT
  nome,
  idade
FROM alunos
ORDER BY
  CASE
    WHEN idade >= 18 THEN 1
    ELSE 2
  END;
```

Aqui, a cláusula `CASE` é usada para ordenar os resultados com base na idade. Os alunos maiores de 18 anos serão listados primeiro.

### Aninhamento de `CASE`:

```sql
SELECT
  nome,
  idade,
  CASE
    WHEN idade >= 18 THEN 'Maior de Idade'
    ELSE
      CASE
        WHEN idade >= 13 THEN 'Adolescente'
        ELSE 'Criança'
      END
  END AS faixa_etaria
FROM alunos;
```

Você pode aninhar cláusulas `CASE` para lidar com condições mais complexas. Neste exemplo, a faixa etária é determinada com base na idade.

A cláusula `CASE` é uma ferramenta poderosa para realizar transformações condicionais em seus resultados de consulta, tornando suas consultas mais flexíveis e adaptáveis a diferentes cenários.

## Funções de Resumo ou de Agregação no PostgreSQL:

Funções de resumo ou de agregação no SQL são usadas para realizar cálculos em um conjunto de valores e retornar um único valor. Essas funções são frequentemente aplicadas a colunas em uma consulta, resumindo dados de várias linhas. Aqui estão algumas das principais funções de agregação no PostgreSQL:

### 1. COUNT:

A função `COUNT` retorna o número de linhas em um conjunto de resultados.

Exemplo:
```sql
SELECT COUNT(*) FROM alunos;
```

### 2. SUM:

A função `SUM` retorna a soma de valores em uma coluna.

Exemplo:
```sql
SELECT SUM(notas) FROM notas_alunos;
```

### 3. AVG:

A função `AVG` retorna a média dos valores em uma coluna.

Exemplo:
```sql
SELECT AVG(idade) FROM alunos;
```

### 4. MIN:

A função `MIN` retorna o valor mínimo em uma coluna.

Exemplo:
```sql
SELECT MIN(salario) FROM funcionarios;
```

### 5. MAX:

A função `MAX` retorna o valor máximo em uma coluna.

Exemplo:
```sql
SELECT MAX(avaliacao) FROM projetos;
```

### 6. GROUP BY:

A cláusula `GROUP BY` é usada em conjunto com funções de agregação para agrupar os resultados por uma ou mais colunas.

Exemplo:
```sql
SELECT departamento, AVG(salario) FROM funcionarios GROUP BY departamento;
```

### 7. HAVING:

A cláusula `HAVING` é usada para filtrar resultados após a aplicação de funções de agregação, semelhante ao `WHERE` usado para linhas individuais.

Exemplo:
```sql
SELECT departamento, AVG(salario) FROM funcionarios GROUP BY departamento HAVING AVG(salario) > 50000;
```

### 8. STDDEV:

A função `STDDEV` retorna o desvio padrão de um conjunto de valores em uma coluna.

Exemplo:
```sql
SELECT STDDEV(notas) FROM notas_alunos;
```

### 9. VARIANCE:
A função `VARIANCE` retorna a variância de um conjunto de valores em uma coluna.

Exemplo:
```sql
SELECT VARIANCE(idade) FROM alunos;
```


## Operador `LIKE` no PostgreSQL

O operador `LIKE` no PostgreSQL é utilizado para realizar correspondências parciais em strings. Ele é especialmente útil para realizar buscas flexíveis em dados de texto. Aqui estão alguns exemplos de como usar o operador `LIKE` em consultas:

### 1. Correspondência no Início da String:

Você pode usar `%` para representar qualquer sequência de caracteres no início da string.

```sql
SELECT nome
FROM alunos
WHERE nome LIKE 'Jo%';
```

Isso retornará os nomes dos alunos que começam com "Jo".

### 2. Correspondência no Final da String:

Da mesma forma, `%` no final da string representa qualquer sequência de caracteres no final.

```sql
SELECT nome
FROM alunos
WHERE nome LIKE '%son';
```

Isso retornará os nomes dos alunos que terminam com "son".

### 3. Correspondência em Qualquer Lugar da String:

Se `%` é usado no início e no final, representa qualquer sequência de caracteres em qualquer lugar da string.

```sql
SELECT nome
FROM alunos
WHERE nome LIKE '%a%';
```

Isso retornará os nomes dos alunos que contêm a letra "a" em qualquer posição.

### 4. Correspondência de Caracteres Específicos:

Você pode usar `_` para representar um único caractere em uma posição específica.

```sql
SELECT nome
FROM alunos
WHERE nome LIKE 'J_n';
```

Isso retornará os nomes dos alunos que têm três letras, começam com "J" e terminam com "n".

### 5. Combinação de Operadores `LIKE` com Outros Operadores Lógicos:

Você pode combinar o operador `LIKE` com outros operadores lógicos para criar condições mais complexas.

```sql
SELECT nome
FROM alunos
WHERE nome LIKE 'A%' AND idade > 25;
```

Isso retornará os nomes dos alunos cujos nomes começam com "A" e têm mais de 25 anos.


# Guia de Tipos de Junção (JOIN) no PostgreSQL

As junções (joins) são usadas para combinar linhas de duas ou mais tabelas com base em uma condição relacionada. O PostgreSQL suporta vários tipos de junções para atender às necessidades específicas de uma consulta. Aqui estão alguns dos principais tipos de junção:

## 1. INNER JOIN:

O `INNER JOIN` é o tipo mais comum de junção. Ele retorna apenas as linhas que têm correspondência em ambas as tabelas.

```sql
SELECT alunos.nome, cursos.nome
FROM alunos
INNER JOIN cursos ON alunos.curso_id = cursos.id;
```

Neste exemplo, apenas as linhas onde há uma correspondência entre a coluna `curso_id` na tabela `alunos` e a coluna `id` na tabela `cursos` serão retornadas.

## 2. LEFT JOIN (ou LEFT OUTER JOIN):

O `LEFT JOIN` retorna todas as linhas da tabela à esquerda e as linhas correspondentes da tabela à direita. Se não houver correspondência, os resultados da tabela à direita serão `NULL`.

```sql
SELECT alunos.nome, notas.valor
FROM alunos
LEFT JOIN notas ON alunos.id = notas.aluno_id;
```

Este exemplo retorna todas as linhas da tabela `alunos` e as correspondentes da tabela `notas`. Se um aluno não tiver uma nota correspondente, o valor será `NULL`.

## 3. RIGHT JOIN (ou RIGHT OUTER JOIN):

O `RIGHT JOIN` é semelhante ao `LEFT JOIN`, mas retorna todas as linhas da tabela à direita e as linhas correspondentes da tabela à esquerda.

```sql
SELECT alunos.nome, notas.valor
FROM alunos
RIGHT JOIN notas ON alunos.id = notas.aluno_id;
```

Este exemplo retorna todas as linhas da tabela `notas` e as correspondentes da tabela `alunos`. Se uma nota não tiver um aluno correspondente, o nome do aluno será `NULL`.

## 4. FULL JOIN (ou FULL OUTER JOIN):

O `FULL JOIN` retorna todas as linhas quando há uma correspondência em uma das tabelas. As colunas não correspondentes em ambas as tabelas serão preenchidas com `NULL`.

```sql
SELECT alunos.nome, notas.valor
FROM alunos
FULL JOIN notas ON alunos.id = notas.aluno_id;
```

Este exemplo retorna todas as linhas da tabela `alunos` e `notas`. Se não houver correspondência, os valores não correspondentes serão `NULL`.

## 5. CROSS JOIN:

O `CROSS JOIN` retorna o produto cartesiano de ambas as tabelas, ou seja, combina cada linha da primeira tabela com cada linha da segunda tabela.

```sql
SELECT alunos.nome, cursos.nome
FROM alunos
CROSS JOIN cursos;
```

Este exemplo combina cada aluno com cada curso, resultando em todas as possíveis combinações.

## 6. SELF JOIN:

Um `SELF JOIN` é uma junção de uma tabela com ela mesma. Isso é útil quando você precisa comparar linhas dentro da mesma tabela.

```sql
SELECT pai.nome AS pai, filho.nome AS filho
FROM familia pai
JOIN familia filho ON pai.id = filho.id_pai;
```

Neste exemplo, a tabela `familia` é usada duas vezes para relacionar pais e filhos.

