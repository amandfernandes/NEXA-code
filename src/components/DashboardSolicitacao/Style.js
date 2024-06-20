import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row; /* Columns side-by-side */
  grid-template-columns: repeat(auto-fill, minmax(100rem, 1fr));
  gap: 20px;
  padding: 20px;
`;

export const SSolicitacao = styled.div`
  padding: 1px;
  border-radius: 8px;
  justify-content: space-between;
  width: 50%;
`;
export const SClientes = styled.div`
  padding: 1px;
  border-radius: 8px;
  justify-content: space-between;
  width: 50%;
`;


export const H2 = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  padding: 10px;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50em, 1fr));
  gap: 1em;
  padding: 10px;
  margin: 10px;
  justify-content: space-between;

`;

export const SHistorico = styled.div`
padding: 1px;
border-radius: 8px;
justify-content: space-between;
width: 25%;
display: flex;
flex-direction: column;
`;

export const Button = styled.button`
  background-color: #001354; 
  border: 1px solid #001354;
  color: #fff;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 15px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #001354; /* Darker green */
    color:#ffff;
  }
`;
