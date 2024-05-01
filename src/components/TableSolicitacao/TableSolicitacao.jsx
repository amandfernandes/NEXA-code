/* Esse componente irá tratar da tabela de solicitações */
import React from 'react';
import { Table, Th, Td, Tr, Button, TableContainer } from './Style';

const TableSolicitacao = ({ requests }) => {
  return (
    <div>
      <TableContainer>
        <Table>
          <thead>
            <Tr>
              <Th>ID</Th>
              <Th>Cliente</Th>
              <Th>Data</Th>
              <Th>Status</Th>
              <Th>Formulário</Th>
              <Th>Acessar</Th>
            </Tr>
          </thead>
          <tbody>
            {requests.length > 0? (
              requests.map((request) => (
                <Tr key={request.id}>
                  <Td>{request.id}</Td>
                  <Td>{request.client}</Td>
                  <Td>{request.date}</Td>
                  <Td>{request.status}</Td>
                  <Td>{request.forms}</Td>
                  <Td><Button>Acessar</Button></Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan="6">Nenhum item encontrado</Td>
              </Tr>
            )}
          </tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableSolicitacao;