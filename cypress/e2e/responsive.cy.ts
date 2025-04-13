import screenSizes from '../fixtures/screenSizes.json'
import { elementsToCheckAreVisibleMobile, elementsToCheckAreVisibleDesktop } from '../fixtures/responsive'

describe('responsive', () => {
    it('All elements are visible on desktop', () => {
        cy.visit('/')
        for (let screen of screenSizes.desktop) {
            cy.viewport(screen.width, screen.height)
            cy.log(`Checking elements are visible for ${screen.name} --- Dim: ${screen.width}*${screen.height}`)
            for (let element of elementsToCheckAreVisibleDesktop) {
                const parent = element.parent && cy.getByTestId(element.parent)
                const child = cy.getByTestId(element.child)

                child.checkIsNotOverflowing(parent)
            }
        }
    })
    it('All elements are visible on mobile', () => {
        cy.visit('/')

        for (let screen of screenSizes.mobile) {
            cy.viewport(screen.width, screen.height)
            cy.log(`Checking elements are visible for ${screen.name} --- Dim: ${screen.width}*${screen.height}`)
            for (let element of elementsToCheckAreVisibleMobile) {
                ;(element as any)?.setup?.()
                const parent = element.parent && cy.getByTestId(element.parent)
                const child = cy.getByTestId(element.child)

                child.checkIsNotOverflowing(parent)
            }
        }
    })
    it('Correct (flex & grid) layouts on desktop', () => {})
    it('Correct (flex & grid) layouts on mobile', () => {})
})
