import React, { Component } from 'react'
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import MovieCard from '../MovieCard/MovieCard'
import './App.css'
import movieData from '../../movieData'
import Navbar from '../Navbar/Navbar'


class App extends Component {
  constructor() {
    super()
    this.state = { movies: movieData.movies, selectedMovie: {}}
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
        <MoviesContainer movies={this.state.movies} handleClick={this.handleClick}/>
      </div>
    )
  }
}




export default App
