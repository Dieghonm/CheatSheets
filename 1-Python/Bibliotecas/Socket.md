### O que são Sockets?

Sockets são endpoints de comunicação que permitem a comunicação entre processos em diferentes dispositivos através de uma rede. Eles são a base da comunicação de rede em muitas aplicações, permitindo a troca de dados entre sistemas.

### Tipos de Sockets em Python:

Existem dois tipos principais de sockets em Python:

1. **Socket de Cliente (Client Socket):** Usado para iniciar uma conexão com um servidor.
2. **Socket de Servidor (Server Socket):** Usado para aguardar conexões de clientes.

### Como Criar um Socket em Python:

#### Socket de Cliente:
```python
import socket

# Cria um socket TCP/IP
cliente_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Conecta o socket ao endereço e porta do servidor
servidor_endereco = ('localhost', 12345)
cliente_socket.connect(servidor_endereco)

# Envia dados para o servidor
mensagem = 'Olá, servidor!'
cliente_socket.sendall(mensagem.encode())

# Fecha o socket
cliente_socket.close()
```

#### Socket de Servidor:
```python
import socket

# Cria um socket TCP/IP
servidor_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Associa o socket a um endereço e porta
servidor_endereco = ('localhost', 12345)
servidor_socket.bind(servidor_endereco)

# Define o socket para aceitar conexões
servidor_socket.listen(1)

print('Aguardando conexões...')

while True:
    # Espera por uma conexão
    cliente_socket, cliente_endereco = servidor_socket.accept()

    print('Conexão recebida de:', cliente_endereco)

    # Recebe os dados do cliente
    dados = cliente_socket.recv(1024)

    print('Dados recebidos:', dados.decode())

    # Fecha o socket do cliente
    cliente_socket.close()
```

