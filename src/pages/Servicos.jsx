import React, { useState, useEffect } from 'react';
import requestsData from '../data/Solicitacoes.json';
import Base from './Base';
import TableSolicitacao from '../components/TableSolicitacao/TableSolicitacao'; 

function Servicos() {
  const [originalData, setOriginalData] = useState(requestsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [requestsPerPage] = useState(10);

  return (
    <Base>
      <TableSolicitacao 
        requests={originalData} // Passa os dados filtrados e ordenados para a tabela
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        requestsPerPage={requestsPerPage} 
      /> 
    </Base>
  );
}
export default Servicos;