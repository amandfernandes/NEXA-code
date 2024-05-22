/* Essa Página é o dashboard principal=
Deve conter=
  As ultimas solicitações (4);
  As ultimas interações do histórico (5).
  Componete de filtro deve filtrar/mostrar:
  As ultimas solicitações (4)
*/
import React, { useState } from 'react';
import data from '../data/Solicitacoes.json';
import action from '../data/Historico.json';
import FiltroForms from '../components/FiltroForms/FiltroForms';
import DashboardSection from '../components/DashboardSection/DashboardSection';
import Base from './Base';

const Home = () => {
  const [originalSolicitacao, setOriginalSolicitacao] = useState(data);
  const [originalHistorico, setOriginalHistorico] = useState(action)
  const [filteredSolicitacao, setFilteredSolicitacao] = useState(originalSolicitacao.slice(-4));
  const [filteredHistorico, setFilteredHistorico] = useState(originalHistorico.slice(-5))
  const [selectedForm, setSelectedForm] = useState('');

  const handleFilterChange = (newData) => {
    // Filtrar os últimos itens do novo conjunto de dados
    setFilteredSolicitacao(newData.slice(-4));
  };

  const handleFilterRemove = () => {
    setSelectedForm('');
    // Mostrar novamente os últimos 4 itens do conjunto de dados original
    setFilteredSolicitacao(originalSolicitacao.slice(-4));
    setFilteredHistorico(originalHistorico.slice(-5));
  };

  return (
    <Base>
      <FiltroForms
        requests={originalSolicitacao}
        setFilteredRequests={handleFilterChange}
        onFilterRemove={handleFilterRemove}
        selectedForm={selectedForm}
      />
      <DashboardSection 
        filteredSolicitacao={filteredSolicitacao} 
        filteredHistorico={filteredHistorico}
      />
    </Base>
  );
};

export default Home;