import { Link } from 'react-router-dom';

// componente riutilizzabile: riceve un film come prop
function MovieCard({ movie }) {
  const { id, title, director, genre, release_year, image } = movie;

  return (
    <div className="card h-100 movie-card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h2 className="h5">{title}</h2>
        <p className="text-muted mb-1">{director} · {release_year}</p>
        <span className="badge bg-secondary">{genre}</span>
      </div>
      <div className="card-footer bg-white border-0">
        <Link to={`/movies/${id}`} className="btn btn-primary btn-sm">Dettagli</Link>
      </div>
    </div>
  );
}

export default MovieCard;
