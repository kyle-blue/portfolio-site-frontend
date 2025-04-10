/// <reference types="cypress" />

Cypress.Commands.add('getByTestId' as any, (id: string) => {
    return cy.get(`[data-test-id="${id}"]`)
})
