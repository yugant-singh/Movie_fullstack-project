// Usage: Small inline loader for any TMDB API call —
// trending movies, popular, movie details, cast, etc.
// Lightweight enough to use inside cards or sections.
//
// Example (trending section):
//   {loading ? (
//     <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
//       <ApiLoader label="Fetching Movies" />
//     </div>
//   ) : (
//     <TrendingGrid movies={movies} />
//   )}

import './ApiLoader.scss';

export default function ApiLoader({ label = 'Loading' }) {
  return (
    <div className="api-loader">
      <div className="api-orbit">
        {/* 3 large outer dots */}
        <div className="api-dot api-dot--lg" />
        <div className="api-dot api-dot--lg" />
        <div className="api-dot api-dot--lg" />
        {/* 2 small inner dots */}
        <div className="api-dot api-dot--sm" />
        <div className="api-dot api-dot--sm" />
        {/* Glowing center */}
        <div className="api-core" />
      </div>

      {label && <span className="api-label">{label}</span>}
    </div>
  );
}
