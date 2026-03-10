import { useEffect, useState } from "react"
import api from "../../shared/services/axiosInstance"
import "../styles/trailermodal.scss"
import TrailerLoader from '../../shared/loader/TrailerLoader'

const TrailerModal = ({ movieId, onClose }) => {
  const [trailerKey, setTrailerKey] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get(`/movie/${movieId}/trailer`)
      .then((res) => {
        console.log("tailer data",res.data)
        if (res.data.length > 0) {
          setTrailerKey(res.data[0].key)
        }
      })
      .finally(() => setLoading(false))
  }, [movieId])

  return (
    <div className="trailer-modal" onClick={onClose}>
      <div className="trailer-modal__box" onClick={(e) => e.stopPropagation()}>
        
        <button className="trailer-modal__close" onClick={onClose}>✕</button>

        {loading ? (
         <TrailerLoader/>
        ) : trailerKey ? (
          <iframe
            src={`https://www.youtube.com/embed/${trailerKey}`}
            allowFullScreen
            title="trailer"
          />
        ) : (
          <p className="trailer-modal__msg">
            Trailer for this movie is currently unavailable.
          </p>
        )}

      </div>
    </div>
  )
}

export default TrailerModal