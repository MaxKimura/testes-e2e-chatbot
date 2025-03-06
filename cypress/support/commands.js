// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('abrirChatBot', () => {
    cy.visit('/')
  
    cy.get('.rcb-toggle-button')
      .should('be.visible')
      .click()
  
    cy.get('.rcb-chat-header span')
      .should('be.visible')
      .and('have.text', 'Sensei')
  })
  
  Cypress.Commands.add('verificarMensagem', (mensagemEsperada, timeout = 4000) => {
    cy.contains('.rcb-bot-message', mensagemEsperada, {timeout: timeout})
    .should('be.visible')
  })
  
  Cypress.Commands.add('selecionarOpção', (opção,) => {
    cy.contains('.rcb-options', opção)
    .click()
  })
  
  Cypress.Commands.add('enviarMensagem', (mensagem,) => {
    cy.get('textarea[placeholder^="Escreva sua mensagem"]')
      .type(mensagem)
  
    cy.get('.rcb-send-button').click()
  })