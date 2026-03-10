import axios from 'axios'

const api  = axios.create({
    baseURL:"https://phantex-movie-platform-1.onrender.com/api",
    withCredentials:true
})


export default api
