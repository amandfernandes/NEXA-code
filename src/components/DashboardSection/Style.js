// style.js
import styled from "styled-components";

const DSection = styled.div`
  display: flex;
  flex-direction: column;
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
  padding: 10px;
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


const CImg = styled.div`
  align-self: right;
  padding: 10%;
  color: #fff;
  `;

const Card = styled.div`
  background-color: #ffffff;
  padding: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 10px;
`;

export { DSection, Section, H2, Cards, CImg, Card };

  