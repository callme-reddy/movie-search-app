import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PLACEHOLDER = 'https://placehold.co/300x445/1a1a2e/9999bb?text=No+Poster';

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(`/api/movie/${id}`);
        if (res.data.Response === 'True') {
          setMovie(res.data);
          // Check if in favourites
          const favs = JSON.parse(localStorage.getItem('favourites') || '[]');
          setIsFav(favs.some((f) => f.imdbID === id));
        } else {
          setError('Movie not found.');
        }
      } catch {
        setError('Failed to load movie. Check if backend is running.');
      }
      setLoading(false);
    };
    fetchMovie();
  }, [id]);

  const toggleFavourite = () => {
    const favs = JSON.parse(localStorage.getItem('favourites') || '[]');
    if (isFav) {
      const updated = favs.filter((f) => f.imdbID !== movie.imdbID);
      localStorage.setItem('favourites', JSON.stringify(updated));
      setIsFav(false);
    } else {
      favs.push({
        imdbID: movie.imdbID,
        Title: movie.Title,
        Year: movie.Year,
        Poster: movie.Poster,
        Type: movie.Type,
      });
      localStorage.setItem('favourites', JSON.stringify(favs));
      setIsFav(true);
    }
  };

  if (loading) {
    return (
      <div className="detail-page container">
        <div className="empty-state">
          <div className="icon">⏳</div>
          <p>Loading movie details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="detail-page container">
        <div className="empty-state">
          <div className="icon">😕</div>
          <p>{error}</p>
          <button className="back-btn mt-3" onClick={() => navigate(-1)}>← Go Back</button>
        </div>
      </div>
    );
  }

  const genres = movie.Genre ? movie.Genre.split(', ') : [];

  return (
    <div className="detail-page container">
      {/* Back + Fav buttons */}
      <div className="d-flex align-items-center mb-4">
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
        <button
          className={`fav-btn ${isFav ? 'active' : ''}`}
          onClick={toggleFavourite}
        >
          {isFav ? '❤️ Saved' : '🤍 Save to Favourites'}
        </button>
      </div>

      <div className="row g-5">
        {/* Poster */}
        <div className="col-md-4 col-lg-3">
          <img
            src={movie.Poster !== 'N/A' ? movie.Poster : PLACEHOLDER}
            alt={movie.Title}
            className="detail-poster"
          />
        </div>

        {/* Info */}
        <div className="col-md-8 col-lg-9">
          <h1 className="detail-title">
            {movie.Title}{' '}
            <span className="detail-year">({movie.Year})</span>
          </h1>

          {/* Genres */}
          <div className="mb-3">
            {genres.map((g) => (
              <span className="badge-custom" key={g}>{g}</span>
            ))}
          </div>

          {/* Rating */}
          {movie.imdbRating !== 'N/A' && (
            <div className="rating-box mb-3">
              <div className="rating-score">⭐ {movie.imdbRating}</div>
              <div className="rating-label">IMDB Rating</div>
              {movie.imdbVotes !== 'N/A' && (
                <div className="rating-label">{movie.imdbVotes} votes</div>
              )}
            </div>
          )}

          {/* Details */}
          <p className="detail-label">Plot</p>
          <p className="detail-value">{movie.Plot !== 'N/A' ? movie.Plot : 'No plot available.'}</p>

          <div className="row">
            <div className="col-sm-6">
              <p className="detail-label">Director</p>
              <p className="detail-value">{movie.Director !== 'N/A' ? movie.Director : '—'}</p>
            </div>
            <div className="col-sm-6">
              <p className="detail-label">Released</p>
              <p className="detail-value">{movie.Released !== 'N/A' ? movie.Released : '—'}</p>
            </div>
            <div className="col-sm-6">
              <p className="detail-label">Runtime</p>
              <p className="detail-value">{movie.Runtime !== 'N/A' ? movie.Runtime : '—'}</p>
            </div>
            <div className="col-sm-6">
              <p className="detail-label">Language</p>
              <p className="detail-value">{movie.Language !== 'N/A' ? movie.Language : '—'}</p>
            </div>
            <div className="col-12">
              <p className="detail-label">Cast</p>
              <p className="detail-value">{movie.Actors !== 'N/A' ? movie.Actors : '—'}</p>
            </div>
            {movie.Awards !== 'N/A' && (
              <div className="col-12">
                <p className="detail-label">Awards</p>
                <p className="detail-value">🏆 {movie.Awards}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
