import { useContext } from "react";
import { MovieContext } from "../movie.context.jsx";
import {getTrendingMovies,getMovies,getPopular} from '../services/tmdb.api'

export function useMovies(){
const context  = useContext(MovieContext)
const {loading,setLoading,error,setError,popular,setPopular,trending,setTrending,movies,setMovies}= context

const fetchAll = async () => {
    try {
        setLoading(true)
        const [trendingData, popularData, moviesData] = await Promise.all([
            getTrendingMovies(),
            getPopular(),
            getMovies()
        ])
        setTrending(trendingData)
        setPopular(popularData)
        setMovies(moviesData)
    } catch (err) {
        setError(err)
    } finally {
        setLoading(false)
    }
}

    return { loading, error, trending, popular, movies, fetchAll }

}

