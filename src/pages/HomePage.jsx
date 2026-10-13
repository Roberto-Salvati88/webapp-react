import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard.jsx';

const API_URL = import.meta.env.VITE_API_URL;

function HomePage() {
  const [movies, setMovies] = useState([]);

  // MILESTONE 3: chiamata AJAX al backend al montaggio della home
  useEffect(() => {
    axios.get(API_URL).then(response => setMovies(response.data));
  }, []);

  return (
    <>
      <h1 className="mb-4">I film</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map(movie => (
          <div key={movie.id} className="col">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
