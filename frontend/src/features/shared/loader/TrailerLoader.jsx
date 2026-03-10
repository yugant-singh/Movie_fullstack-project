// Usage: Show inside the YouTube/video iframe wrapper while trailer is buffering.
// Parent container must be: position: relative; overflow: hidden;
//
// Example:
//   const [buffering, setBuffering] = useState(true);
//   <div style={{ position: 'relative', aspectRatio: '16/9' }}>
//     {buffering && <TrailerLoader />}
//     <iframe onLoad={() => setBuffering(false)} src={trailerUrl} ... />
//   </div>

import './TrailerLoader.scss';

const BAR_COUNT = 9;

export default function TrailerLoader() {
  return (
    <div className="trailer-loader">
      {/* Spinning ring with play icon inside */}
      <div className="trailer-play-ring">
        <svg className="trailer-ring-svg" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="36" />
        </svg>
        <div className="trailer-play-icon" />
      </div>

      {/* Audio-wave bars — signals media loading */}
      <div className="trailer-wave">
        {[...Array(BAR_COUNT)].map((_, i) => (
          <div key={i} className="trailer-bar" />
        ))}
      </div>

      <span className="trailer-text">Buffering</span>
    </div>
  );
}
