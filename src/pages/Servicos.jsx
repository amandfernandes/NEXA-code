import React, { useState } from 'react';
import requestsData from '../data/Solicitacoes.json';
import FiltroForms from '../components/FiltroForms/FiltroForms';
import Base from './Base';
import Search from '../components/Search/Search'; 
import TableSolicitacao from '../components/TableSolicitacao/TableSolicitacao';

function Servicos() {
  const [originalData] = useState(requestsData);
  const [filteredData, setFilteredData] = useState(originalData); 
  const [selectedForm, setSelectedForm] = useState(null); 
  const [currentPage, setCurrentPage] = useState(1);
  const [requestsPerPage] = useState(10); 

  const handleSearch = (results) => {
    setFilteredData(results);
    setCurrentPage(1); // Resetar página ao pesquisar
  };

  const handleFilterChange = (event, form) => {
    const value = event.target.value;

    if (selectedForm === value) {
      setSelectedForm(null); 
      setFilteredData(originalData); 
      setCurrentPage(1); // Resetar página ao remover filtro
    } else {
      setSelectedForm(value);
      const filteredRequests = originalData.filter(request => request.forms === value);
      setFilteredData(filteredRequests);
      setCurrentPage(1); // Resetar página ao aplicar filtro
    }
  };

  // Função de tratamento de remoção de filtro
  const handleFilterRemove = () => {
    setSelectedForm(null); 
    setFilteredData(originalData); 
    setCurrentPage(1); // Resetar página ao remover filtro
  };

  return (
    <Base>
      <FiltroForms
        requests={originalData}
        setFilteredRequests={handleFilterChange}
        onFilterRemove={handleFilterRemove}
        selectedForm={selectedForm}
      />
      <Search 
        requests={selectedForm ? filteredData : originalData} // Passar o array correto para a pesquisa
        onSearch={handleSearch} 
      /> 
      <TableSolicitacao 
        requests={filteredData} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        requestsPerPage={requestsPerPage} 
      /> 
    </Base>
  );
}

export default Servicos;