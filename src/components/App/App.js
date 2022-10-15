import React, { Component } from 'react'
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import MovieCard from '../MovieCard/MovieCard'
import './App.css'
import movieData from '../../movieData'
import Navbar from '../Navbar/Navbar'


class App extends Component {
  constructor() {
    super()
    this.state = { movies: movieData.movies}
  }

  handleClick = (id) => {
        console.log('id!', id)
        // this.findSelectedMovie(event)
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
        {/* <h1 className='header'>Rancid Tomatillos</h1> */}
        <Navbar />
        <MoviesContainer movies={this.state.movies}/>
      </div>
    )
  }
}




export default App
