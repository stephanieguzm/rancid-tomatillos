import React from 'react'
import './MovieCard.css'
import tomatillo from '../../assets/tomatillo.png'

const MovieCard = (props) => {
    return (
        <div className='movie-card' id={props.id} onClick={() => props.handleClick(props.id)}>
            <img src={props.posterImg} alt={`${props.title}moviePoster`} className='card-img' />
            <h3 className='titles'>{props.title}</h3>
            <div className='rating-container'>
            <img className='tomatillo-image' src={tomatillo} /> 
            {/* <span> {props.rating}</span> */}
            <p className='ratings'> {props.rating}</p>
            </div>
        </div>
    )
}

export default MovieCard
