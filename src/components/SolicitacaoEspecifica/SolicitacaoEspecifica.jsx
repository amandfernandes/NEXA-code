/* Esse componente vai tratar da solicitação detalhada */
import React from 'react';
import { Table, Th, Td, Tr, Button, TableContainer } from './Style';

const SolicitacaoEspecifica = () => {
  return (
    <div>
        <p><label>Cliente:</label> Cliente</p>
        <p><label>Data:</label> Data</p>
        <p><label>Status:</label> Status</p>
    </div>
  );
};

export default SolicitacaoEspecifica;
/*      id: request.id,
client: request.client,
date: request.date,
status: request.status,
forms: request.forms, */
