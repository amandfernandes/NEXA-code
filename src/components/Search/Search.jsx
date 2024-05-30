import React, { useState } from 'react';
import { SearchForm } from './Style';
import { IoIosSearch } from 'react-icons/io';
import FiltroForms from '../FiltroForms/FiltroForms';

const Search = ({ requests, onSearch }) => { // 'requests' agora recebe o array filtrado
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    filterAndSendResults(e.target.value);
  };

  const filterAndSendResults = (term) => {
    // Se o termo de pesquisa estiver vazio, resetar o estado para o array original
    if (term.trim() === '') {
      onSearch(requests); 
    } else {
      const terms = term.trim().toLowerCase().split(' ');
      const results = requests.filter((request) => {
        return terms.every((search) => {
          return (
            request.client.toLowerCase().includes(search) ||
            request.id.toString().includes(search) ||
            request.forms.toLowerCase().includes(search) ||
            request.status.toLowerCase().includes(search) ||
            request.date.includes(search)
          );
        });
      });
      onSearch(results);
    }
  };

  return (
    <SearchForm onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Pesquise por cliente, ID, status ou data"
      />
      <button type="submit">
        <IoIosSearch />
      </button>
    </SearchForm>
  );
};

export default Search;