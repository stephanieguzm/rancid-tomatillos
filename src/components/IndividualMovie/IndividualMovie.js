import React from "react"
import './IndividualMovie.css'

const IndividualMovie = (props) => {
  
  const formatDate = props.selectedMovie.release_date.split('-', 1)

  return (
    <section className='individual-movie' id={props.selectedMovie.id}>
      <h1 className='individual-movie-title'>{props.selectedMovie.title}</h1>
      <p className='individual-movie-text'>{props.selectedMovie.tagline}</p>
      <img className='individual-movie-img' alt={props.selectedMovie.title} src={props.selectedMovie.backdrop_path}/>
      <p className='individual-movie-text'>{props.selectedMovie.overview}</p>
      <p className='individual-movie-text'>{props.selectedMovie.genres} | {props.selectedMovie.runtime} minutes | {formatDate}</p>
      {/* <p className='individual-movie-text'>Genre: {props.selectedMovie.genres}</p> */}
    </section>
  )
}

export default IndividualMovie


