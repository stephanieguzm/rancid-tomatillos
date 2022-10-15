import React, { Component } from 'react'
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import MovieCard from '../MovieCard/MovieCard'
import './App.css'
import movieData from '../../movieData'
import Navbar from '../Navbar/Navbar'
import IndividualMovie from '../IndividualMovie/IndividualMovie'


class App extends Component {
  constructor() {
    super()
    this.state = { movies: movieData.movies, 
      // selectedMovie: {}
  }
  }

  handleClick = (id) => {
        console.log('id!', id)
  const userSelectedMovie = this.state.movies.find(movie => movie.id === id)
  this.setState({selectedMovie: userSelectedMovie})
  }

  render() {
    return (
      <div>
        <Navbar />
        {!this.state.selectedMovie && <MoviesContainer movies={this.state.movies} handleClick={this.handleClick}/>}
        {this.state.selectedMovie && <IndividualMovie selectedMovie={this.state.selectedMovie}/>}
      </div>
    )
  }
}




export default App
