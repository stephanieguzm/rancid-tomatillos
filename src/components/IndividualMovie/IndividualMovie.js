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
    // const formatDate = Number(this.props.selectedMovie.release_date).split('-', 1)
    const movie = this.state.selectedMovie
    return (
      <div>
        <section className='individual-movie' id={movie.id}>
          <h1 className='individual-movie-title'>{movie.title}</h1>
          <p className='individual-movie-text'>{movie.tagline}</p>
          <img className='individual-movie-img' alt={movie.title} src={movie.backdrop_path}/>
          <p className='individual-movie-text'>{movie.overview}</p> 
          <p className='individual-movie-text'>{movie.genres} | {movie.runtime} minutes |  </p>
        </section>
      </div>
    )
  }
}

export default IndividualMovie


