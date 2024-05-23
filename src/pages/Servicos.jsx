/* Essa Página deve apresentar todas as solicitações feitas */
import React, { useState } from 'react';
import TableSolicitacao from '../components/TableSolicitacao/TableSolicitacao';
import requestsData from '../data/Solicitacoes.json';
import FiltroForms from '../components/FiltroForms/FiltroForms';
import Base from './Base';
import Search from '../components/Search/Search';

function Servicos() {
  const [originalData] = useState(requestsData);
  const [filteredData, setFilteredData] = useState(originalData);

  // Aplica o filtro do SearchForm aos dados já filtrados pelo FiltroForms
  const handleSearch = (results) => {
    setFilteredData(results);
  };


  // Aplica o filtro do FiltroForms
  const handleFilterChange = (newData) => {
    setFilteredData(newData);
  };

  // Remove todos os filtros
  const handleFilterRemove = () => {
    setFilteredData(originalData);
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