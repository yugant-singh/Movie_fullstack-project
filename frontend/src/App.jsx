import React from 'react'
import AppRoutes  from './routes/index'
import {AuthProvider} from '../src/features/auth/auth.context'
import './style.scss'
const App = () => {
  return (
<AuthProvider>
    <AppRoutes/>
</AuthProvider>
  )
}

export default App