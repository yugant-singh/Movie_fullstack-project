import React from 'react'
import AppRoutes  from './routes/index'
import {AuthProvider} from '../src/features/auth/auth.context'
import {MovieProvider} from '../src/features/movies/movie.context'

import './style.scss'
const App = () => {
  return (
<AuthProvider>
   <MovieProvider>
    
    <AppRoutes/>

   </MovieProvider>
</AuthProvider>
  )
}

export default App