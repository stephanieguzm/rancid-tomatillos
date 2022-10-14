import React from 'react'
import './MovieCard.css'

const MovieCard = (props) => {
    
    const handleClick = (event) => {
        event.preventDefault();
        console.log('this movie!', event.target.value)
        // this.props.findSelectedMovie(event.target.value)
    //this method will call on a method within the App class and pass through the movie selection (event.target.value)
    }

    return (
        <div className='movie-card' value={props.id}>
            <img src={props.posterImg} className='card-img'/>
            <h3>{props.title}</h3>
            <p>🍅 {props.rating}</p>
            <button type='button' value={props.id} onClick={(event) => handleClick(event)}>click</button>
        </div>
    )
}

export default MovieCard

// "id": 694919,
// "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
// "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
// "title": "Money Plane",
// "average_rating": 6.666666666666667,
// "release_date": "2020-09-29"