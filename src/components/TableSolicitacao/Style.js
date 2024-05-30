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
    background-color: #003154;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 0 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #004d99;
    }

    &.active {
      background-color: #005299;
    }
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
    flex-grow: 1;
  }

  button {
    background-color: #003154;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #004d99;
    }
  }
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