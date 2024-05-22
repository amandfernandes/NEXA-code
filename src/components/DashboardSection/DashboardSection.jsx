import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowCircleRight } from "react-icons/hi";
import { DSection, Section, H2, Cards, Button, Card } from './Style';
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
          <Link to={"/servicos"}><Button><HiArrowCircleRight size={'100'} /></Button></Link>
      </Cards>
    </Section>

    <Section>
      <H2>ÚLTIMAS ATUALIZAÇÕES</H2>
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