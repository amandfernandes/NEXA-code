import React, { useState, useEffect } from 'react';
import data from '../data/Solicitacoes.json';
import action from '../data/historicos.json';
import DashboardSection from '../components/DashboardSection/DashboardSection';
import Base from './Base';

const Home = () => {
  const [originalSolicitacao, setOriginalSolicitacao] = useState(data);
  const [originalHistorico, setOriginalHistorico] = useState(action);

  // Estado para solicitações filtradas por status
  const [filteredSolicitacao, setFilteredSolicitacao] = useState(data);
  // Estado para histórico filtrado por status
  const [filteredHistorico, setFilteredHistorico] = useState(action);

  useEffect(() => {
    // Lógica para filtrar solicitações por status (se necessário)
    // Exemplo: filtrar por status "Pendente"
    const pendingRequests = data.filter(item => item.status === 'Pending');
    setFilteredSolicitacao(pendingRequests);
  }, []);

  useEffect(() => {
    // Lógica para filtrar histórico por status (se necessário)
    // Exemplo: filtrar por status "Aprovado"
    const approvedActions = action.filter(item => item.status === 'Progress');
    setFilteredHistorico(approvedActions);
  }, []);

  return (
    <Base>
      <DashboardSection 
        filteredSolicitacao={filteredSolicitacao}
        originalSolicitacao={originalSolicitacao}
        originalHistorico={originalHistorico}
        filteredHistorico={filteredHistorico}
      />
    </Base>
  );
};

export default Home;