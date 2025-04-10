describe('Contact Form', () => {
    it('Displays error snackbar when empty form submitted', () => {
        cy.visit('/')

        const submitButton = cy.getByTestId('contact-submit-button')
        submitButton.scrollIntoView({ duration: 200 })
        submitButton.click()

        const errorSnackbar = cy.getByTestId('contact-error-snackbar')
        errorSnackbar.should('be.visible')
    })

    it('Behaves correctly when correct form submitted', () => {
        cy.visit('/')

        const contactForm = cy.getByTestId('contact-form')
        contactForm.scrollIntoView({ duration: 200 })

        const nameField = contactForm.getByTestId('contact-name-input')
        nameField.type('John Doe')

        const emailField = contactForm.getByTestId('contact-email-input')
        emailField.type('test@test.com')

        const msgField = contactForm.getByTestId('contact-message-input')
        msgField.type('Test')

        cy.intercept('POST', '**send_email').as('email')

        const submitButton = cy.getByTestId('contact-submit-button')
        submitButton.click()

        cy.wait('@email').its('response.statusCode').should('eq', 200)
        contactForm.getByTestId('contact-success-snackbar').should('be.visible')
    })
})
