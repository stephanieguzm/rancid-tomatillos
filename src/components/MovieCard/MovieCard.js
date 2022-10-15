import React from 'react'
import './MovieCard.css'

const MovieCard = (props) => {
    return (
        <div className='movie-card' id={props.id} onClick={() => props.handleClick(props.id)}>
            <img src={props.posterImg} className='card-img' />
            <h3 className='titles'>{props.title}</h3>
            <p className='ratings'>🍅 {props.rating}</p>
        </div>
    )
}

export default MovieCard
