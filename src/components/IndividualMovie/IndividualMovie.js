import React from "react"
import './IndividualMovie.css'

const IndividualMovie = (props) => {
  console.log('individualMovie', props.selectedMovie)
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

// "id": 694919,
// "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
// "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
// "title": "Money Plane",
// "average_rating": 6.666666666666667,
// "release_date": "2020-09-29"