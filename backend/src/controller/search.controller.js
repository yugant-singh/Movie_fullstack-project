const axios = require('axios');


async function searchMulti(req,res){
    try{
        const {query} = req.query
        const response = await axios.get(
      "https://api.themoviedb.org/3/search/multi",
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          query: query
        }
      }
    );
    res.status(200).json(response.data.results)
    }
    catch(err){
        return res.status(500).json({
            message:"Internal Server Error",
            error:err.message}
        )}
}


module.exports = {searchMulti}