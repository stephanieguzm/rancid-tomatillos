import React, { Component } from "react"
import './IndividualMovie.css'

class IndividualMovie extends Component {
  constructor() {
    super()
    this.state = {
      selectedMovie: {},
      error: ''
    }
  }
  
  componentDidMount() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2//movies/${this.props.selectedMovie}`)
    .then( response=> {
      if (!response.ok) {
        throw new Error()
      }
      return response.json() 
    })
    .then( data => this.setState({ selectedMovie: data.movie }))
    .catch( error => this.setState({ error: error.message }))
  }
  
  render() {
    const movie = this.state.selectedMovie
    const year = String(movie.release_date).split('-', 1)[0]
    const genres = String(movie.genres).split(',').join(', ')

    return (
      <div>
        <section className='individual-movie' id={movie.id}>
          <h1 className='individual-movie-title'>{movie.title}</h1>
          <p className='individual-movie-text'>{movie.tagline}</p>
          <img className='individual-movie-img' alt={movie.title} src={movie.backdrop_path}/>
          <p className='individual-movie-text'>{movie.overview}</p> 
          <p className='individual-movie-text'>{genres}  |  {movie.runtime} minutes  |  {year} </p>
        </section>
      </div>
    )
  }
}




export default IndividualMovie


