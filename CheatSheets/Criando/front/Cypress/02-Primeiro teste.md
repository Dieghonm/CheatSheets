# Primeiro teste E2E

na tela inicial do cypress escolha o e2e, continue ate criar o aquivo para o teste.
depois no vscode vamos por o sequinte teste

```js
describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Header')
  })
})
```
Este teste vai buscar alguma palavra renderizada na tela, no caso a palavra Header


*Evento de click*

```js
describe('My First Test', () => {
  it('clicks the link "type"', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()
  })
})
```

*Verificar a url*

```js
describe(
  ...
    cy.url().should('include', '/commands/actions')
```

*Input e validação*
```js
    cy.get('.action-email').type('fake@email.com')
    cy.get('.action-email').should('have.value', 'fake@email.com')
```






















*modelo*
**modelo**
- [ ] modelo
- [ ] `modelo`

```js
const model = "";
const func = () => {
    return model;
}
export default func;

```