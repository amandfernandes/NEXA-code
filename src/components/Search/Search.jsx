import React, { useState } from 'react';
import { SearchForm } from './Style';
import { IoIosSearch } from "react-icons/io";

const Search = ({ requests, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const results = requests.filter((request) => {
      const searchMatch = request.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.id.toString() === searchTerm ||
        request.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.date.includes(searchTerm);
      return searchMatch;
    });
    onSearch(results);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Pesquise por cliente, ID, status ou data" 
      />
      <button type="submit">
        <IoIosSearch />
      </button>
    </SearchForm>
  );
}


export default Search;