/* Essa Página deve apresentar todas as solicitações feitas */
import React, { useState } from 'react';
import TableSolicitacao from '../components/TableSolicitacao/TableSolicitacao';
import requestsData from '../data/Solicitacoes.json';
import FiltroForms from '../components/FiltroForms/FiltroForms';
import Base from './Base';

function Servicos() { 
  const [originalData, setOriginalData] = useState(requestsData);
  const length = originalData.length; // Initialize length with the correct value
  const [filteredData, setFilteredData] = useState(originalData.slice(0, length));

  const handleFilterChange = (newData) => {
    setFilteredData(newData);
  };

  const handleFilterRemove = () => {
    setFilteredData(originalData.slice(0, length));
  };

  return (
    <Base>
      <FiltroForms
        requests={originalData}
        setFilteredRequests={handleFilterChange} // Update this line
        onFilterRemove={handleFilterRemove}
      />
      <TableSolicitacao requests={filteredData} />
    </Base>
  );
}

export default Servicos;