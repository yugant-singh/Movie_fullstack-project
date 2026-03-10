import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

import '../style/form.scss'
import ApiLoader from '../../shared/loader/ApiLoader'
const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { loading, handleRegister, user } = useAuth()
  const navigate = useNavigate()


  async function handleSubmit(e) {
    e.preventDefault()
    await handleRegister({ name, email, password })
    navigate("/")
  }

  if(loading){
    return <ApiLoader/>
  }




  return (
    <div className='container'>
      <h1>Register</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="text">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => { setName(e.target.value) }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
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
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </div>
          <button type="submit">Register</button>


        </form>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>

    </div>
  )
}

export default Register