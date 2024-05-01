/* Essa Página é o dashboard principal=
Deve conter=
  As ultimas solicitações (5);
  As ultimas interações do histórico.
*/
import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../data/Solicitacoes.json';
import FiltroForms from '../components/FiltroForms/FiltroForms';
import DashboardSection from '../components/DashboardSection/DashboardSection';
import Base from './Base';

const Home = () => {
  const [originalData, setOriginalData] = useState(data);
  const [filteredData, setFilteredData] = useState(originalData.slice(-4));
  const [selectedForm, setSelectedForm] = useState('');

  const handleFilterChange = (newData) => {
    // Filtrar os últimos itens do novo conjunto de dados
    setFilteredData(newData.slice(-4));
  };

  const handleFilterRemove = () => {
    setSelectedForm('');
    // Mostrar novamente os últimos 4 itens do conjunto de dados original
    setFilteredData(originalData.slice(-4));
  };

  return (
    <Base>
      <FiltroForms
        requests={originalData}
        setFilteredRequests={handleFilterChange}
        onFilterRemove={handleFilterRemove}
        selectedForm={selectedForm}
      />
      <DashboardSection filteredData={filteredData} />
    </Base>
  );
};

export default Home;