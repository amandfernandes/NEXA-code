/* Essa Página é o dashboard principal=
Deve conter=
  As ultimas solicitações (5);
  As ultimas interações do histórico.
*/
import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../data/Solicitacoes.json';
import FiltroForms from '../components/FiltroForms/FiltroForms';
import CardSolicitacao from '../components/CardSolicitacao/CardSolicitacao';
import Base from './Base'

const ClientCards = styled.div`
  display: flex;
  flex-direction: row; /* Faz com que os cartões se alinhem horizontalmente */
  justify-content: space-between; /* Espaça os cartões uniformemente */
  overflow-x: auto; /* Permite rolagem horizontal se os cartões excederem a largura do container */
`;

const Home = () => {
  const [filteredData, setFilteredData] = useState(data.slice(-4));

  return (
    <Base>
      <FiltroForms requests={data} setFilteredRequests={setFilteredData} />
      <ClientCards>
        {filteredData.map((request) => (
          <CardSolicitacao
            key={request.id}
            id={request.id}
            client={request.client}
            date={request.date}
            status={request.status}
            forms={request.forms}
          />
        ))}
      </ClientCards>
      <button>More</button>
    </Base>
  );
};

export default Home;
