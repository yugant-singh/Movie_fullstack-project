import { register, login, logout, getMe } from '../services/auth.api'
import { AuthContext } from '../auth.context'
import { useContext } from 'react'


export async function useAuth() {
    const context = useContext(AuthContext)
    const { loading, setLoading, user, setUser } = context

    const handleRegister = async ({ name, email, password }) => {
        try {
            setLoading(true)
            const response = await register({ name, email, password })
            setUser(response.user)
        }
        catch (err) {
            throw err
        }
        finally {
            setLoading(false)
        }

    }
    const handleLogin = async () => {
        try {
            setLoading(true)
            const response = await login({ email, password })
            setUser(response.user)
        }
        catch (err) {
            throw err
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = async () => {
        try {
            setLoading(true)
            await logout()
            setUser(null)
        }
        catch (err) {
            throw err
        } finally {
            setLoading(false)
        }
    }
    const handleGetMe = async () => {
        try {
            setLoading(true)
            const response = await getMe()
            setUser(response.user)
        }
        catch (err) {
            throw err
        } finally {
            setLoading(false)
        }
    }


    return {loading,user,handleRegister,handleLogin,handleLogout,handleGetMe}
}