import React, { Component } from 'react'
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import './App.css'
import movieData from '../../movieData'


class App extends Component {
  constructor() {
    super()
    this.state = { movies: movieData.movies}
  }

  // handleClick = (id) => {
  //   const selectedMovie = this.state.movies.find(movie => movie.id === id)
  // }


  render() {
    return (
      <div>
        <h1 className='header'>Rancid Tomatillos</h1>
        <MoviesContainer movies={this.state.movies}/>
      </div>
    )
  }
}




export default App
