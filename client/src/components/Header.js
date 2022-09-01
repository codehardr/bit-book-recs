import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  return (
    <div className="head-box">
      <header>
        <Link to="/" className="logo">
          <div>
            SciFi<span>Recs</span>
          </div>
        </Link>
        <ul>
          <li>
            <Link to="/">
              <span className={location.pathname === '/' ? 'active' : ''}>◉</span> Home
            </Link>
          </li>
          <li>
            <Link to="/new-post">
              <span className={location.pathname === '/new-post' ? 'active' : ''}>◉</span> Add Books
            </Link>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Header
