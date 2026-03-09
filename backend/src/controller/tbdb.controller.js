const axios  = require("axios")
const TMDB_API_KEY = process.env.TMDB_API_KEY
const TMDB_BASE_URL = process.env.TMDB_BASE_URL



async function getTrendingMovies(req, res) {    
    try{
        const response = await axios.get(`${TMDB_BASE_URL}/trending/movie/day?api_key=${TMDB_API_KEY}`)

        res.status(200).json(response.data.results)
    }
    catch(err){
        return res.status(500).json({
            message:"Failed to fetch trending movies"})
}
}

async function getpopularMovies(req, res) {
    try{
        const response = await axios.get(`${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`)
        return res.status(200).json(response.data.results)
    }

    catch(err){
        return res.status(500).json({
            message:"Failed to fetch popular movies"})  
    }
}

async function getmovdetails(req, res) {

    try{
             const movieId = req.params.id;
             const response = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}`)
             return res.status(200).json(response.data)
    }
    catch(err){
        return res.status(500).json({
            message:"Failed to fetch movie details"})
    }
}

async function getMovies(req, res) {
    try{
        const response  = await axios.get(`${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}`)
        return res.status(200).json(response.data.results)
    }
    catch(err){
        return res.status(500).json({
            message:"Failed to fetch movies"})
    }
}

async function getTVShows(req, res) {
    try{
        const response = await axios.get(`${TMDB_BASE_URL}/discover/tv?api_key=${TMDB_API_KEY}`)
        return res.status(200).json(response.data.results)
    }
    catch(err){
        return res.status(500).json({
            message:"Failed to fetch TV shows"})
    }
}

async function getPopularPepple(req, res) {
    try{
        const response  = await axios.get(`${TMDB_BASE_URL}/person/popular?api_key=${TMDB_API_KEY}`)
        return res.status(200).json(response.data.results)
    }
    catch(err){
        return res.status(500).json({
            message:"Failed to fetch popular people"})
    }
}

async function getMovieImages(req, res) {
    try{
        const movieId = req.params.id;
        const response = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}/images?api_key=${TMDB_API_KEY}`)
        return res.status(200).json(response.data)
    }
    catch(err){
        return res.status(500).json({
            message:"Failed to fetch movie images"})
    }
}
module.exports = {
    getTrendingMovies,
    getpopularMovies,
    getmovdetails,
    getMovies,
    getTVShows,
    getPopularPepple,
    getMovieImages
}