import React, { useState, useEffect } from 'react';
import { DSection, Section, H2, Cards, Button, SectionHalf, SectionHalfContent, LinkButton, Filtro } from './Style'; // Assumindo que o estilo está em um arquivo separado Style.js
import CardSolicitacao from '../CardSolicitacao/CardSolicitacao';
import HistoricoCard from '../HistoricoCard/HistoricoCard';
import RequestStatus from '../RequestStatus/RequestStatus'; // Importe o componente RequestStatus
import { TiArrowMaximise } from 'react-icons/ti';

const DashboardSection = ({ filteredSolicitacao, originalSolicitacao, originalHistorico }) => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedForm, setSelectedForm] = useState(null); // Estado para o filtro de formulário
  const [filteredRequestsCount, setFilteredRequestsCount] = useState({});
  const [filteredRequests, setFilteredRequests] = useState(originalSolicitacao); // Estado para as solicitações filtradas
  const [filteredHistorico, setFilteredHistorico] = useState(originalHistorico); // Estado para as atualizações filtradas

  useEffect(() => {
    // Calcula a quantidade de solicitações por status
    const countRequestsByStatus = (requests) => {
      const counts = {};
      requests.forEach(request => {
        counts[request.status] = (counts[request.status] || 0) + 1;
      });
      return counts;
    };

    // Define os counts iniciais e atualiza quando o filtro muda
    if (selectedFilter) {
      setFilteredRequestsCount(countRequestsByStatus(filteredSolicitacao));
    } else {
      setFilteredRequestsCount(countRequestsByStatus(originalSolicitacao));
    }
  }, [selectedFilter, filteredSolicitacao, originalSolicitacao]);

  // Função para lidar com a mudança de filtro
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const handleFormFilterChange = (form) => {
    setSelectedForm(form);
    // Aplica o filtro de formulário nas solicitações
    const filteredRequests = originalSolicitacao.filter(request => request.forms.includes(form));
    setFilteredRequests(filteredRequests);

    // Aplica o filtro de formulário nas atualizações
    const filteredHistorico = originalHistorico.filter(update => update.forms.includes(form));
    setFilteredHistorico(filteredHistorico);
  };

  const handleRemoveFormFilter = () => {
    setSelectedForm(null);
    setFilteredRequests(originalSolicitacao);
    setFilteredHistorico(originalHistorico); // Restaura as atualizações
  };

  return (
    <DSection>
      {/* Filtro de Formulários - Movido para o topo */}
      <Filtro>
        {['Dosimetria Clínica', 'Dosimetria Pré-Clínica', 'Modelagem Computacional', 'Segmentação e Quantificação', 'Radiosinoviortese'].map(form => (
          <button
            key={form}
            value={form}
            onClick={() => handleFormFilterChange(form)} 
            isActive={selectedForm === form}
          >
            {form}
          </button>
        ))}
        {selectedForm && (
          <button onClick={handleRemoveFormFilter}>Remover Filtro</button>
        )}
      </Filtro>

      <Section>
        <H2>ÚLTIMAS SOLICITAÇÕES
          <LinkButton to={"/servicos"}><Button><TiArrowMaximise size={'25'} /></Button></LinkButton>
        </H2>
        <Cards>
          {/* Ordena as solicitações pela data (em ordem decrescente) */}
          {filteredRequests && filteredRequests.sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 5) // Pega as 4 primeiras solicitações
            .filter(item => item.status !== 'Concluded') // Filtra as concluídas
            .map((item) => ( 
              <CardSolicitacao
                key={item.date}
                id={item.id}
                client={item.client}
                date={item.date}
                status={item.status}
                forms={item.forms}
              />
            ))}
        </Cards>
      </Section>

      <SectionHalf>
        <SectionHalfContent>
          <H2>ÚLTIMAS ATUALIZAÇÕES</H2>
          <Cards>
            {/* Ordena as atualizações pela data (em ordem decrescente) */}
            {filteredHistorico && filteredHistorico.sort((a, b) => new Date(b.date) - new Date(a.date))
              .slice(0, 2) // Pega as 2 primeiras atualizações
              .filter(item => item.status !== 'Concluded') // Filtra as concluídas
              .map((itens) => (
                <HistoricoCard
                  key={itens.date}
                  id={itens.id}
                  action={itens.action}
                  status={itens.status}
                  time={itens.date}
                  forms={itens.forms}
                />
              ))}
          </Cards>
        </SectionHalfContent>

        <SectionHalfContent>
          <H2>STATUS DAS SOLICITAÇÕES</H2>
          <RequestStatus 
            requestsData={filteredRequests} 
            onFilterChange={handleFilterChange} 
          /> 
        </SectionHalfContent>
      </SectionHalf>

    </DSection>
  );
};

export default DashboardSection;