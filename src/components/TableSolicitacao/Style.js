import styled from 'styled-components';

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Table = styled.table`
  width: 100%;
  max-width: 800px; /* Ajuste este valor conforme necessário */
  border-collapse: collapse;
  margin-top: 20px;
`;

export const Th = styled.th`
  background-color: #f0f0f0;
  color: #000;
  padding: 10px;
`;

export const Td = styled.td`
  padding: 10px;
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
background-color: #003154; /* Green */
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
border-radius: 12px; /* Ajuste este valor conforme necessário */
`;

