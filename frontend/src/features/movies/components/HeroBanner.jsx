import { useEffect, useState } from "react"
import "../styles/herobanner.scss"
import TrailerModal from "./TrailerModal"

const HeroBanner = ({ movies }) => {
  const [current, setCurrent] = useState(0)
  const [showTrailer, setShowTrailer] = useState(false)

  useEffect(() => {
    if(showTrailer) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % movies.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [movies,showTrailer])

  if (!movies || movies.length === 0) return null

  const movie = movies[current]

  return (
    <div
    onClick={() => setShowTrailer(true)}
      className="hero"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
      }}
    >
      <div className="hero__overlay" />

      <div className="hero__content">
        <h1 className="hero__title">{movie.title}</h1>
        <p className="hero__desc">{movie.overview}</p>

        <div className="hero__rating">
          ⭐ {movie.vote_average?.toFixed(1)}
        </div>

        <div className="hero__buttons">
          <button
            className="hero__btn hero__btn--primary"
            onClick={() => setShowTrailer(true)}
          >
            ▶ Watch Trailer
          </button>
          <button className="hero__btn hero__btn--secondary">❤ Favourite</button>
        </div>
      </div>

      <div className="hero__dots">
        {movies.slice(0, 5).map((_, i) => (
          <span
            key={i}
            className={`hero__dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

      {showTrailer && (
        <TrailerModal
          movieId={movie.id}
          onClose={() => setShowTrailer(false)}
        />
      )}
    </div>
  )
}

export default HeroBanner