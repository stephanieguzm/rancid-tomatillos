import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import Navbar from '../Navbar/Navbar'
import IndividualMovie from '../IndividualMovie/IndividualMovie'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = { 
      movies: [], 
      selectedMovie: {},
      error: '',
      isLoading: true,
      isHome: true
     }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then( response=> {
        if (!response.ok) {
          throw new Error()
        }
        return response.json() 
      })
      .then( data => this.setState({ movies: data.movies, loading: false}))
      .catch( error => this.setState({ error: error.message }))
  }

  handleClick = (id) => {
    this.setState({ isHome: false })
    const userSelectedMovie = this.state.movies.find(movie => movie.id === id)
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2//movies/${userSelectedMovie.id}`)
      .then( response=> {
        if (!response.ok) {
          throw new Error()
        }
        return response.json() 
      })
      .then( data => this.setState({ selectedMovie: data.movie }))
      .catch( error => this.setState({ error: error.message }))
  }

  returnHome = () => {
    this.setState({ selectedMovie: {}, isHome: true })
  }

  render() {
    return (
      <div>
    
        <Navbar selectedMovie={this.state.selectedMovie} returnHome={this.returnHome} isHome={this.state.isHome}/>
     
        {this.state.isLoading && 
          <h2>Page is Loading...</h2>
          // <img />
        }
        {this.state.error && 
          <h2 className='error-text'>There was an error: {this.state.error}. Movies cannot load. Please try again.</h2>}
        <Route exact path='/'
          render={() => <MoviesContainer movies={this.state.movies} handleClick={this.handleClick}/> } />
        <Route exact path='/:id' 
          render={() => <IndividualMovie selectedMovie={this.state.selectedMovie}/>}  />
      </div>
    )
  }
}

export default App
