import { Link } from "react-router-dom"
import "..//styles/moviecard.scss"

const MovieCard = ({ movie }) => {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/placeholder.jpg"

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      {/* Front */}
      <div className="movie-card__front">
        <img src={poster} alt={movie.title} />
        <div className="movie-card__rating">⭐ {movie.vote_average?.toFixed(1)}</div>
      </div>

      {/* Back */}
      <div className="movie-card__back">
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
        <div className="movie-card__actions">
          <button className="movie-card__btn movie-card__btn--primary">
            Details
          </button>
          <button className="movie-card__btn movie-card__btn--secondary">
            ❤ Favourite
          </button>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard