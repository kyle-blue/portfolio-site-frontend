/// <reference types="cypress" />

import { expect } from 'chai'

function randomHex(length: number = 16): string {
    const hexChars = '0123456789abcdef'
    let result = ''
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * hexChars.length)
        result += hexChars[randomIndex]
    }
    return result
}

function boxAsStr(box: DOMRect) {
    return `${box.toJSON().toString()}`
}

Cypress.Commands.add('getByTestId' as any, (id: string) => {
    return cy.get(`[data-test-id="${id}"]`)
})

Cypress.Commands.add(
    'checkIsNotOverflowing' as any,
    {
        prevSubject: 'element' as any,
    },
    (subjectParam: JQuery<Element>, parent?: Cypress.Chainable<Element>) => {
        const hash = randomHex(10)
        parent && parent.as(`${hash}-parent`)
        cy.document().as('document')

        cy.then(function () {
            const subject = subjectParam[0] as Element
            const parent = this[`${hash}-parent`]?.[0] as Element | undefined
            const doc = this.document as Document

            const boundingBox = subject.getBoundingClientRect()
            let parentBoundingBox = parent?.getBoundingClientRect()

            if (!parentBoundingBox) {
                const docElement = doc.documentElement
                // scrollWidth and scrollHeight is used to get the height adjusted for the scrollbar which is usually 17px (if one is present)
                // + 1 to avoid flakiness due to slight innacuracies
                parentBoundingBox = new DOMRect(0, 0, docElement.scrollWidth + 1, docElement.scrollHeight + 1)
            }

            const parentName = parent ? 'parent' : 'window'
            expect(boundingBox.top, `Child top vs ${parentName} top`).to.be.gte(parentBoundingBox.top)
            expect(boundingBox.left, `Child left vs ${parentName} left`).to.be.gte(parentBoundingBox.left)
            expect(boundingBox.right, `Child right vs ${parentName} right`).to.be.lte(parentBoundingBox.right)
            expect(boundingBox.bottom, `Child bottom vs ${parentName} bottom`).to.be.lte(parentBoundingBox.bottom)
        })
    },
)
