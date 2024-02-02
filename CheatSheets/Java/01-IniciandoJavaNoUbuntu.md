*Para instalar o Oracle Java 11 no Debian e Ubuntu (e derivados):*

> sudo echo "deb http://ppa.launchpad.net/linuxuprising/java/ubuntu bionic main" | tee /etc/apt/sources.list.d/linuxuprising-java.list
> sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 73C3DB2A
> sudo apt-get update
> sudo apt-get install oracle-java11-installer
> exit

Definir o Oracle Java 11 como padrão, caso você já tenha alguma instalação do Java:

> sudo apt install oracle-java11-set-default


Para verificar a versão do Java instalada, execute o comando abaixo:

java -version
java version "11.0.2" 2019-01-15 LTS
Java(TM) SE Runtime Environment 18.9 (build 11.0.2+9-LTS)
Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.2+9-LTS, mixed mode)

Para verificar a versão do compilador Java:

javac -version
javac 11.0.2

Caso queira desinstalar o Oracle Java 11 no Ubuntu, Linux Mint ou Debian, execute o comando abaixo:

> sudo apt remove oracle-java11-set-default