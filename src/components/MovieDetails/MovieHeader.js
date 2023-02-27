import React from 'react'
import { StarMovie } from '../index'
import './MovieHeader.scss'

const MovieHeader = ({movie}) => {
    return (
        <>
        <div className="movie-header">
            <h1>{movie.Title}</h1>
            <span className='hide-star'>
          <StarMovie movie={movie} />
            </span>
          </div>
          <div className="movie-quick-info">
            <p>{`${movie.Year} | `}</p>
            <p>{`${movie.Runtime} | `}</p>
            <p>{movie.Genre}</p>
          </div>
        </>
    )
}

export default MovieHeader