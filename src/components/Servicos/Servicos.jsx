import React from 'react';
import { Table, Th, Td, Tr, Button, TableContainer } from './Style';
import FiltroComponent from '../Filtro/Filtro';

const Servicos = ({ requests }) => {
  const [filteredRequests, setFilteredRequests] = React.useState(requests);

  return (
    <div>
      <FiltroComponent requests={requests} setFilteredRequests={setFilteredRequests} />
      <TableContainer>
        <Table>
          <thead>
            <Tr>
              <Th>ID</Th>
              <Th>Título</Th>
              <Th>Data</Th>
              <Th>Status</Th>
              <Th>Formulário</Th>
              <Th>Ações</Th>
            </Tr>
          </thead>
          <tbody>
            {filteredRequests.map((request) => (
              <Tr key={request.id}>
                <Td>{request.id}</Td>
                <Td>{request.title}</Td>
                <Td>{request.date}</Td>
                <Td>{request.status}</Td>
                <Td>{request.forms}</Td>
                <Td><Button>Acessar</Button></Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Servicos;
