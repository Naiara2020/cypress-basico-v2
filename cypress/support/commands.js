Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('Naiara')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('naiara@exemplo.com')
    cy.get('#open-text-area').type('Teste')
    // Adicione outros campos obrigatórios aqui
    cy.contains('button', 'Enviar').click()
})



