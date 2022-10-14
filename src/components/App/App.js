import React, { Component } from 'react'
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import MovieCard from '../MovieCard/MovieCard'
import './App.css'
import movieData from '../../movieData'


class App extends Component {
  constructor() {
    super()
    this.state = { movies: movieData.movies}
  }

      
  handleClick = (event) => {
        event.preventDefault();
        // console.log('this movie!', event.target.value)
        this.findSelectedMovie(event)
    //this method will call on a method within the App class and pass through the movie selection (event.target.value)
    }

  findSelectedMovie = () => {
    console.log('Hello from App!')
    // use find() to locate the movie with the id that the user selected
    // id is passed as a parameter
    // then we'll find the right movie by matching the movie.id to the user selected movie id
  }

  render() {
    return (
      <div>
        <h1>Rancid Tomatillos</h1>
        <MoviesContainer movies={this.state.movies} onClick={this.handleClick}/>
      </div>
    )
  }
}




export default App
