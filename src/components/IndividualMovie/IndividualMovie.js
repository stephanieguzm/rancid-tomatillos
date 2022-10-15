import React from "react"
import './IndividualMovie.css'

const IndividualMovie = (props) => {
  return (
    <section className='individual-movie' id={props.selectedMovie.id}>
      <img className='individual-movie-img' alt={props.selectedMovie.title} src={props.selectedMovie.backdrop_path}/>
      <h1 className='individual-movie-title'>{props.selectedMovie.title}</h1>
      <p className='individual-movie-text'>{props.selectedMovie.average_rating}</p>
      <p className='individual-movie-text'>{props.selectedMovie.release_date}</p>
    </section>
  )
}

export default IndividualMovie
