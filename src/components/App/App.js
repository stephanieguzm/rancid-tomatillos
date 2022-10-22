import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import Navbar from '../Navbar/Navbar'
import IndividualMovie from '../IndividualMovie/IndividualMovie'
import './App.css'
import Error from '../Error/Error'

class App extends Component {
  constructor() {
    super()
    this.state = { 
      movies: [], 
      hasError: false,
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
      .then( data => this.setState({ movies: data.movies, 
      }))
      .catch( error => {
        if (error) {
          this.setState({ hasError: true })
        }
      })
  }

  render() {
    return (
      <div>
        <Navbar />
        {!this.state.movies.length && <h2>Page is Loading...</h2>}
        {this.state.hasError && <Route exact path='/error'
        render={()=> <Error />} />}
        <Route exact path='/'
          render={() => <MoviesContainer movies={this.state.movies} /> } />
        {!this.state.hasError && <Route exact 
          path='/:id'
          render={({ match }) => {
            const matchId = match.params.id
            return <IndividualMovie selectedMovie={matchId} />
          }
        }/>}
      </div>
    )
  }
}


export default App


