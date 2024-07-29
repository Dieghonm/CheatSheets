**SQLite**

SQLite é uma biblioteca de banco de dados relacional embutida, que não requer um processo de servidor separado e permite o acesso direto aos arquivos de banco de dados. É uma escolha popular para aplicativos que precisam de uma solução de armazenamento de dados leve e fácil de usar. Neste tutorial, vamos aprender como usar o SQLite com Python.

**1. Instalando o SQLite**

O SQLite geralmente já está incluído na maioria das instalações do Python. Portanto, você não precisa instalar nada separadamente. Basta importar o módulo `sqlite3` em seus scripts Python para começar a usar o SQLite.

```python
import sqlite3
```

**2. Criando um Banco de Dados e Tabela**

Para criar um novo banco de dados SQLite e uma tabela dentro dele, você pode seguir estes passos:

```python
# Conectar ao banco de dados (será criado se não existir)
conn = sqlite3.connect('exemplo.db')

# Criar um cursor para executar comandos SQL
cursor = conn.cursor()

# Criar uma tabela
cursor.execute('''CREATE TABLE usuarios (id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)''')

# Salvar as alterações
conn.commit()

# Fechar a conexão
conn.close()
```

Isso criará um novo arquivo de banco de dados chamado `exemplo.db` com uma tabela chamada `usuarios`, contendo colunas para `id`, `nome` e `idade`.

**3. Inserindo Dados**

Agora que temos uma tabela, podemos inserir alguns dados nela:

```python
conn = sqlite3.connect('exemplo.db')
cursor = conn.cursor()

# Inserir dados na tabela
cursor.execute("INSERT INTO usuarios (nome, idade) VALUES ('João', 30)")
cursor.execute("INSERT INTO usuarios (nome, idade) VALUES ('Maria', 25)")

# Salvar as alterações
conn.commit()

# Fechar a conexão
conn.close()
```

**4. Consultando Dados**

Para recuperar dados da tabela, você pode usar consultas SQL:

```python
conn = sqlite3.connect('exemplo.db')
cursor = conn.cursor()

# Consulta simples
cursor.execute("SELECT * FROM usuarios")

# Recupera todos os resultados da consulta
rows = cursor.fetchall()

# Exibe os resultados
for row in rows:
    print(row)

# Fechar a conexão
conn.close()
```

**5. Atualizando e Excluindo Dados**

Você também pode atualizar e excluir registros da tabela usando comandos SQL:

```python
conn = sqlite3.connect('exemplo.db')
cursor = conn.cursor()

# Atualizar dados
cursor.execute("UPDATE usuarios SET idade = 31 WHERE nome = 'João'")

# Excluir dados
cursor.execute("DELETE FROM usuarios WHERE nome = 'Maria'")

# Salvar as alterações
conn.commit()

# Fechar a conexão
conn.close()
```
*Criando tabelas*


### Criando Tabelas no SQLite com Python

### Passo 1: Instalando o SQLite

Se você ainda não tem o SQLite instalado em seu sistema, pode fazer isso através de um pacote gerenciador de dependências como `pip`. Basta executar o seguinte comando no seu terminal:

```bash
pip install sqlite3
```

### Passo 2: Importando o Módulo `sqlite3`

Para começar, importe o módulo `sqlite3` no seu script Python:

```python
import sqlite3
```

### Passo 3: Conectando ao Banco de Dados

Em seguida, você precisa se conectar ao banco de dados SQLite. Se o banco de dados não existir, ele será criado automaticamente quando você se conectar a ele. Aqui está um exemplo de como fazer isso:

```python
# Conectar ao banco de dados (será criado se não existir)
conn = sqlite3.connect('exemplo.db')
```

### Passo 4: Criando as Tabelas

Agora, vamos criar as tabelas usando o método `execute()` do cursor. Aqui está o exemplo fornecido usando suas tabelas de exemplo:

```python
# Criar um cursor para executar comandos SQL
cursor = conn.cursor()

# Criar a tabela Pessoa
cursor.execute('''CREATE TABLE Pessoa (
                cpf INTEGER NOT NULL,
                nome TEXT NOT NULL,
                nascimento DATE NOT NULL,
                oculos BOOLEAN NOT NULL,
                PRIMARY KEY (cpf)
                )''')

# Criar a tabela Marca
cursor.execute('''CREATE TABLE Marca (
                id INTEGER NOT NULL,
                nome TEXT NOT NULL,
                sigla CHARACTER(2) NOT NULL,
                PRIMARY KEY (id)
                )''')

# Criar a tabela Veiculo
cursor.execute('''CREATE TABLE Veiculo (
                placa CHARACTER(7) NOT NULL,
                ano INTEGER NOT NULL,
                cor TEXT NOT NULL,
                motor REAL NOT NULL,
                proprietario INTEGER NOT NULL,
                marca INTEGER NOT NULL,
                PRIMARY KEY (placa),
                FOREIGN KEY(proprietario) REFERENCES Pessoa(cpf),
                FOREIGN KEY(marca) REFERENCES Marca(id)
                );
                )''')
```

### Passo 5: Salvando as Alterações e Fechando a Conexão

Por fim, não se esqueça de salvar as alterações e fechar a conexão com o banco de dados:

```python
# Salvar as alterações
conn.commit()

# Fechar a conexão
conn.close()
```

### Inserção de Registros:
Para inserir dados em uma tabela no SQLite, você pode usar o método `INSERT INTO`. Vou mostrar um exemplo de como inserir registros na tabela `Pessoa`:

```python
# Inserindo um novo registro na tabela Pessoa
cursor.execute("INSERT INTO Pessoa (cpf, nome, nascimento, oculos) VALUES (?, ?, ?, ?)",
               (12345678900, 'João da Silva', '1990-05-15', 0))
```

### Atualização de Registros:
Para atualizar registros existentes, você pode usar o método `UPDATE`. Vou mostrar um exemplo de como atualizar o nome de um registro na tabela `Pessoa`:

```python
# Atualizando o nome de um registro na tabela Pessoa
cursor.execute("UPDATE Pessoa SET nome = ? WHERE cpf = ?",
               ('João Silva', 12345678900))
```

### Remoção de Registros:
Para remover registros de uma tabela, você pode usar o método `DELETE FROM`. Vou mostrar um exemplo de como remover um registro da tabela `Pessoa`:

```python
# Removendo um registro da tabela Pessoa
cursor.execute("DELETE FROM Pessoa WHERE cpf = ?", (12345678900,))
```

Lembre-se de substituir os valores de exemplo pelos dados que você deseja inserir, atualizar ou remover. Além disso, não se esqueça de fazer commit após executar as operações de modificação:

```python
# Fazendo commit para salvar as alterações no banco de dados
conexao.commit()
```

### Consulta Simples:
Para realizar consultas simples, você pode usar o método `SELECT`. Vou mostrar um exemplo de como selecionar todos os registros da tabela `Pessoa`:

```python
# Consulta simples para selecionar todos os registros da tabela Pessoa
cursor.execute("SELECT * FROM Pessoa")
registros = cursor.fetchall()  # Obtém todos os registros da consulta

# Exibe os registros obtidos
for registro in registros:
    print(registro)
```

### Consulta com Condição:
Você também pode fazer consultas com condições específicas usando a cláusula `WHERE`. Vou mostrar um exemplo de como selecionar os registros de pessoas com o nome "João Silva":

```python
# Consulta com condição para selecionar registros da tabela Pessoa
cursor.execute("SELECT * FROM Pessoa WHERE nome = ?", ('João Silva',))
registros = cursor.fetchall()  # Obtém os registros que satisfazem a condição

# Exibe os registros obtidos
for registro in registros:
    print(registro)
```

### Consulta com Junção de Tabelas:
Caso você tenha tabelas relacionadas, pode fazer junções para obter dados combinados de várias tabelas. Vou mostrar um exemplo de como fazer uma junção entre as tabelas `Veiculo` e `Marca` para obter os veículos e suas respectivas marcas:

```python
# Consulta com junção entre as tabelas Veiculo e Marca
cursor.execute("SELECT Veiculo.placa, Veiculo.ano, Veiculo.cor, Pessoa.nome AS proprietario, Marca.nome AS marca "
               "FROM Veiculo "
               "INNER JOIN Pessoa ON Veiculo.proprietario = Pessoa.cpf "
               "INNER JOIN Marca ON Veiculo.marca = Marca.id")
registros = cursor.fetchall()  # Obtém os registros resultantes da junção

# Exibe os registros obtidos
for registro in registros:
    print(registro)
```
