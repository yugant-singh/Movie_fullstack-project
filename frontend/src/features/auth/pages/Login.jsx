import React, { useState } from 'react'
import {Link} from 'react-router-dom'
const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    
    <div className='container'>
      <h1>Login</h1>
      <div className="form-container">
        <form>
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