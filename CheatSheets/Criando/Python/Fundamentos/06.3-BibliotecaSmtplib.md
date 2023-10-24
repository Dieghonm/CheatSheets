# Enviando E-mails com a Biblioteca `smtplib` em Python

A biblioteca `smtplib` permite que você envie e-mails por meio de servidores de e-mail usando o protocolo SMTP (Simple Mail Transfer Protocol).

## 1. Importando a Biblioteca `smtplib`

```python
import smtplib
```

## 2. Configurando as Credenciais

Você precisa fornecer suas credenciais (endereço de e-mail e senha) e o servidor SMTP. Recomenda-se usar variáveis de ambiente ou um arquivo de configuração externo para manter suas credenciais seguras e fora do código-fonte.

```python
# Configuração das credenciais
email = "seu_email@gmail.com"
senha = "sua_senha"

# Configuração do servidor SMTP do Gmail (exemplo)
servidor_smtp = "smtp.gmail.com"
```

## 3. Estabelecendo uma Conexão com o Servidor SMTP

Crie uma conexão com o servidor SMTP:

```python
# Estabelecendo uma conexão com o servidor SMTP
conexao = smtplib.SMTP(servidor_smtp, 587)
conexao.starttls()  # Inicie uma conexão TLS segura
```

## 4. Autenticando-se com o Servidor

Faça login na sua conta de e-mail:

```python
# Autenticação no servidor SMTP
conexao.login(email, senha)
```

## 5. Compondo o E-mail

Crie o corpo do e-mail, incluindo o destinatário, o assunto e o conteúdo:

```python
destinatario = "destinatario@email.com"
assunto = "Assunto do E-mail"
corpo_email = "Conteúdo do seu e-mail aqui."
```

## 6. Enviando o E-mail

Envie o e-mail:

```python
# Compondo o e-mail
mensagem = f"Assunto: {assunto}\n\n{corpo_email}"

# Enviando o e-mail
conexao.sendmail(email, destinatario, mensagem)
```

## 7. Encerrando a Conexão

Após enviar o e-mail, encerre a conexão com o servidor SMTP:

```python
# Encerrando a conexão
conexao.quit()
```