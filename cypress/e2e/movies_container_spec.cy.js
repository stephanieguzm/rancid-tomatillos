describe('As a user, when I load the application, I can see a collection of movies', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display an error message (500 status code) if movies are unable to be displayed on the screen', () => {
    cy
      .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', 
      {statusCode: 500, body: { message: `Movies cannot load. Please try again.`}} ) 
  })

  it('should display all movies each with a title, movie poster, and rating', () => {
    cy
      .get('img').should('be.visible')
      .get('.movie-container').should('exist')
      .get('.movie-card').should('exist').should('have.length', 40)
      .get('.card-img').should('be.visible')
      .get('.titles').should('be.visible').should('have.length', 40)
      .get('.rating-container').should('exist')
      .get('.tomatillo-image').should('be.visible')
      .get('.ratings').should('have.length', 40)
    
  })

  it.skip('should not display details for an individual movie', () => {

  })

})


