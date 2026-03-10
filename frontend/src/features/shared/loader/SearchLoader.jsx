// Usage: Show when search results are being fetched from TMDB API.
// Render skeleton cards + top progress bar while awaiting results.
//
// Example:
//   const [searching, setSearching] = useState(false);
//   // In search handler: setSearching(true) → fetch → setSearching(false)
//   return searching ? <SearchLoader /> : <MovieGrid results={results} />;

import './SearchLoader.scss';

const CARD_COUNT = 8; // match your grid column count × rows

export default function SearchLoader() {
  return (
    <>
      {/* Slim gold bar at very top */}
      <div className="search-loader-bar">
        <div className="search-loader-fill" />
      </div>

      {/* Skeleton movie cards */}
      <div className="search-loader-grid">
        {[...Array(CARD_COUNT)].map((_, i) => (
          <div key={i} className="skeleton-card">
            <div className="skeleton-poster" />
            <div className="skeleton-title" />
            <div className="skeleton-meta" />
          </div>
        ))}
      </div>
    </>
  );
}
