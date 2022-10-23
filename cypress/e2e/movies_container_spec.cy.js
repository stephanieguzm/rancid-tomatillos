describe('As a user, when I load the application, I can see a collection of movies', () => {

beforeEach(() => {
  cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'allMovies'}).as('movies')
  cy.visit('http://localhost:3000/')
  cy.wait('@movies').then(() => {
    'response.ok'
  })
   
  })
  //if there is no link to the movies, ...isLoading will show up
  //When the data is recived, all the movie are recieved
  //however, if there is a 500 status code, the user needs to be routed to the Error page

  it('should display an error message (500 status code) if movies are unable to be displayed on the screen', () => {
    cy
      .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', 
      {statusCode: 500, body: { message: `Movies cannot load. Please try again.`}} ) 
  })

  it('should display the navbar with the application logo and home button', () => {
    cy
      .get('.navBar').should('exist')
      .get('.logo').should('exist')
  })

  it('should display all movies each with a title, movie poster, and rating', () => {
    cy
      .get('.movie-container').find('.movie-card')
      .get('.movie-card').should('have.length', 5)
      .get('.card-img').should('have.length', 5)
      .get('.titles').should('be.visible').should('have.length', 5)
      .get('.rating-container').should('exist')
      .get('.tomatillo-image').should('be.visible')
      .get('.ratings').should('have.length', 5)
    
  })

  it('should not display details for an individual movie', () => {
    cy
      .url().should('eq', 'http://localhost:3000/')
      .url().should('not.eq', 'http://localhost:3000/694919')
      .get('.individual-movie-title').should('not.exist')
      .get('.individual-movie-text').should('not.exist')
      .get('.individual-movie-img').should('not.exist')
  })

  it('Should be able to use the browser arrow buttons to go between the main page and individual movie page', () => {
    cy.get('.movie-card').first().click()
    .visit('http://localhost:3000/694919').wait(2000)
    .url().should('eq', 'http://localhost:3000/694919')
    .go('back')
    .url().should('eq', 'http://localhost:3000/')
    .go('forward')
    .url().should('eq', 'http://localhost:3000/694919')
  })
  
})


