import { useNavigate } from 'react-router-dom';

const PLACEHOLDER = 'https://placehold.co/300x445/1a1a2e/9999bb?text=No+Poster';

function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div className="movie-card" onClick={() => navigate(`/movie/${movie.imdbID}`)}>
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : PLACEHOLDER}
        alt={movie.Title}
        loading="lazy"
      />
      <div className="movie-card-body">
        <p className="movie-card-title" title={movie.Title}>{movie.Title}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="movie-card-year">{movie.Year}</span>
          <span className="movie-card-type">{movie.Type}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
