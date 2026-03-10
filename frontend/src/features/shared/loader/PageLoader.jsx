// Usage: Show this when the entire page/app is loading on first visit.
// Place it at the top level of your App.jsx and conditionally render.
//
// Example:
//   const [loading, setLoading] = useState(true);
//   useEffect(() => { fetchInitialData().then(() => setLoading(false)); }, []);
//   return loading ? <PageLoader /> : <App />;

import './PageLoader.scss';

export default function PageLoader() {
  return (
    <div className="page-loader-overlay">
      <div className="film-strip">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="film-frame">
            <div className="film-frame-inner" />
          </div>
        ))}
      </div>

      <div className="page-loader-text">
        <span className="page-loader-title">Loading</span>
        <div className="page-loader-track">
          <div className="page-loader-bar" />
        </div>
      </div>
    </div>
  );
}
