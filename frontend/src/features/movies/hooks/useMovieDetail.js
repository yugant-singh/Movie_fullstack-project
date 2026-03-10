import { useContext,useState } from "react";
import {getMovieDetails} from '../services/tmdb.api'

import {MovieContext} from '../movie.context'

export function useMovieDetail(){
    const context = useContext(MovieContext)
    const  {loading,error,setLoading,setError} = context
    const [movie, setMovie] = useState(null)

    const fetchMovieDetail = async (movieId) => {
    try {
        setLoading(true)
        setError(null)  // ← yeh add karo
        const data = await getMovieDetails(movieId)
        setMovie(data)
    }
    catch (err) {
        setError(err)
    }
    finally {
        setLoading(false)
    }
}

    return {loading,error,movie,fetchMovieDetail}
}