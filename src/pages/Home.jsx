/* Essa Página é o dashboard principal.
Deve conter:
  As solicitações (4); ordenadas por data (da mais recente para a mais antiga)
  As interações do histórico (5). ordenadas por data (da mais recente para a mais antiga)
  Componente de filtro deve filtrar/mostrar:
  As solicitações (4) ordenadas por data (da mais recente para a mais antiga)
  As interações do histórico (5) ordenadas por data (da mais recente para a mais antiga)
*/
import React, { useState } from 'react';
import data from '../data/Solicitacoes.json';
import action from '../data/Historico.json';
import FiltroForms from '../components/FiltroForms/FiltroForms';
import DashboardSection from '../components/DashboardSection/DashboardSection'; // Importe o DashboardSection
import Base from './Base';

const Home = () => {
  const [originalSolicitacao, setOriginalSolicitacao] = useState(data);
  const [originalHistorico, setOriginalHistorico] = useState(action);
  const [filteredSolicitacao, setFilteredSolicitacao] = useState([]);
  const [filteredHistorico, setFilteredHistorico] = useState([]);
  const [selectedForm, setSelectedForm] = useState('');

  // Função para ordenar os dados por data (mais recente para mais antigo)
  const ordenarPorData = (array) => {
    return array.sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  // Atualiza o estado com as 4 solicitações mais recentes ao carregar o componente
  React.useEffect(() => {
    setFilteredSolicitacao(ordenarPorData(originalSolicitacao).slice(-4));
  }, [originalSolicitacao]);

  // Atualiza o estado com as 5 interações do histórico mais recentes ao carregar o componente
  React.useEffect(() => {
    setFilteredHistorico(ordenarPorData(originalHistorico).slice(-2));
  }, [originalHistorico]);

  // Função de tratamento de mudança de filtro
  const handleFilterChange = (event, form) => {
    const value = event.target.value;

    if (selectedForm === value) {
      setSelectedForm('');
      setFilteredSolicitacao(ordenarPorData(originalSolicitacao).slice(-4)); // Mostrar 4 solicitações mais recentes
      setFilteredHistorico(ordenarPorData(originalHistorico).slice(-2)); // Mostrar 5 interações do histórico mais recentes
    } else {
      setSelectedForm(value);
      const filteredRequests = ordenarPorData(
        originalSolicitacao.filter(
          (request) => request.forms === value
        )
      ).slice(-4); // Filtrar solicitações e pegar as 4 mais recentes
      const filteredActions = ordenarPorData(
        originalHistorico.filter(
          (action) => action.forms === value
        )
      ).slice(-2); // Filtrar histórico e pegar as 5 mais recentes

      setFilteredSolicitacao(filteredRequests);
      setFilteredHistorico(filteredActions);
    }
  };

  // Função de tratamento de remoção de filtro
  const handleFilterRemove = () => {
    setSelectedForm('');
    setFilteredSolicitacao(
      ordenarPorData(originalSolicitacao).slice(-4) // Mostrar 4 solicitações mais recentes
    );
    setFilteredHistorico(
      ordenarPorData(originalHistorico).slice(-2) // Mostrar 5 interações do histórico mais recentes
    );
  };

  return (
    <Base>
      <FiltroForms
        requests={originalSolicitacao}
        setFilteredRequests={handleFilterChange}
        onFilterRemove={handleFilterRemove} // Passar a função para o FiltroForms
        selectedForm={selectedForm}
      />
      <DashboardSection 
        filteredSolicitacao={filteredSolicitacao}
        filteredHistorico={filteredHistorico}
        originalSolicitacao={originalSolicitacao} // Passe originalSolicitacao
      />
    </Base>
  );
};

export default Home;