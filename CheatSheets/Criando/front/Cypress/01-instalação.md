# CYPRESS

https://www.cypress.io/
abra o terminal na raiz do projeto e digite
`npm install cypress --save-dev`

digite no terminal `npx cypress oppen` para iniciar o cypress

o cypress vai abrir com uma tela para voce escolher que tipo de teste deseja
e2e para testar toda a aplicação
Component Testing para testar um componente individual
escolha um e na proxima tela clique me um navegador e em start...

o cypress abrirá outra tela, nessa clique em criate new spec, nomeie o arquivo de testes e clique em criate.

agora na pasta do cypress voce vai encontrar as seguites pastas

Estrutura de pastas
    Fixtures: É onde seus mocks são armazenados podendo ser utilizados em qualquer teste.

    Integrations: Aqui é o diretório onde criará seus arquivos de teste exemplo : app_spec.js ou .js .jsx .coffee .cjsx.

    Plugins: Com eles é possível trocar, modificar ou estender o comportamento interno do Cypress.
    Exemplos de plugins:
    - Trocar variáveis de ambiente durante o processo de execução
    - Carregar arquivos utilizando a lib fs

    Support: Neste diretório é possível criar comandos que podem ser executados dentro dos testes ou sobrescrever comandos já existentes.
    Exemplo de comandos:
    - Comando para login ( Evitar duplicação de código)
    - Comando para logout

vá na pasta integrations e abra seu arquivo de testes.
cole nele o sequinte teste

```js
describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})
```

agora rode o cypress com o `npx cypress oppen` e veja se rodou.

