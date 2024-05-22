import React from 'react';
import { HiArrowCircleRight } from "react-icons/hi";
import { DSection, Section, H2, Cards, CImg, Card } from './Style';
import CardSolicitacao from '../CardSolicitacao/CardSolicitacao';
import HistoricoCard from '../HistoricoCard/HistoricoCard';

const DashboardSection = ({ filteredSolicitacao, filteredHistorico }) => (
  <DSection>
    <Section>
      <H2>ÚLTIMAS SOLICITAÇÕES</H2>
      <Cards>
        {filteredSolicitacao.map((item) => (
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
      <H2>HISTÓRICO</H2>
      <Cards>
        {filteredHistorico.map((itens) => (
          <HistoricoCard
            key={itens.time}
            id={itens.id}
            action={itens.action}
            status={itens.status}
            time={itens.time}
            forms={itens.forms}
          />
        ))}
      </Cards>
    </Section>
  </DSection>
);

export default DashboardSection;