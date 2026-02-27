import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim());
  };

  return (
    <div className="search-wrapper">
      <h1 className="search-title">Find Any Movie 🎬</h1>
      <p className="search-subtitle">Search from thousands of movies, series & documentaries</p>
      <div className="container" style={{ maxWidth: '620px' }}>
        <form onSubmit={handleSubmit} className="d-flex">
          <input
            className="form-control search-input"
            type="text"
            placeholder="e.g. Inception, Avengers, Dark Knight..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn search-btn" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
