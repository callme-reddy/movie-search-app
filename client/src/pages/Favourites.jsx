import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

function Favourites() {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favourites') || '[]');
    setFavs(stored);
  }, []);

  const clearAll = () => {
    localStorage.removeItem('favourites');
    setFavs([]);
  };

  return (
    <div className="favourites-page container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="page-heading mb-0">❤️ My Favourites</h2>
        {favs.length > 0 && (
          <button
            className="back-btn"
            onClick={clearAll}
            style={{ marginBottom: 0 }}
          >
            Clear All
          </button>
        )}
      </div>

      {favs.length === 0 ? (
        <div className="empty-state">
          <div className="icon">🎬</div>
          <p>No favourites yet! Search for a movie and save it.</p>
        </div>
      ) : (
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
          {favs.map((movie) => (
            <div className="col" key={movie.imdbID}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourites;
