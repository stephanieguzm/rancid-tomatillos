import React from 'react'
import './MovieCard.css'
import tomatillo from '../../assets/tomatillo.png'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
    return (
        <Link to={`/${props.id}`}>
            <div className='movie-card' id={props.id} onClick={() => props.handleClick(props.id)}>
                <img src={props.posterImg} alt={`${props.title}moviePoster`} className='card-img' />
                <h3 className='titles'>{props.title}</h3>
                <div className='rating-container'>
                <img className='tomatillo-image' src={tomatillo} /> 
                <p className='ratings'> {props.rating}</p>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard
