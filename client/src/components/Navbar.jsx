import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        <Link className="navbar-brand navbar-brand-text" to="/">
          🎬 MovieSearch
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          style={{ border: '1px solid #3a3a5c' }}
        >
          <span style={{ color: '#e2b714', fontSize: '1.2rem' }}>☰</span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                style={{ color: location.pathname === '/' ? '#e2b714' : '#9999bb', fontWeight: 600 }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/favourites"
                className="nav-link"
                style={{ color: location.pathname === '/favourites' ? '#e2b714' : '#9999bb', fontWeight: 600 }}
              >
                ❤️ Favourites
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
