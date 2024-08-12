
import StarshipCard from './StarshipCard';

const StarshipList = ({ starships }) => {
  if (!Array.isArray(starships)) {
    return "Please search for a starship"; 
  }

  return (
    <section>
      <h2>Starships </h2>
      <p>Number of starships ({starships.length})</p>
      <ul>
        {starships.map((starship, index) => (
          <StarshipCard key={index} starship={starship} />
        ))}
      </ul>
    </section>
  );
};

export default StarshipList;