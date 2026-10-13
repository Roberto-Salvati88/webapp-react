import { useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const initialFormData = { name: '', vote: 5, text: '' };

function ReviewForm({ movieId, onSaved }) {
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // BONUS: validazione nel form (il server la rifà comunque)
    if (formData.name.trim() === '' || formData.text.trim() === '') {
      setError('Nome e testo sono obbligatori');
      return;
    }

    axios.post(`${API_URL}/${movieId}/reviews`, formData)
      .then(() => {
        setFormData(initialFormData);
        setError('');
        onSaved();
      })
      .catch(() => setError('Errore nel salvataggio della recensione'));
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body mt-4">
      <h3 className="h5">Lascia una recensione</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <input name="name" className="form-control mb-2" placeholder="Il tuo nome" value={formData.name} onChange={handleChange} />
      <select name="vote" className="form-select mb-2" value={formData.vote} onChange={handleChange}>
        {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
      </select>
      <textarea name="text" className="form-control mb-2" placeholder="La tua recensione" value={formData.text} onChange={handleChange} />
      <button type="submit" className="btn btn-primary">Invia</button>
    </form>
  );
}

export default ReviewForm;
