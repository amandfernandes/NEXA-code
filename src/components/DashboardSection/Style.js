// style.js
import styled from "styled-components";
import { Link } from "react-router-dom";

const DSection = styled.div`
  display: flex;
  flex-direction: column; /* Layout em coluna */
  gap: 20px;
  padding: 20px;
`;

const Section = styled.div`
  background-color: #CCD5DC;
  padding: 1px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  justify-content: space-between;
`;

const H2 = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #003154;
  padding: 10px; /* Diminui o padding */
  display: flex;
  align-items: center;
`;

const LinkButton = styled(Link)`
  display: flex;
  padding: 1%; /* Diminui o padding */
  color: #003154;
  text-decoration: none;
  margin-left: auto;
`;

const Button = styled.div`
  display: flex;
  align-items: center; /* Centraliza verticalmente o ícone */
  padding: 5%; /* Define um padding para o botão */
  background-color: transparent; /* Remove o background do botão */
  border: none; /* Remove a borda do botão */
  cursor: pointer; /* Define o cursor como um ponteiro */
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14.5em, 1fr));
  gap: 1em;
  padding: 10px;
  border-radius: 4px;
  margin: 10px;
  justify-content: space-between;

`;

const SectionHalf = styled.div`
  display: flex; /* Layout em linha para SectionHalf */
  width: 100%; /* Cada SectionHalf ocupa 100% da largura */
  gap: 20px; /* Espaço entre as SectionHalf */
`;

const SectionHalfContent = styled.div` /* Estilo para o conteúdo de cada SectionHalf */
  background-color: #CCD5DC;
  padding: 1px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  justify-content: space-between;
  flex: 1; /* Permite que os conteúdos se estendam para ocupar o espaço disponível */
  width: 50%; /* Define a largura de cada conteúdo como 50% */
`;

const Card = styled.div`
  background-color: #ffffff;
  padding: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 10px;
`;

export { DSection, Section, H2, Cards, Button, Card, SectionHalf, SectionHalfContent, LinkButton }; 