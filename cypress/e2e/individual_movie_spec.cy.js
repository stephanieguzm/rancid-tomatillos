describe('As a user, when I click on a movie, I am shown additional details about that movie', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {
      fixture: 'allMovies.json'
    })
    cy.visit('http://localhost:3000/').wait(2000)
  })

  it.skip('should display an error message (500 status code) if the individual movie is unable to render', () => {
    cy
      .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/581392', 
      {statusCode: 500, body: {message: `Movies cannot load. Please try again.` }})
  })

  it.skip('should render all the details about the movie they clicked on', () => {
    cy
      .get('.movie-card').first().click()
      .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
        fixture: 'movie1.json'
      })
      .visit('http://localhost:3000/694919').wait(2000)
      .url().should('eq', 'http://localhost:3000/694919')
      .get('h1.individual-movie-title').contains("Money Plane")
      .get('.individual-movie-img').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg')
      .get('.individual-movie-text').contains(`A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.`)
      .get('.individual-movie-text').contains('Action')
      .get('.individual-movie-text').contains('82 minutes')
  })


  it.skip('should render all the details about a different movie they clicked on', () => {
    cy
      .get('.movie-card').last().click()
      .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/581392', {
        fixture: 'movie2.json'
      })
      .visit('http://localhost:3000/581392').wait(2000)
      .url().should('eq', 'http://localhost:3000/581392')
      .get('h1.individual-movie-title').contains("Peninsula")
      .get('.individual-movie-img').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg')
      .get('.individual-movie-text').contains(`A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula.`)
      .get('.individual-movie-text').contains('Action, Horror, Thriller')
      .get('.individual-movie-text').contains('114 minutes')
  })



  it.skip('should no longer display the dashboard that displays all the movies', () => {
    cy
      .visit('http://localhost:3000/694919').wait(2000)
      .url().should('eq', 'http://localhost:3000/694919')
      .url().should('not.eq', 'http://localhost:3000/')
      .get('.movie-container').should('not.exist')
  })
  
    it.skip('should display the navbar with the application logo and home button', () => {
      cy
       .get('.navBar').should('exist')
       .get('.logo').should('exist')
    
  })
  
  
})







 //be able to click the home button OR the logo to return to the home view

//   - [ ] As a user, I will see a displayed error message (500 status code) if the individual movie is unable to render

// - [ ] As a user, when I click on a movie poster, I should be taken to a new page that displays an individual movie's details
// - [ ] As a user, I will see the navbar with the application logo and home button
// - [ ] As a user, I will see all the details about the movie I clicked: Movie title, tagline, backdrop image, genre, runtime, and release year
// - [ ] As a user, I should no longer see the dashboard that displays all the movies


    // .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2//movies/694919', {
    //   statusCode: 201,
    //   body: {
    //     id: 694919,
    //     title: "Money Plane",
    //     poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
    //     backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
    //     release_date: "2020-09-29",
    //     overview: "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
    //     genres: [
    //       "Action"
    //     ],
    //     budget: 0,
    //     revenue: 0,
    //     runtime: 82,
    //     tagline: "",
    //     average_rating: 6.875
    //   }})
    //   .visit('http://localhost:3000/694919')
    //   .url().should('eq','http://localhost:3000/694919' )