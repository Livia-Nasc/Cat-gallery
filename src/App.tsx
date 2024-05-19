import React, { useEffect, useState } from 'react';
import { fetchCats } from './api';
import { Cat } from './types';
import './App.css';

const App: React.FC = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getCats = async () => {
      try {
        const catData = await fetchCats();
        setCats(catData);
      } catch (error) {
        console.error('Error fetching cat data:', error);
      } finally {
        setLoading(false);
      }
    };

    getCats();
  }, []);
  const handleClick = () => {
    window.location.href = 'https://dog-gallery-orcin.vercel.app';
  };


  if (loading) {
    return <div id='loading'>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>Cat Gallery</h1>
      <div className="cat-gallery">
        {cats.map(cat => (
          <div key={cat.id} className="cat-item">
            <img src={cat.url} alt={`Cat ${cat.id}`} width={cat.width} height={cat.height} />
          </div>
        ))}
      </div>
      <button onClick={handleClick} type="button">Go to dog gallery
      </button>
    </div>
  );
};

export default App;
