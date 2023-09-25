import React, { useState, useEffect } from 'react';
import './App.css';
import BeerCard from './components/BeerCard';
import Navbar from './components/Navbar';

function App() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
      .then((response) => response.json())
      .then((data) => setBeers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (query) => {
    setSearch(query);
  };

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <Navbar handleSearch={handleSearch} />
      <main className="beer-list">
        {filteredBeers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </main>
    </div>
  );
}

export default App;
