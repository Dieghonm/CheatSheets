# Venv
O que é?

Responsável por criar ambientes virtuais Python e provê um isolamento dos pacotes instalados e suas respectivas versões.

É um cliente de linha de comando que auxilia na separação de ambientes para diferentes projetos.

Para que serve?

Iniciamos um projeto que tem uma biblioteca na versão 1.4, e de repente, um novo projeto é iniciado na versão 2.0. O que fazer? Será que são compatíveis? E se eu atualizo o sistema e a versão antiga para de funcionar?

É onde o venv entra, ele serve para isolar ambientes entre projetos, ou seja, eu consigo ter dois projetos rodando, em dois ambientes diferentes, com versões diferentes da mesma biblioteca.

Como instalar

Versões atuais do Ubuntu já vem com python 3 instalado. Para as mais antigas utilize o comando sudo apt install python3-venv.

Vamos verificar se deu tudo certo?

Em um terminal digite python3 -m venv -h.

python3 -m venv -h

antes de iniciar o python e necessario ativar o venv
python3 -m venv .venv && source .venv/bin/activate