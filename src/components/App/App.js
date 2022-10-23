import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
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
    console.log('hasError', this.state.hasError)
    return (
      <div>
        <Navbar />
       
        <Route exact path='/'
          render={() => <MoviesContainer movies={this.state.movies} /> } />
       <Route exact 
          path='/:id'
          render={({ match }) => {
            const matchId = match.params.id
            return <IndividualMovie selectedMovie={matchId} />
          }
        }/>
        {this.state.hasError && <Route exact path='*'
       render={()=> <Error />} />}
       {!this.state.movies.length && <p className="spinner"></p>}
     
      </div>
    )
  }
}


export default App


