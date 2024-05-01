/* Esse componente irá tratar da tabela de solicitações */
import React from 'react';
import { Table, Th, Td, Tr, Button, TableContainer } from './Style';
import FiltroForms from '../FiltroForms/FiltroForms'
import { Link } from "react-router-dom";

const TableSolicitacao = ({ requests }) => {
  const [filteredRequests, setFilteredRequests] = React.useState(requests);

  return (
    <div>
      <FiltroForms requests={requests} setFilteredRequests={setFilteredRequests} />
      <TableContainer>
        <Table>
          <thead>
            <Tr>
              <Th>ID</Th>
              <Th>Cliente</Th>
              <Th>Data</Th>
              <Th>Status</Th>
              <Th>Formulário</Th>
              <Th>Ações</Th>
            </Tr>
          </thead>
          <tbody>
            {filteredRequests.length > 0 ? (
              filteredRequests.map((request) => (
                <Tr key={request.id}>
                  <Td>{request.id}</Td>
                  <Td>{request.client}</Td>
                  <Td>{request.date}</Td>
                  <Td>{request.status}</Td>
                  <Td>{request.forms}</Td>
                  <Td><Link to={"/solicitacao/"+request.id}><Button>Acessar</Button></Link></Td>
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