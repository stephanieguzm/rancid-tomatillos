import React, { Component } from 'react'
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import './App.css'
import movieData from '../../movieData'


class App extends Component {
  constructor() {
    super()
    this.state = { movies: movieData.movies}
  }


  render() {
    return (
      <div>
        <h1>Rancid Tomatillos</h1>
        <MoviesContainer movies={this.state.movies}/>
      </div>
    )
  }
}




export default App
