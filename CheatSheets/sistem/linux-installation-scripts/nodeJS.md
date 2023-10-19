# Node.js

# Atualize o sistema
sudo apt update

# Instale o Node.js
sudo apt install nodejs

# Verifique a versão instalada
nodejs -v

# Instale o npm - gerenciador de pacotes do Node.js
sudo apt install npm

# Crie um novo projeto do Node.js
npm init

# Instale um pacote do Node.js
npm install <nome-do-pacote>

# Instale um pacote globalmente
npm install -g <nome-do-pacote>

# Execute um arquivo JavaScript com o Node.js
node <arquivo.js>

# Inicie um servidor local com o Node.js (exemplo usando o pacote http-server)
npx http-server

# Execute testes automatizados com o Node.js (exemplo usando o pacote Jest)
npm install --save-dev jest       # Instala o Jest como dependência de desenvolvimento
npm test                          # Executa os testes

