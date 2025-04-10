describe('Contact form', () => {
  it('Scrolls to contact', () => {
    cy.visit("/")

    const contactTitle = cy.get("#contact")
    contactTitle.scrollIntoView()


  })
})
