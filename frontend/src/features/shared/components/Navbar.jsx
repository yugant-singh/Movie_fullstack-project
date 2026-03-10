import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../auth/hooks/useAuth"
import "../styles/navbar.scss"

const Navbar = () => {
  const { user, handleLogout } = useAuth()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const onLogout = async () => {
    await handleLogout()
    navigate("/login")
  }

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="navbar__logo">
        <Link to="/">🎬 PHANTEX</Link>
      </div>

      {/* Nav Links */}
      <ul className={`navbar__links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/movies" onClick={() => setMenuOpen(false)}>Movies</Link></li>
        <li><Link to="/tvshows" onClick={() => setMenuOpen(false)}>TV Shows</Link></li>
        <li><Link to="/people" onClick={() => setMenuOpen(false)}>People</Link></li>
      </ul>

      {/* Actions */}
      <div className="navbar__actions">
        <input
          type="text"
          placeholder="Search..."
          className="navbar__search"
          onClick={() => navigate("/search")}
        />
      
{user ? (
  <div className="navbar__user">
    <div
     onClick={()=>{navigate("/profile")}}
    className="navbar__avatar">
      {user.name.charAt(0).toUpperCase()}
    </div>
   
    <button onClick={onLogout} className="navbar__btn">Logout</button>
  </div>
) : (
  <Link to="/login" className="navbar__btn">Login</Link>
)}

        {/* Hamburger */}
        <div className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

    </nav>
  )
}

export default Navbar