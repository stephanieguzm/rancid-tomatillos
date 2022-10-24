import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import Error from '../Error/Error'
import './MoviesContainer.css'

const MoviesContainer = (props) => {
	const movieCards = props.movies.map(movie => {
		return (
			<MovieCard 
				posterImg={movie.poster_path}
				title={movie.title}
				rating={movie.average_rating.toFixed(1)}
				key={movie.id}
				id={movie.id}
			/>
		)
	})

	const displayAllMovies = () => {
		return (
			<div className='movie-container'>
				{movieCards}
			</div>
		)
	}
	
	return (
		<section> 
			{props.error ? <Error /> : <>{displayAllMovies()}</>}
		</section>
		)
}

export default MoviesContainer

