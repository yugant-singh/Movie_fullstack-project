import React, { useEffect } from 'react'
import { useMovies } from '../hooks/useMovies'
import PageLoader from '../../shared/loader/PageLoader'
import HeroBanner from '../components/HeroBanner'
import MoviesRow from '../components/MoviesRow'
const Home = () => {
    const { trending, popular, movies,  loading, fetchAll} = useMovies()

    useEffect(() => {

       fetchAll()
    }, [])

    if (loading) {
        return <PageLoader />
    }


    return (
        <div>
            <HeroBanner movies={trending} />
             <MoviesRow title="Trending" movies={trending} />
      <MoviesRow title="Popular" movies={popular} />
      <MoviesRow title="Movies" movies={movies} />
        </div>
    )
}

export default Home