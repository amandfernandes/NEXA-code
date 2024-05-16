import styled from "styled-components";

export const Section = styled.div`
  display: flex; /* Enables flexbox layout */
  flex-direction: row; /* Columns side-by-side */
  grid-template-columns: repeat(auto-fill, minmax(100rem, 1fr));
  gap: 20px;
  padding: 20px;
`;

export const SSolicitacao = styled.div`
  padding: 1px;
  border-radius: 8px;
  justify-content: space-between;
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
`;