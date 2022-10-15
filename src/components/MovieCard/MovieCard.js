import React from 'react'
import './MovieCard.css'

const MovieCard = (props) => {
    return (
        <div className='movie-card' id={props.id} onClick={() => props.handleClick(props.id)}>
            <img src={props.posterImg} className='card-img' />
            <h3>{props.title}</h3>
            <p>🍅 {props.rating}</p>
        </div>
    )
}

export default MovieCard
