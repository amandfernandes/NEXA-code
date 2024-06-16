import React, { useState } from 'react';
import { FaUpRightAndDownLeftFromCenter } from "react-icons/fa6";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Table, Th, Td, Tr, Button, TableContainer, PaginationContainer, SearchForm, SearchInput, SearchIcon, Filtro, filterContainer } from './Style';
import { Link } from "react-router-dom";
import DownloadUpload from '../DownloadUpload/DownloadUpload'; // Importando o componente DownloadUpload
import { IoIosSearch } from 'react-icons/io'; // Importando o ícone de pesquisa

const TableSolicitacao = ({ requests, currentPage, setCurrentPage, requestsPerPage }) => {
  const [sortOrder, setSortOrder] = useState('asc');
  const [filteredAndSortedRequests, setFilteredAndSortedRequests] = useState(Object.values(requests)); 
  const [searchTerm, setSearchTerm] = useState(''); // Estado para o termo de pesquisa
  const [selectedForms, setSelectedForms] = useState([]); // Estado para os formulários selecionados

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
  const totalRequests = filteredAndSortedRequests.length;
  const indexOfLastRequest = currentPage * requestsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
  const currentRequests = filteredAndSortedRequests
    .slice(indexOfFirstRequest, indexOfLastRequest);

  // Função para ordenar a tabela
  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    const sorted = [...filteredAndSortedRequests]; // Clone do estado principal

    // Ordena a matriz
    sorted.sort((a, b) => {
      const priority = {
        'Pending': 1,
        'Progress': 2,
        'Concluded': 3
      };
      const statusA = priority[a.status];
      const statusB = priority[b.status];

      if (sortOrder === 'asc') {
        return statusA - statusB;
      } else {
        return statusB - statusA;
      }
    });

    // Atualiza o estado principal com os dados ordenados
    setFilteredAndSortedRequests(sorted); 
  };

  // Função para filtrar os dados
  const handleSearch = (term) => {
    setSearchTerm(term); // Atualiza o termo de pesquisa no estado

    // Se o termo de pesquisa estiver vazio, resetar o estado para o array original
    if (term.trim() === '') {
      setFilteredAndSortedRequests(Object.values(requests)); // Restaura os dados originais
    } else {
      const terms = term.trim().toLowerCase().split(' ');
      const results = Object.values(requests).filter((request) => {
        return terms.every((search) => {
          return (
            request.client.toLowerCase().includes(search) ||
            request.id.toString().includes(search) ||
            request.forms.toLowerCase().includes(search) ||
            request.status.toLowerCase().includes(search) ||
            // Converta a data para timestamp e compare com o termo de pesquisa
            Date.parse(request.date) === Date.parse(search) 
          );
        });
      });
      setFilteredAndSortedRequests(results); // Atualiza o estado com os resultados filtrados
    }
  };

  // Função para filtrar por formulário
  const handleFormFilter = (form) => {
    if (form === 'Remover Filtros') { // Verifica se o botão clicado é o de remover filtros
      setSelectedForms([]); // Limpa a lista de formulários selecionados
      setFilteredAndSortedRequests(Object.values(requests)); // Restaura os dados originais
    } else {
      const newSelectedForms = selectedForms.includes(form)
        ? selectedForms.filter((f) => f !== form)
        : [...selectedForms, form];
  
      setSelectedForms(newSelectedForms);
  
      const filteredRequests = requests.filter((request) => {
        if (newSelectedForms.length === 0) {
          return true;
        }
        return newSelectedForms.some((selectedForm) => request.forms.toLowerCase().includes(selectedForm.toLowerCase()));
      });
  
      setFilteredAndSortedRequests(filteredRequests);
    }
  };

  // Funções para mudar a página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="filter-container"> {/* Novo container para os botões de filtro */}
        <Filtro> 
          {['Dosimetria Clínica', 'Dosimetria Pré-Clínica', 'Modelagem Computacional', 'Segmentação e Quantificação', 'Radiosinoviortese'].map(
            (form) => (
              <button
                key={form}
                onClick={() => handleFormFilter(form)}
                className={selectedForms.includes(form) ? 'active' : ''}
              >
                {form}
              </button>
            )
          )}
          {/* <button onClick={() => setSelectedForms([])}>Remover Filtros</button> */} {/* Removendo o botão "Remover Filtros" */}
        </Filtro>
      </div>

      <SearchForm>
        <SearchInput
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Pesquise por cliente, ID, status ou data"
        />
        <SearchIcon onClick={() => handleSearch(searchTerm)}> 
          <IoIosSearch /> 
        </SearchIcon>
      </SearchForm>

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