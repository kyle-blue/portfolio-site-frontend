/// <reference types="cypress" />

// @ts-ignore
declare global {
    namespace Cypress {
        interface Chainable<Subject = any> {
            getByTestId(id: string): Chainable<Element>
        }
    }
}

export {}
