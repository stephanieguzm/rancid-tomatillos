import React from 'react'
import './MovieCard.css'

const MovieCard = (props) => {
    console.log(props)
    return (
        <div className='movie-card'>
            <img src={props.posterImg} className='card-img' />
            <h3 className='titles'>{props.title}</h3>
            <p className='ratings'>🍅 {props.rating}</p>
            <button>click</button>
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