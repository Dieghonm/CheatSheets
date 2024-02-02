# Criação e Manipulação de Banco de Dados

  Vamos explorar o processo de criação e manipulação de banco de dados usando o psql no terminal. Este método é especialmente útil, pois o mesmo código pode ser utilizado em um backend para criar e preencher dados iniciais no banco.

## 1. Criar e Excluir Banco de Dados:

  1. Abra um terminal (Ctrl + Alt + T).

  2. Digite os seguintes comandos para acessar o psql:
    ```bash
    sudo -u postgres -i  (para iniciar o postgress)
    psql     (para iniciar o psql)
    ```

  3. Agora, para criar um novo banco de dados, utilize o seguinte comando:
    ```sql
    CREATE DATABASE BDESTUDO;
    SELECT datname FROM pg_database;  ou \l   (para vusualizar os bancos existentes)
    ```
    Isso estabelece a estrutura inicial do seu banco de dados.

  4. Para remover completamente o banco de dados criado utilize o DROP DATABASE
    Este comando elimina permanentemente o banco de dados especificado.
    ```sql
    -- Excluir Banco de Dados
    DROP DATABASE BDESTUDO;
    ```

  5. Depois de criado o banco precisamos conectar a ele, e faremos isso utilizando o \c
  ** importante verificar a forma que o banco foi escrita, no meu teste foi salvo em minuscula, e faz diferença.

    ```sql
    \c bdestudo;
    ```

  6. agora vamos criar algumas tabelas no nosso DB.

  Ao criar uma tabela em um banco de dados PostgreSQL, é fundamental especificar cuidadosamente cada coluna e seus atributos. Isso fornece um esquema estruturado que define como os dados serão armazenados na tabela.

  O comando `CREATE TABLE` é usado para criar uma nova tabela. A estrutura básica é:


  ```sql
  CREATE TABLE nome_da_tabela (
      nome_da_coluna tipo_de_dado [restrições],
      outra_coluna outro_tipo [outras_restrições],
      ...
  );
  ```

  ### Nome da Coluna:
    - É o identificador único da coluna dentro da tabela.

  ### Tipos de Dados no PostgreSQL
    - Define o tipo de informação que a coluna pode armazenar (por exemplo, INTEGER, VARCHAR, DATE).

      **BIGINT** - Valores inteiros compreendidos entre -9.223.372.036.854.775.808 e 9.223.372.036.854.775.807.
      **CHAR(comprimento)**   - Útil para sequências de caracteres de tamanho fixo. O parâmetro `comprimento` determina o valor da sequência. Este tipo de dado preenche a coluna com espaços em branco até atingir o total de caracteres definidos.
      **DATE**   - Representa uma data de calendário no formato AAAA-MM-DD.
      **DECIMAL**   - Determina a precisão do valor de casas decimais.
      **DOUBLE**   - Precisão do valor de até 15 casas decimais.
      **INT ou INTEGER**   - Valores inteiros compreendidos entre -2.147.483.648 e 2.147.483.647.
      **MONEY**   - Valores monetários compreendidos entre –92.233.720.368.547.758.08 e 92.233.720.368.547.758.07.
      **NUMERIC**   - Precisão do valor de casas decimais.
      **REAL**   - Precisão do valor de até seis casas decimais.
      **SERIAL**   - Gera um valor único inteiro sequencial para um novo registro entre 1 e 2.147.483.647.
      **SMALLINT**   - Representa valores compreendidos entre 32.768 e 32.767.
      **TIME**   - Representa horário no intervalo de tempo entre 00:00:00 e 24:00:00.
      **VARCHAR(comprimento)**   - Útil para sequência de dados de caracteres com comprimento variável. Não armazena espaços em branco não utilizados para compor strings em seu lado direito.

        Exemplo:
        ```sql
        CREATE TABLE Exemplo (
            ID BIGINT PRIMARY KEY,
            Nome VARCHAR(255)
        );
        ```

  ### Restrições:
    - **NOT NULL:** - Indica que a coluna não pode conter valores nulos.
    - **PRIMARY KEY:** - Define a coluna como uma chave primária, garantindo unicidade e indexação.
    - **UNIQUE:** - Garante que todos os valores na coluna são únicos.
    - **DEFAULT valor:** - Atribui um valor padrão à coluna quando nenhum valor é especificado durante a inserção.

    **Exemplo de Criação de Tabela:**
      ```sql
      -- Criar Tabela NIVEL
      CREATE TABLE NIVEL (
          CODIGONIVEL int NOT NULL,
          DESCRICAO char(90) NOT NULL,
          CONSTRAINT CHAVEPNIVEL PRIMARY KEY (CODIGONIVEL)
      );

      -- Criar Tabela CURSO com Chave Estrangeira
      CREATE TABLE CURSO (
          CODIGOCURSO int NOT NULL,
          NOME char(90) NOT NULL UNIQUE,
          DATACRIACAO date NULL,
          CODIGONIVEL int NULL,
          CONSTRAINT CHAVEPCURSO PRIMARY KEY (CODIGOCURSO),
          FOREIGN KEY (CODIGONIVEL) REFERENCES NIVEL (CODIGONIVEL)
      );
      ```

      para verificar se a tabela foi criada podemos utilizar  
      ```sql
        SELECT table_name
        FROM information_schema.tables
        WHERE table_schema = 'public';
      ```
      ou o \dt

## 2. Adicionar e Remover Coluna na Tabela CURSO:
depois de criada a tabela podemos adcionar ou remover coluns utilizando o codigo a baixo

```sql
-- Adicionar Coluna DTRECONH na Tabela CURSO
ALTER TABLE CURSO ADD DTRECONH DATE;

-- Remover Coluna DTRECONH da Tabela CURSO
ALTER TABLE CURSO DROP COLUMN DTRECONH;
```

#### 3. Excluir Tabela NIVEL de Formas Diferentes:

```sql
-- Excluir Tabela NIVEL
DROP TABLE NIVEL;

-- Excluir Tabela NIVEL com CASCADE para Remover Dependências
DROP TABLE NIVEL CASCADE;
```

### Tutorial 2: Criação e Manipulação de Objetos - Módulo 3

#### 1. Criar Tabelas CURSO, DISCIPLINA e CURSODISCIPLINA:

```sql
CREATE TABLE CURSO (
    CODIGOCURSO int NOT NULL,
    NOME char(90) NOT NULL UNIQUE,
    DATACRIACAO date NULL,
    CODIGONIVEL int NULL,
    CONSTRAINT CHAVEPCURSO PRIMARY KEY (CODIGOCURSO),
    FOREIGN KEY (CODIGONIVEL) REFERENCES NIVEL (CODIGONIVEL)
);

CREATE TABLE DISCIPLINA (
    CODIGODISCIPLINA int NOT NULL,
    NOME char(90) NOT NULL,
    CARGAHORARIA int NOT NULL,
    CONSTRAINT DISCIPLINA_pk PRIMARY KEY (CODIGODISCIPLINA)
);

CREATE TABLE CURSODISCIPLINA (
    CODIGOCURSO int NOT NULL,
    CODIGODISCIPLINA int NOT NULL,
    CONSTRAINT CURSODISCIPLINA_pk PRIMARY KEY (CODIGOCURSO, CODIGODISCIPLINA)
);

```

#### 2. Inserir Dados nas Tabelas:
Para preencher os dados ddas nossas tabelas pondemos utilizar o INSERT.

```sql
-- Inserir Dados na Tabela CURSO
INSERT INTO CURSO (CODIGOCURSO, NOME, DATACRIACAO) VALUES
(1, 'Sistemas de Informação', '1999-06-19'),
(2, 'Medicina', '1990-05-10'),
(3, 'Nutrição', '2012-02-19'),
(4, 'Pedagogia', '1999-06-19');

-- Inserir Dados na Tabela DISCIPLINA
INSERT INTO DISCIPLINA (CODIGODISCIPLINA, NOME, CARGAHORARIA) VALUES
(1, 'Leitura e Produção de Textos', 60),
(2, 'Redes de Computadores', 60),
(3, 'Computação Gráfica', 40),
(4, 'Anatomia', 60);

-- Inserir Dados na Tabela CURSODISCIPLINA
INSERT INTO CURSODISCIPLINA (CODIGOCURSO, CODIGODISCIPLINA) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(2, 3),
(3, 1),
(3, 3),
(3, 30);
```

#### 3. Atualizar Dados nas Tabelas:
para alterar dados da nossa tabela utilizaremos o UPDATE

```sql
-- Atualizar Carga Horária na Tabela DISCIPLINA
UPDATE DISCIPLINA SET CARGAHORARIA = CARGAHORARIA * 1.2;

-- Atualizar Código do Curso na Tabela CURSO
UPDATE CURSO SET CODIGOCURSO = 6 WHERE CODIGOCURSO = 4;
```


### Tutorial 3: Criação e Manipulação de Objetos - Módulo 4

#### 1. Transações Implícitas:

```sql
-- Iniciar Transação Implícita
BEGIN;

-- Inserir Dados na Tabela CURSO
INSERT INTO CURSO (CODIGOCURSO, NOME, DATACRIACAO) VALUES (5, 'Engenharia de Computação', NULL);

-- Exibir Dados Atuais
SELECT * FROM CURSO;

-- Desfazer Transação Implícita
ROLLBACK;

-- Exibir Dados Após Desfazer Transação
SELECT * FROM CURSO;
```

#### 2. Transações Explícitas com Savepoint:

```sql
-- Iniciar Transação Explícita
BEGIN;

-- Inserir Dados na Tabela CURSO
INSERT INTO CURSO (CODIGOCURSO, NOME, DATACRIACAO) VALUES (6, 'Psicologia', NULL);

-- Exibir Dados Após Inserção
SELECT * FROM CURSO;

-- Desfazer Até o Ponto de Savepoint
SAVEPOINT CARGA60;
ROLLBACK TO CARGA60;

-- Exibir Dados Após Desfazer até o Ponto de Savepoint
SELECT * FROM CURSO;

-- Confirmar Transação Explícita
COMMIT;
```

#### 3. Transações Explícitas com Restrição de Leitura:

```sql
-- Iniciar Transação Explícita com Restrição de Leitura
BEGIN;
SET TRANSACTION READ ONLY;

-- Exibir Dados da Tabela CURSODISCIPLINA
SELECT * FROM CURSODISCIPLINA;

-- Excluir Tabela CURSODISCIPLINA
DROP TABLE CURSODISCIPLINA;

-- Desfazer Transação
ROLLBACK;
```
