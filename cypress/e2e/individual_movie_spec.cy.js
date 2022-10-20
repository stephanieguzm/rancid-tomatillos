describe('As a user, when I click on a movie, I am shown additional details about that movie', () => {

  beforeEach(() => {
    cy
    .visit('http://localhost:3000')
    .get('[id="694919"]')
    .click()
    .url().should('eq','http://localhost:3000/694919' )
    // .visit('http://localhost:3000/694919')
    .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2//movies/694919', {
      statusCode: 201,
      body: {
          id: 694919,
          title: "Money Plane",
          poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
          backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
          release_date: "2020-09-29",
          overview: "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
          genres: [
          "Action"
          ],
          budget: 0,
          revenue: 0,
          runtime: 82,
          tagline: "",
          average_rating: 6.875
      }})
      .visit('http://localhost:3000/694919')
  })

  it('should display an error message (500 status code) if the individual movie is unable to render', () => {
    cy
     .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2//movies/694919', 
     {statusCode: 500, body: {message: `Movies cannot load. Please try again.` }})
  })
  
  it('should display the navbar with the application logo and home button', () => {
      cy
       .get('.navBar').should('exist')
       .get('.logo').should('exist')
    
  })

  it.skip('should render all the details about the movie they clicked on', () => {
    cy
      // .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2//movies/694919', {
      //   statusCode: 201,
      //   body: {
      //       id: 694919,
      //       title: "Money Plane",
      //       poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      //       backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      //       release_date: "2020-09-29",
      //       overview: "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
      //       genres: [
      //       "Action"
      //       ],
      //       budget: 0,
      //       revenue: 0,
      //       runtime: 82,
      //       tagline: "",
      //       average_rating: 6.875
      //   }})
      .url().should('include', '/694919')
      .get('h1.individual-movie-title').contains("Money Plane")
      .get('.individual-movie-img').should('have.attr', 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg')
      .get('average_rating').contains('6.6')
      .get('id').contains(694919)
       //.get('.home-button').click()
      

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