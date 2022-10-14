import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MoviesContainer.css'

const MoviesContainer = (props) => {
   
    const movieCards = props.movies.map(movie => {
        return (
            <MovieCard 
                backDropImg={movie.backdrop_path}
                title={movie.title}
                rating={movie.average_rating}
                key={movie.id}
            />
        )
    })

    return (
        <div className='movie-container'>
            {movieCards}
        </div>
    )
   
}


export default MoviesContainer

