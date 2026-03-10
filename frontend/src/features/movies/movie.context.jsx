import { createContext, useState } from "react";

export const MovieContext  = createContext()

export const MovieProvider = ({children})=>{

const [trending, setTrending] = useState([])
const [popular, setPopular] = useState([])
const [movies, setMovies] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)


return <MovieContext.Provider value={{loading,setLoading,error,setError,popular,setPopular,trending,setTrending,movies,setMovies}}>
{children}
</MovieContext.Provider>


}