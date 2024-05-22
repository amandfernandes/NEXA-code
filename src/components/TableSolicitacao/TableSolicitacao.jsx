/* Esse componente irá tratar da tabela de solicitações */
import React from 'react';
import { FaUpRightAndDownLeftFromCenter } from "react-icons/fa6";
import { FiDownloadCloud } from "react-icons/fi";
import { Table, Th, Td, Tr, Button, TableContainer } from './Style';
import { Link } from "react-router-dom";

const TableSolicitacao = ({ requests }) => {
  const getColor = (status) => {
    switch(status) {
      case 'Concluded':
        return 'green';
      case 'Pending':
        return 'red';
      case 'Progress':
        return 'orange';
      default:
        return '#003154';
    }
  }

  return (
    <div>
      <TableContainer>
        <Table>
          <thead>
            <Tr>
              <Th>ID</Th>
              <Th>Cliente</Th>
              <Th>Data</Th>
              <Th>Formulário</Th>
              <Th>Status</Th>
              <Th>Download</Th>
              <Th>Histórico</Th>
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
                  <Td>{request.forms}</Td>
                  <Td style={{ color: getColor(request.status) }}>{request.status}</Td>
                  <Td><FiDownloadCloud /></Td>
                  <Td>{request.action}</Td>
                  <Td><Link to={"/solicitacao/"+request.id}><Button><FaUpRightAndDownLeftFromCenter size={'15'}/></Button></Link></Td>
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
