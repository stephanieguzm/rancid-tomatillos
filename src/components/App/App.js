import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import Navbar from '../Navbar/Navbar'
import IndividualMovie from '../IndividualMovie/IndividualMovie'
import Error from '../Error/Error'
import './App.css'

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
    console.log(this.state.hasError)
    return (
      <div>
        <Navbar />
        <Route exact path='/'
          render={() => <MoviesContainer 
          movies={this.state.movies} 
          error={this.state.hasError}
          /> 
        } />
        <Route exact 
          path='/:id'
          render={({ match }) => {
            const matchId = match.params.id
            return <IndividualMovie selectedMovie={matchId} />
          }
        } />
        {/* {this.state.hasError && <Error />}  */}
        {!this.state.movies.length && !this.state.hasError ? <p className="spinner"></p> : <></>}
      </div>
    )
  }
}


export default App


