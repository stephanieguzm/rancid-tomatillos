describe(' As a user, I should be able to visit the site and see the Navbar (title) displayed', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display the Navbar', () => {
    cy.get('.navBar').should('exist')
    cy.get('.logo').should('exist')
  })


})