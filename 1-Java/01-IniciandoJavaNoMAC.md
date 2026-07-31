# Java + IntelliJ — Instalação, Verificação e Atualização (macOS)

## Homebrew (pré-requisito)

*Verificar se o Homebrew já está instalado*
> brew --version

*Instalar o Homebrew (caso não tenha)*
> /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

*Atualizar o Homebrew*
> brew update


## Java (OpenJDK)

*Verificar se o Java já está instalado*
> java -version
> javac -version

Se aparecer algo como "Unable to locate a Java Runtime", o Java ainda não está instalado.

*Instalar o Java via cask (forma recomendada — instala em /Library/Java/JavaVirtualMachines/ e funciona sem configuração extra)*
> brew install --cask temurin

*Instalar uma versão LTS específica (ex: 21 ou 17)*
> brew install --cask temurin@21

ou

> brew install --cask temurin@17

*Ver quais versões estão disponíveis*
> brew search temurin

*Conferir se a instalação deu certo (abra um terminal novo antes de testar)*
> java -version
> javac -version

*Ver todas as JDKs instaladas no Mac*
> /usr/libexec/java_home -V

*Configurar o JAVA_HOME*
Edite o arquivo de configuração do shell (zsh é o padrão no macOS):
> nano ~/.zshrc

Adicione no final do arquivo:
> export JAVA_HOME=$(/usr/libexec/java_home -v 21)
> export PATH=$JAVA_HOME/bin:$PATH

Salve e aplique:
> source ~/.zshrc

*Atualizar o Java*
> brew update
> brew upgrade --cask temurin

*Remover uma versão do Java*
> brew uninstall --cask temurin@17

*Alternar entre múltiplas versões instaladas (opcional, usando jenv)*
> brew install jenv
> jenv add /Library/Java/JavaVirtualMachines/temurin-21.jdk/Contents/Home
> jenv add /Library/Java/JavaVirtualMachines/temurin-17.jdk/Contents/Home
> jenv versions
> jenv global 21


## IntelliJ IDEA

*Instalar via Homebrew cask (Community, gratuita)*
> brew install --cask intellij-idea-ce

*Instalar via Homebrew cask (Ultimate, paga com trial de 30 dias)*
> brew install --cask intellij-idea

*Conferir se está instalado*
> brew list --cask | grep intellij

*Abrir o IntelliJ pelo terminal*
> open -a "IntelliJ IDEA CE"

ou

> open -a "IntelliJ IDEA"

*Atualizar o IntelliJ*
> brew update
> brew upgrade --cask intellij-idea-ce

*Desinstalar*
> brew uninstall --cask intellij-idea-ce

*Alternativa: JetBrains Toolbox*
Se você prefere gerenciar por interface gráfica (útil para manter várias IDEs/versões da JetBrains organizadas e atualizadas automaticamente):
> brew install --cask jetbrains-toolbox

Depois é só abrir o Toolbox pela pasta Applications e escolher o IntelliJ para instalar por lá.


## Configurando o JDK dentro do IntelliJ

- Abra o IntelliJ e crie/abra um projeto Java;
- Vá em `IntelliJ IDEA > Preferences` (ou `Cmd + ,`) ou `File > Project Structure` (`Cmd + ;`);
- Em `Project`, no campo `SDK`, clique em `Add SDK > JDK`;
- Aponte para o caminho do JDK (você pode confirmar com `/usr/libexec/java_home -v 21` no terminal);
- Confirme e aplique.

*modelo*
**modelo**
- [ ] modelo
- [ ] `modelo`

```java

```