# Manipulação de Arquivos
Utilizando o python podemso abrir e manipular diferentes tipos de arquivos, proporcionando inúmeras possibilidades. Desde a criação de planilhas repletas de dados (ex:Excel) até a organização de informações quantitativas em tabelas, passando pela edição dinâmica de textos, o Python se destaca como uma ferramenta multifacetada para lidar com uma variedade de tarefas.

**Criando e Removendo Diretórios/pastas em Python**

Ao lidar com manipulação de arquivos e diretórios em Python, é comum a necessidade de criar e remover diretórios no sistema de arquivos. Para isso, a biblioteca padrão `os` fornece algumas funções úteis, como `os.mkdir()` e `os.rmdir()`.

**1. `os.mkdir(caminho)`**

O método `os.mkdir(caminho)` é usado para criar um novo diretório no sistema de arquivos com o caminho especificado. Ele recebe como argumento o caminho completo do diretório que você deseja criar. Por exemplo:

```python
import os

# Criando um novo diretório chamado "meu_diretorio" no diretório atual
os.mkdir("meu_diretorio")
```

Este código criará um novo diretório chamado "meu_diretorio" no diretório atual do script Python. Se você deseja criar o diretório em um local específico, basta fornecer o caminho completo como argumento para `os.mkdir()`.

**2. `os.rmdir(caminho)`**

O método `os.rmdir(caminho)` é usado para remover um diretório vazio do sistema de arquivos com o caminho especificado. Ele recebe como argumento o caminho completo do diretório que você deseja remover. Por exemplo:

```python
import os

# Removendo o diretório chamado "meu_diretorio"
os.rmdir("meu_diretorio")
```

Este código removerá o diretório "meu_diretorio" do diretório atual do script Python, desde que esteja vazio. Se o diretório contiver arquivos ou outros diretórios, `os.rmdir()` lançará um erro `OSError`. Portanto, é importante garantir que o diretório esteja vazio antes de tentar removê-lo usando esta função.

Lembre-se de que `os.rmdir()` só pode ser usado para remover diretórios vazios. Se você precisar remover um diretório e todo o seu conteúdo, incluindo arquivos e subdiretórios, você pode usar `shutil.rmtree()` do módulo `shutil`.

Com essas duas funções, `os.mkdir()` e `os.rmdir()`, você pode facilmente criar e remover diretórios no sistema de arquivos usando Python.

**Encontrando Seu Arquivo:**

Ao trabalhar com manipulação de arquivos em Python, o primeiro passo é localizar o arquivo que você deseja processar. Para isso, você pode usar a função `open()`. Aqui estão algumas dicas sobre como especificar o caminho do arquivo:

1. **Arquivo no Mesmo Diretório do Script:**
   
   ```python
   arquivo = open("arquivo.txt", modo)
   ```

   Nesse caso, o Python procurará o arquivo chamado "arquivo.txt" no mesmo diretório onde o script está localizado.

2. **Arquivo em um Diretório Acima do Script:**
   
   ```python
   arquivo = open("../arquivo.txt", modo)
   ```

   Se o arquivo estiver em um diretório acima do diretório do script, você pode usar `"../"` para indicar o diretório anterior. Novamente, substitua `"modo"` pelo modo de abertura adequado.

A escolha do modo de abertura (`'r'`, `'w'`, `'a'`, etc.) dependerá da operação que você deseja realizar no arquivo. Por exemplo, se estiver lendo dados, use `'r'`; se estiver gravando dados, use `'w'`; e se estiver anexando dados a um arquivo existente, use `'a'`.
O Python também nos permite diferenciar arquivos texto de arquivos binários, como uma imagem, por exemplo. Para informar que desejamos abrir um arquivo binário, adicionamos a string “b” ao modo, ficando “rb”, “wb” e “ab”.
se nao for passado um modo 0 Python usará o modo de leitura padrão ('r').

Se você imprimir a variável `arquivo`, você receberá algo semelhante a:

```plaintext
<_io.TextIOWrapper name='dados1.txt' mode='r' encoding='cp1252'>
```

Aqui está uma análise dessa saída:

- O tipo do objeto é `TextIOWrapper`, que lida com arquivos de texto.
- O nome do arquivo é indicado por `name='dados.txt'`.
- O modo de acesso ao arquivo é indicado por `mode='r'`, onde 'r' significa leitura (read). 
- A codificação do arquivo é indicada por `encoding='cp1252'`, que define como os caracteres no arquivo estão codificados.

Essas informações são úteis para compreender o estado do arquivo que você abriu e podem ser cruciais para garantir que você esteja lendo ou gravando dados no formato correto.


**Verificando o Caminho do Arquivo**

Podemos determinar o caminho do nosso arquivo usando o módulo `os` e os comandos `path.relpath` e `path.abspath`. Esses comandos fornecerão, respectivamente, o caminho relativo ao diretório do projeto ou o caminho absoluto do sistema de arquivos (por exemplo, C:\ no Windows).

Exemplo de uso:

```python
import os

caminho_relativo = os.path.relpath("arquivo.txt")
caminho_absoluto = os.path.abspath("arquivo.txt")

print(f'Caminho Relativo: {caminho_relativo}')
print(f'Caminho Absoluto: {caminho_absoluto}')

dados = open("arquivo.txt")

print(f'Caminho Relativo: {os.path.relpath(dados.name)}')
print(f'Caminho Absoluto: {os.path.abspath(dados.name)}')
```

Esses comandos são úteis para entender onde o Python está procurando ou salvando seus arquivos, especialmente quando você lida com diferentes diretórios no seu projeto.


**Fechando o Arquivo**

Após realizar as operações desejadas em um arquivo, é fundamental fechá-lo usando o método `close()`. Este passo é crucial para liberar os recursos do sistema operacional associados ao arquivo.
```python
arquivo.close()
```

Ao fechar o arquivo, você garante que todas as alterações feitas foram efetivamente gravadas e que nenhum recurso está sendo mantido em aberto desnecessariamente. Esquecer de fechar um arquivo pode levar a problemas como perda de dados ou impedir que outros programas acessem o arquivo.

É uma prática comum utilizar a instrução `with` ao lidar com arquivos em Python. Ela garante que o arquivo será fechado automaticamente ao finalizar o bloco de código, mesmo se ocorrerem exceções. Aqui está um exemplo:

```python
with open("arquivo.txt", "r") as arquivo:
    # operações no arquivo

# arquivo está automaticamente fechado fora do bloco "with"
```

Essa abordagem é mais segura e evita possíveis problemas ao garantir que o arquivo seja fechado, independentemente do que aconteça dentro do bloco de código.

**Métodos de Leitura em Arquivos**

Em Python, existem diferentes métodos para ler o conteúdo de um arquivo, cada um oferecendo uma abordagem única para atender às necessidades específicas do desenvolvedor. Vamos explorar os métodos `read()`, `readline()`, e `readlines()`.

1. **`read()`**:
   - Este método lê todo o conteúdo do arquivo como uma única string.
   - Útil quando você precisa processar o conteúdo do arquivo como um bloco de texto único.
   - Exemplo:
     ```python
     with open("arquivo.txt", "r") as arquivo:
         conteudo = arquivo.read()
     ```

2. **`readline()`**:
   - Lê uma única linha do arquivo.
   - Útil para processar o arquivo linha por linha.
   - Cada chamada subsequente retorna a próxima linha.
   - Exemplo:
     ```python
     with open("arquivo.txt", "r") as arquivo:
         linha1 = arquivo.readline()
         linha2 = arquivo.readline()
     ```

3. **`readlines()`**:
   - Lê todas as linhas do arquivo e retorna uma lista de strings, onde cada string representa uma linha.
   - Pode ser útil quando você deseja iterar sobre as linhas do arquivo.
   - Exemplo:
     ```python
     with open("arquivo.txt", "r") as arquivo:
         linhas = arquivo.readlines()
     ```

Escolha o método mais apropriado com base nos requisitos específicos da sua aplicação, seja para processar o arquivo como um todo, linha por linha ou como uma lista de linhas.


**Métodos de Escrita em Arquivos**

Quando se trata de escrever em arquivos em Python, você pode utilizar métodos que atendem às diferentes necessidades de manipulação de dados. Aqui estão os principais métodos de escrita:

1. **`write()`**:
   - Este método permite escrever uma string no arquivo.
   - Se o arquivo não existir, ele será criado. Se já existir, o conteúdo anterior será sobrescrito.
   - Exemplo:
     ```python
     with open("arquivo.txt", "w") as arquivo:
         arquivo.write("Conteúdo a ser escrito no arquivo.")
     ```

2. **`writelines()`**:
   - Aceita uma lista de strings como argumento e escreve cada string como uma linha no arquivo.
   - Útil para escrever várias linhas em um arquivo de uma vez.
   - Exemplo:
     ```python
     linhas = ["Linha 1\n", "Linha 2\n", "Linha 3\n"]
     with open("arquivo.txt", "w") as arquivo:
         arquivo.writelines(linhas)
     ```

3. **`append()`**:
   - Este método abre o arquivo em modo de adição ("a"), permitindo que novos dados sejam adicionados ao final do arquivo sem sobrescrever o conteúdo existente.
   - Exemplo:
     ```python
     with open("arquivo.txt", "a") as arquivo:
         arquivo.write("Novo conteúdo a ser adicionado.")
     ```

Escolha o método adequado com base nos requisitos específicos do seu aplicativo, seja para escrever uma única string, várias linhas ou para adicionar conteúdo a um arquivo existente.

