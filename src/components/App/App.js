import React, { Component } from 'react'
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import movieData from '../../movieData'
import Navbar from '../Navbar/Navbar'
import IndividualMovie from '../IndividualMovie/IndividualMovie'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = { movies: movieData.movies, selectedMovie: "" }
  }

  handleClick = (id) => {
  const userSelectedMovie = this.state.movies.find(movie => movie.id === id)
  this.setState({selectedMovie: userSelectedMovie})
  }

  returnHome = () => {
    this.setState({ selectedMovie: "" })
  }

  render() {
    return (
      <div>
        <Navbar selectedMovie={this.state.selectedMovie} returnHome={this.returnHome}/>
        {!this.state.selectedMovie && <MoviesContainer movies={this.state.movies} handleClick={this.handleClick}/>}
        {this.state.selectedMovie && 
        <IndividualMovie selectedMovie={this.state.selectedMovie}/>
        }
      </div>
    )
  }
}

export default App
