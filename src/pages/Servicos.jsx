import React, { useState } from 'react';
import TableSolicitacao from '../components/TableSolicitacao/TableSolicitacao';
import requestsData from '../data/Solicitacoes.json';
import FiltroForms from '../components/FiltroForms/FiltroForms';
import Base from './Base';
import Search from '../components/Search/Search'; 

function Servicos() {
  const [originalData] = useState(requestsData);
  const [filteredData, setFilteredData] = useState(originalData); 

  const handleFilterChange = (newData) => {
    setFilteredData(newData);
  };

  const handleFilterRemove = () => {
    setFilteredData(originalData); 
  };

  const handleSearch = (results) => {
    setFilteredData(results);
  };

  return (
    <Base>
      <FiltroForms
        requests={originalData}
        setFilteredRequests={handleFilterChange}
        onFilterRemove={handleFilterRemove}
      />
      <Search requests={originalData} onSearch={handleSearch} /> 
      <TableSolicitacao requests={filteredData} /> 
    </Base>
  );
}

export default Servicos;