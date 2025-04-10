describe('Contact Form', () => {
  it('Displays error snackbar when empty form submitted', () => {
    cy.visit("/")

    const submitButton = cy.getByTestId("contact-submit-button")
    submitButton.scrollIntoView({ duration: 200 })
    submitButton.click()

    const errorSnackbar = cy.getByTestId("contact-error-snackbar")
    errorSnackbar.should("be.visible")
  })
})
