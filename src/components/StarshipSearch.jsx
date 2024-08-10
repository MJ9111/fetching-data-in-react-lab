import React, { useState, useEffect } from 'react';

const StarshipSearch = ({ setStarships }) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch(`https://swapi.dev/api/starships/?search=${search}`)
      .then((res) => res.json())
      .then((data) => setStarships(data.results));
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = search; 
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a starship"
        value={search}
        onChange={handleChange}
      />
      <button type='submit'>search</button>
    </form> 
  );
};

export default StarshipSearch;