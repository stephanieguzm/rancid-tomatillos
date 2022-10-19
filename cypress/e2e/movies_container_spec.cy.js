describe('As a user, when I load the application, I can see a collection of movies', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it.skip('should display an error message (500 status code) if movies are unable to be displayed on the screen', () => {
    cy.get('.error-text').should('contain','Movies cannot load. Please try again' )
    // intercept? 
    //200 if you get movies back
  })

  it('should display all movies each with a title, movie poster, and rating', () => {
    cy.get('.movie-container').should('exist')
    cy.get('.movie-card').should('exist')
    cy.get('.card-img').should('exist')
    cy.get('.titles').should('exist')
    cy.get('.rating-container').should('exist')
    cy.get('.tomatillo-image').should('exist')
    cy.get('.ratings').should('exist')
    // intercept?
  })

  it.skip('should not display details for an individual movie', () => {

  })

})


