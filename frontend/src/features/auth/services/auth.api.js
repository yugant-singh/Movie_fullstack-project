import api from '../../shared/services/axiosInstance'

export async function register({name,email,password}){
    try{
        const response  = await api.post("/auth/register",{name,email,password})
        return response.data
    }
    catch(err){
        throw err
    }
}

export async function login({email,password}){
    try{
        const response  = await api.post("/auth/login",{email,password})
        return response.data
    }
    catch(err){
        throw err
    }
}

export async function logout(){
    try{
        const response  = await api.post("/auth/logout")
        return response.data
    }
    catch(err){
        throw err
    }
}
export async function getMe(){
    try{
        const response  = await api.get("/auth/me")
        return response.data
    }
    catch(err){
        throw err
    }   
}