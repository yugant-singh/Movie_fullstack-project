import api from '../../shared/services/axiosInstance'


export const getTrendingMovies = async () => {
    try {
        const response = await api.get('/trending');
        return response.data;
    } catch (err) {
        console.error('Error fetching trending movies:', err);
        throw err;
    }
};

export const getMovies = async()=>{

    try{
        const response  = await api.get('/movies')
        return response.data
    }
    catch(err){
 console.error('Error fetching  movies:', err);
        throw err;
    }
}


export const getPopular = async ()=>{
    try{
        const response = await api.get('/popular')
        return response.data
    }
    catch(err){
        console.err('Error fetching movie details:',err)
        throw err
    }
}

export const getTVShows  = async ()=>{
    try{
        const response = await api.get("/tvshows")
        return response.data
    }
    catch(err){
            console.error('Error fetching tvshows details:', err);
        throw err;
    }
}

export const getPeople = async ()=>{
    try{
        const response  = await api.get("/people")
        return response.data
    }
    catch(err){
         console.error('Error fetching movie details:', err);
        throw err;
    }
}


export const getMovieDetails = async (movieId) => {
    try {
        const response = await api.get(`/movie/${movieId}`);    
        return response.data;
    } catch (err) {
        console.error('Error fetching movie details:', err);
        throw err;
    }
};
export const getMovieImages = async (movieId) => {
    try {
        const response = await api.get(`/movie/${movieId}/images`);
        return response.data;
    } catch (err) {
        console.error('Error fetching movie images:', err);
        throw err;
    }
};




