Exercicio utilizando Hugo
Hugo é facilitar a criação de páginas

Vamos começar criando três arquivos, sendo eles:

config.toml: será um arquivo de configuração para o Hugo;
index.html: será o template HTML que o Hugo utilizará para gerar páginas;
_index.md: será o arquivo com o conteúdo de fato.

`sudo docker images`
`sudo docker build -t site-hugo .`
`sudo docker run -p 1234:80 -d --name meu-container site-hugo`
`sudo docker rm -f meu-container`
`sudo docker system prune -af`
