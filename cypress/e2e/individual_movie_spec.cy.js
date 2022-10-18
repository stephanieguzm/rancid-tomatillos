describe('As a user, when I click on a movie, I’m shown additional details about that movie', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it.skip('should display an error message (500 status code) if the individual movie is unable to render', () => {
    cy.get('.error-text').should('contain','Movies cannot load. Please try again' )
  })

  it.skip('should be able to see all the details about the movie they clicked on', () => {
    cy.get('.error-text').should('contain','Movies cannot load. Please try again' )
  })

  it.skip('should display the navbar with the application logo and home button', () => {
    cy.get('.error-text').should('contain','Movies cannot load. Please try again' )
  })

  it.skip('should no longer display the dashboard that displays all the movies', () => {
    // ('not.exist')
  })

 

//   - [ ] As a user, I will see a displayed error message (500 status code) if the individual movie is unable to render

// - [ ] As a user, when I click on a movie poster, I should be taken to a new page that displays an individual movie's details
// - [ ] As a user, I will see the navbar with the application logo and home button
// - [ ] As a user, I will see all the details about the movie I clicked: Movie title, tagline, backdrop image, genre, runtime, and release year
// - [ ] As a user, I should no longer see the dashboard that displays all the movies




})