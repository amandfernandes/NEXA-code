import React, { useState, useEffect } from 'react';
import { SearchForm } from './Style';
import { IoIosSearch } from "react-icons/io";

const Search = ({ requests, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const results = requests.filter((request) => {
      const searchMatch = request.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.id.toString() === searchTerm ||
        request.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.date.includes(searchTerm);
      return searchMatch;
    });
    onSearch(results);
  }, [searchTerm, requests, onSearch]);

  return (
    <SearchForm onSubmit={(e) => e.preventDefault()}>
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
