import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar-wrap">
      <div className="container navbar">
        <NavLink to="/" className="brand">
          <span className="brand-icon">📷</span>
          <span>عدسة</span>
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            الرئيسية
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')}>
            المدونة
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
