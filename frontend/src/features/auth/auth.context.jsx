import { createContext, useState ,useEffect} from "react";
import {getMe} from '../auth/services/auth.api'
import ApiLoader from "../shared/loader/ApiLoader";
export const AuthContext  = createContext()


export const AuthProvider = ({children})=>{

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        getMe()
            .then((res) => setUser(res.user))
            .catch(() => setUser(null))
            .finally(() => setLoading(false))
    }, [])

      if (loading) return <ApiLoader/>

    return <AuthContext.Provider value={{loading,setLoading,user,setUser}}>
        {children}
    </AuthContext.Provider>


}