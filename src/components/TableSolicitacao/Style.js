import styled from 'styled-components';

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Table = styled.table`
  width: 100%;
  max-width: 800rem; /* Ajuste este valor conforme necessário */
  border-collapse: collapse;
  margin-top: 20px;
`;

export const Th = styled.th`
  background-color: #f0f0f0;
  color: #001354;
  padding: 10px;
  text-align: left; /* Alinhamento do texto para a esquerda */
`;

export const Td = styled.td`
  padding: 10px;
  text-align: center;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const Button = styled.button` 
  background-color: transparent;
  border: none;
  color:#001354;
  padding: 10px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 20px; 
`;

export const Filtro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  button {
    background-color: '#ffffff'; // Cor de fundo é #003154 quando o filtro está ativo, e branca quando não está
    color: '#003154'; // Cor do texto é branca quando o filtro está ativo, e #003154 quando não está
    border: solid 1px #dcdcdc;
    border-radius: 10px; // Bordas mais achatadas
    padding: 10px 20px;
    margin: 0 10px; // Mais espaço entre os botões
    cursor: pointer;

    &.active {
      background-color: '#003154'; // Cor de fundo é #003154 quando o filtro está ativo
      color: '#ffffff'; // Cor do texto é branca quando o filtro está ativo
    }

    &:hover {
      background-color: #003154; // Cor de fundo é #003154 quando o filtro está ativo, e branca quando não está
      color: #ffffff; // Cor do texto é branca quando o filtro está ativo, e #003154 quando não está
    }
  }
`;

export const SearchForm = styled.div` /* Mudança: usando div para evitar o comportamento de formulário */
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 20px;
  padding: 8px 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px; /* Adicionei a margem inferior */

  input {
    border: none;
    outline: none;
    flex-grow: 1;
    padding: 5px;
    font-size: 16px;

    &::placeholder {
      color: #999;
    }
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 5px;
    color: #001354;

    svg {
      font-size: 20px;
    }
  }
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  flex-grow: 1;
`;

export const SearchIcon = styled.div` /* Novo estilo para o ícone */
  background-color: transparent; /* Fundo transparente para o ícone */
  border: none;
  padding: 5px;
  cursor: pointer;
  color: #001354; /* Cor do ícone */
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  button {
    margin: 0 5px;
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    background-color: white;

    &.active {
      background-color: #003154;
      color: white;
    }
  }
`;

export const filterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;