import React from 'react'
import './MovieSummary.scss'


const MovieDetails = ({movie}) => {
    console.log(movie)
    return (
        <div className="movie-summary">
            <h4>Storyline</h4>
            <p>{movie.Plot}</p>
            {/* <h4>Actors</h4>
            <p>{movie.Actors}</p>
            <h4>Awards</h4>
            <p>{movie.Awards}</p> */}
          </div>
    )
}

export default MovieDetails