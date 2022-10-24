import React, { Component } from "react"
import './IndividualMovie.css'
import Error from '../Error/Error'

class IndividualMovie extends Component {
  constructor() {
    super()
    this.state = {
      selectedMovie: {},
      hasError: false
    }
  }
  
  componentDidMount() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.selectedMovie}`)
    .then( response=> {
      if (!response.ok) {
        throw new Error()
      }
      return response.json() 
    })
    .then( data => this.setState({ selectedMovie: data.movie }))
      .catch( error => {
        if (error) {
          this.setState({ hasError: true })
        }
      })
  }
  
  displayMovie = () => {
    const movie = this.state.selectedMovie
    const year = String(movie.release_date).split('-', 1)[0]
    const genres = String(movie.genres).split(',').join(', ')
    
    return (
      <section className='individual-movie' id={movie.id}>
      <img className='individual-movie-img' alt={movie.title} src={movie.backdrop_path}/>
      <div className='movie-details'>
      <h1 className='individual-movie-title'>{movie.title}</h1>
      <p className='individual-movie-text movie-tagLine'>{movie.tagline}</p>
      <p className='individual-movie-text'>{movie.overview}</p> 
      <p className='individual-movie-text'>{genres}  |  {movie.runtime} minutes  |  {year} </p>
      </div>
      </section>
    )
  }

  render() {
    return (
      <section>
        {this.state.hasError ? <Error /> : <>{this.displayMovie()}</>}
      </section>
    );
  }
}

export default IndividualMovie


