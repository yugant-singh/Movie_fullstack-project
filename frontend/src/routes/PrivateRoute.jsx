import {useContext} from 'react'
import {Navigate,Link, Outlet} from 'react-router-dom'
import {AuthContext} from '../features/auth/auth.context'

function PrivateRoute(){
    const {user} = useContext(AuthContext)
    return user? <Outlet/>:<Navigate to="/login"/>
}

export default PrivateRoute