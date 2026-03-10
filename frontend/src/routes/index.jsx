import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from '../features/auth/pages/Login'
import Register from '../features/auth/pages/Register'
import PrivateRoute from './PrivateRoute'
import ApiLoader from '../features/shared/loader/ApiLoader'
import Home from '../features/movies/pages/Home'
import Navbar from '../features/shared/components/Navbar'
import MovieDetail from '../features/movies/pages/MovieDetail'
import Profile from '../features/auth/pages/Profile'

function AppRoutes(){
    return <BrowserRouter>
    
    <Navbar/>
    <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>} />
  <Route path='/movie/:movieId' element={<MovieDetail/>} />
        <Route element={<PrivateRoute/>}>
            <Route path='/dashboard' element={<h1>DashBoard</h1>} />
            <Route path='/favourate' element={<h1>Favourates</h1>} />
            <Route path='/history' element={<h1>History</h1>}/>
            <Route path='/profile' element=<Profile/> />
          
        </Route>
        

        <Route path='*' element={<h1>Not Found 404</h1>} />
    </Routes>
    </BrowserRouter>
}


export default AppRoutes