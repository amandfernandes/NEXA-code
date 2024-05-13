import React from 'react';
import { HiArrowCircleRight } from "react-icons/hi";
import { DSection, Section, H2, Cards, CImg, Card } from './Style';
import CardSolicitacao from '../CardSolicitacao/CardSolicitacao';

const DashboardSection = ({ filteredData }) => (
  <DSection>
    <Section>
      <H2>ÚLTIMAS SOLICITAÇÕES</H2>
      <Cards>
          {filteredData.map((item) => (
            <CardSolicitacao
              key={item.id}
              id={item.id}
              client={item.client}
              date={item.date}
              status={item.status}
              forms={item.forms}
            />
          ))}
          <CImg>
            <HiArrowCircleRight size={'100'} />
          </CImg>
      </Cards>
    </Section>

    <Section>
      <H2>ÚLTIMAS ATUALIZAÇÕES</H2>
      <Cards>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>       
      </Cards>
    </Section>
  </DSection>
);

export default DashboardSection;
