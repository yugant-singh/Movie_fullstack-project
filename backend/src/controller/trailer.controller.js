const axios  = require("axios")


async function getMovieTrailer(req,res){

    try{
        const movieID = req.params.id
        const response  = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieID}/videos`,
            {
                params:{
                    api_key:process.env.TMDB_API_KEY
                }
            }
        )

        const trailers = response.data.results.filter(video => video.type === "Trailer" && video.site === "YouTube")
        res.status(200).json(trailers)
    }
    catch(err){
        return res.status(500).json({
            message:"Internal Server Error",
            error:err.message
        })
    }

} 

module.exports = {getMovieTrailer}