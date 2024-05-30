import React from 'react';
import { FaUpRightAndDownLeftFromCenter } from "react-icons/fa6";
import { FiDownloadCloud } from "react-icons/fi";
import { Table, Th, Td, Tr, Button, TableContainer, PaginationContainer } from './Style';
import { Link } from "react-router-dom";

const TableSolicitacao = ({ requests, currentPage, setCurrentPage, requestsPerPage }) => {
  const getColor = (status) => {
    switch (status) {
      case 'Concluded':
        return 'green';
      case 'Pending':
        return 'red';
      case 'Progress':
        return 'orange';
      default:
        return '#003154';
    }
  };

  // Lógica de paginação
  const indexOfLastRequest = currentPage * requestsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
  const currentRequests = requests.slice(indexOfFirstRequest, indexOfLastRequest);

  // Funções para mudar a página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
              <Th>Acessar</Th>
            </Tr>
          </thead>
          <tbody>
            {currentRequests.length > 0 ? (
              currentRequests.map((request) => (
                <Tr key={request.id}>
                  <Td>{request.id}</Td>
                  <Td>{request.client}</Td>
                  <Td>{request.date}</Td>
                  <Td>{request.forms}</Td>
                  <Td style={{ color: getColor(request.status) }}>{request.status}</Td>
                  <Td><FiDownloadCloud /></Td>
<<<<<<< HEAD
                  <Td><Link to={"/solicitacao/" + request.id}><Button><FaUpRightAndDownLeftFromCenter size={'15'} /></Button></Link></Td>
=======
                  <Td><Link to={"/solicitacao/"+request.id}><Button><FaUpRightAndDownLeftFromCenter size={'15'}/></Button></Link></Td>
>>>>>>> 3e91d767cdd4bed2b7468b133252e37a006393fc
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
      {/* Botões de paginação */}
      <PaginationContainer>
        {currentPage > 1 && (
          <button onClick={() => paginate(currentPage - 1)}>Anterior</button>
        )}

        {Array.from({ length: Math.ceil(requests.length / requestsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}

        {currentPage < Math.ceil(requests.length / requestsPerPage) && (
          <button onClick={() => paginate(currentPage + 1)}>Próximo</button>
        )}
      </PaginationContainer>
    </div>
  );
};

export default TableSolicitacao;