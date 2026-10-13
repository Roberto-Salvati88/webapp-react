import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewCard from '../components/ReviewCard.jsx';
import ReviewForm from '../components/ReviewForm.jsx';

const API_URL = import.meta.env.VITE_API_URL;

function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  // MILESTONE 4: dettaglio del film con le recensioni
  const fetchMovie = () => {
    axios.get(`${API_URL}/${id}`).then(response => setMovie(response.data));
  };

  useEffect(fetchMovie, [id]);

  if (!movie) return <p>Caricamento...</p>;

  // media dei voti calcolata dai dati (stato derivato)
  const average = movie.reviews.length
    ? (movie.reviews.reduce((sum, review) => sum + review.vote, 0) / movie.reviews.length).toFixed(1)
    : '-';

  return (
    <>
      <div className="row mb-4">
        <div className="col-md-4">
          <img src={movie.image} alt={movie.title} className="img-fluid rounded" />
        </div>
        <div className="col-md-8">
          <h1>{movie.title}</h1>
          <p className="text-muted">{movie.director} · {movie.genre} · {movie.release_year}</p>
          <p>{movie.abstract}</p>
          <p><strong>Voto medio:</strong> {average}</p>
        </div>
      </div>

      <h2 className="h4">Recensioni</h2>
      {movie.reviews.map(review => <ReviewCard key={review.id} review={review} />)}

      {/* dopo il salvataggio ricarico il film: la nuova recensione compare con le altre */}
      <ReviewForm movieId={id} onSaved={fetchMovie} />
    </>
  );
}

export default MoviePage;
