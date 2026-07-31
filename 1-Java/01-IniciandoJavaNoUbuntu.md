# Java + IntelliJ — Instalação, Verificação e Atualização (Ubuntu)

## Java (OpenJDK)

*Verificar se o Java já está instalado*
> java -version
> javac -version

Se aparecer "command not found", o Java ainda não está instalado.

*Atualizar a lista de pacotes*
> sudo apt update

*Instalar o JDK padrão (inclui o JRE)*
> sudo apt install default-jdk -y

*Instalar uma versão específica do OpenJDK (LTS recomendadas: 17, 21)*
> sudo apt install openjdk-21-jdk -y

ou

> sudo apt install openjdk-17-jdk -y

*Conferir se a instalação deu certo*
> java -version
> javac -version

*Ver onde o Java foi instalado (necessário para configurar o JAVA_HOME)*
> ls /usr/lib/jvm/

*Configurar a variável JAVA_HOME*
Edite o arquivo `.bashrc`:
> nano ~/.bashrc

Adicione no final do arquivo (trocando o caminho pelo que apareceu no `ls` acima):
> export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
> export PATH=$PATH:$JAVA_HOME/bin

Salve e aplique as alterações:
> source ~/.bashrc

*Se houver mais de uma versão instalada, trocar a versão padrão*
> sudo update-alternatives --config java
> sudo update-alternatives --config javac

*Atualizar o Java*
Como foi instalado via `apt`, ele é atualizado junto com o sistema:
> sudo apt update && sudo apt upgrade -y

*Remover uma versão do Java (se precisar)*
> sudo apt remove openjdk-17-jdk -y


## IntelliJ IDEA

*Instalação via Snap (forma oficial recomendada pela JetBrains, mantém-se atualizado sozinho)*
> sudo snap install intellij-idea-community --classic

ou, para a versão Ultimate (paga, com trial de 30 dias):
> sudo snap install intellij-idea --classic

Obs: desde 2025 a JetBrains unificou o pacote — o snap `intellij-idea` já contém Community + recursos extras liberados, e o Ultimate desbloqueia via assinatura.

*Verificar se está instalado e qual a versão*
> snap list | grep intellij

*Abrir o IntelliJ pelo terminal*
> intellij-idea-community

ou

> intellij-idea

*Atualizar o IntelliJ*
Por padrão o snap atualiza sozinho automaticamente (em segundo plano, todo dia). Mas se quiser forçar a atualização na hora:
> sudo snap refresh intellij-idea

*Impedir atualização automática (travar na versão atual)*
> sudo snap refresh --hold intellij-idea

*Desfazer o "hold" e voltar a atualizar automaticamente*
> sudo snap refresh --unhold intellij-idea

*Desinstalar*
> sudo snap remove intellij-idea


## Configurando o JDK dentro do IntelliJ

- Abra o IntelliJ e crie/abra um projeto Java;
- Vá em `File > Project Structure` (ou `Ctrl + Alt + Shift + S`);
- Em `Project`, no campo `SDK`, clique em `Add SDK > JDK`;
- Aponte para o caminho do JDK instalado (o mesmo que você viu em `/usr/lib/jvm/`);
- Confirme e aplique.

*modelo*
**modelo**
- [ ] modelo
- [ ] `modelo`

```java

```