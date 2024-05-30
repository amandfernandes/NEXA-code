import React, { useState } from 'react';
import { SearchForm } from './Style';
import { IoIosSearch } from 'react-icons/io';
<<<<<<< HEAD
import FiltroForms from '../FiltroForms/FiltroForms';
=======
>>>>>>> 3e91d767cdd4bed2b7468b133252e37a006393fc

const Search = ({ requests, onSearch }) => { // 'requests' agora recebe o array filtrado
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
<<<<<<< HEAD
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
=======
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
>>>>>>> 3e91d767cdd4bed2b7468b133252e37a006393fc
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