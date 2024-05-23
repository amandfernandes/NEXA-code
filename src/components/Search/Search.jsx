import React, { useState } from 'react';
import { SearchForm } from './Style';
import { IoIosSearch } from 'react-icons/io';

const Search = ({ requests, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    filterAndSendResults(newSearchTerm);
  };

  const filterAndSendResults = (term) => {
    // Filtra a lista original a cada alteração
    const results = requests.filter((request) => {
      const searchMatch =
        request.client.toLowerCase().includes(term.toLowerCase()) ||
        request.id.includes(term) ||
        request.forms.toLowerCase().includes(term.toLowerCase()) ||
        request.status.toLowerCase().includes(term.toLowerCase()) ||
        request.date.includes(term);
      return searchMatch;
    });
    onSearch(results);
  };

  return (
    <SearchForm>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Pesquise por cliente, ID, status ou data"
      />
      <IoIosSearch/>
    </SearchForm>
  );
};

export default Search;