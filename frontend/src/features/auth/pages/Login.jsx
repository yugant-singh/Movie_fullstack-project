import React, { use, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useAuth} from '../hooks/useAuth'
import ApiLoader from '../../shared/loader/ApiLoader'
const Login = () => {
  const {loading,user,handleLogin} = useAuth()
const navigate  = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

 async  function handleSubmit(e){
e.preventDefault()
await handleLogin({email,password})
navigate("/")

  }

  if(loading){
    return <ApiLoader/>
  }

  return (
    
    <div className='container'>
      <h1>Login</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input 
            type="password" 
            id="password" 
            name="password" 
            required 
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <button type="submit">Login</button>


        </form>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>

    </div>
  )
}

export default Login