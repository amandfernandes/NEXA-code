import React, { useState } from 'react';
import { FaUpRightAndDownLeftFromCenter } from "react-icons/fa6";
import { FiDownloadCloud, FiUploadCloud } from "react-icons/fi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Table, Th, Td, Tr, Button, TableContainer, PaginationContainer } from './Style';
import { Link } from "react-router-dom";
import Search from '../Search/Search';
import DownloadUpload from '../DownloadUpload/DownloadUpload'; // Importando o componente DownloadUpload

const TableSolicitacao = ({ requests, currentPage, setCurrentPage, requestsPerPage }) => {
  const [sortedRequests, setSortedRequests] = useState(requests);
  const [sortOrder, setSortOrder] = useState('asc');
  const [filteredRequests, setFilteredRequests] = useState(requests);
  const [showRelatorio, setShowRelatorio] = useState(false);

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

  // Lógica de paginação (adaptada para objetos JSON)
  const totalRequests = Object.keys(filteredRequests).length;
  const indexOfLastRequest = currentPage * requestsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;

  // Filtra as solicitações para a página atual
  const currentRequests = Object.entries(filteredRequests)
    .slice(indexOfFirstRequest, indexOfLastRequest)
    .map(([key, value]) => value);

  // Função para ordenar a tabela
  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    const sorted = {...sortedRequests};

    // Ordena as solicitações dentro do objeto
    const sortedEntries = Object.entries(sorted).sort((a, b) => {
      const priority = {
        'Pending': 1,
        'Progress': 2,
        'Concluded': 3
      };
      const statusA = priority[a[1].status];
      const statusB = priority[b[1].status];

      if (sortOrder === 'asc') {
        return statusA - statusB;
      } else {
        return statusB - statusA;
      }
    });

    // Atualiza o objeto JSON com as solicitações ordenadas
    sortedEntries.forEach(([key, value]) => {
      sorted[key] = value;
    });

    setSortedRequests(sorted);
    setFilteredRequests(sorted);
  };

  // Funções para mudar a página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Função para aplicar a pesquisa
  const handleSearch = (results) => {
    setFilteredRequests(results);
  };

  // Função para lidar com o upload do relatório
  const handleUpload = async (file) => {
    // Lógica para lidar com o upload do arquivo (ex: enviar para um servidor)
    console.log('Arquivo enviado:', file);
  };

  const handleCancel = () => {
    setShowRelatorio(false);
  };

  return (
    <div>
      {/* Componente de pesquisa */}
      <Search requests={sortedRequests} onSearch={handleSearch} />

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
            {/* Verifica se há solicitações a serem exibidas */}
            {currentRequests.length > 0 ? (
              currentRequests.map((request, index) => (
                // Verifica se o request é válido (não nulo)
                request !== null ? (
                  <Tr key={index}> 
                    <Td>{request.id}</Td>
                    <Td>{request.client}</Td>
                    <Td>{request.date}</Td>
                    <Td>{request.forms}</Td>
                    <Td style={{ color: getColor(request.status) }}>{request.status}</Td>
                    {/* Botão de download para Calibração */}
                    <Td><DownloadUpload type="calibracao" /></Td>
                    {/* Botão de download para Imagens */}
                    <Td><DownloadUpload type="exames" /></Td>
                    {/* Botão de upload para Relatório */}
                    <Td><DownloadUpload type="relatorio" /></Td>
                    {/* Botão para acessar solicitação */}
                    <Td><Link to={"/solicitacao/" + request.id}><Button><FaUpRightAndDownLeftFromCenter size={'15'} /></Button></Link></Td>
                  </Tr>
                ) : null
              ))
            ) : (
              <Tr>
                <Td colSpan="6">Nenhum item encontrado</Td>
              </Tr>
            )}
          </tbody>
        </Table>
      </TableContainer>

      <PaginationContainer>
        {currentPage > 1 && (
          <button onClick={() => paginate(currentPage - 1)}>Anterior</button>
        )}

        {Array.from({ length: Math.ceil(totalRequests / requestsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}

        {currentPage < Math.ceil(totalRequests / requestsPerPage) && (
          <button onClick={() => paginate(currentPage + 1)}>Próximo</button>
        )}
      </PaginationContainer>
    </div>
  );
};

export default TableSolicitacao;