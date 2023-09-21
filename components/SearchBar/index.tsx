import React, { useState } from "react";

interface SearchBarProps {
    onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(city);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={city}
                onChange={e => setCity(e.target.value)}
                placeholder="Enter city name..."
            />
            <button type="submit">Search</button>
        </form>
    )

}

export default SearchBar