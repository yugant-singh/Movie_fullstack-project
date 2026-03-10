import MovieCard from "./MovieCard";
import '../styles/moviesrow.scss'




const MoviesRow = ({ title, movies }) => {
  return (
    <div className="movies-row">
      <h2 className="movies-row__title">{title}</h2>
      <div className="movies-row__scroll">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MoviesRow