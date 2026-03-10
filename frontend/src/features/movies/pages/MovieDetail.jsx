import React, { useEffect, useState } from 'react'
import { useMovieDetail } from '../hooks/useMovieDetail'
import { useParams } from 'react-router-dom'
import ApiLoader from '../../shared/loader/ApiLoader'
import '../styles/moviedetail.scss'
import TrailerModal from '../components/TrailerModal'
import SearchLoader from '../../shared/loader/SearchLoader'

const MovieDetail = () => {

    const {movieId} = useParams()
    const { movie, loading, error, fetchMovieDetail } = useMovieDetail()
    const [showTrailer, setShowTrailer] = useState(false)

    useEffect(() => {
        fetchMovieDetail(movieId)
    }, [movieId])

    if(loading){
        return  <SearchLoader/>
    }
    if(error){
        return <h1>Something Went wrong</h1>
    }
    if(!movie){
        return null
    }
    return (
        <div className="movie-detail">

      {/* Backdrop */}
      <div
        className="movie-detail__backdrop"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
        }}
      >
        <div className="movie-detail__overlay" />
      </div>

      {/* Content */}
      <div className="movie-detail__content">

        {/* Poster */}
        <img
          className="movie-detail__poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        {/* Info */}
        <div className="movie-detail__info">
          <h1>{movie.title}</h1>
          <p className="movie-detail__rating">⭐ {movie.vote_average?.toFixed(1)}</p>
          <p className="movie-detail__desc">{movie.overview}</p>

          <div className="movie-detail__buttons">
            <button 
               onClick={() => setShowTrailer(true)}
             className="movie-detail__btn movie-detail__btn--primary">
              ▶ Watch Trailer
            </button>
            <button className="movie-detail__btn movie-detail__btn--secondary">
              ❤ Add to Favourite
            </button>
          </div>
        </div>

      </div>

      {showTrailer && (
        <TrailerModal movieId={movieId} 
        onClose={() => setShowTrailer(false)}
        />
      )}
    </div>
    )
}

export default MovieDetail