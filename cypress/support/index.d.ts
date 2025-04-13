/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="cypress" />

declare global {
    namespace Cypress {
        interface Chainable<Subject = any> {
            getByTestId(id: string): Chainable<Element>
        }
    }
}

declare global {
    namespace Cypress {
        interface Chainable<Subject extends Element> {
            checkIsNotOverflowing(parent?: Chainable<Subject>): void
        }
    }
}

export {}
