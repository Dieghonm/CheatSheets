Crie um Dockerfile utilizando a imagem chuanwen/cowsay.

FROM chuanwen/cowsay:latest

Agora defina um ENTRYPOINT para a execução do comando.

ENTRYPOINT [ "/usr/games/cowsay" ]

Utilize o CMD para definir uma mensagem padrão.

CMD [ "#VQV Trybe" ]

Gere uma build e execute um contêiner baseado em sua imagem sem passar nenhum comando.

docker image build ./ -t cowsay
Agora execute um novo contêiner passando sua mensagem para testar. Além da mensagem você pode utilizar a opção -l para listar outros personagens disponíveis e então executar algo como docker container run cowsay -f dragon-and-cow "VQM TRYBE", para exibir um dragão junto com a vaquinha.

Para rodar com a mensagem padrão que você criou no [CMD] execute:

docker container run cowsay

Você também pode passar um parâmetro logo após o comando:

docker container run cowsay Go Trybe!

Este comando vai rodar um leão com a frase #VQV TRYBE:

docker container run cowsay -f moofasa "#VQV TRYBE"

Finalmente, se quiser obter a lista com os outros animais, rode o comando:

docker container run cowsay -l