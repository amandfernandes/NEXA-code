/* Essa Página deve apresentar todas as solicitações feitas */
import React, { useState } from 'react';
import requestsData from '../data/Solicitacoes.json';
import FiltroForms from '../components/FiltroForms/FiltroForms';
import Base from './Base';
<<<<<<< HEAD
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
=======
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
>>>>>>> 3e91d767cdd4bed2b7468b133252e37a006393fc
  };

  return (
    <Base>
      <FiltroForms
        requests={originalData}
        setFilteredRequests={handleFilterChange}
        onFilterRemove={handleFilterRemove}
        selectedForm={selectedForm}
      />
<<<<<<< HEAD
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
=======
      <Search requests={originalData} onSearch={handleSearch} />
      <TableSolicitacao requests={filteredData} />
>>>>>>> 3e91d767cdd4bed2b7468b133252e37a006393fc
    </Base>
  );
}

export default Servicos;