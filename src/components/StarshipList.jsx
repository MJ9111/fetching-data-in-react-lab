 import React, { useState } from 'react';
import StarshipCard from './StarshipCard';

const StarshipList = ({ starships }) => {
  return (
  <div>
  
  <div>
<h2>Results: {starships.length}</h2>
  </div>
  <div>
      {starships.map((starship) => (
        <StarshipCard key={starship.name} starship={starship} />
      ))}
      </div>
    </div>
    
  );
}

export default StarshipList;