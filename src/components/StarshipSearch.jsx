import { useState } from 'react';

const StarshipSearch = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchQuery);
        setSearchQuery('');
    };

    return (
        <div>
            <h2>Search</h2>
            <form onSubmit={handleSearch}>
                <label htmlFor="searchQuery">Search Term:</label>
                <input
                    id="searchQuery"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default StarshipSearch;