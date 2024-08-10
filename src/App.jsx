import React from 'react';
import StarshipList from './components/StarshipList';
import StarshipSearch from './components/StarshipSearch';
import { useState } from 'react';
import './App.css';
import StarshipCard from './components/StarshipCard';
const App = () => {
const [starships, setStarships] = useState([]);
const [search, setSearch] = useState('');

const handleChange = (e) => {
  setSearch(e.target.value);
}
const filteredStarships = starships.filter((starship) =>
  starship.name.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div>
      <StarshipSearch setStarships={setStarships} />
      <StarshipList starships={filteredStarships} />
    </div>
  );
}

export default App