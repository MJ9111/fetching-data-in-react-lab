

/* eslint-disable no-unused-vars */

const BASE_URL = 'https://swapi.dev/api/starships/';

const showStarships = async () => {
    try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        console.log('Starships:', data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export { showStarships };