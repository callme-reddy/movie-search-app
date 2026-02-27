import { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import SkeletonCard from '../components/SkeletonCard';

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchedTerm, setSearchedTerm] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    setError('');
    setMovies([]);
    setSearchedTerm(query);
    setHasSearched(true);

    try {
      const res = await axios.get(`https://movie-search-backend-jg0y.onrender.com/api/search?title=${encodeURIComponent(query)}`);
      if (res.data.Response === 'True') {
        setMovies(res.data.Search);
      } else {
        setError(res.data.Error || 'No movies found. Try a different title!');
      }
    } catch (err) {
      setError('Could not connect to server. Make sure the backend is running.');
    }

    setLoading(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      <div className="movies-section container">
        {/* Skeleton loader */}
        {loading && (
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
            {Array(8).fill(0).map((_, i) => (
              <div className="col" key={i}>
                <SkeletonCard />
              </div>
            ))}
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="empty-state">
            <div className="icon">🎭</div>
            <p>{error}</p>
          </div>
        )}

        {/* Results */}
        {!loading && movies.length > 0 && (
          <>
            <p className="section-title">
              Showing <span>{movies.length} results</span> for "{searchedTerm}"
            </p>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
              {movies.map((movie) => (
                <div className="col" key={movie.imdbID}>
                  <MovieCard movie={movie} />
                </div>
              ))}
            </div>
          </>
        )}

        {/* Initial empty state */}
        {!loading && !hasSearched && (
          <div className="empty-state">
            <div className="icon">🔍</div>
            <p>Type a movie name above and hit <strong>Search</strong> to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
