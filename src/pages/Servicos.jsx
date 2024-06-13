import React, { useState } from 'react';
import requestsData from '../data/Solicitacoes.json';
import Base from './Base';
import TableSolicitacao from '../components/TableSolicitacao/TableSolicitacao'; 
import FiltroForms from '../components/FiltroForms/FiltroForms';

function Servicos() {
  const [originalData] = useState(requestsData); 
  const [currentPage, setCurrentPage] = useState(1);
  const [requestsPerPage] = useState(10); 
  const [filteredRequests, setFilteredRequests] = useState(requestsData); 
  const [selectedForm, setSelectedForm] = useState(null); 

  const handleFilterChange = (filteredRequests) => { 
    setFilteredRequests(filteredRequests); 
  };

  const handleFilterRemove = () => {
    setSelectedForm(null);
    setFilteredRequests(originalData);
  };

  return (
    <Base>
      {/* Passa o componente Filtro para a página */}
      <FiltroForms
        requests={originalData} 
        onFilterChange={(filteredRequests) => handleFilterChange(filteredRequests)} 
        onFilterRemove={handleFilterRemove} 
        selectedForm={selectedForm} 
        setFilteredRequests={setFilteredRequests} 
      />
      <TableSolicitacao 
        requests={filteredRequests} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        requestsPerPage={requestsPerPage} 
      /> 
    </Base>
  );
}
export default Servicos;