/* Essa Página deve apresentar todas as solicitações feitas */
import React from 'react';
import TableSolicitacao from '../components/TableSolicitacao/TableSolicitacao';
import requestsData from '../data/Solicitacoes.json';
import Base from './Base';

function Servicos() {
  const requests = requestsData.map((request) => {
    return {
      id: request.id,
      client: request.client,
      date: request.date,
      status: request.status,
      forms: request.forms,
    };
  });

  return (
    <Base>
        <div>
        <TableSolicitacao requests={requests} />
        </div>
    </Base>
  );
}

export default Servicos;