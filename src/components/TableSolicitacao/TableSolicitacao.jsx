import React, { useState } from 'react';
import { FaUpRightAndDownLeftFromCenter } from "react-icons/fa6";
import { FiDownloadCloud, FiUploadCloud } from "react-icons/fi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Table, Th, Td, Tr, Button, TableContainer, PaginationContainer } from './Style';
import { Link } from "react-router-dom";
import Relatorio from '../Relatorio/Relatorio';

const TableSolicitacao = ({ requests, currentPage, setCurrentPage, requestsPerPage }) => {
  const [sortedRequests, setSortedRequests] = useState(requests); // Estado para a lista ordenada
  const [sortOrder, setSortOrder] = useState('asc'); // Inicialmente, em ordem crescente

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
  const currentRequests = sortedRequests.slice(indexOfFirstRequest, indexOfLastRequest); // Utiliza a lista ordenada

  // Função para ordenar a tabela
  const handleSort = () => {
    // Define a ordem inversa
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');

    // Ordena a lista de solicitações
    const sorted = [...sortedRequests].sort((a, b) => {
      // Define a ordem de prioridade dos status
      const priority = {
        'Pending': 1,
        'Progress': 2,
        'Concluded': 3
      };

      // Compara os status e retorna o resultado de acordo com a ordem
      const statusA = priority[a.status];
      const statusB = priority[b.status];

      if (sortOrder === 'asc') {
        return statusA - statusB;
      } else {
        return statusB - statusA;
      }
    });

    // Atualiza o estado com a lista ordenada
    setSortedRequests(sorted);
  };

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
              <Th onClick={handleSort}>Status<span className="sort-icon">{sortOrder === 'asc' ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span></Th>
              <Th>Calibração</Th>
              <Th>Imagens</Th>
              <Th>Relatório</Th>
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
                  <Td><FiDownloadCloud /></Td>
                  <Td><FiUploadCloud /></Td>
                  <Td><Link to={"/solicitacao/" + request.id}><Button><FaUpRightAndDownLeftFromCenter size={'15'} /></Button></Link></Td>
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

        {Array.from({ length: Math.ceil(sortedRequests.length / requestsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}

        {currentPage < Math.ceil(sortedRequests.length / requestsPerPage) && (
          <button onClick={() => paginate(currentPage + 1)}>Próximo</button>
        )}
      </PaginationContainer>
    </div>
  );
};

export default TableSolicitacao;