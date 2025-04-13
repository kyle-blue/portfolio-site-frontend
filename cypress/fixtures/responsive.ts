interface ElementToCheck {
    child: string
    parent?: string
    setup?: () => void
}

const elementsToCheckAreVisible: ElementToCheck[] = [
    { child: 'header-container' },
    { child: 'expertise-container' },
    { child: 'projects-elements', parent: 'projects-container' },
    { child: 'experience-elements', parent: 'experience-container' },
    { child: 'contact-form' },
    { child: 'footer-elements' },
]

export const elementsToCheckAreVisibleMobile: ElementToCheck[] = [
    {
        child: 'navigation-bar-elements',
        setup: () => {
            cy.getByTestId('navigation-bar-elements')
                .invoke('css', 'transition', 'none')
                .invoke('css', '-webkit-transition', 'none')
                .invoke('css', 'transform', 'none')
                .should('have.css', 'transform', 'none')
        },
    },
    ...elementsToCheckAreVisible,
]

export const elementsToCheckAreVisibleDesktop: ElementToCheck[] = [
    { child: 'navigation-bar-elements', parent: 'navigation-bar' },
    ...elementsToCheckAreVisible,
]
